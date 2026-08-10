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
 * The app tree is `src/app/[locale]/…`, but every public URL is unprefixed.
 *
 * Two jobs:
 * 1. Redirect any locale-prefixed request (`/en/work`, `/cs/work`) to the
 *    canonical root path. Previously these were passed through untouched, so
 *    `/en/work` and `/work` both returned 200 and every page in the site had a
 *    duplicate URL.
 * 2. Rewrite everything else into the `en` segment so the `[locale]` tree still
 *    resolves, while the address bar and the canonical tag keep the root path.
 *
 * The rewrite target is itself locale-prefixed, which would match rule 1 and
 * bounce forever if middleware ran again — it doesn't. Next.js invokes
 * middleware once per incoming request; `NextResponse.rewrite` resolves
 * internally against the app router without re-entering the middleware chain
 * (unlike `NextResponse.redirect`, which produces a new client request that
 * does re-run it). The redirect above therefore only ever sees URLs a client
 * actually asked for.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  for (const prefix of [...locales, ...retiredLocales]) {
    if (!hasSegmentPrefix(pathname, prefix)) continue
    const url = request.nextUrl.clone()
    // `clone()` carries the query string over, so campaign params survive.
    url.pathname = pathname.slice(`/${prefix}`.length) || '/'
    return NextResponse.redirect(url, PERMANENT_REDIRECT)
  }

  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next|api|images|fonts|.*\\.[\\w]+$).*)'],
}
