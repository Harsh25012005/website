import type { ImageAsset, Project } from './types'

/**
 * Placeholder case studies. The shape mirrors what the layouts consume, so
 * replacing the strings and image paths is the only work needed to publish
 * real projects — no component changes.
 */

function gallery(slug: string, index: number, alt: string): ImageAsset {
  return {
    src: `/images/work/${slug}/gallery-0${index}.png`,
    alt: { en: alt, cs: alt },
  }
}

export const projects: Project[] = [
  {
    slug: 'atlas',
    title: { en: 'Atlas', cs: 'Atlas' },
    discipline: { en: 'Mobile app design', cs: 'Design mobilní aplikace' },
    year: '2025–2026',
    tags: ['uxui'],
    summary: {
      en: 'Mobile app design for an equity management platform, focused on clarity, dashboards and dense financial data.',
      cs: 'Design mobilní aplikace pro správu podílů se zaměřením na přehlednost, dashboardy a hustá finanční data.',
    },
    thumbnail: {
      src: '/images/work/atlas/thumbnail.png',
      alt: { en: 'Atlas mobile app screens', cs: 'Obrazovky aplikace Atlas' },
    },
    hero: {
      src: '/images/work/atlas/hero.png',
      alt: { en: 'Atlas dashboard overview', cs: 'Přehled dashboardu Atlas' },
    },
    meta: [
      {
        label: { en: 'Role', cs: 'Role' },
        value: { en: 'Product design, UI', cs: 'Produktový design, UI' },
      },
      {
        label: { en: 'Timeline', cs: 'Časový rámec' },
        value: { en: '10 weeks', cs: '10 týdnů' },
      },
      {
        label: { en: 'Team', cs: 'Tým' },
        value: {
          en: 'Two designers, four engineers',
          cs: 'Dva designéři, čtyři vývojáři',
        },
      },
      {
        label: { en: 'Platform', cs: 'Platforma' },
        value: { en: 'iOS, Android', cs: 'iOS, Android' },
      },
    ],
    sections: [
      {
        heading: { en: 'Context', cs: 'Kontext' },
        paragraphs: {
          en: [
            'The web platform had grown to cover cap tables, valuations and reporting, but everything assumed a desktop screen and an accountant’s patience. Mobile traffic kept climbing anyway.',
            'The brief was to design a companion app that answers the three questions people actually open their phone for, without shipping a shrunken copy of the desktop product.',
          ],
          cs: [
            'Webová platforma pokrývala cap tables, oceňování i reporting, ale všechno počítalo s velkou obrazovkou a trpělivostí účetní. Mobilní návštěvnost přesto rostla.',
            'Zadáním bylo navrhnout doprovodnou aplikaci, která odpoví na tři otázky, kvůli kterým lidé skutečně sahají po telefonu — bez zmenšené kopie desktopu.',
          ],
        },
      },
      {
        heading: { en: 'Approach', cs: 'Přístup' },
        paragraphs: {
          en: [
            'We started from the data, not the screens. Every number in the product was sorted by how often it was checked and how much context it needed to make sense, which collapsed a sprawling navigation into four tabs.',
            'Dense tables became progressive summaries: a headline figure, a trend, then the full breakdown one tap away. The type ramp and spacing scale came straight from the existing design system so the two products still felt related.',
          ],
          cs: [
            'Začali jsme u dat, ne u obrazovek. Každé číslo jsme seřadili podle toho, jak často se kontroluje a kolik kontextu potřebuje — rozsáhlá navigace se tím smrskla na čtyři záložky.',
            'Z hustých tabulek se staly postupné souhrny: hlavní číslo, trend a detail na jedno klepnutí. Typografii a odsazení jsme převzali ze stávajícího design systému, aby produkty držely spolu.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: gallery('atlas', 1, 'Atlas portfolio summary screen'),
        span: 'full',
        aspect: 'aspect-[16/9]',
      },
      {
        image: gallery('atlas', 2, 'Atlas holdings list'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('atlas', 3, 'Atlas valuation detail'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('atlas', 4, 'Atlas component sheet'),
        span: 'full',
        aspect: 'aspect-[16/9]',
      },
      {
        image: gallery('atlas', 5, 'Atlas onboarding flow'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('atlas', 6, 'Atlas notification states'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
    ],
    outcome: {
      heading: { en: 'Outcome', cs: 'Výsledek' },
      paragraphs: {
        en: [
          'The app shipped on both platforms in a single release cycle. Reusing the established brand and component vocabulary meant the team spent its time on the hard part — making financial data legible on a small screen — instead of relitigating visual decisions.',
          'Support tickets asking “where do I find my current valuation” dropped off almost entirely after launch.',
        ],
        cs: [
          'Aplikace vyšla na obou platformách v jednom releasu. Díky převzaté značce a komponentám mohl tým řešit to podstatné — čitelnost finančních dat na malé obrazovce — místo opakovaných debat o vizuálu.',
          'Dotazy typu „kde najdu aktuální ocenění“ po spuštění prakticky zmizely.',
        ],
      },
    },
    outcomeLink: {
      label: { en: 'View the live product', cs: 'Zobrazit produkt' },
      href: 'https://example.com',
    },
  },
  {
    slug: 'meridian',
    title: { en: 'Meridian', cs: 'Meridian' },
    discipline: { en: 'Website, Branding', cs: 'Web, Branding' },
    year: '2025–2026',
    tags: ['website', 'branding'],
    summary: {
      en: 'Website and visual direction for a software studio building digital healthcare products.',
      cs: 'Web a vizuální směr pro softwarové studio stavějící digitální produkty ve zdravotnictví.',
    },
    thumbnail: {
      src: '/images/work/meridian/thumbnail.png',
      alt: {
        en: 'Meridian site on a desktop monitor',
        cs: 'Web Meridian na monitoru',
      },
    },
    hero: {
      src: '/images/work/meridian/hero.png',
      alt: { en: 'Meridian homepage', cs: 'Úvodní stránka Meridian' },
    },
    meta: [
      {
        label: { en: 'Role', cs: 'Role' },
        value: {
          en: 'Art direction, web design',
          cs: 'Art direction, webdesign',
        },
      },
      {
        label: { en: 'Timeline', cs: 'Časový rámec' },
        value: { en: '14 weeks', cs: '14 týdnů' },
      },
      {
        label: { en: 'Scope', cs: 'Rozsah' },
        value: { en: 'Identity, site, motion', cs: 'Identita, web, motion' },
      },
      {
        label: { en: 'Year', cs: 'Rok' },
        value: { en: '2025–2026', cs: '2025–2026' },
      },
    ],
    sections: [
      {
        heading: { en: 'Context', cs: 'Kontext' },
        paragraphs: {
          en: [
            'A studio doing genuinely careful work in a field where every competitor’s site looks the same: soft blue gradients, stock photography of people in scrubs, and copy that could belong to anyone.',
            'The goal was a presence that signalled engineering seriousness without slipping into the clinical stock-photo register the category defaults to.',
          ],
          cs: [
            'Studio odvádí pečlivou práci v oboru, kde weby konkurence vypadají stejně: měkké modré gradienty, fotobanka a texty, které by mohly patřit komukoli.',
            'Cílem byla prezentace, která dá najevo inženýrskou serióznost, ale nespadne do klinického fotobankového rejstříku celé kategorie.',
          ],
        },
      },
      {
        heading: { en: 'Approach', cs: 'Přístup' },
        paragraphs: {
          en: [
            'A restrained palette, a serif display face against a neutral grotesque, and generous negative space do most of the work. Motion is used sparingly and always to reveal structure rather than to decorate.',
            'Case studies are built from a small set of layout primitives, so the studio can publish new work without a designer in the loop.',
          ],
          cs: [
            'Většinu práce odvede zdrženlivá paleta, patkové písmo proti neutrálnímu groteskovému a velkorysý prostor. Pohyb je používán střídmě a vždy odhaluje strukturu, nezdobí.',
            'Případové studie vznikají z malé sady layoutových primitiv, takže studio publikuje novou práci bez designéra.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: gallery('meridian', 1, 'Meridian homepage hero'),
        span: 'full',
        aspect: 'aspect-[16/9]',
      },
      {
        image: gallery('meridian', 2, 'Meridian typography specimen'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('meridian', 3, 'Meridian colour system'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('meridian', 4, 'Meridian case study layout'),
        span: 'full',
        aspect: 'aspect-[16/9]',
      },
      {
        image: gallery('meridian', 5, 'Meridian mobile views'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('meridian', 6, 'Meridian brand collateral'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
    ],
    outcome: {
      heading: { en: 'Outcome', cs: 'Výsledek' },
      paragraphs: {
        en: [
          'The site launched alongside a refreshed identity and became the studio’s main sales surface. Inbound enquiries arrived better qualified, because the work is now legible before the first call.',
        ],
        cs: [
          'Web vyšel spolu s obnovenou identitou a stal se hlavním prodejním kanálem studia. Poptávky chodí lépe kvalifikované — práce je čitelná ještě před prvním hovorem.',
        ],
      },
    },
  },
  {
    slug: 'northwind',
    title: { en: 'Northwind', cs: 'Northwind' },
    discipline: { en: 'UX/UI, Branding', cs: 'UX/UI, Branding' },
    year: '2025–2026',
    tags: ['uxui', 'branding'],
    summary: {
      en: 'Product and visual direction for a sports platform combining community, content and booking.',
      cs: 'Produktový a vizuální směr pro sportovní platformu spojující komunitu, obsah a rezervace.',
    },
    thumbnail: {
      src: '/images/work/northwind/thumbnail.png',
      alt: {
        en: 'Northwind app and identity',
        cs: 'Aplikace a identita Northwind',
      },
    },
    hero: {
      src: '/images/work/northwind/hero.png',
      alt: { en: 'Northwind booking flow', cs: 'Rezervační tok Northwind' },
    },
    meta: [
      {
        label: { en: 'Role', cs: 'Role' },
        value: { en: 'Lead designer', cs: 'Vedoucí designér' },
      },
      {
        label: { en: 'Timeline', cs: 'Časový rámec' },
        value: { en: '9 months', cs: '9 měsíců' },
      },
      {
        label: { en: 'Scope', cs: 'Rozsah' },
        value: { en: 'Brand, web, app', cs: 'Značka, web, aplikace' },
      },
      {
        label: { en: 'Year', cs: 'Rok' },
        value: { en: '2025–2026', cs: '2025–2026' },
      },
    ],
    sections: [
      {
        heading: { en: 'Context', cs: 'Kontext' },
        paragraphs: {
          en: [
            'Three products had grown independently — a booking tool, an editorial site and a community feed — each with its own navigation, tone and set of buttons.',
            'Users experienced them as one brand and were understandably confused when they behaved like three.',
          ],
          cs: [
            'Tři produkty rostly odděleně — rezervace, redakční web a komunitní feed — každý s vlastní navigací, tónem a sadou tlačítek.',
            'Uživatelé je vnímali jako jednu značku a pochopitelně je mátlo, že se chovají jako tři.',
          ],
        },
      },
      {
        heading: { en: 'Approach', cs: 'Přístup' },
        paragraphs: {
          en: [
            'We unified the three around a shared shell: one navigation model, one type ramp, one set of interaction rules. The booking flow was rebuilt around availability rather than around the database schema it had inherited.',
            'The identity was rebuilt at the same time, which let brand and interface decisions settle together instead of one chasing the other.',
          ],
          cs: [
            'Sjednotili jsme je kolem společné slupky: jeden navigační model, jedna typografie, jedna sada pravidel interakce. Rezervační tok jsme postavili kolem dostupnosti, ne kolem zděděného databázového schématu.',
            'Identitu jsme řešili souběžně, takže rozhodnutí o značce a rozhraní dozrávala společně.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: gallery('northwind', 1, 'Northwind home screen'),
        span: 'full',
        aspect: 'aspect-[16/9]',
      },
      {
        image: gallery('northwind', 2, 'Northwind booking calendar'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('northwind', 3, 'Northwind profile view'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('northwind', 4, 'Northwind identity system'),
        span: 'full',
        aspect: 'aspect-[16/9]',
      },
      {
        image: gallery('northwind', 5, 'Northwind editorial layout'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('northwind', 6, 'Northwind component library'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
    ],
    outcome: {
      heading: { en: 'Outcome', cs: 'Výsledek' },
      paragraphs: {
        en: [
          'Booking completion improved once the flow stopped asking for information it could infer. More quietly, the shared shell cut the cost of every subsequent feature, because there was finally one place to add it.',
        ],
        cs: [
          'Dokončenost rezervací se zlepšila, jakmile tok přestal ptát na to, co si mohl odvodit. Nenápadněji: společná slupka zlevnila každou další funkci, protože konečně existovalo jedno místo, kam ji přidat.',
        ],
      },
    },
  },
  {
    slug: 'lumen',
    title: { en: 'Lumen', cs: 'Lumen' },
    discipline: { en: 'UX/UI', cs: 'UX/UI' },
    year: '2026',
    tags: ['uxui'],
    summary: {
      en: 'B2B product redesign for location analysis, commute insight and workplace planning.',
      cs: 'Redesign B2B produktu pro analýzu lokalit, dojíždění a plánování pracovišť.',
    },
    thumbnail: {
      src: '/images/work/lumen/thumbnail.png',
      alt: { en: 'Lumen analysis report', cs: 'Analytický report Lumen' },
    },
    hero: {
      src: '/images/work/lumen/hero.png',
      alt: { en: 'Lumen map interface', cs: 'Mapové rozhraní Lumen' },
    },
    meta: [
      {
        label: { en: 'Role', cs: 'Role' },
        value: { en: 'UX/UI design', cs: 'UX/UI design' },
      },
      {
        label: { en: 'Timeline', cs: 'Časový rámec' },
        value: { en: '12 weeks', cs: '12 týdnů' },
      },
      {
        label: { en: 'Scope', cs: 'Rozsah' },
        value: {
          en: 'Research, redesign, system',
          cs: 'Výzkum, redesign, systém',
        },
      },
      {
        label: { en: 'Year', cs: 'Rok' },
        value: { en: '2026', cs: '2026' },
      },
    ],
    sections: [
      {
        heading: { en: 'Context', cs: 'Kontext' },
        paragraphs: {
          en: [
            'The tool answered a genuinely hard question — where should a company put an office, given where its people live — and buried the answer under a map with eleven simultaneous overlays.',
            'Analysts had built spreadsheets to interpret the product’s own output, which is usually a sign the output is wrong.',
          ],
          cs: [
            'Nástroj odpovídal na skutečně těžkou otázku — kam umístit kancelář vzhledem k bydlišti zaměstnanců — a odpověď pohřbil pod mapou s jedenácti vrstvami naráz.',
            'Analytici si k interpretaci výstupů stavěli vlastní tabulky, což bývá známka toho, že výstup je špatně.',
          ],
        },
      },
      {
        heading: { en: 'Approach', cs: 'Přístup' },
        paragraphs: {
          en: [
            'We inverted the hierarchy: the recommendation leads, the map supports it, and the raw layers are available for anyone who wants to audit the reasoning.',
            'Comparison became a first-class object rather than something users assembled by hand across browser tabs.',
          ],
          cs: [
            'Obrátili jsme hierarchii: vede doporučení, mapa ho podporuje a surové vrstvy zůstávají dostupné každému, kdo si chce ověřit úvahu.',
            'Srovnání se stalo plnohodnotným objektem místo něčeho, co si uživatelé ručně skládali přes několik panelů prohlížeče.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: gallery('lumen', 1, 'Lumen recommendation view'),
        span: 'full',
        aspect: 'aspect-[16/9]',
      },
      {
        image: gallery('lumen', 2, 'Lumen comparison table'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('lumen', 3, 'Lumen commute heatmap'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('lumen', 4, 'Lumen report export'),
        span: 'full',
        aspect: 'aspect-[16/9]',
      },
      {
        image: gallery('lumen', 5, 'Lumen filter panel'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('lumen', 6, 'Lumen empty states'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
    ],
    outcome: {
      heading: { en: 'Outcome', cs: 'Výsledek' },
      paragraphs: {
        en: [
          'The spreadsheets went away. Sales demos got shorter, which turned out to be the metric the team actually cared about.',
        ],
        cs: [
          'Tabulky zmizely. Prodejní dema se zkrátila — a to byla metrika, na které týmu doopravdy záleželo.',
        ],
      },
    },
  },
  {
    slug: 'corvus',
    title: { en: 'Corvus', cs: 'Corvus' },
    discipline: { en: 'Website, UX/UI', cs: 'Web, UX/UI' },
    year: '2025',
    tags: ['website', 'uxui'],
    summary: {
      en: 'A website for a platform helping people with health or social disadvantages find work and support.',
      cs: 'Web pro platformu, která pomáhá lidem se zdravotním či sociálním znevýhodněním najít práci a podporu.',
    },
    thumbnail: {
      src: '/images/work/corvus/thumbnail.png',
      alt: { en: 'Corvus website', cs: 'Web Corvus' },
    },
    hero: {
      src: '/images/work/corvus/hero.png',
      alt: { en: 'Corvus landing page', cs: 'Úvodní stránka Corvus' },
    },
    meta: [
      {
        label: { en: 'Role', cs: 'Role' },
        value: { en: 'Web design, UX', cs: 'Webdesign, UX' },
      },
      {
        label: { en: 'Timeline', cs: 'Časový rámec' },
        value: { en: '8 weeks', cs: '8 týdnů' },
      },
      {
        label: { en: 'Scope', cs: 'Rozsah' },
        value: { en: 'Site, accessibility', cs: 'Web, přístupnost' },
      },
      {
        label: { en: 'Year', cs: 'Rok' },
        value: { en: '2025', cs: '2025' },
      },
    ],
    sections: [
      {
        heading: { en: 'Context', cs: 'Kontext' },
        paragraphs: {
          en: [
            'The audience arrives under stress, often on an old phone, sometimes using a screen reader, and frequently not in their first language.',
            'Accessibility was not a compliance checkbox on this project. It was the design constraint that shaped everything else.',
          ],
          cs: [
            'Publikum přichází ve stresu, často na starém telefonu, někdy s odečítačem obrazovky a nezřídka ne ve svém prvním jazyce.',
            'Přístupnost tu nebyla políčko ke splnění normy. Byla to podmínka, která určila všechno ostatní.',
          ],
        },
      },
      {
        heading: { en: 'Approach', cs: 'Přístup' },
        paragraphs: {
          en: [
            'Plain language, one action per screen, contrast well past the minimum, and a layout that survives a 200% zoom without horizontal scrolling.',
            'Every animation on the site is decorative and every one of them is switched off under reduced-motion. Nothing load-bearing depends on movement.',
          ],
          cs: [
            'Srozumitelný jazyk, jedna akce na obrazovku, kontrast výrazně nad minimem a layout, který přežije 200% zoom bez vodorovného posuvu.',
            'Každá animace na webu je dekorativní a všechny se vypínají při omezeném pohybu. Nic nosného na pohybu nestojí.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: gallery('corvus', 1, 'Corvus homepage'),
        span: 'full',
        aspect: 'aspect-[16/9]',
      },
      {
        image: gallery('corvus', 2, 'Corvus job listing'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('corvus', 3, 'Corvus support directory'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('corvus', 4, 'Corvus accessibility notes'),
        span: 'full',
        aspect: 'aspect-[16/9]',
      },
      {
        image: gallery('corvus', 5, 'Corvus mobile flow'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('corvus', 6, 'Corvus form states'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
    ],
    outcome: {
      heading: { en: 'Outcome', cs: 'Výsledek' },
      paragraphs: {
        en: [
          'The site passes WCAG 2.2 AA and, more usefully, was tested with the people it is for. Several of the changes that mattered most came out of those sessions and would not have occurred to us otherwise.',
        ],
        cs: [
          'Web splňuje WCAG 2.2 AA a — což je užitečnější — byl testován s lidmi, pro které je určen. Několik nejdůležitějších změn vzešlo právě z těchto sezení a jinak by nás nenapadly.',
        ],
      },
    },
  },
  {
    slug: 'halcyon',
    title: { en: 'Halcyon', cs: 'Halcyon' },
    discipline: { en: 'Branding', cs: 'Branding' },
    year: '2026',
    tags: ['branding'],
    upcoming: true,
    summary: {
      en: 'Brand direction for a consulting studio turning early ideas into shipped products.',
      cs: 'Směr značky pro poradenské studio, které mění rané nápady v hotové produkty.',
    },
    thumbnail: {
      src: '/images/work/halcyon/thumbnail.png',
      alt: { en: 'Halcyon brand exploration', cs: 'Průzkum značky Halcyon' },
    },
    hero: {
      src: '/images/work/halcyon/hero.png',
      alt: { en: 'Halcyon identity', cs: 'Identita Halcyon' },
    },
    meta: [
      {
        label: { en: 'Role', cs: 'Role' },
        value: { en: 'Brand direction', cs: 'Směr značky' },
      },
      {
        label: { en: 'Status', cs: 'Stav' },
        value: { en: 'In progress', cs: 'Probíhá' },
      },
      {
        label: { en: 'Scope', cs: 'Rozsah' },
        value: { en: 'Identity, system', cs: 'Identita, systém' },
      },
      {
        label: { en: 'Year', cs: 'Rok' },
        value: { en: '2026', cs: '2026' },
      },
    ],
    sections: [
      {
        heading: { en: 'Context', cs: 'Kontext' },
        paragraphs: {
          en: [
            'A new studio with a sharp point of view and, so far, nothing to show for it visually.',
            'This case study goes live when the work does.',
          ],
          cs: [
            'Nové studio s vyhraněným názorem a zatím bez vizuálního vyjádření.',
            'Případová studie vyjde spolu s prací samotnou.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: gallery('halcyon', 1, 'Halcyon early exploration'),
        span: 'full',
        aspect: 'aspect-[16/9]',
      },
      {
        image: gallery('halcyon', 2, 'Halcyon mark studies'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
      {
        image: gallery('halcyon', 3, 'Halcyon colour tests'),
        span: 'half',
        aspect: 'aspect-[4/3]',
      },
    ],
    outcome: {
      heading: { en: 'Outcome', cs: 'Výsledek' },
      paragraphs: {
        en: ['Coming soon.'],
        cs: ['Již brzy.'],
      },
    },
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
