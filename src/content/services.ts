import type { Locale } from '@/lib/i18n'
import type { Service, ServicePillar } from './types'

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
 * The list is now grouped into two pillars — design and development — because
 * the site sells two things bought by different people at different moments: a
 * Figma file, and a running site. Array order is display order, design first,
 * and `number` restarts at `01` inside each pillar.
 *
 * ⚠️  Everything here is a public commercial claim. Only describe work that
 * will actually be taken on, and keep the FAQ answers literally true — they are
 * rendered *and* emitted as `FAQPage` schema, so Google holds the site to them.
 * Where a real number exists (a rate, a turnaround, a minimum engagement),
 * replace the scope-dependent wording with it; the specific answer always
 * outperforms the careful one.
 *
 * ⚠️  Two limits are stated in the FAQs below and repeated in `pricing.ts`:
 * no back-end APIs, databases or infrastructure; no native iOS or Android
 * builds. They are load-bearing. If any of them stops being true, change it
 * everywhere at once — a site that contradicts itself on scope is worse than
 * one that says no.
 */
export const services: Service[] = [
  {
    slug: 'web-ui-design',
    pillar: 'design',
    featured: true,
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
    pillar: 'design',
    featured: true,
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
    pillar: 'design',
    featured: true,
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
    pillar: 'design',
    featured: true,
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
    pillar: 'design',
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
    slug: 'ui-ux-audit',
    pillar: 'design',
    number: '06',
    title: { en: 'UI/UX audit' },
    description: {
      en: 'A structured review of the product you already have: where people hesitate, what is causing it, and a prioritised fix list you can act on without a full redesign.',
    },
    deliverables: {
      en: [
        'Heuristic review of the flows and screens that carry the most traffic',
        'Findings written up with the screen, the problem and the reason',
        'A prioritised fix list, ordered by impact against effort',
      ],
    },
    metaTitle: 'UI/UX Audit and Usability Review',
    metaDescription:
      'A structured UI/UX audit of your website or product: heuristic review of the real flows, annotated findings, and a prioritised fix list you can act on without a redesign.',
    keywords: [
      'UI UX audit',
      'usability review service',
      'website UX audit',
      'heuristic evaluation',
      'product design review',
      'UX audit for SaaS',
    ],
    heading: {
      en: 'A UI/UX audit that ends in a fix list, not a slide deck',
    },
    intro: {
      en: 'A structured review of the product you already have — where people hesitate, what is causing it, and what to change first — delivered as a prioritised list your team can start on next sprint.',
    },
    sections: [
      {
        heading: { en: 'Most redesigns start as an audit question' },
        paragraphs: {
          en: [
            '"Should we redesign?" is almost never the real question. The real one is which parts of the product are costing you users, and a rebuild is an expensive way to find out — it changes everything at once, including the parts that were already working.',
            'An audit separates the two before any money goes into design. Plenty of them end with a handful of targeted changes rather than a redesign, which is a good outcome even though it is the smaller invoice.',
          ],
        },
      },
      {
        heading: { en: 'Every finding carries its reason' },
        paragraphs: {
          en: [
            'A finding names the screen, shows it, describes what a user is likely to do there and why that is a problem. Without the reason it is just taste, and taste is the easiest thing in the world for a stakeholder to overrule.',
            'That also makes the list arguable in a useful way. If your team disagrees with a finding they can disagree with the reasoning rather than with an opinion, and sometimes they are right — they know constraints an outside reviewer does not.',
          ],
        },
      },
      {
        heading: { en: 'Prioritised, because everything cannot be first' },
        paragraphs: {
          en: [
            'Findings are ordered by what they cost you against what they cost to fix. A contrast failure in the primary button and an inconsistent icon set are not the same urgency, and a flat list of forty issues gets read once and filed.',
            'The top of the list is deliberately short: the few changes worth doing this month. Everything else stays on the list for when there is room.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'How is an audit different from a redesign?' },
        answer: {
          en: 'An audit diagnoses; a redesign treats. The audit tells you what is wrong and what it would take to fix, and it is deliberately useful on its own — your own team can act on the list without me. A redesign is a separate, larger piece of work that some audits recommend and many do not.',
        },
      },
      {
        question: { en: 'Do you audit the code and page speed as well?' },
        answer: {
          en: 'Not in this one. This audit focuses specifically on the interface and user flows: structure, visual hierarchy, states, copy clarity and usability. It delivers a prioritised fix list your team can act on without having to guess what to tackle first.',
        },
      },
      {
        question: { en: 'Do you fix what the audit finds?' },
        answer: {
          en: 'If you want me to, as a separate scoped piece of work. There is no obligation and no discount tied to it — an audit that exists to sell a redesign is not an audit, so the deliverable is written to be useful in the hands of a team that never hires me again.',
        },
      },
    ],
    relatedProjects: ['zenith', 'stayease'],
    pricingNote: {
      en: 'An audit is quoted against the size of what is being reviewed — how many flows, how many screens — rather than from a package, because a five-screen product and a fifty-screen one are not the same read.',
    },
  },
  {
    slug: 'custom-web-development',
    pillar: 'development',
    featured: true,
    number: '01',
    title: { en: 'Custom web development' },
    description: {
      en: 'Websites and web apps built front-end-first in React, Next.js and Tailwind CSS — no template to fight, and source code your own developers can read on day one.',
    },
    deliverables: {
      en: [
        'Custom front end in React, Next.js and Tailwind CSS',
        'Responsive, accessible and cross-browser tested before launch',
        'Source code in your repository, structured for your team to maintain',
      ],
    },
    metaTitle: 'Custom Web Development in React & Next.js',
    metaDescription:
      'Custom website and web app development in React, Next.js and Tailwind CSS: fast, accessible, responsive front ends delivered as readable source code in your own repository.',
    keywords: [
      'custom web development',
      'React development services',
      'Next.js developer',
      'custom website development',
      'Tailwind CSS development',
      'freelance front-end developer',
    ],
    heading: {
      en: 'Custom web development, by the person who designed it',
    },
    intro: {
      en: 'Websites and web apps built from scratch in React, Next.js and Tailwind CSS, for the projects where a template is the thing you will spend the next two years working around.',
    },
    sections: [
      {
        heading: { en: 'When a template is the better answer' },
        paragraphs: {
          en: [
            'If you need a five-page site next month and the content is conventional, a good template on Webflow or Framer will get you there faster and cheaper, and I will say so. Custom development is not a status upgrade.',
            'It pays for itself when the site has a job the template does not do: an interface with real states, a component set that has to stay consistent across dozens of pages, content shapes nobody has a plugin for, or a performance target a page builder cannot hit.',
          ],
        },
      },
      {
        heading: { en: 'Front end first, and honest about the line' },
        paragraphs: {
          en: [
            'I build the front end. Where a project needs a back end, a database, authentication or a payment integration, I build the interface and work alongside your back-end developers, and that half is scoped by them rather than guessed at by me.',
            'Saying this at the brief stage costs a conversation. Discovering it in week three costs a project, and it is the most common way a one-person build goes wrong.',
          ],
        },
      },
      {
        heading: { en: 'Performance and accessibility are build decisions' },
        paragraphs: {
          en: [
            'Static rendering wherever the content allows it, images sized and served in modern formats, fonts subset, and JavaScript kept to what the page actually needs. Speed is not a pass at the end; it is a hundred decisions made while building.',
            'The same goes for accessibility: semantic markup, a sensible focus order, visible focus states and contrast that holds. Retrofitting these later is a rebuild of the markup, which is why they are not a phase two.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'Do you build the back end as well?' },
        answer: {
          en: 'No. I build front ends: HTML, CSS, Tailwind CSS, JavaScript, React and Next.js, plus PHP where a site sits on an existing stack. Back-end APIs, databases, authentication systems and infrastructure are outside what I take on, so on full-stack projects I build the interface and work alongside your back-end developers.',
        },
      },
      {
        question: { en: 'What if we do not have a design yet?' },
        answer: {
          en: 'Then the project starts on the design side and continues into the build, which is the arrangement most of these engagements use. If you would rather bring your own designer or an existing Figma file, that works too — I build from other people’s files regularly.',
        },
      },
      {
        question: { en: 'Do we own the code, and can our team maintain it?' },
        answer: {
          en: 'Yes. The code is yours, delivered in your repository, using the same React, Next.js and Tailwind conventions your developers already know. There is no bespoke framework to learn and no licence to keep paying, and nothing in the build depends on me staying involved.',
        },
      },
    ],
    relatedProjects: ['stayease', 'ai-agent-landing'],
  },
  {
    slug: 'figma-to-react',
    pillar: 'development',
    featured: true,
    number: '02',
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
  {
    slug: 'landing-page-development',
    pillar: 'development',
    number: '03',
    title: { en: 'Landing page design & build' },
    description: {
      en: 'One high-intent page taken end to end: section structure, responsive design, a built page on the platform that suits you, and the events to tell whether it worked.',
    },
    deliverables: {
      en: [
        'One page designed in Figma, desktop through mobile',
        'Built as a fast, responsive page in Next.js, Webflow or Framer',
        'Event hooks wired into your analytics so the page can be measured',
      ],
    },
    metaTitle: 'Landing Page Design and Development',
    metaDescription:
      'A single high-intent landing page designed and built end to end: section hierarchy, a responsive build in Next.js, Webflow or Framer, and event hooks for your analytics.',
    keywords: [
      'landing page design and development',
      'landing page developer',
      'product launch page design',
      'high converting landing page',
      'Next.js landing page',
      'Webflow landing page',
    ],
    heading: {
      en: 'One page, designed and built by one person',
    },
    intro: {
      en: 'A launch page, campaign page or waiting list designed and shipped as a working page — not a Figma file that then waits three weeks for a developer with other priorities.',
    },
    sections: [
      {
        heading: { en: 'The structure is the design' },
        paragraphs: {
          en: [
            'A landing page converts on the order of its arguments, not on its gradients. The work starts by deciding what the page has to prove, in what sequence, and what the reader needs to believe before the button makes sense.',
            'That is why the design begins as a section outline rather than a hero shot. If the sequence is wrong, no amount of visual polish rescues it, and polish is the expensive part to redo.',
          ],
        },
      },
      {
        heading: { en: 'Built on whichever platform suits who edits it' },
        paragraphs: {
          en: [
            'Next.js when the page is part of a product site or has to be fast under paid traffic. Webflow when your marketing team will keep editing it. Framer when the motion is the argument and the page will be replaced after the campaign.',
            'The platform is chosen around who touches the page after launch, which is a question about your team rather than a technical preference of mine.',
          ],
        },
      },
      {
        heading: { en: 'Measurable, or it is decoration' },
        paragraphs: {
          en: [
            'The page ships with events on the things worth counting — the primary button, the secondary path, the form completion — wired into whichever analytics tool you already use.',
            'Without that, the only available verdict after launch is whether people liked the look of it, which is the one thing that does not matter.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'Do you write the copy?' },
        answer: {
          en: 'No. Copywriting is not something I take on. I structure the page and will tell you plainly where a section is not earning its place or where a claim needs proof next to it, but the words come from you or from a copywriter. Pages where the copy arrives last are the ones that go badly.',
        },
      },
      {
        question: {
          en: 'How is this different from the web UI design service?',
        },
        answer: {
          en: 'Web UI design is the design on its own, handed to your developers. This is a single page designed and built, live at the end of it. If you have a development team already, the design-only route is usually the cheaper one.',
        },
      },
      {
        question: { en: 'Can you set up an A/B test?' },
        answer: {
          en: 'A second variant of the page can be added to the scope, and I will wire it to the testing tool you use. Choosing the tool, funding the traffic and calling the result stay with you — a test on a page with a few hundred visitors a month will not tell you anything, and I would rather say that first.',
        },
      },
    ],
    relatedProjects: ['ai-agent-landing', 'stayease'],
  },
  {
    slug: 'website-redesign',
    pillar: 'development',
    number: '04',
    title: { en: 'Website redesign' },
    description: {
      en: 'A staged redesign and rebuild of a site that has stopped working: what to keep, what to change, and a launch that does not lose the traffic you already have.',
    },
    deliverables: {
      en: [
        'Review of the current site: structure, content, speed and conversion points',
        'Redesigned pages in Figma, then built as a responsive front end',
        'A URL and redirect map applied before launch, not after',
      ],
    },
    metaTitle: 'Website Redesign and Rebuild Services',
    metaDescription:
      'Website redesign and rebuild: a review of what already works, redesigned pages in Figma, a new responsive front end, and a redirect map that protects your existing rankings.',
    keywords: [
      'website redesign services',
      'website redesign and rebuild',
      'website revamp service',
      'redesign without losing SEO',
      'business website redesign',
      'site refresh service',
    ],
    heading: {
      en: 'A redesign that does not throw away what already works',
    },
    intro: {
      en: 'Most redesigns lose something on launch day — a page that ranked, a form that converted, a URL someone linked to years ago. This one starts by finding those and keeping them.',
    },
    sections: [
      {
        heading: { en: 'Start from what is working' },
        paragraphs: {
          en: [
            'Before anything is drawn, the current site gets read the way a visitor and a crawler read it: which pages get traffic, which ones convert, where people leave, and which URLs other sites link to.',
            'That list is the constraint the redesign is built inside. A site that looks better and performs worse is a very expensive way to lose ground, and it is the normal outcome when the new design is briefed only on how the old one looks.',
          ],
        },
      },
      {
        heading: { en: 'Redirects are part of the design' },
        paragraphs: {
          en: [
            'The single most common way a redesign costs money is URLs. Pages move, slugs get tidied, a section is merged into another, and everything that pointed at the old address lands on a 404 — including the search results that were sending you customers.',
            'Every existing URL is mapped to its destination on the new site before launch, and the ones with nothing equivalent get a deliberate decision rather than a default. This is unglamorous and it is the part that protects the investment.',
          ],
        },
      },
      {
        heading: { en: 'Ship in stages where it helps' },
        paragraphs: {
          en: [
            'A full-site relaunch on one date is the riskiest version of this work. Where the site allows it, the redesign goes out in stages — the templates that carry the most traffic first — so problems surface on one section rather than on all of them at once.',
            'It also means value arrives earlier. The pages that matter get better in month one instead of everything getting better in month five.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'Will a redesign hurt our search rankings?' },
        answer: {
          en: 'It can, and it usually does when URLs change without a redirect map, when page content is cut back, or when the new build is slower than the old one. Those are the three causes, and all three are avoidable — which is why the URL map and a performance check are part of the work rather than an add-on. Nobody can promise rankings will hold, but they can be protected deliberately instead of hoped for.',
        },
      },
      {
        question: { en: 'Can you redesign without rebuilding?' },
        answer: {
          en: 'Yes. Plenty of these are design-only: the redesigned pages are delivered as Figma files and your developers build them. The redirect and structure work is still worth doing in that case, and I will hand it over as part of the design.',
        },
      },
      {
        question: {
          en: 'Our site is on Webflow or a custom stack. Does that change anything?',
        },
        answer: {
          en: 'It changes what the rebuild looks like, not whether it is possible. A Webflow site is usually rebuilt inside Webflow, and can move to a modern Next.js / React front end if there is a reason to. Where the current stack has custom back-end functionality, that part stays with your developers.',
        },
      },
    ],
    relatedProjects: ['stayease', 'zenith'],
  },
  {
    slug: 'webflow-development',
    pillar: 'development',
    number: '05',
    title: { en: 'Webflow development' },
    description: {
      en: 'Webflow builds from a Figma design with a class structure that stays readable and a CMS your team can publish from without a developer in the loop.',
    },
    deliverables: {
      en: [
        'Figma design built in Webflow, responsive across every breakpoint',
        'CMS collections set up so content is editable without touching layout',
        'Handover walkthrough, and a site your team can publish from',
      ],
    },
    metaTitle: 'Webflow Development and Figma to Webflow',
    metaDescription:
      'Webflow development from a Figma design: readable class structure, responsive breakpoints, CMS collections your team can publish from, and a handover that actually sticks.',
    keywords: [
      'Webflow developer',
      'Figma to Webflow',
      'Webflow development services',
      'Webflow CMS setup',
      'freelance Webflow designer',
      'Webflow website build',
    ],
    heading: {
      en: 'Webflow, built to be handed over',
    },
    intro: {
      en: 'A Webflow build from your design with classes that mean something, breakpoints that hold under real content, and a CMS set up so the next content change does not come back to me.',
    },
    sections: [
      {
        heading: { en: 'Choose Webflow for who maintains it' },
        paragraphs: {
          en: [
            'Webflow is the right answer when your team needs to edit and publish without a developer, and the wrong one when the site has to do something Webflow’s model fights. That is a question about your team first and the technology second.',
            'If the honest answer is that nobody will ever edit the site, a coded build is usually faster and cheaper to run. I would rather point that out than sell the subscription.',
          ],
        },
      },
      {
        heading: { en: 'Classes and structure, not a pile of divs' },
        paragraphs: {
          en: [
            'Webflow will happily let a site grow eighty near-identical classes, and the result is a project nobody can safely change six months later. The build starts from a naming convention and a set of shared base styles, so a spacing or colour change happens once.',
            'It is the same discipline as a design system, applied inside the builder. It costs a little more at the start and it is the entire difference between a site your team maintains and a site your team asks someone to look at.',
          ],
        },
      },
      {
        heading: { en: 'The CMS is the deliverable' },
        paragraphs: {
          en: [
            'Collections, fields and reference relationships are designed around the content you actually publish, not around the pages that exist today. A blog, a case study library and a team page all have different shapes, and getting them wrong shows up the first time someone adds a record.',
            'Handover includes a walkthrough of how to add, edit and publish, so the site does not quietly stop being updated a month after launch.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'Webflow or a custom React build?' },
        answer: {
          en: 'Webflow when your team publishes content and the site is broadly conventional in structure. A custom build when the interface has real product behaviour, when the content shapes are unusual, or when you do not want a monthly platform cost. Both are on offer here, so the recommendation is not a sales decision.',
        },
      },
      {
        question: { en: 'Do we pay for Webflow separately?' },
        answer: {
          en: 'Yes. The Webflow site plan and hosting are billed by Webflow directly to you, in your own account, and the project is transferred into it. I do not hold client hosting accounts or resell platform subscriptions — you should be able to remove me and keep everything running.',
        },
      },
      {
        question: { en: 'Can you take over an existing Webflow project?' },
        answer: {
          en: 'Usually, and it starts with a look at how it was built. A project with a coherent class structure is straightforward to take on; one built entirely from one-off styles sometimes costs more to work inside than to rebuild, and you get that assessment before committing to either.',
        },
      },
    ],
    relatedProjects: ['stayease', 'ai-agent-landing'],
  },
  {
    slug: 'framer-development',
    pillar: 'development',
    number: '06',
    title: { en: 'Framer development' },
    description: {
      en: 'Framer sites for launches and marketing pages, where the design, the motion and the published page are one artefact instead of three handoffs.',
    },
    deliverables: {
      en: [
        'Site designed and published in Framer, responsive across breakpoints',
        'Scroll and interaction motion designed in the same file that ships',
        'Custom domain connected, in your own Framer account',
      ],
    },
    metaTitle: 'Framer Website Design and Development',
    metaDescription:
      'Framer website design and development: marketing sites and launch pages where the design, the motion and the published page are one file, published to your own account.',
    keywords: [
      'Framer developer',
      'Framer website design',
      'Figma to Framer',
      'Framer development services',
      'Framer landing page',
      'freelance Framer designer',
    ],
    heading: {
      en: 'Framer, when the design and the live site should be one file',
    },
    intro: {
      en: 'For marketing sites and launch pages where the motion is part of the argument and a written spec would lose it — the thing you review is the thing that ships.',
    },
    sections: [
      {
        heading: { en: 'One artefact instead of three' },
        paragraphs: {
          en: [
            'The usual chain is design file, spec, build — and every link in it loses something, particularly timing and easing, which are almost impossible to describe accurately in writing.',
            'In Framer the file is the site. What you approve in review is what goes live, which removes an entire round of "that is not quite how it moved in the prototype".',
          ],
        },
      },
      {
        heading: { en: 'Motion that is designed, not sprinkled' },
        paragraphs: {
          en: [
            'Scroll and interaction motion earns its place by directing attention — showing what is related to what, and what just changed. Motion applied evenly across a page cancels itself out and mostly costs performance.',
            'Reduced-motion preferences are respected as standard, so the site stays usable for people who have asked their device for less movement rather than breaking for them.',
          ],
        },
      },
      {
        heading: { en: 'What Framer is not the right tool for' },
        paragraphs: {
          en: [
            'Deep content structures, complex product interfaces and anything that has to integrate closely with your own application are all better served by a coded build. Framer is at its best on marketing surfaces that change often and are meant to be replaced.',
            'If a project is drifting past that line, the honest recommendation is Webflow or a Next.js build, and it costs nothing to say so before the work starts rather than after.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'Framer or Webflow?' },
        answer: {
          en: 'Framer for motion-led marketing sites and launch pages that will be edited by a small team or replaced after a campaign. Webflow when the content library is the point — a real blog, case studies, structured collections that multiple people publish into. Both are built here, so ask before choosing.',
        },
      },
      {
        question: { en: 'Can we edit the site ourselves afterwards?' },
        answer: {
          en: 'Yes. Framer’s editing model is close enough to a document that a marketing team picks it up quickly, and the handover covers it. Structural changes — new page types, new components — are where you would come back, and that is true of every platform.',
        },
      },
      {
        question: { en: 'Whose account does the site live in?' },
        answer: {
          en: 'Yours. The project is transferred to your Framer account and the plan is billed to you directly, so the site and the domain stay under your control regardless of whether we work together again.',
        },
      },
    ],
    relatedProjects: ['ai-agent-landing', 'stayease'],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

/**
 * The services in one pillar, in display order.
 *
 * Used by the two hub pages, the grouped listing on `/services`, and the
 * sibling links at the foot of every detail page. Filtering at the call site
 * instead would put the pillar rule in four places and let them drift.
 */
export function servicesByPillar(pillar: ServicePillar): Service[] {
  return services.filter((service) => service.pillar === pillar)
}

/**
 * The six that appear on the home page grid. Derived rather than sliced, so
 * reordering the array never silently changes what the home page shows — and
 * so the count is a property of the content, not of a magic number in a
 * component.
 */
export const featuredServices = services.filter((service) => service.featured)

/**
 * A flat, tiny shape for the contact form's service `<select>`.
 *
 * Built on the server and passed down as a prop rather than importing
 * `services` into the form. `ContactForm` is a client component, and importing
 * this module there would ship every service's prose, FAQs and metadata — tens
 * of kilobytes of copy nobody reads — into the browser bundle to populate a
 * dropdown that needs fifteen strings.
 */
export function serviceSelectOptions(
  locale: Locale,
): { value: string; label: string; pillar: ServicePillar }[] {
  return services.map((service) => ({
    value: service.slug,
    label: service.title[locale],
    pillar: service.pillar,
  }))
}
