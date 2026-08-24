import { locales, type Locale } from '@/lib/i18n'

/**
 * A content value that has been translated (or is pending translation) for every
 * locale. All existing `value[locale]` access patterns continue to work.
 *
 * At **definition** time, use `localized({ en: '…', es: '…' })` to supply only
 * the translations you have — the helper fills missing locales with the English
 * fallback. Or use `{ en: '…' } as Localized<string>` for inline definitions
 * where the English copy is the only source (the cast is safe because the
 * `localized()` factory is the canonical path for any value that actually gets
 * locale-switched).
 */
export type Localized<T> = Record<Locale, T>

/** Input type for `localized()`: English is required, everything else optional. */
type LocalizedInput<T> = { en: T } & Partial<Record<Exclude<Locale, 'en'>, T>>

/**
 * Content helper: define a localized value with only the translations you have.
 * English is required; any missing locale falls back to the English value.
 */
export function localized<T>(values: LocalizedInput<T>): Localized<T> {
  const result = { en: values.en } as Record<string, T>
  for (const locale of locales) {
    if (locale !== 'en') {
      result[locale] = (values as Record<string, T>)[locale] ?? values.en
    }
  }
  return result as Localized<T>
}

export type ImageAsset = {
  src: string
  alt: Localized<string>
  width?: number
  height?: number
}

export type ProjectTag = 'uxui' | 'branding' | 'website'

export type ProjectSection = {
  heading: Localized<string>
  paragraphs: Localized<string[]>
}

export type Project = {
  slug: string
  title: Localized<string>
  /** Short line under the title in listings, e.g. "Website, Branding". */
  discipline: Localized<string>
  year: string
  tags: ProjectTag[]
  /** Renders the "Soon" pill and disables the link in listings. */
  upcoming?: boolean
  summary: Localized<string>
  thumbnail: ImageAsset
  hero: ImageAsset
  /**
   * Overrides the hero frame's default `4/3` on mobile, `16/9` on desktop.
   * Set it to the image's own ratio when the composition cannot survive a
   * crop — a hero whose headline sits along the bottom edge loses the headline
   * in a 16/9 box. Everything else should leave this alone, so the listing
   * keeps one consistent hero shape.
   */
  heroAspect?: string
  meta: {
    label: Localized<string>
    value: Localized<string>
  }[]
  sections: ProjectSection[]
  gallery: {
    image: ImageAsset
    /**
     * Width in a twelve-column grid: `full` spans twelve, `half` six, `third`
     * four, `quarter` three.
     *
     * `quarter` is the one for phone screenshots. These sources are between
     * 1:1.77 and 1:2.13, so width drives height hard: a 563×1200 screen at a
     * third of the shell still renders over 850px tall, taller than most
     * laptop viewports. At a quarter it reads as a phone.
     */
    span: 'full' | 'half' | 'third' | 'quarter'
    aspect?: string
  }[]
  outcome: ProjectSection
  outcomeLink?: {
    label: Localized<string>
    href: string
  }
  /**
   * Article slugs to surface as further reading. Must resolve in
   * `articles.ts` — the content test asserts it.
   *
   * This is the return leg of the internal link graph. `/services` already
   * points into case studies and articles already point out to both, but until
   * this existed a case study was a dead end: everything flowed in and nothing
   * flowed back out, so the editorial section collected no internal links from
   * the pages that get the most.
   */
  relatedArticles?: string[]
}

export type Article = {
  slug: string
  title: Localized<string>
  excerpt: Localized<string>
  date: string
  readingTime: number
  cover: ImageAsset
  badge?: ImageAsset
  intro: Localized<string[]>
  sections: {
    heading: Localized<string>
    paragraphs: Localized<string[]>
    image?: ImageAsset
  }[]
  gallery: ImageAsset[]
  /** Case study slugs. Must resolve in `projects.ts`. */
  relatedProjects?: string[]
  /**
   * Service slugs. Must resolve in `services.ts`.
   *
   * The commercially useful half of the interlinking: an article ranking for
   * an informational query ("figma to react handoff") is worth little on its
   * own, and worth a great deal when it routes the reader to the page that
   * sells the thing they were reading about.
   */
  relatedServices?: string[]
}

export type Faq = {
  question: Localized<string>
  answer: Localized<string>
}

export type ContentSection = {
  heading: Localized<string>
  paragraphs: Localized<string[]>
}

/**
 * Which half of the practice a service belongs to.
 *
 * The site sells two things that are bought by different people at different
 * moments — a Figma file, and a running site — and a flat list of fifteen
 * services asks a visitor to work out which is which. The pillar drives the
 * grouping on `/services`, the two hub pages beneath it, and which siblings a
 * detail page links out to.
 *
 * ⚠️  These two values are also static route segments
 * (`/services/ui-ux-design`, `/services/custom-development`). No entry in
 * `services.ts` may use either as its `slug` — a static segment silently wins
 * over `[slug]` in the app router, so the service page would never render and
 * nothing would fail. `content.test.ts` asserts it.
 */
export type ServicePillar = 'design' | 'development'

/**
 * One service, and everything its own page needs.
 *
 * The detail fields are required rather than optional on purpose: every service
 * in the list gets a `/services/[slug]` page, and `generateStaticParams` maps
 * over the same array. Making them optional would let a service ship into the
 * hub listing with no page behind the link and no type error to catch it.
 *
 * `metaTitle` / `metaDescription` are flat strings, not `Localized`, for the
 * same reason the schema-facing half of `site.ts` is flat — they are consumed
 * by `buildMetadata` and the JSON-LD builders, never rendered through the
 * `value[locale]` pattern.
 */
export type Service = {
  slug: string
  pillar: ServicePillar
  /**
   * Display index within the pillar, so both groups read `01…n` on the hub.
   * It is therefore **not unique across the array** — anything keying a list on
   * a service must key on `slug`.
   */
  number: string
  /**
   * Surfaces this service in the six-cell grid on the home page.
   *
   * The grid used to render every service. That was fine at six and is a wall
   * at fifteen, and the home page's job is to route a visitor to the hub, not
   * to enumerate the catalogue. Keep this to six — three per pillar — so the
   * grid stays a 3×2 block.
   */
  featured?: boolean
  /** Short label — home page card, hub row, breadcrumb trail. */
  title: Localized<string>
  /** Summary line under the title in listings. */
  description: Localized<string>
  deliverables: Localized<string[]>
  /** `<title>` for `/services/[slug]`; the layout template appends the name. */
  metaTitle: string
  metaDescription: string
  keywords: string[]
  /** The detail page `h1` — longer and more specific than `title`. */
  heading: Localized<string>
  /** Lead paragraph under the `h1`. */
  intro: Localized<string>
  sections: ContentSection[]
  /** Rendered on the page as well as marked up. See the note in `about.ts`. */
  faqs: Faq[]
  /** Case study slugs surfaced as proof. Must resolve in `projects.ts`. */
  relatedProjects: string[]
  /**
   * One line under the pricing block, for a service whose cost does not work
   * the way the packages do — an audit scoped against the size of the site, a
   * monthly retainer. Required in practice for any service no package lists,
   * or the block falls back to a generic sentence that says nothing.
   */
  pricingNote?: Localized<string>
}

/**
 * A plain-prose legal page — `/privacy-policy`, `/terms`.
 *
 * `updated` is its own field rather than `site.contentUpdated`: a legal notice
 * dated today because a heading elsewhere changed is a false claim about when
 * the terms last changed, and it is the one date on the site a reader may
 * genuinely rely on.
 */
export type LegalDocument = {
  slug: string
  /** Breadcrumb and footer label. */
  title: Localized<string>
  metaTitle: string
  metaDescription: string
  heading: Localized<string>
  /** ISO date, e.g. `'2026-08-11'`. Bump only when the terms themselves change. */
  updated: string
  intro: Localized<string[]>
  sections: ContentSection[]
}

/**
 * One phase on `/process`.
 *
 * Deliberately not a `ContentSection`: `output` is the field that makes the
 * page worth publishing. A process page that describes activity without naming
 * what exists at the end of each stage is the genre's standard failure — every
 * agency has one, they all say "discover, define, design, deliver", and none of
 * them tell a client what they will be holding in three weeks.
 */
export type ProcessPhase = {
  number: string
  heading: Localized<string>
  paragraphs: Localized<string[]>
  /** What exists at the end of this phase, in a few words. */
  output: Localized<string>
}

/**
 * One of the two hub pages between `/services` and a service detail page.
 *
 * These are static routes (`/services/ui-ux-design`,
 * `/services/custom-development`) rather than entries in `services.ts`, because
 * a hub is not an offer: it has no deliverables, no related case studies and no
 * `Service` schema node. Modelling it as one would put two more `Offer`s in the
 * catalogue that nobody can buy.
 */
export type ServicePillarPage = {
  pillar: ServicePillar
  /** Route segment under `/services`. Must not collide with a service slug. */
  slug: string
  /** Short label — breadcrumb trail, cross-links, the `/services` group header. */
  title: Localized<string>
  metaTitle: string
  metaDescription: string
  keywords: string[]
  /** The hub page `h1`. */
  heading: Localized<string>
  intro: Localized<string>
  sections: ContentSection[]
  faqs: Faq[]
  /**
   * Anchor text for the link into this hub, authored in full rather than
   * composed from `title`. Lowercasing the title to fit it into a sentence
   * produced "more on ui/ux design" — an acronym is not a word, and the
   * general lesson is that display strings are written, not derived.
   */
  linkLabel: Localized<string>
  /** Sentence introducing the link across to the other pillar. */
  crossLink: Localized<string>
}

export type ToolGroup = {
  heading: Localized<string>
  intro: Localized<string>
  items: {
    name: string
    /** Why this one, in a sentence. A bare list is not worth a page. */
    note: Localized<string>
  }[]
}

export type ResumeEntry = {
  /**
   * Display range, e.g. `'2025 — present'`. `null` renders no date at all
   * rather than a guess — an invented employment date is the one thing on a
   * résumé that is trivially checkable and fatal when it does not match a
   * LinkedIn profile.
   */
  period: string | null
  role: Localized<string>
  organisation: Localized<string>
  location: Localized<string>
  points: Localized<string[]>
}

export type PricingPackage = {
  slug: string
  name: Localized<string>
  /**
   * The "from" anchor, as a complete display string including the currency
   * symbol and thousands separators — `'₹40,000'`, `'$1,200'`. It is not a
   * number because the currency is a positioning decision, not a formatting
   * one, and a site serving clients worldwide may not want to quote in INR.
   *
   * `null` means "not set yet", which is load-bearing: `pricingIsPublishable`
   * below is derived from it, and a null anywhere keeps `/pricing` noindex and
   * out of the sitemap. See the warning in `content/pricing.ts`.
   */
  from: string | null
  /** Qualifies the figure — 'per landing page', 'per project'. */
  unit: Localized<string>
  summary: Localized<string>
  bestFor: Localized<string>
  includes: Localized<string[]>
  /** Slugs in `services.ts` this package draws on. Must resolve. */
  services: string[]
}

export type Testimonial = {
  quote: Localized<string>
  name: string
  lines: Localized<string[]>
}
