'use client'

import { useRef } from 'react'
import { gsap, registerGsap, prefersReducedMotion } from '@/lib/gsap'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'

const HOVER_TARGETS = 'a, button, [role="button"], input, textarea, select'
const PROJECT_TARGETS = '[data-cursor-label]'

/**
 * Single dot glued to the pointer. Grows into a plain, borderless circle over
 * generic interactive elements, and swaps to a labelled bubble (e.g. "View
 * project") over anything tagged `data-cursor-label` — project cards mainly.
 *
 * Uses delegated `mouseover`/`mouseout` on `document` instead of binding to
 * each target directly — the work grid, filters and menu swap DOM nodes in
 * and out constantly, and delegation means there is nothing to re-bind.
 * Disabled on touch/coarse pointers and under reduced motion.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const label = labelRef.current
    if (!dot || !label) return

    registerGsap()
    document.documentElement.classList.add('has-custom-cursor')
    gsap.set(dot, { xPercent: -50, yPercent: -50 })

    const setX = gsap.quickTo(dot, 'x', { duration: 0.35, ease: 'power3.out' })
    const setY = gsap.quickTo(dot, 'y', { duration: 0.35, ease: 'power3.out' })

    const onMove = (event: PointerEvent) => {
      setX(event.clientX)
      setY(event.clientY)
    }

    const restDot = () => {
      gsap.to(dot, {
        width: 10,
        height: 10,
        backgroundColor: 'rgba(253,253,253,1)',
        duration: 0.35,
        ease: 'power3.out',
      })
      gsap.to(label, { autoAlpha: 0, duration: 0.15, overwrite: true })
    }

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const projectEl = target.closest<HTMLElement>(PROJECT_TARGETS)
      if (projectEl) {
        label.textContent = projectEl.dataset.cursorLabel ?? ''
        gsap.to(dot, {
          width: 112,
          height: 112,
          backgroundColor: '#ffffff',
          duration: 0.4,
          ease: 'power3.out',
        })
        gsap.to(label, { autoAlpha: 1, duration: 0.25, overwrite: true })
        return
      }

      gsap.to(label, { autoAlpha: 0, duration: 0.15, overwrite: true })

      if (target.closest(HOVER_TARGETS)) {
        gsap.to(dot, {
          width: 44,
          height: 44,
          backgroundColor: 'rgba(253,253,253,0.9)',
          duration: 0.35,
          ease: 'power3.out',
        })
      }
    }

    const onOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const related = event.relatedTarget as HTMLElement | null
      const leftInteractive = target.closest(HOVER_TARGETS) ?? target.closest(PROJECT_TARGETS)
      if (!leftInteractive) return
      // Moving between a nested child and its interactive parent isn't a
      // real exit — only reset once the pointer leaves the whole element.
      if (related && leftInteractive.contains(related)) return
      restDot()
    }

    const onDown = () => gsap.to(dot, { scale: 0.8, duration: 0.2 })
    const onUp = () => gsap.to(dot, { scale: 1, duration: 0.2 })
    const onLeaveWindow = () => gsap.to(dot, { autoAlpha: 0, duration: 0.2 })
    const onEnterWindow = () => gsap.to(dot, { autoAlpha: 1, duration: 0.2 })

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    document.addEventListener('mouseleave', onLeaveWindow)
    document.addEventListener('mouseenter', onEnterWindow)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.removeEventListener('mouseleave', onLeaveWindow)
      document.removeEventListener('mouseenter', onEnterWindow)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[999] hidden md:block"
    >
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-2.5 w-2.5 rounded-full bg-[var(--color-text)] opacity-0 [.has-custom-cursor_&]:opacity-100"
      >
        <span
          ref={labelRef}
          className="absolute inset-0 flex items-center justify-center text-center text-[13px] font-medium tracking-[0.02em] text-black opacity-0"
        />
      </div>
    </div>
  )
}
