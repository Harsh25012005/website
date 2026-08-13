'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { gsap, registerGsap, prefersReducedMotion } from '@/lib/gsap'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import { getLenis } from '@/components/motion/SmoothScroll'
import { site, navigation } from '@/content/site'
import { localizedPath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  locale: Locale
  dictionary: Dictionary
}

const COLUMNS = 4

/* ────────────────────────────────────────────────────────────────────────────
 * ⚠️  `y: 0` IS LOAD-BEARING. DO NOT DROP IT FROM THESE TWO OBJECTS.  ⚠️
 *
 * The panels ship with an inline `transform: translateY(-100%)` so they are off
 * screen on first paint, before hydration. GSAP does not read that as "-100%":
 * it reads the computed matrix and stores it as `y: -812px` (the panel's own
 * height in CSS pixels), then applies `yPercent` as a *separate* transform
 * component stacked on top.
 *
 * So `gsap.set(panels, { yPercent: -100 })` produced `y: -812` + `yPercent:
 * -100` — a panel sitting at -200%, twice as far up as intended. The open tween
 * then animated `yPercent` back to 0 and left `y: -812` untouched, so the panels
 * finished the animation still completely off screen while the menu text faded
 * in on schedule. The result was a menu with no background: the page behind it
 * showed through and the hero heading rendered straight over the nav links.
 *
 * Pinning `y: 0` alongside every `yPercent` zeroes the pixel component and
 * leaves the percentage as the only thing moving the panel. The open timeline
 * additionally uses `fromTo` rather than `to`, so its start state is declared
 * on every run and cannot be inherited from whatever `ctx.revert()` restored on
 * the previous close.
 * ──────────────────────────────────────────────────────────────────────────── */
const PANEL_HIDDEN = { yPercent: -100, y: 0 } as const
const PANEL_SHOWN = { yPercent: 0, y: 0 } as const

/**
 * Full-screen menu for small viewports. Four panels drop in sequence, then the
 * links stagger up — the same choreography as the preloader so the two read as
 * one motion language.
 *
 * Stays mounted while closed (pointer-events off) so the exit tween has
 * something to animate; unmounting would make it vanish instantly.
 */
export function MobileMenu({
  open,
  onClose,
  locale,
  dictionary,
}: MobileMenuProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const firstRender = useRef(true)

  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    registerGsap()

    const panels = gsap.utils.toArray<HTMLElement>('[data-menu-panel]', root)
    const items = gsap.utils.toArray<HTMLElement>('[data-menu-item]', root)
    const content = root.querySelector<HTMLElement>('[data-menu-content]')
    const reduced = prefersReducedMotion()

    // Skip the exit animation on mount, or the menu flashes on first paint.
    if (firstRender.current) {
      firstRender.current = false
      if (!open) {
        gsap.set(panels, PANEL_HIDDEN)
        gsap.set(content, { autoAlpha: 0 })
        gsap.set(items, { autoAlpha: 0, y: 14 })
        return
      }
    }

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(panels, open ? PANEL_SHOWN : PANEL_HIDDEN)
        gsap.set(content, { autoAlpha: open ? 1 : 0 })
        gsap.set(items, { autoAlpha: open ? 1 : 0, y: 0 })
        return
      }

      if (open) {
        gsap
          .timeline()
          // `fromTo`, not `to`: the previous close tore its context down with
          // `ctx.revert()`, which restores the panels' original inline
          // transform. Declaring the start state here means the drop plays the
          // same way on the first open and the twentieth.
          .fromTo(panels, PANEL_HIDDEN, {
            ...PANEL_SHOWN,
            duration: 0.65,
            stagger: 0.05,
            ease: 'expo.out',
          })
          .set(content, { autoAlpha: 1 }, 0.2)
          .to(items, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.06 }, 0.35)
      } else {
        gsap
          .timeline()
          .to(items, { autoAlpha: 0, y: 14, duration: 0.25 })
          .to(
            panels,
            {
              ...PANEL_HIDDEN,
              duration: 0.55,
              stagger: { each: 0.04, from: 'end' },
              ease: 'expo.inOut',
            },
            0.05,
          )
          .set(content, { autoAlpha: 0 })
      }
    }, root)

    return () => ctx.revert()
  }, [open])

  // Lock the page behind the overlay; Lenis keeps its own scroll state, so
  // body overflow alone is not enough.
  useIsomorphicLayoutEffect(() => {
    const lenis = getLenis()
    if (open) {
      lenis?.stop()
      document.body.style.overflow = 'hidden'
    } else {
      lenis?.start()
      document.body.style.overflow = ''
    }
    return () => {
      lenis?.start()
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    // No `aria-label` on this root: it has no role, and a name on a roleless
    // `<div>` is dropped by assistive tech, so the label was inert. It belongs
    // on the `<nav>` below, which is the element that has something to name.
    <div
      ref={rootRef}
      id="mobile-menu"
      aria-hidden={!open}
      className={cnMenu(open)}
    >
      <div className="absolute inset-0 flex">
        {Array.from({ length: COLUMNS }).map((_, index) => (
          <div
            key={index}
            data-menu-panel
            className="h-full flex-1 bg-[var(--color-bg)]"
            style={{ transform: 'translateY(-100%)' }}
          />
        ))}
      </div>

      <div
        data-menu-content
        className="relative flex h-full flex-col px-5 pt-28 pb-10 opacity-0"
      >
        <nav
          aria-label={dictionary.nav.siteMenu}
          className="flex flex-col gap-2"
        >
          {navigation.map((item) => (
            <Link
              key={item.key}
              href={localizedPath(locale, item.href)}
              onClick={onClose}
              className="block py-2"
            >
              <span
                data-menu-item
                className="block font-serif text-[clamp(48px,12vw,80px)] leading-[1] font-light tracking-[-0.03em] text-[var(--color-text)]"
                style={{ opacity: 0, transform: 'translateY(14px)' }}
              >
                {dictionary.nav[item.key]}
              </span>
            </Link>
          ))}

          <div
            data-menu-item
            className="flex items-center gap-3 pt-8"
            style={{ opacity: 0, transform: 'translateY(14px)' }}
          >
            <Link
              href={localizedPath(locale, '/contact')}
              onClick={onClose}
              className="inline-flex h-14 items-center rounded-full border border-white bg-white px-7 text-[16px] leading-none text-black transition-colors duration-200 hover:bg-transparent hover:text-white"
            >
              {dictionary.nav.contact}
            </Link>
          </div>
        </nav>

        <div
          data-menu-item
          className="mt-auto flex flex-col gap-2"
          style={{ opacity: 0 }}
        >
          <a
            href={`mailto:${site.email}`}
            className="self-start font-serif text-[clamp(20px,5.5vw,28px)] leading-[1.1] font-light tracking-[-0.02em] text-white"
          >
            {site.email}
          </a>
          <span className="text-[14px] text-[var(--color-text-muted)]">
            {site.location[locale]}
          </span>
        </div>
      </div>
    </div>
  )
}

function cnMenu(open: boolean): string {
  return [
    'fixed inset-0 z-40 md:hidden',
    open ? 'pointer-events-auto' : 'pointer-events-none',
  ].join(' ')
}
