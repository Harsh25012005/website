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
  en: 'The tools behind the work, and the reason each one is still here. Nothing on this list is a recommendation for anyone else. It is what happens to fit the way I work between a Figma file and a deployed front end.',
  es: 'Las herramientas que hay detrás del trabajo, y la razón por la que cada una sigue aquí. Nada de esta lista es una recomendación para nadie más. Es lo que encaja con mi forma de trabajar entre un archivo de Figma y un front end desplegado.',
  fr: 'Les outils derrière le travail, et la raison pour laquelle chacun est toujours là. Rien dans cette liste n’est une recommandation pour qui que ce soit d’autre. C’est ce qui se trouve convenir à ma façon de travailler entre un fichier Figma et un front end déployé.',
}

export const toolGroups: ToolGroup[] = [
  {
    heading: { en: 'Design', es: 'Diseño', fr: 'Design' },
    intro: {
      en: 'Figma does most of the work. The rest are here because a client or a project already lives in them.',
      es: 'Figma hace la mayor parte del trabajo. Los demás están aquí porque un cliente o un proyecto ya vive en ellos.',
      fr: 'Figma fait le plus gros du travail. Les autres sont là parce qu’un client ou un projet y vit déjà.',
    },
    items: [
      {
        name: 'Figma',
        note: {
          en: 'Where essentially every project starts and ends. Components, variants and auto layout map closely enough to how a front end is actually built that the file stays useful after handoff instead of becoming a picture of the design.',
          es: 'Donde empieza y termina prácticamente todo proyecto. Los componentes, las variantes y el auto layout se corresponden lo bastante con cómo se construye de verdad un front end como para que el archivo siga siendo útil después del handoff, en vez de convertirse en una foto del diseño.',
          fr: 'Là où commence et se termine pratiquement chaque projet. Les composants, les variantes et l’auto layout correspondent d’assez près à la façon dont un front end est réellement construit pour que le fichier reste utile après le handoff, au lieu de devenir une image du design.',
        },
      },
      {
        name: 'Framer',
        note: {
          en: 'For sites where the design and the published page should be the same artefact, and for motion that is easier to demonstrate than to describe in a spec.',
          es: 'Para sitios donde el diseño y la página publicada deben ser el mismo artefacto, y para animaciones que es más fácil demostrar que describir en una especificación.',
          fr: 'Pour les sites où le design et la page publiée doivent être le même artefact, et pour les animations qu’il est plus facile de démontrer que de décrire dans une spécification.',
        },
      },
      {
        name: 'Webflow',
        note: {
          en: 'When a client needs to edit and publish content themselves afterwards without a developer in the loop. Chosen for who maintains the site, not for how it is built.',
          es: 'Cuando un cliente necesita editar y publicar contenido por su cuenta después, sin un desarrollador de por medio. Se elige por quién mantiene el sitio, no por cómo está construido.',
          fr: 'Quand un client doit ensuite modifier et publier du contenu lui-même, sans développeur dans la boucle. Choisi en fonction de qui maintient le site, pas de la façon dont il est construit.',
        },
      },
      {
        name: 'Sketch',
        note: {
          en: 'Only when a project arrives in it. Plenty of long-running products still have their source of truth in a Sketch library, and converting one is rarely worth the disruption.',
          es: 'Solo cuando un proyecto llega en él. Muchos productos de larga trayectoria todavía tienen su fuente de verdad en una biblioteca de Sketch, y convertir una rara vez compensa la interrupción.',
          fr: 'Uniquement quand un projet arrive dans cet outil. Beaucoup de produits de longue date ont encore leur source de vérité dans une bibliothèque Sketch, et en convertir une vaut rarement la perturbation que cela occasionne.',
        },
      },
    ],
  },
  {
    heading: { en: 'Front end', es: 'Front end', fr: 'Front end' },
    intro: {
      en: 'Enough to take a design all the way to production, and to know while designing which ideas are cheap and which are expensive.',
      es: 'Lo suficiente para llevar un diseño hasta producción, y para saber mientras diseño qué ideas son baratas y cuáles caras.',
      fr: 'De quoi mener un design jusqu’en production, et savoir pendant la conception quelles idées sont peu coûteuses et lesquelles sont chères.',
    },
    items: [
      {
        name: 'React',
        note: {
          en: 'The component model lines up with how a design system is structured, so the Figma component and the coded component stay the same unit rather than two parallel inventories.',
          es: 'El modelo de componentes se alinea con cómo se estructura un design system, de modo que el componente de Figma y el componente en código siguen siendo la misma unidad, en lugar de dos inventarios paralelos.',
          fr: 'Le modèle de composants s’aligne sur la façon dont un design system est structuré, si bien que le composant Figma et le composant codé restent la même unité, plutôt que deux inventaires parallèles.',
        },
      },
      {
        name: 'Next.js',
        note: {
          en: 'App Router and server components by default. Most of what I build is content-led and should ship as static HTML, this site included.',
          es: 'App Router y server components por defecto. La mayor parte de lo que construyo se guía por el contenido y debería entregarse como HTML estático, este sitio incluido.',
          fr: 'App Router et server components par défaut. La plupart de ce que je construis est piloté par le contenu et devrait être livré en HTML statique, ce site compris.',
        },
      },
      {
        name: 'Tailwind CSS',
        note: {
          en: 'Design tokens as the only way to write a value. It makes an off-system spacing or colour choice visible in review, which is a constraint worth more than the speed.',
          es: 'Los design tokens como única forma de escribir un valor. Hace que una elección de espaciado o de color fuera del sistema se vea en la revisión, una restricción que vale más que la velocidad.',
          fr: 'Les design tokens comme seule manière d’écrire une valeur. Cela rend visible en revue un choix d’espacement ou de couleur hors système, une contrainte qui vaut plus que la rapidité.',
        },
      },
      {
        name: 'TypeScript',
        note: {
          en: 'Mostly for the content layer. Typing the shape of a case study or a service means a missing field is a build error rather than a blank space someone notices in production.',
          es: 'Sobre todo para la capa de contenido. Tipar la forma de un caso de estudio o de un servicio hace que un campo que falta sea un error de compilación, en lugar de un hueco en blanco que alguien detecta en producción.',
          fr: 'Surtout pour la couche de contenu. Typer la forme d’une étude de cas ou d’un service fait qu’un champ manquant devient une erreur de build, plutôt qu’un espace vide que quelqu’un remarque en production.',
        },
      },
      {
        name: 'HTML & CSS',
        note: {
          en: 'Still the part that decides whether a build is any good. Semantics, focus order and contrast are design decisions that happen to be written in markup.',
          es: 'Sigue siendo la parte que decide si un desarrollo es bueno. La semántica, el orden de foco y el contraste son decisiones de diseño que resultan estar escritas en el marcado.',
          fr: 'Reste la partie qui décide si une réalisation est bonne. La sémantique, l’ordre de focus et le contraste sont des décisions de design qui se trouvent être écrites dans le balisage.',
        },
      },
      {
        name: 'PHP',
        note: {
          en: 'For projects on existing PHP stacks, usually a front end that has to slot into something already running rather than a greenfield build.',
          es: 'Para proyectos sobre stacks de PHP existentes, normalmente un front end que tiene que encajar en algo que ya está en marcha, en lugar de un desarrollo desde cero.',
          fr: 'Pour des projets sur des stacks PHP existants, généralement un front end qui doit s’insérer dans quelque chose déjà en service, plutôt qu’une réalisation partie de zéro.',
        },
      },
    ],
  },
  {
    heading: { en: 'This site', es: 'Este sitio', fr: 'Ce site' },
    intro: {
      en: 'Since a portfolio should be able to answer the question it invites.',
      es: 'Porque un portafolio debería poder responder a la pregunta que él mismo invita a hacer.',
      fr: 'Puisqu’un portfolio devrait pouvoir répondre à la question qu’il invite à poser.',
    },
    items: [
      {
        name: 'GSAP',
        note: {
          en: 'ScrollTrigger and SplitText for the heading reveals and scroll-driven sequences. Every motion primitive checks prefers-reduced-motion and degrades to a static, fully visible layout.',
          es: 'ScrollTrigger y SplitText para las apariciones de los títulos y las secuencias guiadas por el scroll. Cada primitiva de movimiento comprueba prefers-reduced-motion y se degrada a un layout estático y totalmente visible.',
          fr: 'ScrollTrigger et SplitText pour les apparitions des titres et les séquences pilotées par le défilement. Chaque primitive de mouvement vérifie prefers-reduced-motion et se dégrade en une mise en page statique et entièrement visible.',
        },
      },
      {
        name: 'Lenis',
        note: {
          en: 'Smooth scrolling, driven from the GSAP ticker rather than its own animation frame. On a separate loop, pinned and parallax elements lag the scroll position by a frame.',
          es: 'Scroll suave, gobernado por el ticker de GSAP en lugar de su propio frame de animación. En un bucle aparte, los elementos fijados y de parallax van un frame por detrás de la posición del scroll.',
          fr: 'Défilement fluide, piloté par le ticker de GSAP plutôt que par sa propre frame d’animation. Sur une boucle séparée, les éléments épinglés et en parallaxe accusent une frame de retard sur la position de défilement.',
        },
      },
      {
        name: 'three.js',
        note: {
          en: 'The particle background, kept to a single draw call. A portfolio that costs a phone its battery to look at has made the wrong trade.',
          es: 'El fondo de partículas, mantenido en una sola draw call. Un portafolio que le cuesta la batería a un móvil solo por mirarlo ha hecho el intercambio equivocado.',
          fr: 'Le fond de particules, limité à un seul draw call. Un portfolio qui coûte sa batterie à un téléphone rien qu’à le regarder a fait le mauvais compromis.',
        },
      },
    ],
  },
]
