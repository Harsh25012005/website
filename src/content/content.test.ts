import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { projects, getProject, getRelatedProjects } from './projects'
import { articles, getArticle } from './articles'
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

  it('resolves a project by slug and returns undefined otherwise', () => {
    expect(getProject('atlas')?.slug).toBe('atlas')
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
