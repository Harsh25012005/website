import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/seo'
import { localizedPath, locales, localeRegionTags, defaultLocale } from '@/lib/i18n'
import { site } from '@/content/site'
import { projects } from '@/content/projects'
import { articles } from '@/content/articles'
import { services } from '@/content/services'
import { pillarOrder, pillarPath } from '@/content/pillars'
import { legalDocuments } from '@/content/legal'
import { testimonialsArePublishable } from '@/content/about'

/**
 * Every indexable URL, once each, for every locale.
 *
 * Each entry now carries `alternates.languages` linking the English, Spanish
 * and French versions together plus `x-default` pointing at English. This
 * matches the hreflang annotations `lib/seo.ts` emits in the page `<head>`,
 * and the two must always agree — a one-sided annotation is worse than none.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const contentUpdated = new Date(site.contentUpdated)

  const newestArticle = articles.reduce(
    (latest, article) =>
      Date.parse(article.date) > Date.parse(latest) ? article.date : latest,
    articles[0]?.date ?? site.contentUpdated,
  )

  const entries: { path: string; lastModified: Date; priority: number }[] = [
    { path: '/', lastModified: contentUpdated, priority: 1 },
    { path: '/work', lastModified: contentUpdated, priority: 0.9 },
    { path: '/services', lastModified: contentUpdated, priority: 0.9 },
    ...pillarOrder.map((key) => ({
      path: pillarPath(key),
      lastModified: contentUpdated,
      priority: 0.9,
    })),
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
    ...legalDocuments.map((doc) => ({
      path: `/${doc.slug}`,
      lastModified: new Date(doc.updated),
      priority: 0.3,
    })),
  ]

  /**
   * Build hreflang alternates for a given path — mirrors the annotation set
   * that `lib/seo.ts` emits in the page `<head>`.
   */
  function alternatesForPath(path: string) {
    const languages: Record<string, string> = {}
    for (const loc of locales) {
      languages[localeRegionTags[loc]] =
        `${siteUrl}${localizedPath(loc, path)}`
    }
    languages['x-default'] = `${siteUrl}${localizedPath('en', path)}`
    return languages
  }

  // Emit one entry per (locale × path). Every entry carries the full set
  // of hreflang alternates so each language version links back to the others.
  const sitemapEntries: MetadataRoute.Sitemap = []

  for (const entry of entries) {
    const alternates = alternatesForPath(entry.path)

    for (const locale of locales) {
      sitemapEntries.push({
        url: `${siteUrl}${localizedPath(locale, entry.path)}`,
        lastModified: entry.lastModified,
        changeFrequency: 'monthly',
        priority: locale === defaultLocale ? entry.priority : entry.priority * 0.9,
        alternates: { languages: alternates },
      })
    }
  }

  return sitemapEntries
}
