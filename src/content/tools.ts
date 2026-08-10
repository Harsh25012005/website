import type { Localized, ToolGroup } from './types'

/**
 * Copy for `/tools`.
 *
 * This is the "/uses" page the design and front-end community collects and
 * links to, published at `/tools` because that is the word a prospective client
 * understands — the convention is only legible to people already inside it.
 *
 * It earns its place for links rather than for search traffic: these pages get
 * shared between people in the field, and an inbound link from a real
 * practitioner's site is worth more than the handful of searches the page
 * attracts on its own.
 *
 * Which is also the rule for editing it. A bare list of tool names is what
 * everyone else publishes and nobody links to. The `note` on each item — why
 * this one, what it is actually for — is the entire value of the page.
 *
 * Not to be confused with the `tools` array in `about.ts`: that one is a flat
 * list of names feeding `knowsAbout` in the Person schema and the résumé tag
 * list. This file is the prose about them.
 *
 * ⚠️  Hardware is deliberately absent: I do not know what you work on. Add a
 * group for it if you want one; it is usually the part people read first.
 */

export const toolsIntro: Localized<string> = {
  en: 'The tools behind the work, and the reason each one is still here. Nothing on this list is a recommendation for anyone else — it is what happens to fit the way I work between a Figma file and a deployed front end.',
}

export const toolGroups: ToolGroup[] = [
  {
    heading: { en: 'Design' },
    intro: {
      en: 'Figma does most of the work. The rest are here because a client or a project already lives in them.',
    },
    items: [
      {
        name: 'Figma',
        note: {
          en: 'Where essentially every project starts and ends. Components, variants and auto layout map closely enough to how a front end is actually built that the file stays useful after handoff instead of becoming a picture of the design.',
        },
      },
      {
        name: 'Framer',
        note: {
          en: 'For sites where the design and the published page should be the same artefact, and for motion that is easier to demonstrate than to describe in a spec.',
        },
      },
      {
        name: 'Webflow',
        note: {
          en: 'When a client needs to edit and publish content themselves afterwards without a developer in the loop. Chosen for who maintains the site, not for how it is built.',
        },
      },
      {
        name: 'Sketch',
        note: {
          en: 'Only when a project arrives in it. Plenty of long-running products still have their source of truth in a Sketch library, and converting one is rarely worth the disruption.',
        },
      },
    ],
  },
  {
    heading: { en: 'Front end' },
    intro: {
      en: 'Enough to take a design all the way to production, and to know while designing which ideas are cheap and which are expensive.',
    },
    items: [
      {
        name: 'React',
        note: {
          en: 'The component model lines up with how a design system is structured, so the Figma component and the coded component stay the same unit rather than two parallel inventories.',
        },
      },
      {
        name: 'Next.js',
        note: {
          en: 'App Router and server components by default. Most of what I build is content-led and should ship as static HTML — this site included.',
        },
      },
      {
        name: 'Tailwind CSS',
        note: {
          en: 'Design tokens as the only way to write a value. It makes an off-system spacing or colour choice visible in review, which is a constraint worth more than the speed.',
        },
      },
      {
        name: 'TypeScript',
        note: {
          en: 'Mostly for the content layer. Typing the shape of a case study or a service means a missing field is a build error rather than a blank space someone notices in production.',
        },
      },
      {
        name: 'HTML & CSS',
        note: {
          en: 'Still the part that decides whether a build is any good. Semantics, focus order and contrast are design decisions that happen to be written in markup.',
        },
      },
      {
        name: 'PHP',
        note: {
          en: 'For projects on existing PHP stacks — usually a front end that has to slot into something already running rather than a greenfield build.',
        },
      },
    ],
  },
  {
    heading: { en: 'This site' },
    intro: {
      en: 'Since a portfolio should be able to answer the question it invites.',
    },
    items: [
      {
        name: 'GSAP',
        note: {
          en: 'ScrollTrigger and SplitText for the heading reveals and scroll-driven sequences. Every motion primitive checks prefers-reduced-motion and degrades to a static, fully visible layout.',
        },
      },
      {
        name: 'Lenis',
        note: {
          en: 'Smooth scrolling, driven from the GSAP ticker rather than its own animation frame — on a separate loop, pinned and parallax elements lag the scroll position by a frame.',
        },
      },
      {
        name: 'three.js',
        note: {
          en: 'The particle background, kept to a single draw call. A portfolio that costs a phone its battery to look at has made the wrong trade.',
        },
      },
    ],
  },
]
