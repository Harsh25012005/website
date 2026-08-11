import type { ServicePillar, ServicePillarPage } from './types'

/**
 * The two hub pages between `/services` and a service detail page.
 *
 * `/services` used to be a flat list of six. At fifteen a flat list stops being
 * navigation and starts being an inventory, and it asks the visitor to work out
 * which half of the practice they need — the people who arrive wanting a Figma
 * file and the people who arrive wanting a running site are rarely the same
 * person on the same day.
 *
 * These are also the two pages that can rank for the head terms the individual
 * services are too specific to reach: "UI/UX design services" and "custom
 * development services" are not queries `/services/webflow-development` should
 * be trying to answer.
 *
 * ⚠️  `slug` here is a **static route segment** under `/services`. Next.js
 * resolves a static segment before `[slug]`, so a service in `services.ts`
 * sharing one of these slugs would never render its page and nothing would
 * fail. `content.test.ts` asserts the two sets stay disjoint.
 *
 * ⚠️  The development pillar draws the same line as `services.ts` and
 * `pricing.ts`: front end only. No back-end APIs, databases or infrastructure,
 * no native app builds, no WordPress plugin development. Do not widen it here
 * without widening it there.
 */
export const pillars: Record<ServicePillar, ServicePillarPage> = {
  design: {
    pillar: 'design',
    slug: 'ui-ux-design',
    title: { en: 'UI/UX design' },
    metaTitle: 'UI/UX Design Services for Web, Mobile & SaaS',
    metaDescription:
      'UI/UX design services in Figma: web UI, design systems, mobile app and SaaS product design, UX research, wireframing and audits, delivered ready for developers to build.',
    keywords: [
      'UI/UX design services',
      'freelance UI UX designer',
      'product design services',
      'Figma design services',
      'web and app UI design',
      'UX design consultant',
    ],
    heading: {
      en: 'UI/UX design for web, mobile and SaaS products',
    },
    intro: {
      en: 'Six ways into the same work: the structure of a product decided before it is drawn, the screens designed on a system rather than one at a time, and a file a developer can build from without guessing.',
    },
    sections: [
      {
        heading: { en: 'Where a project usually starts' },
        paragraphs: {
          en: [
            'If the product is still an idea, it starts with UX research and wireframing — flows and grey boxes, where being wrong costs an afternoon. If the screens exist and something is not working, it starts with an audit, because a redesign is an expensive way to find out which parts were fine.',
            'If the decisions are already settled and you need the interface designed, it starts at web UI, mobile app or SaaS product design depending on what is being built. Design systems join whenever more than one person is going to build screens.',
          ],
        },
      },
      {
        heading: { en: 'Designed against the awkward cases' },
        paragraphs: {
          en: [
            'The screens that break a design are never the ones in the pitch. They are the empty state before any data exists, the name three times longer than the placeholder, the expired session, the permission a user does not have, the error that arrives after the form was submitted.',
            'Those get designed here rather than left to whoever builds it. It is most of the difference between a design that survives implementation and one that gets quietly reinterpreted at build time.',
          ],
        },
      },
      {
        heading: { en: 'Files built to be built from' },
        paragraphs: {
          en: [
            'Every design deliverable is structured for handoff: components rather than detached groups, auto layout that behaves the way CSS does, tokens for colour, type and spacing, and states shown rather than described.',
            'That is a habit that comes from building front ends as well as designing them — the file is written for the person who has to turn it into code, because often enough that person is me.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'Which design service do I actually need?' },
        answer: {
          en: 'If the product does not exist yet, start with UX research and wireframing. If it exists and is underperforming, start with a UI/UX audit. If the decisions are made and you need screens, start with web UI, mobile app or SaaS product design. If several people are building screens and they no longer match, you need a design system. Describe the situation in an enquiry and you will get a straight recommendation, including "you do not need this yet".',
        },
      },
      {
        question: { en: 'Can you build what you design?' },
        answer: {
          en: 'Yes, for the web. The approved design can continue into a coded front end in React, Next.js, Webflow, Framer or WordPress templates — that is the development side of the practice. Design-only engagements are equally normal if you already have developers, and nothing here is priced to push you toward the build.',
        },
      },
      {
        question: { en: 'Do you work with an existing brand or design team?' },
        answer: {
          en: 'Yes. Where you have brand guidelines the UI is designed inside them, and where the guidelines do not cover something an interface needs — states, data density, error messaging — I extend them in the same spirit rather than inventing a second visual language. Working alongside an in-house designer on overflow or a specific product area is a normal arrangement.',
        },
      },
    ],
    linkLabel: { en: 'See all UI/UX design services' },
    crossLink: {
      en: 'Already have the design, and need it built?',
    },
  },
  development: {
    pillar: 'development',
    slug: 'custom-development',
    title: { en: 'Custom development' },
    metaTitle: 'Custom Development: React, Next.js, Webflow & WordPress',
    metaDescription:
      'Custom front-end development services: React and Next.js builds, Figma to code, Webflow, Framer and WordPress templates, redesigns, maintenance and performance audits.',
    keywords: [
      'custom development services',
      'front-end development services',
      'React and Next.js development',
      'Webflow and WordPress development',
      'freelance web developer',
      'design to code development',
    ],
    heading: {
      en: 'Custom development, front end first',
    },
    intro: {
      en: 'Nine ways to get a design onto the internet and keep it there: coded builds in React and Next.js, CMS builds in Webflow, Framer and WordPress, and the redesign, maintenance and audit work that follows launch.',
    },
    sections: [
      {
        heading: { en: 'One line, stated up front' },
        paragraphs: {
          en: [
            'I build front ends. HTML, CSS, Tailwind CSS, JavaScript, React and Next.js, plus PHP where a site sits on an existing stack. Back-end APIs, databases, authentication systems and infrastructure are outside what I take on, and so are native iOS and Android builds.',
            'On projects that need those, I build the interface and work alongside the developers who own that half. Saying this before an estimate is the whole point of putting it in the first paragraph — it is the most common way a one-person build goes wrong, and it is entirely avoidable.',
          ],
        },
      },
      {
        heading: { en: 'The platform is a question about your team' },
        paragraphs: {
          en: [
            'A coded Next.js build, a Webflow site, a Framer page and a WordPress theme are four answers to "who edits this after launch, and how often". That question decides the platform far more often than any technical characteristic does.',
            'Because all four are on offer here, the recommendation is not a sales decision. If your marketing team will publish weekly, you will be pointed at Webflow. If nobody will ever touch it again, a coded build is cheaper to run.',
          ],
        },
      },
      {
        heading: { en: 'Launch is the middle of the project' },
        paragraphs: {
          en: [
            'A site that shipped fast and accessible in March is neither by the following March, because dependencies age, content gets added by people who were not in the kickoff, and images get uploaded straight off a camera.',
            'That is what the maintenance and audit services are for. They are listed as ordinary services rather than an upsell, because a build with nobody looking after it is a depreciating asset with a launch party.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'Do you do back-end or full-stack development?' },
        answer: {
          en: 'No. Front end only — React, Next.js, Tailwind CSS, and PHP for theme work. Back-end APIs, databases, authentication and infrastructure are outside what I take on, and native iOS and Android builds are too. On full-stack projects I build the interface and work alongside your back-end developers.',
        },
      },
      {
        question: { en: 'Can you build a design I already have?' },
        answer: {
          en: 'Yes, and it is a large share of this work. I build from other people’s Figma files regularly. Where the file is missing states, breakpoints or edge cases, I will flag what needs deciding before the build rather than guessing and showing you the result afterwards.',
        },
      },
      {
        question: { en: 'Who owns the code and the accounts?' },
        answer: {
          en: 'You do, in every case. Source code is delivered in your repository. Webflow, Framer and hosting accounts are yours, billed to you directly — I do not hold client accounts or resell platform subscriptions. You should be able to stop working with me and have nothing stop working.',
        },
      },
    ],
    linkLabel: { en: 'See all custom development services' },
    crossLink: {
      en: 'Need the design before the build?',
    },
  },
}

export const pillarOrder: ServicePillar[] = ['design', 'development']

/** Every hub slug, for the route-collision assertion in `content.test.ts`. */
export const pillarSlugs = pillarOrder.map((key) => pillars[key].slug)

export function pillarPath(pillar: ServicePillar): string {
  return `/services/${pillars[pillar].slug}`
}

/** The other pillar — the two hubs and every detail page cross-link. */
export function otherPillar(pillar: ServicePillar): ServicePillar {
  return pillar === 'design' ? 'development' : 'design'
}
