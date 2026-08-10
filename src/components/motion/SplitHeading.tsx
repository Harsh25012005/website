'use client'

import { useRef, type ElementType, type ReactNode } from 'react'
import { gsap, SplitText, registerGsap, prefersReducedMotion } from '@/lib/gsap'
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
 * Masked line-by-line heading reveal. SplitText wraps each visual line in a
 * clipping div, so the type rises out of nothing rather than fading in place —
 * the effect the hero and every section title use.
 *
 * Lines are recomputed on resize because a reflow changes where lines break;
 * without `autoSplit` the mask boundaries would sit mid-word after a rotate.
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
      gsap.set(el, { opacity: 1 })
      return
    }

    let split: SplitText | null = null
    let ctx: gsap.Context | null = null
    let cancelled = false

    const build = () => {
      if (cancelled) return

      ctx = gsap.context(() => {
        gsap.set(el, { opacity: 1 })

        split = SplitText.create(el, {
          type: 'lines',
          mask: 'lines',
          linesClass: 'split-line',
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.lines, {
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
          },
        })
      }, el)
    }

    // Splitting before the webfont resolves measures line breaks against the
    // fallback face. The masks are then locked to those widths, and the real
    // (wider) face reflows inside them — text wraps out of its own clip box.
    // `document.fonts.ready` is the only reliable signal that metrics are final.
    if (document.fonts?.status === 'loaded') {
      build()
    } else {
      document.fonts.ready.then(build)
    }

    return () => {
      cancelled = true
      split?.revert()
      ctx?.revert()
    }
  }, [stagger, delay, duration, immediate, start])

  return (
    <Tag ref={ref} className={cn('opacity-0', className)}>
      {children}
    </Tag>
  )
}
