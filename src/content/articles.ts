import type { Article } from './types'

/** Placeholder editorial entries — same shape the article layout renders. */
export const articles: Article[] = [
  {
    slug: 'render-series',
    title: {
      en: 'Building a render series from an empty scene',
      cs: 'Jak vzniká série renderů z prázdné scény',
    },
    excerpt: {
      en: 'Modelling, texturing, lighting and the render passes behind a full vehicle study — and the parts that took three attempts.',
      cs: 'Modelování, textury, světlo a render passy za kompletní studií vozu — včetně částí, které vyšly až napotřetí.',
    },
    date: '2026-03-18',
    readingTime: 7,
    cover: {
      src: '/images/articles/render-series/cover.png',
      alt: {
        en: 'Finished render, three-quarter view',
        cs: 'Hotový render, tříčtvrteční pohled',
      },
    },
    intro: {
      en: [
        'This started as a way to learn hard-surface modelling properly and turned into four months of evenings. What follows is the honest version, including the parts I would do differently.',
      ],
      cs: [
        'Začalo to jako pokus pořádně se naučit hard-surface modelování a skončilo čtyřmi měsíci večerů. Následuje poctivá verze, včetně toho, co bych dnes udělal jinak.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'Reference before geometry',
          cs: 'Reference před geometrií',
        },
        paragraphs: {
          en: [
            'Most of the errors that cost me time later came from starting to model before the reference board was complete. Blueprints alone are not enough — you need photographs from angles the blueprints do not show, because that is where the surfaces actually resolve.',
            'A day spent collecting reference saved considerably more than a day of remodelling.',
          ],
          cs: [
            'Většina chyb, které mě později stály čas, vznikla tím, že jsem začal modelovat dřív, než byla hotová referenční nástěnka. Samotné výkresy nestačí — potřebujete fotky z úhlů, které výkres neukáže, protože právě tam se plochy skutečně dolaďují.',
            'Den strávený sbíráním referencí ušetřil výrazně víc než den přemodelovávání.',
          ],
        },
        image: {
          src: '/images/articles/render-series/gallery-01.png',
          alt: { en: 'Reference board', cs: 'Referenční nástěnka' },
        },
      },
      {
        heading: {
          en: 'Topology that survives a subdivision',
          cs: 'Topologie, která přežije subdivision',
        },
        paragraphs: {
          en: [
            'Clean quads matter less than where the loops terminate. Every pinch in the final render traces back to a pole sitting on a curved surface instead of a flat one.',
            'Fixing those late is expensive. Fixing them while the mesh is still coarse costs minutes.',
          ],
          cs: [
            'Na čistých quadech záleží méně než na tom, kde loopy končí. Každé zaskřípnutí ve finálním renderu vede zpět k pólu na zakřivené ploše místo na rovné.',
            'Opravovat je pozdě je drahé. Opravit je na hrubé síti stojí minuty.',
          ],
        },
        image: {
          src: '/images/articles/render-series/gallery-02.png',
          alt: { en: 'Wireframe detail', cs: 'Detail drátěného modelu' },
        },
      },
      {
        heading: {
          en: 'Lighting is the whole thing',
          cs: 'Světlo je celý ten trik',
        },
        paragraphs: {
          en: [
            'A mediocre model in good light beats an excellent model in flat light, every time. Three large soft sources and one hard rim did more for the final images than any amount of extra geometry.',
          ],
          cs: [
            'Průměrný model v dobrém světle porazí výborný model v plochém světle pokaždé. Tři velké měkké zdroje a jeden ostrý rim udělaly pro výsledek víc než jakákoli další geometrie.',
          ],
        },
      },
    ],
    gallery: [
      {
        src: '/images/articles/render-series/gallery-03.png',
        alt: { en: 'Front detail render', cs: 'Detail předku' },
      },
      {
        src: '/images/articles/render-series/gallery-04.png',
        alt: {
          en: 'Rear three-quarter render',
          cs: 'Zadní tříčtvrteční pohled',
        },
      },
      {
        src: '/images/articles/render-series/gallery-05.png',
        alt: { en: 'Studio lighting setup', cs: 'Nasvícení ve studiu' },
      },
    ],
  },
  {
    slug: 'printed-model',
    title: {
      en: 'The school project people asked to buy',
      cs: 'Školní projekt, který si lidé chtěli koupit',
    },
    excerpt: {
      en: 'A 3D printed model that was supposed to take a fortnight, took two hundred hours, and taught me more about tolerances than any tutorial.',
      cs: 'Tištěný model, který měl zabrat čtrnáct dní, zabral dvě stě hodin a naučil mě o tolerancích víc než jakýkoli tutoriál.',
    },
    date: '2026-01-27',
    readingTime: 6,
    cover: {
      src: '/images/articles/printed-model/cover.png',
      alt: { en: 'Assembled printed model', cs: 'Sestavený tištěný model' },
    },
    intro: {
      en: [
        'Designing for screen forgives a lot. Designing for a printer that lays down 0.2mm at a time forgives nothing, and the feedback loop is measured in hours.',
      ],
      cs: [
        'Design pro obrazovku odpustí hodně. Design pro tiskárnu, která klade 0,2 mm po vrstvách, neodpustí nic — a zpětná vazba se měří v hodinách.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'Tolerances are the design',
          cs: 'Tolerance jsou ten design',
        },
        paragraphs: {
          en: [
            'The first four assemblies failed because parts that fit perfectly in the viewport did not fit at all in plastic. A 0.2mm clearance is the difference between a press fit and a part you have to sand for an hour.',
            'I ended up printing a test comb of clearances before committing to anything, which felt like a detour and was in fact the shortcut.',
          ],
          cs: [
            'První čtyři sestavy selhaly, protože díly, které ve viewportu seděly dokonale, v plastu neseděly vůbec. 0,2 mm vůle je rozdíl mezi nalisováním a dílem, který hodinu brousíte.',
            'Nakonec jsem si vytiskl testovací hřeben vůlí, než jsem se k čemukoli zavázal — vypadalo to jako oklika a byla to zkratka.',
          ],
        },
        image: {
          src: '/images/articles/printed-model/gallery-01.png',
          alt: { en: 'Test prints', cs: 'Testovací tisky' },
        },
      },
      {
        heading: {
          en: 'Finishing takes longer than printing',
          cs: 'Povrchová úprava trvá déle než tisk',
        },
        paragraphs: {
          en: [
            'Roughly seventy of the two hundred hours were sanding, filling and painting. Nobody photographs that part, which is why everyone underestimates it.',
          ],
          cs: [
            'Zhruba sedmdesát z dvou set hodin bylo broušení, tmelení a lakování. Tuhle část nikdo nefotí — proto ji všichni podceňují.',
          ],
        },
        image: {
          src: '/images/articles/printed-model/gallery-02.png',
          alt: { en: 'Finishing process', cs: 'Proces povrchové úpravy' },
        },
      },
    ],
    gallery: [
      {
        src: '/images/articles/printed-model/gallery-03.png',
        alt: { en: 'Painted body', cs: 'Nalakovaná karoserie' },
      },
      {
        src: '/images/articles/printed-model/gallery-04.png',
        alt: { en: 'Assembly detail', cs: 'Detail sestavy' },
      },
      {
        src: '/images/articles/printed-model/gallery-05.png',
        alt: { en: 'Finished model on stand', cs: 'Hotový model na stojanu' },
      },
    ],
  },
  {
    slug: 'merch-system',
    title: {
      en: 'Designing merchandise for a sensitive subject',
      cs: 'Návrh merche pro citlivé téma',
    },
    excerpt: {
      en: 'How a student project on mental health turned into a lesson about restraint, and why the first three concepts were wrong.',
      cs: 'Jak se ze studentského projektu o duševním zdraví stala lekce o zdrženlivosti a proč byly první tři koncepty špatně.',
    },
    date: '2025-11-04',
    readingTime: 5,
    cover: {
      src: '/images/articles/merch-system/cover.png',
      alt: { en: 'Merchandise range', cs: 'Kolekce merche' },
    },
    intro: {
      en: [
        'The brief was to design merchandise for a mental health organisation. The trap, which we walked straight into, is that the subject invites metaphor — and metaphor here reads as glib.',
      ],
      cs: [
        'Zadáním byl merch pro organizaci zabývající se duševním zdravím. Past, do které jsme šlápli rovnou, je, že téma svádí k metaforám — a metafora tu působí lacině.',
      ],
    },
    sections: [
      {
        heading: { en: 'The first three concepts', cs: 'První tři koncepty' },
        paragraphs: {
          en: [
            'All three leaned on imagery of storms clearing and light breaking through. All three were rejected, correctly, for turning a serious condition into a weather report.',
            'The feedback that unlocked the project: people who live with this do not want a metaphor for it on their tote bag. They want something they would actually wear.',
          ],
          cs: [
            'Všechny tři stály na obrazech ustupující bouře a prosvítajícího světla. Všechny tři byly — správně — zamítnuty za to, že mění vážný stav v předpověď počasí.',
            'Zpětná vazba, která projekt odemkla: lidé, kteří s tím žijí, nechtějí metaforu na plátěnce. Chtějí něco, co by si opravdu vzali na sebe.',
          ],
        },
        image: {
          src: '/images/articles/merch-system/gallery-01.png',
          alt: { en: 'Rejected concepts', cs: 'Zamítnuté koncepty' },
        },
      },
      {
        heading: { en: 'What worked', cs: 'Co fungovalo' },
        paragraphs: {
          en: [
            'Typography, a confident palette, and a single line of copy that says something true without explaining itself. The design does not perform empathy; it just gets out of the way.',
          ],
          cs: [
            'Typografie, sebevědomá paleta a jediná věta, která říká něco pravdivého a nevysvětluje se. Design nepředvádí empatii — jen uhne z cesty.',
          ],
        },
        image: {
          src: '/images/articles/merch-system/gallery-02.png',
          alt: { en: 'Final range', cs: 'Finální kolekce' },
        },
      },
    ],
    gallery: [
      {
        src: '/images/articles/merch-system/gallery-03.png',
        alt: { en: 'Tote bag', cs: 'Plátěná taška' },
      },
      {
        src: '/images/articles/merch-system/gallery-04.png',
        alt: { en: 'Apparel print', cs: 'Potisk oblečení' },
      },
      {
        src: '/images/articles/merch-system/gallery-05.png',
        alt: { en: 'Packaging', cs: 'Obal' },
      },
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}
