'use client'

import { useEffect, useRef, type ElementType, type ReactNode } from 'react'
import {
  gsap,
  ScrollTrigger,
  registerGsap,
  prefersReducedMotion,
} from '@/lib/gsap'
import { cn } from '@/lib/cn'

type RevealProps = {
  children: ReactNode
  /** Rendered element. Defaults to a plain div so it stays layout-neutral. */
  as?: ElementType
  className?: string
  /** Seconds of stagger before this element starts. */
  delay?: number
  /** Travel distance in px. The site uses 24px for blocks, 14px for menu rows. */
  y?: number
  duration?: number
  /** Viewport position that fires the tween, as a ScrollTrigger `start`. */
  start?: string
  /** Replay every time the element re-enters instead of firing once. */
  repeat?: boolean
}

/**
 * The workhorse scroll reveal: fade up on first entry, then unhook. Matches the
 * `opacity:0; translateY(24px)` initial state the reference site server-renders
 * on every animated block.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  className,
  delay = 0,
  y = 24,
  duration = 0.9,
  start = 'top 85%',
  repeat = false,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    registerGsap()

    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: repeat
              ? 'play reverse play reverse'
              : 'play none none none',
            once: !repeat,
          },
        },
      )
    }, el)

    // Late-loading images change document height after the triggers are
    // measured; one refresh on load keeps the start positions honest.
    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)

    return () => {
      window.removeEventListener('load', onLoad)
      ctx.revert()
    }
  }, [delay, y, duration, start, repeat])

  return (
    <Tag ref={ref} data-reveal className={cn(className)}>
      {children}
    </Tag>
  )
}
