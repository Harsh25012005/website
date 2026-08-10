import type { Metadata } from 'next'
import { localizedPath, type Locale } from './i18n'
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
 * crawler. The practical result is that the real domain gets crawled, finds a
 * canonical pointing somewhere it cannot fetch, and the pages either drop out
 * of the index or never enter it. Social unfurls break the same way, because
 * the OG image URL resolves to localhost on the sharer's server.
 *
 * This fails SILENTLY and it fails TOTALLY. Set it in the host environment
 * (Vercel/Netlify project settings) to the production origin, https, no
 * trailing slash — e.g. `https://harshvaghela.com`. Preview deploys should get
 * their own preview origin so preview canonicals never point at production.
 * ──────────────────────────────────────────────────────────────────────────── */
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL

if (!rawSiteUrl && process.env.NODE_ENV === 'production') {
  // Loud, but non-fatal: a broken build blocks deploys of unrelated fixes,
  // while a missing canonical origin is recoverable by redeploying with the
  // env var set. The warning is the last chance to catch it before it ships.
  console.warn(
    '\n[seo] NEXT_PUBLIC_SITE_URL is not set. Canonicals, hreflang, the sitemap,\n' +
      '[seo] robots.txt and all OG image URLs will be emitted as\n' +
      '[seo] http://localhost:3000 — this site will not be indexable.\n',
  )
}

/** Production origin, no trailing slash. See the warning block above. */
export const siteUrl = (rawSiteUrl ?? 'http://localhost:3000').replace(
  /\/$/,
  '',
)

/**
 * Sitewide default share image. Overridden per page via `buildMetadata`'s
 * `image` argument; only this file is known to be a true 1200×630 OG canvas,
 * which is why the dimensions below are only declared when it is in use.
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
  /* ---- optional additions; every existing caller can ignore all of these ---- */
  /** Alt text for the share image. Absent alt text is an accessibility gap in
   *  the unfurl card and a wasted relevance signal. */
  imageAlt?: string
  /** `article` unlocks published/modified time and author in the OG payload —
   *  pass it from `/articles/[slug]` and `/work/[slug]`. */
  type?: 'website' | 'article'
  /** ISO date, only meaningful with `type: 'article'`. */
  publishedTime?: string
  /** ISO date, only meaningful with `type: 'article'`. */
  modifiedTime?: string
  /** Emits `noindex, follow` — the correct pair for a page that should not
   *  rank but whose outbound links should still be crawled (e.g. `/privacy`). */
  noindex?: boolean
  /** Google ignores this tag; Bing and several AI crawlers still read it, and
   *  it costs nothing. Use 4–8 genuine phrases or omit it entirely. */
  keywords?: string[]
  /** Bypasses the root layout's `%s — Harsh Vaghela` title template. Use on the
   *  home page, where the name already leads the title and the template would
   *  otherwise append it a second time. */
  titleIsAbsolute?: boolean
}

/**
 * Canonical URL + Open Graph + Twitter for every page.
 *
 * No `alternates.languages` / hreflang is emitted. The site is English-only
 * (`locales = ['en']` in `lib/i18n.ts`), and hreflang exists purely to
 * disambiguate between two or more language versions of the same document.
 * With one language there is nothing to disambiguate: a lone
 * `hreflang="en"` + `x-default` pair pointing at the page's own canonical is
 * pure noise, and a self-referential-only annotation set is a common source of
 * "no return tag" errors in Search Console. If a second locale is ever added,
 * restore the loop here and in `sitemap.ts` together — a one-sided annotation
 * is worse than none.
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

    // The site is one person; author, creator and publisher are all that person.
    // These feed the `Person` entity that the JSON-LD in `components/seo` builds
    // out, and they are what LinkedIn and several readers surface as a byline.
    authors: [{ name: site.name, url: siteUrl }],
    creator: site.name,
    publisher: site.name,

    alternates: { canonical },

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
      locale: 'en_US',
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
          // Declaring dimensions that do not match the file makes Twitter and
          // Slack letterbox or crop the card. Only the default OG canvas is a
          // verified 1200×630, so per-page images ship without a declared size
          // and let the consumer read the real one.
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
      images: [
        { url: imageUrl, alt: imageAlt ?? `${title} - ${site.name}` },
      ],
    },
  }
}
