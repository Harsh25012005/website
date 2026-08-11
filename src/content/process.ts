import type { Faq, Localized, ProcessPhase } from './types'

/**
 * Copy for `/process`.
 *
 * Not to be confused with `servicesProcess` in `about.ts`, which is the
 * four-step summary rendered on `/services`. That one exists to reassure
 * someone comparing designers; this one exists to answer the question a client
 * asks after they have decided — what actually happens, in what order, and what
 * do I have at the end of each part.
 *
 * The two must not converge into the same text. If this page ever reads like a
 * longer version of the summary, it has stopped earning its URL: keep the
 * summary at four steps and keep the detail, the outputs and the honest parts
 * (what slips, who is waiting on whom) here.
 *
 * ⚠️  No invented turnarounds. Every timing statement below is relative
 * ("before design starts", "while it is still cheap") rather than a number of
 * days, because a specific promise here becomes a claim on every project. When
 * a real, repeatable figure exists, put it in — the specific answer always
 * outperforms the careful one.
 */

export const processIntro: Localized<string> = {
  en: 'Every project runs through the same six phases, whether it ends at a Figma file or a deployed site. The point of writing them down is that you can see where your money is at any moment, and what exists at the end of each stage if the project stops there.',
}

export const processPhases: ProcessPhase[] = [
  {
    number: '01',
    heading: { en: 'Brief' },
    paragraphs: {
      en: [
        'A short call or a written brief, covering what the product does, who it is for, what is already decided, and what "done" looks like. The most useful part is usually the constraints: the deadline that is real, the stakeholder who has to approve, the technical decision already made.',
        'If a project is a bad fit — the wrong scope, the wrong stack, or work that needs a specialist I am not — this is where that gets said. It is a cheaper place to find out than week three, and it happens often enough to be worth mentioning.',
      ],
    },
    output: { en: 'A shared understanding of the problem, and a yes or no.' },
  },
  {
    number: '02',
    heading: { en: 'Scope and quote' },
    paragraphs: {
      en: [
        'The brief becomes a written scope: what is included, what is explicitly not, the phases, the review points, the payment milestones and the timeline. It is quoted as a fixed price against that scope rather than as an hourly estimate.',
        'Scope changes are normal and are handled as a written change to both the scope and the price. The alternative — absorbing them quietly and arguing about it at the end — is how projects end badly for whichever side is less willing to have the conversation.',
      ],
    },
    output: { en: 'A signed scope, a fixed price and a schedule.' },
  },
  {
    number: '03',
    heading: { en: 'Structure' },
    paragraphs: {
      en: [
        'Flows and low-fidelity wireframes before anything is styled. Drawing every screen and decision point end to end is what surfaces the branches nobody scoped: the failed payment, the expired invite, the two people editing the same record.',
        'This stage is deliberately grey and unfinished-looking, because a polished mockup changes the conversation. Show a finished screen and the feedback is about the button colour; show a wireframe and the feedback is about whether the step belongs there at all.',
      ],
    },
    output: { en: 'Flow diagrams and wireframes, reviewed and agreed.' },
  },
  {
    number: '04',
    heading: { en: 'Interface' },
    paragraphs: {
      en: [
        'High-fidelity design in Figma on a grid, type scale and spacing system, built as components with tokens from the start rather than tidied into them afterwards.',
        'States are designed here, not assumed: empty, loading, error, permission-denied, and the version of every screen where the content is twice as long as the placeholder. Review happens at each stage rather than in one round at the end, so feedback lands while it is still cheap to act on.',
      ],
    },
    output: {
      en: 'Screens, components and tokens in Figma, plus a clickable prototype where the project needs one.',
    },
  },
  {
    number: '05',
    heading: { en: 'Build' },
    paragraphs: {
      en: [
        'On projects that continue into code, the approved design is built as a responsive front end — React and Next.js, or Webflow, Framer and WordPress templates, whichever the scope settled on. The Figma component becomes the coded component and the design token becomes the code token, so one decision stays one decision.',
        'Performance and accessibility are part of building rather than a pass at the end: static rendering where the content allows it, images sized and served properly, semantic markup, keyboard navigation, visible focus and contrast that holds. Retrofitting these is a rewrite of the markup.',
      ],
    },
    output: {
      en: 'A working, responsive front end in your repository or platform account.',
    },
  },
  {
    number: '06',
    heading: { en: 'Launch, and after' },
    paragraphs: {
      en: [
        'Cross-browser and cross-device QA against the design, a redirect map applied where URLs have changed, and a handover of the files, the code and the accounts — all in your ownership, with nothing depending on me staying involved.',
        'After that the site starts ageing: dependencies fall behind, content gets added by people who were not at the kickoff, and images get uploaded straight off a camera. A maintenance arrangement covers that if you want one, and if you do not, the handover is written so your own team can.',
      ],
    },
    output: {
      en: 'A live site, the files and code in your hands, and a record of what changed.',
    },
  },
]

/**
 * Questions about how an engagement runs, rather than what it costs or what it
 * includes — those are answered on `/pricing` and on each service page. Keeping
 * the three sets disjoint matters: the same question answered twice in
 * `FAQPage` markup on two URLs is duplicate structured data competing with
 * itself.
 */
export const processFaqs: Faq[] = [
  {
    question: { en: 'How often will I hear from you?' },
    answer: {
      en: 'There is a review at the end of every phase, and those are scheduled rather than assumed. Between them, progress goes into the shared Figma file or repository as it happens, so you can look without asking. Anything that changes the scope or the timeline is raised at the moment it comes up rather than saved for the next review.',
    },
  },
  {
    question: { en: 'What happens if the project slips?' },
    answer: {
      en: 'Most delays come from one of two places: feedback taking longer than planned, or a decision the brief assumed was settled turning out not to be. Both get flagged as soon as they appear, with what it does to the date. A timeline that quietly moves twice and is announced once at the end is the version worth avoiding.',
    },
  },
  {
    question: { en: 'Can we start midway through this?' },
    answer: {
      en: 'Yes, and plenty of projects do. If you already have flows and wireframes, the work starts at the interface phase. If you have an approved design, it starts at the build. The brief and scope phases still happen — they are the two that stop a project going wrong — but they are shorter when the decisions are already made.',
    },
  },
  {
    question: { en: 'Do you work with our developers?' },
    answer: {
      en: 'Regularly. Handoff is not a single moment, and questions come up while a build is underway. I stay available to answer them, review implementations against the design, and adjust where the code reveals something the file did not. How much of that time is included is written into the scope rather than left to goodwill.',
    },
  },
]
