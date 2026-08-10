import { site, profileSocials } from '@/content/site'
import { services, skills, tools } from '@/content/about'
import type { Article, Project } from '@/content/types'
import { siteUrl } from './seo'
import { localizedPath, type Locale } from './i18n'

/**
 * JSON-LD builders.
 *
 * Two rules run through all of this:
 *
 * 1. **One entity, one `@id`.** The Person, the WebSite and the business are
 *    emitted in full on the home page — and the Person again on `/about`, the
 *    document it describes — then referenced by `@id` everywhere else. Under
 *    one shared `@id` those two declarations are one entity, not two. What does
 *    create ambiguity is restating a full Person block on nine pages: that does
 *    not
 *    make the entity nine times stronger — it creates nine candidate entities
 *    that a parser has to reconcile, and any drift between them (a changed job
 *    title, a new social link added in one place) reads as conflicting claims
 *    about the same name.
 *
 * 2. **Never assert what the page does not show.** Every value below traces to
 *    something a visitor can read on the site. Schema that describes a richer
 *    site than the one that exists is the single fastest route to a manual
 *    structured-data penalty, and rich results are withdrawn for mismatch long
 *    before that.
 */

type JsonLdNode = Record<string, unknown>

/* ── stable node identifiers ──────────────────────────────────────────────── */

export const PERSON_ID = `${siteUrl}/#person`
export const WEBSITE_ID = `${siteUrl}/#website`
export const BUSINESS_ID = `${siteUrl}/#business`

const personRef = { '@id': PERSON_ID }

function absolute(path: string): string {
  return path.startsWith('http') ? path : `${siteUrl}${path}`
}

/* ── core entities ────────────────────────────────────────────────────────── */

const postalAddress = {
  '@type': 'PostalAddress',
  addressLocality: 'Ahmedabad',
  addressRegion: site.region,
  addressCountry: site.countryCode,
}

/**
 * The site's central entity. `knowsAbout` is the practical part: it is how a
 * search engine connects "Harsh Vaghela" to the topics the site should rank
 * for, rather than inferring them from page copy alone.
 */
export function personSchema(): JsonLdNode {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: site.name,
    url: siteUrl,
    image: absolute(site.portrait),
    jobTitle: site.jobTitle,
    description: `${site.jobTitle} in ${site.location.en}, working on design systems, web UI, mobile app and SaaS product design, and building the front end in React and Next.js.`,
    email: `mailto:${site.email}`,
    address: postalAddress,
    homeLocation: {
      '@type': 'Place',
      name: site.location.en,
      address: postalAddress,
    },
    nationality: { '@type': 'Country', name: site.country },
    knowsLanguage: site.languages,
    knowsAbout: [...skills, ...tools],
    alumniOf: site.education.map((entry) => ({
      '@type': 'CollegeOrUniversity',
      name: entry.name,
    })),
    hasCredential: site.education.map((entry) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: entry.credential,
      recognizedBy: { '@type': 'CollegeOrUniversity', name: entry.name },
    })),
    hasOccupation: {
      '@type': 'Occupation',
      name: site.jobTitle,
      occupationLocation: { '@type': 'City', name: 'Ahmedabad' },
      skills: skills.join(', '),
    },
    worksFor: { '@id': BUSINESS_ID },
    // Empty when every social is still a placeholder domain root — an absent
    // `sameAs` is neutral, a wrong one is actively harmful. See `site.ts`.
    ...(profileSocials.length
      ? { sameAs: profileSocials.map((social) => social.href) }
      : {}),
  }
}

/**
 * No `SearchAction` here. The sitelinks searchbox it requests has been retired
 * by Google, and there is no `/search` route to point it at — declaring one
 * would describe a feature this site does not have.
 */
export function websiteSchema(): JsonLdNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: siteUrl,
    name: `${site.name} - ${site.jobTitle}`,
    description: `Portfolio of ${site.name}, a freelance ${site.jobTitle.toLowerCase()} based in ${site.location.en}.`,
    inLanguage: 'en',
    publisher: personRef,
    copyrightHolder: personRef,
  }
}

/**
 * The commercial entity behind the same person. `ProfessionalService` is a
 * `LocalBusiness` subtype, which is what makes the Ahmedabad address and the
 * `areaServed` list eligible to be read as local-business signals at all — a
 * lone `Person` carries the address as trivia.
 *
 * No `aggregateRating` and no `review`: there are no published testimonials
 * (`testimonials` in `about.ts` is deliberately empty). Self-serving review
 * markup on a page showing no reviews is the most commonly penalised pattern
 * in this vocabulary.
 */
export function professionalServiceSchema(): JsonLdNode {
  return {
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: site.name,
    url: siteUrl,
    image: absolute(site.portrait),
    email: `mailto:${site.email}`,
    description: `Freelance UI/UX and product design studio of ${site.name} — web UI, design systems, mobile app and SaaS product design, delivered from Figma through to a coded React and Next.js front end.`,
    founder: personRef,
    employee: personRef,
    address: postalAddress,
    areaServed: site.areaServed.map((name) => ({ '@type': 'Place', name })),
    availableLanguage: site.languages,
    knowsAbout: skills,
    slogan: site.availability,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'UI/UX and product design services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title.en,
          description: service.description.en,
          serviceType: service.title.en,
          provider: { '@id': BUSINESS_ID },
          areaServed: site.areaServed.map((name) => ({
            '@type': 'Place',
            name,
          })),
        },
      })),
    },
  }
}

/* ── page-level nodes ─────────────────────────────────────────────────────── */

/**
 * Breadcrumbs are the one item here with a guaranteed visible payoff: Google
 * replaces the raw URL in the result with the trail, which measurably lifts CTR
 * on deep pages like `/work/atlas`. The trail must match the site's actual link
 * structure, so it is built from the same paths the nav uses.
 */
export function breadcrumbSchema(
  locale: Locale,
  trail: { name: string; path: string }[],
): JsonLdNode {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map(
      (item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${siteUrl}${localizedPath(locale, item.path)}`,
      }),
    ),
  }
}

export function webPageSchema({
  locale,
  path,
  title,
  description,
  type = 'WebPage',
}: {
  locale: Locale
  path: string
  title: string
  description: string
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage'
}): JsonLdNode {
  const url = `${siteUrl}${localizedPath(locale, path)}`

  return {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: personRef,
    inLanguage: 'en',
    primaryImageOfPage: absolute(site.portrait),
  }
}

/**
 * Listing pages. The `ItemList` is what lets a crawler see the collection as an
 * ordered set of known entities rather than a wall of thumbnails, and it is the
 * input to the "list" style results that portfolio and blog indexes get.
 */
export function collectionPageSchema({
  locale,
  path,
  title,
  description,
  items,
}: {
  locale: Locale
  path: string
  title: string
  description: string
  items: { name: string; path: string }[]
}): JsonLdNode {
  return {
    ...webPageSchema({
      locale,
      path,
      title,
      description,
      type: 'CollectionPage',
    }),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: `${siteUrl}${localizedPath(locale, item.path)}`,
      })),
    },
  }
}

/**
 * A case study is a `CreativeWork` about the delivered product, not an
 * `Article` — the page documents work that was done rather than publishing
 * commentary. `dateCreated` is deliberately omitted: `project.year` is a range
 * like `2025–2026`, and coercing a range into a date property would publish a
 * date the site never claims.
 */
export function projectSchema(project: Project, locale: Locale): JsonLdNode {
  const url = `${siteUrl}${localizedPath(locale, `/work/${project.slug}`)}`

  return {
    '@type': 'CreativeWork',
    '@id': `${url}#case-study`,
    url,
    name: project.title[locale],
    headline: `${project.title[locale]} — ${project.discipline[locale]}`,
    description: project.summary[locale],
    genre: project.discipline[locale],
    creator: personRef,
    author: personRef,
    copyrightHolder: personRef,
    inLanguage: 'en',
    temporalCoverage: project.year,
    keywords: project.discipline[locale]
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean),
    image: [project.hero.src, project.thumbnail.src].map(absolute),
    thumbnailUrl: absolute(project.thumbnail.src),
    isPartOf: { '@id': WEBSITE_ID },
    mainEntityOfPage: { '@id': `${url}#webpage` },
  }
}

/** Words across every paragraph a reader actually sees, for `wordCount`. */
function countWords(article: Article, locale: Locale): number {
  const paragraphs = [
    ...article.intro[locale],
    ...article.sections.flatMap((section) => section.paragraphs[locale]),
  ]

  return paragraphs.reduce(
    (total, paragraph) => total + paragraph.trim().split(/\s+/).length,
    0,
  )
}

/**
 * `BlogPosting` rather than the broader `Article`: these are dated,
 * single-author editorial posts, and the narrower type is the one that carries
 * the author/date pairing through to the result snippet.
 *
 * `dateModified` mirrors `datePublished` because the content layer stores one
 * date. Inventing a fresher `dateModified` to look recently updated is the
 * classic own-goal — it is trivially contradicted by the crawl history.
 */
export function articleSchema(article: Article, locale: Locale): JsonLdNode {
  const url = `${siteUrl}${localizedPath(locale, `/articles/${article.slug}`)}`

  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    url,
    headline: article.title[locale],
    description: article.excerpt[locale],
    image: [absolute(article.cover.src)],
    datePublished: article.date,
    dateModified: article.date,
    author: personRef,
    publisher: personRef,
    copyrightHolder: personRef,
    inLanguage: 'en',
    wordCount: countWords(article, locale),
    timeRequired: `PT${article.readingTime}M`,
    articleSection: 'Design',
    keywords: ['UI design', 'UX design', 'design systems', 'front-end'],
    isPartOf: { '@id': WEBSITE_ID },
    mainEntityOfPage: { '@id': `${url}#webpage` },
  }
}

export function faqSchema(
  faqs: { question: string; answer: string }[],
): JsonLdNode {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

/* ── serialisation ────────────────────────────────────────────────────────── */

/**
 * Wraps the page's nodes into a single `@graph`. One script tag per page keeps
 * the cross-references (`@id` lookups between Person, WebSite and the page
 * node) resolvable within one document, which is how consumers are specified to
 * resolve them.
 */
export function graph(...nodes: JsonLdNode[]): JsonLdNode {
  return { '@context': 'https://schema.org', '@graph': nodes }
}
