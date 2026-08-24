import type { ServicePillar, ServicePillarPage } from './types'

/**
 * The two hub pages between `/services` and a service detail page.
 *
 * `/services` used to be a flat list of six. At fifteen a flat list stops being
 * navigation and starts being an inventory, and it asks the visitor to work out
 * which half of the practice they need — the people who arrive wanting a Figma
 * file and the people who arrive wanting a running site are rarely the same
 * person on the same day.
 *
 * These are also the two pages that can rank for the head terms the individual
 * services are too specific to reach: "UI/UX design services" and "custom
 * development services" are not queries `/services/webflow-development` should
 * be trying to answer.
 *
 * ⚠️  `slug` here is a **static route segment** under `/services`. Next.js
 * resolves a static segment before `[slug]`, so a service in `services.ts`
 * sharing one of these slugs would never render its page and nothing would
 * fail. `content.test.ts` asserts the two sets stay disjoint.
 *
 * ⚠️  The development pillar draws the same line as `services.ts` and
 * `pricing.ts`: front end only. No back-end APIs, databases or infrastructure,
 * no native app builds. Do not widen it here without widening it there.
 */
export const pillars: Record<ServicePillar, ServicePillarPage> = {
  design: {
    pillar: 'design',
    slug: 'ui-ux-design',
    title: { en: 'UI/UX design', es: 'Diseño UI/UX', fr: 'Design UI/UX' },
    metaTitle: 'UI/UX Design Services for Web, Mobile & SaaS',
    metaDescription:
      'UI/UX design services in Figma: web UI, design systems, mobile app and SaaS product design, UX research, wireframing and audits, delivered ready for developers to build.',
    keywords: [
      'UI/UX design services',
      'freelance UI UX designer',
      'product design services',
      'Figma design services',
      'web and app UI design',
      'UX design consultant',
    ],
    heading: {
      en: 'UI/UX design for web, mobile and SaaS products',
      es: 'Diseño UI/UX para productos web, móviles y SaaS',
      fr: 'Design UI/UX pour les produits web, mobiles et SaaS',
    },
    intro: {
      en: 'Six ways into the same work: the structure of a product decided before it is drawn, the screens designed on a system rather than one at a time, and a file a developer can build from without guessing.',
      es: 'Seis vías hacia el mismo trabajo: la estructura de un producto decidida antes de dibujarla, las pantallas diseñadas sobre un sistema en lugar de una a una, y un archivo a partir del cual un desarrollador puede construir sin adivinar.',
      fr: 'Six façons d’aborder le même travail : la structure d’un produit décidée avant d’être dessinée, les écrans conçus sur un système plutôt qu’un par un, et un fichier à partir duquel un développeur peut construire sans deviner.',
    },
    sections: [
      {
        heading: { en: 'Where a project usually starts', es: 'Por dónde suele empezar un proyecto', fr: 'Par où commence généralement un projet' },
        paragraphs: {
          en: [
            'If the product is still an idea, it starts with UX research and wireframing — flows and grey boxes, where being wrong costs an afternoon. If the screens exist and something is not working, it starts with an audit, because a redesign is an expensive way to find out which parts were fine.',
            'If the decisions are already settled and you need the interface designed, it starts at web UI, mobile app or SaaS product design depending on what is being built. Design systems join whenever more than one person is going to build screens.',
          ],
          es: [
            'Si el producto todavía es una idea, empieza con investigación UX y wireframing —flujos y cajas grises, donde equivocarse cuesta una tarde—. Si las pantallas ya existen y algo no funciona, empieza con una auditoría, porque un rediseño es una forma cara de descubrir qué partes estaban bien.',
            'Si las decisiones ya están tomadas y necesitas que se diseñe la interfaz, empieza por el diseño de UI web, de app móvil o de producto SaaS, según lo que se esté construyendo. Los design systems entran en juego siempre que más de una persona vaya a construir pantallas.',
          ],
          fr: [
            'Si le produit n’est encore qu’une idée, cela commence par de la recherche UX et du wireframing — des parcours et des boîtes grises, où se tromper coûte une après-midi. Si les écrans existent et que quelque chose ne fonctionne pas, cela commence par un audit, car une refonte est une façon coûteuse de découvrir quelles parties allaient bien.',
            'Si les décisions sont déjà arrêtées et que vous avez besoin que l’interface soit conçue, cela commence par le design d’UI web, d’application mobile ou de produit SaaS selon ce qui est construit. Les design systems interviennent dès que plus d’une personne va construire des écrans.',
          ],
        },
      },
      {
        heading: { en: 'Designed against the awkward cases', es: 'Diseñado frente a los casos incómodos', fr: 'Conçu pour les cas délicats' },
        paragraphs: {
          en: [
            'The screens that break a design are never the ones in the pitch. They are the empty state before any data exists, the name three times longer than the placeholder, the expired session, the permission a user does not have, the error that arrives after the form was submitted.',
            'Those get designed here rather than left to whoever builds it. It is most of the difference between a design that survives implementation and one that gets quietly reinterpreted at build time.',
          ],
          es: [
            'Las pantallas que rompen un diseño nunca son las de la presentación. Son el estado vacío antes de que exista dato alguno, el nombre tres veces más largo que el marcador de posición, la sesión caducada, el permiso que un usuario no tiene, el error que llega después de haber enviado el formulario.',
            'Esos se diseñan aquí, en lugar de dejarlos a quien lo construya. Es buena parte de la diferencia entre un diseño que sobrevive a la implementación y uno que se reinterpreta en silencio en el momento de construirlo.',
          ],
          fr: [
            'Les écrans qui font échouer un design ne sont jamais ceux de la présentation. Ce sont l’état vide avant qu’aucune donnée n’existe, le nom trois fois plus long que le texte de substitution, la session expirée, la permission qu’un utilisateur n’a pas, l’erreur qui arrive après l’envoi du formulaire.',
            'Ceux-là sont conçus ici plutôt que laissés à celui qui construit. C’est l’essentiel de la différence entre un design qui survit à l’implémentation et un design qui se fait silencieusement réinterpréter au moment de la construction.',
          ],
        },
      },
      {
        heading: { en: 'Files built to be built from', es: 'Archivos hechos para construir a partir de ellos', fr: 'Des fichiers faits pour servir de base à la construction' },
        paragraphs: {
          en: [
            'Every design deliverable is structured for handoff: components rather than detached groups, auto layout that behaves the way CSS does, tokens for colour, type and spacing, and states shown rather than described.',
            'That is a habit that comes from building front ends as well as designing them — the file is written for the person who has to turn it into code, because often enough that person is me.',
          ],
          es: [
            'Cada entregable de diseño está estructurado para el handoff: componentes en lugar de grupos desvinculados, auto layout que se comporta como lo hace el CSS, tokens de color, tipografía y espaciado, y estados mostrados en lugar de descritos.',
            'Es un hábito que viene de construir front ends además de diseñarlos: el archivo se escribe para la persona que tiene que convertirlo en código, porque muy a menudo esa persona soy yo.',
          ],
          fr: [
            'Chaque livrable de design est structuré pour le handoff : des composants plutôt que des groupes détachés, de l’auto layout qui se comporte comme le fait le CSS, des tokens de couleur, de typographie et d’espacement, et des états montrés plutôt que décrits.',
            'C’est une habitude qui vient du fait de construire des front ends autant que de les concevoir : le fichier est écrit pour la personne qui doit le transformer en code, parce qu’assez souvent cette personne, c’est moi.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'Which design service do I actually need?', es: '¿Qué servicio de diseño necesito en realidad?', fr: 'De quel service de design ai-je réellement besoin ?' },
        answer: {
          en: 'If the product does not exist yet, start with UX research and wireframing. If it exists and is underperforming, start with a UI/UX audit. If the decisions are made and you need screens, start with web UI, mobile app or SaaS product design. If several people are building screens and they no longer match, you need a design system. Describe the situation in an enquiry and you will get a straight recommendation, including "you do not need this yet".',
          es: 'Si el producto todavía no existe, empieza con investigación UX y wireframing. Si existe y rinde por debajo de lo esperado, empieza con una auditoría UI/UX. Si las decisiones están tomadas y necesitas pantallas, empieza con diseño de UI web, de app móvil o de producto SaaS. Si varias personas están construyendo pantallas y ya no encajan entre sí, necesitas un design system. Describe la situación en una consulta y recibirás una recomendación directa, incluido un «esto todavía no lo necesitas».',
          fr: 'Si le produit n’existe pas encore, commencez par de la recherche UX et du wireframing. S’il existe et sous-performe, commencez par un audit UI/UX. Si les décisions sont prises et que vous avez besoin d’écrans, commencez par le design d’UI web, d’application mobile ou de produit SaaS. Si plusieurs personnes construisent des écrans et qu’ils ne correspondent plus, vous avez besoin d’un design system. Décrivez la situation dans une demande et vous obtiendrez une recommandation franche, y compris « vous n’en avez pas encore besoin ».',
        },
      },
      {
        question: { en: 'Can you build what you design?', es: '¿Puedes construir lo que diseñas?', fr: 'Pouvez-vous construire ce que vous concevez ?' },
        answer: {
          en: 'Yes, for the web. The approved design can continue into a coded front end in React, Next.js, Webflow or Framer — that is the development side of the practice. Design-only engagements are equally normal if you already have developers, and nothing here is priced to push you toward the build.',
          es: 'Sí, para la web. El diseño aprobado puede continuar en un front end en código con React, Next.js, Webflow o Framer: es la parte de desarrollo del estudio. Los encargos solo de diseño son igual de habituales si ya tienes desarrolladores, y aquí nada está tarifado para empujarte hacia la construcción.',
          fr: 'Oui, pour le web. Le design approuvé peut se poursuivre en un front end codé avec React, Next.js, Webflow ou Framer — c’est le versant développement de l’activité. Les missions de design seul sont tout aussi courantes si vous avez déjà des développeurs, et rien ici n’est tarifé pour vous pousser vers la construction.',
        },
      },
      {
        question: { en: 'Do you work with an existing brand or design team?', es: '¿Trabajas con una marca o un equipo de diseño ya existentes?', fr: 'Travaillez-vous avec une marque ou une équipe de design déjà en place ?' },
        answer: {
          en: 'Yes. Where you have brand guidelines the UI is designed inside them, and where the guidelines do not cover something an interface needs — states, data density, error messaging — I extend them in the same spirit rather than inventing a second visual language. Working alongside an in-house designer on overflow or a specific product area is a normal arrangement.',
          es: 'Sí. Donde tienes guías de marca, la UI se diseña dentro de ellas, y donde las guías no cubren algo que una interfaz necesita —estados, densidad de datos, mensajes de error— las amplío en el mismo espíritu, en lugar de inventar un segundo lenguaje visual. Trabajar junto a un diseñador interno para picos de trabajo o un área de producto concreta es un acuerdo habitual.',
          fr: 'Oui. Là où vous avez des lignes directrices de marque, l’UI est conçue à l’intérieur de celles-ci, et là où elles ne couvrent pas quelque chose dont une interface a besoin — états, densité de données, messages d’erreur — je les prolonge dans le même esprit plutôt que d’inventer un second langage visuel. Travailler aux côtés d’un designer interne pour un surcroît d’activité ou un domaine de produit précis est un arrangement courant.',
        },
      },
    ],
    linkLabel: { en: 'See all UI/UX design services', es: 'Ver todos los servicios de diseño UI/UX', fr: 'Voir tous les services de design UI/UX' },
    crossLink: {
      en: 'Already have the design, and need it built?',
      es: '¿Ya tienes el diseño y necesitas construirlo?',
      fr: 'Vous avez déjà le design et devez le faire construire ?',
    },
  },
  development: {
    pillar: 'development',
    slug: 'custom-development',
    title: { en: 'Custom development', es: 'Desarrollo a medida', fr: 'Développement sur mesure' },
    metaTitle: 'Custom Development: React, Next.js, Webflow & Framer',
    metaDescription:
      'Custom front-end development services: React and Next.js builds, Figma to code, Webflow and Framer sites, and website redesigns.',
    keywords: [
      'custom development services',
      'front-end development services',
      'React and Next.js development',
      'Webflow and Framer development',
      'freelance web developer',
      'design to code development',
    ],
    heading: {
      en: 'Custom development, front end first',
      es: 'Desarrollo a medida, primero el front end',
      fr: 'Développement sur mesure, le front end d’abord',
    },
    intro: {
      en: 'Six ways to get a design onto the internet: coded builds in React and Next.js, CMS builds in Webflow and Framer, and the redesign work that follows launch.',
      es: 'Seis formas de llevar un diseño a internet: desarrollos en código con React y Next.js, desarrollos con CMS en Webflow y Framer, y el trabajo de rediseño que viene después del lanzamiento.',
      fr: 'Six façons de mettre un design en ligne : des réalisations codées en React et Next.js, des réalisations CMS en Webflow et Framer, et le travail de refonte qui suit le lancement.',
    },
    sections: [
      {
        heading: { en: 'One line, stated up front', es: 'Una línea, dicha desde el principio', fr: 'Une ligne, annoncée d’emblée' },
        paragraphs: {
          en: [
            'I build front ends. HTML, CSS, Tailwind CSS, JavaScript, React and Next.js. Back-end APIs, databases, authentication systems and infrastructure are outside what I take on, and so are native iOS and Android builds.',
            'On projects that need those, I build the interface and work alongside the developers who own that half. Saying this before an estimate is the whole point of putting it in the first paragraph — it is the most common way a one-person build goes wrong, and it is entirely avoidable.',
          ],
          es: [
            'Construyo front ends. HTML, CSS, Tailwind CSS, JavaScript, React y Next.js. Las APIs de back-end, las bases de datos, los sistemas de autenticación y la infraestructura quedan fuera de lo que asumo, y también las apps nativas de iOS y Android.',
            'En los proyectos que las necesitan, construyo la interfaz y trabajo junto a los desarrolladores que se encargan de esa mitad. Decir esto antes de un presupuesto es justo el motivo de ponerlo en el primer párrafo: es la forma más común en que un desarrollo de una sola persona sale mal, y es del todo evitable.',
          ],
          fr: [
            'Je construis des front ends. HTML, CSS, Tailwind CSS, JavaScript, React et Next.js. Les API back-end, les bases de données, les systèmes d’authentification et l’infrastructure sont en dehors de ce que je prends en charge, tout comme les applications natives iOS et Android.',
            'Sur les projets qui en ont besoin, je construis l’interface et travaille aux côtés des développeurs qui s’occupent de cette moitié. Dire cela avant un devis, c’est tout l’intérêt de le placer dans le premier paragraphe : c’est la façon la plus courante dont une réalisation menée par une seule personne tourne mal, et elle est tout à fait évitable.',
          ],
        },
      },
      {
        heading: { en: 'The platform is a question about your team', es: 'La plataforma es una pregunta sobre tu equipo', fr: 'La plateforme est une question sur votre équipe' },
        paragraphs: {
          en: [
            'A coded Next.js build, a Webflow site and a Framer page are three answers to "who edits this after launch, and how often". That question decides the platform far more often than any technical characteristic does.',
            'Because all three are on offer here, the recommendation is not a sales decision. If your marketing team will publish weekly, you will be pointed at Webflow or Framer. If nobody will ever touch it again, a coded build is cheaper to run.',
          ],
          es: [
            'Un desarrollo en código con Next.js, un sitio en Webflow y una página en Framer son tres respuestas a «quién edita esto después del lanzamiento, y con qué frecuencia». Esa pregunta decide la plataforma mucho más a menudo que cualquier característica técnica.',
            'Como aquí se ofrecen las tres, la recomendación no es una decisión de venta. Si tu equipo de marketing va a publicar cada semana, se te orientará hacia Webflow o Framer. Si nadie va a volver a tocarlo nunca, un desarrollo en código es más barato de mantener.',
          ],
          fr: [
            'Une réalisation codée en Next.js, un site Webflow et une page Framer sont trois réponses à « qui modifie ceci après le lancement, et à quelle fréquence ». Cette question décide de la plateforme bien plus souvent que n’importe quelle caractéristique technique.',
            'Comme les trois sont proposées ici, la recommandation n’est pas une décision commerciale. Si votre équipe marketing publie chaque semaine, on vous orientera vers Webflow ou Framer. Si personne n’y touchera plus jamais, une réalisation codée coûte moins cher à exploiter.',
          ],
        },
      },
      {
        heading: { en: 'Built to last beyond launch', es: 'Construido para durar más allá del lanzamiento', fr: 'Construit pour durer au-delà du lancement' },
        paragraphs: {
          en: [
            'A site that shipped fast and clean in March is tested against real content and users as it grows.',
            'That is what redesign work is for: taking an existing build and bringing it up to standard rather than letting it quietly decay.',
          ],
          es: [
            'Un sitio que se lanzó rápido y limpio en marzo se pone a prueba contra contenido y usuarios reales a medida que crece.',
            'Para eso está el trabajo de rediseño: coger un desarrollo existente y ponerlo al día, en lugar de dejar que se degrade en silencio.',
          ],
          fr: [
            'Un site livré rapidement et proprement en mars est mis à l’épreuve du contenu et des utilisateurs réels à mesure qu’il grandit.',
            'C’est à cela que sert le travail de refonte : reprendre une réalisation existante et la remettre à niveau plutôt que de la laisser se dégrader en silence.',
          ],
        },
      },
    ],
    faqs: [
      {
        question: { en: 'Do you do back-end or full-stack development?', es: '¿Haces desarrollo back-end o full-stack?', fr: 'Faites-vous du développement back-end ou full-stack ?' },
        answer: {
          en: 'No. Front end only — React, Next.js, Tailwind CSS, HTML and CSS. Back-end APIs, databases, authentication and infrastructure are outside what I take on, and native iOS and Android builds are too. On full-stack projects I build the interface and work alongside your back-end developers.',
          es: 'No. Solo front end: React, Next.js, Tailwind CSS, HTML y CSS. Las APIs de back-end, las bases de datos, la autenticación y la infraestructura quedan fuera de lo que asumo, y las apps nativas de iOS y Android también. En los proyectos full-stack construyo la interfaz y trabajo junto a tus desarrolladores de back-end.',
          fr: 'Non. Front end uniquement — React, Next.js, Tailwind CSS, HTML et CSS. Les API back-end, les bases de données, l’authentification et l’infrastructure sont en dehors de ce que je prends en charge, et les applications natives iOS et Android aussi. Sur les projets full-stack, je construis l’interface et travaille aux côtés de vos développeurs back-end.',
        },
      },
      {
        question: { en: 'Can you build a design I already have?', es: '¿Puedes construir un diseño que ya tengo?', fr: 'Pouvez-vous construire un design que j’ai déjà ?' },
        answer: {
          en: 'Yes, and it is a large share of this work. I build from other people’s Figma files regularly. Where the file is missing states, breakpoints or edge cases, I will flag what needs deciding before the build rather than guessing and showing you the result afterwards.',
          es: 'Sí, y es una buena parte de este trabajo. Construyo a partir de archivos de Figma de otras personas con regularidad. Donde al archivo le falten estados, breakpoints o casos límite, señalaré qué hay que decidir antes de construir, en lugar de adivinar y enseñarte el resultado después.',
          fr: 'Oui, et cela représente une grande part de ce travail. Je construis régulièrement à partir des fichiers Figma d’autres personnes. Là où le fichier manque d’états, de breakpoints ou de cas limites, je signalerai ce qui doit être décidé avant la construction plutôt que de deviner et de vous montrer le résultat après coup.',
        },
      },
      {
        question: { en: 'Who owns the code and the accounts?', es: '¿De quién son el código y las cuentas?', fr: 'À qui appartiennent le code et les comptes ?' },
        answer: {
          en: 'You do, in every case. Source code is delivered in your repository. Webflow, Framer and hosting accounts are yours, billed to you directly — I do not hold client accounts or resell platform subscriptions. You should be able to stop working with me and have nothing stop working.',
          es: 'Tuyos, en todos los casos. El código fuente se entrega en tu repositorio. Las cuentas de Webflow, Framer y hosting son tuyas, facturadas directamente a ti: no mantengo cuentas de clientes ni revendo suscripciones de plataformas. Deberías poder dejar de trabajar conmigo sin que nada deje de funcionar.',
          fr: 'À vous, dans tous les cas. Le code source est livré dans votre dépôt. Les comptes Webflow, Framer et d’hébergement sont les vôtres, facturés directement à vous — je ne détiens pas de comptes clients et ne revends pas d’abonnements à des plateformes. Vous devriez pouvoir cesser de travailler avec moi sans que rien ne cesse de fonctionner.',
        },
      },
    ],
    linkLabel: { en: 'See all custom development services', es: 'Ver todos los servicios de desarrollo a medida', fr: 'Voir tous les services de développement sur mesure' },
    crossLink: {
      en: 'Need the design before the build?',
      es: '¿Necesitas el diseño antes de la construcción?',
      fr: 'Besoin du design avant la construction ?',
    },
  },
}

export const pillarOrder: ServicePillar[] = ['design', 'development']

/** Every hub slug, for the route-collision assertion in `content.test.ts`. */
export const pillarSlugs = pillarOrder.map((key) => pillars[key].slug)

export function pillarPath(pillar: ServicePillar): string {
  return `/services/${pillars[pillar].slug}`
}

/** The other pillar — the two hubs and every detail page cross-link. */
export function otherPillar(pillar: ServicePillar): ServicePillar {
  return pillar === 'design' ? 'development' : 'design'
}
