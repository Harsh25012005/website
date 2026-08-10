import type { ImageAsset, Project } from './types'

/**
 * Placeholder case studies. The shape mirrors what the layouts consume, so
 * replacing the strings and image paths is the only work needed to publish
 * real projects — no component changes.
 */

function gallery(slug: string, index: number, alt: string): ImageAsset {
  return {
    src: `/images/work/${slug}/gallery-0${index}.png`,
    alt: { en: alt },
  }
}

export const projects: Project[] = [
  {
    slug: 'atlas',
    title: { en: 'Atlas' },
    discipline: { en: 'Mobile app design' },
    year: '2025–2026',
    tags: ['uxui'],
    summary: {
      en: 'Mobile app design for an equity management platform, focused on clarity, dashboards and dense financial data.',
    },
    thumbnail: {
      src: '/images/work/atlas/thumbnail.png',
      alt: { en: 'Atlas mobile app screens' },
    },
    hero: {
      src: '/images/work/atlas/hero.png',
      alt: { en: 'Atlas dashboard overview' },
    },
    meta: [
      {
        label: { en: 'Role' },
        value: { en: 'Product design, UI' },
      },
      {
        label: { en: 'Timeline' },
        value: { en: '10 weeks' },
      },
      {
        label: { en: 'Team' },
        value: { en: 'Two designers, four engineers' },
      },
      {
        label: { en: 'Platform' },
        value: { en: 'iOS, Android' },
      },
    ],
    sections: [
      {
        heading: { en: 'Context' },
        paragraphs: {
          en: [
            'The web platform had grown to cover cap tables, valuations and reporting, but everything assumed a desktop screen and an accountant’s patience. Mobile traffic kept climbing anyway.',
            'The brief was to design a companion app that answers the three questions people actually open their phone for, without shipping a shrunken copy of the desktop product.',
          ],
        },
      },
      {
        heading: { en: 'Approach' },
        paragraphs: {
          en: [
            'We started from the data, not the screens. Every number in the product was sorted by how often it was checked and how much context it needed to make sense, which collapsed a sprawling navigation into four tabs.',
            'Dense tables became progressive summaries: a headline figure, a trend, then the full breakdown one tap away. The type ramp and spacing scale came straight from the existing design system so the two products still felt related.',
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
      heading: { en: 'Outcome' },
      paragraphs: {
        en: [
          'The app shipped on both platforms in a single release cycle. Reusing the established brand and component vocabulary meant the team spent its time on the hard part (making financial data legible on a small screen) instead of relitigating visual decisions.',
          'Support tickets asking “where do I find my current valuation” dropped off almost entirely after launch.',
        ],
      },
    },
    outcomeLink: {
      label: { en: 'View the live product' },
      href: 'https://example.com',
    },
  },
  {
    slug: 'meridian',
    title: { en: 'Meridian' },
    discipline: { en: 'Website, Branding' },
    year: '2025–2026',
    tags: ['website', 'branding'],
    summary: {
      en: 'Website and visual direction for a software studio building digital healthcare products.',
    },
    thumbnail: {
      src: '/images/work/meridian/thumbnail.png',
      alt: { en: 'Meridian site on a desktop monitor' },
    },
    hero: {
      src: '/images/work/meridian/hero.png',
      alt: { en: 'Meridian homepage' },
    },
    meta: [
      {
        label: { en: 'Role' },
        value: { en: 'Art direction, web design' },
      },
      {
        label: { en: 'Timeline' },
        value: { en: '14 weeks' },
      },
      {
        label: { en: 'Scope' },
        value: { en: 'Identity, site, motion' },
      },
      {
        label: { en: 'Year' },
        value: { en: '2025–2026' },
      },
    ],
    sections: [
      {
        heading: { en: 'Context' },
        paragraphs: {
          en: [
            'A studio doing genuinely careful work in a field where every competitor’s site looks the same: soft blue gradients, stock photography of people in scrubs, and copy that could belong to anyone.',
            'The goal was a presence that signalled engineering seriousness without slipping into the clinical stock-photo register the category defaults to.',
          ],
        },
      },
      {
        heading: { en: 'Approach' },
        paragraphs: {
          en: [
            'A restrained palette, a serif display face against a neutral grotesque, and generous negative space do most of the work. Motion is used sparingly and always to reveal structure rather than to decorate.',
            'Case studies are built from a small set of layout primitives, so the studio can publish new work without a designer in the loop.',
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
      heading: { en: 'Outcome' },
      paragraphs: {
        en: [
          'The site launched alongside a refreshed identity and became the studio’s main sales surface. Inbound enquiries arrived better qualified, because the work is now legible before the first call.',
        ],
      },
    },
  },
  {
    slug: 'northwind',
    title: { en: 'Northwind' },
    discipline: { en: 'UX/UI, Branding' },
    year: '2025–2026',
    tags: ['uxui', 'branding'],
    summary: {
      en: 'Product and visual direction for a sports platform combining community, content and booking.',
    },
    thumbnail: {
      src: '/images/work/northwind/thumbnail.png',
      alt: { en: 'Northwind app and identity' },
    },
    hero: {
      src: '/images/work/northwind/hero.png',
      alt: { en: 'Northwind booking flow' },
    },
    meta: [
      {
        label: { en: 'Role' },
        value: { en: 'Lead designer' },
      },
      {
        label: { en: 'Timeline' },
        value: { en: '9 months' },
      },
      {
        label: { en: 'Scope' },
        value: { en: 'Brand, web, app' },
      },
      {
        label: { en: 'Year' },
        value: { en: '2025–2026' },
      },
    ],
    sections: [
      {
        heading: { en: 'Context' },
        paragraphs: {
          en: [
            'Three products had grown independently: a booking tool, an editorial site and a community feed, each with its own navigation, tone and set of buttons.',
            'Users experienced them as one brand and were understandably confused when they behaved like three.',
          ],
        },
      },
      {
        heading: { en: 'Approach' },
        paragraphs: {
          en: [
            'We unified the three around a shared shell: one navigation model, one type ramp, one set of interaction rules. The booking flow was rebuilt around availability rather than around the database schema it had inherited.',
            'The identity was rebuilt at the same time, which let brand and interface decisions settle together instead of one chasing the other.',
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
      heading: { en: 'Outcome' },
      paragraphs: {
        en: [
          'Booking completion improved once the flow stopped asking for information it could infer. More quietly, the shared shell cut the cost of every subsequent feature, because there was finally one place to add it.',
        ],
      },
    },
  },
  {
    slug: 'lumen',
    title: { en: 'Lumen' },
    discipline: { en: 'UX/UI' },
    year: '2026',
    tags: ['uxui'],
    summary: {
      en: 'B2B product redesign for location analysis, commute insight and workplace planning.',
    },
    thumbnail: {
      src: '/images/work/lumen/thumbnail.png',
      alt: { en: 'Lumen analysis report' },
    },
    hero: {
      src: '/images/work/lumen/hero.png',
      alt: { en: 'Lumen map interface' },
    },
    meta: [
      {
        label: { en: 'Role' },
        value: { en: 'UX/UI design' },
      },
      {
        label: { en: 'Timeline' },
        value: { en: '12 weeks' },
      },
      {
        label: { en: 'Scope' },
        value: { en: 'Research, redesign, system' },
      },
      {
        label: { en: 'Year' },
        value: { en: '2026' },
      },
    ],
    sections: [
      {
        heading: { en: 'Context' },
        paragraphs: {
          en: [
            'The tool answered a genuinely hard question (where should a company put an office, given where its people live) and buried the answer under a map with eleven simultaneous overlays.',
            'Analysts had built spreadsheets to interpret the product’s own output, which is usually a sign the output is wrong.',
          ],
        },
      },
      {
        heading: { en: 'Approach' },
        paragraphs: {
          en: [
            'We inverted the hierarchy: the recommendation leads, the map supports it, and the raw layers are available for anyone who wants to audit the reasoning.',
            'Comparison became a first-class object rather than something users assembled by hand across browser tabs.',
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
      heading: { en: 'Outcome' },
      paragraphs: {
        en: [
          'The spreadsheets went away. Sales demos got shorter, which turned out to be the metric the team actually cared about.',
        ],
      },
    },
  },
  {
    slug: 'corvus',
    title: { en: 'Corvus' },
    discipline: { en: 'Website, UX/UI' },
    year: '2025',
    tags: ['website', 'uxui'],
    summary: {
      en: 'A website for a platform helping people with health or social disadvantages find work and support.',
    },
    thumbnail: {
      src: '/images/work/corvus/thumbnail.png',
      alt: { en: 'Corvus website' },
    },
    hero: {
      src: '/images/work/corvus/hero.png',
      alt: { en: 'Corvus landing page' },
    },
    meta: [
      {
        label: { en: 'Role' },
        value: { en: 'Web design, UX' },
      },
      {
        label: { en: 'Timeline' },
        value: { en: '8 weeks' },
      },
      {
        label: { en: 'Scope' },
        value: { en: 'Site, accessibility' },
      },
      {
        label: { en: 'Year' },
        value: { en: '2025' },
      },
    ],
    sections: [
      {
        heading: { en: 'Context' },
        paragraphs: {
          en: [
            'The audience arrives under stress, often on an old phone, sometimes using a screen reader, and frequently not in their first language.',
            'Accessibility was not a compliance checkbox on this project. It was the design constraint that shaped everything else.',
          ],
        },
      },
      {
        heading: { en: 'Approach' },
        paragraphs: {
          en: [
            'Plain language, one action per screen, contrast well past the minimum, and a layout that survives a 200% zoom without horizontal scrolling.',
            'Every animation on the site is decorative and every one of them is switched off under reduced-motion. Nothing load-bearing depends on movement.',
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
      heading: { en: 'Outcome' },
      paragraphs: {
        en: [
          'The site passes WCAG 2.2 AA and, more usefully, was tested with the people it is for. Several of the changes that mattered most came out of those sessions and would not have occurred to us otherwise.',
        ],
      },
    },
  },
  {
    slug: 'halcyon',
    title: { en: 'Halcyon' },
    discipline: { en: 'Branding' },
    year: '2026',
    tags: ['branding'],
    upcoming: true,
    summary: {
      en: 'Brand direction for a consulting studio turning early ideas into shipped products.',
    },
    thumbnail: {
      src: '/images/work/halcyon/thumbnail.png',
      alt: { en: 'Halcyon brand exploration' },
    },
    hero: {
      src: '/images/work/halcyon/hero.png',
      alt: { en: 'Halcyon identity' },
    },
    meta: [
      {
        label: { en: 'Role' },
        value: { en: 'Brand direction' },
      },
      {
        label: { en: 'Status' },
        value: { en: 'In progress' },
      },
      {
        label: { en: 'Scope' },
        value: { en: 'Identity, system' },
      },
      {
        label: { en: 'Year' },
        value: { en: '2026' },
      },
    ],
    sections: [
      {
        heading: { en: 'Context' },
        paragraphs: {
          en: [
            'A new studio with a sharp point of view and, so far, nothing to show for it visually.',
            'This case study goes live when the work does.',
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
      heading: { en: 'Outcome' },
      paragraphs: {
        en: ['Coming soon.'],
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
