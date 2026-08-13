'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap, registerGsap, prefersReducedMotion } from '@/lib/gsap'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'

const HOVER_TARGETS = 'a, button, [role="button"], input, textarea, select'
const PROJECT_TARGETS = '[data-cursor-label]'

type Mode = 'rest' | 'hover' | 'project'

const SIZES: Record<Mode, { size: number; bg: string }> = {
  rest: { size: 10, bg: 'rgba(253,253,253,1)' },
  hover: { size: 44, bg: 'rgba(253,253,253,0.9)' },
  project: { size: 112, bg: '#ffffff' },
}

/**
 * Single dot glued to the pointer. Grows into a plain, borderless circle over
 * generic interactive elements, and swaps to a labelled bubble (e.g. "View
 * project") over anything tagged `data-cursor-label` — project cards mainly.
 *
 * Mode is derived from `document.elementFromPoint` on every pointer move
 * instead of tracked via `mouseover`/`mouseout` pairs. The event-pair approach
 * left the dot stuck at its grown size whenever an enter/exit didn't fire on
 * the element we expected — a pinned/overlapping layer mid-scroll, or a
 * project card unmounting under the pointer on navigation — which is exactly
 * the "giant circle floating over content" glitch. Re-deriving the mode every
 * frame means there is no stale state to get stuck in; it always reflects
 * whatever is actually under the cursor right now.
 *
 * On a coarse pointer there is no cursor to replace, so nothing renders at all.
 * The markup used to ship on every device and merely hide itself with
 * `md:hidden` — which still costs a phone the hydration of the tree and a client
 * component boundary for an element it can never see. The gate is a state flag
 * rather than a check inside render because the server cannot know the pointer
 * type; starting at `false` keeps the first client render identical to the
 * server's, and the overlay is `fixed` and decorative so appearing a frame later
 * shifts nothing.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (!enabled) return

    const dot = dotRef.current
    const label = labelRef.current
    if (!dot || !label) return

    registerGsap()
    document.documentElement.classList.add('has-custom-cursor')
    gsap.set(dot, { xPercent: -50, yPercent: -50 })

    const setX = gsap.quickTo(dot, 'x', { duration: 0.35, ease: 'power3.out' })
    const setY = gsap.quickTo(dot, 'y', { duration: 0.35, ease: 'power3.out' })

    let mode: Mode = 'rest'

    const applyMode = (next: Mode, labelText: string) => {
      if (next === mode) return
      mode = next
      const { size, bg } = SIZES[next]
      gsap.to(dot, {
        width: size,
        height: size,
        backgroundColor: bg,
        duration: next === 'rest' ? 0.35 : 0.4,
        ease: 'power3.out',
        overwrite: 'auto',
      })
      label.textContent = labelText
      gsap.to(label, {
        autoAlpha: next === 'project' ? 1 : 0,
        duration: next === 'project' ? 0.25 : 0.15,
        overwrite: 'auto',
      })
    }

    // `elementFromPoint` forces a synchronous style and layout flush, and a
    // pointer can emit well over 100 events a second — often while ScrollTrigger
    // is mid-scrub. Re-deriving the mode once per frame instead keeps the
    // property that made this approach worth having (no stale enter/exit state,
    // ever) while capping the flushes at the frame rate. The dot itself still
    // tracks every single event, so it stays glued to the pointer.
    let pending = 0
    let lastX = 0
    let lastY = 0

    const deriveMode = () => {
      pending = 0

      // The cursor's own overlay is pointer-events-none, so this always
      // reports the real page element under the pointer, never itself.
      const hit = document.elementFromPoint(lastX, lastY)
      if (!hit) {
        applyMode('rest', '')
        return
      }

      const projectEl = hit.closest<HTMLElement>(PROJECT_TARGETS)
      if (projectEl) {
        applyMode('project', projectEl.dataset.cursorLabel ?? '')
        return
      }

      if (hit.closest(HOVER_TARGETS)) {
        applyMode('hover', '')
        return
      }

      applyMode('rest', '')
    }

    const onMove = (event: PointerEvent) => {
      setX(event.clientX)
      setY(event.clientY)

      lastX = event.clientX
      lastY = event.clientY
      if (!pending) pending = requestAnimationFrame(deriveMode)
    }

    const onDown = () => gsap.to(dot, { scale: 0.8, duration: 0.2 })
    const onUp = () => gsap.to(dot, { scale: 1, duration: 0.2 })
    const onLeaveWindow = () => gsap.to(dot, { autoAlpha: 0, duration: 0.2 })
    const onEnterWindow = () => gsap.to(dot, { autoAlpha: 1, duration: 0.2 })

    // Passive because none of these ever call `preventDefault`, and a
    // non-passive `pointermove` on `window` forces the compositor to wait for
    // this handler before it can scroll — the dot is decorative, it must never
    // be able to hold up the scroller it is drawn over.
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    window.addEventListener('pointerup', onUp, { passive: true })
    document.addEventListener('mouseleave', onLeaveWindow)
    document.addEventListener('mouseenter', onEnterWindow)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      if (pending) cancelAnimationFrame(pending)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.removeEventListener('mouseleave', onLeaveWindow)
      document.removeEventListener('mouseenter', onEnterWindow)
    }
  }, [enabled])

  if (!enabled) return null

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
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-[13px] leading-tight font-medium tracking-[0.02em] whitespace-pre-line text-black opacity-0"
        />
      </div>
    </div>
  )
}
