import type { ImageAsset, Project } from './types'

/**
 * Case studies.
 *
 * ⚠️  **Every project here is self-initiated concept work.** That is stated on
 * each page in the `Type` meta row, and it constrains the copy: there is no
 * client, no brief someone else wrote, no launch and therefore no result. So
 * nothing below claims a conversion lift, a research finding or a stakeholder.
 * Concept work borrowing the language of client work is obvious to anyone
 * reading carefully, and a prospect who catches it stops believing the rest of
 * the site.
 *
 * What ranks here was never the fabricated metric anyway — it is the design
 * reasoning, which is real. Each `discipline` is written to carry the query
 * ("food delivery app UI/UX"), because `work/[slug]/page.tsx` builds the page
 * title as `{title}: {discipline} case study` and splits the same string into
 * keywords.
 *
 * Two rules when adding to this file:
 *
 * 1. **Only describe screens that exist in the gallery.** Prose and alt text
 *    are checked against the images; describing a flow with no screenshot is
 *    the same mistake as inventing a metric, just harder to spot.
 *
 * 2. **`aspect` must match the file's real ratio.** Gallery frames are
 *    `object-cover`, so a mismatch silently crops the screen.
 */

/**
 * Ratios of the source files, so `object-cover` never crops a screen.
 *
 * All three phone ratios are close to 1:1.8 because every app screenshot now
 * carries the same surround — see `scripts/frame-app-screens.mjs`. They are
 * not identical because the underlying screen exports differ in size, and
 * padding is applied as a ratio rather than a fixed pixel count.
 */
const PHONE = 'aspect-[848/1498]'
const PHONE_TALL = 'aspect-[850/1552]'
const PHONE_SLIM = 'aspect-[818/1457]'
const SQUARE = 'aspect-square'
const LANDSCAPE = 'aspect-[4/3]'

function shot(slug: string, file: string, alt: string): ImageAsset {
  return { src: `/images/work/${slug}/${file}.png`, alt: { en: alt } }
}

export const projects: Project[] = [
  {
    slug: 'zenith',
    title: { en: 'Zenith' },
    discipline: { en: 'Task management app UI/UX' },
    year: '2025–2026',
    tags: ['uxui'],
    summary: {
      en: 'A task management app concept designed in full light and dark themes from one token set, with progress, priority and status readable at a glance without colour doing all the work.',
    },
    thumbnail: shot(
      'zenith',
      'cover',
      'Zenith task management app: dashboard, task list and task detail screens',
    ),
    hero: shot(
      'zenith',
      'cover',
      'Three Zenith app screens showing the dashboard, task list and task detail',
    ),
    meta: [
      {
        label: { en: 'Type' },
        value: { en: 'Concept project, self-initiated' },
      },
      { label: { en: 'Role' }, value: { en: 'UX, UI and design system' } },
      { label: { en: 'Platform' }, value: { en: 'iOS and Android' } },
      { label: { en: 'Tools' }, value: { en: 'Figma' } },
    ],
    sections: [
      {
        heading: { en: 'The problem with task apps' },
        paragraphs: {
          en: [
            'Most task managers show you everything you have not done. Open one on a bad week and the first thing it communicates is failure: a wall of overdue items with no sense of what is actually moving.',
            'Zenith starts from the opposite position. The dashboard opens on four counts (total, completed, in progress, overdue), so the state of the week is one glance rather than a scroll, and "completed" carries the same visual weight as "overdue" instead of being buried under it.',
          ],
        },
      },
      {
        heading: { en: 'Progress you can read without reading' },
        paragraphs: {
          en: [
            'Every task card carries a segmented progress bar and a count like 06/14. The segments matter: a continuous bar at 43% is a number you have to interpret, while four filled blocks out of nine is a shape you recognise before you have read anything.',
            'Priority is a labelled dropdown rather than a colour alone. Colour still reinforces it, but the word "High" carries the meaning: a red dot is invisible to a red-green colourblind user and ambiguous to everyone else.',
            'The task detail screen extends the same idea. Priority, status and due date are stacked as labelled rows, and subtasks are a checklist with a visible 2/4 count, so the next action is always a specific thing rather than a general obligation.',
          ],
        },
      },
      {
        heading: { en: 'Two themes, one token set' },
        paragraphs: {
          en: [
            'Light and dark are both designed here, not one designed and the other inverted. Every screen exists in both, which is the only way to find the places an inverted palette breaks: the pale progress fill that vanishes on white, the card surface that stops separating from the background once both are dark.',
            'Both themes read from one set of colour, type and spacing tokens, so a change to the scale moves both at once. That is the difference between shipping a dark mode and maintaining one.',
            'It also kept the screen count honest. Designing search, notifications, calendar, profile and task creation twice is only sustainable if the components are shared, which turns out to be a useful limit on how many one-off components a design is allowed.',
          ],
        },
      },
      {
        heading: { en: 'The screens nobody demos' },
        paragraphs: {
          en: [
            'Beyond the three hero screens, the concept covers creating a task and a project, the calendar view, search in both themes, notifications and profile settings. These are the screens a walkthrough skips and a real user lives in.',
            'Designing them is also what tests the system. A component library looks complete until you try to lay out a settings page with it, which is usually where the gaps in a token set surface.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: shot(
          'zenith',
          'task-list-dark',
          'Zenith task list in dark theme with filter chips and segmented progress bars',
        ),
        span: 'quarter',
        aspect: PHONE,
      },
      {
        image: shot(
          'zenith',
          'task-detail',
          'Zenith task detail screen with priority, status, due date and a subtask checklist',
        ),
        span: 'quarter',
        aspect: PHONE,
      },
      {
        image: shot('zenith', 'create-task', 'Zenith create-new-task screen'),
        span: 'quarter',
        aspect: PHONE,
      },
      {
        image: shot(
          'zenith',
          'add-project-light',
          'Zenith add-project screen in light theme',
        ),
        span: 'quarter',
        aspect: PHONE,
      },
      {
        image: shot(
          'zenith',
          'add-project-dark',
          'Zenith add-project screen in dark theme',
        ),
        span: 'quarter',
        aspect: PHONE,
      },
      {
        image: shot('zenith', 'calendar-view', 'Zenith calendar view screen'),
        span: 'quarter',
        aspect: PHONE,
      },
    ],
    outcome: {
      heading: { en: 'What it produced' },
      paragraphs: {
        en: [
          'A complete two-theme screen set (dashboard, task list, task detail, task and project creation, calendar, search, notifications and settings), built on a shared token set rather than assembled screen by screen.',
          'As a concept it has no usage data behind it, and this page does not pretend otherwise. What it demonstrates is the part that transfers to client work: designing both themes at once, keeping status legible without relying on colour, and covering the screens that only matter once a product is actually in use.',
        ],
      },
    },
    relatedArticles: [
      'design-system-in-figma',
      'ui-design-mistakes',
      'ui-ux-design-trends-2026',
    ],
  },
  {
    slug: 'crave',
    title: { en: 'Crave' },
    discipline: { en: 'Food delivery app UI/UX' },
    year: '2025',
    tags: ['uxui'],
    summary: {
      en: 'A dark-mode food delivery app concept where the interface gets out of the way of the food: one saturated accent on near-black, photography as the light source, and a home screen ordered by how undecided you are.',
    },
    thumbnail: shot(
      'crave',
      'cover',
      'Crave food delivery app: home and restaurant list screens in dark mode',
    ),
    hero: shot(
      'crave',
      'in-hand-01',
      'Crave food delivery app running on a phone held in one hand',
    ),
    meta: [
      {
        label: { en: 'Type' },
        value: { en: 'Concept project, self-initiated' },
      },
      { label: { en: 'Role' }, value: { en: 'UX, UI and prototype' } },
      { label: { en: 'Platform' }, value: { en: 'iOS and Android' } },
      { label: { en: 'Tools' }, value: { en: 'Figma' } },
    ],
    sections: [
      {
        heading: { en: 'Designing for appetite' },
        paragraphs: {
          en: [
            'Food ordering is not an efficiency problem. Nobody opens a delivery app knowing exactly what they want and resenting the taps in between. They open it hungry and undecided, and the job of the interface is to help them want something.',
            'That is the argument for the dark theme. On a near-black surface the photography becomes the only light in the frame, and a cheese pull or a burger cross-section carries the screen instead of competing with a white background for attention.',
            'A single saturated orange does everything else: search, the active tab, the offer badge, the delivery time, the add button. One accent used consistently means every orange thing on screen is something you can act on.',
          ],
        },
      },
      {
        heading: { en: 'A home screen that answers "what do I want?"' },
        paragraphs: {
          en: [
            'The home screen is ordered by how undecided you are. Categories come first as circular photographs (pizza, burger, sushi, tacos) for the person who knows the shape of what they want but not the restaurant.',
            'Today’s Offers sits next as a horizontally scrolling carousel of flash deals, because price is what settles a large share of orders and burying it under a menu is pretending otherwise. Trending Now closes the screen for anyone still browsing.',
            'The delivery address stays pinned to the top as a dropdown. It is the one piece of state that invalidates everything below it, so it should never take a trip into settings to check.',
          ],
        },
      },
      {
        heading: { en: 'Browsing without losing the thread' },
        paragraphs: {
          en: [
            'The restaurant list keeps the search field in place and puts sort, fast delivery and top rated in a filter row directly beneath it, so narrowing a list never means leaving it and coming back.',
            'Each card carries the things that actually decide an order: a photograph, a rating, cuisine and price tags, a delivery window and a free-delivery flag. The rating sits on the image rather than under the name, so it stays readable while scrolling at speed.',
            'Sign-up is deliberately late and deliberately plain: same dark surface, one clear action. An account wall in front of a menu is the fastest way to lose someone who was only browsing.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: shot(
          'crave',
          'home-dark',
          'Crave home screen with categories, a flash-deal carousel and trending dishes',
        ),
        span: 'quarter',
        aspect: PHONE_TALL,
      },
      {
        image: shot(
          'crave',
          'food-list-dark',
          'Crave restaurant list with sort and delivery filters, ratings and delivery times',
        ),
        span: 'quarter',
        aspect: PHONE_TALL,
      },
      {
        image: shot(
          'crave',
          'sign-up-dark',
          'Crave sign-up screen in dark mode',
        ),
        span: 'quarter',
        aspect: PHONE_TALL,
      },
      {
        image: shot(
          'crave',
          'in-hand-02',
          'Crave app shown in use on a phone held in one hand',
        ),
        span: 'half',
        aspect: LANDSCAPE,
      },
    ],
    outcome: {
      heading: { en: 'What it produced' },
      paragraphs: {
        en: [
          'A dark-theme screen set covering sign-up, home, category browsing and restaurant listing, with one accent colour carrying every interactive element and photography treated as the primary visual material rather than as decoration.',
          'It is a concept, so there is no order volume to report. The transferable part is the reasoning: choosing a theme because of what the content is, spending the accent colour on a single job, and ordering a home screen around how decided the user already is.',
        ],
      },
    },
    relatedArticles: ['ui-design-mistakes'],
  },
  {
    slug: 'stayease',
    title: { en: 'StayEase' },
    discipline: { en: 'Hotel booking website UI/UX' },
    year: '2025–2026',
    tags: ['website', 'uxui'],
    summary: {
      en: 'A hotel booking website concept built around its search bar: a five-way stay-type switch, four fields that hold their state, and destination browsing for travellers who have not picked a city yet.',
    },
    thumbnail: shot(
      'stayease',
      'cover',
      'StayEase hotel booking website shown on a laptop with the brand logo',
    ),
    hero: shot(
      'stayease',
      'hero-laptop',
      'StayEase hotel booking homepage displayed on a laptop screen',
    ),
    meta: [
      {
        label: { en: 'Type' },
        value: { en: 'Concept project, self-initiated' },
      },
      { label: { en: 'Role' }, value: { en: 'UX, UI and visual identity' } },
      { label: { en: 'Platform' }, value: { en: 'Responsive web' } },
      { label: { en: 'Tools' }, value: { en: 'Figma' } },
    ],
    sections: [
      {
        heading: { en: 'The search bar is the product' },
        paragraphs: {
          en: [
            'On a booking site everything above the fold is scenery except one component. The search bar is where the session actually begins, so it was designed first and the rest of the page arranged around it.',
            'It deliberately overlaps the hero image rather than sitting below it, because that puts the most important control at the optical centre of the page instead of at the bottom of a decorative band.',
            'The four fields stay labelled and permanently visible: destination, check in, check out, travellers. Collapsing them into a single "Search" input looks tidier in a mockup and immediately costs the visitor the ability to see what they have already filled in.',
          ],
        },
      },
      {
        heading: { en: 'Stay type before destination' },
        paragraphs: {
          en: [
            'A row of tabs above the fields (hotels, resorts, villas, apartments, homestays) sets the kind of stay before anything else. That ordering matters: someone looking for a villa and someone looking for a homestay are running different searches, and filtering after the results arrive means discarding a page of listings they never wanted.',
            'The tabs are a switch rather than another filter chip for the same reason. This is one choice that reframes the whole query, not one of several refinements stacked together.',
          ],
        },
      },
      {
        heading: { en: 'For travellers without a destination' },
        paragraphs: {
          en: [
            'A search bar assumes you know where you are going. Plenty of trips do not start that way, which is why "Explore Top Hotel Destinations" sits directly beneath it as a row of city cards.',
            'It is the same argument as the food app: give the undecided visitor a way in that does not require them to type. The rest of the page then follows the order a browsing visitor asks questions in: what is on offer, why this site, what other people said.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: shot(
          'stayease',
          'detail-01',
          'StayEase homepage section detail',
        ),
        span: 'third',
        aspect: SQUARE,
      },
      {
        image: shot(
          'stayease',
          'detail-02',
          'StayEase page section showing hotel listings',
        ),
        span: 'third',
        aspect: SQUARE,
      },
      {
        image: shot('stayease', 'detail-03', 'StayEase page section detail'),
        span: 'third',
        aspect: SQUARE,
      },
    ],
    outcome: {
      heading: { en: 'What it produced' },
      paragraphs: {
        en: [
          'A homepage concept with a working information hierarchy: stay type, then the four search fields, then destination browsing for anyone who has not decided, followed by the supporting sections a booking visitor reads in that order.',
          'No bookings were taken and none are claimed. What the project demonstrates is designing a page around its one load-bearing component rather than around a hero image, and giving the undecided visitor a route in that does not start with an empty text field.',
        ],
      },
    },
    relatedArticles: [
      'figma-to-react-handoff',
      'ui-design-mistakes',
      'ai-coding-tools-client-projects',
    ],
  },
  {
    slug: 'cleaning-services-app',
    title: { en: 'Cleaning Services App' },
    discipline: { en: 'Home services app UI/UX' },
    year: '2025–2026',
    tags: ['uxui'],
    summary: {
      en: 'An on-demand home cleaning booking app concept: category-first browsing, a draggable before-and-after comparison, slot scheduling with a carried-forward address, and a bookings list with live status.',
    },
    thumbnail: shot(
      'cleaning-services-app',
      'cover',
      'Cleaning services booking app: onboarding and home screens',
    ),
    hero: shot(
      'cleaning-services-app',
      'cover',
      'Two screens from a cleaning services booking app on a pale blue background',
    ),
    meta: [
      {
        label: { en: 'Type' },
        value: { en: 'Concept project, self-initiated' },
      },
      { label: { en: 'Role' }, value: { en: 'UX and UI design' } },
      { label: { en: 'Platform' }, value: { en: 'iOS and Android' } },
      { label: { en: 'Tools' }, value: { en: 'Figma' } },
    ],
    sections: [
      {
        heading: { en: 'Selling a service you cannot photograph' },
        paragraphs: {
          en: [
            'A cleaning service has no product shot. The thing being bought is a change of state, which is hard to put in a card and impossible to judge from a price alone. That is why this whole category leans so heavily on reviews.',
            'So the service page leads with a before-and-after comparison on a draggable divider. It is the one control on the screen that shows the outcome rather than describing it, and dragging it yourself is more persuasive than any pair of side-by-side thumbnails.',
            'A light interface is the right call here for the opposite reason to the food app: the promise is cleanliness, and a bright, generously spaced, low-contrast layout is that promise expressed in the interface itself.',
          ],
        },
      },
      {
        heading: { en: 'Category first, because that is how people ask' },
        paragraphs: {
          en: [
            'Nobody wants "a cleaning service". They want the sofa done, or the car interior, or the carpet. The home screen opens on exactly that: a row of illustrated category chips for sofa, chair, car interior, curtains and carpet, above a search field primed with the same phrasing.',
            'Popular Services then repeats the entry point as full-width photographic cards, so the same choice is available whether someone is scanning icons or reading.',
            'Location sits at the top as a dropdown rather than a setting. Availability and price both depend on it, so it belongs where it can be checked and changed in one tap.',
          ],
        },
      },
      {
        heading: { en: 'A price that never leaves the screen' },
        paragraphs: {
          en: [
            'The starting price appears on the service card, again on the detail hero, and again in a sticky footer beside Book Now. The repetition is the point: the most common reason people abandon a services booking is not knowing what it will cost until the last step.',
            'The detail page keeps the description truncated behind Read More and puts the scannable facts above it: rating, review count, and tags for what is included. Long-form copy stays available for the people who want it and out of the way of the people who do not.',
            'Onboarding is a single screen: verify your email, continue with Google or email, terms underneath. It runs before booking rather than before browsing, so nobody hits an account wall while still deciding.',
          ],
        },
      },
      {
        heading: { en: 'Scheduling, and what happens after the job' },
        paragraphs: {
          en: [
            'Picking a slot is where most services bookings fall over, usually by presenting a bare calendar and a list of every time in the day. Here the week runs as a strip with past days greyed out rather than hidden, so the disabled state teaches the boundary instead of leaving someone to work out why yesterday is missing.',
            'Times are grouped into morning, afternoon and evening bands rather than listed as a wall of thirty-minute increments. People book by part of day first and by exact time second, so the interface asks in that order. The service address is carried forward and shown inline, because the last thing anyone wants at the point of confirming is to be sent back to a settings screen.',
            'The flow then continues past the booking, which is the half most concept projects skip. My Bookings gives every job a status pill (confirmed, completed) next to its date and price, so the list answers "what is happening and what did it cost" without opening anything.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: shot(
          'cleaning-services-app',
          'service-detail',
          'Cleaning app service detail screen with rating, description, tags, a before-and-after slider and a sticky total price',
        ),
        span: 'quarter',
        aspect: PHONE_SLIM,
      },
      {
        image: shot(
          'cleaning-services-app',
          'select-date-time',
          'Cleaning app date and time picker with a week strip, morning, afternoon and evening slot groups and the saved service address',
        ),
        span: 'quarter',
        aspect: PHONE_SLIM,
      },
      {
        image: shot(
          'cleaning-services-app',
          'my-bookings',
          'Cleaning app bookings list showing each job with its date, price and a confirmed or completed status pill',
        ),
        span: 'quarter',
        aspect: PHONE_SLIM,
      },
      {
        image: shot(
          'cleaning-services-app',
          'screens',
          'Cleaning app onboarding, home and service detail screens shown together',
        ),
        span: 'half',
        aspect: 'aspect-[2490/1806]',
      },
    ],
    outcome: {
      heading: { en: 'What it produced' },
      paragraphs: {
        en: [
          'A booking flow covering most of the lifecycle rather than just the sales pitch: onboarding, category browsing, the service detail page, slot selection with a carried-forward address, and a bookings list with live status.',
          'It is unbuilt and untested, and no booking numbers are claimed. What it works through are two real problems: how to sell something that has no product image, and how to keep a services flow honest about price and timing at every step instead of at the last one.',
        ],
      },
    },
    relatedArticles: ['ui-design-mistakes', 'core-web-vitals-2026'],
  },
  {
    slug: 'ai-agent-landing',
    title: { en: 'AI Agent Landing Page' },
    discipline: { en: 'AI landing page UI' },
    year: '2026',
    tags: ['website'],
    summary: {
      en: 'A landing page hero concept for an AI agent product: a display typeface, one orange gradient and a benefit-led left column, designed as a first-screen exploration rather than a full site.',
    },
    thumbnail: shot(
      'ai-agent-landing',
      'laptop-mockup',
      'AI agent landing page hero shown on a laptop resting on dark rock',
    ),
    hero: shot(
      'ai-agent-landing',
      'cover',
      'AI agent landing page hero with a figure wearing a glowing visor and large display type',
    ),
    // The source is 2160×1350 and the display headline runs along its bottom
    // edge, so the shared 16/9 hero frame cropped the words off. This is the
    // one project whose hero *is* the whole design, so it is shown uncropped
    // at its own ratio.
    heroAspect: 'aspect-[2160/1350]',
    meta: [
      {
        label: { en: 'Type' },
        value: { en: 'Concept project, self-initiated' },
      },
      { label: { en: 'Scope' }, value: { en: 'Hero section only' } },
      { label: { en: 'Platform' }, value: { en: 'Desktop web' } },
      { label: { en: 'Tools' }, value: { en: 'Figma' } },
    ],
    sections: [
      {
        heading: { en: 'One screen, deliberately' },
        paragraphs: {
          en: [
            'This is a hero section, not a website, and the case study says so rather than padding itself out with a research phase that never happened. It exists to work through one question: how a product in a crowded, abstract category makes an impression in the first screen.',
            'AI products are hard to photograph. What is being sold is a capability, so most of the category settles for gradients and node diagrams. The approach here is to put a face on it. A single portrait with a glowing visor gives the page a subject and a focal point, and the warm gradient behind it does the mood work an abstract illustration usually fails at.',
          ],
        },
      },
      {
        heading: { en: 'Splitting the argument from the atmosphere' },
        paragraphs: {
          en: [
            'The left column carries the actual claims (AI-powered workflow, intelligent AI agents, each with a one-line explanation and a short supporting paragraph), set in a plain, readable weight. The display headline is the atmosphere, and it stays out of the way of the reasoning.',
            'That split is what lets the type be as loud as it is. A wide, geometric, slightly futuristic face is a strong choice that becomes unreadable at paragraph length, so it is confined to four words across the bottom of the frame while the substance is set in something that behaves.',
            'A single white pill CTA anchors the bottom left, sitting against the darkest part of the gradient so it holds the highest contrast on the page. Social links run down the right edge as a vertical rail: present, without competing for the centre.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: shot(
          'ai-agent-landing',
          'laptop-mockup',
          'The AI agent hero section shown on a laptop resting on dark rock against a grey backdrop',
        ),
        span: 'half',
        aspect: LANDSCAPE,
      },
    ],
    outcome: {
      heading: { en: 'What it produced' },
      paragraphs: {
        en: [
          'A finished first screen: navigation, a two-point benefit column, a display headline, a primary call to action and a social rail, resolved as one composition on a single gradient.',
          'The scope is the honest part of this one. It is a visual exploration of a hero section, useful for what it settles about type pairing, contrast and where to spend a single accent, but not a product design project, and not presented as one.',
        ],
      },
    },
    relatedArticles: ['figma-to-react-handoff', 'ai-coding-tools-client-projects'],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

/** Listing order: newest and most representative first, upcoming work last. */
export const featuredProjects = projects.filter((project) => !project.upcoming)

export function getRelatedProjects(slug: string, count = 3): Project[] {
  return projects.filter((p) => p.slug !== slug && !p.upcoming).slice(0, count)
}
