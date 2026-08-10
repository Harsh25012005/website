'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UnderlineLink } from '@/components/ui/UnderlineLink'
import { Logo } from '@/components/ui/Logo'
import { MobileMenu } from './MobileMenu'
import { navigation } from '@/content/site'
import { localizedPath, stripLocale, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'
import { cn } from '@/lib/cn'

type HeaderProps = {
  locale: Locale
  dictionary: Dictionary
}

export function Header({ locale, dictionary }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const currentPath = stripLocale(pathname)

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-10',
          // Gradient scrim instead of a solid bar: the content stays legible
          // while scrolling under it without introducing a hard edge.
          'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-[140%] before:bg-gradient-to-b before:from-[var(--color-bg)] before:via-[color-mix(in_oklab,var(--color-bg)_75%,transparent)] before:to-transparent',
        )}
      >
        <div className="shell relative flex items-center justify-between">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <Link
              href={localizedPath(locale, '/')}
              className="flex items-center gap-3 text-[var(--color-text)] transition-opacity hover:opacity-80"
            >
              <Logo className="h-7 w-auto text-current md:h-9" />
            </Link>
          </div>

          <nav className="hidden items-center gap-8 text-[15px] md:flex">
            {navigation.map((item) => (
              <UnderlineLink
                key={item.key}
                href={localizedPath(locale, item.href)}
                active={
                  currentPath === item.href ||
                  currentPath.startsWith(`${item.href}/`)
                }
              >
                {dictionary.nav[item.key]}
              </UnderlineLink>
            ))}

            <div className="flex items-center gap-2">
              <Link
                href={localizedPath(locale, '/contact')}
                className="inline-flex h-9 items-center rounded-full border border-white bg-white px-4 leading-none text-black transition-[background-color,color,transform] duration-200 hover:bg-transparent hover:text-white active:scale-[0.97]"
              >
                {dictionary.nav.contact}
              </Link>
            </div>
          </nav>

          <button
            type="button"
            aria-label={
              menuOpen ? dictionary.nav.closeMenu : dictionary.nav.openMenu
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center text-[var(--color-text)] transition-transform duration-150 active:scale-90 md:hidden"
          >
            <span className="relative block h-3.5 w-6">
              <span
                className={cn(
                  'absolute inset-x-0 h-px bg-current transition-transform duration-300 ease-out',
                  menuOpen ? 'top-1/2 rotate-45' : 'top-0',
                )}
              />
              <span
                className={cn(
                  'absolute inset-x-0 h-px bg-current transition-transform duration-300 ease-out',
                  menuOpen ? 'top-1/2 -rotate-45' : 'bottom-0',
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        locale={locale}
        dictionary={dictionary}
      />
    </>
  )
}
