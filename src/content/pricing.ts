import type { Faq, PricingPackage } from './types'

/* ────────────────────────────────────────────────────────────────────────────
 * ⚠️  THE FIGURES BELOW ARE NOT SET.  ⚠️
 *
 * Every `from` is `null`, which is a deliberate holding state rather than an
 * oversight. Set each one to a real starting price you are willing to be held
 * to publicly — a complete display string with the currency symbol, e.g.
 * `'₹40,000'` or `'$1,200'`.
 *
 * Until all three are set:
 *   - `/pricing` renders "Price on request" instead of inventing a number,
 *   - the page ships `noindex, follow`,
 *   - `sitemap.ts` leaves it out,
 *   - no `Offer` / `priceRange` schema is emitted anywhere on the site.
 *
 * All four of those are derived from `pricingIsPublishable` below, so there is
 * no flag to remember to flip and no way to half-launch the page. Fill in the
 * three numbers and it publishes itself.
 *
 * A starting price is a filter, not a quote. Pitch it at the smallest job you
 * would genuinely take on: too low and it attracts enquiries you do not want,
 * too high and it loses the ones you do.
 * ──────────────────────────────────────────────────────────────────────────── */

export const pricingPackages: PricingPackage[] = [
  {
    slug: 'landing-page',
    name: { en: 'Landing page' },
    from: null,
    unit: { en: 'per page' },
    summary: {
      en: 'A single high-intent page for a product launch, campaign or waiting list, designed to convert and handed over ready to build.',
    },
    bestFor: {
      en: 'Founders validating an idea, or a launch that needs one page to do the whole job.',
    },
    includes: {
      en: [
        'One responsive page designed in Figma, desktop through mobile',
        'Copy structure and section hierarchy, not just decoration',
        'Reusable section components, so the page can grow later',
        'Developer-ready file with spacing, type and colour documented',
      ],
    },
    services: ['web-ui-design'],
  },
  {
    slug: 'product-design',
    name: { en: 'Product design' },
    from: null,
    unit: { en: 'per project' },
    summary: {
      en: 'Multi-screen design for a web app, SaaS dashboard or mobile app: the flows, the core screens, the states everyone forgets, and a prototype to test it with.',
    },
    bestFor: {
      en: 'A product going from an idea or a rough build to something people can actually use.',
    },
    includes: {
      en: [
        'User flows and wireframes before any visual design',
        'High-fidelity screens for the flows agreed in the brief',
        'Empty, loading, error and permission states designed, not assumed',
        'Clickable Figma prototype for testing and developer handoff',
        'Component library and tokens for the screens in scope',
      ],
    },
    services: [
      'saas-product-design',
      'mobile-app-design',
      'ux-research-wireframing',
    ],
  },
  {
    slug: 'design-and-build',
    name: { en: 'Design and build' },
    from: null,
    unit: { en: 'per project' },
    summary: {
      en: 'The design work above, continued into a working responsive front end in React, Next.js and Tailwind CSS, so nothing is lost between the file and the live site.',
    },
    bestFor: {
      en: 'Teams without a front-end developer, or anyone who wants one person accountable for how it looks and how it ships.',
    },
    includes: {
      en: [
        'Everything in the design package for the scope agreed',
        'Front-end build in React, Next.js and Tailwind CSS',
        'Responsive implementation checked against the design at every breakpoint',
        'Keyboard navigation, focus states and colour contrast covered',
        'Cross-browser QA on desktop and mobile before launch',
        'Source code delivered in your repository',
      ],
    },
    services: ['figma-to-react', 'web-ui-design', 'design-systems'],
  },
]

/**
 * True only when every package carries a real starting figure.
 *
 * Derived rather than hand-maintained, for the same reason `profileSocials` in
 * `site.ts` is derived: a boolean someone has to remember to flip is a boolean
 * that eventually disagrees with the data it describes. Here that would mean
 * publishing a pricing page whose prices all read "on request" — the worst of
 * both options, since it ranks for a cost query and then answers nothing.
 */
export const pricingIsPublishable = pricingPackages.every(
  (pkg) => pkg.from !== null,
)

/**
 * ⚠️  Replace the payment-terms answer with your actual terms before this page
 * goes live. The wording below describes the shape of an engagement without
 * committing to a deposit percentage or an invoicing schedule, because those
 * are yours to set — but "it depends" converts far worse than "50% to start,
 * 50% on delivery", and once this page is indexed the answers are quoted in
 * search results and AI answers as if they were policy.
 */
export const pricingFaqs: Faq[] = [
  {
    question: { en: 'Why starting prices rather than a fixed rate card?' },
    answer: {
      en: 'Because the same package covers very different amounts of work. A five-screen dashboard and a fifty-screen one are both product design, and quoting one number for both would mean overcharging the first or underdelivering on the second. The starting figure tells you the smallest version of each engagement; the quote you get is fixed once the scope is agreed.',
    },
  },
  {
    question: { en: 'What makes a project cost more than the starting price?' },
    answer: {
      en: 'Screen count first, then how settled the product decisions are. A project that arrives with clear requirements moves quickly; one that needs the flows worked out from scratch includes research and wireframing before design starts. Multiple platforms, a design system built alongside the screens, and a coded build all add scope.',
    },
  },
  {
    question: { en: 'Do you charge hourly?' },
    answer: {
      en: 'No. Projects are quoted as a fixed price against a defined scope, agreed before work starts. You know the cost up front, and I am not billing you for the time it takes me to get something right.',
    },
  },
  {
    question: { en: 'What is not included?' },
    answer: {
      en: 'Back-end development, databases and infrastructure, native iOS and Android builds, copywriting, photography and illustration, and ongoing maintenance after handoff. Where a project needs any of these I will say so at the brief stage rather than after the estimate.',
    },
  },
  {
    question: { en: 'How does payment work?' },
    answer: {
      en: 'Payment is split across agreed milestones rather than collected in full up front or in full at the end, and the schedule is written into the scope document before any work starts, so there are no invoices you were not expecting.',
    },
  },
  {
    question: { en: 'What if the project needs to change halfway through?' },
    answer: {
      en: 'Scope changes are normal, and they are handled as a written change to the scope and the price rather than absorbed silently or argued about at the end. You always know what the current agreement is before the work continues.',
    },
  },
]
