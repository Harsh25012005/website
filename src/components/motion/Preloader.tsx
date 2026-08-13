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
import { Logo } from '@/components/ui/Logo'

type PreloaderProps = {
  /** Optional frames for preloader compatibility. */
  images?: { src: string; alt?: string }[]
}

const COLUMNS = 4

/**
 * Once per browsing session. The inline script in `app/layout.tsx` reads the
 * same key before first paint and hides the markup from CSS, which is what stops
 * a repeat visit from flashing the curtain during the seconds before hydration.
 */
const SESSION_KEY = 'preloader-shown'

function hasPlayedThisSession(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) !== null
  } catch {
    // Privacy modes throw on access. Showing the curtain is the safe failure.
    return false
  }
}

function markPlayed() {
  try {
    sessionStorage.setItem(SESSION_KEY, '1')
  } catch {
    /* Non-fatal: the curtain simply plays again next load. */
  }
  // Deliberately does not set the `data-preloader-shown` attribute the inline
  // script sets. That attribute drives a `display: none` rule, and setting it
  // here would hide the curtain in the very frame it started playing. It is a
  // pre-paint flag for the *next* document, and only that script may write it.
}

/**
 * Entry curtain: four full-height columns over the mark and a 0→100 counter,
 * then the columns wipe upward in sequence.
 *
 * Scroll is locked for the duration — otherwise a wheel event during the count
 * leaves the page mid-section when the curtain lifts.
 *
 * Two things keep it off the critical path. It plays only on the first load of a
 * session, so arriving from search costs it once and every page after that is
 * clean. And the whole timeline is ~1.2s rather than ~3.4s: Speed Index scores
 * the area above the visual-completeness curve, and a full-viewport opaque frame
 * holds that curve at zero for exactly as long as it is up. The choreography is
 * unchanged — count, fade, staggered wipe — only its duration is.
 *
 * It does *not* hold LCP back, which is why the duration is the only lever taken
 * here: Chrome does no occlusion testing for paint timing, and the hero h1 is
 * measured as the largest paint while this opaque overlay is still up in front
 * of it. Speed Index is the only metric the curtain is spending.
 *
 * The floor on that spend is not this timeline, though — it is hydration. The
 * curtain is server-rendered and then sits still until React reaches this
 * effect, which on throttled 4G is seconds. Cutting further means giving it a
 * CSS-driven exit the way the hero heading has one, and that trades the count
 * away on exactly the connections that are slow enough to need it.
 */
export function Preloader({ images: _images }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)

  // Deliberately not derived from sessionStorage: the server cannot read it, so
  // seeding state from it would hand React a different first render on the
  // client and trip a hydration mismatch. Server and client both start at
  // `false` and render the same markup; the effect below decides. Nothing
  // flashes in between because the CSS rule keyed off the inline script's
  // attribute has already hidden it.
  const [done, setDone] = useState(false)

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    registerGsap()

    const lenis = getLenis()

    // Every exit from this effect goes through here. The curtain is the only
    // thing on the site that locks scrolling, so a path that forgets to unlock
    // leaves the page frozen with no way back.
    const releaseScroll = () => {
      document.body.style.overflow = ''
      lenis?.start()
    }

    if (prefersReducedMotion() || hasPlayedThisSession()) {
      releaseScroll()
      setDone(true)
      return
    }

    // The preloader is a desktop-first flourish. Every sibling effect (particle
    // field, custom cursor, parallax) is already gated to `pointer: fine` — a
    // touch device pays the Speed Index cost of a full-viewport overlay without
    // getting any of the visual context it was designed alongside. Skip it on
    // coarse-pointer (touch) devices exactly as ParticleField does.
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: coarse)').matches
    ) {
      releaseScroll()
      setDone(true)
      return
    }

    // Written before the timeline, not after it: a reload part-way through the
    // count is still a session that has seen the curtain.
    markPlayed()

    lenis?.stop()
    document.body.style.overflow = 'hidden'

    const ctx = gsap.context(() => {
      const counter = { value: 0 }
      const columns = gsap.utils.toArray<HTMLElement>('[data-preloader-column]')

      const tl = gsap.timeline({
        onComplete: () => {
          releaseScroll()
          setDone(true)
          // Triggers were measured while the page was scroll-locked and the
          // hero was still animating; one pass re-syncs their start positions.
          ScrollTrigger.refresh()
        },
      })

      // The counter is a beat, not a progress bar — it never reported real
      // loading. 0.5s is long enough to read as a count (the `power2.out` ease
      // puts most of the digits in the first third, so the eye registers a run
      // to 100 rather than a jump) and short enough that the first meaningful
      // frame is not held hostage to it.
      tl.to(counter, {
        value: 100,
        duration: 0.5,
        ease: 'power2.out',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = String(Math.round(counter.value))
          }
        },
      })

      // Fade out the overlay content (mark & counter) before lifting columns,
      // overlapping the tail of the count so the two read as one gesture.
      tl.to(
        '[data-preloader-content]',
        {
          opacity: 0,
          duration: 0.18,
          ease: 'power2.out',
        },
        '-=0.06',
      )

      // Columns leave left-to-right so the reveal reads as a wipe, not a fade.
      // `expo.inOut` clears the viewport well before the tween formally ends.
      // The stagger is the wipe — it is the last thing that would be cut — but
      // it is measured against the column duration, so both come down together
      // to keep the same diagonal.
      tl.to(columns, {
        yPercent: -100,
        duration: 0.45,
        stagger: 0.04,
        ease: 'expo.inOut',
      }).to(root, { autoAlpha: 0, duration: 0.01 }, '>-0.01')
    }, root)

    return () => {
      releaseScroll()
      ctx.revert()
    }
  }, [])

  if (done) return null

  return (
    <div
      ref={rootRef}
      data-preloader
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
