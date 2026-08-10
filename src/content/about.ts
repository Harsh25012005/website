import type { Localized, Service, Testimonial } from './types'

export const services: Service[] = [
  {
    number: '01',
    title: { en: 'Product design', cs: 'Produktový design' },
    description: {
      en: 'End-to-end UX and UI for digital products — from early flows to interfaces ready to ship. Structure first, polish second.',
      cs: 'UX a UI pro digitální produkty od začátku do konce — od prvních toků po rozhraní připravené k nasazení. Nejdřív struktura, pak leštění.',
    },
  },
  {
    number: '02',
    title: { en: 'Design systems', cs: 'Design systémy' },
    description: {
      en: 'Scalable systems with real foundations, reusable components and documentation that survives handoff.',
      cs: 'Škálovatelné systémy se skutečnými základy, znovupoužitelnými komponentami a dokumentací, která přežije předání.',
    },
  },
  {
    number: '03',
    title: { en: 'Interface direction', cs: 'Směr rozhraní' },
    description: {
      en: 'Visual direction for products that need a distinct presence — typography, motion, imagery and the details in between.',
      cs: 'Vizuální směr pro produkty, které potřebují vlastní výraz — typografie, pohyb, obrazovost a detaily mezi tím.',
    },
  },
  {
    number: '04',
    title: { en: 'Web design', cs: 'Webdesign' },
    description: {
      en: 'Websites for studios, founders and brands, built on a strong sense of typography, structure and restraint.',
      cs: 'Weby pro studia, zakladatele a značky, postavené na typografii, struktuře a zdrženlivosti.',
    },
  },
  {
    number: '05',
    title: { en: 'Brand identity', cs: 'Identita značky' },
    description: {
      en: 'Identities developed alongside the product, so brand and interface end up feeling like one decision rather than two.',
      cs: 'Identity vznikající souběžně s produktem, aby značka a rozhraní působily jako jedno rozhodnutí, ne dvě.',
    },
  },
  {
    number: '06',
    title: { en: 'Advisory & audits', cs: 'Konzultace a audity' },
    description: {
      en: 'UX/UI reviews and design system audits for teams that need an outside read on where the gaps are.',
      cs: 'UX/UI revize a audity design systémů pro týmy, které potřebují pohled zvenčí na to, kde jsou mezery.',
    },
  },
]

export const testimonials: Testimonial[] = [
  {
    quote: {
      en: 'Replace this with a real quote from someone you have worked with. Keep it specific — what the project was, what changed, and what it was like to work together. Two or three sentences carry more weight here than a paragraph of adjectives.',
      cs: 'Nahraďte skutečnou referencí od někoho, s kým jste spolupracovali. Buďte konkrétní — o jaký projekt šlo, co se změnilo a jaká byla spolupráce. Dvě tři věty tu unesou víc než odstavec přídavných jmen.',
    },
    name: 'Reference Name',
    lines: {
      en: ['Role, Company', 'Second line, optional'],
      cs: ['Role, společnost', 'Druhý řádek, volitelný'],
    },
  },
]

export const aboutIntro: Localized<string[]> = {
  en: [
    'Replace this with your own introduction. Two short paragraphs work best: what you do now, and the route that got you here.',
    'The layout is built for roughly this much text — a sentence or two more will sit fine, a full page will not.',
  ],
  cs: [
    'Nahraďte vlastním úvodem. Nejlépe fungují dva krátké odstavce: čím se zabýváte teď a jak jste se sem dostali.',
    'Layout počítá zhruba s tímto rozsahem — věta dvě navíc projdou, celá strana ne.',
  ],
}

export const aboutChapters: {
  heading: Localized<string>
  paragraphs: Localized<string[]>
}[] = [
  {
    heading: { en: 'How I got here', cs: 'Jak jsem se sem dostal' },
    paragraphs: {
      en: [
        'A short account of the path — the first thing you built, what pulled you toward design, and the detour that turned out to be useful.',
        'Specifics beat summary. The project that went badly is usually more interesting than the one that went well.',
      ],
      cs: [
        'Krátké vyprávění o cestě — první věc, kterou jste postavili, co vás přitáhlo k designu a odbočka, která se ukázala jako užitečná.',
        'Konkrétnost poráží souhrn. Projekt, který dopadl špatně, bývá zajímavější než ten povedený.',
      ],
    },
  },
  {
    heading: { en: 'First work', cs: 'První práce' },
    paragraphs: {
      en: [
        'Early clients and projects, and what each one taught you that a course could not.',
        'Naming real organisations here is worth more than describing the work in the abstract.',
      ],
      cs: [
        'První klienti a projekty a to, co vás každý naučil lépe než jakýkoli kurz.',
        'Jmenovat skutečné organizace má větší cenu než abstraktní popis práce.',
      ],
    },
  },
  {
    heading: { en: 'Today', cs: 'Dnes' },
    paragraphs: {
      en: [
        'What you work on now, at what scale, and the kind of problem you would like more of.',
        'End with what you are open to — it is the last thing people read before deciding whether to email.',
      ],
      cs: [
        'Na čem pracujete teď, v jakém měřítku a jaký typ problémů byste chtěli víc.',
        'Zakončete tím, čemu jste otevření — je to poslední věc, kterou lidé čtou, než se rozhodnou napsat.',
      ],
    },
  },
]

export const beyondScreens: {
  heading: Localized<string>
  paragraphs: Localized<string[]>
} = {
  heading: { en: 'Beyond screens', cs: 'Mimo obrazovky' },
  paragraphs: {
    en: [
      'The things outside work that shape how you think — sport, travel, music, whatever is actually true.',
      'This section exists so the page reads as a person rather than a CV. Keep it brief and keep it honest.',
    ],
    cs: [
      'Věci mimo práci, které utvářejí vaše přemýšlení — sport, cestování, hudba, cokoli je skutečně pravda.',
      'Tahle sekce existuje proto, aby stránka působila jako člověk, ne jako životopis. Krátce a upřímně.',
    ],
  },
}

export const skills = [
  'UX Design',
  'UI Design',
  'Design Systems',
  'Web Design',
  'Visual Identity',
  'Art Direction',
  'Prototyping',
  'Motion Design',
  '3D Design',
  'Photography',
]

export const tools = [
  'Figma',
  'Blender',
  'After Effects',
  'Illustrator',
  'Photoshop',
  'Cinema 4D',
  'Framer',
  'Notion',
]
