import type { ContentSection, Faq, Localized, Testimonial } from './types'

/**
 * The service list itself now lives in `content/services.ts`, one entry per
 * `/services/[slug]` page. It is re-exported here because `lib/schema.ts` and
 * the home page section have always read it from this module, and the offer
 * catalogue and the About page describe the same offers.
 */
export {
  services,
  getService,
  servicesByPillar,
  featuredServices,
} from './services'

export const servicesProcess: ContentSection[] = [
  {
    heading: { en: '01 - Discover' },
    paragraphs: {
      en: [
        'A short call or written brief to understand the product, its users, the screens in scope and what "done" looks like, before any design starts.',
      ],
    },
  },
  {
    heading: { en: '02 - Design' },
    paragraphs: {
      en: [
        'User flows and wireframes first, then high-fidelity UI in Figma, reviewed with you at each stage rather than revealed at the end.',
      ],
    },
  },
  {
    heading: { en: '03 - Build' },
    paragraphs: {
      en: [
        'For projects that need it, the approved design is built as working front-end code (HTML, CSS, Tailwind CSS, React or Next.js), responsive from the start.',
      ],
    },
  },
  {
    heading: { en: '04 - Handoff' },
    paragraphs: {
      en: [
        'Organised Figma files, documented components and tokens, and a build that matches the design, with everything your developers need to take it forward.',
      ],
    },
  },
]

/**
 * Questions asked on nearly every enquiry, answered on the page instead of over
 * email.
 *
 * These earn their place three times over: they are the copy that converts a
 * reader who is comparing designers, they are the only part of the site written
 * in the phrasing people actually search ("do you code the site too", "how much
 * does UI/UX design cost"), and they are the source for the `FAQPage` schema on
 * `/services`, which is what gets a passage of this page quoted directly in an
 * AI answer or a featured snippet.
 *
 * ⚠️  Answers must stay literally true — schema turns them into claims Google
 * holds the site to. Where a real number exists (a rate, a guaranteed turnaround,
 * a minimum engagement), replace the scope-dependent wording below with it; the
 * specific answer always outperforms the careful one.
 */
export const servicesFaqs: Faq[] = [
  {
    question: { en: 'What does a UI/UX design project cost?' },
    answer: {
      en: 'Every project is quoted individually, because a landing page and a multi-screen SaaS product are not the same job. Tell me the scope, the screens involved and your timeline, and you get a fixed price for a defined deliverable rather than an open-ended hourly rate.',
    },
  },
  {
    question: { en: 'How long does a design project take?' },
    // Previously ended "...and each project page on this site lists the
    // timeline that project actually ran to". That stopped being true when the
    // placeholder case studies were replaced: the current projects are
    // self-initiated concept work with no client timeline to report, and their
    // meta rows say so. An FAQ answer is rendered *and* emitted as `FAQPage`
    // schema, so a claim about the site that the site contradicts is the exact
    // mismatch that costs rich results.
    answer: {
      en: 'It depends on the number of screens and how settled the product decisions are: a single landing page and a multi-screen product are different jobs. The timeline is agreed at the brief stage and written into the scope before design starts, so it is fixed before you commit rather than estimated as we go.',
    },
  },
  {
    question: { en: 'Do you build the website as well as design it?' },
    answer: {
      en: 'Yes. I build front ends in HTML, CSS, Tailwind CSS, React and Next.js, so on projects that need it the approved Figma design is delivered as a working, responsive build rather than a file someone else has to interpret. Design-only engagements are equally fine if you already have developers.',
    },
  },
  {
    question: { en: 'Do you work with clients outside India?' },
    answer: {
      en: 'Yes. I am based in Ahmedabad, Gujarat, India and work remotely with founders and small teams worldwide, keeping enough overlap with your working day for reviews and calls. All work and communication is in English.',
    },
  },
  {
    question: { en: 'What do I receive at the end of a project?' },
    answer: {
      en: 'Organised Figma files with the components, colour, type and spacing tokens documented, a clickable prototype where the project calls for one, and on build engagements the responsive coded front end, QA-tested across browsers.',
    },
  },
  {
    question: {
      en: 'Can you redesign an existing product rather than start over?',
    },
    answer: {
      en: 'Yes, and it is often the better option. A redesign starts with reviewing the screens you already have, so the work targets the parts that are costing you users instead of rebuilding what already works.',
    },
  },
  {
    question: { en: 'How do we start?' },
    answer: {
      en: 'Send a few lines about the product, the scope and your timeline through the contact page or by email. I read everything and usually reply within a couple of working days, and the first step is a short call or written brief before any design work begins.',
    },
  },
]

/** Real client quotes go here once there are ones worth publishing. Never seed placeholders. */
export const testimonials: Testimonial[] = []

/**
 * Derived, not a flag — the same pattern as `pricingIsPublishable` and
 * `profileSocials`. While it is false, `/testimonials` ships `noindex, follow`,
 * stays out of `sitemap.ts` and stays out of the footer nav. Add one real
 * quote above and the page publishes itself.
 *
 * The empty state is deliberate too. A testimonials page carrying invented
 * praise is the fastest way to lose a prospect who checks, and `schema.ts`
 * already refuses to emit `aggregateRating` or `review` for the same reason.
 * An honest "not yet" costs nothing; a fabricated quote attributed to a person
 * who did not say it is a claim about a real third party.
 */
export const testimonialsArePublishable = testimonials.length > 0

export const aboutIntro: Localized<string[]> = {
  en: [
    'I’m Harsh Vaghela, a UI/UX and product designer based in Ahmedabad, Gujarat, India. I work as a Product Designer at Code Theorem, and take on freelance design systems, web UI, mobile app design and SaaS product design for founders and small teams, locally and remotely worldwide.',
    'I design in Figma, Framer, Webflow and Sketch, then build the front end in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS and PHP, so what ships stays close to what was designed. I completed my BCA at Bholabhai Patel College of Computer Studies and am pursuing my MCA at Bhagwan Swaminarayan Institute of Technology.',
  ],
}

export const aboutChapters: ContentSection[] = [
  {
    heading: { en: 'From BCA to UI/UX design' },
    paragraphs: {
      en: [
        'My interest in design started during my BCA, where computer science coursework kept pulling me toward the interface side of every project rather than only the logic behind it. Figma became the tool I kept coming back to, and UI/UX design turned from a course topic into the thing I actually wanted to do.',
        'Picking up front-end development alongside it (HTML, CSS, JavaScript, and later React and Next.js) turned out to be the useful detour. Understanding how an interface actually gets built changed how I design in the first place.',
      ],
    },
  },
  {
    heading: { en: 'First freelance projects' },
    paragraphs: {
      en: [
        'My first freelance work was web UI and landing page design, where real client feedback replaced a brief written by a course. Each project pushed me to tighten spacing, hierarchy and consistency in ways a tutorial never covers.',
        'From there the work expanded into design systems and mobile app screens, and I started pairing every Figma file with a working front-end build, so a client could see the interface in a browser, not only in a prototype.',
      ],
    },
  },
  {
    heading: { en: 'Design and code today' },
    paragraphs: {
      en: [
        'With 1.5+ years in the field, I’m now a Product Designer at Code Theorem in Ahmedabad, working on client products in a team alongside developers. The work runs across design systems, web UI, mobile app design and SaaS product design, and I’m completing my MCA at Bhagwan Swaminarayan Institute of Technology alongside it.',
        'I also keep taking on freelance and collaborative projects outside that role, particularly design system work, SaaS dashboards, and web UI that has to go from Figma to a live, responsive site, usually for founders and small teams who want both the design file and a working build.',
      ],
    },
  },
]

export const beyondScreens: ContentSection = {
  heading: { en: 'Beyond screens' },
  paragraphs: {
    en: [
      'Outside client work, I spend time exploring new tools and frameworks in design and front-end development; it’s part of why I ended up as much of a coder as a designer.',
      'Being a student again through my MCA keeps me close to the fundamentals, which shows up in how I approach structure and problem-solving in design work too.',
    ],
  },
}

export const skills = [
  'UI Design',
  'UX Design',
  'Design Systems',
  'Web UI Design',
  'Mobile App Design',
  'SaaS Product Design',
  'UX Research & Wireframing',
  'Prototyping',
  'Design to Code',
  'Front-End Development',
]

export const tools = [
  'Figma',
  'Framer',
  'Webflow',
  'Sketch',
  'HTML/CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'PHP',
]
