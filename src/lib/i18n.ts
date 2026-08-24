/**
 * The site ships in English, Spanish and French. English is the default locale
 * and uses unprefixed URLs (`/work`, not `/en/work`). Spanish and French use
 * their locale as a path prefix (`/es/work`, `/fr/work`).
 *
 * The `locales` tuple drives the `[locale]` route segment, the sitemap,
 * hreflang alternates, and the `Localized<T>` content wrapper — one source of
 * truth for every locale-aware subsystem.
 */
export const locales = ['en', 'es', 'fr'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

/** Human-readable language names, keyed by locale. */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
}

/** BCP 47 language tags for hreflang and og:locale. */
export const localeRegionTags: Record<Locale, string> = {
  en: 'en',
  es: 'es',
  fr: 'fr',
}

/** Full og:locale values (language_TERRITORY). */
export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
}

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale)
}

/**
 * Every internal link goes through here so the URL scheme never drifts. The
 * default locale (`en`) uses unprefixed paths (`/work`), while `es` and `fr`
 * are prefixed (`/es/work`, `/fr/work`). Trailing slashes are normalised away.
 */
export function localizedPath(locale: Locale, path: string): string {
  const normalized = path === '/' ? '' : path.replace(/\/$/, '')
  if (locale === defaultLocale) {
    return normalized || '/'
  }
  return `/${locale}${normalized || ''}`
}

/**
 * Strips a leading locale segment, e.g. `/en/work/atlas` → `/work/atlas` or
 * `/es/services` → `/services`. Only a whole segment counts, so
 * `/english-lessons` is left alone.
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
