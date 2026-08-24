'use client'

import { useEffect, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ConvergeLines } from '@/components/motion/ConvergeLines'
import { Reveal } from '@/components/motion/Reveal'
import { getLenis } from '@/components/motion/SmoothScroll'
import { LanguageSwitcher } from './LanguageSwitcher'
import { site, footerNavigation, legalNavigation } from '@/content/site'
import { localizedPath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'

type FooterProps = {
  locale: Locale
  dictionary: Dictionary
}

/**
 * Full-viewport closing section: the mailto CTA takes the free space and the
 * link grid sits on the bottom edge. The headline splits into two lines that
 * arrive from opposite sides on scroll, and back-to-top rides the same Lenis
 * instance as the rest of the page instead of a plain anchor jump.
 */
export function Footer({ locale, dictionary }: FooterProps) {
  const pathname = usePathname()

  const [user, domain] = site.email.split('@')

  // Split at render so the cs translation lines up the same way; the first word
  // flies in from the left, whatever is left of the phrase from the right.
  const [firstLine = dictionary.footer.collaborate, ...restWords] =
    dictionary.footer.collaborate.split(/\s+/)
  const secondLine = restWords.join(' ')

  // Pages are prerendered, so the markup carries the build year. Seeding state
  // with it keeps the first client render identical to the server output, then
  // the effect reconciles it with the visitor's clock.
  const [year, setYear] = useState(() => new Date().getFullYear())
  useEffect(() => setYear(new Date().getFullYear()), [])

  const scrollToTop = () => {
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { duration: 1.2 })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (pathname?.endsWith('/contact')) {
    return null
  }

  const menuLinks = [
    {
      key: 'home',
      href: localizedPath(locale, '/'),
      label: dictionary.footer.home,
    },
    ...footerNavigation.map((item) => ({
      key: item.key,
      href: localizedPath(locale, item.href),
      label: dictionary.nav[item.key],
    })),
  ]

  const midPoint = Math.ceil(menuLinks.length / 2)
  const menuCol1 = menuLinks.slice(0, midPoint)
  const menuCol2 = menuLinks.slice(midPoint)

  return (
    <footer className="relative flex flex-col overflow-hidden px-5 pt-16 pb-8 md:px-10 md:pt-24 md:pb-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-[var(--color-border)]"
      />

      <div className="shell relative z-10 flex flex-col items-center justify-center py-8 text-center md:py-12">
        <Reveal>
          <p className="mb-6 text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase md:mb-10">
            {dictionary.common.workTogether}
          </p>
        </Reveal>

        <Link
          href={localizedPath(locale, '/contact')}
          className="group block w-full font-serif text-[clamp(52px,13vw,180px)] leading-[0.95] font-light tracking-[-0.04em]"
          data-cursor-label={dictionary.nav.contact}
        >
          <ConvergeLines start="top bottom" end="center center" scrub={1.8}>
            <CtaLine>{firstLine}</CtaLine>
            {secondLine ? <CtaLine>{secondLine}</CtaLine> : null}
          </ConvergeLines>
        </Link>
      </div>

      <div className="shell relative z-10 mt-10 w-full md:mt-14">
        <div className="grid grid-cols-2 gap-10 border-t border-[var(--color-border)] pt-8 text-[15px] md:grid-cols-[1fr_1fr_1.4fr] md:pt-10">
          <div>
            <p className="mb-5 text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
              {dictionary.footer.menu}
            </p>
            <ul className="flex flex-col items-start gap-3">
              {menuCol1.map((item) => (
                <li key={item.key}>
                  <InternalLink href={item.href}>{item.label}</InternalLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              aria-hidden
              className="invisible mb-5 select-none text-[11px] tracking-[0.18em] uppercase"
            >
              {dictionary.footer.menu}
            </p>
            <ul className="flex flex-col items-start gap-3">
              {menuCol2.map((item) => (
                <li key={item.key}>
                  <InternalLink href={item.href}>{item.label}</InternalLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <p className="mb-5 text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
              {dictionary.footer.sayHello}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="block text-[clamp(20px,2.2vw,30px)] leading-[1.2] font-light break-all text-white"
            >
              {user}@{domain}
            </a>
            {/* The city is the link into the local landing page. It is the one
                place on the site where "Ahmedabad" is already the natural
                anchor text, so the page gets a sitewide internal link without
                a nav item reading like a search query. */}
            <p className="mt-4 text-[var(--color-text-muted)]">
              {dictionary.footer.availableFor} -{' '}
              <InternalLink
                href={localizedPath(locale, '/ui-ux-designer-in-ahmedabad')}
              >
                {site.city[locale]}
              </InternalLink>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[var(--color-border)] pt-6 text-[13px] text-[var(--color-text-muted)] md:mt-10 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name} - {dictionary.footer.rights}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {/* Bottom bar rather than the menu column: reachable from every
                page, which a privacy notice has to be once a form collects
                anything, without competing with the pages that convert. */}
            {legalNavigation.map((item) => (
              <InternalLink
                key={item.key}
                href={localizedPath(locale, item.href)}
              >
                {dictionary.nav[item.key]}
              </InternalLink>
            ))}
            <LanguageSwitcher
              locale={locale}
              label={dictionary.nav.language}
              align="start"
              direction="up"
            />
            <span>
              {dictionary.common.builtBy} {site.name}
            </span>
            <button
              onClick={scrollToTop}
              type="button"
              className="cursor-pointer transition-colors hover:text-white"
            >
              {dictionary.footer.backToTop} ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

function CtaLine({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block max-w-full text-white">
      {children}
    </span>
  )
}

function InternalLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      className="group relative inline-block py-0.5 transition-colors hover:text-white"
    >
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100"
      />
    </Link>
  )
}
