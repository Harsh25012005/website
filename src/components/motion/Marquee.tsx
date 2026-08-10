'use client'

import { useRef, type ReactNode } from 'react'
import { gsap, registerGsap, prefersReducedMotion } from '@/lib/gsap'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { cn } from '@/lib/cn'

type MarqueeProps = {
  children: ReactNode
  /** Seconds for one full pass of a single copy. */
  speed?: number
  reverse?: boolean
  className?: string
}

/**
 * Infinite horizontal ticker. The track holds two identical copies and loops
 * by -50%, so the seam lands exactly where the second copy begins and the
 * wrap is invisible.
 */
export function Marquee({
  children,
  speed = 24,
  reverse = false,
  className,
}: MarqueeProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const track = trackRef.current
    if (!track) return
    registerGsap()
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        track,
        { xPercent: reverse ? -50 : 0 },
        {
          xPercent: reverse ? 0 : -50,
          duration: speed,
          ease: 'none',
          repeat: -1,
        },
      )
    }, track)

    return () => ctx.revert()
  }, [speed, reverse])

  return (
    <div ref={rootRef} className={cn('overflow-hidden', className)}>
      <div ref={trackRef} className="flex w-max">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
