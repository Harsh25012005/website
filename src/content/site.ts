import type { Localized } from './types'
import { pricingIsPublishable } from './pricing'
import { testimonialsArePublishable } from './about'

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

/**
 * Header nav — also the mobile menu.
 *
 * This used to be three items, on the reasoning that a fourth broke the
 * header's line rhythm. That constraint was solved in the header itself
 * (tighter gaps and a slightly smaller face above `md`) rather than paid for in
 * information architecture: leaving the pages that convert out of the primary
 * nav to protect a typographic detail is the wrong trade.
 *
 * Order is by intent, not by importance to me: someone evaluating a designer
 * looks at the work, then what it costs, then who they would be working with.
 */
const headerLinks = [
  { key: 'work', href: '/work' },
  { key: 'services', href: '/services' },
  { key: 'pricing', href: '/pricing' },
  { key: 'about', href: '/about' },
  { key: 'resume', href: '/resume' },
  { key: 'articles', href: '/articles' },
] as const

/**
 * Footer link column. Everything in the header, plus the pages that deserve a
 * sitewide link but not a place in the primary nav.
 *
 * Two deliberate absences:
 *
 * - `/thank-you` is a conversion destination and permanently noindex. Linking
 *   to it sitewide would let anyone reach it without sending anything.
 *
 * - `/ui-ux-designer-in-ahmedabad` is linked from the availability line at the
 *   bottom of this same footer instead. It is a local landing page, and a nav
 *   item reading "UI/UX designer in Ahmedabad" on every page of the site is
 *   exactly the keyword-stuffed pattern the page is trying not to be.
 */
const footerLinks = [
  ...headerLinks,
  { key: 'tools', href: '/tools' },
  { key: 'testimonials', href: '/testimonials' },
] as const

/**
 * `/pricing` and `/testimonials` drop out of both navs while their content is
 * not ready — each ships `noindex` until then, and a sitewide link to a noindex
 * page spends crawl budget on a page that has asked not to be indexed.
 *
 * Derived rather than commented-out entries someone has to remember to restore.
 * The failure mode that guards against is the quiet one: real prices get set,
 * the page starts indexing, and nothing on the site links to it — an orphaned
 * page with no internal links is a page that does not rank, and nothing about
 * it looks broken.
 */
function isPublishable(key: string): boolean {
  if (key === 'pricing') return pricingIsPublishable
  if (key === 'testimonials') return testimonialsArePublishable
  return true
}

/** Header nav and mobile menu. */
export const navigation = headerLinks.filter((item) => isPublishable(item.key))

export const footerNavigation = footerLinks.filter((item) =>
  isPublishable(item.key),
)
