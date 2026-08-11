import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/seo'
import { localizedPath, defaultLocale } from '@/lib/i18n'
import { site } from '@/content/site'
import { projects } from '@/content/projects'
import { articles } from '@/content/articles'
import { services } from '@/content/services'
import { pillarOrder, pillarPath } from '@/content/pillars'
import { legalDocuments } from '@/content/legal'
import { pricingIsPublishable } from '@/content/pricing'
import { testimonialsArePublishable } from '@/content/about'

/**
 * Every indexable URL, once each.
 *
 * Three things this file used to get wrong, all of which quietly cost crawl
 * quality rather than failing loudly:
 *
 * 1. **`/services` was missing.** It is in the header nav and is the page
 *    carrying the commercial keywords, and it was the one route absent from the
 *    sitemap.
 *
 * 2. **A `noindex` URL was listed.** Listing one sends a crawler a direct
 *    contradiction — "index this" in one file, "do not" in the page — and
 *    Search Console reports it as an error against the whole submission. Three
 *    routes are `noindex` today and none of them appear below: `/thank-you`
 *    permanently, `/pricing` and `/testimonials` until their content is real.
 *    The last two are filtered by the same two flags that drive the nav links,
 *    so the three can never disagree.
 *
 * 3. **`lastModified: new Date()`** stamped every URL with the build time, so a
 *    deploy that changed one typo claimed every page had just changed.
 *    Once that is shown to be false a few times, the field stops being read at
 *    all — including on the article that genuinely did change. Dates below come
 *    from the content instead: an article's own publish date, and
 *    `site.contentUpdated` for pages whose copy has no date of its own.
 *
 * There is also no `alternates.languages` block any more. The site is
 * English-only, so the previous output annotated every URL as the sole
 * alternate of itself — hreflang exists to disambiguate between languages, and
 * with one language there is nothing to disambiguate. `lib/seo.ts` reached the
 * same conclusion for the canonical tags; the two files have to agree, because
 * a sitemap claiming alternates the pages do not confirm produces "no return
 * tag" errors. If a second locale is ever added, restore the loop in both
 * files together.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const contentUpdated = new Date(site.contentUpdated)

  const newestArticle = articles.reduce(
    (latest, article) =>
      Date.parse(article.date) > Date.parse(latest) ? article.date : latest,
    articles[0]?.date ?? site.contentUpdated,
  )

  /**
   * `priority` is relative within one site and is a hint at best — Google has
   * said it ignores it. It is kept only to express the obvious hierarchy for
   * the crawlers that still read it: home first, then the two pages that
   * convert, then the work that supports them.
   */
  const entries: { path: string; lastModified: Date; priority: number }[] = [
    { path: '/', lastModified: contentUpdated, priority: 1 },
    { path: '/work', lastModified: contentUpdated, priority: 0.9 },
    { path: '/services', lastModified: contentUpdated, priority: 0.9 },
    // The two pillar hubs. They carry the broad head terms ("UI/UX design
    // services", "custom development services") that the individual pages are
    // too specific to reach, so they sit level with `/services` rather than
    // below it.
    ...pillarOrder.map((key) => ({
      path: pillarPath(key),
      lastModified: contentUpdated,
      priority: 0.9,
    })),
    // The service pages sit level with the hubs rather than below them: they
    // are the pages carrying the commercial head terms, and the hubs mainly
    // exist to distribute traffic to them.
    ...services.map((service) => ({
      path: `/services/${service.slug}`,
      lastModified: contentUpdated,
      priority: 0.9,
    })),
    { path: '/about', lastModified: contentUpdated, priority: 0.8 },
    { path: '/contact', lastModified: contentUpdated, priority: 0.8 },
    {
      path: '/ui-ux-designer-in-ahmedabad',
      lastModified: contentUpdated,
      priority: 0.8,
    },
    // Listed only once the page has something to say. Both are `noindex` until
    // then, and a sitemap entry for a noindex URL is a direct contradiction —
    // "index this" in one file, "do not" in the page — which Search Console
    // reports as an error against the whole submission. The same two flags
    // drive the footer links, so the three never disagree.
    ...(pricingIsPublishable
      ? [{ path: '/pricing', lastModified: contentUpdated, priority: 0.8 }]
      : []),
    ...(testimonialsArePublishable
      ? [{ path: '/testimonials', lastModified: contentUpdated, priority: 0.6 }]
      : []),
    { path: '/process', lastModified: contentUpdated, priority: 0.7 },
    { path: '/resume', lastModified: contentUpdated, priority: 0.7 },
    {
      path: '/articles',
      lastModified: new Date(newestArticle),
      priority: 0.7,
    },
    { path: '/tools', lastModified: contentUpdated, priority: 0.5 },
    ...projects
      // An upcoming project renders as an inert tile with no detail page, so
      // its URL would 404 for anyone who followed it out of the sitemap.
      .filter((project) => !project.upcoming)
      .map((project) => ({
        path: `/work/${project.slug}`,
        lastModified: contentUpdated,
        priority: 0.7,
      })),
    ...articles.map((article) => ({
      path: `/articles/${article.slug}`,
      lastModified: new Date(article.date),
      priority: 0.6,
    })),
    // Indexable, at the bottom of the hierarchy. These carry their own
    // `updated` date rather than `site.contentUpdated`, because a legal notice
    // restamped by an unrelated copy edit misreports the one date on the site a
    // reader may actually rely on.
    ...legalDocuments.map((doc) => ({
      path: `/${doc.slug}`,
      lastModified: new Date(doc.updated),
      priority: 0.3,
    })),
  ]

  return entries.map((entry) => ({
    url: `${siteUrl}${localizedPath(defaultLocale, entry.path)}`,
    lastModified: entry.lastModified,
    changeFrequency: 'monthly' as const,
    priority: entry.priority,
  }))
}
