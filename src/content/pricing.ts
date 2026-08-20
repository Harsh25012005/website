import type { Faq, PricingPackage } from './types'

/* ────────────────────────────────────────────────────────────────────────────
 * ⚠️  THESE ARE LIVE PUBLIC PRICES.  ⚠️
 *
 * All four figures are set, so `pricingIsPublishable` is true and the page has
 * published itself: `/pricing` is indexable, it is in the sitemap, it is back
 * in the header and footer nav, and every service page and the home page show a
 * real starting figure instead of "Price on request".
 *
 * Setting any `from` back to `null` reverses all of that in one edit — the page
 * returns to `noindex`, drops out of the sitemap and the navs, and the figures
 * revert to "Price on request" everywhere. There is no flag to remember.
 *
 * Each figure is a **starting** price: the smallest version of that engagement,
 * not the average. They are display strings including the currency symbol, so
 * changing currency is an edit here and nowhere else.
 *
 * Chosen against 1.5+ years of experience, a portfolio that is currently
 * concept-led, and no published testimonials. All four should rise once two or
 * three real client case studies and some quotes are on the site — that is the
 * thing holding them down, not the work.
 *
 * A starting price is a filter, not a quote. Pitch it at the smallest job you
 * would genuinely take on: too low and it attracts enquiries you do not want,
 * too high and it loses the ones you do.
 * ──────────────────────────────────────────────────────────────────────────── */

export const pricingPackages: PricingPackage[] = [
  {
    slug: 'landing-page',
    name: { en: 'Landing page' },
    from: '$99',
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
    from: '$399',
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
    slug: 'development',
    name: { en: 'Development only' },
    from: '$199',
    unit: { en: 'per project' },
    summary: {
      en: 'You already have the design. It gets built as a responsive front end on the platform that suits whoever maintains it afterwards — React and Next.js, Webflow, or Framer.',
    },
    bestFor: {
      en: 'Teams with a designer, or an approved Figma file, and no front-end developer free to build it.',
    },
    includes: {
      en: [
        'Front-end build from your Figma file, whoever drew it',
        'React and Next.js, Webflow, or Framer',
        'Every breakpoint checked against the design, not approximated',
        'Keyboard navigation, focus states and colour contrast covered',
        'Cross-browser QA on desktop and mobile before launch',
        'Source code in your repository, or the site in your own platform account',
      ],
    },
    services: [
      'custom-web-development',
      'figma-to-react',
      'webflow-development',
      'framer-development',
    ],
  },
  {
    slug: 'design-and-build',
    name: { en: 'Design and build' },
    from: '$599 ',
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
    services: [
      'figma-to-react',
      'web-ui-design',
      'design-systems',
      'landing-page-development',
      'website-redesign',
    ],
  },
]

/**
 * Budget bands for the contact form.
 *
 * They live here rather than in the form because they only make sense against
 * the figures above: the bands straddle the four starting prices so that a
 * visitor who has read `/pricing` finds their number sitting inside a band
 * rather than on a boundary. Change a price and check these still do that.
 *
 * "Not sure yet" is deliberately last and deliberately present. Without it the
 * honest answer for an early-stage enquiry is to abandon the form, and a
 * missing enquiry is worth less than an imprecise one.
 */
export const budgetBands = [
  'Under $500',
  '$500 – $1,500',
  '$1,500 – $3,000',
  '$3,000 – $6,000',
  'Over $6,000',
  'Not sure yet',
] as const

/**
 * The packages a given service appears in — the reverse of the `services`
 * arrays above, so a service page can show what it costs without either file
 * hand-maintaining a second mapping that drifts from the first.
 *
 * Returns an empty array for `ui-ux-audit` on purpose:
 *
 *   - `ui-ux-audit` is scoped against the size of the thing being audited,
 *     not against a package.
 *
 * That page renders an honest "quoted per project" line instead of being
 * forced into a package that would misdescribe it. If a package is ever added
 * for it, it picks it up here with no further edit.
 */
export function getPackagesForService(slug: string): PricingPackage[] {
  return pricingPackages.filter((pkg) => pkg.services.includes(slug))
}

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
      en: 'Back-end development, databases and infrastructure, native iOS and Android builds, copywriting, photography and illustration. Where a project needs anything on this list I will say so at the brief stage rather than after the estimate.',
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
