import { NextResponse, type NextRequest } from 'next/server'
import { locales, defaultLocale } from '@/lib/i18n'

/**
 * Locales that were published in the past and may still be linked or indexed.
 * They no longer exist as content, so their URLs fold into the English tree
 * instead of 404ing and losing whatever equity they picked up.
 */
const retiredLocales = ['cs'] as const

/**
 * `301` and `308` are both permanent; `308` is used because it also forbids a
 * client from downgrading the method, so a POST to a prefixed URL is preserved.
 */
const PERMANENT_REDIRECT = 308

/** Matches a whole leading path segment — `/en` and `/en/work`, not `/english`. */
function hasSegmentPrefix(pathname: string, segment: string): boolean {
  return pathname === `/${segment}` || pathname.startsWith(`/${segment}/`)
}

/**
 * The app tree is `src/app/[locale]/…`, but public URLs follow this scheme:
 * - English (default): unprefixed — `/work`, `/about`, `/contact`
 * - Spanish:           `/es/work`, `/es/about`, `/es/contact`
 * - French:            `/fr/work`, `/fr/about`, `/fr/contact`
 *
 * Three jobs:
 * 1. Redirect the default locale prefix (`/en/work`) to the canonical root
 *    path. Previously these were passed through untouched, so `/en/work` and
 *    `/work` both returned 200 and every page had a duplicate URL.
 * 2. Redirect retired locale prefixes (`/cs/work`) the same way.
 * 3. Rewrite everything else into the correct `[locale]` segment so the app
 *    tree resolves, while the address bar keeps the public URL.
 *
 * Non-default locales (`/es/…`, `/fr/…`) are rewritten into their own segment
 * rather than redirected — they ARE the canonical URL for that locale.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ── Redirect default-locale prefix and retired locales ──────────────────
  for (const prefix of [defaultLocale, ...retiredLocales]) {
    if (!hasSegmentPrefix(pathname, prefix)) continue
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(`/${prefix}`.length) || '/'
    return NextResponse.redirect(url, PERMANENT_REDIRECT)
  }

  // ── Non-default locales: rewrite into the [locale] segment ─────────────
  for (const locale of locales) {
    if (locale === defaultLocale) continue
    if (hasSegmentPrefix(pathname, locale)) {
      // Already has the locale prefix — rewrite as-is into [locale]
      const url = request.nextUrl.clone()
      url.pathname = `/${locale}${pathname.slice(`/${locale}`.length) || ''}`
      return NextResponse.rewrite(url)
    }
  }

  // ── Unprefixed path: rewrite into the default locale ───────────────────
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next|api|images|fonts|.*\\.[\\w]+$).*)'],
}
