import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { projects, getProject, getRelatedProjects } from './projects'
import { articles, getArticle } from './articles'
import { services, getService, servicesByPillar } from './services'
import { pillars, pillarOrder, pillarSlugs } from './pillars'
import { processPhases, processFaqs } from './process'
import { legalDocuments } from './legal'
import { getDictionary } from './dictionary'
import { locales } from '@/lib/i18n'

/**
 * These guard the content layer rather than the components: a missing
 * translation or a typo'd image path renders as blank space or a broken
 * frame, neither of which fails a build.
 */

const PUBLIC_DIR = join(process.cwd(), 'public')

function collectImagePaths(): string[] {
  const paths: string[] = []

  for (const project of projects) {
    paths.push(project.thumbnail.src, project.hero.src)
    for (const item of project.gallery) paths.push(item.image.src)
  }
  for (const article of articles) {
    paths.push(article.cover.src)
    for (const section of article.sections) {
      if (section.image) paths.push(section.image.src)
    }
    for (const image of article.gallery) paths.push(image.src)
  }

  return paths
}

describe('content images', () => {
  it('all referenced files exist in public/', () => {
    const missing = collectImagePaths().filter((src) => {
      try {
        readFileSync(join(PUBLIC_DIR, src))
        return false
      } catch {
        return true
      }
    })

    expect(missing).toEqual([])
  })
})

describe('projects', () => {
  it('has unique slugs', () => {
    const slugs = projects.map((project) => project.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  // Reads the slug from the data rather than naming one. The hardcoded
  // 'atlas' this replaced failed the moment the placeholder case studies were
  // swapped for real ones — a test that breaks on a content edit is testing
  // the fixture, not the resolver.
  it('resolves a project by slug and returns undefined otherwise', () => {
    const first = projects[0]!.slug
    expect(getProject(first)?.slug).toBe(first)
    expect(getProject('does-not-exist')).toBeUndefined()
  })

  it('never lists a project as related to itself', () => {
    for (const project of projects) {
      const related = getRelatedProjects(project.slug)
      expect(related.some((item) => item.slug === project.slug)).toBe(false)
    }
  })

  it('carries copy for every locale', () => {
    for (const project of projects) {
      for (const locale of locales) {
        expect(project.title[locale]).toBeTruthy()
        expect(project.summary[locale]).toBeTruthy()
        expect(project.discipline[locale]).toBeTruthy()
        expect(project.outcome.paragraphs[locale].length).toBeGreaterThan(0)
      }
    }
  })
})

describe('articles', () => {
  it('has unique slugs and resolves by slug', () => {
    const slugs = articles.map((article) => article.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    expect(getArticle(slugs[0]!)?.slug).toBe(slugs[0])
  })

  it('carries copy for every locale', () => {
    for (const article of articles) {
      for (const locale of locales) {
        expect(article.title[locale]).toBeTruthy()
        expect(article.excerpt[locale]).toBeTruthy()
      }
    }
  })

  it('uses parseable dates', () => {
    for (const article of articles) {
      expect(Number.isNaN(Date.parse(article.date))).toBe(false)
    }
  })
})

/**
 * The internal link graph. Every one of these is a slug typed by hand in one
 * file and resolved in another, which fails as a silently missing section
 * rather than as an error — exactly the class of bug that erodes internal
 * linking over time without anyone noticing.
 */
describe('cross-links', () => {
  const projectSlugs = new Set(projects.map((p) => p.slug))
  const articleSlugs = new Set(articles.map((a) => a.slug))

  it('project -> article links resolve', () => {
    for (const project of projects) {
      for (const slug of project.relatedArticles ?? []) {
        expect(articleSlugs, `${project.slug} -> ${slug}`).toContain(slug)
      }
    }
  })

  it('article -> project and service links resolve', () => {
    for (const article of articles) {
      for (const slug of article.relatedProjects ?? []) {
        expect(projectSlugs, `${article.slug} -> ${slug}`).toContain(slug)
      }
      for (const slug of article.relatedServices ?? []) {
        expect(getService(slug), `${article.slug} -> ${slug}`).toBeDefined()
      }
    }
  })

  /**
   * Reciprocity is the point. A case study that links out to an article while
   * no article links back leaves the editorial section collecting nothing from
   * the pages that carry the most weight.
   */
  it('every project and article has at least one outbound cross-link', () => {
    for (const project of projects) {
      expect(
        (project.relatedArticles ?? []).length,
        `${project.slug} has no related articles`,
      ).toBeGreaterThan(0)
    }
    for (const article of articles) {
      expect(
        (article.relatedProjects ?? []).length +
          (article.relatedServices ?? []).length,
        `${article.slug} has no related work or services`,
      ).toBeGreaterThan(0)
    }
  })
})

describe('services', () => {
  it('has unique slugs and resolves by slug', () => {
    const slugs = services.map((service) => service.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    expect(getService(slugs[0]!)?.slug).toBe(slugs[0])
    expect(getService('does-not-exist')).toBeUndefined()
  })

  /**
   * A stale slug here renders a "Related case studies" heading above an empty
   * grid — no error, no build failure, just a service page that quietly stops
   * showing its proof. Same for the service links on `/pricing`.
   */
  it('references case studies that exist', () => {
    const projectSlugs = new Set(projects.map((project) => project.slug))

    for (const service of services) {
      expect(service.relatedProjects.length).toBeGreaterThan(0)
      for (const slug of service.relatedProjects) {
        expect(projectSlugs).toContain(slug)
      }
    }
  })

  it('carries copy for every locale', () => {
    for (const service of services) {
      for (const locale of locales) {
        expect(service.title[locale]).toBeTruthy()
        expect(service.description[locale]).toBeTruthy()
        expect(service.heading[locale]).toBeTruthy()
        expect(service.intro[locale]).toBeTruthy()
        expect(service.deliverables[locale].length).toBeGreaterThan(0)
        expect(service.sections.length).toBeGreaterThan(0)
        expect(service.faqs.length).toBeGreaterThan(0)
      }
    }
  })

  /**
   * Two pages sharing a `<title>` compete with each other for the same query
   * and let Google pick which to drop — the whole point of the split was to
   * give each service a distinct one.
   */
  it('has a distinct meta title and description per service', () => {
    const titles = services.map((service) => service.metaTitle)
    const descriptions = services.map((service) => service.metaDescription)

    expect(new Set(titles).size).toBe(titles.length)
    expect(new Set(descriptions).size).toBe(descriptions.length)
  })
})

/**
 * The pillar layer. Two of these guard failures that produce no error at all —
 * a page that silently never renders, and a home page grid that silently loses
 * its bottom edge.
 */
describe('service pillars', () => {
  /**
   * The important one.
   *
   * `/services/ui-ux-design` and `/services/custom-development` are static
   * route segments sitting beside `[slug]`. Next.js resolves a static segment
   * first, so a service whose slug matched one would never render its page:
   * the hub would render instead, the build would succeed, the sitemap would
   * list the URL, and nothing anywhere would report a problem.
   */
  it('no service slug collides with a pillar hub route', () => {
    for (const service of services) {
      expect(
        pillarSlugs,
        `service "${service.slug}" is shadowed by the pillar hub route of the same name`,
      ).not.toContain(service.slug)
    }
  })

  it('assigns every service to a pillar that has a hub', () => {
    for (const service of services) {
      expect(pillarOrder, service.slug).toContain(service.pillar)
    }
  })

  it('leaves neither hub empty', () => {
    for (const key of pillarOrder) {
      expect(servicesByPillar(key).length, `${key} hub`).toBeGreaterThan(0)
    }
  })

  /**
   * The home page grid is `md:grid-cols-3` with the right border suppressed on
   * every third cell. At any count that is not a multiple of three it ends on a
   * ragged row with a stray border, which is a visual bug nobody thinks to look
   * for after editing a content file.
   */
  it('features exactly six services, filling two rows of three', () => {
    const featured = services.filter((service) => service.featured)
    expect(featured).toHaveLength(6)
  })

  it('numbers each pillar from 01 without gaps or repeats', () => {
    for (const key of pillarOrder) {
      const numbers = servicesByPillar(key).map((service) => service.number)
      const expected = numbers.map((_, index) =>
        String(index + 1).padStart(2, '0'),
      )
      expect(numbers, `${key} numbering`).toEqual(expected)
    }
  })

  it('carries copy for every locale', () => {
    for (const key of pillarOrder) {
      const page = pillars[key]
      for (const locale of locales) {
        expect(page.title[locale]).toBeTruthy()
        expect(page.heading[locale]).toBeTruthy()
        expect(page.intro[locale]).toBeTruthy()
        expect(page.linkLabel[locale]).toBeTruthy()
        expect(page.crossLink[locale]).toBeTruthy()
        expect(page.sections.length).toBeGreaterThan(0)
        expect(page.faqs.length).toBeGreaterThan(0)
      }
    }
  })

  /**
   * A hub and a service competing for the same `<title>` is the exact problem
   * the pillar split was meant to solve, not create.
   */
  it('does not share a meta title with any service', () => {
    const serviceTitles = new Set(services.map((service) => service.metaTitle))

    for (const key of pillarOrder) {
      expect(serviceTitles).not.toContain(pillars[key].metaTitle)
    }
    expect(new Set(pillarOrder.map((key) => pillars[key].metaTitle)).size).toBe(
      pillarOrder.length,
    )
  })
})

describe('process', () => {
  it('carries copy and an output for every phase', () => {
    expect(processPhases.length).toBeGreaterThan(0)

    for (const phase of processPhases) {
      for (const locale of locales) {
        expect(phase.heading[locale]).toBeTruthy()
        expect(phase.paragraphs[locale].length).toBeGreaterThan(0)
        // The field the page exists for. A phase with no stated output is the
        // agency-process-page failure this page was written to avoid.
        expect(phase.output[locale], phase.number).toBeTruthy()
      }
    }
  })

  /**
   * `/process`, `/services` and every service page each emit `FAQPage` markup.
   * The same question answered on two URLs is duplicate structured data
   * competing with itself, so the sets have to stay disjoint.
   */
  it('asks nothing already answered on a service page', () => {
    const asked = new Set(
      services.flatMap((service) =>
        service.faqs.map((faq) => faq.question.en.toLowerCase()),
      ),
    )

    for (const faq of processFaqs) {
      expect(asked, faq.question.en).not.toContain(faq.question.en.toLowerCase())
    }
  })
})

describe('legal documents', () => {
  it('has unique slugs and parseable updated dates', () => {
    const slugs = legalDocuments.map((doc) => doc.slug)
    expect(new Set(slugs).size).toBe(slugs.length)

    for (const doc of legalDocuments) {
      expect(Number.isNaN(Date.parse(doc.updated)), doc.slug).toBe(false)
    }
  })

  it('carries copy for every locale', () => {
    for (const doc of legalDocuments) {
      for (const locale of locales) {
        expect(doc.title[locale]).toBeTruthy()
        expect(doc.heading[locale]).toBeTruthy()
        expect(doc.intro[locale].length).toBeGreaterThan(0)
        expect(doc.sections.length).toBeGreaterThan(0)
      }
    }
  })
})

describe('dictionary', () => {
  it('exposes the same keys in every locale', () => {
    const flatten = (value: object, prefix = ''): string[] =>
      Object.entries(value).flatMap(([key, child]) =>
        typeof child === 'object' && child !== null
          ? flatten(child, `${prefix}${key}.`)
          : [`${prefix}${key}`],
      )

    const [first, ...rest] = locales.map((locale) =>
      flatten(getDictionary(locale)).sort(),
    )

    for (const keys of rest) expect(keys).toEqual(first)
  })
})
