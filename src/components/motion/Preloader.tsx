'use client'

import { useRef, useState } from 'react'
import {
  gsap,
  ScrollTrigger,
  registerGsap,
  prefersReducedMotion,
} from '@/lib/gsap'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { getLenis } from './SmoothScroll'
import { site } from '@/content/site'
import { Logo } from '@/components/ui/Logo'

type PreloaderProps = {
  /** Optional frames for preloader compatibility. */
  images?: { src: string; alt?: string }[]
}

const COLUMNS = 4

/**
 * Entry curtain: four full-height columns over centered name text and a
 * 0→100 counter, then the columns wipe upward in sequence.
 *
 * Scroll is locked for the duration — otherwise a wheel event during the count
 * leaves the page mid-section when the curtain lifts.
 */
export function Preloader({ images }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const [done, setDone] = useState(false)

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    registerGsap()

    if (prefersReducedMotion()) {
      setDone(true)
      return
    }

    const lenis = getLenis()
    lenis?.stop()
    document.body.style.overflow = 'hidden'

    const ctx = gsap.context(() => {
      const counter = { value: 0 }
      const columns = gsap.utils.toArray<HTMLElement>('[data-preloader-column]')

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = ''
          lenis?.start()
          setDone(true)
          ScrollTrigger.refresh()
        },
      })

      // Counter runs together for a fixed 2.1s beat
      tl.to(counter, {
        value: 100,
        duration: 2.1,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = String(Math.round(counter.value))
          }
        },
      })

      // Fade out the overlay content (name text & counter) before lifting columns
      tl.to('[data-preloader-content]', {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.out',
      })

      // Columns leave left-to-right so the reveal reads as a wipe, not a fade.
      tl.to(columns, {
        yPercent: -100,
        duration: 1.05,
        stagger: 0.07,
        ease: 'expo.inOut',
      }).to(root, { autoAlpha: 0, duration: 0.01 }, '>-0.01')
    }, root)

    return () => {
      document.body.style.overflow = ''
      lenis?.start()
      ctx.revert()
    }
  }, [])

  if (done) return null

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9000]"
    >
      <div className="absolute inset-0 flex">
        {Array.from({ length: COLUMNS }).map((_, index) => (
          <div
            key={index}
            data-preloader-column
            className="h-full flex-1 bg-white"
          />
        ))}
      </div>

      <div
        data-preloader-content
        className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center"
      >
        <Logo className="h-16 w-auto text-black md:h-24" />
      </div>

      <div
        data-preloader-content
        className="pointer-events-none absolute right-10 bottom-10 font-serif text-[clamp(28px,3vw,44px)] leading-none font-light tracking-[-0.02em] text-black tabular-nums md:right-[2.75rem] md:bottom-[2.75rem]"
      >
        <span ref={counterRef}>0</span>
        <span>%</span>
      </div>
    </div>
  )
}
