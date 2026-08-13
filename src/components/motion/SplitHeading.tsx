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
 * The opacity a heading waits at before its reveal — deliberately not `0`.
 *
 * Chromium skips a layer whose opacity is exactly zero when it collects paint
 * timing, and an opacity/transform reveal is composited, so it never repaints
 * the text to give it a second chance. A heading parked at `0` is simply not an
 * LCP candidate, and the hero h1 is the LCP element on every viewport: it ended
 * up being recorded whenever something unrelated forced a repaint — the webfont
 * swap, seconds later on 4G. One percent is invisible and keeps the element in
 * the paint tree from its first frame. Kept in step with the
 * `[data-split-heading]` rule in `app/layout.tsx`, which is what hides the hero
 * before this component exists.
 */
const HIDDEN_OPACITY = 0.01

/**
 * Above this, the CSS fallback has visibly started and JS must stand down.
 *
 * The check cannot be `> 0` any more: with a non-zero floor that is true from
 * the first frame, so the hero would hand itself to the fallback on every load
 * and the masked reveal would never play anywhere. The reveal's easing clears
 * this within a frame or two of the animation actually starting, so the race is
 * decided the same way it was before — just against the floor instead of zero.
 */
const REVEAL_STARTED_OPACITY = HIDDEN_OPACITY * 2

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
    if (
      immediate &&
      Number(getComputedStyle(el).opacity) > REVEAL_STARTED_OPACITY
    ) {
      return
    }

    // Taking ownership. Cancelling the fallback here — before the awaits below —
    // is what stops it firing halfway through the masked reveal. Note the
    // heading is parked at `HIDDEN_OPACITY`, not at 0: once JS owns the hero it
    // owns it for up to a second, and dropping to a literal zero in that window
    // would put it back outside paint timing on any load where the first frame
    // has not happened yet.
    el.style.animation = 'none'
    gsap.set(el, { opacity: HIDDEN_OPACITY })

    let split: SplitText | null = null
    let ctx: gsap.Context | null = null
    let paintObserver: PerformanceObserver | null = null
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

    // Splitting also has to wait for the document's first contentful frame, and
    // only the hero cares. SplitText's masks translate every line out of its own
    // clip box, so a heading split *before* that frame never paints its text at
    // all — and an element that never paints is never an LCP candidate, however
    // carefully it was kept off a literal zero opacity. Hydration normally lands
    // well after first paint, but on a warm cache (or a Lighthouse run pointed
    // at localhost, where the whole document lands in 140ms and first paint is
    // at 304ms) it beats it comfortably, and then the hero silently hands LCP to
    // whichever small element the scroll reveals bring up next.
    //
    // `buffered` means an already-recorded paint resolves this in a microtask,
    // so on every connection slow enough to matter this costs nothing. A frame
    // that never arrives costs the mask and not the words: the fail-safe below
    // still shows the heading.
    const firstContentfulPaint = () => {
      // A document that starts in a background tab is never given paint timing
      // in the first place, so there is no LCP here to protect and no frame
      // coming to wait for.
      if (document.visibilityState === 'hidden') return Promise.resolve()
      return new Promise<void>((resolve) => {
        try {
          paintObserver = new PerformanceObserver((list) => {
            // `paint` also carries `first-paint`, which is the frame that draws
            // the background — text is not in it.
            const painted = list
              .getEntries()
              .some((entry) => entry.name === 'first-contentful-paint')
            if (!painted) return
            paintObserver?.disconnect()
            resolve()
          })
          paintObserver.observe({ type: 'paint', buffered: true })
        } catch {
          // No paint timing in this browser, which also means no LCP to lose.
          resolve()
        }
      })
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

    // All started here rather than in sequence: the chunk downloads while the
    // fonts settle instead of after them. A rejection here (a chunk that no
    // longer exists after a deploy, most likely) is swallowed rather than left
    // to surface as an unhandled rejection in the console — the fail-safe above
    // has already committed to showing the heading either way.
    void Promise.all([
      loadSplitText(),
      fontsSettled(),
      immediate ? firstContentfulPaint() : undefined,
    ])
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
      // Left connected it would outlive the component until the one FCP that
      // will ever fire — harmless, but Strict Mode mounts every heading twice.
      paintObserver?.disconnect()
      split?.revert()
      ctx?.revert()
    }
  }, [stagger, delay, duration, immediate, start])

  return (
    <Tag
      ref={ref}
      // The CSS fallback owns the hidden state for above-the-fold headings so it
      // can animate off it, and parks them at `HIDDEN_OPACITY` rather than 0 so
      // paint timing still sees them. Deferred ones keep the class and its
      // literal zero: they are below the fold, so they are never an LCP
      // candidate, and they must stay hidden until their trigger fires however
      // long that takes.
      data-split-heading={immediate ? '' : undefined}
      className={cn(!immediate && 'opacity-0', className)}
    >
      {children}
    </Tag>
  )
}
