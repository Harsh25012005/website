import type { Article } from './types'

export const articles: Article[] = [
  {
    slug: 'ui-ux-design-trends-2026',
    title: {
      en: 'UI/UX design trends for 2026 worth actually adopting',
    },
    excerpt: {
      en: 'Which UI/UX design trends for 2026 hold up under real product constraints, from AI-assisted interfaces to accessible-by-default patterns, and which are just decoration.',
    },
    date: '2026-08-18',
    readingTime: 8,
    cover: {
      src: '/images/articles/ui-ux-design-trends-2026/cover.png',
      alt: {
        en: 'Isometric illustration of UI/UX design system elements on a dark background: a dashboard, a mobile app screen, an accessibility icon, a colour and spacing scale, and editing tools',
      },
    },
    intro: {
      en: [
        'Every January a list goes around with the same shape: fifteen trends, a screenshot from Dribbble for each, and no mention of what happens when the trend meets a real content management system, a support ticket queue, or a user on a three-year-old Android phone. Most of it does not survive contact with a shipping product.',
        'I audit and redesign live products for a living, not concept shots, so this is the shorter list: the shifts in UI/UX design that are actually showing up in briefs and holding up in usability testing this year, and the ones I would still tell a client to skip.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'Judge a trend by what it costs the user, not how it photographs',
        },
        paragraphs: {
          en: [
            'A trend earns a place in a real interface if it removes a step, clarifies a state, or speeds up a task. Everything else is decoration wearing the vocabulary of a design system, and decoration has a cost: every animated flourish is milliseconds of blocked main thread, every novel pattern is a moment a first-time user has to stop and learn your product instead of using it.',
            'The filter I actually use on client work: would this still be worth building if nobody could see it was "on trend"? If the honest answer is that it exists to look current in a portfolio shot, it does not go in the file.',
            'That filter is why the list below skips most of what circulates as this year’s UI trends and keeps only what changed how a product behaves, not just how it looks.',
          ],
        },
      },
      {
        heading: {
          en: 'AI inside the interface, not just behind it',
        },
        paragraphs: {
          en: [
            'The interesting shift this year is not that products added a chatbot. It is AI surfacing inside existing flows: inline suggestions in a form field, a generated first draft in an empty state, a summary offered instead of forcing someone to read forty rows of a table. Done well it removes a step; done badly it is a spinner with extra confidence.',
            'The design problem is trust, not novelty. An AI-filled field needs to look editable and provisional, not final. I use a visibly different state for it, a distinct background tint plus a label, until the user has explicitly accepted it. Ship a generated value that looks identical to a user-entered one and the first wrong guess erodes trust in every field after it.',
            'Latency also needs designing for, not apologised for after the fact. If a suggestion takes two seconds to arrive, the empty state before it has to hold its own, not sit there as a blank box implying something is broken.',
          ],
        },
      },
      {
        heading: {
          en: 'Motion with restraint, not motion by default',
        },
        paragraphs: {
          en: [
            'Two years of every card animating in and every button carrying a spring on hover have produced the correction: motion that communicates a state change, and nothing else. A save button confirming with a checkmark morph is worth the frames it costs. A page of cards staggering in on every visit is not; it is a tax the user pays each time they arrive, for no information gained.',
            '`prefers-reduced-motion` moved from a nice-to-have to a default check on client work this year, and rightly so. It is no longer just an accessibility line item — browsers ship it on by default for a meaningful share of users, and a product that ignores the query is choosing to fight the operating system.',
            'The practical rule: animate to explain a change in state (loading, success, error, an item leaving a list), and leave everything else static. If you cannot say what a given animation is teaching the user, cut it.',
          ],
        },
      },
      {
        heading: {
          en: 'Accessible-by-default is no longer a separate pass',
        },
        paragraphs: {
          en: [
            'Contrast ratios, visible focus states and keyboard paths used to be the thing checked at the end, if there was time. In 2026 briefs I am seeing them named up front, partly because WCAG 2.2 has become the baseline expectation in more procurement checklists, and partly because more of the audience genuinely is on an assistive setup, not a hypothetical one.',
            'What changes in practice: component states are designed for focus-visible from the first pass, not retrofitted; text on colour is checked at a 4.5:1 ratio as a build constraint rather than a launch note; and forms get inline, text-based error messaging as a default rather than a colour change nobody without full colour vision can read.',
            'This one is not a trend in the usual sense, it is table stakes catching up to where it should have been years ago, and it is the item on this list with the least room for skipping.',
          ],
        },
      },
      {
        heading: {
          en: 'Modular, bento-style layouts, used where density earns them',
        },
        paragraphs: {
          en: [
            'The grid of unevenly sized cards has spread from portfolio sites into dashboards and settings pages, and it earns its place when a screen genuinely has content of different weights: one card that is a chart, one that is a single number, one that is a short list. Forcing everything into equal-width cards was hiding that hierarchy; the bento layout states it plainly.',
            'It does not earn its place on a page where every item deserves the same weight. A pricing table forced into a bento grid loses the one thing a pricing table needs, which is easy left-to-right comparison. Use the pattern because the content has unequal weight, not because the grid looks considered in a screenshot.',
          ],
        },
      },
      {
        heading: {
          en: 'What I am telling clients to skip',
        },
        paragraphs: {
          en: [
            'Glassmorphism panels stacked three deep, where legibility drops with every layer of blur. Cursor-following blobs and gradient orbs that exist purely as set dressing and cost real paint time on lower-end devices. Decorative "AI thinking" animations that add three seconds to a task a static state would have completed instantly. None of these move a task forward, and all of them show up disproportionately in trend roundups because they screenshot well.',
            'The pattern across all three: they are optimised for the first five seconds of looking at a static image, not for the fiftieth time a real user opens the product to get something done. Design for the fiftieth time, and most of what is trending this year quietly rules itself out.',
          ],
        },
      },
    ],
    gallery: [],
    relatedProjects: ['zenith', 'stayease'],
    relatedServices: ['web-ui-design', 'saas-product-design'],
  },
  {
    slug: 'ai-coding-tools-client-projects',
    title: {
      en: 'AI coding tools in 2026: what changes on a client build',
    },
    excerpt: {
      en: 'Where AI coding assistants genuinely speed up client front-end work in 2026, where they quietly cost time instead, and how code review has to change either way.',
    },
    date: '2026-08-05',
    readingTime: 8,
    cover: {
      src: '/images/articles/ai-coding-tools-client-projects/cover.png',
      alt: {
        en: 'Isometric illustration of an AI coding assistant on a dark background: a code editor with generated lines, an autocomplete panel, a context-aware assistant, a diff review, and a "time saved" chart',
      },
    },
    intro: {
      en: [
        'I design most of what I build, and I have used AI coding assistants on client work since they were autocomplete with good manners. The honest update for 2026 is that they got fast enough to change how a project is scoped, not just how a function gets typed — and fast enough that the mistakes they make are also easier to ship without noticing.',
        'This is not a tool comparison. It is where the speedup is real on a paid client project, where it is not, and what changed about how I review my own output because of it.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'Scaffolding is fast now; judgement still is not',
        },
        paragraphs: {
          en: [
            'Ask a current model to build a settings page with a form, validation and a save state, and it will produce something that runs in under a minute. That used to be twenty minutes of typing. The part that has not moved is deciding what the settings page should actually contain, what happens when the save request fails, and whether this is even the right pattern for this particular client’s data.',
            'That split is the whole story. Typing got cheap; deciding what to type stayed exactly as expensive as it always was, because it depends on context the model does not have — the client’s actual users, the edge cases from last quarter’s support tickets, the constraint nobody wrote down. Selling "AI writes your app" skips past the half of the job that was never the typing.',
          ],
        },
      },
      {
        heading: {
          en: 'Where the speedup is real',
        },
        paragraphs: {
          en: [
            'Boilerplate and repetition are where this pays for itself every time: a component that needs five near-identical variants, converting a spreadsheet of copy into typed content objects, writing the fortieth test for the thirty-ninth pattern already established in the codebase. The model has plenty of local context and the task has one obviously correct shape.',
            'Migrations are the other clear win. Bumping a UI library’s major version, renaming a prop across forty usages, converting class components to hooks: mechanical, high-volume, low-judgement changes that used to eat a full day now take an afternoon of generation plus review.',
            'It is also a genuinely good pairing for token-to-code work: handing over a Figma file’s spacing and colour tokens and getting a first pass at a Tailwind theme config generated from them, then correcting the values by hand, is faster than typing the object from scratch.',
          ],
        },
      },
      {
        heading: {
          en: 'Where it quietly costs time',
        },
        paragraphs: {
          en: [
            'Anything touching a codebase the model has not effectively seen — a large, idiosyncratic legacy client project, a non-standard state management setup, an internal library with its own conventions — produces code that looks right and is subtly wrong: a hook called in the wrong order, a type that compiles but does not match the actual shape of the API response. Confidently wrong is worse than obviously wrong, because it passes a skim.',
            'Security-sensitive code is the other place I do not delegate the first draft: auth checks, anything touching payment, anything that decides what a user is allowed to see. The failure mode there is not a bug report, it is a client’s data exposed, and that is not a risk worth the minutes saved.',
            'Net, on an unfamiliar or unusual codebase, review time can exceed the time saved in generation. The tool is fastest exactly where you already knew the codebase well enough to barely need it.',
          ],
        },
      },
      {
        heading: {
          en: 'Review discipline changes, not disappears',
        },
        paragraphs: {
          en: [
            'I treat generated code the way I would treat a pull request from a fast, confident junior developer who has never met this specific client: read every line before it ships, do not assume the tests it wrote actually cover the case that matters, and check the diff against what the ticket asked for rather than against what looks plausible.',
            'The specific habit that has saved me the most: asking the model to explain its own change back to me in plain language before I accept it. Where the explanation does not match what the diff actually does, that mismatch is usually where the bug is.',
          ],
        },
      },
      {
        heading: {
          en: 'What this means for pricing and scope',
        },
        paragraphs: {
          en: [
            'Faster generation does not mean the work is worth less; it means more of what a client is paying for is judgement, review and taste rather than keystrokes, and that was arguably always the real deliverable. I have not dropped rates because a tool made the typing faster — I have used the time it freed up to spend more of a project’s hours on the parts that still need a human: the states nobody specified, the edge cases the ticket did not mention, testing on an actual device.',
            'Where it has changed a quote: small, well-scoped, mechanical jobs — a migration, a batch of similar components — are now genuinely faster to deliver, and I price them accordingly rather than padding the estimate to a pre-AI baseline out of habit.',
          ],
        },
      },
      {
        heading: {
          en: 'The stack that pairs well with it',
        },
        paragraphs: {
          en: [
            'Generated code is only as good as the constraints around it. A strongly typed codebase gives the model, and the reviewer, an immediate, mechanical check that a change is at least internally consistent. A codebase with clear conventions and a component library the model can see gives it a pattern to match instead of inventing a new one each time.',
            'Next.js and Tailwind specifically pair well with this workflow: Tailwind’s utility classes are unambiguous in a way custom CSS class names are not, so generated markup rarely drifts from the design tokens, and a typed props interface catches a mismatch immediately rather than at runtime in front of the client.',
          ],
        },
      },
    ],
    gallery: [],
    relatedProjects: ['stayease', 'ai-agent-landing'],
    relatedServices: ['custom-web-development', 'figma-to-react'],
  },
  {
    slug: 'core-web-vitals-2026',
    title: {
      en: 'Core Web Vitals in 2026: why site speed still wins deals',
    },
    excerpt: {
      en: 'A practical look at Core Web Vitals in 2026: the LCP, INP and CLS thresholds that matter, where they actually break on real client sites, and the fixes that move them fastest.',
    },
    date: '2026-07-22',
    readingTime: 7,
    cover: {
      src: '/images/articles/core-web-vitals-2026/cover.png',
      alt: {
        en: 'Isometric illustration of Core Web Vitals on a dark background: LCP, INP and CLS score cards, a page speed gauge at 92, a performance-over-time chart, and a list of top fixes',
      },
    },
    intro: {
      en: [
        'A client rarely opens a conversation by asking about Interaction to Next Paint. They open it by saying the site "feels slow", or that a competitor’s site "feels snappier", and then it is my job to turn that feeling into a number and the number into a fix. Core Web Vitals are still the best public vocabulary for that conversation, and the specifics worth knowing in 2026 have shifted since the metric set last changed.',
        'This is the practical version: what the three metrics measure, where each one actually breaks on the client sites I audit, and how to prove the fix worked rather than just asserting it.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'The three metrics that still matter',
        },
        paragraphs: {
          en: [
            'Largest Contentful Paint measures how long the biggest visible element takes to render: the hero image, a headline, a video poster. Under 2.5 seconds is good. Interaction to Next Paint measures the delay between a tap or click and the next visual update, under 200 milliseconds is good, and it replaced First Input Delay as the responsiveness metric because FID only measured the first interaction, not the ones that happen after a page has finished loading and gotten sluggish. Cumulative Layout Shift measures how much visible content jumps around unexpectedly, under 0.1 is good.',
            'All three are pass or fail at the 75th percentile of real visits, not an average and not a lab score. A site that is fast for most visitors and terrible for one in five on a throttled connection still fails the metric, because the threshold is deliberately set to reflect a realistic slower visit, not a top-of-the-range laptop on fibre.',
          ],
        },
      },
      {
        heading: {
          en: 'Where LCP actually breaks',
        },
        paragraphs: {
          en: [
            'On the sites I audit it is almost never the framework. It is an unoptimised hero image shipped at four times the rendered size, a web font blocking text render because it was not preloaded, or a third-party script — a chat widget, an analytics tag, a marketing pixel — loaded synchronously before the content it is supposed to be measuring.',
            'The fix is rarely dramatic: serve the hero at the size it renders at, in a modern format, with high fetch priority and no lazy-loading on the one image guaranteed to be above the fold; preload the font file instead of letting the browser discover it after parsing the CSS; and load every third-party script asynchronously, full stop, unless it has a specific reason to block.',
          ],
        },
      },
      {
        heading: {
          en: 'INP is a JavaScript problem',
        },
        paragraphs: {
          en: [
            'Where LCP is mostly a loading problem, INP is almost entirely a main-thread problem: a long task blocking the browser from responding to a tap, usually caused by too much JavaScript running, hydrating or re-rendering at once. A single component that re-renders an entire long list on every keystroke will fail INP even on a fast connection, because the delay has nothing to do with the network.',
            'The fix that has mattered most on React and Next.js projects this year is being deliberate about what actually needs to be a client component versus what can stay server-rendered, and splitting large client bundles so an interaction on one part of the page is not waiting on JavaScript for an unrelated part to finish executing. Debouncing expensive handlers and virtualising long lists both still earn their keep.',
          ],
        },
      },
      {
        heading: {
          en: 'CLS: the cheap fix nobody bothers to make',
        },
        paragraphs: {
          en: [
            'Layout shift is usually caused by the same three things: an image or video embed with no reserved width and height, a web font that renders at a noticeably different width than the fallback it replaces, and content — usually an ad slot, a cookie banner or a promotional bar — injected above existing content after the page has already laid out.',
            'All three have a fix that costs almost nothing: set explicit dimensions on every image and embed, choose a fallback font metrically close to the web font (or accept a brief flash rather than a shift), and reserve space for anything that injects late instead of letting it push everything below it down the page.',
          ],
        },
      },
      {
        heading: {
          en: 'Measuring it right',
        },
        paragraphs: {
          en: [
            'A Lighthouse score in dev tools is lab data: one run, on one machine, on a fast connection, useful for diagnosing the cause of a problem. It is not the number Google actually judges the page on, which comes from the Chrome User Experience Report: real visits, real devices, real networks, aggregated over 28 days. A page can score 100 in Lighthouse and still fail its Core Web Vitals in the field if enough real visitors are on a mid-range phone on patchy 4G.',
            'Search Console’s Core Web Vitals report and PageSpeed Insights both surface the field data once a site has enough traffic to qualify. For a smaller client site that has not hit the CrUX traffic threshold, I track the same three metrics through a lightweight script in the browser itself, sent to analytics, so the client gets real numbers rather than a lab estimate standing in for them.',
          ],
        },
      },
      {
        heading: {
          en: 'Why this still closes deals',
        },
        paragraphs: {
          en: [
            'Most prospective clients cannot read a Lighthouse report, and they do not need to: they can feel a site that responds instantly to a tap versus one with a beat of lag, and they notice a competitor’s page loading before theirs has finished its layout shift. Performance is one of the few pieces of craft that is directly perceptible without any design vocabulary, which makes it unusually persuasive in a pitch.',
            'It also compounds with the rest of the site: a beautifully designed page that stutters on first load reads as unfinished, and a plain page that responds instantly reads as considered. Speed is not separate from the design work, it is part of what the design is judged on the moment a real visitor opens it.',
          ],
        },
      },
    ],
    gallery: [],
    relatedProjects: ['cleaning-services-app'],
    relatedServices: ['custom-web-development', 'website-redesign'],
  },
  {
    slug: 'design-system-in-figma',
    title: {
      en: 'How to build a design system in Figma that survives handoff',
    },
    excerpt: {
      en: 'A practical guide to design systems in Figma: variables and tokens, type and spacing scales, component properties, and naming that holds up in code.',
    },
    date: '2026-06-16',
    readingTime: 9,
    cover: {
      src: '/images/articles/design-system-in-figma/cover.png',
      alt: {
        en: 'Figma design system interface displaying color tokens, typography scales, spacing scale, and UI components on dark background',
      },
    },
    intro: {
      en: [
        'Most design systems fail for the same reason: they are built as a separate exercise, admired for a week, and then quietly abandoned the first time a deadline arrives. The file grows a "Components" page nobody opens while the actual product screens are full of detached instances and one-off hex codes.',
        'This is the version I use on real client work: small enough to build in a few days, strict enough that it still holds three months later, and structured so a developer can map it onto Tailwind or a component library without guessing.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'Start with an audit, not a blank file',
        },
        paragraphs: {
          en: [
            'Before you define anything, take the screens that already exist and pull out every colour, every text style and every spacing value in use. On a product that has been designed by more than one person, the result is usually eleven greys, seven font sizes that differ by one or two pixels, and three button heights. That inventory is the system brief. You are not inventing a scale from nothing; you are deciding which of the existing values survive.',
            'Collapse aggressively. Two greys that differ by two per cent lightness are one grey. A 15px and a 16px body size are one body size. Every value you keep is a decision someone has to make again on every future screen, so the smaller the set, the faster the system is to use, and speed of use is the only thing that determines whether people actually use it.',
            'Write the surviving values down as a flat list before you touch Figma variables. If you cannot justify a value out loud in one sentence, it does not go in.',
          ],
        },
      },
      {
        heading: {
          en: 'Three tiers of tokens, and no more',
        },
        paragraphs: {
          en: [
            'Figma variables make it tempting to build an elaborate token graph. Resist it. Three tiers cover almost every product: primitives, semantics, and the small number of component-level overrides you genuinely cannot express semantically.',
            'Primitives are raw values with meaningless names: grey/100 through grey/900, blue/500, space/4. Semantics describe intent and point at primitives: surface/default, surface/raised, text/primary, text/muted, border/subtle, action/primary. Components only get their own token when a value is truly local, like the specific height of your date-picker cell.',
            'The reason for the middle tier is themes. When a client asks for dark mode, you add a second mode on the semantic collection and remap it to different primitives. Nothing in the component library changes, because no component ever references grey/800 directly; it references surface/raised. If your components point at primitives, dark mode is a rebuild rather than a remap.',
            'Name tokens in the order category/role/variant, all lowercase, with slashes for grouping. It reads well in the Figma sidebar and it converts cleanly to the nested objects a Tailwind theme or a CSS custom property file expects.',
          ],
        },
      },
      {
        heading: {
          en: 'Type and spacing scales you can defend',
        },
        paragraphs: {
          en: [
            'A type ramp of six to eight steps is enough for most interfaces: display, heading levels one to three, body, small, and caption. Each step should be visibly different from the one next to it. If you have to squint to tell two sizes apart, one of them is decoration, not hierarchy.',
            'Set line height as part of the style, not as a per-instance override. Long-form text wants roughly 1.5 to 1.6; headings want 1.05 to 1.2. Bake tracking into large sizes too: display type almost always needs negative letter spacing that body text does not.',
            'For spacing, pick a 4px base and use a limited scale: 4, 8, 12, 16, 24, 32, 48, 64. That maps one-to-one onto Tailwind default spacing, which means a developer never has to write an arbitrary value like p-[13px]. If a layout only works at 13px, the problem is usually the layout.',
            'One rule that saves more arguments than any other: spacing communicates grouping. Elements that belong together get less space between them than the gap separating them from the next group. Most "messy" interfaces are not badly styled, they are just evenly spaced.',
          ],
        },
      },
      {
        heading: {
          en: 'Components: properties instead of a wall of variants',
        },
        paragraphs: {
          en: [
            'A button with forty variants for every combination of size, style, icon and state is a component nobody can find anything in. Use component properties instead: a variant property for style, another for size, boolean properties for the icon slots, and instance swap properties for the icons themselves. Four properties describe the same forty combinations and stay legible.',
            'Name those properties the way the front end will name its props: size, variant, state, disabled, leadingIcon. When the Figma property panel and the React prop signature use the same words, handoff conversations stop being translation work. It costs nothing at build time and it pays off on every ticket afterwards.',
            "Build every component with auto layout, including the ones that look like they do not need it, and set the resizing behaviour deliberately: fill for anything that should stretch, hug for anything sized by its content. Auto layout is the closest thing Figma has to flexbox, so a component laid out properly in the file is a component that has already answered the developer's layout questions.",
            'Also design the states people forget: hover, focus, disabled, loading, and the version with text long enough to wrap. A component that only exists in its ideal state is not a system component, it is an illustration of one.',
          ],
        },
      },
      {
        heading: {
          en: 'Documentation that lives in the file',
        },
        paragraphs: {
          en: [
            'Nobody reads a separate documentation site for an eight-component library. Put the guidance where the work happens: fill in the description field on every component and every style, because it surfaces in the assets panel and in Dev Mode exactly when someone is deciding what to use.',
            'Add one page of paired do and do-not frames for the components that get misused most: usually buttons, form fields and empty states. A pair of small screenshots settles a question faster than a paragraph.',
            'Keep a short changelog page at the front of the file with dates and one-line entries. On a client project this is also your evidence trail: when someone asks why a colour changed in March, the answer takes ten seconds.',
            'Finally, use branching for anything structural. Renaming a variable collection or restructuring a component in the main file mid-sprint breaks live instances across every product file, and the person who finds out is always a developer at the worst moment.',
          ],
        },
      },
      {
        heading: {
          en: 'How to tell whether the system is actually working',
        },
        paragraphs: {
          en: [
            'A system is working if designing a new screen feels like composing existing blocks rather than drawing new shapes. The real test comes two months after launch: check how many components in the file are un-detached instances, how many colours come from the token palette, and whether a new team member can build a screen without asking where to find the primary button.',
            'If the answers are high, the system is doing its job. If not, cut half the tokens and try again.',
          ],
        },
      },
    ],
    gallery: [],
    relatedProjects: ['zenith'],
    relatedServices: ['design-systems', 'saas-product-design'],
  },
  {
    slug: 'figma-to-react-handoff',
    title: {
      en: 'Figma to React: a handoff that does not get rebuilt',
    },
    excerpt: {
      en: 'Why Figma to React handoffs produce code that gets rewritten, and the workflow (token mapping, prop-shaped properties, real states) that prevents it.',
    },
    date: '2026-04-21',
    readingTime: 8,
    cover: {
      src: '/images/articles/figma-to-react-handoff/cover.png',
      alt: {
        en: 'Diagram showing Figma component properties and design tokens mapped directly to React component code and props',
      },
    },
    intro: {
      en: [
        'The common complaint from developers is not that designs are ugly, or late. It is that the design file answers the wrong questions. A Figma file describes screens; a React codebase describes components with props and states. When the handoff hands over screens, the developer has to reverse-engineer the component model, and their guess will not match yours.',
        'I design and then build the front end myself on most projects, which means I get to feel the cost of my own sloppy handoffs about two days later. Everything below comes out of that loop.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'The real gap: screens versus states',
        },
        paragraphs: {
          en: [
            'A screen is one frozen combination of data, viewport and interaction state. A component has to handle all of them. If the file shows a dashboard with four cards of ideal-length titles, the developer still has to decide what happens with one card, with twelve, with a title that wraps to three lines, while data is loading, and when the request fails.',
            'Those decisions get made anyway. The only question is whether a designer makes them or whether they get invented at 6pm by someone who is also fighting a type error. Every unanswered state is a place where the build drifts from the design, and drift is what makes the rebuild conversation happen.',
            'So the deliverable is not a set of beautiful screens. It is a component inventory plus the screens that show those components composed together.',
          ],
        },
      },
      {
        heading: {
          en: 'Shape Figma properties like React props',
        },
        paragraphs: {
          en: [
            'Figma component properties and React props are the same idea with different syntax. A button with variant set to primary or ghost, size set to sm or md, and boolean properties for a leading icon translates directly into a props interface. Name them identically and the mapping is mechanical rather than interpretive.',
            'Avoid variant properties that encode two things at once. A variant called primary-large-icon has to be parsed apart before it can become code, and it multiplies your variant matrix. Three independent properties beat one combined one every time.',
            'The same discipline applies to layer names inside the component. Slot, label, icon and container are useful names. Frame 247 is not. A developer opening Dev Mode reads your layer tree as a rough DOM outline, so a tidy tree is genuinely part of the deliverable.',
            'Where a component nests another component (a card containing a button), use an instance swap or nested instance rather than redrawing it. Nesting in the file is what tells the developer the composition is intentional.',
          ],
        },
      },
      {
        heading: {
          en: 'Map tokens to the theme config before the first component',
        },
        paragraphs: {
          en: [
            'If the project uses Tailwind, the design tokens should land in the theme configuration as named values on day one: colours, spacing, radii, font sizes, shadows. Do that first and the code that follows uses bg-surface-raised and p-4 instead of arbitrary values scattered through the markup.',
            "The friction point is usually the spacing scale. Tailwind's default steps are multiples of 4px; if the Figma spacing tokens use a different base, every gap in the build becomes a bracketed one-off. Align the two scales at the start, or commit to overriding the theme completely. Half-alignment is the worst of both.",
            'Colour tokens should cross the boundary by semantic name, not by hex. When a token changes value later, a semantic mapping means one edit in the theme file. A hex-based handoff means a find-and-replace across a codebase, and it will miss the one in the email template.',
          ],
        },
      },
      {
        heading: {
          en: 'Design the states nobody asks for',
        },
        paragraphs: {
          en: [
            'For every component that displays data, draw the zero, one and many cases. Zero is the empty state and needs copy that says what to do next, not just "No results". One is where centred layouts and grids often break. Many is where you find out whether the list needed pagination.',
            'For every component that fetches, draw loading and error. A skeleton that matches the final layout prevents the shift users feel as jank; a spinner in the middle of a container does not. For errors, write the actual message: "Could not load invoices. Retry" is a design decision, not copy someone fills in later.',
            'For every interactive element, define hover, focus-visible, active and disabled. Focus rings in particular get skipped in design and then either omitted or left as the browser default in code, which is both an accessibility failure and the kind of unpolished detail clients notice without being able to name.',
            'And test the layout with hostile content: a name three times longer than the placeholder, a number with more digits than expected, a language that runs longer than English. Ten minutes of that in Figma saves a bug report per screen.',
          ],
        },
      },
      {
        heading: {
          en: 'Specify responsive behaviour, do not imply it',
        },
        paragraphs: {
          en: [
            'Two frames, one at 1440 and one at 390, leave everything between them to interpretation. Say what happens in the gap: which breakpoints exist, what the container max width is, which grids collapse from four columns to two to one, and what the padding is at each step.',
            'Auto layout with wrapping and fill-container resizing communicates a lot of this without extra frames, because it demonstrates intent rather than describing it. Where the behaviour is genuinely non-obvious (a sidebar that becomes a bottom sheet, a table that becomes stacked cards), draw the intermediate state. That is the one the developer would otherwise have to invent.',
          ],
        },
      },
      {
        heading: {
          en: 'What the design-to-code plugins still cannot do',
        },
        paragraphs: {
          en: [
            'Plugins that export Figma frames to React have improved a lot, and they are genuinely useful for a static marketing section or a quick prototype. What they cannot do is produce a component that fits the codebase you already have. The output does not know about your existing Button, your theme tokens, your routing, your data layer or your state management, so it arrives as a self-contained island of markup that has to be dismantled before it can be used.',
            'They also cannot infer props or states, because those do not exist in the frame, which is precisely the gap described at the top of this article. The generated code represents one screen, one breakpoint, one state.',
            'The realistic use is scaffolding: let a plugin get the structure and spacing roughly in place, then rewrite it against the real design system. Treat the output as a first draft written by someone who has never seen the rest of the project, and the tool becomes helpful rather than a source of technical debt.',
          ],
        },
      },
    ],
    gallery: [],
    relatedProjects: ['stayease', 'ai-agent-landing'],
    relatedServices: ['figma-to-react', 'web-ui-design'],
  },
  {
    slug: 'ui-design-mistakes',
    title: {
      en: 'Eight UI design mistakes I see in almost every audit',
    },
    excerpt: {
      en: 'The UI design mistakes that show up in nearly every product I review (type, spacing, contrast, states and forms), with the specific fix for each one.',
    },
    date: '2025-12-09',
    readingTime: 7,
    cover: {
      src: '/images/articles/ui-design-mistakes/cover.png',
      alt: {
        en: 'Overview of 8 common UI design mistakes and fixes covering contrast, typography, spacing, states, hierarchy, forms, choices, and feedback',
      },
    },
    intro: {
      en: [
        'When a founder asks me to look at their existing product, the problems are rarely exotic. The same eight issues account for most of what makes an interface feel unfinished, and all of them are cheap to fix relative to how much they change the impression the product makes.',
        'None of this is about taste. Each item below has a concrete test you can run on your own screens this afternoon.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'Too many type sizes, too little hierarchy',
        },
        paragraphs: {
          en: [
            'Count the distinct font sizes in your product. If the number is above eight, some of them are doing no work. The usual pattern is sizes that differ by a single pixel (15 and 16, 13 and 14), which reads as inconsistency rather than hierarchy, because the eye cannot resolve the difference but does register that something is off.',
            'The fix is a fixed ramp with obvious jumps between steps, and using weight and colour to create the finer distinctions instead of size. A muted grey label at the same size as the body text separates itself perfectly well without a new size in the scale.',
            'The related mistake is heading levels chosen by appearance. Pick the heading level for document structure and style it to look right; screen readers and search engines both read the structure, not the pixel size.',
          ],
        },
      },
      {
        heading: {
          en: 'Spacing that is even instead of grouped',
        },
        paragraphs: {
          en: [
            'Interfaces that feel hard to scan are usually spaced uniformly: the same 16px gap between a label and its input as between two unrelated sections. Proximity is the strongest grouping signal there is, and using it evenly throws it away.',
            'Fix it by deciding relationships first. A label sits close to its field, fields sit further apart from each other, and a section break gets two or three times that. When the spacing is right you can squint at the screen and still see the structure.',
            'While you are there, pick a base unit (4px is a good default) and stop using values outside the scale. Arbitrary spacing is the single most common source of the "something looks slightly wrong" feeling that clients report but cannot diagnose.',
          ],
        },
      },
      {
        heading: {
          en: 'Contrast that fails on real screens',
        },
        paragraphs: {
          en: [
            "Light grey text on a white background looks refined on a designer's calibrated monitor in a dim room. It is unreadable on a laptop outdoors, and it fails accessibility requirements. The threshold to check against is a 4.5:1 contrast ratio for body text and 3:1 for large text, icons and the borders of interactive controls.",
            'Run a contrast checker over your muted text, your placeholder text, your disabled states and your borders. Placeholder text is the most common failure, and it is often carrying information that should have been a label anyway.',
            'The second half of this is not relying on colour alone. A red border on an invalid field means nothing to a colour-blind user without an icon and a message. Errors need text, always.',
          ],
        },
      },
      {
        heading: {
          en: 'Empty, loading and error states left undesigned',
        },
        paragraphs: {
          en: [
            'The first screen a new user sees is usually the empty one, and it is usually the least designed screen in the product. An empty state that says "No projects yet" wastes the moment; one that explains what a project is and offers the button to create the first one is onboarding.',
            'Loading states deserve the same attention. A skeleton shaped like the content that is coming reduces the perceived wait and prevents the layout jumping when data arrives. A centred spinner does neither.',
            'For errors, write messages that name the problem and the next action. "Something went wrong" tells the user only that you did not think about this case.',
          ],
        },
      },
      {
        heading: {
          en: 'Forms that fight the person filling them in',
        },
        paragraphs: {
          en: [
            'Placeholders used as labels disappear the moment someone types, so anyone who gets interrupted has to clear the field to remember what it wanted. Use a persistent label above the field and keep the placeholder for format examples, if at all.',
            'Validate on blur rather than on every keystroke, so the user is not told their email is invalid while they are still typing the third character. Put the error message directly under the field, in text, and say how to fix it.',
            'Cut the fields. Every optional field is a small tax on completion, and most forms have at least two that exist because someone once thought the data might be useful. Four fields is a good target for a contact form.',
          ],
        },
      },
      {
        heading: {
          en: 'Touch targets and desktop-first thinking',
        },
        paragraphs: {
          en: [
            'Icon-only buttons designed at 24px on a desktop mock become 24px tap targets on a phone. The practical minimum is around 44px of touch area, which you can achieve with padding without changing the visual size of the icon.',
            'Check the spacing between adjacent targets too: a row of icons 4px apart produces mis-taps regardless of individual size. And put primary actions within thumb reach on mobile rather than pinned to a top-right corner inherited from the desktop layout.',
          ],
        },
      },
      {
        heading: {
          en: 'Designing with content that will never exist',
        },
        paragraphs: {
          en: [
            'Lorem ipsum has a convenient, uniform word length. Real product data does not. Layouts built on placeholder text break on the customer whose company name is forty characters long, the invoice total with two extra digits, and the notification that arrives with no body text at all.',
            'Use realistic content from the start, then stress test it: the longest plausible string, the shortest, the empty case. If the design only holds at the ideal length, it is a picture of an interface rather than an interface.',
          ],
        },
      },
      {
        heading: {
          en: 'No visible focus and no keyboard path',
        },
        paragraphs: {
          en: [
            'Custom components frequently ship with the browser focus ring removed and nothing put in its place, which makes the product unusable by keyboard and invisible to anyone navigating without a mouse. Design a focus style that matches the visual language instead of deleting the default.',
            'Then tab through a key flow yourself. You will find the modal that does not trap focus, the dropdown that cannot be opened without a click, and the order in which elements receive focus jumping around the screen. These are twenty-minute fixes at design time and rewrites after launch.',
          ],
        },
      },
    ],
    gallery: [],
    relatedProjects: ['crave', 'cleaning-services-app'],
    relatedServices: ['ux-research-wireframing', 'web-ui-design'],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}
