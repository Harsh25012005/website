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
