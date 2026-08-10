/**
 * The site ships in English only. The `locales` tuple is kept (rather than
 * hard-coding `'en'` everywhere) so the `[locale]` route segment, the sitemap
 * and the `Localized<T>` content wrapper all stay driven by one source of
 * truth if a second language is ever added back.
 */
export const locales = ['en'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale)
}

/**
 * Every internal link goes through here so the URL scheme never drifts. With a
 * single locale the answer is always the unprefixed path — `/work`, never
 * `/en/work` — which is also what `sitemap.ts` and the canonical tags emit.
 * The trailing slash is normalised away so `/work/` and `/work` can't both be
 * linked.
 */
export function localizedPath(_locale: Locale, path: string): string {
  const normalized = path === '/' ? '' : path.replace(/\/$/, '')
  return normalized || '/'
}

/**
 * Strips a leading locale segment, e.g. `/en/work/atlas` → `/work/atlas`. Only
 * a whole segment counts, so `/english-lessons` is left alone. Public URLs are
 * already unprefixed, so this is effectively the identity function — it exists
 * to normalise the internal `/en/…` rewrite target and any legacy inbound link.
 */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return '/'
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(`/${locale}`.length)
    }
  }
  return pathname || '/'
}
