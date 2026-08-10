import type { Metadata } from 'next'
import { localizedPath, locales, defaultLocale, type Locale } from './i18n'
import { site } from '@/content/site'

/**
 * Falls back to localhost so `next build` succeeds without env config; deploys
 * must set NEXT_PUBLIC_SITE_URL or canonical tags will point at the dev host.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
).replace(/\/$/, '')

type BuildMetadataArgs = {
  locale: Locale
  /** Locale-agnostic path, e.g. `/work/atlas`. */
  path: string
  title: string
  description: string
  image?: string
}

/**
 * Canonical + hreflang for every page. Search engines need the alternates to
 * treat `/work` and `/cs/work` as translations rather than duplicates.
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  image = '/images/og-default.png',
}: BuildMetadataArgs): Metadata {
  const canonical = `${siteUrl}${localizedPath(locale, path)}`

  const languages: Record<string, string> = {}
  for (const value of locales) {
    languages[value] = `${siteUrl}${localizedPath(value, path)}`
  }
  languages['x-default'] = `${siteUrl}${localizedPath(defaultLocale, path)}`

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      siteName: site.name,
      locale: locale === 'cs' ? 'cs_CZ' : 'en_US',
      images: [{ url: `${siteUrl}${image}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}${image}`],
    },
  }
}
