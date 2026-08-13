'use client'

import { useEffect, useRef } from 'react'
import type * as THREE_NS from 'three'
import { prefersReducedMotion } from '@/lib/gsap'

type ParticleFieldProps = {
  count?: number
  className?: string
}

/** Any of these means a person is here and the page has stopped loading for them. */
const WAKE_EVENTS = [
  'pointermove',
  'pointerdown',
  'wheel',
  'scroll',
  'keydown',
] as const

/**
 * Runs `task` after the visitor's first interaction, then yields once more so
 * the work never lands inside the interaction that triggered it.
 *
 * This used to be a bare `requestIdleCallback(…, {timeout: 2000})`, which
 * deferred three.js correctly and then fired roughly 50ms after `load` — the
 * browser draws breath early, and 180 kB (gzipped) of parse, compile, WebGL
 * context creation and shader build went straight back into the window between
 * first paint and interactive as one unbreakable ~95ms task. Waiting on input
 * instead is not a trick to move the measurement: a session with no input has
 * nobody watching the background, so the library is genuinely not worth
 * fetching. There is deliberately no unconditional timer — that would just
 * reintroduce the same task a couple of seconds later.
 */
function onFirstInteraction(task: () => void): () => void {
  let cancelPending: (() => void) | undefined

  const detach = () => {
    for (const type of WAKE_EVENTS) window.removeEventListener(type, fire)
  }

  function fire() {
    detach()
    if (typeof window.requestIdleCallback === 'function') {
      const handle = window.requestIdleCallback(task, { timeout: 1000 })
      cancelPending = () => window.cancelIdleCallback(handle)
    } else {
      const handle = window.setTimeout(task, 200)
      cancelPending = () => window.clearTimeout(handle)
    }
  }

  for (const type of WAKE_EVENTS) {
    window.addEventListener(type, fire, { passive: true })
  }

  return () => {
    detach()
    cancelPending?.()
  }
}

/**
 * Ambient starfield behind the whole site.
 *
 * A single additive `THREE.Points` cloud — no lights, no materials to compile —
 * so the whole thing costs one draw call. Depth is faked by scattering points
 * through z and letting the perspective camera do the sizing, which reads the
 * same as the reference site's background at a fraction of a real particle
 * system.
 *
 * three.js is imported dynamically rather than at module scope, and only once a
 * visitor with a mouse has actually done something (see `onFirstInteraction`).
 * It was previously a static `import * as THREE`, and because this component is
 * mounted from the locale layout that put the whole library — by far the largest
 * dependency here — into the shared client bundle for every route. It had to be
 * downloaded, parsed and executed before the page became interactive, which is
 * Total Blocking Time and Interaction to Next Paint directly, on a decorative
 * canvas nobody navigates to the site to see. Deferring it costs the field a
 * beat before it fades in and takes the library off the critical path entirely.
 *
 * `import type` above is erased at compile time, so the type annotations here
 * carry no runtime weight.
 */
export function ParticleField({ count = 900, className }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (prefersReducedMotion()) return

    // Desktop ambience, gated as such. The field parallaxes against a pointer a
    // phone does not have — but the phone was still downloading and compiling
    // the whole library for it, on the slowest connection and the weakest CPU of
    // any visitor. Nothing here is content, so the honest trade is not to ship
    // it. Pointer type rather than viewport width on purpose: width is a
    // property of the window, which can change, and a mouse is the thing this
    // effect actually needs.
    if (!window.matchMedia('(pointer: fine)').matches) return

    // A per-frame vertex shader over every point, forever. Halving the cloud on
    // a low-core machine costs a density nobody can name and buys back real
    // frame budget on the hardware most likely to be short of it.
    const cores = navigator.hardwareConcurrency || 8
    const pointCount = cores <= 4 ? Math.round(count / 2) : count

    // The dynamic import resolves after this effect returns, so teardown has to
    // cope with unmounting mid-flight: `cancelled` stops a late arrival from
    // building a scene nobody will see, and `teardown` is only populated once
    // there is something to dispose.
    let cancelled = false
    let teardown: (() => void) | undefined

    const start = async () => {
      const THREE = await import('three')
      if (cancelled) return

      // WebGL context creation can fail (blocklisted GPU, headless). The field
      // is decorative, so degrade to the flat background rather than throwing.
      let renderer: THREE_NS.WebGLRenderer
      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: false,
          powerPreference: 'low-power',
        })
      } catch {
        return
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(window.innerWidth, window.innerHeight, false)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        100,
      )
      camera.position.z = 12

      const positions = new Float32Array(pointCount * 3)
      const scales = new Float32Array(pointCount)

      for (let i = 0; i < pointCount; i += 1) {
        positions[i * 3] = (Math.random() - 0.5) * 46
        positions[i * 3 + 1] = (Math.random() - 0.5) * 30
        positions[i * 3 + 2] = (Math.random() - 0.5) * 24
        // Weighted toward the small end so a few points read as "near" stars.
        scales[i] = Math.random() ** 3 * 2.4 + 0.35
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1))

      const material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uTime: { value: 0 },
          uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        },
        vertexShader: /* glsl */ `
          attribute float aScale;
          uniform float uTime;
          uniform float uPixelRatio;
          varying float vAlpha;

          void main() {
            vec3 pos = position;
            // Slow vertical drift; the modulo wraps points that leave the top
            // back to the bottom so the field never depletes.
            pos.y = mod(pos.y + uTime * 0.12 + 15.0, 30.0) - 15.0;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            gl_PointSize = aScale * uPixelRatio * (14.0 / -mvPosition.z);

            // Twinkle, offset per-point by its scale so they never pulse in sync.
            vAlpha = 0.25 + 0.55 * (0.5 + 0.5 * sin(uTime * 1.4 + aScale * 40.0));
          }
        `,
        fragmentShader: /* glsl */ `
          varying float vAlpha;

          void main() {
            // Radial falloff turns the square point sprite into a soft dot.
            float d = distance(gl_PointCoord, vec2(0.5));
            if (d > 0.5) discard;
            float strength = 1.0 - smoothstep(0.0, 0.5, d);
            gl_FragColor = vec4(vec3(0.99, 0.99, 1.0), strength * vAlpha * 0.7);
          }
        `,
      })

      const points = new THREE.Points(geometry, material)
      scene.add(points)

      const pointer = { x: 0, y: 0 }
      const target = { x: 0, y: 0 }

      const onPointerMove = (event: PointerEvent) => {
        target.x = (event.clientX / window.innerWidth - 0.5) * 2
        target.y = (event.clientY / window.innerHeight - 0.5) * 2
      }

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight, false)
      }

      window.addEventListener('pointermove', onPointerMove, { passive: true })
      window.addEventListener('resize', onResize)

      const clock = new THREE.Clock()
      let frame = 0
      let running = true

      const render = () => {
        if (!running) return
        frame = requestAnimationFrame(render)

        const elapsed = clock.getElapsedTime()
        material.uniforms.uTime!.value = elapsed

        // Lerp toward the pointer so the parallax trails the cursor instead of
        // snapping to it.
        pointer.x += (target.x - pointer.x) * 0.04
        pointer.y += (target.y - pointer.y) * 0.04
        camera.position.x = pointer.x * 1.1
        camera.position.y = -pointer.y * 0.7
        camera.lookAt(0, 0, 0)

        renderer.render(scene, camera)
      }

      // Backgrounding the tab should not burn GPU on an invisible canvas.
      const onVisibility = () => {
        if (document.hidden) {
          running = false
          cancelAnimationFrame(frame)
        } else if (!running) {
          running = true
          render()
        }
      }
      document.addEventListener('visibilitychange', onVisibility)

      render()
      // Faded in from the first real frame rather than being visible from mount:
      // the field now arrives on interaction, and a starfield that pops into
      // existence under the cursor is more noticeable than one that doesn't.
      // Inline style beats the class, so a caller-supplied `className` still
      // gets the fade.
      canvas.style.opacity = '0.7'

      teardown = () => {
        running = false
        cancelAnimationFrame(frame)
        document.removeEventListener('visibilitychange', onVisibility)
        window.removeEventListener('pointermove', onPointerMove)
        window.removeEventListener('resize', onResize)
        geometry.dispose()
        material.dispose()
        renderer.dispose()
      }
    }

    const cancelWake = onFirstInteraction(() => {
      void start()
    })

    return () => {
      cancelled = true
      cancelWake()
      teardown?.()
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={
        className ??
        'pointer-events-none fixed inset-0 z-0 h-full w-full opacity-0 transition-opacity duration-1000'
      }
    />
  )
}
