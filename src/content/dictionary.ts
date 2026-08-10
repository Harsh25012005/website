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
      personal: 'Personal',
      services: 'Services',
      about: 'About',
      contact: 'Get in touch',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Language',
      siteMenu: 'Site menu',
    },
    common: {
      selectedWork: 'Selected UI/UX work',
      whatIDo: 'UI/UX design services',
      kindWords: 'Kind words',
      worthSharing: 'Articles on design and code',
      moreProjects: 'More case studies',
      workTogether: 'Let’s work together',
      soon: 'Soon',
      all: 'All',
      viewProject: 'View\ncase study',
      readArticle: 'Read article',
      backToWork: 'Back to all work',
      backToArticles: 'Back to all articles',
      backToPersonal: 'Back to personal',
      overview: 'Overview',
      outcome: 'Outcome',
      privacy: 'Privacy',
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
      focusValue: 'Design systems, SaaS & app UI',
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
      messagePlaceholder:
        'A few lines about the product, scope, timeline and budget.',
      send: 'Send message',
      consentBefore: 'By sending this message, you agree to my',
      consentLink: 'Privacy Policy',
      consentAfter: '.',
      required: 'This field is required.',
      invalidEmail: 'Enter a valid email address.',
      success: 'Thanks! Your message is on its way.',
      error: 'Something went wrong. Email me directly instead.',
      sending: 'Sending…',
    },
    notFound: {
      title: 'This page isn’t here.',
      body: 'The link may be out of date, or the page has moved. Start again from the homepage: the case studies, design services and articles are all one click from there.',
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
    },
  },
} as const

export type Dictionary = (typeof dictionaries)['en']

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] as Dictionary
}
