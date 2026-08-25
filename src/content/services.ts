import type { Locale } from '@/lib/i18n'
import type { Service, ServicePillar } from './types'

/**
 * One entry per service, and one `/services/[slug]` page per entry.
 *
 * These used to live in `about.ts` as six summary blocks on a single
 * `/services` page. That page was asking one URL, one `<title>` and one `h1` to
 * rank for six unrelated head terms — "design system consultant" and "mobile
 * app UI design" are different searches with different intent, and a page that
 * addresses both addresses neither well. Splitting gives each term a page that
 * can answer it completely, and turns `/services` into a hub whose internal
 * links point somewhere.
 *
 * The list is now grouped into two pillars — design and development — because
 * the site sells two things bought by different people at different moments: a
 * Figma file, and a running site. Array order is display order, design first,
 * and `number` restarts at `01` inside each pillar.
 *
 * ⚠️  Everything here is a public commercial claim. Only describe work that
 * will actually be taken on, and keep the FAQ answers literally true — they are
 * rendered *and* emitted as `FAQPage` schema, so Google holds the site to them.
 * Where a real number exists (a rate, a turnaround, a minimum engagement),
 * replace the scope-dependent wording with it; the specific answer always
 * outperforms the careful one.
 *
 * ⚠️  Two limits are stated in the FAQs below and repeated in `pricing.ts`:
 * no back-end APIs, databases or infrastructure; no native iOS or Android
 * builds. They are load-bearing. If any of them stops being true, change it
 * everywhere at once — a site that contradicts itself on scope is worse than
 * one that says no.
 */
export const services: Service[] = [
  {
    slug: 'web-ui-design',
    pillar: 'design',
    featured: true,
    number: '01',
    title: { en: 'Web UI design', es: 'Diseño UI web', fr: 'Design UI web' },
    description: {
      en: 'Responsive website and web app UI designed in Figma: landing pages, marketing sites and product screens built on a real grid, type scale and spacing system.',
      es: 'Interfaces web y aplicaciones responsivas diseñadas en Figma: landing pages, sitios corporativos y pantallas de producto construidas sobre retículas, escalas tipográficas y sistemas de espaciado reales.',
      fr: 'Interfaces web et applications réactives conçues dans Figma\u00a0: landing pages, sites vitrines et écrans de produit construits sur une grille, une échelle typographique et un système d\'espacement rigoureux.',
    },
    deliverables: {
      en: [
        'Responsive page designs in Figma, desktop through mobile',
        'Landing page, marketing site and web app screen design',
        'Typography, spacing and component structure ready to build',
      ],
      es: [
        'Diseños de página responsive en Figma, de escritorio a móvil',
        'Diseño de pantallas para landing pages, sitios web y aplicaciones',
        'Estructura de tipografía, espaciado y componentes lista para maquetar',
      ],
      fr: [
        'Maquettes de pages responsives dans Figma, du desktop au mobile',
        'Design d\'écrans pour landing pages, sites marketing et applications web',
        'Structure typographique, espacements et composants prêts pour l\'intégration',
      ],
    },
    metaTitle: 'Web UI Design Services for Websites & Web Apps',
    metaDescription:
      'Freelance web UI design in Figma: landing pages, marketing sites and web app screens built on a real grid and type scale, responsive from desktop to mobile.',
    keywords: [
      'web UI design services',
      'website UI designer',
      'landing page design service',
      'freelance web designer',
      'Figma web design',
      'responsive website design',
    ],
    heading: {
      en: 'Web UI design that holds up on every screen size',
      es: 'Diseño UI web que se mantiene impecable en cualquier pantalla',
      fr: 'Un design UI web qui tient la route sur toutes les tailles d\'écran',
    },
    intro: {
      en: 'Landing pages, marketing sites and web app screens designed in Figma on a grid, type scale and spacing system that survives contact with real content, not a hero shot that falls apart on the second page.',
      es: 'Landing pages, sitios de marketing y pantallas de aplicaciones web diseñadas en Figma con retículas, escalas tipográficas y espaciados que resisten el contenido real, no solo una imagen de portada que se desmorona en la siguiente pantalla.',
      fr: 'Landing pages, sites marketing et écrans d\'applications conçus dans Figma sur une grille, une échelle typographique et un système d\'espacement qui résistent aux contenus réels, et non une simple capture d\'en-tête qui s\'effondre dès la deuxième page.',
    },
    sections: [
      {
        heading: { en: 'A system before a screen', es: 'Un sistema antes que una pantalla', fr: 'Un système avant un écran' },
        paragraphs: {
          en: [
            'Most website designs break the moment a second page is added, because the first page was drawn rather than structured. I start with the grid, the type scale and the spacing steps, so every page after the homepage inherits decisions that were already made once.',
            'That means the design file stays usable after handoff. New sections drop into an existing rhythm instead of needing a designer back to redraw them.',
          ],
          es: [
            'La mayoría de diseños web se rompen al añadir una segunda página, porque la portada se dibujó en lugar de estructurarse. Empiezo por la retícula, la escala tipográfica y los intervalos de espaciado, de modo que cada página posterior herede decisiones ya tomadas.',
            'Esto garantiza que el archivo de diseño siga siendo útil tras la entrega. Las nuevas secciones se integran en un ritmo predefinido sin necesidad de rediseñarlas de cero.',
          ],
          fr: [
            'La plupart des designs de sites web se cassent dès l\'ajout d\'une deuxième page, car la page d\'accueil a été dessinée plutôt que structurée. Je commence par la grille, l\'échelle typographique et les pas d\'espacement, pour que chaque page suivante hérite de décisions déjà arrêtées.',
            'Le fichier de design reste ainsi exploitable après la livraison. Les nouvelles sections s\'intègrent dans un rythme existant sans nécessiter l\'intervention d\'un designer pour les redessiner.',
          ],
        },
      },
      {
        heading: { en: 'Responsive as a starting point', es: 'Responsive desde el punto de partida', fr: 'Le responsive comme point de départ' },
        paragraphs: {
          en: [
            'Desktop, tablet and mobile are designed together, not adapted afterwards. Breakpoints are chosen around where the content actually stops working, rather than around device widths that stopped being accurate years ago.',
            'Long headlines, short headlines, missing images, eight nav items instead of four: the layout is tested against the awkward cases while it is still cheap to change them.',
          ],
          es: [
            'Escritorio, tablet y móvil se diseñan conjuntamente, no adaptados a posteriori. Los puntos de ruptura se eligen según el momento en que el contenido lo requiere, no por anchos de pantalla que quedaron obsoletos.',
            'Titulares largos o cortos, imágenes ausentes, menús con ocho elementos en vez de cuatro: el diseño se prueba con casos extremos mientras modificarlos sigue siendo ágil y económico.',
          ],
          fr: [
            'Desktop, tablette et mobile sont conçus ensemble, et non adaptés après coup. Les points de rupture sont définis là où le contenu l\'exige, plutôt qu\'autour de largeurs d\'appareils dépassées.',
            'Titres longs ou courts, images manquantes, huit liens de navigation au lieu de quatre\u00a0: la mise en page est éprouvée face aux cas limites tant qu\'il est simple et rapide de les ajuster.',
          ],
        },
      },
      {
        heading: { en: 'Built to be built', es: 'Pensado para ser desarrollado', fr: 'Conçu pour être développé' },
        paragraphs: {
          en: [
            'Because I also write front-end code, the file that gets handed over is one a developer can read: components rather than detached groups, auto layout that maps to how CSS actually behaves, and tokens for colour, type and spacing.',
            'If you would rather not hand it over at all, the same project can continue into a coded build. See Figma to React build.',
          ],
          es: [
            'Como también programo front-end, el archivo que entrego es legible para los desarrolladores: componentes reales en vez de grupos sueltos, auto layout alineado con el comportamiento de CSS y tokens de color, texto y espacio.',
            'Si prefieres evitar la transferencia entre profesionales, el mismo proyecto puede continuar directamente hacia la fase de desarrollo. Consulta el servicio de Figma a React.',
          ],
          fr: [
            'Parce que j\'écris aussi du code front-end, le fichier transmis est directement lisible par un développeur\u00a0: composants nommés plutôt que groupes isolés, auto layout aligné sur le comportement CSS et tokens de couleur, typographie et espacement.',
            'Si vous préférez éviter toute friction de transmission, le projet peut directement se prolonger en intégration de code. Voir l\'offre Figma vers React.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'Do you design in Figma or another tool?', es: '¿Diseñas en Figma o en otra herramienta?', fr: 'Concevez-vous dans Figma ou un autre outil\u00a0?' },
        answer: {
          en: 'Figma by default, because it is what most development teams already work with and it makes review and handoff straightforward. I also work in Framer, Webflow and Sketch when a project or an existing team is already committed to one of them.',
          es: 'Figma por defecto, ya que es el estándar en la mayoría de equipos técnicos y agiliza la revisión y entrega. También trabajo en Framer, Webflow y Sketch cuando un proyecto o equipo ya utiliza alguno de ellos.',
          fr: 'Figma par défaut, car c\'est l\'outil avec lequel la plupart des équipes techniques travaillent et il simplifie les revues et la transmission. J\'interviens aussi sur Framer, Webflow et Sketch lorsqu\'une équipe est déjà engagée sur l\'un d\'eux.',
        },
      },
      {
        question: { en: 'How many revision rounds are included?', es: '¿Cuántas rondas de revisión se incluyen?', fr: 'Combien d\'itérations sont incluses\u00a0?' },
        answer: {
          en: 'Review happens at each stage rather than in one round at the end, so feedback lands while it is still cheap to act on. The exact number of rounds is written into the scope before the project starts, so neither of us is guessing halfway through.',
          es: 'Las revisiones se realizan en cada fase en lugar de concentrarse al final, permitiendo incorporar feedback cuando los cambios son rápidos de aplicar. El número exacto de rondas se estipula en el alcance antes de empezar para total claridad.',
          fr: 'Les validations se font à chaque étape plutôt qu\'en une seule passe finale, afin d\'intégrer les retours au moment le plus opportun. Le nombre précis d\'itérations est inscrit dans le devis avant de commencer pour éviter toute ambiguïté.',
        },
      },
      {
        question: { en: 'Can you work with our existing brand guidelines?', es: '¿Puedes trabajar con nuestra guía de marca actual?', fr: 'Pouvez-vous travailler à partir de notre charte graphique existante\u00a0?' },
        answer: {
          en: 'Yes. If you already have a logo, palette, typefaces or a brand book, the UI is designed inside those constraints. Where the guidelines do not cover something an interface needs (states, data density, error messaging), I extend them in the same spirit rather than inventing a second visual language.',
          es: 'Sí. Si ya cuentas con logotipo, paleta de colores, tipografías o manual de marca, el diseño se adapta a esas pautas. Cuando la guía no contemple necesidades específicas de la interfaz (estados interactivos, densidad de datos, alertas de error), las amplío manteniendo coherencia estilística.',
          fr: 'Oui. Si vous disposez déjà d\'un logo, d\'une palette, de typographies ou d\'un brand book, l\'interface est conçue dans ce cadre. Lorsque la charte ne couvre pas certains besoins UI (états de survol, densité de données, messages d\'erreur), je l\'enrichis dans le même esprit sans inventer un langage visuel divergent.',
        },
      },
    ],
    relatedProjects: ['stayease', 'ai-agent-landing'],
  },
  {
    slug: 'design-systems',
    pillar: 'design',
    featured: true,
    number: '02',
    title: { en: 'Design systems', es: 'Sistemas de diseño', fr: 'Design systems' },
    description: {
      en: 'Figma design system work: component libraries, tokens and documentation that keep a product team shipping consistent UI instead of rebuilding it every sprint.',
      es: 'Sistemas de diseño en Figma: librerías de componentes, tokens y documentación para que tu equipo lance interfaces coherentes sin reinventar la rueda en cada sprint.',
      fr: 'Création de design systems dans Figma\u00a0: bibliothèques de composants, tokens et documentation pour permettre à votre équipe de livrer des interfaces cohérentes sans tout reconstruire à chaque sprint.',
    },
    deliverables: {
      en: [
        'Figma component library with variants and auto layout',
        'Colour, type and spacing tokens documented for developer handoff',
        'Usage guidelines so new screens stay on-system',
      ],
      es: [
        'Librería de componentes en Figma con variantes y auto layout',
        'Tokens de color, tipografía y espaciado documentados para desarrollo',
        'Guías de uso para que las nuevas pantallas mantengan la coherencia',
      ],
      fr: [
        'Bibliothèque de composants Figma avec variantes et auto layout',
        'Tokens de couleur, typographie et espacement documentés pour les développeurs',
        'Guides d\'utilisation pour que les nouveaux écrans restent alignés sur le système',
      ],
    },
    metaTitle: 'Design System Services in Figma',
    metaDescription:
      'Figma design system design: component libraries with variants, colour, type and spacing tokens, and usage documentation that keeps a product team shipping consistent UI.',
    keywords: [
      'design system services',
      'Figma design system',
      'component library design',
      'design tokens',
      'design system consultant',
      'UI kit design',
    ],
    heading: {
      en: 'Design systems that a team can actually keep using',
      es: 'Sistemas de diseño que tu equipo realmente puede mantener',
      fr: 'Des design systems que votre équipe peut réellement faire vivre',
    },
    intro: {
      en: 'A component library, a token set and the documentation that makes both stick, so the fifth screen your team builds looks like the first, without a designer reviewing every pull request.',
      es: 'Una librería de componentes, un conjunto de tokens y la documentación necesaria para que la quinta pantalla que construya tu equipo sea tan sólida como la primera, sin necesidad de que un diseñador revise cada pull request.',
      fr: 'Une bibliothèque de composants, un jeu de tokens et la documentation qui assure leur adoption, pour que le dixième écran conçu par votre équipe ressemble au premier, sans exiger qu\'un designer valide chaque pull request.',
    },
    sections: [
      {
        heading: { en: 'Audit what already exists', es: 'Auditar lo que ya existe', fr: 'Auditer l\'existant' },
        paragraphs: {
          en: [
            'Almost no product starts from nothing. The first step is usually an inventory of the screens you already have: how many button styles are in production, how many greys, how many spacing values that are nearly but not quite the same.',
            'That inventory is what makes the case for the system internally, and it decides what the system needs to cover first rather than covering everything at once.',
          ],
          es: [
            'Casi ningún producto parte de cero. El primer paso suele ser inventariar las pantallas existentes: cuántos estilos de botón conviven en producción, cuántos tonos de gris o cuántos valores de espaciado casi idénticos pero inconsistentes se están usando.',
            'Ese inventario fundamenta la necesidad del sistema internamente y prioriza qué componentes deben abordarse primero en lugar de intentar abarcarlo todo a la vez.',
          ],
          fr: [
            'Presque aucun produit ne part de zéro. La première étape consiste généralement à dresser l\'inventaire de vos écrans actuels\u00a0: combien de styles de boutons sont en production, combien de nuances de gris, combien d\'espacements presque identiques mais divergents coexistent.',
            'Cet inventaire justifie l\'intérêt du design system en interne et détermine les composants prioritaires plutôt que de vouloir tout couvrir d\'un coup.',
          ],
        },
      },
      {
        heading: { en: 'Tokens first, components second', es: 'Tokens primero, componentes después', fr: 'Les tokens d\'abord, les composants ensuite' },
        paragraphs: {
          en: [
            'Colour, type, spacing and radius are defined as tokens before any component is drawn, so a change to the scale propagates instead of being repeated forty times by hand.',
            'Components are then built on those tokens with variants and auto layout, structured to match how they will be implemented in code, which keeps the Figma library and the codebase from drifting into two different systems with the same names.',
          ],
          es: [
            'El color, la tipografía, el espaciado y el radio de borde se definen como tokens antes de crear cualquier componente, de modo que cualquier ajuste se propague automáticamente sin tareas manuales repetitivas.',
            'Los componentes se construyen sobre esos tokens con variantes y auto layout, reflejando fielmente su implementación en código para evitar que Figma y el repositorio diverjan.',
          ],
          fr: [
            'Couleurs, typographie, espacements et arrondis sont définis sous forme de tokens avant de dessiner le moindre composant, assurant que toute modification se propage automatiquement sans retouches manuelles fastidieuses.',
            'Les composants sont ensuite construits sur ces tokens avec variantes et auto layout, structurés à l\'identique de leur future intégration pour éviter tout écart entre Figma et le code.',
          ],
        },
      },
      {
        heading: { en: 'Documentation people will read', es: 'Documentación que la gente sí lee', fr: 'Une documentation que l\'on consulte vraiment' },
        paragraphs: {
          en: [
            'A component nobody knows the rules for gets rebuilt. Each part of the library ships with what it is for, when to reach for something else, and the states it already covers.',
            'The goal is that a developer or a new designer can answer their own question from the file, so the system outlives whoever set it up.',
          ],
          es: [
            'Un componente cuyas reglas se desconocen termina siendo rediseñado innecesariamente. Cada elemento de la librería se entrega con su propósito, alternativas de uso y los estados interactivos contemplados.',
            'El objetivo es que cualquier desarrollador o nuevo diseñador resuelva sus dudas directamente en el archivo, haciendo el sistema sostenible a largo plazo.',
          ],
          fr: [
            'Un composant dont on ignore les règles finit par être recréé. Chaque élément de la bibliothèque est livré avec sa raison d\'être, ses cas d\'usage et l\'ensemble de ses états couverts.',
            'L\'objectif est qu\'un développeur ou un nouveau designer trouve lui-même ses réponses dans le fichier, pérennisant ainsi le système au-delà de ses créateurs.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'We already have a Figma file. Do you start over?',
          es: 'Ya tenemos un archivo en Figma. ¿Empiezas de cero?',
          fr: 'Nous avons déjà un fichier Figma. Repartez-vous de zéro\u00a0?',
        },
        answer: {
          en: 'No, not by default. Most engagements start by auditing and consolidating what is already there, because an existing file carries decisions your team has already agreed on. A rebuild only makes sense when the existing file has no consistent structure to build on, and that is a conclusion from the audit rather than an assumption going in.',
          es: 'No, salvo que sea necesario. La mayoría de proyectos parten de auditar y consolidar el material existente, ya que conserva decisiones validadas por tu equipo. Una reconstrucción completa solo se justifica si la base carece de estructura aprovechable, conclusión que debe surgir de la auditoría y no de un prejuicio inicial.',
          fr: 'Non, pas par principe. La plupart des missions démarrent par l\'audit et la consolidation de l\'existant, car vos fichiers actuels intègrent des choix déjà arbitrés par votre équipe. Une refonte totale n\'a de sens que si la base manque de cohérence exploitable, ce qui découle de l\'audit et non d\'un a priori.',
        },
      },
      {
        question: {
          en: 'Do you hand over the system in code as well as Figma?',
          es: '¿Entregas el sistema en código además de en Figma?',
          fr: 'Livrez-vous le système en code en plus de Figma\u00a0?' ,
        },
        answer: {
          en: 'The Figma library and documented tokens are the standard deliverable. On projects that call for it I also build the components in React with Tailwind CSS, so the coded library and the design library ship from the same token set. That is scoped and quoted separately.',
          es: 'La librería en Figma y los tokens documentados son el entregable habitual. En proyectos que lo soliciten, también implemento los componentes en React con Tailwind CSS para sincronizar diseño y código desde los mismos tokens. Este desarrollo se presupuesta de forma independiente.',
          fr: 'La bibliothèque Figma et les tokens documentés constituent le livrable standard. Pour les projets qui le requièrent, je développe également les composants en React avec Tailwind CSS pour un alignement parfait sur les mêmes tokens. Cette prestation fait l\'objet d\'un devis distinct.',
        },
      },
      {
        question: { en: 'How do you stop the system going stale?', es: '¿Cómo evitas que el sistema quede obsoleto?', fr: 'Comment éviter que le design system ne devienne obsolète\u00a0?' },
        answer: {
          en: 'By keeping it small enough to maintain and documenting the rules for extending it, rather than trying to anticipate every future component. Systems rot when they cover things nobody uses and miss the thing someone needed on a deadline.',
          es: 'Manteniéndolo lo bastante conciso para ser gestionable y documentando las pautas para extenderlo, en lugar de predecir cada componente futuro. Los sistemas se degradan cuando acumulan elementos prescindibles pero descuidan lo que el equipo necesita con urgencia.',
          fr: 'En le gardant suffisamment concis pour être maintenable et en documentant les règles d\'extension, plutôt qu\'en anticipant chaque composant futur. Les systèmes périclitent lorsqu\'ils s\'encombrent d\'éléments inutilisés tout en manquant ce dont l\'équipe a besoin dans l\'urgence.',
        },
      },
    ],
    relatedProjects: ['expenza', 'zenith', 'crave'],
  },
  {
    slug: 'mobile-app-design',
    pillar: 'design',
    featured: true,
    number: '03',
    title: { en: 'Mobile app design', es: 'Diseño de apps móviles', fr: 'Design d\'applications mobiles' },
    description: {
      en: 'iOS and Android mobile app UI designed in Figma: navigation patterns, interactive states and components built to native platform guidelines.',
      es: 'Diseño UI para apps móviles iOS y Android en Figma: patrones de navegación, estados interactivos y componentes adaptados a las guías nativas de cada plataforma.',
      fr: 'Design UI d\'applications mobiles iOS et Android dans Figma\u00a0: modèles de navigation, états interactifs et composants conformes aux directives natives de chaque plateforme.',
    },
    deliverables: {
      en: [
        'iOS and Android screen designs in Figma',
        'Interactive prototype for testing and stakeholder reviews',
        'Component library with states, edge cases and icon assets',
      ],
      es: [
        'Diseño de pantallas para iOS y Android en Figma',
        'Prototipo interactivo para pruebas de usuario y revisión de stakeholders',
        'Librería de componentes con estados, casos extremos y assets de iconos',
      ],
      fr: [
        'Maquettes d\'écrans iOS et Android dans Figma',
        'Prototype interactif pour les tests utilisateurs et les revues de parties prenantes',
        'Bibliothèque de composants avec états, cas limites et assets d\'icônes',
      ],
    },
    metaTitle: 'Mobile App UI/UX Design Services for iOS & Android',
    metaDescription:
      'Freelance mobile app UI/UX design in Figma: iOS and Android screens, native navigation patterns, interactive prototypes and complete component libraries.',
    keywords: [
      'mobile app design services',
      'iOS app designer',
      'Android UI design',
      'mobile UI UX designer',
      'Figma mobile app design',
      'app prototype design',
    ],
    heading: {
      en: 'Mobile app UI that feels native on both platforms',
      es: 'UI móvil que se siente nativa en ambas plataformas',
      fr: 'Une UI mobile naturelle et fluide sur iOS et Android',
    },
    intro: {
      en: 'Mobile interfaces designed in Figma to Human Interface Guidelines and Material Design, with real navigation patterns, proper tap targets and the edge cases accounted for before a developer writes the first screen.',
      es: 'Interfaces móviles diseñadas en Figma respetando las Human Interface Guidelines y Material Design, con patrones de navegación reales, áreas táctiles óptimas y casos límite resueltos antes de programar la primera pantalla.',
      fr: 'Interfaces mobiles conçues dans Figma selon les Human Interface Guidelines et Material Design, avec de vrais modèles de navigation, des zones de frappe adaptées et des cas limites anticipés avant la moindre ligne de code.',
    },
    sections: [
      {
        heading: { en: 'Respect the platform conventions', es: 'Respetar las convenciones de cada plataforma', fr: 'Respecter les conventions de chaque plateforme' },
        paragraphs: {
          en: [
            'iOS and Android have different navigation models, back button behaviours, bottom sheets and modal patterns. Designing one screen and stretching it across both is the easiest way to make an app feel foreign on both.',
            'The designs use platform-native patterns where they help muscle memory and custom UI where your product needs its own identity.',
          ],
          es: [
            'iOS y Android tienen modelos de navegación, comportamientos de retroceso, modales y bottom sheets diferentes. Diseñar una única pantalla y replicarla sin ajustes es la vía más rápida para que la app resulte extraña en ambos sistemas.',
            'Los diseños emplean patrones nativos para aprovechar los hábitos del usuario e interfaces a medida donde tu producto requiera identidad propia.',
          ],
          fr: [
            'iOS et Android disposent de modèles de navigation, de comportements de retour, de modales et de bottom sheets distincts. Concevoir un seul écran et le dupliquer tel quel est le moyen le plus sûr de rendre l\'application peu intuitive sur les deux plateformes.',
            'Les maquettes s\'appuient sur les composants natifs pour exploiter les réflexes des utilisateurs et sur une UI personnalisée là où votre produit doit affirmer son identité.',
          ],
        },
      },
      {
        heading: { en: 'Design for the thumb, not the cursor', es: 'Diseñar para el pulgar, no para el cursor', fr: 'Concevoir pour le pouce, pas pour la souris' },
        paragraphs: {
          en: [
            'Tap targets that meet accessibility minimums (at least 44x44 points), critical actions placed within easy thumb reach, and destructive actions protected against accidental taps.',
            'Every interactive element is given clear pressed, disabled and loading states so the user is never left wondering whether a tap registered.',
          ],
          es: [
            'Áreas táctiles que cumplen los estándares de accesibilidad (mínimo 44x44 puntos), acciones críticas al alcance del pulgar y acciones destructivas protegidas frente a pulsaciones accidentales.',
            'Cada elemento interactivo cuenta con estados claros de pulsado, deshabilitado y carga para que el usuario nunca dude si su toque fue registrado.',
          ],
          fr: [
            'Des cibles tactiles conformes aux exigences d\'accessibilité (au moins 44x44 points), les actions clés à portée directe du pouce et les actions destructives sécurisées contre les frappes involontaires.',
            'Chaque élément interactif dispose d\'états pressés, désactivés et de chargement explicites afin que l\'utilisateur sache immédiatement si son geste a été pris en compte.',
          ],
        },
      },
      {
        heading: { en: 'Prototypes that answer real questions', es: 'Prototipos que responden preguntas reales', fr: 'Des prototypes qui répondent aux vraies questions' },
        paragraphs: {
          en: [
            'Clickable Figma prototypes let you test transitions, sheet behaviours and flow logic with stakeholders and users before engineering begins.',
            'Handoff includes redlines, exportable assets in 1x/2x/3x and SVG, and component documentation ready for React Native, Flutter or native iOS/Android teams.',
          ],
          es: [
            'Los prototipos interactivos en Figma permiten validar transiciones, paneles deslizantes y lógica de flujos con el equipo y usuarios reales antes de iniciar el desarrollo.',
            'La entrega incluye especificaciones, assets exportables en 1x/2x/3x y SVG, y documentación de componentes lista para equipos de React Native, Flutter, Swift o Kotlin.',
          ],
          fr: [
            'Les prototypes Figma cliquables permettent de tester transitions, volets coulissants et logique de parcours avec les équipes et utilisateurs avant d\'engager le développement.',
            'La livraison comprend les spécifications détaillées, les assets exportables en 1x/2x/3x et SVG, ainsi que la documentation des composants pour React Native, Flutter ou équipes natives.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'Do you build native mobile apps too?', es: '¿También desarrollas aplicaciones móviles nativas?', fr: 'Développez-vous également les applications mobiles natives\u00a0?' },
        answer: {
          en: 'No. I focus on UI/UX design for mobile applications. For the build stage, I deliver complete Figma design files with documented tokens, assets and component specs ready for your mobile development team (React Native, Flutter, Swift or Kotlin).',
          es: 'No. Me especializo en diseño UI/UX para aplicaciones móviles. Para la fase de desarrollo, entrego archivos completos en Figma con tokens documentados, assets y especificaciones listas para tu equipo móvil (React Native, Flutter, Swift o Kotlin).',
          fr: 'Non. Je me concentre sur le design UI/UX des applications mobiles. Pour la partie développement, je fournis des fichiers Figma complets avec tokens documentés, assets et spécifications prêts pour votre équipe technique (React Native, Flutter, Swift ou Kotlin).',
        },
      },
      {
        question: { en: 'Can you design for both iOS and Android?', es: '¿Puedes diseñar tanto para iOS como para Android?', fr: 'Pouvez-vous concevoir à la fois pour iOS et Android\u00a0?' },
        answer: {
          en: 'Yes. Most mobile projects cover both platforms, starting with a primary platform (usually iOS or Android depending on your audience) and adapting platform-specific patterns for the second.',
          es: 'Sí. La mayoría de proyectos abarcan ambas plataformas, comenzando por la principal (iOS o Android según tu audiencia) y adaptando los patrones específicos al segundo sistema.',
          fr: 'Oui. La majorité des projets mobiles ciblent les deux plateformes, en débutant par la plateforme prioritaire (iOS ou Android selon votre cible) avant d\'adapter les spécificités sur la seconde.',
        },
      },
      {
        question: { en: 'How do you handle dark mode for mobile?', es: '¿Cómo abordas el modo oscuro en móvil?', fr: 'Comment gérez-vous le mode sombre sur mobile\u00a0?' },
        answer: {
          en: 'Both light and dark modes are designed against a unified semantic token system. Dark mode is not an afterthought inversion; it is designed with intentional contrast, elevation shadows and readable typography.',
          es: 'Tanto el modo claro como el oscuro se diseñan sobre un sistema unificado de tokens semánticos. El modo oscuro no es una simple inversión automática; se concibe con contraste deliberado, sombras de elevación y legibilidad óptima.',
          fr: 'Les modes clair et sombre sont tous deux construits sur un système unifié de tokens sémantiques. Le mode sombre n\'est pas une simple inversion\u00a0; il est pensé avec des contrastes soignés, des élévations maîtrisées et une typographie parfaitement lisible.',
        },
      },
    ],
    relatedProjects: ['expenza', 'zenith', 'crave', 'cleaning-services-app'],
  },
  {
    slug: 'saas-product-design',
    pillar: 'design',
    featured: true,
    number: '04',
    title: { en: 'SaaS product design', es: 'Diseño de producto SaaS', fr: 'Design de produit SaaS' },
    description: {
      en: 'Complex dashboards, data tables, settings and user flows designed in Figma for web applications where clarity under heavy data is what keeps users from churning.',
      es: 'Dashboards complejos, tablas de datos, paneles de configuración y flujos de usuario diseñados en Figma para aplicaciones web donde la claridad con alta densidad de información fideliza al usuario.',
      fr: 'Tableaux de bord complexes, tableaux de données, paramètres et parcours utilisateurs conçus dans Figma pour des applications web où la clarté face à des volumes de données denses fidélise les utilisateurs.',
    },
    deliverables: {
      en: [
        'Dashboard and data visualisation screen design',
        'Complex forms, settings panels and multi-step workflow UI',
        'Empty, loading, error and success states for every view',
      ],
      es: [
        'Diseño de dashboards y pantallas de visualización de datos',
        'Formularios complejos, paneles de ajustes y flujos multipaso',
        'Estados vacíos, de carga, error y éxito para cada vista',
      ],
      fr: [
        'Design de tableaux de bord et de visualisation de données',
        'Formulaires complexes, panneaux de configuration et flux multi-étapes',
        'États vides, de chargement, d\'erreur et de succès pour chaque vue',
      ],
    },
    metaTitle: 'SaaS UI/UX Design Services for Web Applications',
    metaDescription:
      'Freelance SaaS product design: dashboard UI, data tables, complex workflow design and complete component systems for B2B and B2C web applications.',
    keywords: [
      'SaaS product design',
      'dashboard UI design',
      'B2B SaaS designer',
      'web application design',
      'SaaS UX consultant',
      'data table UI design',
    ],
    heading: {
      en: 'SaaS product design that makes complex workflows feel obvious',
      es: 'Diseño de producto SaaS que simplifica los flujos de trabajo más complejos',
      fr: 'Un design de produit SaaS qui rend évidentes les tâches complexes',
    },
    intro: {
      en: 'Dashboards, data tables, filtering systems and settings panels designed for the real density of B2B applications, where a product lives or dies on whether users can get their work done without a tutorial.',
      es: 'Dashboards, tablas de datos, sistemas de filtrado y paneles de configuración concebidos para la densidad real de aplicaciones B2B, donde el éxito radica en que el usuario complete sus tareas sin necesidad de tutoriales.',
      fr: 'Tableaux de bord, tables de données, systèmes de filtres et panneaux de réglages conçus pour la densité réelle des applications B2B, où le succès dépend de la capacité des utilisateurs à accomplir leurs tâches sans manuel.',
    },
    sections: [
      {
        heading: { en: 'Density without clutter', es: 'Densidad sin saturación', fr: 'De la densité sans encombrement' },
        paragraphs: {
          en: [
            'B2B users need information density, but consumer design trends often push for vast whitespace and oversized cards that force endless scrolling. I balance scannable hierarchy with compact layout patterns so users see what matters immediately.',
            'Tables support sorting, filtering, inline editing, batch actions and pagination from day one, not as post-launch patches.',
          ],
          es: [
            'Los usuarios B2B necesitan densidad informativa, pero las modas de diseño de consumo a menudo imponen espacios vacíos desmedidos y tarjetas gigantescas que obligan a un scroll interminable. Equilibro jerarquías visuales claras con patrones compactos para que el usuario encuentre lo esencial al instante.',
            'Las tablas integran ordenación, filtros, edición en línea, acciones por lotes y paginación desde el primer día, no como parches posteriores.',
          ],
          fr: [
            'Les utilisateurs B2B recherchent une bonne densité d\'information, mais les tendances grand public imposent souvent des espaces vides excessifs et des cartes démesurées obligeant à défiler sans fin. J\'équilibre la hiérarchie visuelle avec des modèles compacts pour afficher immédiatement l\'essentiel.',
            'Les tableaux intègrent tri, filtres, édition en ligne, actions groupées et pagination dès la conception, et non comme des correctifs après coup.',
          ],
        },
      },
      {
        heading: { en: 'Every state designed, not just the happy path', es: 'Cada estado diseñado, no solo el camino ideal', fr: 'Chaque état est conçu, pas seulement le cas idéal' },
        paragraphs: {
          en: [
            'A SaaS interface spends most of its life in non-ideal states: empty accounts, loading skeletons, validation errors, permission walls and partial data. Leaving these to developer improvisation creates an inconsistent experience.',
            'Every screen is delivered with its full state matrix so the development team has unambiguous guidance for every condition.',
          ],
          es: [
            'Una interfaz SaaS pasa la mayor parte del tiempo en estados no ideales: cuentas vacías, skeletons de carga, errores de validación, límites de permisos y datos parciales. Dejar estos casos a la improvisación técnica genera inconsistencias.',
            'Cada pantalla se entrega con su matriz completa de estados para que el equipo de desarrollo disponga de pautas claras ante cualquier situación.',
          ],
          fr: [
            'Une interface SaaS passe l\'essentiel de sa vie dans des états intermédiaires\u00a0: comptes vides, squelettes de chargement, erreurs de validation, restrictions de droits et données partielles. Les abandonner à l\'improvisation produit une expérience incohérente.',
            'Chaque écran est livré avec sa matrice complète d\'états pour guider les développeurs de manière univoque en toute circonstance.',
          ],
        },
      },
      {
        heading: { en: 'Navigation architectures that scale', es: 'Arquitecturas de navegación escalables', fr: 'Des architectures de navigation évolutives' },
        paragraphs: {
          en: [
            'SaaS products grow quickly. A navigation pattern that works for four features falls apart at twelve. I design sidebar, tab and sub-navigation systems that accommodate new modules without requiring a redesign every six months.',
            'Breadcrumbs, search integrations and keyboard shortcuts are baked in to support power users who spend hours in the tool every day.',
          ],
          es: [
            'Los productos SaaS evolucionan con rapidez. Una navegación apta para cuatro módulos colapsa al llegar a doce. Diseño barras laterales, pestañas y subnavegaciones capaces de integrar nuevas funcionalidades sin exigir un rediseño semestral.',
            'Las migas de pan, la búsqueda integrada y los atajos de teclado se contemplan de serie para optimizar la productividad de los usuarios avanzados.',
          ],
          fr: [
            'Les produits SaaS évoluent vite. Une navigation pensée pour quatre fonctionnalités ne fonctionne plus à douze. Je conçois des barres latérales, onglets et sous-navigations qui accueillent de nouveaux modules sans exiger une refonte tous les six mois.',
            'Fils d\'Ariane, recherche rapide et raccourcis clavier sont intégrés pour soutenir les utilisateurs intensifs qui travaillent quotidiennement sur l\'outil.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'Can you work within our existing design system?', es: '¿Puedes trabajar con nuestro sistema de diseño existente?', fr: 'Pouvez-vous travailler avec notre design system existant\u00a0?' },
        answer: {
          en: 'Yes. I regularly work with established Figma libraries, adopting your existing components, colour variables and layout patterns while extending them when new product requirements demand new patterns.',
          es: 'Sí. Trabajo habitualmente con librerías consolidadas en Figma, aprovechando componentes, variables y retículas existentes, y ampliándolos cuando las nuevas funcionalidades del producto lo requieren.',
          fr: 'Oui. J\'interviens régulièrement sur des bibliothèques Figma établies, en reprenant vos composants, variables et grilles existants, tout en les enrichissant lorsque de nouveaux besoins produit l\'exigent.',
        },
      },
      {
        question: { en: 'How do you handle complex data visualisation?', es: '¿Cómo abordas la visualización de datos complejos?', fr: 'Comment traitez-vous la visualisation de données complexes\u00a0?' },
        answer: {
          en: 'Charts and graphs are designed with accessible colour palettes, clear legends, tooltip states, empty states and responsive adaptations for smaller viewports, using patterns that map to libraries like Recharts or Chart.js.',
          es: 'Los gráficos se conciben con paletas accesibles, leyendas legibles, estados de tooltip, pantallas sin datos y adaptaciones responsive, empleando patrones alineados con librerías como Recharts o Chart.js.',
          fr: 'Les graphiques sont conçus avec des palettes contrastées, des légendes claires, des infobulles détaillées, des états vides et des déclinaisons responsives, basés sur des modèles compatibles avec Recharts ou Chart.js.',
        },
      },
      {
        question: { en: 'Do you help with user onboarding flows?', es: '¿Ayudas a diseñar flujos de onboarding para usuarios?', fr: 'Concevez-vous également les parcours d\'onboarding\u00a0?' },
        answer: {
          en: 'Yes. Onboarding is critical to SaaS retention. I design empty-state nudges, progressive disclosure patterns, checklist widgets and setup wizards that guide new signups to their "aha moment" quickly.',
          es: 'Sí. El onboarding es clave para la retención en SaaS. Diseño llamadas a la acción en estados vacíos, revelación progresiva, widgets con checklists y asistentes de configuración para llevar al usuario a su primer logro con rapidez.',
          fr: 'Oui. L\'onboarding est déterminant pour la rétention SaaS. Je conçois des incitations sur états vides, de la divulgation progressive, des checklists interactives et des assistants de configuration pour guider l\'utilisateur vers sa première valeur rapidement.',
        },
      },
    ],
    relatedProjects: ['zenith', 'stayease'],
  },
  {
    slug: 'ux-research-wireframing',
    pillar: 'design',
    number: '05',
    title: { en: 'UX research & wireframing', es: 'Investigación UX y wireframing', fr: 'Recherche UX & wireframing' },
    description: {
      en: 'User flows, wireframes and prototypes that test structure and validate the idea in Figma before anyone writes a line of production code.',
      es: 'Flujos de usuario, wireframes y prototipos para evaluar la estructura y validar la idea en Figma antes de escribir una sola línea de código.',
      fr: 'Parcours utilisateurs, wireframes et prototypes pour tester la structure et valider l\'idée dans Figma avant d\'écrire la moindre ligne de code.',
    },
    deliverables: {
      en: [
        'Low-fidelity wireframes to test structure before visual design',
        'User flow diagrams mapping every screen and decision point',
        'Clickable prototypes for stakeholder and user feedback',
      ],
      es: [
        'Wireframes de baja fidelidad para validar la estructura antes del diseño visual',
        'Diagramas de flujo de usuario con cada pantalla y punto de decisión',
        'Prototipos interactivos para recibir feedback de usuarios y stakeholders',
      ],
      fr: [
        'Wireframes basse fidélité pour valider la structure avant le design visuel',
        'Diagrammes de parcours utilisateur cartographiant chaque écran et décision',
        'Prototypes cliquables pour recueillir les retours d\'utilisateurs et de parties prenantes',
      ],
    },
    metaTitle: 'UX Research, Wireframing & Prototyping',
    metaDescription:
      'User flows, low-fidelity wireframes and clickable prototypes that test whether the structure works, before visual design starts and long before anything is built.',
    keywords: [
      'UX research services',
      'wireframing services',
      'user flow design',
      'clickable prototype design',
      'usability testing',
      'information architecture',
    ],
    heading: {
      en: 'Wireframes and prototypes that answer the question before the build does',
      es: 'Wireframes y prototipos que resuelven dudas antes de iniciar el desarrollo',
      fr: 'Des wireframes et prototypes qui valident les choix avant le développement',
    },
    intro: {
      en: 'Flow maps, low-fidelity wireframes and clickable prototypes that test whether the structure of a product works, at the stage where being wrong costs a Figma edit rather than a sprint.',
      es: 'Mapas de flujo, wireframes de baja fidelidad y prototipos navegables para comprobar la solidez estructural del producto, cuando corregir un error cuesta una edición en Figma y no un sprint entero.',
      fr: 'Cartographies de parcours, wireframes basse fidélité et prototypes cliquables pour tester l\'efficacité structurelle du produit, au stade où un ajustement coûte une simple retouche Figma plutôt qu\'un sprint complet.',
    },
    sections: [
      {
        heading: { en: 'Map the flow, find the missing screens', es: 'Mapear el flujo, detectar pantallas omitidas', fr: 'Cartographier le parcours, révéler les écrans manquants' },
        paragraphs: {
          en: [
            'A flow diagram is the cheapest deliverable on this page and usually the most valuable. Drawing every screen and decision point end to end is what exposes the branches nobody scoped: what happens when the payment fails, when the invite expires, when two people edit the same record.',
            'Finding those in a diagram costs an afternoon. Finding them in QA costs a release.',
          ],
          es: [
            'Un diagrama de flujo es el entregable más ágil y a menudo el más valioso. Trazar cada pantalla y punto de decisión de extremo a extremo saca a la luz los casos que nadie contempló: qué ocurre si el pago falla, si la invitación caduca o si dos personas editan el mismo registro.',
            'Detectar estos casos en un diagrama requiere una tarde; descubrirlos en control de calidad retrasa el lanzamiento.',
          ],
          fr: [
            'Le schéma de flux est le livrable le plus direct et souvent le plus précieux. Tracer chaque écran et point de décision de bout en bout met en lumière les embranchements oubliés\u00a0: que se passe-t-il en cas d\'échec de paiement, d\'invitation expirée ou d\'édition simultanée.',
            'Identifier ces scénarios sur un schéma prend un après-midi\u00a0; les découvrir en phase de recette compromet la date de mise en ligne.',
          ],
        },
      },
      {
        heading: { en: 'Low fidelity on purpose', es: 'Baja fidelidad de forma deliberada', fr: 'La basse fidélité par choix' },
        paragraphs: {
          en: [
            'Wireframes are deliberately grey and unstyled, because a polished mockup changes the conversation. Show a finished-looking screen and feedback is about the button colour; show a wireframe and feedback is about whether the step belongs there at all.',
            'It also keeps the cost of changing your mind low, which is the entire point of doing this stage separately.',
          ],
          es: [
            'Los wireframes son deliberadamente monocromáticos y sobrios, porque una maqueta pulida desvía la conversación. Si muestras una pantalla acabada, el debate gira en torno al color del botón; si muestras un wireframe, el debate se centra en si ese paso aporta valor.',
            'Esto mantiene muy bajo el coste de cambiar de opinión, que es el verdadero propósito de separar esta fase.',
          ],
          fr: [
            'Les wireframes sont volontairement sobres et en nuances de gris, car une maquette léchée déplace la discussion. Face à un écran finalisé, les retours portent sur la couleur du bouton\u00a0; face à un wireframe, ils portent sur la pertinence même de l\'étape.',
            'Cela préserve également la flexibilité pour faire évoluer les idées, ce qui est la raison d\'être de cette étape préliminaire.',
          ],
        },
      },
      {
        heading: { en: 'Test it with people who are not you', es: 'Probar con personas ajenas al equipo', fr: 'Tester auprès de vrais utilisateurs' },
        paragraphs: {
          en: [
            'A clickable prototype turns opinion into observation. Watching five people attempt the main task tells you more than a stakeholder review, and it tells you before the estimate has been written.',
            'What comes out is a prioritised list of what to fix, with the structure already validated, which is what the visual design and build stages are then built on.',
          ],
          es: [
            'Un prototipo interactivo convierte las suposiciones en observaciones directas. Ver a cinco usuarios intentar completar la tarea principal aporta más certezas que diez reuniones internas, y lo hace antes de presupuestar el desarrollo.',
            'El resultado es una lista priorizada de mejoras sobre una base ya validada, sobre la que se asientan el diseño visual y la programación.',
          ],
          fr: [
            'Un prototype interactif transforme les intuitions en observations concrètes. Observer cinq personnes réaliser la tâche principale apporte plus qu\'une réunion de cadrage, et ce avant même d\'engager le moindre devis de développement.',
            'Le livrable final est une liste ordonnée d\'ajustements sur une structure déjà éprouvée, socle solide pour le design visuel et le code.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Can this be a standalone project, or does it lead into design?',
          es: '¿Puede ser un proyecto independiente o enlaza con el diseño visual?',
          fr: 'Est-ce un projet autonome ou une étape vers le design visuel\u00a0?',
        },
        answer: {
          en: 'Either. Plenty of engagements are research and wireframing only, delivered as flows, wireframes and a findings summary your own team takes forward. It also works as the first phase of a full design project, in which case the wireframes feed straight into the UI stage.',
          es: 'Ambas opciones son habituales. Muchos encargos se limitan a investigación y wireframing, entregando flujos, esquemas y conclusiones para que tu equipo continúe. También funciona como la fase inicial de un proyecto integral, donde los wireframes pasan de inmediato a diseño UI.',
          fr: 'Les deux approches sont courantes. De nombreuses missions se limitent à la recherche et au wireframing, livrant flux, schémas et synthèse d\'enseignements pour votre équipe interne. C\'est aussi la première étape idéale d\'un projet complet, alimentant directement la phase UI.',
        },
      },
      {
        question: { en: 'How many users do you test with?', es: '¿Con cuántos usuarios realizas las pruebas?', fr: 'Avec combien d\'utilisateurs testez-vous\u00a0?' },
        answer: {
          en: 'Usually a small number. Most usability problems surface in the first handful of sessions, and testing more people tends to confirm what the first few already showed rather than reveal something new. The exact number is agreed per project against what you are trying to learn.',
          es: 'Generalmente con un grupo reducido. La mayoría de los problemas de usabilidad emergen en las primeras 5 sesiones, y ampliar el grupo suele confirmar lo observado más que aportar nuevos hallazgos. El número exacto se define según los objetivos del proyecto.',
          fr: 'Généralement un petit groupe. La majorité des freins d\'usage apparaissent lors des 5 premières sessions\u00a0; élargir le panel confirme les observations initiales plus qu\'il ne révèle de nouveaux éléments. Le nombre exact est ajusté selon vos objectifs d\'apprentissage.',
        },
      },
      {
        question: {
          en: 'We have no research at all. Is that a problem?',
          es: 'No tenemos ningún estudio previo. ¿Es un problema?',
          fr: 'Nous n\'avons aucune recherche préalable. Est-ce un frein\u00a0?',
        },
        answer: {
          en: 'No. It is the normal starting point. Existing analytics, support tickets or sales call notes help if you have them, but the flow mapping and prototype testing work without any of it. Starting from nothing is far better than starting from assumptions nobody has checked.',
          es: 'En absoluto; es el punto de partida más habitual. Métricas previas, tickets de soporte o notas comerciales suman si se tienen, pero el mapeo de flujos y los prototipos funcionan perfectamente desde cero. Empezar sin datos previos es preferible a basarse en suposiciones no verificadas.',
          fr: 'Non, c\'est le point de départ classique. Des données analytiques, tickets de support ou retours commerciaux sont utiles s\'ils existent, mais la cartographie des flux et les tests de prototypes fonctionnent parfaitement sans eux. Partir de zéro vaut mieux que s\'appuyer sur des hypothèses non vérifiées.',
        },
      },
    ],
    relatedProjects: ['cleaning-services-app', 'crave'],
  },
  {
    slug: 'ui-ux-audit',
    pillar: 'design',
    number: '06',
    title: { en: 'UI/UX audit', es: 'Auditoría UI/UX', fr: 'Audit UI/UX' },
    description: {
      en: 'A structured review of the product you already have: where people hesitate, what is causing it, and a prioritised fix list you can act on without a full redesign.',
      es: 'Revisión estructurada de tu producto actual: puntos de fricción, causas subyacentes y una lista priorizada de mejoras aplicables sin rehacer todo el diseño.',
      fr: 'Une analyse méthodique de votre produit actuel\u00a0: points de friction, causes identifiées et plan d\'action priorisé sans exiger une refonte complète.',
    },
    deliverables: {
      en: [
        'Heuristic review of the flows and screens that carry the most traffic',
        'Findings written up with the screen, the problem and the reason',
        'A prioritised fix list, ordered by impact against effort',
      ],
      es: [
        'Evaluación heurística de las pantallas y flujos de mayor tráfico',
        'Informe detallado con capturas, problemas detectados y justificación',
        'Lista de mejoras priorizadas según la relación impacto / esfuerzo',
      ],
      fr: [
        'Évaluation heuristique des parcours et écrans stratégiques les plus visités',
        'Rapport détaillé avec capture d\'écran, problème identifié et justification',
        'Plan d\'action priorisé, classé selon le ratio impact / effort',
      ],
    },
    metaTitle: 'UI/UX Audit and Usability Review',
    metaDescription:
      'A structured UI/UX audit of your website or product: heuristic review of the real flows, annotated findings, and a prioritised fix list you can act on without a redesign.',
    keywords: [
      'UI UX audit',
      'usability review service',
      'website UX audit',
      'heuristic evaluation',
      'product design review',
      'UX audit for SaaS',
    ],
    heading: {
      en: 'A UI/UX audit that ends in a fix list, not a slide deck',
      es: 'Una auditoría UI/UX que concluye en un plan de acción, no en diapositivas teóricas',
      fr: 'Un audit UI/UX qui aboutit à une feuille de route concrète, pas à une présentation théorique',
    },
    intro: {
      en: 'A structured review of the product you already have — where people hesitate, what is causing it, and what to change first — delivered as a prioritised list your team can start on next sprint.',
      es: 'Una revisión analítica de tu producto actual —dónde dudan los usuarios, qué lo provoca y qué corregir primero— entregada como una lista priorizada que tu equipo puede implementar de inmediato.',
      fr: 'Un examen méthodique de votre produit en ligne — où les utilisateurs hésitent, pourquoi, et par quoi commencer — livré sous forme de plan d\'action activable dès le prochain sprint.',
    },
    sections: [
      {
        heading: { en: 'Most redesigns start as an audit question', es: 'La mayoría de rediseños empiezan como una duda de auditoría', fr: 'La plupart des refontes partent d\'une question d\'audit' },
        paragraphs: {
          en: [
            '"Should we redesign?" is almost never the real question. The real one is which parts of the product are costing you users, and a rebuild is an expensive way to find out — it changes everything at once, including the parts that were already working.',
            'An audit separates the two before any money goes into design. Plenty of them end with a handful of targeted changes rather than a redesign, which is a good outcome even though it is the smaller invoice.',
          ],
          es: [
            '«¿Deberíamos rediseñar?» casi nunca es la pregunta acertada. La cuestión real es qué áreas concretas del producto te hacen perder usuarios, y rehacerlo todo resulta una forma muy costosa de averiguarlo al alterar partes que ya funcionaban bien.',
            'Una auditoría separa lo válido de lo deficiente antes de invertir en diseño. Muchas auditorías se resuelven con un puñado de cambios específicos en vez de un rediseño total, lo cual representa un excelente resultado.',
          ],
          fr: [
            '«\u00a0Faut-il refondre le site\u00a0?\u00a0» n\'est presque jamais la bonne question. La vraie question est de savoir quelles parties vous coûtent des utilisateurs, et tout reconstruire est une manière très coûteuse de le découvrir car cela modifie aussi ce qui marchait bien.',
            'Un audit sépare le bon grain de l\'ivraie avant d\'investir dans le design. De nombreuses missions se concluent par quelques ajustements ciblés plutôt qu\'une refonte intégrale, ce qui est une excellente issue.',
          ],
        },
      },
      {
        heading: { en: 'Every finding carries its reason', es: 'Cada hallazgo incluye su justificación', fr: 'Chaque observation s\'appuie sur une justification' },
        paragraphs: {
          en: [
            'A finding names the screen, shows it, describes what a user is likely to do there and why that is a problem. Without the reason it is just taste, and taste is the easiest thing in the world for a stakeholder to overrule.',
            'That also makes the list arguable in a useful way. If your team disagrees with a finding they can disagree with the reasoning rather than with an opinion, and sometimes they are right — they know constraints an outside reviewer does not.',
          ],
          es: [
            'Cada punto señala la pantalla, la muestra visualmente, explica el comportamiento previsible del usuario y detalla por qué representa un obstáculo. Sin una justificación sólida solo sería una opinión estética fácil de desestimar.',
            'Esto permite debates constructivos. Si tu equipo discrepa, se argumenta sobre la lógica y no sobre preferencias subjetivas, facilitando integrar condicionantes técnicos internos.',
          ],
          fr: [
            'Chaque point identifie l\'écran, l\'illustre, décrit le comportement probable de l\'utilisateur et explique pourquoi cela pose problème. Sans explication rationnelle, cela ne serait qu\'une affaire de goût facilement écartée.',
            'Cela permet également un échange constructif. Si votre équipe n\'est pas d\'accord, le débat porte sur le raisonnement plutôt que sur des avis personnels, laissant place aux contraintes métiers internes.',
          ],
        },
      },
      {
        heading: { en: 'Prioritised, because everything cannot be first', es: 'Priorizado, porque no todo puede ser urgente', fr: 'Priorisé, car tout ne peut pas être fait en même temps' },
        paragraphs: {
          en: [
            'Findings are ordered by what they cost you against what they cost to fix. A contrast failure in the primary button and an inconsistent icon set are not the same urgency, and a flat list of forty issues gets read once and filed.',
            'The top of the list is deliberately short: the few changes worth doing this month. Everything else stays on the list for when there is room.',
          ],
          es: [
            'Los hallazgos se ordenan sopesando el impacto que generan frente al esfuerzo de resolución. Un contraste ilegible en el botón principal y un icono discordante no revisten la misma urgencia; una lista desordenada de cuarenta incidencias suele quedar en el olvido.',
            'La cabecera de la lista es breve por diseño: los pocos cambios que conviene abordar este mes. El resto queda documentado para cuando haya disponibilidad.',
          ],
          fr: [
            'Les points sont classés selon ce qu\'ils vous coûtent face à l\'effort nécessaire pour les corriger. Un défaut de contraste sur le bouton d\'action principal et un jeu d\'icônes disparate n\'ont pas la même priorité\u00a0; une liste brute de quarante remarques est rarement suivie d\'effet.',
            'Le haut de la liste est délibérément concis\u00a0: les quelques actions clés à mener ce mois-ci. Le reste demeure consigné pour les itérations suivantes.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'How is an audit different from a redesign?', es: '¿En qué se diferencia una auditoría de un rediseño?', fr: 'En quoi un audit diffère-t-il d\'une refonte\u00a0?' },
        answer: {
          en: 'An audit diagnoses; a redesign treats. The audit tells you what is wrong and what it would take to fix, and it is deliberately useful on its own — your own team can act on the list without me. A redesign is a separate, larger piece of work that some audits recommend and many do not.',
          es: 'Una auditoría diagnostica; un rediseño ejecuta el tratamiento. La auditoría determina qué falla y cómo subsanarlo de manera autónoma —tu propio equipo puede implementar los cambios sin mí—. El rediseño es un trabajo más amplio que solo algunas auditorías aconsejan.',
          fr: 'L\'audit diagnostique\u00a0; la refonte soigne. L\'audit identifie ce qui freine et comment y remédier de façon autonome — votre propre équipe peut appliquer les recommandations sans mon intervention. La refonte est un chantier distinct, plus vaste, que certains audits préconisent et beaucoup d\'autres évitent.',
        },
      },
      {
        question: { en: 'Do you audit the code and page speed as well?', es: '¿También auditas el código y la velocidad de carga?', fr: 'Auditez-vous également le code et les performances de vitesse\u00a0?' },
        answer: {
          en: 'Not in this one. This audit focuses specifically on the interface and user flows: structure, visual hierarchy, states, copy clarity and usability. It delivers a prioritised fix list your team can act on without having to guess what to tackle first.',
          es: 'En este servicio no. Esta auditoría se centra en la interfaz y los flujos de usuario: jerarquía visual, estados interactivos, claridad de textos y usabilidad. Entrega un plan de acción priorizado para que tu equipo sepa exactamente qué abordar primero.',
          fr: 'Pas dans cette formule. Cet audit se concentre spécifiquement sur l\'interface et les parcours\u00a0: structure, hiérarchie visuelle, clarté des contenus et ergonomie. Il fournit une feuille de route claire pour que votre équipe sache exactement par quoi débuter.',
        },
      },
      {
        question: { en: 'Do you fix what the audit finds?', es: '¿Te encargas de aplicar las soluciones propuestas?', fr: 'Prenez-vous en charge les corrections issues de l\'audit\u00a0?' },
        answer: {
          en: 'If you want me to, as a separate scoped piece of work. There is no obligation and no discount tied to it — an audit that exists to sell a redesign is not an audit, so the deliverable is written to be useful in the hands of a team that never hires me again.',
          es: 'Si lo deseas, como un encargo independiente y acotado. No existe compromiso ni dependencia: una auditoría concebida para vender un rediseño carece de objetividad, por lo que el entregable es 100% accionable para cualquier equipo que no vuelva a contratarme.',
          fr: 'Si vous le souhaitez, dans le cadre d\'une mission distincte et cadrée. Il n\'y a aucune obligation\u00a0: un audit conçu pour vendre une refonte perd sa neutralité, le document est donc rédigé pour être pleinement exploitable par une équipe qui ne ferait plus appel à moi.',
        },
      },
    ],
    relatedProjects: ['zenith', 'stayease'],
    pricingNote: {
      en: 'An audit is quoted against the size of what is being reviewed — how many flows, how many screens — rather than from a package, because a five-screen product and a fifty-screen one are not the same read.',
      es: 'La auditoría se presupuesta según la dimensión del producto analizado —número de flujos y pantallas—, ya que evaluar una aplicación de cinco pantallas no requiere el mismo análisis que una de cincuenta.',
      fr: 'L\'audit fait l\'objet d\'un devis selon l\'envergure du périmètre examiné — nombre de parcours et d\'écrans —, car analyser un produit de cinq écrans ou de cinquante ne représente pas la même charge d\'étude.',
    },
  },
  {
    slug: 'custom-web-development',
    pillar: 'development',
    featured: true,
    number: '01',
    title: { en: 'Custom web development', es: 'Desarrollo web a medida', fr: 'Développement web sur mesure' },
    description: {
      en: 'Websites and web apps built front-end-first in React, Next.js and Tailwind CSS — no template to fight, and source code your own developers can read on day one.',
      es: 'Sitios web y aplicaciones desarrollados con enfoque front-end en React, Next.js y Tailwind CSS: sin plantillas restrictivas y con código limpio que tus desarrolladores entenderán desde el primer día.',
      fr: 'Sites et applications web développés sur mesure en React, Next.js et Tailwind CSS\u00a0: sans modèle rigide, avec un code source clair et immédiatement lisible par vos développeurs.',
    },
    deliverables: {
      en: [
        'Custom front end in React, Next.js and Tailwind CSS',
        'Responsive, accessible and cross-browser tested before launch',
        'Source code in your repository, structured for your team to maintain',
      ],
      es: [
        'Front-end a medida en React, Next.js y Tailwind CSS',
        'Diseño responsive, accesible y probado en múltiples navegadores',
        'Código fuente en tu repositorio, estructurado para fácil mantenimiento',
      ],
      fr: [
        'Front-end sur mesure en React, Next.js et Tailwind CSS',
        'Responsive, accessible et testé sur tous les navigateurs avant mise en ligne',
        'Code source livré sur votre dépôt, pensé pour être maintenu par votre équipe',
      ],
    },
    metaTitle: 'Custom Web Development in React & Next.js',
    metaDescription:
      'Custom website and web app development in React, Next.js and Tailwind CSS: fast, accessible, responsive front ends delivered as readable source code in your own repository.',
    keywords: [
      'custom web development',
      'React development services',
      'Next.js developer',
      'custom website development',
      'Tailwind CSS development',
      'freelance front-end developer',
    ],
    heading: {
      en: 'Custom web development, by the person who designed it',
      es: 'Desarrollo web a medida, creado por quien lo diseñó',
      fr: 'Un développement web sur mesure, par celui qui l\'a conçu',
    },
    intro: {
      en: 'Websites and web apps built from scratch in React, Next.js and Tailwind CSS, for the projects where a template is the thing you will spend the next two years working around.',
      es: 'Sitios y aplicaciones web construidos desde cero en React, Next.js y Tailwind CSS, pensados para proyectos donde una plantilla genérica se convertiría en una limitación constante.',
      fr: 'Sites et applications web conçus de toutes pièces en React, Next.js et Tailwind CSS, pour les projets où un modèle préfabriqué serait un carcan que vous passeriez deux ans à contourner.',
    },
    sections: [
      {
        heading: { en: 'When a template is the better answer', es: 'Cuándo una plantilla es la mejor opción', fr: 'Quand un template est la meilleure réponse' },
        paragraphs: {
          en: [
            'If you need a five-page site next month and the content is conventional, a good template on Webflow or Framer will get you there faster and cheaper, and I will say so. Custom development is not a status upgrade.',
            'It pays for itself when the site has a job the template does not do: an interface with real states, a component set that has to stay consistent across dozens of pages, content shapes nobody has a plugin for, or a performance target a page builder cannot hit.',
          ],
          es: [
            'Si necesitas un sitio de cinco páginas el próximo mes con contenido estándar, una buena plantilla en Webflow o Framer será más rápida y económica, y te lo diré con honestidad. El desarrollo a medida no es una cuestión de estatus.',
            'Resulta rentable cuando el proyecto exige requisitos que las plantillas no cubren: estados dinámicos complejos, coherencia en decenas de páginas, estructuras de contenido únicas o exigencias de rendimiento que un page builder no alcanza.',
          ],
          fr: [
            'Si vous avez besoin d\'un site vitrine de cinq pages le mois prochain avec un contenu conventionnel, un bon template Webflow ou Framer sera plus rapide et économique, et je vous le conseillerai en toute franchise. Le sur-mesure n\'est pas une fin en soi.',
            'Il devient indispensable lorsque le projet requiert ce qu\'un modèle ne peut offrir\u00a0: des états d\'interface dynamiques, des composants cohérents sur des dizaines de pages, des formats de données sur mesure ou des objectifs de performance inaccessibles aux outils no-code.',
          ],
        },
      },
      {
        heading: { en: 'Front end first, and honest about the line', es: 'Especialización front-end y límites claros', fr: 'Le front-end d\'abord, avec des limites transparentes' },
        paragraphs: {
          en: [
            'I build the front end. Where a project needs a back end, a database, authentication or a payment integration, I build the interface and work alongside your back-end developers, and that half is scoped by them rather than guessed at by me.',
            'Saying this at the brief stage costs a conversation. Discovering it in week three costs a project, and it is the most common way a one-person build goes wrong.',
          ],
          es: [
            'Desarrollo la interfaz front-end. Cuando el proyecto requiere back-end, bases de datos, autenticación o pasarelas de pago, construyo la UI colaborando con tus desarrolladores back-end, dejando esa parte en manos de especialistas.',
            'Definir esto durante el brief ahorra malentendidos; descubrirlo a mitad de proyecto compromete los plazos, siendo el error más habitual al trabajar con profesionales independientes.',
          ],
          fr: [
            'Je développe l\'interface front-end. Si le projet nécessite un back-end, une base de données, de l\'authentification ou du paiement, je conçois l\'UI et collabore avec vos développeurs back-end, cette dimension étant cadrée par leurs soins plutôt qu\'estimée par moi.',
            'Clarifier ce point dès le départ évite les écueils\u00a0; le constater au bout de trois semaines met en péril le projet, ce qui est le piège classique des missions individuelles mal cadrées.',
          ],
        },
      },
      {
        heading: { en: 'Performance and accessibility are build decisions', es: 'El rendimiento y la accesibilidad son decisiones de código', fr: 'Performance et accessibilité sont des choix d\'intégration' },
        paragraphs: {
          en: [
            'Static rendering wherever the content allows it, images sized and served in modern formats, fonts subset, and JavaScript kept to what the page actually needs. Speed is not a pass at the end; it is a hundred decisions made while building.',
            'The same goes for accessibility: semantic markup, a sensible focus order, visible focus states and contrast that holds. Retrofitting these later is a rebuild of the markup, which is why they are not a phase two.',
          ],
          es: [
            'Renderizado estático donde el contenido lo permite, imágenes optimizadas en formatos modernos, tipografías aligeradas y JavaScript limitado a lo esencial. La velocidad no es un ajuste final; son cientos de decisiones tomadas durante el desarrollo.',
            'Lo mismo aplica a la accesibilidad: HTML semántico, orden de foco intuitivo, estilos de foco visibles y contraste verificado. Adaptarlos después exige rehacer el código, por lo que se integran desde la primera línea.',
          ],
          fr: [
            'Rendu statique dès que le contenu le permet, images dimensionnées aux formats modernes, polices optimisées et JavaScript strictement limité au nécessaire. La vitesse n\'est pas un vernis final\u00a0; c\'est la somme de cent choix d\'intégration.',
            'Il en va de même pour l\'accessibilité\u00a0: balisage sémantique, ordre de tabulation logique, focus visibles et contrastes conformes. Les rajouter après coup impose de réécrire la structure, c\'est pourquoi ils font partie intégrante du développement initial.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'Do you build the back end as well?', es: '¿También desarrollas el back-end?', fr: 'Développez-vous également la partie back-end\u00a0?' },
        answer: {
          en: 'No. I build front ends: HTML, CSS, Tailwind CSS, JavaScript, React and Next.js, plus PHP where a site sits on an existing stack. Back-end APIs, databases, authentication systems and infrastructure are outside what I take on, so on full-stack projects I build the interface and work alongside your back-end developers.',
          es: 'No. Me especializo en front-end: HTML, CSS, Tailwind CSS, JavaScript, React y Next.js, además de PHP en stacks existentes. APIs de back-end, bases de datos e infraestructuras quedan fuera de mi alcance, por lo que en proyectos completos construyo la UI colaborando con tu equipo de back-end.',
          fr: 'Non. Je suis spécialisé en front-end\u00a0: HTML, CSS, Tailwind CSS, JavaScript, React et Next.js, ainsi que PHP sur des architectures existantes. Les API back-end, bases de données et serveurs ne font pas partie de mes prestations\u00a0; sur les projets full-stack, j\'intègre l\'UI en lien direct avec vos développeurs back-end.',
        },
      },
      {
        question: { en: 'What if we do not have a design yet?', es: '¿Qué pasa si aún no tenemos un diseño?', fr: 'Et si nous n\'avons pas encore de maquette\u00a0?' },
        answer: {
          en: 'Then the project starts on the design side and continues into the build, which is the arrangement most of these engagements use. If you would rather bring your own designer or an existing Figma file, that works too — I build from other people’s files regularly.',
          es: 'En ese caso el proyecto comienza con la fase de diseño y continúa con el desarrollo, que es la modalidad más habitual. Si prefieres aportar tu propio diseño o un archivo de Figma existente, también es perfecto: integro diseños de otros profesionales con frecuencia.',
          fr: 'Dans ce cas, le projet débute par la conception graphique avant d\'enchaîner sur le développement, ce qui est la formule la plus courante. Si vous disposez déjà d\'un designer ou d\'une maquette Figma, c\'est parfait aussi\u00a0: j\'intègre régulièrement des fichiers conçus par d\'autres.',
        },
      },
      {
        question: { en: 'Do we own the code, and can our team maintain it?', es: '¿El código es nuestro y puede mantenerlo nuestro equipo?', fr: 'Sommes-nous propriétaires du code et notre équipe peut-elle le maintenir\u00a0?' },
        answer: {
          en: 'Yes. The code is yours, delivered in your repository, using the same React, Next.js and Tailwind conventions your developers already know. There is no bespoke framework to learn and no licence to keep paying, and nothing in the build depends on me staying involved.',
          es: 'Sí. El código es 100% de tu propiedad, entregado en tu repositorio con los estándares habituales de React, Next.js y Tailwind que tu equipo domina. No hay frameworks propietarios ni licencias recurrentes, y el proyecto no depende de mi permanencia.',
          fr: 'Oui. Le code vous appartient intégralement, livré sur votre dépôt selon les conventions React, Next.js et Tailwind reconnues par vos développeurs. Aucun framework obscur ni licence récurrente, et le projet ne dépend aucunement de ma présence future.',
        },
      },
    ],
    relatedProjects: ['stayease', 'ai-agent-landing'],
  },
  {
    slug: 'figma-to-react',
    pillar: 'development',
    featured: true,
    number: '02',
    title: { en: 'Figma to React build', es: 'Maquetación de Figma a React', fr: 'Intégration Figma vers React' },
    description: {
      en: 'Design-to-code front-end builds in HTML, CSS, Tailwind, React and Next.js, so the live site matches the Figma file instead of drifting in handoff.',
      es: 'Conversión de diseño a código en HTML, CSS, Tailwind, React y Next.js para que el sitio en producción replique fielmente tu maqueta de Figma sin desviaciones.',
      fr: 'Intégration de maquettes en code front-end (HTML, CSS, Tailwind, React et Next.js) pour que le site final corresponde rigoureusement au fichier Figma sans dérive.',
    },
    deliverables: {
      en: [
        'Front-end build in HTML, CSS and Tailwind CSS, true to the design',
        'React and Next.js components for interactive products',
        'Responsive and cross-browser QA before launch',
      ],
      es: [
        'Front-end en HTML, CSS y Tailwind CSS fiel al diseño original',
        'Componentes modulares en React y Next.js para interfaces interactivas',
        'Control de calidad responsive y compatibilidad entre navegadores',
      ],
      fr: [
        'Intégration front-end en HTML, CSS et Tailwind CSS fidèle au design',
        'Composants React et Next.js pour produits interactifs',
        'Recette responsive et tests multi-navigateurs avant mise en ligne',
      ],
    },
    metaTitle: 'Figma to React & Next.js Development',
    metaDescription:
      'Design-to-code front-end builds: your Figma file turned into responsive React, Next.js and Tailwind CSS components, QA-tested across browsers, matching the design.',
    keywords: [
      'Figma to React',
      'Figma to Next.js',
      'design to code service',
      'React front-end developer',
      'Tailwind CSS development',
      'pixel perfect development',
    ],
    heading: {
      en: 'Figma to React, without the fidelity lost in handoff',
      es: 'De Figma a React, sin perder fidelidad en la entrega',
      fr: 'De Figma à React, sans perte de fidélité lors de l\'intégration',
    },
    intro: {
      en: 'Your approved design built as responsive front-end code in React, Next.js and Tailwind CSS, by the person who reads design files for a living, so the spacing, type and states survive the trip.',
      es: 'Tu diseño aprobado transformado en código front-end responsive en React, Next.js y Tailwind CSS por un profesional que domina ambos mundos, garantizando que espaciados, tipografías y microinteracciones se mantengan intactos.',
      fr: 'Votre design validé intégré en code front-end responsive (React, Next.js et Tailwind CSS) par un développeur maîtrisant les subtilités du design, pour que typographie, espacements et états restent parfaits.',
    },
    sections: [
      {
        heading: { en: 'Why handoff loses fidelity', es: 'Por qué la entrega suele perder fidelidad', fr: 'Pourquoi l\'intégration perd souvent en précision' },
        paragraphs: {
          en: [
            'A design file is a set of decisions, and most of them are never written down: which spacing value was intentional and which was eyeballed, what the hover state should feel like, how the layout should behave at a width nobody drew.',
            'A developer reading that file has to guess, and reasonable guesses accumulate into a build that is subtly not the design. Removing the handoff removes the guessing.',
          ],
          es: [
            'Un archivo de diseño contiene decisiones implícitas: qué espaciado fue intencional, cómo debe sentirse un estado hover o cómo reacciona la retícula en resoluciones intermedias no dibujadas.',
            'Un programador tradicional debe interpretar esas lagunas, acumulando pequeñas diferencias que desvirtúan el resultado. Unificar diseño y código elimina la improvisación.',
          ],
          fr: [
            'Une maquette contient de nombreux choix implicites\u00a0: quels espacements sont stricts, quel ressenti donner au survol, ou comment la page s\'adapte sur des largeurs d\'écran non illustrées.',
            'Un développeur doit alors interpréter, et ces déductions successives finissent par altérer l\'harmonie initiale. Confier l\'intégration à un œil averti supprime cette incertitude.',
          ],
        },
      },
      {
        heading: { en: 'Components, not pages', es: 'Componentes, no páginas aisladas', fr: 'Des composants réutilisables, pas des pages figées' },
        paragraphs: {
          en: [
            'The build mirrors the structure of the design file: the Figma component becomes the React component, the design token becomes the Tailwind token. What is one decision in the design stays one decision in the code.',
            'That is what makes the site maintainable afterwards, whether your team takes it over or I keep working on it.',
          ],
          es: [
            'El código reproduce fielmente la estructura del diseño: cada componente de Figma se convierte en un componente React y cada token en una clase de Tailwind. Una decisión en diseño equivale exactamente a una decisión en código.',
            'Esta simetría es lo que hace que el proyecto sea fácil de mantener en el futuro, tanto para tu equipo como para colaboraciones continuadas.',
          ],
          fr: [
            'Le code reflète l\'architecture du fichier de design\u00a0: le composant Figma devient un composant React et le token de design devient une variable Tailwind. Une décision graphique correspond strictement à un choix de code.',
            'C\'est ce qui garantit la maintenabilité du site, que votre équipe prenne le relais ou que nous poursuivions ensemble.',
          ],
        },
      },
      {
        heading: { en: 'Responsive and QA-tested before launch', es: 'Responsive y probado a fondo antes del lanzamiento', fr: 'Responsive et testé avant la mise en ligne' },
        paragraphs: {
          en: [
            'Every breakpoint is checked against the design, and the build is tested across current versions of Chrome, Safari, Firefox and Edge on both desktop and mobile before it goes live.',
            'Accessibility basics are part of that pass rather than a later ticket: keyboard navigation, focus states, colour contrast and semantic markup.',
          ],
          es: [
            'Cada punto de ruptura se contrasta con la maqueta, y el desarrollo se prueba en las versiones actuales de Chrome, Safari, Firefox y Edge tanto en escritorio como en dispositivos móviles antes de publicar.',
            'Los requisitos de accesibilidad forman parte de este control: navegación por teclado, estilos de foco visibles, contraste de color y marcado semántico.',
          ],
          fr: [
            'Chaque point de rupture est vérifié par rapport à la maquette, et l\'intégration est testée sur les dernières versions de Chrome, Safari, Firefox et Edge sur desktop et mobile avant mise en production.',
            'Les fondamentaux de l\'accessibilité sont vérifiés à cette étape\u00a0: navigation clavier, visibilité du focus, contrastes et balisage sémantique.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Can you build a design someone else made?',
          es: '¿Puedes desarrollar un diseño creado por otra persona?',
          fr: 'Pouvez-vous intégrer un design réalisé par quelqu\'un d\'autre\u00a0?',
        },
        answer: {
          en: 'Yes. That is a large part of this service. I work from your Figma file whether or not I designed it. If the file is missing states, breakpoints or edge cases, I will flag what needs deciding before the build rather than guessing and showing you the result later.',
          es: 'Sí, es una parte fundamental de este servicio. Trabajo con tus archivos de Figma con total naturalidad. Si el archivo carece de estados interactivos o variantes intermedias, te consultaré los detalles antes de programar para asegurar total coincidencia.',
          fr: 'Oui, c\'est le cœur de ce service. J\'intègre vos fichiers Figma que je les aie conçus ou non. S\'il manque des états, points de rupture ou cas particuliers, je vous signale les points à trancher avant d\'intégrer plutôt que d\'improviser.',
        },
      },
      {
        question: { en: 'What exactly do you build?', es: '¿Qué desarrollas exactamente?', fr: 'Que développez-vous exactement\u00a0?' },
        answer: {
          en: 'The front end: HTML, CSS, Tailwind CSS, JavaScript, React and Next.js, and PHP where a project needs it. Back-end APIs, databases and infrastructure are outside what I take on, so on full-stack projects I build the interface and work alongside your back-end developers.',
          es: 'El front-end: HTML, CSS, Tailwind CSS, JavaScript, React y Next.js, además de PHP si el proyecto lo requiere. APIs, bases de datos y servidores quedan fuera de mi alcance, colaborando con tu equipo técnico en proyectos integrales.',
          fr: 'Le front-end\u00a0: HTML, CSS, Tailwind CSS, JavaScript, React et Next.js, ainsi que PHP si nécessaire. Les API, bases de données et serveurs sont exclus de mon périmètre, m\'associant à vos développeurs sur les projets complets.',
        },
      },
      {
        question: {
          en: 'Do we get the code, and can our team maintain it?',
          es: '¿Recibimos el código fuente y podemos mantenerlo?',
          fr: 'Obtenons-nous le code source et pouvons-nous le maintenir\u00a0?',
        },
        answer: {
          en: 'Yes. The code is yours, delivered in your repository, structured and readable rather than generated. It uses the same React, Next.js and Tailwind conventions your developers already know, so there is no bespoke framework to learn before they can change something.',
          es: 'Sí. El código es completamente tuyo, entregado en tu repositorio de forma legible y estructurada, no generado automáticamente. Sigue los estándares de React, Next.js y Tailwind que tu equipo conoce, sin curvas de aprendizaje añadidas.',
          fr: 'Oui. Le code vous appartient, livré sur votre dépôt, rédigé proprement et sans générateur automatique. Il respecte les standards React, Next.js et Tailwind habituels, sans aucun framework obscur à appréhender.',
        },
      },
    ],
    relatedProjects: ['stayease', 'ai-agent-landing'],
  },
  {
    slug: 'landing-page-development',
    pillar: 'development',
    number: '03',
    title: { en: 'Landing page design & build', es: 'Diseño y desarrollo de landing pages', fr: 'Design et développement de landing pages' },
    description: {
      en: 'One high-intent page taken end to end: section structure, responsive design, a built page on the platform that suits you, and the events to tell whether it worked.',
      es: 'Una página de alta conversión de principio a fin: estructura, diseño responsive, maquetación en la plataforma idónea y analítica para medir resultados.',
      fr: 'Une page à fort impact de bout en bout\u00a0: structure, design responsive, intégration sur la plateforme adaptée et suivi des événements pour mesurer les conversions.',
    },
    deliverables: {
      en: [
        'One page designed in Figma, desktop through mobile',
        'Built as a fast, responsive page in Next.js, Webflow or Framer',
        'Event hooks wired into your analytics so the page can be measured',
      ],
      es: [
        'Diseño de landing page en Figma para escritorio y móvil',
        'Desarrollo ultra rápido y responsive en Next.js, Webflow o Framer',
        'Eventos de analítica integrados para medir conversiones reales',
      ],
      fr: [
        'Design de la page dans Figma, décliné du desktop au mobile',
        'Intégration rapide et responsive sur Next.js, Webflow ou Framer',
        'Tracking et événements configurés dans votre outil d\'analyse',
      ],
    },
    metaTitle: 'Landing Page Design and Development',
    metaDescription:
      'A single high-intent landing page designed and built end to end: Figma design, fast responsive build in Next.js, Webflow or Framer, and analytics tracking.',
    keywords: [
      'landing page design and build',
      'landing page designer',
      'high converting landing page',
      'Next.js landing page',
      'Webflow landing page',
      'Framer landing page',
    ],
    heading: {
      en: 'One landing page, designed and built to convert',
      es: 'Una landing page diseñada y desarrollada para convertir',
      fr: 'Une landing page pensée et développée pour convertir',
    },
    intro: {
      en: 'A single high-intent page taken from the argument to the live URL: section structure, responsive design in Figma, a fast build on the platform that fits your team, and the tracking to tell whether it worked.',
      es: 'Una página de alto impacto llevada desde la propuesta de valor hasta la URL final: estructura narrativa, diseño responsive en Figma, desarrollo optimizado y analítica de conversión.',
      fr: 'Une page stratégique menée de l\'argumentaire jusqu\'à la mise en ligne\u00a0: structure des sections, design responsive dans Figma, intégration optimisée et suivi des performances.',
    },
    sections: [
      {
        heading: { en: 'Structure the argument first', es: 'Estructurar el mensaje primero', fr: 'Structurer l\'argumentaire avant tout' },
        paragraphs: {
          en: [
            'A landing page is an argument in sections: who this is for, the problem it solves, how it works, social proof, pricing, objection handling and the call to action. Visual design makes the argument memorable, but the argument has to exist first.',
            'We settle the section order and the copy hierarchy in wireframes before opening Figma, so we are not decorating a page that has not decided what it is saying.',
          ],
          es: [
            'Una landing page es una argumentación estructurada: público objetivo, problema que resuelve, funcionamiento, prueba social, tarifas, resolución de dudas y llamada a la acción. El diseño realza el mensaje, pero la propuesta debe ser sólida de antemano.',
            'Definimos el orden de las secciones y los textos en wireframes antes de diseñar la UI para no adornar una página sin un mensaje claro.',
          ],
          fr: [
            'Une landing page est une démonstration ordonnée\u00a0: public cible, problème résolu, fonctionnement, preuves sociales, tarification, réponses aux objections et appel à l\'action. Le design sublime l\'argumentaire, mais la structure doit être posée en amont.',
            'Nous calons l\'enchaînement des blocs et la hiérarchie textuelle en wireframe avant d\'ouvrir Figma, évitant ainsi d\'habiller un discours encore flou.',
          ],
        },
      },
      {
        heading: { en: 'Pick the platform that fits the team', es: 'Elegir la plataforma adecuada para tu equipo', fr: 'Choisir la plateforme adaptée à votre équipe' },
        paragraphs: {
          en: [
            'If marketing needs to edit copy and spin up variants next month, Webflow or Framer is the right answer. If the page sits inside an existing product app, Next.js and Tailwind CSS is the right answer.',
            'The build happens on whichever platform fits your team afterwards, rather than whichever one I prefer.',
          ],
          es: [
            'Si tu equipo de marketing necesita editar textos y lanzar variantes fácilmente, Webflow o Framer son la opción ideal. Si la página se integra en un producto web existente, Next.js y Tailwind CSS son la solución técnica idónea.',
            'El desarrollo se ejecuta en la plataforma que mejor se adapte a tus necesidades operativas posteriores.',
          ],
          fr: [
            'Si votre équipe marketing doit modifier les textes et créer des variantes le mois prochain, Webflow ou Framer est le choix idéal. Si la page s\'insère dans une application existante, Next.js et Tailwind CSS s\'imposent.',
            'L\'intégration se fait sur la plateforme qui convient à votre organisation, et non selon mes seules préférences.',
          ],
        },
      },
      {
        heading: { en: 'Wired to measure from day one', es: 'Medición configurada desde el primer día', fr: 'Mesure et analytics configurés dès le départ' },
        paragraphs: {
          en: [
            'A landing page you cannot measure is an expensive guess. Primary and secondary CTA clicks, scroll depth, form starts and form submissions are wired into your analytics platform before the page launches.',
            'Performance is part of the conversion pass too: sub-second load times, no layout shifts, and images sized for mobile so visitors on cellular connections do not bounce before the headline renders.',
          ],
          es: [
            'Una landing page que no se puede medir es una inversión a ciegas. Clics en CTAs primarios y secundarios, profundidad de scroll y envíos de formulario se configuran en tu herramienta analítica antes de publicar.',
            'El rendimiento es parte esencial de la conversión: tiempos de carga inferiores a un segundo, sin saltos de contenido e imágenes optimizadas para conexiones móviles.',
          ],
          fr: [
            'Une landing page non mesurée est une dépense sans visibilité. Clics sur boutons d\'action, profondeur de défilement et envois de formulaires sont connectés à votre outil d\'analyse avant la publication.',
            'La rapidité est tout aussi cruciale\u00a0: affichage en moins d\'une seconde, stabilité visuelle parfaite et images légères pour éviter tout abandon sur mobile.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Do you write the copy or do we provide it?',
          es: '¿Redactas los textos o los aportamos nosotros?',
          fr: 'Rédigez-vous les textes ou devons-nous les fournir\u00a0?',
        },
        answer: {
          en: 'Either works. If you have drafted copy, I will edit and structure it for the page layout. If you only have the product positioning and value props, I can write the headline, section copy and calls to action as part of the wireframing stage.',
          es: 'Ambas opciones son posibles. Si dispones de un borrador, lo estructuro y adapto a la jerarquía de la página. Si solo cuentas con la propuesta de valor y las características del producto, redacto los titulares, descripciones y llamadas a la acción.',
          fr: 'Les deux options sont envisageables. Si vous avez un premier jet, je le structure et l\'adapte à la mise en page. Si vous n\'avez que le positionnement et les points clés, je peux rédiger titres, argumentaires et boutons d\'action lors du wireframing.',
        },
      },
      {
        question: {
          en: 'Can we edit the page ourselves after launch?',
          es: '¿Podremos editar la página nosotros mismos tras la entrega?',
          fr: 'Pourrons-nous modifier la page nous-mêmes après la mise en ligne\u00a0?',
        },
        answer: {
          en: 'Yes. On Webflow and Framer builds, editing access is set up so your team can change copy and images without touching code. On Next.js builds, content is structured in clean data files or components your developers can update easily.',
          es: 'Sí. En desarrollos en Webflow y Framer se configura acceso de edición para modificar textos e imágenes sin tocar código. En Next.js, el contenido se organiza en archivos limpios y modulares para que tus desarrolladores los actualicen fácilmente.',
          fr: 'Oui. Sur Webflow et Framer, l\'accès éditeur permet à votre équipe de modifier textes et visuels sans coder. Sur Next.js, le contenu est structuré dans des fichiers clairs que vos développeurs peuvent mettre à jour en toute simplicité.',
        },
      },
      {
        question: { en: 'How long does a landing page take end to end?', es: '¿Cuánto tiempo lleva una landing page de principio a fin?', fr: 'Combien de temps prend une landing page de bout en bout\u00a0?' },
        answer: {
          en: 'Usually two to three weeks from initial brief to live page, split across wireframing and copy, visual design in Figma, coded build, and analytics testing.',
          es: 'Habitualmente entre dos y tres semanas desde el brief inicial hasta la publicación, divididas entre wireframes, diseño visual en Figma, maquetación y pruebas de analítica.',
          fr: 'En moyenne deux à trois semaines du brief initial à la mise en ligne, réparties entre wireframes, design Figma, intégration et tests d\'analytics.',
        },
      },
    ],
    relatedProjects: ['ai-agent-landing', 'stayease'],
  },
  {
    slug: 'website-redesign',
    pillar: 'development',
    number: '04',
    title: { en: 'Website redesign', es: 'Rediseño de sitios web', fr: 'Refonte de site web' },
    description: {
      en: 'Full-site redesigns that protect your existing SEO rankings, modernise the visual design and rebuild the front end for speed, accessibility and easier editing.',
      es: 'Rediseño integral de sitios web protegiendo tu posicionamiento SEO actual, modernizando la identidad visual y optimizando el front-end en velocidad y accesibilidad.',
      fr: 'Refonte complète de site web préservant vos positions SEO, modernisant le design visuel et optimisant le code pour la vitesse, l\'accessibilité et l\'évolutivité.',
    },
    deliverables: {
      en: [
        'Complete visual redesign in Figma, desktop through mobile',
        'Front-end rebuild in React, Next.js, Webflow or Tailwind CSS',
        'URL redirect map and SEO preservation strategy',
      ],
      es: [
        'Rediseño visual completo en Figma para escritorio y móvil',
        'Desarrollo front-end en React, Next.js, Webflow o Tailwind CSS',
        'Mapeo de redirecciones y estrategia de preservación de SEO',
      ],
      fr: [
        'Refonte visuelle complète dans Figma, de l\'ordinateur au mobile',
        'Développement front-end sur React, Next.js, Webflow ou Tailwind CSS',
        'Plan de redirections d\'URL et stratégie de maintien du référencement',
      ],
    },
    metaTitle: 'Website Redesign Services: UI Design & Rebuild',
    metaDescription:
      'Full website redesign services: modern Figma UI design, fast responsive front-end rebuild in Next.js or Webflow, and SEO migration protection.',
    keywords: [
      'website redesign service',
      'redesign company website',
      'website visual redesign',
      'SEO safe website redesign',
      'Next.js website redesign',
      'Webflow website redesign',
    ],
    heading: {
      en: 'A website redesign that modernises the brand without losing your SEO',
      es: 'Un rediseño web que moderniza tu marca protegiendo tu SEO',
      fr: 'Une refonte de site web qui modernise votre image sans compromettre votre SEO',
    },
    intro: {
      en: 'A full-site redesign that addresses what is holding your current site back — outdated visual language, slow page loads, poor mobile usability — while preserving the search rankings and URL equity you spent years building.',
      es: 'Un rediseño integral para superar las limitaciones de tu web actual —estética anticuada, lentitud de carga, mala experiencia móvil— protegiendo la autoridad y posicionamiento que tanto costó construir.',
      fr: 'Une refonte intégrale pour corriger les freins de votre site actuel — esthétique dépassée, lenteur, ergonomie mobile perfectible — tout en préservant le capital SEO accumulé au fil des années.',
    },
    sections: [
      {
        heading: { en: 'Keep what works, fix what does not', es: 'Conservar lo que funciona, renovar lo que falla', fr: 'Conserver ce qui fonctionne, corriger le reste' },
        paragraphs: {
          en: [
            'A redesign should not be a scorched-earth rebuild. We start by auditing your existing analytics and search console data to identify which pages, flows and content assets drive your actual conversions and organic traffic.',
            'Those pages and structural hierarchies are preserved or improved, while the underperforming sections are rewritten and redesigned.',
          ],
          es: [
            'Un rediseño no debe borrar el pasado. Comenzamos analizando tus métricas y Search Console para identificar qué páginas y contenidos generan conversiones y tráfico orgánico.',
            'Preservamos y potenciamos esas páginas clave, concentrando la renovación en las secciones que no rinden como deberían.',
          ],
          fr: [
            'Une refonte ne consiste pas à tout effacer. Nous débutons par l\'analyse de vos données d\'audience et de recherche pour repérer les pages et parcours qui génèrent trafic et conversions.',
            'Ces pages et structures fondamentales sont préservées et améliorées, tandis que les sections peu performantes sont repensées.',
          ],
        },
      },
      {
        heading: { en: 'A redirect plan before launch', es: 'Plan de redirecciones previo al lanzamiento', fr: 'Un plan de redirection rigoureux avant la mise en ligne' },
        paragraphs: {
          en: [
            'The most common reason redesigns drop traffic is neglected URL structures. If URLs change, a complete 1-to-1 301 redirect map is generated and verified before deployment.',
            'Heading tags, metadata, structured data schema and canonical tags are audited to ensure search engines understand the updated site immediately.',
          ],
          es: [
            'La causa más frecuente de caídas de tráfico tras un rediseño es descuidar las URLs. Si cambian rutas, se crea y verifica un mapa de redirecciones 301 individuales antes del despliegue.',
            'Revisamos etiquetas de encabezado, metadatos, datos estructurados schema y canonicals para que los buscadores asimilen la nueva versión sin fricción.',
          ],
          fr: [
            'La cause principale de perte de trafic après refonte est la mauvaise gestion des URL. En cas de modification d\'adresses, un plan complet de redirections 301 est vérifié avant déploiement.',
            'Balises, métadonnées, schémas de données structurées et balises canoniques sont vérifiés pour que les moteurs assimilent instantanément le nouveau site.',
          ],
        },
      },
      {
        heading: { en: 'Modern, fast front end', es: 'Front-end moderno y ultrarrápido', fr: 'Un front-end moderne et performant' },
        paragraphs: {
          en: [
            'The rebuild replaces bloated legacy themes with a clean, fast front end in Next.js or Webflow, cutting page weight and improving Core Web Vitals across the entire domain.',
            'A faster site directly benefits both user experience and organic search rank.',
          ],
          es: [
            'El desarrollo sustituye plantillas pesadas por un front-end limpio y ágil en Next.js o Webflow, reduciendo el peso de página y mejorando las Core Web Vitals en todo el dominio.',
            'Un sitio más rápido impulsa de forma directa la conversión de usuarios y el posicionamiento en buscadores.',
          ],
          fr: [
            'L\'intégration remplace les thèmes lourds par un code léger sur Next.js ou Webflow, allégeant le poids des pages et optimisant les Core Web Vitals sur tout le domaine.',
            'Un site rapide favorise directement l\'engagement des visiteurs et le positionnement naturel.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Will our SEO rankings drop during a redesign?',
          es: '¿Caerá nuestro posicionamiento SEO durante el rediseño?',
          fr: 'Notre référencement risque-t-il de baisser lors de la refonte\u00a0?',
        },
        answer: {
          en: 'With a careful migration strategy, no. By mapping 301 redirects for every changed URL, preserving high-ranking page content and metadata, and improving page speed, most sites maintain or improve their organic positions after launch.',
          es: 'Con una estrategia de migración rigurosa, no. Al implementar redirecciones 301, conservar contenidos clave y mejorar drásticamente la velocidad, la mayoría de los sitios mantienen o incrementan su visibilidad orgánica.',
          fr: 'Avec une stratégie de migration maîtrisée, non. Grâce aux redirections 301, à la préservation des contenus clés et au gain de vitesse, la majorité des sites maintiennent voire améliorent leurs positions après mise en ligne.',
        },
      },
      {
        question: {
          en: 'Can we keep our existing blog posts and content?',
          es: '¿Podemos conservar todos nuestros artículos y contenidos existentes?',
          fr: 'Pouvons-nous conserver nos articles de blog et contenus existants\u00a0?',
        },
        answer: {
          en: 'Yes. Content migration is part of the scope. Blog posts, case studies and documentation are exported from your current CMS and imported cleanly into the new architecture without broken links.',
          es: 'Sí. La migración de contenidos está contemplada en el proyecto. Artículos, casos de estudio y guías se exportan de tu CMS actual y se integran limpiamente en la nueva arquitectura sin enlaces rotos.',
          fr: 'Oui. La migration de contenu fait partie du périmètre. Articles de blog, études de cas et documentations sont exportés de votre CMS actuel et réintégrés proprement sans liens rompus.',
        },
      },
      {
        question: {
          en: 'How do you handle staging and client review before launch?',
          es: '¿Cómo organizas el entorno de pruebas y la revisión previa al lanzamiento?',
          fr: 'Comment gérez-vous l\'environnement de préproduction avant la mise en ligne\u00a0?',
        },
        answer: {
          en: 'The new site is built on a password-protected staging URL where your team can review, test and approve every page before the domain DNS is switched over at launch.',
          es: 'El nuevo sitio se despliega en una URL de pruebas protegida por contraseña para que tu equipo revise, pruebe y valide cada pantalla antes de cambiar los DNS en el lanzamiento.',
          fr: 'Le nouveau site est déployé sur une URL de préproduction protégée par mot de passe, permettant à votre équipe de tester et valider chaque page avant la bascule DNS.',
        },
      },
    ],
    relatedProjects: ['stayease', 'zenith'],
  },
  {
    slug: 'webflow-development',
    pillar: 'development',
    number: '05',
    title: { en: 'Webflow development', es: 'Desarrollo en Webflow', fr: 'Développement Webflow' },
    description: {
      en: 'Custom Webflow websites built to Client-First standards: clean class structures, CMS collections, responsive layouts and animations your marketing team can manage.',
      es: 'Sitios web a medida en Webflow bajo estándares Client-First: clases limpias, colecciones CMS, maquetación responsive y animaciones autogestionables.',
      fr: 'Sites Webflow sur mesure selon les standards Client-First\u00a0: structure de classes propre, collections CMS, responsive soigné et animations administrables.',
    },
    deliverables: {
      en: [
        'Custom Webflow build following Client-First naming conventions',
        'Structured CMS collections for blogs, team, resources and case studies',
        'Interactive animations, responsive layouts and editor training',
      ],
      es: [
        'Desarrollo a medida en Webflow siguiendo convenciones Client-First',
        'Colecciones CMS estructuradas para blog, equipo, recursos y proyectos',
        'Animaciones interactivas, diseño responsive y formación para editores',
      ],
      fr: [
        'Intégration Webflow sur mesure selon la méthodologie Client-First',
        'Collections CMS configurées pour blog, équipe, ressources et cas clients',
        'Animations fluides, mise en page responsive et prise en main de l\'éditeur',
      ],
    },
    metaTitle: 'Webflow Development Services: Custom CMS & Responsive Sites',
    metaDescription:
      'Freelance Webflow developer: custom websites built to Client-First standards, structured CMS collections, responsive design and smooth interactions.',
    keywords: [
      'Webflow development services',
      'freelance Webflow developer',
      'Webflow CMS build',
      'Client-First Webflow',
      'Figma to Webflow',
      'custom Webflow designer',
    ],
    heading: {
      en: 'Webflow development built for marketing teams to actually use',
      es: 'Desarrollo en Webflow pensado para la autonomía de tu equipo de marketing',
      fr: 'Un développement Webflow pensé pour l\'autonomie de votre équipe marketing',
    },
    intro: {
      en: 'Custom Webflow sites built cleanly with Client-First class systems and scalable CMS structures, so adding a landing page or publishing a post is a five-minute task rather than a developer request.',
      es: 'Sitios a medida en Webflow desarrollados con la metodología Client-First y CMS escalable, para que crear una landing page o publicar un artículo tome cinco minutos sin depender de programadores.',
      fr: 'Des sites Webflow sur mesure conçus selon le système Client-First avec un CMS évolutif, pour que publier un article ou créer une page prenne cinq minutes sans solliciter de développeur.',
    },
    sections: [
      {
        heading: { en: 'Client-First class naming', es: 'Nomenclatura de clases Client-First', fr: 'Nommage de classes Client-First' },
        paragraphs: {
          en: [
            'A Webflow site with unorganised classes becomes impossible to edit after three months. I build using Finsweet’s Client-First style system, giving your site a logical, semantic structure that any Webflow creator can understand immediately.',
            'Global typography, colour swatches and spacing utilities make future additions fast and consistent.',
          ],
          es: [
            'Un sitio de Webflow con clases desordenadas se vuelve inmantenible en pocos meses. Desarrollo utilizando el sistema Client-First de Finsweet, garantizando una estructura lógica y comprensible para cualquier creador de Webflow.',
            'Estilos globales, muestras de color y utilidades de espaciado aseguran que cualquier añadido futuro sea rápido y coherente.',
          ],
          fr: [
            'Un site Webflow aux classes désorganisées devient ingérable en quelques mois. J\'intègre selon la méthode Client-First de Finsweet, offrant une structure sémantique claire et immédiatement compréhensible.',
            'Styles typographiques globaux, nuanciers et utilitaires d\'espacement rendent chaque futur ajout simple et cohérent.',
          ],
        },
      },
      {
        heading: { en: 'CMS architecture that matches your content', es: 'Arquitectura CMS adaptada a tu contenido', fr: 'Une structure CMS calquée sur vos contenus' },
        paragraphs: {
          en: [
            'CMS collections are modelled around how your team actually produces content: custom fields for rich media, author credits, SEO overrides and categorisation.',
            'Collection templates are designed to handle missing fields gracefully, so an article without a hero image or author still looks polished.',
          ],
          es: [
            'Las colecciones CMS se configuran según la operativa real de tu equipo: campos personalizados para multimedia, autores, metadatos SEO y categorías.',
            'Las plantillas gestionan campos opcionales con elegancia para que un artículo sin imagen o autor siga viéndose impecable.',
          ],
          fr: [
            'Les collections CMS sont modélisées selon les processus réels de votre équipe\u00a0: champs dédiés pour les médias, signatures d\'auteurs, balises SEO et catégories.',
            'Les gabarits dynamiques gèrent parfaitement les champs optionnels, garantissant une mise en page soignée même sans visuel d\'en-tête.',
          ],
        },
      },
      {
        heading: { en: 'Subtle interactions, solid performance', es: 'Animaciones sutiles y alto rendimiento', fr: 'Interactions subtiles et performances solides' },
        paragraphs: {
          en: [
            'Animations should support the content, not distract from it. Micro-interactions, scroll triggers and navigation transitions are built with native Webflow interactions for smooth 60fps performance.',
            'Custom code is kept to lightweight utilities for features Webflow does not natively support (e.g. cookie consent, advanced filtering or copy-to-clipboard).',
          ],
          es: [
            'Las animaciones deben complementar el mensaje, no entorpecerlo. Microinteracciones, scroll effects y transiciones se configuran de forma nativa para un rendimiento fluido a 60 fps.',
            'El código personalizado se reserva para utilidades ligeras no nativas (gestión de cookies, filtros avanzados o botones de copiar al portapapeles).',
          ],
          fr: [
            'Les animations doivent valoriser le contenu sans le ralentir. Micro-interactions, animations au défilement et transitions sont conçues nativement pour une fluidité optimale à 60\u00a0fps.',
            'Le code sur mesure est restreint aux fonctionnalités non natives indispensables (bandeaux cookies, filtres avancés ou copie dans le presse-papier).',
          ],
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'Do we need a Webflow Workspace or Site plan?',
          es: '¿Necesitamos un plan de Workspace o de Sitio en Webflow?',
          fr: 'Avons-nous besoin d\'un abonnement Webflow Workspace ou Site\u00a0?',
        },
        answer: {
          en: 'You only need a Webflow Site plan (usually CMS or Business plan) on your own Webflow account. I build the site in my workspace and transfer the project directly into your account before launch.',
          es: 'Solo necesitas un plan de Sitio en Webflow (habitualmente plan CMS o Business) en tu propia cuenta. Desarrollo el sitio en mi entorno y transfiero el proyecto directamente a tu cuenta antes del lanzamiento.',
          fr: 'Vous avez uniquement besoin d\'un plan de Site Webflow (généralement CMS ou Business) sur votre propre compte. Je réalise le site sur mon espace et vous transfère le projet avant la mise en ligne.',
        },
      },
      {
        question: {
          en: 'Can you convert our existing Figma design to Webflow?',
          es: '¿Puedes convertir nuestro diseño de Figma a Webflow?',
          fr: 'Pouvez-vous intégrer notre maquette Figma existante sur Webflow\u00a0?',
        },
        answer: {
          en: 'Yes. I regularly convert Figma files into responsive Webflow sites, mapping auto layout frames to Webflow div structures and design tokens to global styles.',
          es: 'Sí. Convierto asiduamente diseños de Figma en sitios responsive en Webflow, traduciendo auto layout a estructuras div y tokens a estilos globales.',
          fr: 'Oui. J\'intègre fréquemment des fichiers Figma dans Webflow en transposant les auto layouts en conteneurs structurés et les tokens en classes globales.',
        },
      },
      {
        question: {
          en: 'Do you provide training on how to use the Webflow Editor?',
          es: '¿Ofreces formación sobre el uso del Editor de Webflow?',
          fr: 'Fournissez-vous une formation à l\'éditeur Webflow\u00a0?',
        },
        answer: {
          en: 'Yes. Every Webflow project includes a walkthrough video and documentation showing your team how to edit copy, publish CMS items, upload media and manage SEO settings.',
          es: 'Sí. Cada proyecto en Webflow incluye un vídeo explicativo y documentación que enseña a tu equipo a editar textos, publicar contenidos CMS, subir imágenes y gestionar metadatos SEO.',
          fr: 'Oui. Chaque livraison Webflow s\'accompagne d\'une vidéo de démonstration et d\'un guide pour apprendre à modifier les textes, publier sur le CMS et gérer le SEO en autonomie.',
        },
      },
    ],
    relatedProjects: ['ai-agent-landing', 'cleaning-services-app'],
  },
  {
    slug: 'framer-development',
    pillar: 'development',
    number: '06',
    title: { en: 'Framer development', es: 'Desarrollo en Framer', fr: 'Développement Framer' },
    description: {
      en: 'Lightning-fast marketing sites and landing pages built in Framer: interactive components, fluid animations and intuitive visual editing for startups that move fast.',
      es: 'Sitios de marketing y landing pages ultrarrápidos creados en Framer: componentes interactivos, animaciones fluidas y edición visual intuitiva para startups dinámicas.',
      fr: 'Sites marketing et landing pages ultra-rapides conçus sur Framer\u00a0: composants interactifs, animations soignées et édition visuelle intuitive pour startups réactives.',
    },
    deliverables: {
      en: [
        'Custom Framer website with responsive breakpoint variants',
        'Interactive components, hover states and scroll effects',
        'Framer CMS setup for blogs, updates and changelogs',
      ],
      es: [
        'Sitio a medida en Framer con variantes responsive para cada resolución',
        'Componentes interactivos, efectos hover y animaciones de scroll',
        'Configuración de Framer CMS para blogs, novedades y changelogs',
      ],
      fr: [
        'Site Framer sur mesure avec déclinaisons responsives fluides',
        'Composants interactifs, effets de survol et animations au scroll',
        'Configuration du CMS Framer pour blogs, actualités et changelogs',
      ],
    },
    metaTitle: 'Framer Website Development Services',
    metaDescription:
      'Freelance Framer developer: fast marketing sites, interactive landing pages, fluid scroll animations and complete Framer CMS setup.',
    keywords: [
      'Framer development services',
      'freelance Framer developer',
      'Figma to Framer',
      'Framer landing page designer',
      'Framer CMS website',
      'startup website in Framer',
    ],
    heading: {
      en: 'Framer development for startups that want speed without sacrificing polish',
      es: 'Desarrollo en Framer para startups que buscan agilidad sin renunciar al detalle',
      fr: 'Un développement Framer pour les startups qui exigent rapidité et élégance',
    },
    intro: {
      en: 'High-polish marketing sites and launch pages built in Framer, with the fluid interactions of a custom web app and the publishing speed of a visual editor, perfect for modern tech companies.',
      es: 'Sitios web de marketing de alta calidad construidos en Framer, combinando la fluidez interactiva de una aplicación a medida con la agilidad de publicación de un editor visual.',
      fr: 'Des sites marketing d\'un grand raffinement conçus dans Framer, associant la fluidité d\'une application web à la rapidité de publication d\'un éditeur visuel.',
    },
    sections: [
      {
        heading: { en: 'Direct from Figma to canvas', es: 'De Figma al lienzo sin fricciones', fr: 'De Figma au canevas sans intermédiaire' },
        paragraphs: {
          en: [
            'Framer’s layout engine mirrors modern design tools closely. I translate your approved design into native Framer components, preserving precise typography, colour styles and responsive auto layouts.',
            'Breakpoint management in Framer allows granular control over mobile, tablet and wide screens without breaking layouts.',
          ],
          es: [
            'El motor de maquetación de Framer reproduce fielmente las herramientas de diseño modernas. Traslado tu diseño a componentes nativos en Framer conservando tipografías, estilos y auto layout.',
            'La gestión de breakpoints en Framer permite un control exhaustivo en móvil, tablet y pantallas panorámicas sin desajustes.',
          ],
          fr: [
            'Le moteur de mise en page de Framer est très proche des outils de design actuels. J\'intègre vos maquettes en composants natifs Framer avec une fidélité absolue sur la typographie et les styles.',
            'La gestion des breakpoints offre un contrôle chirurgical du mobile au grand écran sans jamais casser l\'harmonie visuelle.',
          ],
        },
      },
      {
        heading: { en: 'Native scroll effects and micro-interactions', es: 'Efectos de scroll y microinteracciones nativas', fr: 'Effets de scroll et micro-interactions natifs' },
        paragraphs: {
          en: [
            'Framer excels at tactile, physics-based animations: parallax scrolling, sticky sections, interactive cards and magnetic buttons that make a landing page feel alive.',
            'Everything is optimised for smooth performance on mobile devices, avoiding heavy script loads.',
          ],
          es: [
            'Framer destaca en animaciones táctiles y fluidas: efectos parallax, secciones sticky, tarjetas interactivas y botones dinámicos que dan vida a la página.',
            'Todas las interacciones se optimizan para garantizar un rendimiento impecable en dispositivos móviles sin sobrecargar la carga de scripts.',
          ],
          fr: [
            'Framer excelle dans les animations fluides et réactives\u00a0: parallaxe, éléments adhésifs, cartes interactives et boutons magnétiques qui dynamisent la page.',
            'Toutes les animations sont optimisées pour maintenir une cadence parfaite sur mobile sans alourdir le chargement.',
          ],
        },
      },
      {
        heading: { en: 'Built-in CMS and easy localization', es: 'CMS integrado y fácil internacionalización', fr: 'CMS intégré et localisation simplifiée' },
        paragraphs: {
          en: [
            'Framer includes a native CMS for blogs, job postings, customer stories and release notes that your team can update without technical knowledge.',
            'Built-in localization features allow your marketing site to support multiple languages seamlessly.',
          ],
          es: [
            'Framer incluye un CMS nativo para blogs, ofertas de empleo, casos de éxito y notas de versión que tu equipo gestiona sin conocimientos técnicos.',
            'Sus funciones de localización permiten que el sitio de marketing admita múltiples idiomas con total naturalidad.',
          ],
          fr: [
            'Framer intègre un CMS natif pour vos articles, offres d\'emploi, témoignages et notes de version, facilement gérables par votre équipe.',
            'Les fonctionnalités de localisation intégrées permettent d\'adapter votre site en plusieurs langues en toute simplicité.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: {
          en: 'When should we choose Framer over Webflow or Next.js?',
          es: '¿Cuándo conviene elegir Framer frente a Webflow o Next.js?',
          fr: 'Quand privilégier Framer par rapport à Webflow ou Next.js\u00a0?',
        },
        answer: {
          en: 'Framer is ideal for startups and marketing teams that need a visually stunning, fast-loading marketing site or landing page with rich animations, where speed of iteration is the top priority. For complex eCommerce or backend logic, Next.js or Webflow may be better.',
          es: 'Framer es idóneo para startups y equipos que priorizan una landing page visualmente deslumbrante, rápida y con animaciones atractivas, donde iterar con agilidad es fundamental. Para comercios complejos o lógica back-end, Next.js o Webflow pueden ser más adecuados.',
          fr: 'Framer est idéal pour les startups recherchant un site marketing spectaculaire, ultra-rapide et riche en animations, où la rapidité d\'itération prime. Pour du e-commerce complexe ou des besoins back-end avancés, Next.js ou Webflow restent préférables.',
        },
      },
      {
        question: {
          en: 'Can we edit the content in Framer without breaking the design?',
          es: '¿Podemos editar contenido en Framer sin desconfigurar el diseño?',
          fr: 'Peut-on modifier le contenu dans Framer sans casser le design\u00a0?',
        },
        answer: {
          en: 'Yes. Framer provides structured content fields and component properties that protect the layout while letting your team update text, images and links freely.',
          es: 'Sí. Framer ofrece campos estructurados y propiedades de componentes que protegen la maquetación mientras tu equipo actualiza textos, imágenes y enlaces con total libertad.',
          fr: 'Oui. Framer propose des champs de contenu structurés et des propriétés de composants qui sécurisent la mise en page tout en laissant votre équipe libre de modifier textes et visuels.',
        },
      },
      {
        question: {
          en: 'How does SEO work in Framer?',
          es: '¿Cómo funciona el SEO en Framer?',
          fr: 'Comment se passe le SEO sur Framer\u00a0?',
        },
        answer: {
          en: 'Framer generates fast, server-rendered static HTML with full support for custom meta tags, Open Graph images, canonical links, sitemaps and redirects, making it highly competitive for search engines.',
          es: 'Framer genera HTML estático optimizado con soporte completo para metaetiquetas, imágenes Open Graph, enlaces canónicos, sitemaps y redirecciones, ofreciendo un excelente rendimiento SEO.',
          fr: 'Framer génère un code HTML statique ultra-rapide avec prise en charge complète des balises méta, images Open Graph, balises canoniques, sitemaps et redirections pour un référencement optimal.',
        },
      },
    ],
    relatedProjects: ['ai-agent-landing', 'stayease'],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function servicesByPillar(pillar: ServicePillar): Service[] {
  return services.filter((service) => service.pillar === pillar)
}

/** The 6 services showcased on the home page (3 design, 3 development). */
export const featuredServices = services.filter((service) => service.featured)

export function serviceSelectOptions(locale: Locale): Array<{ value: string; label: string; pillar: ServicePillar }> {
  return services.map((service) => ({
    value: service.slug,
    label: service.title[locale],
    pillar: service.pillar,
  }))
}

