import type { Metadata } from 'next'
import { localizedPath, locales, ogLocales, localeRegionTags, type Locale } from './i18n'
import { site } from '@/content/site'

/* ────────────────────────────────────────────────────────────────────────────
 * ⚠️  NEXT_PUBLIC_SITE_URL IS REQUIRED AT DEPLOY TIME.  ⚠️
 *
 * Everything that tells a search engine where this site lives is derived from
 * this one value: `<link rel="canonical">`, `metadataBase`, every `og:url` and
 * `og:image`, every `<loc>` in `sitemap.xml`, and the `Sitemap:` line in
 * `robots.txt`.
 *
 * If it is unset the build still succeeds — but it ships a site whose every
 * canonical points at `http://localhost:3000`, which is unreachable to a
 * crawler.
 *
 * Set it in the host environment (Vercel/Netlify project settings) to the
 * production origin, https, no trailing slash — e.g.
 * `https://harshvaghela.xyz`.
 * ──────────────────────────────────────────────────────────────────────────── */
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL

if (!rawSiteUrl && process.env.NODE_ENV === 'production') {
  console.warn(
    '\n[seo] NEXT_PUBLIC_SITE_URL is not set. Canonicals, hreflang, the sitemap,\n' +
      '[seo] robots.txt and all OG image URLs will be emitted as\n' +
      '[seo] http://localhost:3000. This site will not be indexable.\n',
  )
}

/** Production origin, no trailing slash. See the warning block above. */
export const siteUrl = (rawSiteUrl ?? 'http://localhost:3000').replace(
  /\/$/,
  '',
)

/**
 * Sitewide default share image. Overridden per page via `buildMetadata`'s
 * `image` argument; only this file is known to be a true 1200×630 OG canvas.
 */
const DEFAULT_OG_IMAGE = '/images/og-default.png'
const DEFAULT_OG_WIDTH = 1200
const DEFAULT_OG_HEIGHT = 630

type BuildMetadataArgs = {
  locale: Locale
  /** Locale-agnostic path, e.g. `/work/atlas`. */
  path: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  noindex?: boolean
  keywords?: string[]
  titleIsAbsolute?: boolean
}

/**
 * Builds hreflang alternate links for every locale, plus `x-default` pointing
 * at the English canonical. This is the annotation set that tells search
 * engines which version of a page to serve in each language.
 */
function buildAlternates(path: string) {
  const languages: Record<string, string> = {}
  for (const loc of locales) {
    languages[localeRegionTags[loc]] = `${siteUrl}${localizedPath(loc, path)}`
  }
  languages['x-default'] = `${siteUrl}${localizedPath('en', path)}`
  return languages
}

/**
 * Canonical URL + Open Graph + Twitter + hreflang for every page.
 *
 * Hreflang alternates link the English, Spanish and French versions of each
 * page to each other, with `x-default` pointing to English. The sitemap emits
 * the same set, so the two always agree.
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  type = 'website',
  publishedTime,
  modifiedTime,
  noindex = false,
  keywords,
  titleIsAbsolute = false,
}: BuildMetadataArgs): Metadata {
  const canonical = `${siteUrl}${localizedPath(locale, path)}`
  const imageUrl = `${siteUrl}${image}`
  const isDefaultImage = image === DEFAULT_OG_IMAGE

  return {
    title: titleIsAbsolute ? { absolute: title } : title,
    description,
    ...(keywords?.length ? { keywords } : {}),

    authors: [{ name: site.name, url: siteUrl }],
    creator: site.name,
    publisher: site.name,

    alternates: {
      canonical,
      languages: buildAlternates(path),
    },

    robots: noindex
      ? {
          index: false,
          follow: true,
          googleBot: { index: false, follow: true },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
          },
        },

    openGraph: {
      type,
      url: canonical,
      title,
      description,
      siteName: site.name,
      locale: ogLocales[locale],
      ...(type === 'article'
        ? {
            authors: [site.name],
            ...(publishedTime ? { publishedTime } : {}),
            ...(modifiedTime ? { modifiedTime } : {}),
          }
        : {}),
      images: [
        {
          url: imageUrl,
          ...(isDefaultImage
            ? { width: DEFAULT_OG_WIDTH, height: DEFAULT_OG_HEIGHT }
            : {}),
          alt: imageAlt ?? `${title} - ${site.name}`,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: imageUrl, alt: imageAlt ?? `${title} - ${site.name}` }],
    },
  }
}
