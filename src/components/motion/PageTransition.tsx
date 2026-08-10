'use client'

import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap, registerGsap, prefersReducedMotion } from '@/lib/gsap'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'

const COLUMNS = 4

/**
 * Route-change curtain: four columns sweep up across the viewport as the new
 * page mounts.
 *
 * App Router swaps the tree before any exit animation could run, so this plays
 * purely on entry — the columns start covering the screen and lift off. That
 * reads identically to a full in/out wipe without needing to intercept and
 * delay navigation.
 */
export function PageTransition() {
  const rootRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    registerGsap()

    if (prefersReducedMotion()) {
      gsap.set(root, { autoAlpha: 0 })
      return
    }

    const ctx = gsap.context(() => {
      const columns = gsap.utils.toArray<HTMLElement>(
        '[data-transition-column]',
      )

      gsap
        .timeline()
        .set(root, { autoAlpha: 1, pointerEvents: 'none' })
        .set(columns, { yPercent: 0 })
        .to(columns, {
          yPercent: -100,
          duration: 0.85,
          stagger: 0.06,
          ease: 'expo.inOut',
        })
        .set(root, { autoAlpha: 0 })
    }, root)

    return () => ctx.revert()
  }, [pathname])

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[8000] flex opacity-0"
    >
      {Array.from({ length: COLUMNS }).map((_, index) => (
        <div
          key={index}
          data-transition-column
          className="h-full flex-1 bg-white"
        />
      ))}
    </div>
  )
}
