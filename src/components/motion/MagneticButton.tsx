'use client'

import { useRef, type ReactNode } from 'react'
import { gsap, registerGsap, prefersReducedMotion } from '@/lib/gsap'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'

type MagneticProps = {
  children: ReactNode
  /** How far the element chases the cursor, as a fraction of the offset. */
  strength?: number
  className?: string
}

/**
 * Wraps an interactive element so it leans toward the pointer while hovered
 * and springs back on exit. Disabled on coarse pointers, where there is no
 * hover state to respond to and the transform would only fight taps.
 */
export function MagneticButton({
  children,
  strength = 0.35,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    registerGsap()

    if (
      prefersReducedMotion() ||
      !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    ) {
      return
    }

    const quickX = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
    const quickY = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      quickX((event.clientX - (rect.left + rect.width / 2)) * strength)
      quickY((event.clientY - (rect.top + rect.height / 2)) * strength)
    }

    const onLeave = () => {
      quickX(0)
      quickY(0)
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)

    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      gsap.set(el, { x: 0, y: 0 })
    }
  }, [strength])

  return (
    <span ref={ref} className={className} style={{ display: 'inline-block' }}>
      {children}
    </span>
  )
}
