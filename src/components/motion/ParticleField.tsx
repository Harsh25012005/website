'use client'

import { useRef } from 'react'
import * as THREE from 'three'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { prefersReducedMotion } from '@/lib/gsap'

type ParticleFieldProps = {
  count?: number
  className?: string
}

/**
 * Ambient starfield behind the whole site.
 *
 * A single additive `THREE.Points` cloud — no lights, no materials to compile —
 * so the whole thing costs one draw call. Depth is faked by scattering points
 * through z and letting the perspective camera do the sizing, which reads the
 * same as the reference site's background at a fraction of a real particle
 * system.
 */
export function ParticleField({ count = 900, className }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useIsomorphicLayoutEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (prefersReducedMotion()) return

    // WebGL context creation can fail (blocklisted GPU, headless). The field is
    // decorative, so degrade to the flat background rather than throwing.
    let renderer: THREE.WebGLRenderer
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

    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)

    for (let i = 0; i < count; i += 1) {
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

    return () => {
      running = false
      cancelAnimationFrame(frame)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', onResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={
        className ??
        'pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70'
      }
    />
  )
}
