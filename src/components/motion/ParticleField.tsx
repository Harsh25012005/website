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
 * Ceiling on how long the browser may keep deferring the start once both gates
 * below have opened. Generous on purpose: by then the document has loaded and
 * the visitor has interacted, so there is no window left for this to land in
 * and no reason to hurry the thread.
 */
const IDLE_TIMEOUT_MS = 3000

/** Below this, a machine has better uses for a decorative rAF loop. */
const MIN_CORES = 4

/** Resting opacity of the field. Faded to from 0 by the canvas's transition. */
const FIELD_OPACITY = 0.7

/**
 * Runs `task` once three things are true, in this order: the document has
 * finished loading, a visitor has actually done something, and the thread is
 * idle.
 *
 * The interaction gate is the one that keeps this out of the load metrics, and
 * it is not a trick to move the measurement — a session with nobody moving a
 * mouse has nobody watching the background, so the library is genuinely not
 * worth fetching. Verified against the deployed build: a cold load with no input
 * requests the three.js chunks zero times.
 *
 * The `load` gate covers the case the interaction gate does not. On a fast
 * desktop the page paints at ~0.5s and is interactive at ~0.7s, so a real
 * visitor who reaches for the mouse at 0.6s used to drop ~180 kB (gzipped) of
 * parse, compile, WebGL context creation and shader build straight into the
 * window between first paint and interactive, as one unbreakable task — exactly
 * what the deferral exists to prevent, just triggered by a human rather than a
 * timer. Waiting for `load` as well means the work can only begin after the page
 * has finished what it came to do.
 *
 * There is still deliberately no unconditional timer. `load` on its own would be
 * the original `requestIdleCallback(…, {timeout: 2000})` with extra steps.
 */
function whenSafeToStart(task: () => void): () => void {
  let loaded = document.readyState === 'complete'
  let woken = false
  let cancelPending: (() => void) | undefined

  const detachWake = () => {
    for (const type of WAKE_EVENTS) window.removeEventListener(type, onWake)
  }

  const maybeStart = () => {
    if (!loaded || !woken) return
    if (typeof window.requestIdleCallback === 'function') {
      const handle = window.requestIdleCallback(task, {
        timeout: IDLE_TIMEOUT_MS,
      })
      cancelPending = () => window.cancelIdleCallback(handle)
    } else {
      // Older Safari. A short timeout is the closest available approximation;
      // both gates have already opened, so the thread is quiet either way.
      const handle = window.setTimeout(task, 200)
      cancelPending = () => window.clearTimeout(handle)
    }
  }

  function onWake() {
    woken = true
    detachWake()
    maybeStart()
  }

  function onLoad() {
    loaded = true
    maybeStart()
  }

  for (const type of WAKE_EVENTS) {
    window.addEventListener(type, onWake, { passive: true })
  }
  if (!loaded) window.addEventListener('load', onLoad, { once: true })

  return () => {
    detachWake()
    window.removeEventListener('load', onLoad)
    cancelPending?.()
  }
}

/**
 * Hands the thread back between setup phases.
 *
 * Deferring the whole build to one idle callback only moves the long task; it
 * does not shorten it, and a task the browser cannot interrupt still costs the
 * visitor an unresponsive click if they happen to make one. Splitting the build
 * at its four natural seams — module execution, context creation, buffer
 * construction, first draw — keeps every individual task well under the 50ms
 * that makes one "long" in the first place.
 */
function yieldToBrowser(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(() => resolve(), { timeout: 300 })
    } else {
      window.setTimeout(resolve, 0)
    }
  })
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
 * visitor with a mouse has done something on a page that has finished loading
 * (see `whenSafeToStart`). It was previously a static `import * as THREE`, and
 * because this component is mounted from the locale layout that put the whole
 * library — by far the largest dependency here — into the shared client bundle
 * for every route. It had to be downloaded, parsed and executed before the page
 * became interactive, which is Total Blocking Time and Interaction to Next Paint
 * directly, on a decorative canvas nobody navigates to the site to see.
 * Deferring it costs the field a beat before it fades in and takes the library
 * off the critical path entirely.
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

    // Two tiers on core count. At four or fewer — an old dual-core with
    // hyperthreading, a low-end Chromebook — the field is skipped outright: a
    // per-frame vertex shader over every point plus a permanent rAF loop is a
    // fixed tax on the machines least able to pay it, for an effect that carries
    // no information. Just above that the cloud is halved, which costs a density
    // nobody can name. This is the same judgement as the `pointer: fine` gate,
    // applied to CPU instead of input.
    const cores = navigator.hardwareConcurrency || 8
    if (cores <= MIN_CORES) return
    const pointCount = cores <= 6 ? Math.round(count / 2) : count

    // The dynamic import and the yields between setup phases all resolve after
    // this effect returns, so teardown has to cope with unmounting mid-flight.
    // `cancelled` stops a late arrival from building a scene nobody will see;
    // `disposers` is unwound in reverse so a half-built field still gives its
    // WebGL context back.
    let cancelled = false
    const disposers: (() => void)[] = []
    const dispose = () => {
      while (disposers.length) disposers.pop()?.()
    }

    const start = async () => {
      // Phase 1 — the library. The largest task in the sequence by an order of
      // magnitude, and the browser owns it; all we control is when it runs.
      const THREE = await import('three')
      if (cancelled) return
      await yieldToBrowser()
      if (cancelled) return

      // Phase 2 — the WebGL context. Creation can fail (blocklisted GPU,
      // headless). The field is decorative, so degrade to the flat background
      // rather than throwing.
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
      disposers.push(() => renderer.dispose())

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(window.innerWidth, window.innerHeight, false)

      await yieldToBrowser()
      if (cancelled) return

      // Phase 3 — scene and buffers.
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
      disposers.push(() => {
        geometry.dispose()
        material.dispose()
      })

      await yieldToBrowser()
      if (cancelled) return

      // Phase 4 — input, and the first draw. The draw is deliberately last and
      // alone: it is where the driver compiles and links the shader program.
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
      window.addEventListener('resize', onResize, { passive: true })

      const clock = new THREE.Clock()
      let frame = 0
      let running = false
      let elapsed = 0
      let painted = false

      const tick = () => {
        frame = requestAnimationFrame(tick)

        // Time is accumulated rather than read from the clock, so a pause
        // contributes nothing to it — see `sync`.
        elapsed += clock.getDelta()
        material.uniforms.uTime!.value = elapsed

        // Lerp toward the pointer so the parallax trails the cursor instead of
        // snapping to it.
        pointer.x += (target.x - pointer.x) * 0.04
        pointer.y += (target.y - pointer.y) * 0.04
        camera.position.x = pointer.x * 1.1
        camera.position.y = -pointer.y * 0.7
        camera.lookAt(0, 0, 0)

        renderer.render(scene, camera)

        if (!painted) {
          painted = true
          // Faded in from the first real frame rather than from mount: the field
          // arrives on interaction, and a starfield that pops into existence
          // under the cursor is more noticeable than one that doesn't. Inline
          // style beats the class, so a caller-supplied `className` still gets
          // the fade.
          canvas.style.opacity = String(FIELD_OPACITY)
        }
      }

      // One place decides whether the loop runs, from every reason it might not.
      // Two independent handlers each flipping their own flag is how a loop ends
      // up permanently parked: the tab is hidden, the canvas scrolls away, the
      // tab comes back, and whichever handler ran last wins.
      let tabVisible = !document.hidden
      let onScreen = true

      const sync = () => {
        const shouldRun = tabVisible && onScreen
        if (shouldRun === running) return
        running = shouldRun

        if (!running) {
          cancelAnimationFrame(frame)
          return
        }

        // Swallow the paused interval. `Clock` measures wall time, so resuming
        // after a minute in a background tab would otherwise advance `uTime` by
        // a minute in a single frame and teleport the whole field to a new
        // arrangement in front of someone who just switched back to it.
        clock.getDelta()
        frame = requestAnimationFrame(tick)
      }

      // Backgrounding the tab should not burn GPU on an invisible canvas.
      const onVisibility = () => {
        tabVisible = !document.hidden
        sync()
      }
      document.addEventListener('visibilitychange', onVisibility)

      // The default class pins the canvas to the viewport, so for the site's own
      // usage this observer reports `true` once and never fires again. It is here
      // because `className` is a prop: any caller who places the field in normal
      // flow gets a loop that stops when it scrolls past, instead of one that
      // renders 900 points a frame forever at the top of a page nobody is
      // looking at any more.
      const observer = new IntersectionObserver((entries) => {
        onScreen = entries.some((entry) => entry.isIntersecting)
        sync()
      })
      observer.observe(canvas)

      disposers.push(() => {
        running = false
        cancelAnimationFrame(frame)
        observer.disconnect()
        document.removeEventListener('visibilitychange', onVisibility)
        window.removeEventListener('pointermove', onPointerMove)
        window.removeEventListener('resize', onResize)
      })

      sync()
    }

    const cancelWait = whenSafeToStart(() => {
      void start()
    })

    return () => {
      cancelled = true
      cancelWait()
      dispose()
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
