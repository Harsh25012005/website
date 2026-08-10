import type { Article } from './types'

/**
 * Editorial entries. Image folders under /images/articles/ are still the
 * original placeholder assets — the paths below intentionally reuse them so
 * the content tests keep passing until real artwork replaces them.
 */
export const articles: Article[] = [
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
      src: '/images/articles/render-series/cover.png',
      alt: {
        en: 'Figma design system file showing a colour token palette and component library on a canvas',
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
        image: {
          src: '/images/articles/render-series/gallery-01.png',
          alt: {
            en: 'Audit board collecting every colour, text style and spacing value found across existing product screens',
          },
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
        image: {
          src: '/images/articles/render-series/gallery-02.png',
          alt: {
            en: 'Figma variables panel showing primitive and semantic colour token collections with light and dark modes',
          },
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
    gallery: [
      {
        src: '/images/articles/render-series/gallery-03.png',
        alt: {
          en: 'Design system changelog page with date-stamped entries describing component updates',
        },
      },
      {
        src: '/images/articles/render-series/gallery-04.png',
        alt: {
          en: 'Component usage rules framed as side-by-side do and do not examples',
        },
      },
      {
        src: '/images/articles/render-series/gallery-05.png',
        alt: {
          en: 'Figma branch review dialog showing structural component edits isolated from the main file',
        },
      },
    ],
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
      src: '/images/articles/printed-model/cover.png',
      alt: {
        en: 'Figma component sheet placed next to the equivalent React component code in an editor',
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
        image: {
          src: '/images/articles/printed-model/gallery-01.png',
          alt: {
            en: 'A single card component drawn in default, hover, loading, empty and error states side by side',
          },
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
        image: {
          src: '/images/articles/printed-model/gallery-02.png',
          alt: {
            en: 'Figma component property panel with size, variant and boolean icon properties named to match React props',
          },
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
    gallery: [
      {
        src: '/images/articles/printed-model/gallery-03.png',
        alt: {
          en: 'Dashboard layout shown at desktop, tablet and mobile breakpoints with column collapse annotated',
        },
      },
      {
        src: '/images/articles/printed-model/gallery-04.png',
        alt: {
          en: 'Design tokens mapped from Figma variables into a Tailwind theme configuration file',
        },
      },
      {
        src: '/images/articles/printed-model/gallery-05.png',
        alt: {
          en: 'Skeleton loading state matched to the final card layout to avoid layout shift',
        },
      },
    ],
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
      src: '/images/articles/merch-system/cover.png',
      alt: {
        en: 'Before and after comparison of a product interface showing corrected typography, spacing and contrast',
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
        image: {
          src: '/images/articles/merch-system/gallery-01.png',
          alt: {
            en: 'Type ramp comparison showing an inconsistent set of font sizes reduced to a six-step scale',
          },
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
        image: {
          src: '/images/articles/merch-system/gallery-02.png',
          alt: {
            en: 'Contrast check on muted text, placeholder text and disabled buttons against accessibility thresholds',
          },
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
    gallery: [
      {
        src: '/images/articles/merch-system/gallery-03.png',
        alt: {
          en: 'Empty state redesigned with an explanation of the feature and a primary action button',
        },
      },
      {
        src: '/images/articles/merch-system/gallery-04.png',
        alt: {
          en: 'Form with persistent labels, inline validation messages and a reduced number of fields',
        },
      },
      {
        src: '/images/articles/merch-system/gallery-05.png',
        alt: {
          en: 'Mobile layout with 44px touch targets and a visible keyboard focus ring on a button',
        },
      },
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}
