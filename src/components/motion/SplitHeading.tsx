'use client'

import { useRef, type ElementType, type ReactNode } from 'react'
import {
  gsap,
  loadSplitText,
  registerGsap,
  prefersReducedMotion,
  type SplitText,
} from '@/lib/gsap'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { cn } from '@/lib/cn'

type SplitHeadingProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Per-line offset. Lower values read as one block, higher as a cascade. */
  stagger?: number
  delay?: number
  duration?: number
  /** Skip ScrollTrigger and play immediately — used for above-the-fold headings. */
  immediate?: boolean
  start?: string
}

/**
 * How long an above-the-fold heading may wait for `document.fonts.ready` before
 * splitting against whatever metrics it has. Sized to sit inside the CSS
 * fallback's window, so the two never race each other.
 */
const FONTS_TIMEOUT_MS = 500

/**
 * Backstop for the whole setup — dynamic chunk, fonts, a busy main thread. Tight
 * for the hero, where a stall is a blank LCP element; loose everywhere else,
 * where firing early would just spend a section's scroll reveal off-screen.
 */
const SETUP_TIMEOUT_MS = { immediate: 1000, deferred: 8000 }

/**
 * Masked line-by-line heading reveal. SplitText wraps each visual line in a
 * clipping div, so the type rises out of nothing rather than fading in place —
 * the effect the hero and every section title use.
 *
 * Lines are recomputed on resize because a reflow changes where lines break;
 * without `autoSplit` the mask boundaries would sit mid-word after a rotate.
 *
 * ## Why an `immediate` heading may refuse to animate
 *
 * The hero h1 is the LCP element on every viewport. Rendering it hidden so it
 * can be masked meant it did not exist as an LCP candidate until hydration, the
 * webfont *and* the GSAP chunk had all landed — 5.7s on throttled 4G. So an
 * `immediate` heading now carries a pure-CSS reveal (`split-heading-in`, defined
 * in `app/layout.tsx`) that fires from the HTML alone about 0.4s after the
 * document paints.
 *
 * That makes the reveal conditional rather than guaranteed: if JS wins the race,
 * this takes the animation over and the designed per-line mask plays. If the CSS
 * fallback got there first the text is already on screen and being read, and
 * pulling it back behind a mask to re-reveal it would be a worse experience than
 * not animating at all. Fast connections keep the choreography; slow ones trade
 * it for legible text seconds earlier.
 */
export function SplitHeading({
  children,
  as: Tag = 'h2',
  className,
  stagger = 0.08,
  delay = 0,
  duration = 1.1,
  immediate = false,
  start = 'top 85%',
}: SplitHeadingProps) {
  const ref = useRef<HTMLElement>(null)

  useIsomorphicLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    registerGsap()

    if (prefersReducedMotion()) {
      el.style.animation = 'none'
      gsap.set(el, { opacity: 1 })
      return
    }

    // The CSS fallback has already started, so this text is on screen right now.
    // Let the animation finish on its own; there is nothing below worth a flash.
    if (immediate && Number(getComputedStyle(el).opacity) > 0) return

    // Taking ownership. Cancelling the fallback here — before the awaits below —
    // is what stops it firing halfway through the masked reveal.
    el.style.animation = 'none'
    gsap.set(el, { opacity: 0 })

    let split: SplitText | null = null
    let ctx: gsap.Context | null = null
    let settled = false

    // Splitting before the webfont resolves measures line breaks against the
    // fallback face. The masks are then locked to those widths and the real
    // (wider) face reflows inside them — text wraps out of its own clip box.
    // `document.fonts.ready` is the only reliable signal that metrics are final,
    // but on a slow connection it resolves long after the hero should have been
    // readable, and it is the single longest link in that chain.
    //
    // For the hero it is capped: `autoSplit` registers a `loadingdone` listener
    // on `document.fonts` (SplitText.js:283) and re-splits when the real face
    // arrives, so a mask measured early is corrected rather than left broken.
    // Section headings are below the fold with no one waiting on them, so they
    // still wait for the exact metrics.
    const fontsSettled = () => {
      if (document.fonts?.status === 'loaded') return Promise.resolve()
      if (!document.fonts) return Promise.resolve()
      if (!immediate) return document.fonts.ready.then(() => undefined)
      return Promise.race([
        document.fonts.ready.then(() => undefined),
        new Promise<void>((resolve) =>
          window.setTimeout(resolve, FONTS_TIMEOUT_MS),
        ),
      ])
    }

    const failSafe = window.setTimeout(
      () => {
        if (settled) return
        settled = true
        // Nothing arrived in time. The words matter more than the way they
        // arrive, so fade the block in unmasked and leave it alone.
        gsap.to(el, { opacity: 1, duration: 0.5 })
      },
      immediate ? SETUP_TIMEOUT_MS.immediate : SETUP_TIMEOUT_MS.deferred,
    )

    // Both are started here rather than in sequence: the chunk downloads while
    // the fonts settle instead of after them. A rejection here (a chunk that no
    // longer exists after a deploy, most likely) is swallowed rather than left
    // to surface as an unhandled rejection in the console — the fail-safe above
    // has already committed to showing the heading either way.
    void Promise.all([loadSplitText(), fontsSettled()])
      .then(([SplitTextCtor]) => {
        if (settled) return
        settled = true
        window.clearTimeout(failSafe)

        ctx = gsap.context(() => {
          gsap.set(el, { opacity: 1 })

          let reveal: gsap.core.Tween | undefined

          split = SplitTextCtor.create(el, {
            type: 'lines',
            mask: 'lines',
            linesClass: 'split-line',
            autoSplit: true,
            onSplit(self) {
              // A re-split rebuilds the masks — on resize, and for the hero also
              // when the webfont lands mid-reveal. Replaying the rise on a
              // heading that has already finished arriving reads as a glitch, so
              // a completed immediate reveal is left where it is.
              if (immediate && reveal?.progress() === 1) return

              reveal = gsap.from(self.lines, {
                yPercent: 110,
                duration,
                stagger,
                delay,
                ...(immediate
                  ? {}
                  : {
                      scrollTrigger: { trigger: el, start, once: true },
                    }),
              })
              return reveal
            },
          })
        }, el)
      })
      .catch(() => {
        /* The fail-safe timer owns the outcome from here. */
      })

    return () => {
      settled = true
      window.clearTimeout(failSafe)
      split?.revert()
      ctx?.revert()
    }
  }, [stagger, delay, duration, immediate, start])

  return (
    <Tag
      ref={ref}
      // The CSS fallback owns the initial `opacity: 0` for above-the-fold
      // headings so it can animate off it. Deferred ones keep the class: they
      // must stay hidden until their trigger fires, however long that takes.
      data-split-heading={immediate ? '' : undefined}
      className={cn(!immediate && 'opacity-0', className)}
    >
      {children}
    </Tag>
  )
}
