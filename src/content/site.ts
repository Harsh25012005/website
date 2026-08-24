import type { Localized } from './types'
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
  /**
   * Was 'UI/UX & Product Designer'. It changed when the site grew a
   * development pillar: nine service pages selling coded builds, under a
   * `Person.jobTitle` claiming only design, is the site contradicting itself on
   * the one field a knowledge panel reads first.
   *
   * This describes the freelance practice, not the in-house job — `employer`
   * below still carries "Product Designer at Code Theorem", which is a separate
   * and equally true claim. If the development work ever stops, revert both
   * this and `jobTitle` in the same edit; they must always match.
   */
  role: {
    en: 'UI/UX Designer & Front-End Developer',
    es: 'Diseñador UI/UX y Desarrollador Front-End',
    fr: 'Designer UI/UX & Développeur Front-End',
  } satisfies Localized<string>,
  /** Schema-facing mirror of `role` — Person.jobTitle / ProfessionalService. */
  jobTitle: 'UI/UX Designer & Front-End Developer',
  email: 'design.harsh25@gmail.com',
  /**
   * Rendered as a standalone line (About footer, mobile menu) and as the
   * "Based in" fact in the hero, so it carries the full city + state + country
   * string that local search actually looks for.
   */
  location: {
    en: 'Ahmedabad, Gujarat, India',
    es: 'Ahmedabad, Gujarat, India',
    fr: 'Ahmedabad, Gujarat, Inde',
  } satisfies Localized<string>,
  /**
   * Sits inside the hero `h1` and the footer availability line — must stay a
   * single short word or the display heading loses its line rhythm.
   */
  city: {
    en: 'Ahmedabad',
    es: 'Ahmedabad',
    fr: 'Ahmedabad',
  } satisfies Localized<string>,
  region: 'Gujarat',
  country: 'India',
  countryCode: 'IN',
  /** LocalBusiness/ProfessionalService `areaServed`, widest-last. */
  areaServed: ['Ahmedabad', 'Gujarat', 'India'],
  availability:
    'Open to freelance and contract product design work alongside a full-time role',
  /**
   * The current in-house role. It lives here rather than only in `resume.ts`
   * because `Person.worksFor` has to name the same employer the résumé page
   * shows: schema that claims one employer while the visible page shows another
   * is exactly the mismatch that gets an annotation set discounted wholesale.
   *
   * `url` must be the employer's own site. It is what lets a consumer resolve
   * "Code Theorem" to a known organisation instead of an unresolvable string,
   * and it is the only part of this block a reader cannot verify from the page.
   *
   * Freelance work continues alongside this, so `worksFor` emits both the
   * employer and the freelance practice rather than replacing one with the
   * other. Delete this block if the role ends — an employer left in schema
   * after the fact is a false present-tense claim, not a stale nicety.
   */
  employer: {
    name: 'Code Theorem',
    url: 'https://codetheorem.co',
    jobTitle: 'Product Designer',
    location: 'Ahmedabad, Gujarat, India',
  },
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
  contentUpdated: '2026-08-11',
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
 * Order is by intent: someone evaluating a designer looks at the work, then
 * what services are on offer, then who they would be working with.
 */
const headerLinks = [
  { key: 'work', href: '/work' },
  { key: 'services', href: '/services' },
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
  { key: 'process', href: '/process' },
  { key: 'tools', href: '/tools' },
  { key: 'testimonials', href: '/testimonials' },
] as const

/**
 * Bottom-bar links, beside the copyright line.
 *
 * Separate from `footerLinks` on purpose. These two are a trust requirement
 * rather than navigation — the contact form collects personal data, so a
 * privacy notice has to be reachable from every page — and putting them in the
 * menu column would rank them alongside the pages that actually sell something.
 *
 * They are indexable and in the sitemap. A commercial site with no findable
 * privacy policy looks like a commercial site that has not thought about it.
 */
export const legalNavigation = [
  { key: 'privacy', href: '/privacy-policy' },
  { key: 'terms', href: '/terms' },
] as const

/**
 * `/testimonials` drops out of both navs while its content is not ready —
 * it ships `noindex` until then, and a sitewide link to a noindex page
 * spends crawl budget on a page that has asked not to be indexed.
 */
function isPublishable(key: string): boolean {
  if (key === 'testimonials') return testimonialsArePublishable
  return true
}

/** Header nav and mobile menu. */
export const navigation = headerLinks.filter((item) => isPublishable(item.key))

export const footerNavigation = footerLinks.filter((item) =>
  isPublishable(item.key),
)
