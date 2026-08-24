import type { Faq, Localized, ProcessPhase } from './types'

/**
 * Copy for `/process`.
 *
 * Not to be confused with `servicesProcess` in `about.ts`, which is the
 * four-step summary rendered on `/services`. That one exists to reassure
 * someone comparing designers; this one exists to answer the question a client
 * asks after they have decided — what actually happens, in what order, and what
 * do I have at the end of each part.
 *
 * The two must not converge into the same text. If this page ever reads like a
 * longer version of the summary, it has stopped earning its URL: keep the
 * summary at four steps and keep the detail, the outputs and the honest parts
 * (what slips, who is waiting on whom) here.
 *
 * ⚠️  No invented turnarounds. Every timing statement below is relative
 * ("before design starts", "while it is still cheap") rather than a number of
 * days, because a specific promise here becomes a claim on every project. When
 * a real, repeatable figure exists, put it in — the specific answer always
 * outperforms the careful one.
 */

export const processIntro: Localized<string> = {
  en: 'Every project runs through the same six phases, whether it ends at a Figma file or a deployed site. The point of writing them down is that you can see where your money is at any moment, and what exists at the end of each stage if the project stops there.',
  es: 'Todo proyecto pasa por las mismas seis fases, tanto si termina en un archivo de Figma como en un sitio desplegado. El sentido de dejarlas por escrito es que puedas ver en qué punto está tu dinero en cualquier momento, y qué existe al final de cada etapa si el proyecto se detiene ahí.',
  fr: 'Chaque projet passe par les six mêmes phases, qu’il s’achève sur un fichier Figma ou sur un site déployé. L’intérêt de les mettre par écrit, c’est que vous pouvez voir où en est votre argent à tout moment, et ce qui existe à la fin de chaque étape si le projet s’arrête là.',
}

export const processPhases: ProcessPhase[] = [
  {
    number: '01',
    heading: { en: 'Brief', es: 'Brief', fr: 'Brief' },
    paragraphs: {
      en: [
        'A short call or a written brief, covering what the product does, who it is for, what is already decided, and what "done" looks like. The most useful part is usually the constraints: the deadline that is real, the stakeholder who has to approve, the technical decision already made.',
        'If a project is a bad fit — the wrong scope, the wrong stack, or work that needs a specialist I am not — this is where that gets said. It is a cheaper place to find out than week three, and it happens often enough to be worth mentioning.',
      ],
      es: [
        'Una llamada corta o un brief por escrito, que cubra qué hace el producto, para quién es, qué está ya decidido y qué aspecto tiene lo «terminado». La parte más útil suelen ser las restricciones: el plazo que es real, la persona que tiene que aprobar, la decisión técnica ya tomada.',
        'Si un proyecto no encaja —el alcance equivocado, el stack equivocado, o un trabajo que necesita un especialista que no soy— este es el momento en que se dice. Es un lugar más barato para descubrirlo que la tercera semana, y pasa lo bastante a menudo como para mencionarlo.',
      ],
      fr: [
        'Un court appel ou un brief écrit, couvrant ce que fait le produit, à qui il s’adresse, ce qui est déjà décidé et à quoi ressemble le « terminé ». La partie la plus utile, ce sont généralement les contraintes : l’échéance qui est réelle, la personne qui doit approuver, la décision technique déjà prise.',
        'Si un projet ne convient pas — le mauvais périmètre, la mauvaise stack, ou un travail qui demande un spécialiste que je ne suis pas — c’est ici que cela se dit. C’est un endroit moins coûteux pour s’en apercevoir que la troisième semaine, et cela arrive assez souvent pour valoir la peine d’être mentionné.',
      ],
    },
    output: { en: 'A shared understanding of the problem, and a yes or no.', es: 'Una comprensión compartida del problema, y un sí o un no.', fr: 'Une compréhension partagée du problème, et un oui ou un non.' },
  },
  {
    number: '02',
    heading: { en: 'Scope and quote', es: 'Alcance y presupuesto', fr: 'Périmètre et devis' },
    paragraphs: {
      en: [
        'The brief becomes a written scope: what is included, what is explicitly not, the phases, the review points, the payment milestones and the timeline. It is quoted as a fixed price against that scope rather than as an hourly estimate.',
        'Scope changes are normal and are handled as a written change to both the scope and the price. The alternative — absorbing them quietly and arguing about it at the end — is how projects end badly for whichever side is less willing to have the conversation.',
      ],
      es: [
        'El brief se convierte en un alcance por escrito: qué se incluye, qué queda explícitamente fuera, las fases, los puntos de revisión, los hitos de pago y el calendario. Se presupuesta como un precio cerrado frente a ese alcance, en lugar de como una estimación por horas.',
        'Los cambios de alcance son normales y se gestionan como un cambio por escrito tanto del alcance como del precio. La alternativa —absorberlos en silencio y discutirlo al final— es la forma en que los proyectos terminan mal para el lado que menos dispuesto está a tener esa conversación.',
      ],
      fr: [
        'Le brief devient un périmètre écrit : ce qui est inclus, ce qui en est explicitement exclu, les phases, les points de revue, les jalons de paiement et le calendrier. Il est chiffré comme un prix fixe correspondant à ce périmètre, plutôt que comme une estimation horaire.',
        'Les changements de périmètre sont normaux et sont traités comme une modification écrite portant à la fois sur le périmètre et sur le prix. L’autre solution — les absorber en silence et en débattre à la fin — est la façon dont les projets finissent mal pour la partie la moins disposée à avoir cette conversation.',
      ],
    },
    output: { en: 'A signed scope, a fixed price and a schedule.', es: 'Un alcance firmado, un precio cerrado y un calendario.', fr: 'Un périmètre signé, un prix fixe et un calendrier.' },
  },
  {
    number: '03',
    heading: { en: 'Structure', es: 'Estructura', fr: 'Structure' },
    paragraphs: {
      en: [
        'Flows and low-fidelity wireframes before anything is styled. Drawing every screen and decision point end to end is what surfaces the branches nobody scoped: the failed payment, the expired invite, the two people editing the same record.',
        'This stage is deliberately grey and unfinished-looking, because a polished mockup changes the conversation. Show a finished screen and the feedback is about the button colour; show a wireframe and the feedback is about whether the step belongs there at all.',
      ],
      es: [
        'Flujos y wireframes de baja fidelidad antes de dar estilo a nada. Dibujar cada pantalla y cada punto de decisión de principio a fin es lo que saca a la luz las ramas que nadie contempló: el pago fallido, la invitación caducada, las dos personas editando el mismo registro.',
        'Esta etapa es deliberadamente gris y de aspecto inacabado, porque un mockup pulido cambia la conversación. Enseña una pantalla acabada y el feedback será sobre el color del botón; enseña un wireframe y el feedback será sobre si ese paso debería estar ahí siquiera.',
      ],
      fr: [
        'Des parcours et des wireframes en basse fidélité avant de styliser quoi que ce soit. Dessiner chaque écran et chaque point de décision de bout en bout, c’est ce qui fait apparaître les branches que personne n’avait prévues : le paiement échoué, l’invitation expirée, les deux personnes qui modifient le même enregistrement.',
        'Cette étape est délibérément grise et d’aspect inachevé, parce qu’une maquette soignée change la conversation. Montrez un écran fini et les retours porteront sur la couleur du bouton ; montrez un wireframe et les retours porteront sur la question de savoir si cette étape a lieu d’être.',
      ],
    },
    output: { en: 'Flow diagrams and wireframes, reviewed and agreed.', es: 'Diagramas de flujo y wireframes, revisados y acordados.', fr: 'Des diagrammes de flux et des wireframes, revus et validés.' },
  },
  {
    number: '04',
    heading: { en: 'Interface', es: 'Interfaz', fr: 'Interface' },
    paragraphs: {
      en: [
        'High-fidelity design in Figma on a grid, type scale and spacing system, built as components with tokens from the start rather than tidied into them afterwards.',
        'States are designed here, not assumed: empty, loading, error, permission-denied, and the version of every screen where the content is twice as long as the placeholder. Review happens at each stage rather than in one round at the end, so feedback lands while it is still cheap to act on.',
      ],
      es: [
        'Diseño de alta fidelidad en Figma sobre una retícula, una escala tipográfica y un sistema de espaciado, construido como componentes con tokens desde el principio, en lugar de ordenarlo dentro de ellos después.',
        'Los estados se diseñan aquí, no se dan por supuestos: vacío, cargando, error, permiso denegado, y la versión de cada pantalla en la que el contenido es el doble de largo que el marcador de posición. La revisión ocurre en cada etapa, en lugar de en una sola ronda al final, para que el feedback llegue mientras todavía es barato actuar sobre él.',
      ],
      fr: [
        'Design en haute fidélité dans Figma, sur une grille, une échelle typographique et un système d’espacement, construit en composants avec des tokens dès le départ plutôt que rangé dans ceux-ci après coup.',
        'Les états sont conçus ici, pas supposés : vide, en chargement, erreur, permission refusée, et la version de chaque écran où le contenu est deux fois plus long que le texte de substitution. La revue a lieu à chaque étape plutôt qu’en une seule fois à la fin, afin que les retours arrivent tant qu’il est encore peu coûteux d’y répondre.',
      ],
    },
    output: {
      en: 'Screens, components and tokens in Figma, plus a clickable prototype where the project needs one.',
      es: 'Pantallas, componentes y tokens en Figma, más un prototipo clicable cuando el proyecto lo necesita.',
      fr: 'Des écrans, des composants et des tokens dans Figma, plus un prototype cliquable quand le projet en a besoin.',
    },
  },
  {
    number: '05',
    heading: { en: 'Build', es: 'Desarrollo', fr: 'Développement' },
    paragraphs: {
      en: [
        'On projects that continue into code, the approved design is built as a responsive front end — React and Next.js, Webflow or Framer, whichever the scope settled on. The Figma component becomes the coded component and the design token becomes the code token, so one decision stays one decision.',
        'Performance and accessibility are part of building rather than a pass at the end: static rendering where the content allows it, images sized and served properly, semantic markup, keyboard navigation, visible focus and contrast that holds. Retrofitting these is a rewrite of the markup.',
      ],
      es: [
        'En los proyectos que continúan hasta el código, el diseño aprobado se construye como un front end responsive —React y Next.js, Webflow o Framer, según lo que fijara el alcance—. El componente de Figma se convierte en el componente en código y el design token se convierte en el token de código, de modo que una decisión sigue siendo una sola decisión.',
        'El rendimiento y la accesibilidad forman parte de la construcción, no de una pasada al final: renderizado estático donde el contenido lo permite, imágenes dimensionadas y servidas correctamente, marcado semántico, navegación por teclado, foco visible y un contraste que aguanta. Incorporarlos a posteriori es reescribir el marcado.',
      ],
      fr: [
        'Sur les projets qui se poursuivent jusqu’au code, le design approuvé est construit en front end responsive — React et Next.js, Webflow ou Framer, selon ce que le périmètre a arrêté. Le composant Figma devient le composant codé et le design token devient le token de code, de sorte qu’une décision reste une seule décision.',
        'La performance et l’accessibilité font partie de la construction, et non d’une passe à la fin : rendu statique là où le contenu le permet, images dimensionnées et servies correctement, balisage sémantique, navigation au clavier, focus visible et contraste qui tient. Les rajouter après coup revient à réécrire le balisage.',
      ],
    },
    output: {
      en: 'A working, responsive front end in your repository or platform account.',
      es: 'Un front end responsive y funcional en tu repositorio o cuenta de plataforma.',
      fr: 'Un front end responsive et fonctionnel dans votre dépôt ou votre compte de plateforme.',
    },
  },
  {
    number: '06',
    heading: { en: 'Launch, and after', es: 'Lanzamiento, y lo que sigue', fr: 'Lancement, et après' },
    paragraphs: {
      en: [
        'Cross-browser and cross-device QA against the design, a redirect map applied where URLs have changed, and a handover of the files, the code and the accounts — all in your ownership, with nothing depending on me staying involved.',
        'The handover is documented so your team can maintain and grow the site with confidence, with clean components and clear structure.',
      ],
      es: [
        'QA en distintos navegadores y dispositivos frente al diseño, un mapa de redirecciones aplicado allí donde las URL han cambiado, y una entrega de los archivos, el código y las cuentas —todo en tu propiedad, sin que nada dependa de que yo siga involucrado—.',
        'La entrega se documenta para que tu equipo pueda mantener y hacer crecer el sitio con confianza, con componentes limpios y una estructura clara.',
      ],
      fr: [
        'Une QA multi-navigateurs et multi-appareils par rapport au design, un plan de redirections appliqué là où les URL ont changé, et une remise des fichiers, du code et des comptes — le tout vous appartenant, sans que rien ne dépende de ma présence continue.',
        'La remise est documentée pour que votre équipe puisse maintenir et faire évoluer le site en confiance, avec des composants propres et une structure claire.',
      ],
    },
    output: {
      en: 'A live site, the files and code in your hands, and a record of what changed.',
      es: 'Un sitio en producción, los archivos y el código en tus manos, y un registro de lo que cambió.',
      fr: 'Un site en ligne, les fichiers et le code entre vos mains, et un relevé de ce qui a changé.',
    },
  },
]

/**
 * Questions about how an engagement runs, rather than what it costs or what it
 * includes — those are answered on `/pricing` and on each service page. Keeping
 * the three sets disjoint matters: the same question answered twice in
 * `FAQPage` markup on two URLs is duplicate structured data competing with
 * itself.
 */
export const processFaqs: Faq[] = [
  {
    question: { en: 'How often will I hear from you?', es: '¿Con qué frecuencia tendré noticias tuyas?', fr: 'À quelle fréquence aurai-je de vos nouvelles ?' },
    answer: {
      en: 'There is a review at the end of every phase, and those are scheduled rather than assumed. Between them, progress goes into the shared Figma file or repository as it happens, so you can look without asking. Anything that changes the scope or the timeline is raised at the moment it comes up rather than saved for the next review.',
      es: 'Hay una revisión al final de cada fase, y están programadas, no dadas por supuestas. Entre una y otra, el avance se va volcando en el archivo de Figma compartido o en el repositorio a medida que ocurre, así que puedes mirarlo sin pedirlo. Cualquier cosa que cambie el alcance o el calendario se plantea en el momento en que surge, en lugar de guardarla para la siguiente revisión.',
      fr: 'Il y a une revue à la fin de chaque phase, et elles sont planifiées, pas supposées. Entre elles, l’avancement est versé dans le fichier Figma partagé ou le dépôt au fur et à mesure, de sorte que vous pouvez le consulter sans le demander. Tout ce qui modifie le périmètre ou le calendrier est signalé au moment où cela se présente, plutôt que gardé pour la revue suivante.',
    },
  },
  {
    question: { en: 'What happens if the project slips?', es: '¿Qué pasa si el proyecto se retrasa?', fr: 'Que se passe-t-il si le projet prend du retard ?' },
    answer: {
      en: 'Most delays come from one of two places: feedback taking longer than planned, or a decision the brief assumed was settled turning out not to be. Both get flagged as soon as they appear, with what it does to the date. A timeline that quietly moves twice and is announced once at the end is the version worth avoiding.',
      es: 'La mayoría de los retrasos vienen de uno de dos sitios: el feedback que tarda más de lo previsto, o una decisión que el brief daba por cerrada y que resulta no estarlo. Ambos se señalan en cuanto aparecen, junto con lo que le hacen a la fecha. Un calendario que se mueve dos veces en silencio y se anuncia una sola vez al final es la versión que conviene evitar.',
      fr: 'La plupart des retards viennent de l’un de ces deux endroits : des retours qui prennent plus de temps que prévu, ou une décision que le brief supposait tranchée et qui ne l’est finalement pas. Les deux sont signalés dès qu’ils apparaissent, avec leur effet sur la date. Un calendrier qui glisse deux fois en silence et n’est annoncé qu’une fois à la fin, c’est la version à éviter.',
    },
  },
  {
    question: { en: 'Can we start midway through this?', es: '¿Podemos empezar a mitad de este proceso?', fr: 'Pouvons-nous commencer au milieu de ce processus ?' },
    answer: {
      en: 'Yes, and plenty of projects do. If you already have flows and wireframes, the work starts at the interface phase. If you have an approved design, it starts at the build. The brief and scope phases still happen — they are the two that stop a project going wrong — but they are shorter when the decisions are already made.',
      es: 'Sí, y muchos proyectos lo hacen. Si ya tienes flujos y wireframes, el trabajo empieza en la fase de interfaz. Si tienes un diseño aprobado, empieza en el desarrollo. Las fases de brief y de alcance siguen ocurriendo —son las dos que evitan que un proyecto se tuerza—, pero son más cortas cuando las decisiones ya están tomadas.',
      fr: 'Oui, et beaucoup de projets le font. Si vous avez déjà des parcours et des wireframes, le travail commence à la phase d’interface. Si vous avez un design approuvé, il commence au développement. Les phases de brief et de périmètre ont tout de même lieu — ce sont les deux qui empêchent un projet de mal tourner — mais elles sont plus courtes quand les décisions sont déjà prises.',
    },
  },
  {
    question: { en: 'Do you work with our developers?', es: '¿Trabajas con nuestros desarrolladores?', fr: 'Travaillez-vous avec nos développeurs ?' },
    answer: {
      en: 'Regularly. Handoff is not a single moment, and questions come up while a build is underway. I stay available to answer them, review implementations against the design, and adjust where the code reveals something the file did not. How much of that time is included is written into the scope rather than left to goodwill.',
      es: 'Con frecuencia. El handoff no es un único momento, y surgen preguntas mientras el desarrollo está en marcha. Sigo disponible para responderlas, revisar las implementaciones frente al diseño y ajustar allí donde el código revela algo que el archivo no mostraba. Cuánto de ese tiempo está incluido se escribe en el alcance, en lugar de dejarlo a la buena voluntad.',
      fr: 'Régulièrement. Le handoff n’est pas un moment unique, et des questions surgissent pendant que le développement est en cours. Je reste disponible pour y répondre, comparer les implémentations au design et ajuster là où le code révèle quelque chose que le fichier ne montrait pas. La part de ce temps qui est incluse est inscrite dans le périmètre plutôt que laissée à la bonne volonté.',
    },
  },
]
