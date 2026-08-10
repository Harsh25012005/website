import { NextResponse, type NextRequest } from 'next/server'
import { locales, defaultLocale } from '@/lib/i18n'

/**
 * The app tree is `src/app/[locale]/…`, but the default locale is served from
 * the root. Rewriting (not redirecting) keeps `/work` as the canonical URL
 * while still resolving to the `en` segment.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  )

  if (hasLocalePrefix) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next|api|images|fonts|.*\\.[\\w]+$).*)'],
}
