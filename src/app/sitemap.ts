import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/seo'
import { locales, localizedPath, defaultLocale } from '@/lib/i18n'
import { projects } from '@/content/projects'
import { articles } from '@/content/articles'

/**
 * Emits both locales for every route, each carrying the full `alternates`
 * set — the signal search engines use to serve the right language rather
 * than treating the pair as duplicate content.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/work',
    '/articles',
    '/about',
    '/contact',
    '/privacy',
    ...projects.map((project) => `/work/${project.slug}`),
    ...articles.map((article) => `/articles/${article.slug}`),
  ]

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}${localizedPath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries([
          ...locales.map((value) => [
            value,
            `${siteUrl}${localizedPath(value, path)}`,
          ]),
          ['x-default', `${siteUrl}${localizedPath(defaultLocale, path)}`],
        ]),
      },
    })),
  )
}
