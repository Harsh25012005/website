'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import {
  gsap,
  ScrollTrigger,
  registerGsap,
  prefersReducedMotion,
} from '@/lib/gsap'

let lenisInstance: Lenis | null = null

/** Lets non-React callers (page transitions, anchor links) drive the scroller. */
export function getLenis(): Lenis | null {
  return lenisInstance
}

/**
 * Lenis owns scroll position; GSAP owns the clock. Driving Lenis from GSAP's
 * ticker instead of its own rAF keeps ScrollTrigger's measurements and the
 * tween timeline on the exact same frame — otherwise pinned/parallax elements
 * lag the scroller by one frame and visibly jitter.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const rafRef = useRef<((time: number) => void) | null>(null)

  useEffect(() => {
    registerGsap()

    if (prefersReducedMotion()) {
      // Native scrolling only; ScrollTrigger still runs so content reveals,
      // it just does so without the inertia layer.
      ScrollTrigger.refresh()
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
      wheelMultiplier: 1,
    })
    lenisInstance = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time: number) => lenis.raf(time * 1000)
    rafRef.current = raf
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      if (rafRef.current) gsap.ticker.remove(rafRef.current)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])

  // Route changes swap the DOM under ScrollTrigger; without a reset every
  // trigger keeps the previous page's start/end offsets.
  useEffect(() => {
    lenisInstance?.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 120)
    return () => window.clearTimeout(id)
  }, [pathname])

  return <>{children}</>
}
