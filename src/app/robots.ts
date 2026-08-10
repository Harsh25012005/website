import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/seo'

/**
 * Everything is crawlable, deliberately.
 *
 * Indexing decisions are made per page with a `robots` meta tag (see `noindex`
 * in `lib/seo.ts`), which is the only mechanism that actually keeps a URL out of
 * the index. A `Disallow` blocks the *crawl* instead — and a URL that is never
 * fetched can never have its `noindex` read, so it can still surface from
 * external links alone, listed without a snippet.
 *
 * The same trap explains why the legacy `/en/*` and `/cs/*` prefixes are not
 * disallowed either, tempting as it looks. Those paths 308 to the unprefixed
 * canonical (`src/middleware.ts`); blocking them would stop a crawler ever
 * seeing the redirect, stranding whatever equity the old URLs picked up instead
 * of consolidating it onto the page that replaced them.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
