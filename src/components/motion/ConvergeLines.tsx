'use client'

import { Children, useEffect, useRef, type ReactNode } from 'react'
import { gsap, registerGsap, prefersReducedMotion } from '@/lib/gsap'
import { cn } from '@/lib/cn'

type ConvergeLinesProps = {
  /** One child per line. Even lines enter from the left, odd from the right. */
  children: ReactNode
  className?: string
  /** Rest offset as a percentage of each line's own width. */
  offset?: number
  /** ScrollTrigger bounds for the scrub window. */
  start?: string
  end?: string
  /** Smooth scrub duration in seconds or boolean. */
  scrub?: boolean | number
}

/**
 * Headline whose lines rest outside the frame and converge on centre as the
 * block scrolls up — scrubbed to scroll position, not played once, so the
 * resolve tracks the reader instead of firing at a threshold.
 *
 * Each line is a full-width block: sizing the spans to their own text would
 * leave a short word only fractionally offset and still on screen. Clipping is
 * left to the enclosing section's `overflow-hidden` — masking per line would
 * cut the serif descenders.
 */
export function ConvergeLines({
  children,
  className,
  offset = 120,
  start = 'top bottom',
  end = 'center center',
  scrub = 1.8,
}: ConvergeLinesProps) {
  const rootRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    registerGsap()

    if (prefersReducedMotion()) {
      gsap.set(root.querySelectorAll('[data-converge-line]'), { xPercent: 0 })
      return
    }

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>('[data-converge-line]')

      lines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { xPercent: index % 2 === 0 ? -offset : offset },
          {
            xPercent: 0,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: root,
              start,
              end,
              scrub,
            },
          },
        )
      })
    }, root)

    return () => ctx.revert()
  }, [offset, start, end, scrub])

  return (
    <span ref={rootRef} className={cn('block', className)}>
      {Children.toArray(children).map((line, index) => (
        <span key={index} className="block">
          <span data-converge-line className="block will-change-transform">
            {line}
          </span>
        </span>
      ))}
    </span>
  )
}
