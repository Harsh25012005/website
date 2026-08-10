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
   * Person portrait for JSON-LD `image`. Google wants a real photo of the named
   * entity here, not the OG card — it is one of the inputs to knowledge-panel
   * eligibility, and a logo or generic share image is silently ignored.
   */
  portrait: '/images/hero-portrait.png',
  /** Schema `knowsLanguage`; also what the hero "Languages" fact states. */
  languages: ['English'],
  /**
   * `Person.alumniOf`. Real institutions, spelled as they are elsewhere on the
   * site — a mismatch between the About prose and the schema weakens rather
   * than reinforces the entity.
   */
  education: [
    {
      name: 'Bholabhai Patel College of Computer Studies',
      credential: 'Bachelor of Computer Applications (BCA)',
    },
    {
      name: 'Bhagwan Swaminarayan Institute of Technology',
      credential: 'Master of Computer Applications (MCA), in progress',
    },
  ],
  /**
   * Bumped whenever page copy changes. Drives `lastModified` in the sitemap for
   * every URL that has no date of its own. Stamping `new Date()` there instead
   * tells crawlers the entire site changed on every deploy, which is false and
   * gets the signal discounted wholesale.
   */
  contentUpdated: '2026-08-10',
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

/**
 * A `sameAs` entry only helps if it resolves to a profile the same entity
 * controls. `https://www.linkedin.com/` is LinkedIn's own homepage, so claiming
 * it as "also me" asserts something false about a site Google knows perfectly
 * well belongs to Microsoft — the whole annotation set gets distrusted and the
 * identity graph the name should anchor never forms.
 *
 * Rather than hand-maintaining two lists, the schema layer derives its own:
 * anything that is a bare domain root is treated as the placeholder it is and
 * dropped. Replace the `href`s in `socials` with real profile URLs and they
 * start feeding schema automatically, with no second edit here.
 */
export function isProfileUrl(href: string): boolean {
  try {
    const { pathname } = new URL(href)
    return pathname.replace(/\/$/, '').length > 0
  } catch {
    return false
  }
}

/** `socials` minus the placeholder domain roots. Safe to emit as `sameAs`. */
export const profileSocials = site.socials.filter((social) =>
  isProfileUrl(social.href),
)

export const navigation = [
  { key: 'work', href: '/work' },
  { key: 'services', href: '/services' },
  { key: 'about', href: '/about' },
] as const

/**
 * Footer link column. Wider than the header nav on purpose: `/articles` has no
 * header entry (four items break the header's line rhythm) and was reachable
 * only from article cards, which left the whole editorial section hanging off a
 * single home-page module. A sitewide footer link is the cheapest fix — it puts
 * every article two clicks from any page and stops the section looking like an
 * afterthought to a crawler mapping the site's structure.
 */
export const footerNavigation = [
  ...navigation,
  { key: 'articles', href: '/articles' },
] as const
