import type { Localized, Service, Testimonial } from './types'

export const services: Service[] = [
  {
    number: '01',
    title: { en: 'Web UI design' },
    description: {
      en: 'Responsive website and web app UI designed in Figma: landing pages, marketing sites and product screens built on a real grid, type scale and spacing system.',
    },
    deliverables: {
      en: [
        'Responsive page designs in Figma, desktop through mobile',
        'Landing page, marketing site and web app screen design',
        'Typography, spacing and component structure ready to build',
      ],
    },
  },
  {
    number: '02',
    title: { en: 'Design systems' },
    description: {
      en: 'Figma design system work: component libraries, tokens and documentation that keep a product team shipping consistent UI instead of rebuilding it every sprint.',
    },
    deliverables: {
      en: [
        'Figma component library with variants and auto layout',
        'Colour, type and spacing tokens documented for developer handoff',
        'Usage guidelines so new screens stay on-system',
      ],
    },
  },
  {
    number: '03',
    title: { en: 'Mobile app design' },
    description: {
      en: 'iOS and Android app UI/UX design: onboarding, navigation and core flows drawn around platform conventions, real content and a clickable Figma prototype.',
    },
    deliverables: {
      en: [
        'iOS and Android screen designs following platform conventions',
        'Onboarding, navigation and core app flows, screen by screen',
        'Clickable Figma prototype for user testing and dev handoff',
      ],
    },
  },
  {
    number: '04',
    title: { en: 'SaaS product design' },
    description: {
      en: 'SaaS dashboard and admin panel design: data-heavy screens, onboarding and settings flows that stay usable as features and edge cases pile up.',
    },
    deliverables: {
      en: [
        'Dashboard, admin panel and data table layouts that stay readable',
        'Onboarding flows, empty states and error cases covered',
        'Scalable UI patterns for features added after launch',
      ],
    },
  },
  {
    number: '05',
    title: { en: 'UX research & wireframing' },
    description: {
      en: 'User flows, wireframes and prototypes that test structure and validate the idea in Figma before anyone writes a line of production code.',
    },
    deliverables: {
      en: [
        'Low-fidelity wireframes to test structure before visual design',
        'User flow diagrams mapping every screen and decision point',
        'Clickable prototypes for stakeholder and user feedback',
      ],
    },
  },
  {
    number: '06',
    title: { en: 'Figma to React build' },
    description: {
      en: 'Design-to-code front-end builds in HTML, CSS, Tailwind, React and Next.js, so the live site matches the Figma file instead of drifting in handoff.',
    },
    deliverables: {
      en: [
        'Front-end build in HTML, CSS and Tailwind CSS, true to the design',
        'React and Next.js components for interactive products',
        'Responsive and cross-browser QA before launch',
      ],
    },
  },
]

export const servicesProcess: {
  heading: Localized<string>
  paragraphs: Localized<string[]>
}[] = [
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
export const servicesFaqs: {
  question: Localized<string>
  answer: Localized<string>
}[] = [
  {
    question: { en: 'What does a UI/UX design project cost?' },
    answer: {
      en: 'Every project is quoted individually, because a landing page and a multi-screen SaaS product are not the same job. Tell me the scope, the screens involved and your timeline, and you get a fixed price for a defined deliverable rather than an open-ended hourly rate.',
    },
  },
  {
    question: { en: 'How long does a design project take?' },
    answer: {
      en: 'It depends on the number of screens and how settled the product decisions are. The timeline is agreed at the brief stage, before design starts, and each project page on this site lists the timeline that project actually ran to, so you can compare against work of a similar size.',
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
      en: 'Organised Figma files with the components, colour, type and spacing tokens documented, a clickable prototype where the project calls for one, and — on build engagements — the responsive coded front end, QA-tested across browsers.',
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

export const aboutIntro: Localized<string[]> = {
  en: [
    'I’m Harsh Vaghela, a freelance UI/UX and product designer based in Ahmedabad, Gujarat, India. I work on design systems, web UI, mobile app design and SaaS product design for founders and small teams, locally and remotely worldwide.',
    'I design in Figma, Framer, Webflow and Sketch, then build the front end in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS and PHP, so what ships stays close to what was designed. I completed my BCA at Bholabhai Patel College of Computer Studies and am pursuing my MCA at Bhagwan Swaminarayan Institute of Technology.',
  ],
}

export const aboutChapters: {
  heading: Localized<string>
  paragraphs: Localized<string[]>
}[] = [
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
        'With 1.5+ years in the field, I now work across design systems, web UI, mobile app design and SaaS product design, usually for founders and small teams who want both the design file and a working build. I’m completing my MCA at Bhagwan Swaminarayan Institute of Technology alongside client work.',
        'I take on freelance and collaborative projects, particularly design system work, SaaS dashboards, and web UI that has to go from Figma to a live, responsive site.',
      ],
    },
  },
]

export const beyondScreens: {
  heading: Localized<string>
  paragraphs: Localized<string[]>
} = {
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
