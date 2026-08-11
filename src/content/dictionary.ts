import type { Locale } from '@/lib/i18n'

/**
 * UI chrome strings only — page copy lives in the per-entity content files.
 * Keeping them apart means a new project never forces a translation edit here.
 *
 * Several of these strings are rendered as headings or as link anchor text, so
 * they are load-bearing for SEO as well as for the UI: `common.selectedWork`,
 * `common.whatIDo` and `common.worthSharing` are the `h2`/`h1` of their
 * sections, and `common.viewProject` / `common.moreProjects` are the anchor
 * text pointing at `/work/[slug]`. Edit them for meaning, not for length —
 * they sit in tight grids and large display type.
 */
const dictionaries = {
  en: {
    nav: {
      work: 'Work',
      services: 'Services',
      pricing: 'Pricing',
      about: 'About',
      resume: 'Résumé',
      articles: 'Articles',
      tools: 'Tools',
      process: 'Process',
      testimonials: 'Testimonials',
      contact: 'Get in touch',
      // Bottom-bar links rather than nav items. They belong on every page for
      // trust and are the two nobody should have to hunt for, but a legal
      // notice in the primary nav buys nothing.
      privacy: 'Privacy',
      terms: 'Terms',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Language',
      siteMenu: 'Site menu',
    },
    common: {
      selectedWork: 'Selected UI/UX work',
      // The `h2` above the home page service grid. It stopped saying "UI/UX
      // design services" when development became half the catalogue — a
      // heading that names one pillar over a grid showing both is the kind of
      // small mismatch that reads as carelessness.
      whatIDo: 'Design and development services',
      kindWords: 'Kind words',
      worthSharing: 'Articles on design and code',
      moreProjects: 'More case studies',
      // Anchor text for the home page's links into the three listing pages.
      // These are the strongest internal links on the site — the home page has
      // the most inbound equity, and anchor text is a direct relevance signal —
      // so they name the destination rather than saying "View all".
      allCaseStudies: 'See all case studies',
      allServices: 'Explore all services',
      allArticles: 'Read all articles',
      workTogether: 'Let’s work together',
      soon: 'Soon',
      all: 'All',
      viewProject: 'View\ncase study',
      // Revealed under the service name on hover. Decorative — the link's
      // accessible name stays the service title, so this is `aria-hidden`.
      viewService: 'View service',
      readArticle: 'Read article',
      backToWork: 'Back to all work',
      backToArticles: 'Back to all articles',
      backToServices: 'Back to all services',
      // Scoped to the service's own pillar since the split — listing the other
      // fourteen at the foot of every detail page was a link dump, not
      // navigation.
      otherServices: 'Other services in this area',
      relatedWork: 'Related case studies',
      furtherReading: 'Further reading',
      servicesMentioned: 'Related services',
      whatYouGet: 'What you get',
      // The pricing block on a service page. `priceOnRequest` is the state
      // every service is in until real figures land in `content/pricing.ts` —
      // it is the honest version of a number, not a placeholder for one.
      whatItCosts: 'What it costs',
      priceFrom: 'From',
      priceOnRequest: 'Price on request',
      // Not "Quoted per project": one of the three services that lands on this
      // fallback is a monthly retainer, and its own note says so a line below.
      // The label has to be true for every service that can reach it.
      quotedIndividually: 'Quoted individually',
      seePricing: 'Compare all packages',
      overview: 'Overview',
      outcome: 'Outcome',
      builtBy: 'Designed and built by',
      pauseSlideshow: 'Pause slideshow',
      playSlideshow: 'Play slideshow',
      minRead: 'min read',
    },
    filters: {
      all: 'All',
      uxui: 'UX/UI',
      branding: 'Branding',
      website: 'Website',
    },
    hero: {
      based: 'Based in',
      focus: 'Focus',
      languages: 'Languages',
      openFor: 'Available for',
      // Rendered in a tight two-column grid — keep values under ~35 chars.
      focusValue: 'Product UI, design systems & code',
      languagesValue: 'English',
      openForValue: 'Freelance & contract projects',
    },
    contact: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      company: 'Company',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@domain.com',
      subjectPlaceholder: 'What’s it about?',
      // Phone, budget and service are all optional. Requiring a budget is the
      // fastest way to lose the enquiry from someone who genuinely does not
      // know yet, and that enquiry is often the better project.
      phone: 'Phone number',
      phonePlaceholder: 'With country code, optional',
      budget: 'Budget',
      budgetPlaceholder: 'Select a range',
      service: 'Service',
      servicePlaceholder: 'Select a service',
      optional: 'Optional',
      messagePlaceholder:
        'A few lines about the product, scope, timeline and budget.',
      send: 'Send message',
      required: 'This field is required.',
      invalidEmail: 'Enter a valid email address.',
      success: 'Thanks! Your message is on its way.',
      error: 'Something went wrong. Email me directly instead.',
      sending: 'Sending…',
    },
    notFound: {
      title: 'This page isn’t here.',
      body: 'The link may be out of date, or the page has moved. Start again from the homepage: the case studies, the design and development services and the articles are all one click from there.',
      cta: 'Back to homepage',
    },
    footer: {
      collaborate: 'Let’s Collaborate!',
      menu: 'Menu',
      home: 'Home',
      connect: 'Connect',
      emailLabel: 'Email',
      sayHello: 'Say hello',
      availableFor: 'Available for freelance work',
      backToTop: 'Back to top',
      rights: 'All rights reserved',
      legal: 'Legal',
    },
  },
} as const

export type Dictionary = (typeof dictionaries)['en']

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary
}
