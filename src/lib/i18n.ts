export const locales = ['en', 'cs'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale)
}

/**
 * English lives at the root (`/work`), Czech is prefixed (`/cs/work`) — the
 * same shape the reference site publishes in its sitemap. Every internal link
 * goes through here so the two schemes never drift.
 */
export function localizedPath(locale: Locale, path: string): string {
  const normalized = path === '/' ? '' : path.replace(/\/$/, '')
  if (locale === defaultLocale) return normalized || '/'
  return `/cs${normalized}`
}

/** Strips the locale prefix, e.g. `/cs/work/atlas` → `/work/atlas`. */
export function stripLocale(pathname: string): string {
  for (const locale of locales) {
    if (locale === defaultLocale) continue
    if (pathname === `/${locale}`) return '/'
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(`/${locale}`.length)
    }
  }
  return pathname || '/'
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'cs' : 'en'
}
