'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, localeNames, localizedPath, stripLocale, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/cn'

type LanguageSwitcherProps = {
  locale: Locale
  /** Localised word for "Language" (e.g. dictionary.nav.language), used to name the trigger. */
  label?: string
  /** Which horizontal edge the panel aligns to. */
  align?: 'start' | 'end'
  /** Whether the panel drops below the trigger or rises above it (footer / mobile menu sit at the page bottom). */
  direction?: 'down' | 'up'
  className?: string
}

/**
 * Language switcher rendered as a dropdown: the trigger shows the current
 * locale code (EN / ES / FR); opening it reveals the full language names, each
 * a link to the same page in that locale. Reads the current pathname, strips
 * the locale prefix, and rebuilds the localized path per language.
 *
 * Modelled on the WAI-ARIA disclosure/menu-button pattern — a `button`
 * exposing `aria-expanded` and `aria-haspopup` that reveals a list of links.
 * The panel styling mirrors `CustomSelect` so the two controls read as one
 * system. Escape and click-outside close it; ArrowUp/Down and Home/End move
 * focus between the options while open.
 */
export function LanguageSwitcher({
  locale,
  label = 'Language',
  align = 'end',
  direction = 'down',
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname()
  const currentPath = stripLocale(pathname)

  const id = useId()
  const menuId = `${id}-menu`

  const [open, setOpen] = useState(false)

  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const optionRefs = useRef<Array<HTMLAnchorElement | null>>([])

  // Close when the route changes — selecting a language navigates, and the
  // header/footer stay mounted across route changes so the panel would
  // otherwise linger open on the new page.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Pointerdown, not click: a click listener fires after focus has already
  // moved, which on a second trigger elsewhere reopens the panel it just closed.
  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  const focusOption = (index: number) => {
    const count = locales.length
    const clamped = (index + count) % count
    optionRefs.current[clamped]?.focus()
  }

  const onTriggerKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setOpen(true)
      // Focus the first option once the panel has rendered as interactive.
      requestAnimationFrame(() => focusOption(event.key === 'ArrowUp' ? locales.length - 1 : 0))
    }
  }

  const onOptionKeyDown = (event: React.KeyboardEvent, index: number) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        focusOption(index + 1)
        return
      case 'ArrowUp':
        event.preventDefault()
        focusOption(index - 1)
        return
      case 'Home':
        event.preventDefault()
        focusOption(0)
        return
      case 'End':
        event.preventDefault()
        focusOption(locales.length - 1)
        return
      case 'Escape':
        event.preventDefault()
        setOpen(false)
        triggerRef.current?.focus()
        return
      default:
        return
    }
  }

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${label}: ${localeNames[locale]}`}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={onTriggerKeyDown}
        className={cn(
          'flex cursor-pointer items-center gap-1.5 text-[13px] tracking-wide uppercase transition-colors duration-200',
          open ? 'text-white' : 'text-[var(--color-text-soft)] hover:text-white',
        )}
      >
        {locale.toUpperCase()}
        {/* Points down when closed, up when open — the one piece of state a
            dropdown should never make you guess at. Flipped when the panel
            rises, so the chevron always points toward the panel. */}
        <svg
          aria-hidden
          viewBox="0 0 12 8"
          className={cn(
            'h-2 w-2.5 shrink-0 transition-transform duration-300 ease-out',
            (open ? direction === 'down' : direction === 'up') ? 'rotate-180' : 'rotate-0',
          )}
        >
          <path d="M1 1.5L6 6.5L11 1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      <ul
        id={menuId}
        role="menu"
        aria-label={label}
        className={cn(
          'absolute z-40 min-w-[9.5rem] rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] py-2 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.75)] transition-[opacity,transform,visibility] duration-200 ease-out',
          align === 'end' ? 'right-0' : 'left-0',
          direction === 'up' ? 'bottom-full mb-2 origin-bottom' : 'top-full mt-2 origin-top',
          open
            ? 'pointer-events-auto visible scale-y-100 opacity-100'
            : 'pointer-events-none invisible scale-y-95 opacity-0',
        )}
      >
        {locales.map((loc, index) => {
          const isActive = loc === locale
          return (
            <li key={loc} role="none">
              <Link
                ref={(node) => {
                  optionRefs.current[index] = node
                }}
                href={localizedPath(loc, currentPath)}
                role="menuitem"
                hrefLang={loc}
                lang={loc}
                aria-current={isActive ? 'true' : undefined}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                onKeyDown={(event) => onOptionKeyDown(event, index)}
                className={cn(
                  'block px-4 py-2.5 text-[0.9375rem] leading-[1.4] transition-colors',
                  'hover:bg-[color-mix(in_oklab,var(--color-text)_10%,transparent)] focus-visible:bg-[color-mix(in_oklab,var(--color-text)_10%,transparent)] focus-visible:outline-none',
                  isActive ? 'text-white' : 'text-[var(--color-text-soft)]',
                )}
              >
                {localeNames[loc]}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
