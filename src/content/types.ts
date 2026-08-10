import type { Locale } from '@/lib/i18n'

/** Every user-facing string is keyed by locale so pages stay locale-agnostic. */
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
  meta: {
    label: Localized<string>
    value: Localized<string>
  }[]
  sections: ProjectSection[]
  gallery: {
    image: ImageAsset
    /** `full` spans both columns; `half` sits in the two-up grid. */
    span: 'full' | 'half'
    aspect?: string
  }[]
  outcome: ProjectSection
  outcomeLink?: {
    label: Localized<string>
    href: string
  }
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
}

export type PersonalCategory = {
  slug: 'photography' | '2d' | '3d'
  title: Localized<string>
  description: Localized<string>
  cover: ImageAsset
  gallery: {
    image: ImageAsset
    aspect: string
  }[]
}

export type Service = {
  number: string
  title: Localized<string>
  description: Localized<string>
}

export type Testimonial = {
  quote: Localized<string>
  name: string
  lines: Localized<string[]>
}
