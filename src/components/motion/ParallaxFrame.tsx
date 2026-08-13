'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { gsap, registerGsap, prefersReducedMotion } from '@/lib/gsap'
import { cn } from '@/lib/cn'

type ParallaxFrameProps = {
  children: ReactNode
  className?: string
  /**
   * Total travel in px across the full scroll pass. The reference site uses
   * ~30–50px depending on the frame's height.
   */
  distance?: number
}

/**
 * Clipped image frame with an oversized inner layer that drifts as the frame
 * crosses the viewport.
 *
 * The inner layer is 110% tall and offset by -5% so the image can move ±5%
 * without ever exposing an edge — the same trick the reference markup bakes
 * into its static HTML.
 */
export function ParallaxFrame({
  children,
  className,
  distance = 40,
}: ParallaxFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const frame = frameRef.current
    const inner = innerRef.current
    if (!frame || !inner) return
    registerGsap()

    if (prefersReducedMotion()) {
      gsap.set(inner, { y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { y: distance },
        {
          y: -distance,
          ease: 'none',
          scrollTrigger: {
            trigger: frame,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    }, frame)

    return () => ctx.revert()
  }, [distance])

  return (
    <div
      ref={frameRef}
      className={cn('img-skeleton overflow-hidden', className)}
    >
      <div ref={innerRef} className="relative -mt-[5%] h-[110%] w-full">
        {children}
      </div>
    </div>
  )
}
