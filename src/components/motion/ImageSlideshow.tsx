'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { gsap, registerGsap, prefersReducedMotion } from '@/lib/gsap'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { cn } from '@/lib/cn'

type SlideshowImage = { src: string; alt?: string }

type ImageSlideshowProps = {
  images: SlideshowImage[]
  className?: string
  /** Seconds each frame holds before crossfading. */
  interval?: number
  sizes?: string
  priority?: boolean
  /** Renders the pause/play affordance in the lower-right of the frame. */
  withControls?: boolean
  pauseLabel?: string
  playLabel?: string
}

/**
 * Crossfading image stack. All frames are stacked and opacity-tweened rather
 * than swapped, so the browser never re-decodes mid-transition and the fade
 * stays on the compositor.
 */
export function ImageSlideshow({
  images,
  className,
  interval = 3.2,
  sizes = '100vw',
  priority = false,
  withControls = false,
  pauseLabel = 'Pause slideshow',
  playLabel = 'Play slideshow',
}: ImageSlideshowProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const [paused, setPaused] = useState(false)

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current
    if (!root || images.length < 2) return
    registerGsap()
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const frames = gsap.utils.toArray<HTMLElement>('[data-slide]')
      const tl = gsap.timeline({ repeat: -1 })

      frames.forEach((frame, index) => {
        const next = frames[(index + 1) % frames.length] as HTMLElement
        tl.to({}, { duration: interval })
          .to(next, { opacity: 1, duration: 0.8, ease: 'power2.inOut' })
          .to(frame, { opacity: 0, duration: 0.8, ease: 'power2.inOut' }, '<')
      })

      timelineRef.current = tl
    }, root)

    return () => {
      timelineRef.current = null
      ctx.revert()
    }
  }, [images.length, interval])

  const toggle = () => {
    const tl = timelineRef.current
    if (!tl) return
    if (tl.paused()) {
      tl.play()
      setPaused(false)
    } else {
      tl.pause()
      setPaused(true)
    }
  }

  return (
    <div ref={rootRef} className={cn('relative overflow-hidden', className)}>
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          data-slide
          className="absolute inset-0"
          style={{ opacity: index === 0 ? 1 : 0 }}
        >
          <Image
            src={image.src}
            alt={index === 0 ? (image.alt ?? '') : ''}
            fill
            sizes={sizes}
            priority={priority && index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {withControls && images.length > 1 ? (
        <div className="pointer-events-none absolute right-4 bottom-4 md:right-6 md:bottom-6">
          <button
            type="button"
            onClick={toggle}
            aria-label={paused ? playLabel : pauseLabel}
            className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-opacity duration-200 hover:opacity-80 active:scale-95"
          >
            {paused ? (
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                <path d="M3 1.5 12 7 3 12.5Z" fill="currentColor" />
              </svg>
            ) : (
              <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden>
                <rect x="1" y="1" width="3.2" height="12" fill="currentColor" />
                <rect
                  x="7.8"
                  y="1"
                  width="3.2"
                  height="12"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
        </div>
      ) : null}
    </div>
  )
}
