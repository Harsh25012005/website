import type { Locale } from '@/lib/i18n'

/**
 * Every user-facing string is keyed by locale so pages stay locale-agnostic and
 * keep reading content as `value[locale]`. The site is English-only, so this
 * currently narrows to `{ en: T }` — the wrapper is kept so adding a language
 * back is a content change rather than a component rewrite.
 */
export type Localized<T> = Record<Locale, T>

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
  number: string
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
