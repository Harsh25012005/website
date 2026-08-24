import type { ContentSection, Faq, Localized, Testimonial } from './types'

/**
 * The service list itself now lives in `content/services.ts`, one entry per
 * `/services/[slug]` page. It is re-exported here because `lib/schema.ts` and
 * the home page section have always read it from this module, and the offer
 * catalogue and the About page describe the same offers.
 */
export {
  services,
  getService,
  servicesByPillar,
  featuredServices,
} from './services'

export const servicesProcess: ContentSection[] = [
  {
    heading: { en: '01 - Discover', es: '01 - Descubrimiento', fr: '01 - Découverte' },
    paragraphs: {
      en: [
        'A short call or written brief to understand the product, its users, the screens in scope and what "done" looks like, before any design starts.',
      ],
      es: [
        'Una breve llamada o brief por escrito para entender el producto, sus usuarios, las pantallas dentro del alcance y la definición de éxito, antes de iniciar el diseño.',
      ],
      fr: [
        'Un court appel ou un brief écrit pour comprendre le produit, ses utilisateurs, les écrans concernés et la définition du résultat attendu, avant tout travail de design.',
      ],
    },
  },
  {
    heading: { en: '02 - Design', es: '02 - Diseño', fr: '02 - Design' },
    paragraphs: {
      en: [
        'User flows and wireframes first, then high-fidelity UI in Figma, reviewed with you at each stage rather than revealed at the end.',
      ],
      es: [
        'Flujos de usuario y wireframes primero, luego UI en alta fidelidad en Figma, revisados conjuntamente en cada fase en lugar de presentados al final.',
      ],
      fr: [
        'Parcours utilisateurs et wireframes d\'abord, puis interface haute fidélité dans Figma, validés avec vous à chaque étape plutôt que dévoilés à la fin.',
      ],
    },
  },
  {
    heading: { en: '03 - Build', es: '03 - Desarrollo', fr: '03 - Développement' },
    paragraphs: {
      en: [
        'For projects that need it, the approved design is built as working front-end code (HTML, CSS, Tailwind CSS, React or Next.js), responsive from the start.',
      ],
      es: [
        'Para proyectos que lo requieran, el diseño aprobado se desarrolla como código front-end funcional (HTML, CSS, Tailwind CSS, React o Next.js), responsive desde el primer momento.',
      ],
      fr: [
        'Pour les projets qui le nécessitent, le design validé est intégré en code front-end fonctionnel (HTML, CSS, Tailwind CSS, React ou Next.js), responsive dès le départ.',
      ],
    },
  },
  {
    heading: { en: '04 - Handoff', es: '04 - Entrega', fr: '04 - Livraison' },
    paragraphs: {
      en: [
        'Organised Figma files, documented components and tokens, and a build that matches the design, with everything your developers need to take it forward.',
      ],
      es: [
        'Archivos de Figma estructurados, componentes y tokens documentados, y un desarrollo fiel al diseño, con todo lo que tu equipo técnico necesita para continuarlo.',
      ],
      fr: [
        'Fichiers Figma organisés, composants et tokens documentés, et une intégration fidèle au design, avec tout le nécessaire pour que vos développeurs prennent le relais.',
      ],
    },
  },
]

/**
 * Questions asked on nearly every enquiry, answered on the page instead of over
 * email.
 *
 * These earn their place three times over: they are the copy that converts a
 * reader who is comparing designers, they are the only part of the site written
 * in the phrasing people actually search ("do you code the site too", "how much
 * does UI/UX design cost"), and they are the source for the `FAQPage` schema on
 * `/services`, which is what gets a passage of this page quoted directly in an
 * AI answer or a featured snippet.
 *
 * ⚠️  Answers must stay literally true — schema turns them into claims Google
 * holds the site to. Where a real number exists (a rate, a guaranteed turnaround,
 * a minimum engagement), replace the scope-dependent wording below with it; the
 * specific answer always outperforms the careful one.
 */
export const servicesFaqs: Faq[] = [
  {
    question: {
      en: 'What does a UI/UX design project cost?',
      es: '¿Cuánto cuesta un proyecto de diseño UI/UX?',
      fr: 'Combien coûte un projet de design UI/UX\u00a0?',
    },
    answer: {
      en: 'Every project is quoted individually, because a landing page and a multi-screen SaaS product are not the same job. Tell me the scope, the screens involved and your timeline, and you get a fixed price for a defined deliverable rather than an open-ended hourly rate.',
      es: 'Cada proyecto se presupuesta de forma individual, ya que una landing page y un producto SaaS multipantalla no representan el mismo trabajo. Cuéntame el alcance, las pantallas necesarias y tus plazos, y recibirás un precio cerrado para un entregable definido en lugar de una tarifa horaria abierta.',
      fr: 'Chaque projet fait l\'objet d\'un devis sur mesure, car une landing page et un produit SaaS multi-écrans ne représentent pas la même charge de travail. Décrivez-moi le périmètre, les écrans prévus et vos délais, et vous obtiendrez un tarif forfaitaire pour un livrable défini plutôt qu\'un taux horaire indéterminé.',
    },
  },
  {
    question: {
      en: 'How long does a design project take?',
      es: '¿Cuánto tiempo lleva un proyecto de diseño?',
      fr: 'Combien de temps prend un projet de design\u00a0?',
    },
    answer: {
      en: 'It depends on the number of screens and how settled the product decisions are: a single landing page and a multi-screen product are different jobs. The timeline is agreed at the brief stage and written into the scope before design starts, so it is fixed before you commit rather than estimated as we go.',
      es: 'Depende del número de pantallas y del nivel de definición del producto: una sola landing page y un producto complejo requieren tiempos distintos. El calendario se acuerda en la fase de brief y se fija en el alcance antes de comenzar el diseño, quedando establecido antes de tu compromiso en vez de estimarse sobre la marcha.',
      fr: 'Cela dépend du nombre d\'écrans et du degré de maturité des décisions produit\u00a0: une simple landing page et un produit multi-écrans sont des missions différentes. Le planning est convenu lors du brief et inscrit dans le cahier des charges avant de démarrer, fixé avant tout engagement plutôt qu\'estimé en cours de route.',
    },
  },
  {
    question: {
      en: 'Do you build the website as well as design it?',
      es: '¿También desarrollas el sitio web además de diseñarlo?',
      fr: 'Développez-vous également le site en plus de le concevoir\u00a0?',
    },
    answer: {
      en: 'Yes. I build front ends in HTML, CSS, Tailwind CSS, React and Next.js, so on projects that need it the approved Figma design is delivered as a working, responsive build rather than a file someone else has to interpret. Design-only engagements are equally fine if you already have developers.',
      es: 'Sí. Desarrollo interfaces en HTML, CSS, Tailwind CSS, React y Next.js, por lo que en proyectos que lo necesiten, el diseño aprobado en Figma se entrega como una versión funcional y responsive en lugar de un archivo que otros deban interpretar. Los proyectos solo de diseño también son bienvenidos si ya cuentas con equipo de desarrollo.',
      fr: 'Oui. Je développe le front-end en HTML, CSS, Tailwind CSS, React et Next.js\u00a0; pour les projets qui le demandent, la maquette Figma validée est livrée sous forme d\'intégration fonctionnelle et responsive plutôt qu\'un simple fichier à interpréter. Les missions de design seul conviennent tout autant si vous disposez déjà de développeurs.',
    },
  },
  {
    question: {
      en: 'Do you work with clients outside India?',
      es: '¿Trabajas con clientes fuera de la India?',
      fr: 'Travaillez-vous avec des clients hors d\'Inde\u00a0?',
    },
    answer: {
      en: 'Yes. I am based in Ahmedabad, Gujarat, India and work remotely with founders and small teams worldwide, keeping enough overlap with your working day for reviews and calls. All work and communication is in English.',
      es: 'Sí. Tengo mi sede en Ahmedabad, Guyarat (India) y trabajo en remoto con fundadores y equipos de todo el mundo, manteniendo solapamiento con tu jornada laboral para llamadas y revisiones. Todo el trabajo y la comunicación se realiza en inglés.',
      fr: 'Oui. Je suis basé à Ahmedabad, Gujarat, en Inde, et je travaille à distance avec des fondateurs et de petites équipes à l\'international, en assurant un chevauchement horaire suffisant pour les points et revues. L\'ensemble du travail et des échanges se fait en anglais.',
    },
  },
  {
    question: {
      en: 'What do I receive at the end of a project?',
      es: '¿Qué recibo al finalizar el proyecto?',
      fr: 'Que reçois-je à la fin d\'un projet\u00a0?',
    },
    answer: {
      en: 'Organised Figma files with the components, colour, type and spacing tokens documented, a clickable prototype where the project calls for one, and on build engagements the responsive coded front end, QA-tested across browsers.',
      es: 'Archivos organizados de Figma con componentes y tokens de color, tipografía y espaciado documentados, un prototipo interactivo cuando el proyecto lo requiera, y en proyectos con desarrollo, el front-end responsive probado en los principales navegadores.',
      fr: 'Des fichiers Figma structurés avec composants et tokens (couleurs, typographie, espacements) documentés, un prototype cliquable si le projet le requiert, et pour les projets avec intégration, le code front-end responsive testé sur tous les navigateurs.',
    },
  },
  {
    question: {
      en: 'Can you redesign an existing product rather than start over?',
      es: '¿Puedes rediseñar un producto existente en lugar de empezar de cero?',
      fr: 'Pouvez-vous refondre un produit existant plutôt que de repartir de zéro\u00a0?',
    },
    answer: {
      en: 'Yes, and it is often the better option. A redesign starts with reviewing the screens you already have, so the work targets the parts that are costing you users instead of rebuilding what already works.',
      es: 'Sí, y a menudo es la mejor opción. Un rediseño comienza auditando las pantallas existentes para concentrar el esfuerzo en los puntos de fricción que hacen perder usuarios, en lugar de reconstruir lo que ya funciona.',
      fr: 'Oui, et c\'est souvent la meilleure approche. Une refonte commence par l\'analyse des écrans existants pour cibler directement les éléments qui freinent vos utilisateurs, sans reconstruire inutilement ce qui fonctionne déjà bien.',
    },
  },
  {
    question: {
      en: 'How do we start?',
      es: '¿Cómo empezamos?',
      fr: 'Comment démarrer\u00a0?',
    },
    answer: {
      en: 'Send a few lines about the product, the scope and your timeline through the contact page or by email. I read everything and usually reply within a couple of working days, and the first step is a short call or written brief before any design work begins.',
      es: 'Envía unas líneas sobre el producto, el alcance y tus plazos a través de la página de contacto o por correo. Reviso todos los mensajes y respondo habitualmente en un par de días laborables. El primer paso es una breve llamada o brief antes de iniciar cualquier trabajo.',
      fr: 'Envoyez quelques lignes sur votre produit, le périmètre et vos délais via la page de contact ou par e-mail. Je lis chaque message et réponds généralement sous deux jours ouvrés. La première étape consiste en un court échange ou un brief écrit avant de débuter.',
    },
  },
]

/** Real client quotes go here once there are ones worth publishing. Never seed placeholders. */
export const testimonials: Testimonial[] = []

/**
 * Derived, not a flag — the same pattern as `pricingIsPublishable` and
 * `profileSocials`. While it is false, `/testimonials` ships `noindex, follow`,
 * stays out of `sitemap.ts` and stays out of the footer nav. Add one real
 * quote above and the page publishes itself.
 *
 * The empty state is deliberate too. A testimonials page carrying invented
 * praise is the fastest way to lose a prospect who checks, and `schema.ts`
 * already refuses to emit `aggregateRating` or `review` for the same reason.
 * An honest "not yet" costs nothing; a fabricated quote attributed to a person
 * who did not say it is a claim about a real third party.
 */
export const testimonialsArePublishable = testimonials.length > 0

export const aboutIntro: Localized<string[]> = {
  en: [
    'I’m Harsh Vaghela, a UI/UX and product designer based in Ahmedabad, Gujarat, India. I work as a Product Designer at Code Theorem, and take on freelance design systems, web UI, mobile app design and SaaS product design for founders and small teams, locally and remotely worldwide.',
    'I design in Figma, Framer, Webflow and Sketch, then build the front end in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS and PHP, so what ships stays close to what was designed. I completed my BCA at Bholabhai Patel College of Computer Studies and am pursuing my MCA at Bhagwan Swaminarayan Institute of Technology.',
  ],
  es: [
    'Soy Harsh Vaghela, diseñador UI/UX y de producto con sede en Ahmedabad, Guyarat (India). Trabajo como Product Designer en Code Theorem y realizo proyectos freelance de sistemas de diseño, interfaces web, apps móviles y productos SaaS para fundadores y equipos, tanto localmente como en remoto en todo el mundo.',
    'Diseño en Figma, Framer, Webflow y Sketch, y desarrollo el front-end en HTML, CSS, JavaScript, React, Next.js, Tailwind CSS y PHP, garantizando que el producto final sea fiel al diseño. Completé mi grado BCA en el Bholabhai Patel College of Computer Studies y curso mi máster MCA en el Bhagwan Swaminarayan Institute of Technology.',
  ],
  fr: [
    'Je suis Harsh Vaghela, designer UI/UX et produit basé à Ahmedabad, Gujarat, en Inde. Je travaille comme Product Designer chez Code Theorem et réalise des missions freelance en design systems, interfaces web, applications mobiles et produits SaaS pour des fondateurs et des équipes à travers le monde.',
    'Je conçois dans Figma, Framer, Webflow et Sketch, puis développe le front-end en HTML, CSS, JavaScript, React, Next.js, Tailwind CSS et PHP pour que la production reste parfaitement fidèle au design. Diplômé d\'un BCA au Bholabhai Patel College of Computer Studies, je prépare actuellement mon MCA au Bhagwan Swaminarayan Institute of Technology.',
  ],
}

export const aboutChapters: ContentSection[] = [
  {
    heading: {
      en: 'From BCA to UI/UX design',
      es: 'Del grado en informática al diseño UI/UX',
      fr: 'Du diplôme d\'informatique au design UI/UX',
    },
    paragraphs: {
      en: [
        'My interest in design started during my BCA, where computer science coursework kept pulling me toward the interface side of every project rather than only the logic behind it. Figma became the tool I kept coming back to, and UI/UX design turned from a course topic into the thing I actually wanted to do.',
        'Picking up front-end development alongside it (HTML, CSS, JavaScript, and later React and Next.js) turned out to be the useful detour. Understanding how an interface actually gets built changed how I design in the first place.',
      ],
      es: [
        'Mi interés por el diseño comenzó durante mis estudios de BCA, donde los proyectos me inclinaban naturalmente hacia la interfaz de usuario más que a la lógica interna. Figma se convirtió en mi herramienta de referencia, y el diseño UI/UX pasó de ser una materia a mi verdadera vocación.',
        'Aprender desarrollo front-end en paralelo (HTML, CSS, JavaScript y más adelante React y Next.js) resultó ser una ventaja decisiva. Comprender cómo se construye técnicamente una interfaz transformó mi forma de diseñarla desde el principio.',
      ],
      fr: [
        'Mon intérêt pour le design est né pendant mes études de BCA, où les projets me portaient naturellement vers la dimension interface plutôt que vers la seule logique sous-jacente. Figma est devenu mon outil de prédilection, et le design UI/UX est passé d\'un sujet de cours à ma véritable vocation.',
        'Apprendre le développement front-end en parallèle (HTML, CSS, JavaScript, puis React et Next.js) s\'est avéré un atout majeur. Comprendre la manière dont une interface est techniquement intégrée a profondément fait évoluer ma pratique du design.',
      ],
    },
  },
  {
    heading: {
      en: 'First freelance projects',
      es: 'Primeros proyectos freelance',
      fr: 'Premiers projets freelance',
    },
    paragraphs: {
      en: [
        'My first freelance work was web UI and landing page design, where real client feedback replaced a brief written by a course. Each project pushed me to tighten spacing, hierarchy and consistency in ways a tutorial never covers.',
        'From there the work expanded into design systems and mobile app screens, and I started pairing every Figma file with a working front-end build, so a client could see the interface in a browser, not only in a prototype.',
      ],
      es: [
        'Mis primeros encargos freelance fueron diseños de UI web y landing pages, donde el feedback de clientes reales sustituyó a los ejercicios académicos. Cada proyecto me exigió perfeccionar espaciados, jerarquías y consistencia de una forma que ningún tutorial enseña.',
        'A partir de ahí, el trabajo se amplió a sistemas de diseño y pantallas de apps móviles, y comencé a acompañar cada archivo de Figma con un desarrollo front-end funcional, permitiendo al cliente interactuar en el navegador y no solo en un prototipo.',
      ],
      fr: [
        'Mes premières missions freelance portaient sur le design d\'interfaces web et de landing pages, où les retours concrets de clients ont remplacé les énoncés de cours. Chaque projet m\'a poussé à affiner les espacements, la hiérarchie et la cohérence bien au-delà de ce qu\'un tutoriel aborde.',
        'Mon activité s\'est ensuite élargie aux design systems et aux applications mobiles, et j\'ai commencé à associer chaque maquette Figma à une intégration front-end fonctionnelle, afin que les clients puissent tester l\'interface directement dans le navigateur.',
      ],
    },
  },
  {
    heading: {
      en: 'Design and code today',
      es: 'Diseño y desarrollo hoy',
      fr: 'Design et code aujourd\'hui',
    },
    paragraphs: {
      en: [
        'With 1.5+ years in the field, I’m now a Product Designer at Code Theorem in Ahmedabad, working on client products in a team alongside developers. The work runs across design systems, web UI, mobile app design and SaaS product design, and I’m completing my MCA at Bhagwan Swaminarayan Institute of Technology alongside it.',
        'I also keep taking on freelance and collaborative projects outside that role, particularly design system work, SaaS dashboards, and web UI that has to go from Figma to a live, responsive site, usually for founders and small teams who want both the design file and a working build.',
      ],
      es: [
        'Con más de un año y medio de experiencia, actualmente trabajo como Product Designer en Code Theorem en Ahmedabad, colaborando en productos para clientes codo a codo con desarrolladores. Mi labor abarca sistemas de diseño, interfaces web, apps móviles y SaaS, mientras completo mi máster MCA en el Bhagwan Swaminarayan Institute of Technology.',
        'En paralelo, continúo realizando proyectos freelance y de consultoría, especialmente en sistemas de diseño, dashboards SaaS e interfaces web que requieren pasar de Figma a un sitio responsive en producción, ideal para fundadores que buscan diseño y código integrado.',
      ],
      fr: [
        'Avec plus d\'un an et demi d\'expérience, je suis aujourd\'hui Product Designer chez Code Theorem à Ahmedabad, travaillant sur des produits clients au sein d\'équipes pluridisciplinaires avec des développeurs. Mon activité couvre les design systems, le web, le mobile et le SaaS, tout en finalisant mon MCA au Bhagwan Swaminarayan Institute of Technology.',
        'Je poursuis également des collaborations freelance en parallèle, notamment sur des design systems, des dashboards SaaS et des intégrations web complètes de Figma vers le site en ligne responsive, à destination de créateurs recherchant à la fois la maquette et le code.',
      ],
    },
  },
]

export const beyondScreens: ContentSection = {
  heading: { en: 'Beyond screens', es: 'Más allá de la pantalla', fr: 'Au-delà de l\'écran' },
  paragraphs: {
    en: [
      'Outside client work, I spend time exploring new tools and frameworks in design and front-end development; it’s part of why I ended up as much of a coder as a designer.',
      'Being a student again through my MCA keeps me close to the fundamentals, which shows up in how I approach structure and problem-solving in design work too.',
    ],
    es: [
      'Fuera del trabajo con clientes, dedico tiempo a explorar nuevas herramientas y frameworks de diseño y desarrollo front-end; es parte de la razón por la que combino diseño y programación con igual dedicación.',
      'Continuar formándome en mi MCA me mantiene conectado con los fundamentos teóricos, algo que se refleja en mi enfoque riguroso de la estructura y la resolución de problemas de diseño.',
    ],
    fr: [
      'En dehors des missions clients, j\'explore constamment de nouveaux outils et frameworks en design et front-end\u00a0; c\'est ce qui m\'a conduit à être tout autant développeur que designer.',
      'Poursuivre mon cursus en MCA me garde proche des fondamentaux, ce qui renforce ma rigueur dans la structuration et la résolution de problèmes en design.',
    ],
  },
}

export const skills = [
  'UI Design',
  'UX Design',
  'Design Systems',
  'Web UI Design',
  'Mobile App Design',
  'SaaS Product Design',
  'UX Research & Wireframing',
  'Prototyping',
  'Design to Code',
  'Front-End Development',
]

export const tools = [
  'Figma',
  'Framer',
  'Webflow',
  'Sketch',
  'HTML/CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'PHP',
]
