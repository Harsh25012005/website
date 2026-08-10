import type { Localized } from './types'

/**
 * Single source of identity for the whole site. Swap these values (and the
 * files under `public/images`) to make the portfolio your own — nothing else
 * hardcodes a name, address or handle.
 *
 * Two shapes live here on purpose:
 * - `Localized<string>` fields (`role`, `location`, `city`) are rendered in the
 *   UI through the `value[locale]` pattern.
 * - plain strings (`jobTitle`, `region`, `country`, `countryCode`, …) are the
 *   machine-readable half, consumed by the JSON-LD builders. Keeping them flat
 *   means schema output never depends on the active locale.
 */
export const site = {
  name: 'Harsh Vaghela',
  role: {
    en: 'UI/UX & Product Designer',
  } satisfies Localized<string>,
  /** Schema-facing mirror of `role` — Person.jobTitle / ProfessionalService. */
  jobTitle: 'UI/UX & Product Designer',
  email: 'design.harsh25@gmail.com',
  /**
   * Rendered as a standalone line (About footer, mobile menu) and as the
   * "Based in" fact in the hero, so it carries the full city + state + country
   * string that local search actually looks for.
   */
  location: {
    en: 'Ahmedabad, Gujarat, India',
  } satisfies Localized<string>,
  /**
   * Sits inside the hero `h1` and the footer availability line — must stay a
   * single short word or the display heading loses its line rhythm.
   */
  city: {
    en: 'Ahmedabad',
  } satisfies Localized<string>,
  region: 'Gujarat',
  country: 'India',
  countryCode: 'IN',
  /** LocalBusiness/ProfessionalService `areaServed`, widest-last. */
  areaServed: ['Ahmedabad', 'Gujarat', 'India'],
  availability: 'Available for freelance and contract product design work',
  /**
   * ⚠️ PLACEHOLDER URLS — REPLACE BEFORE LAUNCH. ⚠️
   *
   * These are bare domain roots, not profiles. They are wrong in two ways:
   *   1. They render as live outbound links in the footer on every page, so
   *      the site donates link equity to three homepages it does not own.
   *   2. They feed `sameAs` in the Person/ProfessionalService JSON-LD. A
   *      `sameAs` entry that does not resolve to a profile owned by the same
   *      entity is worse than no entry at all — it breaks the identity graph
   *      Google builds around the name and blocks knowledge-panel eligibility.
   *
   * Replace each `href` with the real profile URL
   * (https://www.linkedin.com/in/<handle>, https://www.behance.net/<handle>,
   * https://dribbble.com/<handle>). If a profile does not exist yet, DELETE
   * the entry rather than shipping a root-domain link.
   */
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Behance', href: 'https://www.behance.net/' },
    { label: 'Dribbble', href: 'https://dribbble.com/' },
  ],
} as const

export const navigation = [
  { key: 'work', href: '/work' },
  { key: 'services', href: '/services' },
  { key: 'about', href: '/about' },
] as const
