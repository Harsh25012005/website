import type { Service } from './types'

/**
 * One entry per service, and one `/services/[slug]` page per entry.
 *
 * These used to live in `about.ts` as six summary blocks on a single
 * `/services` page. That page was asking one URL, one `<title>` and one `h1` to
 * rank for six unrelated head terms — "design system consultant" and "mobile
 * app UI design" are different searches with different intent, and a page that
 * addresses both addresses neither well. Splitting gives each term a page that
 * can answer it completely, and turns `/services` into a hub whose internal
 * links point somewhere.
 *
 * ⚠️  Everything here is a public commercial claim. Only describe work that
 * will actually be taken on, and keep the FAQ answers literally true — they are
 * rendered *and* emitted as `FAQPage` schema, so Google holds the site to them.
 * Where a real number exists (a rate, a turnaround, a minimum engagement),
 * replace the scope-dependent wording with it; the specific answer always
 * outperforms the careful one.
 */
export const services: Service[] = [
  {
    slug: 'web-ui-design',
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
    metaTitle: 'Web UI Design Services for Websites & Web Apps',
    metaDescription:
      'Freelance web UI design in Figma: landing pages, marketing sites and web app screens built on a real grid and type scale, responsive from desktop to mobile.',
    keywords: [
      'web UI design services',
      'website UI designer',
      'landing page design service',
      'freelance web designer',
      'Figma web design',
      'responsive website design',
    ],
    heading: {
      en: 'Web UI design that holds up on every screen size',
    },
    intro: {
      en: 'Landing pages, marketing sites and web app screens designed in Figma on a grid, type scale and spacing system that survives contact with real content, not a hero shot that falls apart on the second page.',
    },
    sections: [
      {
        heading: { en: 'A system before a screen' },
        paragraphs: {
          en: [
            'Most website designs break the moment a second page is added, because the first page was drawn rather than structured. I start with the grid, the type scale and the spacing steps, so every page after the homepage inherits decisions that were already made once.',
            'That means the design file stays usable after handoff. New sections drop into an existing rhythm instead of needing a designer back to redraw them.',
          ],
        },
      },
      {
        heading: { en: 'Responsive as a starting point' },
        paragraphs: {
          en: [
            'Desktop, tablet and mobile are designed together, not adapted afterwards. Breakpoints are chosen around where the content actually stops working, rather than around device widths that stopped being accurate years ago.',
            'Long headlines, short headlines, missing images, eight nav items instead of four: the layout is tested against the awkward cases while it is still cheap to change them.',
          ],
        },
      },
      {
        heading: { en: 'Built to be built' },
        paragraphs: {
          en: [
            'Because I also write front-end code, the file that gets handed over is one a developer can read: components rather than detached groups, auto layout that maps to how CSS actually behaves, and tokens for colour, type and spacing.',
            'If you would rather not hand it over at all, the same project can continue into a coded build. See Figma to React build.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'Do you design in Figma or another tool?' },
        answer: {
          en: 'Figma by default, because it is what most development teams already work with and it makes review and handoff straightforward. I also work in Framer, Webflow and Sketch when a project or an existing team is already committed to one of them.',
        },
      },
      {
        question: { en: 'How many revision rounds are included?' },
        answer: {
          en: 'Review happens at each stage rather than in one round at the end, so feedback lands while it is still cheap to act on. The exact number of rounds is written into the scope before the project starts, so neither of us is guessing halfway through.',
        },
      },
      {
        question: { en: 'Can you work with our existing brand guidelines?' },
        answer: {
          en: 'Yes. If you already have a logo, palette, typefaces or a brand book, the UI is designed inside those constraints. Where the guidelines do not cover something an interface needs (states, data density, error messaging), I extend them in the same spirit rather than inventing a second visual language.',
        },
      },
    ],
    relatedProjects: ['stayease', 'ai-agent-landing'],
  },
  {
    slug: 'design-systems',
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
    metaTitle: 'Design System Services in Figma',
    metaDescription:
      'Figma design system design: component libraries with variants, colour, type and spacing tokens, and usage documentation that keeps a product team shipping consistent UI.',
    keywords: [
      'design system services',
      'Figma design system',
      'component library design',
      'design tokens',
      'design system consultant',
      'UI kit design',
    ],
    heading: {
      en: 'Design systems that a team can actually keep using',
    },
    intro: {
      en: 'A component library, a token set and the documentation that makes both stick, so the fifth screen your team builds looks like the first, without a designer reviewing every pull request.',
    },
    sections: [
      {
        heading: { en: 'Audit what already exists' },
        paragraphs: {
          en: [
            'Almost no product starts from nothing. The first step is usually an inventory of the screens you already have: how many button styles are in production, how many greys, how many spacing values that are nearly but not quite the same.',
            'That inventory is what makes the case for the system internally, and it decides what the system needs to cover first rather than covering everything at once.',
          ],
        },
      },
      {
        heading: { en: 'Tokens first, components second' },
        paragraphs: {
          en: [
            'Colour, type, spacing and radius are defined as tokens before any component is drawn, so a change to the scale propagates instead of being repeated forty times by hand.',
            'Components are then built on those tokens with variants and auto layout, structured to match how they will be implemented in code, which keeps the Figma library and the codebase from drifting into two different systems with the same names.',
          ],
        },
      },
      {
        heading: { en: 'Documentation people will read' },
        paragraphs: {
          en: [
            'A component nobody knows the rules for gets rebuilt. Each part of the library ships with what it is for, when to reach for something else, and the states it already covers.',
            'The goal is that a developer or a new designer can answer their own question from the file, so the system outlives whoever set it up.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'We already have a Figma file. Do you start over?',
        },
        answer: {
          en: 'No, not by default. Most engagements start by auditing and consolidating what is already there, because an existing file carries decisions your team has already agreed on. A rebuild only makes sense when the existing file has no consistent structure to build on, and that is a conclusion from the audit rather than an assumption going in.',
        },
      },
      {
        question: {
          en: 'Do you hand over the system in code as well as Figma?',
        },
        answer: {
          en: 'The Figma library and documented tokens are the standard deliverable. On projects that call for it I also build the components in React with Tailwind CSS, so the coded library and the design library ship from the same token set. That is scoped and quoted separately.',
        },
      },
      {
        question: { en: 'How do you stop the system going stale?' },
        answer: {
          en: 'By keeping it small enough to maintain and documenting the rules for extending it, rather than trying to anticipate every future component. Systems rot when they cover things nobody uses and miss the thing someone needed on a deadline.',
        },
      },
    ],
    relatedProjects: ['zenith', 'crave'],
  },
  {
    slug: 'mobile-app-design',
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
    metaTitle: 'Mobile App UI/UX Design Services',
    metaDescription:
      'iOS and Android app design: onboarding, navigation and core flows drawn around platform conventions, with a clickable Figma prototype for testing and dev handoff.',
    keywords: [
      'mobile app UI design',
      'app UX design services',
      'iOS app design',
      'Android app design',
      'Figma app prototype',
      'freelance mobile app designer',
    ],
    heading: {
      en: 'Mobile app design built around how people actually hold a phone',
    },
    intro: {
      en: 'Onboarding, navigation and the core flows of an iOS or Android app, designed to platform convention and delivered as a clickable Figma prototype you can put in front of real users before anyone writes Swift or Kotlin.',
    },
    sections: [
      {
        heading: { en: 'Flows before screens' },
        paragraphs: {
          en: [
            'An app is a sequence, not a gallery. The work starts by mapping the paths a user takes (first launch, the main job they came to do, the recovery path when something goes wrong) before any screen gets visual design.',
            'Mapping first is what surfaces the screens nobody remembered to ask for: the empty state, the expired session, the half-finished form someone came back to three days later.',
          ],
        },
      },
      {
        heading: { en: 'Platform conventions, not one design twice' },
        paragraphs: {
          en: [
            'iOS and Android users have different muscle memory for navigation, back behaviour and system controls. Designing one screen and shipping it to both platforms produces an app that feels slightly wrong on each.',
            'Where a shared design language makes sense, it is kept shared. Where the platform expects its own pattern, the design follows the platform.',
          ],
        },
      },
      {
        heading: { en: 'A prototype you can test' },
        paragraphs: {
          en: [
            'The deliverable is a clickable Figma prototype, not a slide of screens. That is what makes it possible to hand your phone to five people and watch where they hesitate, while changing the answer still costs a Figma edit rather than a sprint.',
            'The same prototype is what developers use to understand intent: transitions, states and what happens on tap are demonstrated rather than described in a comment.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Do you design for both iOS and Android?',
        },
        answer: {
          en: 'Yes. Which platforms are in scope is agreed at the brief stage, since designing for both is more work than designing for one: the shared screens carry over, but navigation, system controls and platform-specific patterns are designed separately.',
        },
      },
      {
        question: { en: 'Do you build the app as well?' },
        answer: {
          en: 'No. I build web front ends in React and Next.js, not native iOS or Android apps. For app projects I deliver the design and prototype, and work alongside your mobile developers through handoff and build QA.',
        },
      },
      {
        question: {
          en: 'Can you design an app icon and store screenshots?',
        },
        answer: {
          en: 'Yes, both can be added to the scope. They are quoted separately from the app UI because they are a different job with different constraints: store listing assets are marketing artwork subject to Apple and Google sizing rules.',
        },
      },
    ],
    relatedProjects: ['crave', 'zenith'],
  },
  {
    slug: 'saas-product-design',
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
    metaTitle: 'SaaS Product & Dashboard UX Design',
    metaDescription:
      'SaaS dashboard and admin panel design: dense data screens, onboarding, settings and empty states designed to stay usable as the feature list grows after launch.',
    keywords: [
      'SaaS product design',
      'dashboard UI design',
      'admin panel design',
      'B2B SaaS UX designer',
      'data table design',
      'SaaS onboarding design',
    ],
    heading: {
      en: 'SaaS product design for screens that get denser every quarter',
    },
    intro: {
      en: 'Dashboards, admin panels and settings flows designed for the version of your product that has ten more features than it does today, including the empty states, permission cases and error paths that demos always skip.',
    },
    sections: [
      {
        heading: { en: 'Designed for real data' },
        paragraphs: {
          en: [
            'A dashboard designed against six tidy rows of sample data falls over the first time a customer loads four thousand. Tables, filters and charts are designed against realistic volume, realistic label lengths and realistic edge cases.',
            'That includes the states nobody screenshots: nothing yet, too much to show at once, one record with a name long enough to break the column.',
          ],
        },
      },
      {
        heading: { en: 'Onboarding that survives the second session' },
        paragraphs: {
          en: [
            'Most SaaS onboarding is designed for the first five minutes and abandons the user afterwards. The flows here cover getting set up, getting the first useful result, and coming back a week later to a product that still makes sense.',
            'Empty states do real work in that: an empty dashboard is the best teaching surface a product has, and it is usually the least designed screen in the file.',
          ],
        },
      },
      {
        heading: { en: 'Patterns that scale with the roadmap' },
        paragraphs: {
          en: [
            'Features get added after launch. Rather than designing each screen as a one-off, the work establishes patterns (how a settings page is laid out, how a destructive action is confirmed, how a table filters), so the next feature has an answer to follow.',
            'This is where SaaS design and design system work overlap, and on longer engagements they are usually the same project.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Can you redesign our existing SaaS rather than start over?',
        },
        answer: {
          en: 'Yes, and it is usually the better option. A redesign starts by reviewing the screens you already have, so the work targets the parts costing you users rather than rebuilding what already works. It also means you can ship improvements in stages instead of holding everything for one big release.',
        },
      },
      {
        question: {
          en: 'Do you work with our developers during the build?',
        },
        answer: {
          en: 'Yes. Handoff is not a single moment. Questions come up while the build is underway, and I stay available to answer them, review implementations against the design and adjust where the code reveals something the file did not. How much of that time is included is agreed in the scope.',
        },
      },
      {
        question: {
          en: 'Do you do user research, or design from our requirements?',
        },
        answer: {
          en: 'Both are possible. If you have research, analytics or support tickets, that is the strongest starting point and I will design from it. If you do not, I can run lightweight research (flow mapping, a usability pass on the current product, prototype testing) scoped as part of the project.',
        },
      },
    ],
    relatedProjects: ['zenith', 'stayease'],
  },
  {
    slug: 'ux-research-wireframing',
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
    metaTitle: 'UX Research, Wireframing & Prototyping',
    metaDescription:
      'User flows, low-fidelity wireframes and clickable prototypes that test whether the structure works, before visual design starts and long before anything is built.',
    keywords: [
      'UX research services',
      'wireframing services',
      'user flow design',
      'clickable prototype design',
      'usability testing',
      'information architecture',
    ],
    heading: {
      en: 'Wireframes and prototypes that answer the question before the build does',
    },
    intro: {
      en: 'Flow maps, low-fidelity wireframes and clickable prototypes that test whether the structure of a product works, at the stage where being wrong costs a Figma edit rather than a sprint.',
    },
    sections: [
      {
        heading: { en: 'Map the flow, find the missing screens' },
        paragraphs: {
          en: [
            'A flow diagram is the cheapest deliverable on this page and usually the most valuable. Drawing every screen and decision point end to end is what exposes the branches nobody scoped: what happens when the payment fails, when the invite expires, when two people edit the same record.',
            'Finding those in a diagram costs an afternoon. Finding them in QA costs a release.',
          ],
        },
      },
      {
        heading: { en: 'Low fidelity on purpose' },
        paragraphs: {
          en: [
            'Wireframes are deliberately grey and unstyled, because a polished mockup changes the conversation. Show a finished-looking screen and feedback is about the button colour; show a wireframe and feedback is about whether the step belongs there at all.',
            'It also keeps the cost of changing your mind low, which is the entire point of doing this stage separately.',
          ],
        },
      },
      {
        heading: { en: 'Test it with people who are not you' },
        paragraphs: {
          en: [
            'A clickable prototype turns opinion into observation. Watching five people attempt the main task tells you more than a stakeholder review, and it tells you before the estimate has been written.',
            'What comes out is a prioritised list of what to fix, with the structure already validated, which is what the visual design and build stages are then built on.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Can this be a standalone project, or does it lead into design?',
        },
        answer: {
          en: 'Either. Plenty of engagements are research and wireframing only, delivered as flows, wireframes and a findings summary your own team takes forward. It also works as the first phase of a full design project, in which case the wireframes feed straight into the UI stage.',
        },
      },
      {
        question: { en: 'How many users do you test with?' },
        answer: {
          en: 'Usually a small number. Most usability problems surface in the first handful of sessions, and testing more people tends to confirm what the first few already showed rather than reveal something new. The exact number is agreed per project against what you are trying to learn.',
        },
      },
      {
        question: {
          en: 'We have no research at all. Is that a problem?',
        },
        answer: {
          en: 'No. It is the normal starting point. Existing analytics, support tickets or sales call notes help if you have them, but the flow mapping and prototype testing work without any of it. Starting from nothing is far better than starting from assumptions nobody has checked.',
        },
      },
    ],
    relatedProjects: ['cleaning-services-app', 'crave'],
  },
  {
    slug: 'figma-to-react',
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
    metaTitle: 'Figma to React & Next.js Development',
    metaDescription:
      'Design-to-code front-end builds: your Figma file turned into responsive React, Next.js and Tailwind CSS components, QA-tested across browsers, matching the design.',
    keywords: [
      'Figma to React',
      'Figma to Next.js',
      'design to code service',
      'React front-end developer',
      'Tailwind CSS development',
      'pixel perfect development',
    ],
    heading: {
      en: 'Figma to React, without the fidelity lost in handoff',
    },
    intro: {
      en: 'Your approved design built as responsive front-end code in React, Next.js and Tailwind CSS, by the person who reads design files for a living, so the spacing, type and states survive the trip.',
    },
    sections: [
      {
        heading: { en: 'Why handoff loses fidelity' },
        paragraphs: {
          en: [
            'A design file is a set of decisions, and most of them are never written down: which spacing value was intentional and which was eyeballed, what the hover state should feel like, how the layout should behave at a width nobody drew.',
            'A developer reading that file has to guess, and reasonable guesses accumulate into a build that is subtly not the design. Removing the handoff removes the guessing.',
          ],
        },
      },
      {
        heading: { en: 'Components, not pages' },
        paragraphs: {
          en: [
            'The build mirrors the structure of the design file: the Figma component becomes the React component, the design token becomes the Tailwind token. What is one decision in the design stays one decision in the code.',
            'That is what makes the site maintainable afterwards, whether your team takes it over or I keep working on it.',
          ],
        },
      },
      {
        heading: { en: 'Responsive and QA-tested before launch' },
        paragraphs: {
          en: [
            'Every breakpoint is checked against the design, and the build is tested across current versions of Chrome, Safari, Firefox and Edge on both desktop and mobile before it goes live.',
            'Accessibility basics are part of that pass rather than a later ticket: keyboard navigation, focus states, colour contrast and semantic markup.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Can you build a design someone else made?',
        },
        answer: {
          en: 'Yes. That is a large part of this service. I work from your Figma file whether or not I designed it. If the file is missing states, breakpoints or edge cases, I will flag what needs deciding before the build rather than guessing and showing you the result later.',
        },
      },
      {
        question: { en: 'What exactly do you build?' },
        answer: {
          en: 'The front end: HTML, CSS, Tailwind CSS, JavaScript, React and Next.js, and PHP where a project needs it. Back-end APIs, databases and infrastructure are outside what I take on, so on full-stack projects I build the interface and work alongside your back-end developers.',
        },
      },
      {
        question: {
          en: 'Do we get the code, and can our team maintain it?',
        },
        answer: {
          en: 'Yes. The code is yours, delivered in your repository, structured and readable rather than generated. It uses the same React, Next.js and Tailwind conventions your developers already know, so there is no bespoke framework to learn before they can change something.',
        },
      },
    ],
    relatedProjects: ['stayease', 'ai-agent-landing'],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}
