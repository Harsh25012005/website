import type { Article } from './types'

export const articles: Article[] = [
  {
    slug: 'ui-ux-design-trends-2026',
    title: {
      en: 'UI/UX design trends for 2026 worth actually adopting',
      es: 'Tendencias de diseño UI/UX para 2026 que merece la pena adoptar de verdad',
      fr: 'Tendances de design UI/UX pour 2026 qui valent vraiment la peine d’être adoptées',
    },
    excerpt: {
      en: 'Which UI/UX design trends for 2026 hold up under real product constraints, from AI-assisted interfaces to accessible-by-default patterns, and which are just decoration.',
      es: 'Qué tendencias de diseño UI/UX para 2026 resisten las restricciones de un producto real, desde las interfaces asistidas por IA hasta los patrones accesibles por defecto, y cuáles son solo decoración.',
      fr: 'Quelles tendances de design UI/UX pour 2026 tiennent face aux contraintes d’un produit réel, des interfaces assistées par l’IA aux motifs accessibles par défaut, et lesquelles ne sont que de la décoration.',
    },
    date: '2026-08-18',
    readingTime: 8,
    cover: {
      src: '/images/articles/ui-ux-design-trends-2026/cover.png',
      alt: {
        en: 'Isometric illustration of UI/UX design system elements on a dark background: a dashboard, a mobile app screen, an accessibility icon, a colour and spacing scale, and editing tools',
        es: 'Ilustración isométrica de elementos de un design system UI/UX sobre un fondo oscuro: un panel de control, la pantalla de una aplicación móvil, un icono de accesibilidad, una escala de color y espaciado, y herramientas de edición',
        fr: 'Illustration isométrique d’éléments d’un design system UI/UX sur un fond sombre : un tableau de bord, l’écran d’une application mobile, une icône d’accessibilité, une échelle de couleur et d’espacement, et des outils d’édition',
      },
    },
    intro: {
      en: [
        'Every January a list goes around with the same shape: fifteen trends, a screenshot from Dribbble for each, and no mention of what happens when the trend meets a real content management system, a support ticket queue, or a user on a three-year-old Android phone. Most of it does not survive contact with a shipping product.',
        'I audit and redesign live products for a living, not concept shots, so this is the shorter list: the shifts in UI/UX design that are actually showing up in briefs and holding up in usability testing this year, and the ones I would still tell a client to skip.',
      ],
      es: [
        'Cada enero circula una lista con la misma forma: quince tendencias, una captura de pantalla de Dribbble para cada una y ninguna mención de lo que pasa cuando la tendencia se topa con un gestor de contenidos real, una cola de tickets de soporte o un usuario con un móvil Android de hace tres años. La mayor parte no sobrevive al contacto con un producto real en producción.',
        'Me gano la vida auditando y rediseñando productos en funcionamiento, no maquetas de concepto, así que esta es la lista más corta: los cambios en el diseño UI/UX que este año están apareciendo de verdad en los briefs y aguantando en las pruebas de usabilidad, y los que aún le diría a un cliente que se salte.',
      ],
      fr: [
        'Chaque mois de janvier, une liste circule, toujours de la même forme : quinze tendances, une capture d’écran de Dribbble pour chacune, et pas un mot sur ce qui se passe quand la tendance se heurte à un vrai système de gestion de contenu, à une file de tickets de support ou à un utilisateur équipé d’un téléphone Android vieux de trois ans. L’essentiel ne survit pas au contact d’un produit réellement mis en production.',
        'Je gagne ma vie en auditant et en repensant des produits en service, pas des visuels de concept, alors voici la liste plus courte : les évolutions du design UI/UX qui apparaissent réellement dans les briefs et qui tiennent aux tests d’utilisabilité cette année, et celles que je conseillerais malgré tout à un client d’ignorer.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'Judge a trend by what it costs the user, not how it photographs',
          es: 'Juzga una tendencia por lo que le cuesta al usuario, no por cómo queda en una foto',
          fr: 'Jugez une tendance à ce qu’elle coûte à l’utilisateur, pas à son rendu en photo',
        },
        paragraphs: {
          en: [
            'A trend earns a place in a real interface if it removes a step, clarifies a state, or speeds up a task. Everything else is decoration wearing the vocabulary of a design system, and decoration has a cost: every animated flourish is milliseconds of blocked main thread, every novel pattern is a moment a first-time user has to stop and learn your product instead of using it.',
            'The filter I actually use on client work: would this still be worth building if nobody could see it was "on trend"? If the honest answer is that it exists to look current in a portfolio shot, it does not go in the file.',
            'That filter is why the list below skips most of what circulates as this year’s UI trends and keeps only what changed how a product behaves, not just how it looks.',
          ],
          es: [
            'Una tendencia se gana un lugar en una interfaz real si elimina un paso, aclara un estado o acelera una tarea. Todo lo demás es decoración disfrazada con el vocabulario de un design system, y la decoración tiene un coste: cada floritura animada son milisegundos de hilo principal bloqueado, cada patrón novedoso es un momento en el que un usuario que llega por primera vez tiene que detenerse y aprender tu producto en lugar de usarlo.',
            'El filtro que uso de verdad en el trabajo con clientes: ¿valdría la pena construir esto si nadie pudiera ver que está "de moda"? Si la respuesta sincera es que existe para parecer actual en una captura de portfolio, no entra en el archivo.',
            'Ese filtro es la razón por la que la lista de abajo se salta la mayor parte de lo que circula como las tendencias de UI de este año y se queda solo con lo que cambió cómo se comporta un producto, no solo cómo se ve.',
          ],
          fr: [
            'Une tendance mérite sa place dans une interface réelle si elle supprime une étape, clarifie un état ou accélère une tâche. Tout le reste n’est que décoration habillée du vocabulaire d’un design system, et la décoration a un coût : chaque fioriture animée représente des millisecondes de thread principal bloqué, chaque motif inédit est un instant où un utilisateur qui découvre le produit doit s’arrêter pour l’apprendre au lieu de s’en servir.',
            'Le filtre que j’utilise vraiment sur les projets clients : est-ce que cela vaudrait encore la peine d’être construit si personne ne pouvait voir que c’était "à la mode" ? Si la réponse honnête est que cela existe pour paraître actuel sur une capture de portfolio, cela n’entre pas dans le fichier.',
            'C’est à cause de ce filtre que la liste ci-dessous laisse de côté l’essentiel de ce qui circule comme tendances UI de cette année et ne retient que ce qui a changé la façon dont un produit se comporte, pas seulement son apparence.',
          ],
        },
      },
      {
        heading: {
          en: 'AI inside the interface, not just behind it',
          es: 'La IA dentro de la interfaz, no solo detrás de ella',
          fr: 'L’IA dans l’interface, pas seulement derrière elle',
        },
        paragraphs: {
          en: [
            'The interesting shift this year is not that products added a chatbot. It is AI surfacing inside existing flows: inline suggestions in a form field, a generated first draft in an empty state, a summary offered instead of forcing someone to read forty rows of a table. Done well it removes a step; done badly it is a spinner with extra confidence.',
            'The design problem is trust, not novelty. An AI-filled field needs to look editable and provisional, not final. I use a visibly different state for it, a distinct background tint plus a label, until the user has explicitly accepted it. Ship a generated value that looks identical to a user-entered one and the first wrong guess erodes trust in every field after it.',
            'Latency also needs designing for, not apologised for after the fact. If a suggestion takes two seconds to arrive, the empty state before it has to hold its own, not sit there as a blank box implying something is broken.',
          ],
          es: [
            'El cambio interesante de este año no es que los productos hayan añadido un chatbot. Es la IA que aflora dentro de los flujos existentes: sugerencias en línea en un campo de formulario, un primer borrador generado en un estado vacío, un resumen que se ofrece en lugar de obligar a alguien a leer cuarenta filas de una tabla. Bien hecho, elimina un paso; mal hecho, no es más que un spinner que va sobrado de confianza.',
            'El problema de diseño es la confianza, no la novedad. Un campo rellenado por la IA tiene que parecer editable y provisional, no definitivo. Yo uso para él un estado visiblemente distinto, un tinte de fondo diferenciado más una etiqueta, hasta que el usuario lo ha aceptado de forma explícita. Lanza un valor generado que parezca idéntico a uno introducido por el usuario y el primer error de predicción erosiona la confianza en todos los campos que vienen después.',
            'La latencia también hay que diseñarla, no disculparla a posteriori. Si una sugerencia tarda dos segundos en llegar, el estado vacío que la precede tiene que defenderse por sí solo, no quedarse ahí como una caja en blanco que da a entender que algo está roto.',
          ],
          fr: [
            'Le changement intéressant cette année, ce n’est pas que les produits ont ajouté un chatbot. C’est l’IA qui émerge à l’intérieur des flux existants : des suggestions en ligne dans un champ de formulaire, un premier brouillon généré dans un état vide, un résumé proposé au lieu d’obliger quelqu’un à lire quarante lignes d’un tableau. Bien fait, cela supprime une étape ; mal fait, ce n’est qu’un spinner qui affiche un surcroît d’assurance.',
            'Le problème de design, c’est la confiance, pas la nouveauté. Un champ rempli par l’IA doit paraître modifiable et provisoire, pas définitif. Je lui applique un état visiblement différent, une teinte de fond distincte accompagnée d’une étiquette, tant que l’utilisateur ne l’a pas explicitement accepté. Livrez une valeur générée qui semble identique à une valeur saisie par l’utilisateur, et la première erreur de prédiction érode la confiance dans tous les champs qui suivent.',
            'La latence aussi doit être pensée en amont, pas excusée après coup. Si une suggestion met deux secondes à arriver, l’état vide qui la précède doit tenir tout seul, pas rester là comme une boîte blanche qui laisse entendre que quelque chose est cassé.',
          ],
        },
      },
      {
        heading: {
          en: 'Motion with restraint, not motion by default',
          es: 'Movimiento con moderación, no movimiento por defecto',
          fr: 'Du mouvement avec retenue, pas du mouvement par défaut',
        },
        paragraphs: {
          en: [
            'Two years of every card animating in and every button carrying a spring on hover have produced the correction: motion that communicates a state change, and nothing else. A save button confirming with a checkmark morph is worth the frames it costs. A page of cards staggering in on every visit is not; it is a tax the user pays each time they arrive, for no information gained.',
            '`prefers-reduced-motion` moved from a nice-to-have to a default check on client work this year, and rightly so. It is no longer just an accessibility line item — browsers ship it on by default for a meaningful share of users, and a product that ignores the query is choosing to fight the operating system.',
            'The practical rule: animate to explain a change in state (loading, success, error, an item leaving a list), and leave everything else static. If you cannot say what a given animation is teaching the user, cut it.',
          ],
          es: [
            'Dos años en los que cada tarjeta aparecía con animación y cada botón llevaba un rebote al pasar el cursor han provocado la corrección: movimiento que comunica un cambio de estado, y nada más. Un botón de guardar que confirma con la transformación en una marca de verificación vale los fotogramas que cuesta. Una página de tarjetas que van entrando en cascada en cada visita no; es un impuesto que el usuario paga cada vez que llega, sin ganar ninguna información.',
            '`prefers-reduced-motion` ha pasado este año de ser un extra deseable a una comprobación por defecto en el trabajo con clientes, y con razón. Ya no es solo una línea más de accesibilidad — los navegadores lo activan por defecto para una parte significativa de los usuarios, y un producto que ignora la consulta está eligiendo pelearse con el sistema operativo.',
            'La regla práctica: anima para explicar un cambio de estado (carga, éxito, error, un elemento que sale de una lista) y deja todo lo demás estático. Si no sabes decir qué le está enseñando al usuario una animación concreta, elimínala.',
          ],
          fr: [
            'Deux années où chaque carte apparaissait en animation et où chaque bouton avait un ressort au survol ont amené la correction : du mouvement qui communique un changement d’état, et rien d’autre. Un bouton d’enregistrement qui se confirme par une transformation en coche vaut les images qu’il coûte. Une page de cartes qui défilent en cascade à chaque visite, non ; c’est un impôt que l’utilisateur paie à chaque arrivée, sans aucune information gagnée.',
            '`prefers-reduced-motion` est passé cette année du statut de bonus appréciable à celui de vérification par défaut sur les projets clients, et à juste titre. Ce n’est plus une simple ligne dans la liste d’accessibilité — les navigateurs l’activent par défaut pour une part significative des utilisateurs, et un produit qui ignore la requête choisit de se battre contre le système d’exploitation.',
            'La règle pratique : animez pour expliquer un changement d’état (chargement, succès, erreur, un élément qui quitte une liste), et laissez tout le reste statique. Si vous ne savez pas dire ce qu’une animation donnée apprend à l’utilisateur, supprimez-la.',
          ],
        },
      },
      {
        heading: {
          en: 'Accessible-by-default is no longer a separate pass',
          es: 'La accesibilidad por defecto ya no es una revisión aparte',
          fr: 'L’accessibilité par défaut n’est plus une étape distincte',
        },
        paragraphs: {
          en: [
            'Contrast ratios, visible focus states and keyboard paths used to be the thing checked at the end, if there was time. In 2026 briefs I am seeing them named up front, partly because WCAG 2.2 has become the baseline expectation in more procurement checklists, and partly because more of the audience genuinely is on an assistive setup, not a hypothetical one.',
            'What changes in practice: component states are designed for focus-visible from the first pass, not retrofitted; text on colour is checked at a 4.5:1 ratio as a build constraint rather than a launch note; and forms get inline, text-based error messaging as a default rather than a colour change nobody without full colour vision can read.',
            'This one is not a trend in the usual sense, it is table stakes catching up to where it should have been years ago, and it is the item on this list with the least room for skipping.',
          ],
          es: [
            'Las ratios de contraste, los estados de foco visibles y las rutas de teclado solían ser lo que se comprobaba al final, si quedaba tiempo. En los briefs de 2026 los veo mencionados desde el principio, en parte porque WCAG 2.2 se ha convertido en la expectativa mínima en más listas de requisitos de contratación, y en parte porque una parte mayor del público usa de verdad una configuración de asistencia, no una hipotética.',
            'Lo que cambia en la práctica: los estados de los componentes se diseñan pensando en focus-visible desde la primera pasada, no se añaden después; el texto sobre color se comprueba con una ratio de 4.5:1 como restricción de construcción y no como una nota de lanzamiento; y los formularios incorporan por defecto mensajes de error en línea, basados en texto, en lugar de un cambio de color que nadie sin visión cromática completa puede leer.',
            'Este no es una tendencia en el sentido habitual, es lo mínimo indispensable poniéndose al día con donde debería haber estado hace años, y es el punto de esta lista con menos margen para saltárselo.',
          ],
          fr: [
            'Les ratios de contraste, les états de focus visibles et les parcours au clavier étaient autrefois ce que l’on vérifiait à la fin, s’il restait du temps. Dans les briefs de 2026, je les vois nommés d’emblée, en partie parce que WCAG 2.2 est devenu l’exigence de base dans davantage de cahiers des charges d’achat, et en partie parce qu’une plus grande part du public utilise réellement une configuration d’assistance, et non une configuration hypothétique.',
            'Ce qui change en pratique : les états des composants sont conçus pour focus-visible dès la première passe, pas ajoutés après coup ; le texte sur couleur est vérifié à un ratio de 4.5:1 comme contrainte de construction plutôt que comme note de lancement ; et les formulaires reçoivent par défaut des messages d’erreur en ligne, sous forme de texte, plutôt qu’un changement de couleur que personne sans vision des couleurs complète ne peut lire.',
            'Celle-ci n’est pas une tendance au sens habituel, c’est le minimum vital qui rattrape le niveau où il aurait dû être il y a des années, et c’est l’élément de cette liste qu’on peut le moins se permettre d’ignorer.',
          ],
        },
      },
      {
        heading: {
          en: 'Modular, bento-style layouts, used where density earns them',
          es: 'Maquetaciones modulares de estilo bento, usadas donde la densidad las justifica',
          fr: 'Des mises en page modulaires de style bento, utilisées là où la densité les justifie',
        },
        paragraphs: {
          en: [
            'The grid of unevenly sized cards has spread from portfolio sites into dashboards and settings pages, and it earns its place when a screen genuinely has content of different weights: one card that is a chart, one that is a single number, one that is a short list. Forcing everything into equal-width cards was hiding that hierarchy; the bento layout states it plainly.',
            'It does not earn its place on a page where every item deserves the same weight. A pricing table forced into a bento grid loses the one thing a pricing table needs, which is easy left-to-right comparison. Use the pattern because the content has unequal weight, not because the grid looks considered in a screenshot.',
          ],
          es: [
            'La cuadrícula de tarjetas de tamaños desiguales se ha extendido de los sitios de portfolio a los paneles de control y las páginas de ajustes, y se gana su lugar cuando una pantalla tiene de verdad contenido de distinto peso: una tarjeta que es un gráfico, otra que es un único número, otra que es una lista corta. Forzar que todo entrara en tarjetas del mismo ancho ocultaba esa jerarquía; la maquetación bento la expresa con claridad.',
            'No se gana su lugar en una página donde cada elemento merece el mismo peso. Una tabla de precios forzada dentro de una cuadrícula bento pierde lo único que necesita una tabla de precios, que es la comparación fácil de izquierda a derecha. Usa el patrón porque el contenido tiene un peso desigual, no porque la cuadrícula parezca cuidada en una captura de pantalla.',
          ],
          fr: [
            'La grille de cartes de tailles inégales s’est répandue des sites de portfolio vers les tableaux de bord et les pages de réglages, et elle mérite sa place quand un écran a réellement du contenu de poids différents : une carte qui est un graphique, une autre qui est un simple chiffre, une autre qui est une courte liste. Forcer tout dans des cartes de largeur égale masquait cette hiérarchie ; la mise en page bento l’énonce clairement.',
            'Elle ne mérite pas sa place sur une page où chaque élément mérite le même poids. Un tableau de tarifs forcé dans une grille bento perd la seule chose dont un tableau de tarifs a besoin, à savoir une comparaison facile de gauche à droite. Utilisez ce motif parce que le contenu a un poids inégal, pas parce que la grille paraît soignée sur une capture d’écran.',
          ],
        },
      },
      {
        heading: {
          en: 'What I am telling clients to skip',
          es: 'Lo que les digo a los clientes que se salten',
          fr: 'Ce que je conseille aux clients d’ignorer',
        },
        paragraphs: {
          en: [
            'Glassmorphism panels stacked three deep, where legibility drops with every layer of blur. Cursor-following blobs and gradient orbs that exist purely as set dressing and cost real paint time on lower-end devices. Decorative "AI thinking" animations that add three seconds to a task a static state would have completed instantly. None of these move a task forward, and all of them show up disproportionately in trend roundups because they screenshot well.',
            'The pattern across all three: they are optimised for the first five seconds of looking at a static image, not for the fiftieth time a real user opens the product to get something done. Design for the fiftieth time, and most of what is trending this year quietly rules itself out.',
          ],
          es: [
            'Paneles de glassmorphism apilados de tres en tres, donde la legibilidad cae con cada capa de desenfoque. Manchas que siguen al cursor y orbes de degradado que existen puramente como atrezo y cuestan tiempo real de pintado en los dispositivos menos potentes. Animaciones decorativas de "la IA está pensando" que añaden tres segundos a una tarea que un estado estático habría completado al instante. Ninguna de ellas hace avanzar una tarea, y todas aparecen de forma desproporcionada en los recopilatorios de tendencias porque quedan bien en una captura.',
            'El patrón común a las tres: están optimizadas para los primeros cinco segundos mirando una imagen estática, no para la vez número cincuenta que un usuario real abre el producto para hacer algo. Diseña para la vez número cincuenta y la mayor parte de lo que es tendencia este año se descarta sola sin hacer ruido.',
          ],
          fr: [
            'Des panneaux en glassmorphism empilés sur trois niveaux, où la lisibilité chute à chaque couche de flou. Des taches qui suivent le curseur et des orbes en dégradé qui n’existent que comme décor et coûtent un vrai temps de rendu sur les appareils moins puissants. Des animations décoratives de "l’IA réfléchit" qui ajoutent trois secondes à une tâche qu’un état statique aurait accomplie instantanément. Aucune de ces choses ne fait avancer une tâche, et toutes apparaissent de façon disproportionnée dans les compilations de tendances parce qu’elles rendent bien en capture d’écran.',
            'Le point commun aux trois : elles sont optimisées pour les cinq premières secondes passées à regarder une image statique, pas pour la cinquantième fois qu’un utilisateur réel ouvre le produit pour accomplir quelque chose. Concevez pour la cinquantième fois, et la plupart de ce qui fait tendance cette année s’élimine de soi-même, sans bruit.',
          ],
        },
      },
    ],
    gallery: [],
    relatedProjects: ['expenza', 'zenith', 'stayease'],
    relatedServices: ['web-ui-design', 'saas-product-design'],
  },
  {
    slug: 'ai-coding-tools-client-projects',
    title: {
      en: 'AI coding tools in 2026: what changes on a client build',
      es: 'Herramientas de codificación con IA en 2026: qué cambia en un proyecto de cliente',
      fr: 'Les outils de codage assistés par IA en 2026 : ce qui change sur un projet client',
    },
    excerpt: {
      en: 'Where AI coding assistants genuinely speed up client front-end work in 2026, where they quietly cost time instead, and how code review has to change either way.',
      es: 'Dónde los asistentes de codificación con IA aceleran de verdad el trabajo de front-end para clientes en 2026, dónde en cambio cuestan tiempo sin que te des cuenta, y cómo tiene que cambiar la revisión de código en cualquiera de los dos casos.',
      fr: 'Là où les assistants de codage par IA accélèrent réellement le travail front-end pour les clients en 2026, là où ils font au contraire perdre du temps sans qu’on le remarque, et comment la revue de code doit évoluer dans les deux cas.',
    },
    date: '2026-08-05',
    readingTime: 8,
    cover: {
      src: '/images/articles/ai-coding-tools-client-projects/cover.png',
      alt: {
        en: 'Isometric illustration of an AI coding assistant on a dark background: a code editor with generated lines, an autocomplete panel, a context-aware assistant, a diff review, and a "time saved" chart',
        es: 'Ilustración isométrica de un asistente de codificación con IA sobre un fondo oscuro: un editor de código con líneas generadas, un panel de autocompletado, un asistente que entiende el contexto, una revisión de diff y un gráfico de "tiempo ahorrado"',
        fr: 'Illustration isométrique d’un assistant de codage par IA sur un fond sombre : un éditeur de code avec des lignes générées, un panneau d’autocomplétion, un assistant sensible au contexte, une revue de diff et un graphique de "temps gagné"',
      },
    },
    intro: {
      en: [
        'I design most of what I build, and I have used AI coding assistants on client work since they were autocomplete with good manners. The honest update for 2026 is that they got fast enough to change how a project is scoped, not just how a function gets typed — and fast enough that the mistakes they make are also easier to ship without noticing.',
        'This is not a tool comparison. It is where the speedup is real on a paid client project, where it is not, and what changed about how I review my own output because of it.',
      ],
      es: [
        'Diseño la mayor parte de lo que construyo, y he usado asistentes de codificación con IA en el trabajo con clientes desde que eran un autocompletado con buenos modales. La actualización sincera para 2026 es que se han vuelto lo bastante rápidos como para cambiar cómo se define el alcance de un proyecto, no solo cómo se teclea una función — y lo bastante rápidos como para que los errores que cometen también sean más fáciles de publicar sin darse cuenta.',
        'Esto no es una comparación de herramientas. Es dónde la aceleración es real en un proyecto de cliente remunerado, dónde no lo es, y qué cambió en cómo reviso mi propio trabajo a raíz de ello.',
      ],
      fr: [
        'Je conçois l’essentiel de ce que je construis, et j’utilise des assistants de codage par IA sur les projets clients depuis l’époque où ils n’étaient qu’une autocomplétion polie. La mise à jour honnête pour 2026, c’est qu’ils sont devenus assez rapides pour changer la façon dont on cadre un projet, pas seulement la façon dont on tape une fonction — et assez rapides pour que les erreurs qu’ils commettent soient elles aussi plus faciles à livrer sans s’en apercevoir.',
        'Ce n’est pas un comparatif d’outils. C’est là où le gain de vitesse est réel sur un projet client rémunéré, là où il ne l’est pas, et ce qui a changé dans la façon dont je relis ma propre production à cause de cela.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'Scaffolding is fast now; judgement still is not',
          es: 'Ahora el andamiaje es rápido; el criterio sigue sin serlo',
          fr: 'L’échafaudage est rapide désormais ; le jugement, toujours pas',
        },
        paragraphs: {
          en: [
            'Ask a current model to build a settings page with a form, validation and a save state, and it will produce something that runs in under a minute. That used to be twenty minutes of typing. The part that has not moved is deciding what the settings page should actually contain, what happens when the save request fails, and whether this is even the right pattern for this particular client’s data.',
            'That split is the whole story. Typing got cheap; deciding what to type stayed exactly as expensive as it always was, because it depends on context the model does not have — the client’s actual users, the edge cases from last quarter’s support tickets, the constraint nobody wrote down. Selling "AI writes your app" skips past the half of the job that was never the typing.',
          ],
          es: [
            'Pídele a un modelo actual que construya una página de ajustes con un formulario, validación y un estado de guardado, y producirá algo que funciona en menos de un minuto. Antes eso eran veinte minutos de teclear. Lo que no ha cambiado es decidir qué debería contener realmente la página de ajustes, qué pasa cuando la petición de guardado falla y si este es siquiera el patrón adecuado para los datos de este cliente en concreto.',
            'Esa división lo resume todo. Teclear se abarató; decidir qué teclear siguió siendo exactamente igual de caro que siempre, porque depende de un contexto que el modelo no tiene — los usuarios reales del cliente, los casos límite de los tickets de soporte del último trimestre, la restricción que nadie anotó. Vender que "la IA escribe tu aplicación" se salta la mitad del trabajo que nunca fue teclear.',
          ],
          fr: [
            'Demandez à un modèle actuel de construire une page de réglages avec un formulaire, une validation et un état d’enregistrement, et il produira quelque chose qui tourne en moins d’une minute. Avant, c’était vingt minutes de frappe. Ce qui n’a pas bougé, c’est de décider ce que la page de réglages doit réellement contenir, ce qui se passe quand la requête d’enregistrement échoue, et si c’est même le bon modèle pour les données de ce client en particulier.',
            'Ce partage résume tout. La frappe est devenue bon marché ; décider quoi taper est resté exactement aussi coûteux qu’avant, parce que cela dépend d’un contexte que le modèle n’a pas — les utilisateurs réels du client, les cas limites des tickets de support du trimestre dernier, la contrainte que personne n’a notée. Vendre que "l’IA écrit votre application" fait l’impasse sur la moitié du travail qui n’a jamais été la frappe.',
          ],
        },
      },
      {
        heading: {
          en: 'Where the speedup is real',
          es: 'Dónde la aceleración es real',
          fr: 'Là où le gain de vitesse est réel',
        },
        paragraphs: {
          en: [
            'Boilerplate and repetition are where this pays for itself every time: a component that needs five near-identical variants, converting a spreadsheet of copy into typed content objects, writing the fortieth test for the thirty-ninth pattern already established in the codebase. The model has plenty of local context and the task has one obviously correct shape.',
            'Migrations are the other clear win. Bumping a UI library’s major version, renaming a prop across forty usages, converting class components to hooks: mechanical, high-volume, low-judgement changes that used to eat a full day now take an afternoon of generation plus review.',
            'It is also a genuinely good pairing for token-to-code work: handing over a Figma file’s spacing and colour tokens and getting a first pass at a Tailwind theme config generated from them, then correcting the values by hand, is faster than typing the object from scratch.',
          ],
          es: [
            'El boilerplate y la repetición son donde esto se amortiza cada vez: un componente que necesita cinco variantes casi idénticas, convertir una hoja de cálculo de textos en objetos de contenido tipados, escribir el test número cuarenta para el trigésimo noveno patrón ya establecido en el código. El modelo tiene contexto local de sobra y la tarea tiene una única forma obviamente correcta.',
            'Las migraciones son la otra victoria clara. Subir la versión mayor de una biblioteca de UI, renombrar una prop en cuarenta usos, convertir componentes de clase en hooks: cambios mecánicos, de gran volumen y poco criterio que antes se comían un día entero y ahora llevan una tarde de generación más revisión.',
            'También es una combinación genuinamente buena para el trabajo de tokens a código: entregar los tokens de espaciado y color de un archivo de Figma y obtener una primera versión de una configuración de tema de Tailwind generada a partir de ellos, y luego corregir los valores a mano, es más rápido que teclear el objeto desde cero.',
          ],
          fr: [
            'Le boilerplate et la répétition, c’est là que cela s’amortit à chaque fois : un composant qui a besoin de cinq variantes quasi identiques, convertir un tableur de textes en objets de contenu typés, écrire le quarantième test pour le trente-neuvième motif déjà établi dans le code. Le modèle dispose de beaucoup de contexte local et la tâche a une seule forme manifestement correcte.',
            'Les migrations sont l’autre gain évident. Monter la version majeure d’une bibliothèque d’UI, renommer une prop sur quarante usages, convertir des composants de classe en hooks : des changements mécaniques, à gros volume et à faible jugement, qui dévoraient autrefois une journée entière et prennent désormais un après-midi de génération plus la revue.',
            'C’est aussi une association réellement efficace pour le travail des tokens vers le code : livrer les tokens d’espacement et de couleur d’un fichier Figma et obtenir une première version d’une configuration de thème Tailwind générée à partir d’eux, puis corriger les valeurs à la main, est plus rapide que de taper l’objet à partir de zéro.',
          ],
        },
      },
      {
        heading: {
          en: 'Where it quietly costs time',
          es: 'Dónde cuesta tiempo sin que te des cuenta',
          fr: 'Là où il fait perdre du temps sans qu’on le remarque',
        },
        paragraphs: {
          en: [
            'Anything touching a codebase the model has not effectively seen — a large, idiosyncratic legacy client project, a non-standard state management setup, an internal library with its own conventions — produces code that looks right and is subtly wrong: a hook called in the wrong order, a type that compiles but does not match the actual shape of the API response. Confidently wrong is worse than obviously wrong, because it passes a skim.',
            'Security-sensitive code is the other place I do not delegate the first draft: auth checks, anything touching payment, anything that decides what a user is allowed to see. The failure mode there is not a bug report, it is a client’s data exposed, and that is not a risk worth the minutes saved.',
            'Net, on an unfamiliar or unusual codebase, review time can exceed the time saved in generation. The tool is fastest exactly where you already knew the codebase well enough to barely need it.',
          ],
          es: [
            'Cualquier cosa que toque una base de código que el modelo no ha visto de forma efectiva —un proyecto de cliente heredado, grande e idiosincrásico, una configuración no estándar de gestión de estado, una biblioteca interna con sus propias convenciones— produce código que parece correcto y está sutilmente mal: un hook llamado en el orden equivocado, un tipo que compila pero no coincide con la forma real de la respuesta de la API. Estar equivocado con seguridad es peor que estarlo de forma evidente, porque supera una lectura rápida.',
            'El código sensible en materia de seguridad es el otro lugar donde no delego el primer borrador: comprobaciones de autenticación, cualquier cosa que toque pagos, cualquier cosa que decida lo que un usuario puede ver. El modo de fallo ahí no es un informe de error, es la exposición de los datos de un cliente, y ese no es un riesgo que compense por los minutos ahorrados.',
            'En resumen, en una base de código desconocida o poco habitual, el tiempo de revisión puede superar el tiempo ahorrado en la generación. La herramienta es más rápida precisamente allí donde ya conocías la base de código lo bastante bien como para apenas necesitarla.',
          ],
          fr: [
            'Tout ce qui touche à une base de code que le modèle n’a pas réellement vue — un gros projet client hérité et idiosyncrasique, une configuration non standard de gestion d’état, une bibliothèque interne avec ses propres conventions — produit du code qui a l’air correct et qui est subtilement faux : un hook appelé dans le mauvais ordre, un type qui compile mais ne correspond pas à la forme réelle de la réponse de l’API. Se tromper avec assurance est pire que se tromper de façon évidente, parce que cela passe une lecture rapide.',
            'Le code sensible en matière de sécurité est l’autre endroit où je ne délègue pas le premier jet : les vérifications d’authentification, tout ce qui touche au paiement, tout ce qui décide de ce qu’un utilisateur a le droit de voir. Le mode de défaillance là, ce n’est pas un rapport de bug, c’est l’exposition des données d’un client, et ce n’est pas un risque qui vaut les minutes gagnées.',
            'Au final, sur une base de code peu familière ou inhabituelle, le temps de revue peut dépasser le temps gagné à la génération. L’outil est le plus rapide précisément là où vous connaissiez déjà la base de code assez bien pour n’en avoir presque pas besoin.',
          ],
        },
      },
      {
        heading: {
          en: 'Review discipline changes, not disappears',
          es: 'La disciplina de revisión cambia, no desaparece',
          fr: 'La discipline de revue change, elle ne disparaît pas',
        },
        paragraphs: {
          en: [
            'I treat generated code the way I would treat a pull request from a fast, confident junior developer who has never met this specific client: read every line before it ships, do not assume the tests it wrote actually cover the case that matters, and check the diff against what the ticket asked for rather than against what looks plausible.',
            'The specific habit that has saved me the most: asking the model to explain its own change back to me in plain language before I accept it. Where the explanation does not match what the diff actually does, that mismatch is usually where the bug is.',
          ],
          es: [
            'Trato el código generado como trataría una pull request de un desarrollador junior rápido y seguro de sí mismo que nunca ha conocido a este cliente en concreto: leer cada línea antes de que se publique, no dar por hecho que los tests que escribió cubren de verdad el caso que importa, y contrastar el diff con lo que pedía el ticket en lugar de con lo que parece plausible.',
            'El hábito concreto que más me ha salvado: pedirle al modelo que me explique su propio cambio en lenguaje llano antes de aceptarlo. Allí donde la explicación no coincide con lo que hace realmente el diff, esa discrepancia suele ser donde está el bug.',
          ],
          fr: [
            'Je traite le code généré comme je traiterais une pull request d’un développeur junior rapide et sûr de lui qui n’a jamais rencontré ce client précis : lire chaque ligne avant qu’elle ne parte en production, ne pas supposer que les tests qu’il a écrits couvrent réellement le cas qui compte, et confronter le diff à ce que le ticket demandait plutôt qu’à ce qui semble plausible.',
            'L’habitude précise qui m’a le plus sauvé : demander au modèle de m’expliquer sa propre modification en langage clair avant que je l’accepte. Là où l’explication ne correspond pas à ce que fait réellement le diff, cet écart est en général l’endroit où se trouve le bug.',
          ],
        },
      },
      {
        heading: {
          en: 'What this means for pricing and scope',
          es: 'Qué significa esto para los precios y el alcance',
          fr: 'Ce que cela signifie pour la tarification et le périmètre',
        },
        paragraphs: {
          en: [
            'Faster generation does not mean the work is worth less; it means more of what a client is paying for is judgement, review and taste rather than keystrokes, and that was arguably always the real deliverable. I have not dropped rates because a tool made the typing faster — I have used the time it freed up to spend more of a project’s hours on the parts that still need a human: the states nobody specified, the edge cases the ticket did not mention, testing on an actual device.',
            'Where it has changed a quote: small, well-scoped, mechanical jobs — a migration, a batch of similar components — are now genuinely faster to deliver, and I price them accordingly rather than padding the estimate to a pre-AI baseline out of habit.',
          ],
          es: [
            'Que la generación sea más rápida no significa que el trabajo valga menos; significa que una parte mayor de lo que paga un cliente es criterio, revisión y gusto en lugar de pulsaciones de teclado, y podría decirse que eso siempre fue el verdadero entregable. No he bajado las tarifas porque una herramienta acelerara el tecleo — he usado el tiempo que liberó para dedicar más horas de un proyecto a las partes que aún necesitan a una persona: los estados que nadie especificó, los casos límite que el ticket no mencionó, las pruebas en un dispositivo de verdad.',
            'Donde sí ha cambiado un presupuesto: los trabajos pequeños, bien acotados y mecánicos —una migración, un lote de componentes parecidos— son ahora genuinamente más rápidos de entregar, y los presupuesto en consecuencia en lugar de inflar la estimación hasta un baremo previo a la IA por costumbre.',
          ],
          fr: [
            'Une génération plus rapide ne signifie pas que le travail vaut moins ; cela signifie qu’une plus grande part de ce qu’un client paie relève du jugement, de la revue et du goût plutôt que des frappes au clavier, et c’était sans doute depuis toujours le vrai livrable. Je n’ai pas baissé mes tarifs parce qu’un outil a rendu la frappe plus rapide — j’ai utilisé le temps libéré pour consacrer davantage d’heures d’un projet aux parties qui ont encore besoin d’un humain : les états que personne n’a spécifiés, les cas limites que le ticket ne mentionnait pas, les tests sur un vrai appareil.',
            'Là où cela a changé un devis : les petits travaux, bien cadrés et mécaniques — une migration, un lot de composants similaires — sont désormais réellement plus rapides à livrer, et je les facture en conséquence au lieu de gonfler l’estimation jusqu’à un barème d’avant l’IA par habitude.',
          ],
        },
      },
      {
        heading: {
          en: 'The stack that pairs well with it',
          es: 'El stack que combina bien con ello',
          fr: 'La stack qui s’y prête bien',
        },
        paragraphs: {
          en: [
            'Generated code is only as good as the constraints around it. A strongly typed codebase gives the model, and the reviewer, an immediate, mechanical check that a change is at least internally consistent. A codebase with clear conventions and a component library the model can see gives it a pattern to match instead of inventing a new one each time.',
            'Next.js and Tailwind specifically pair well with this workflow: Tailwind’s utility classes are unambiguous in a way custom CSS class names are not, so generated markup rarely drifts from the design tokens, and a typed props interface catches a mismatch immediately rather than at runtime in front of the client.',
          ],
          es: [
            'El código generado es tan bueno como las restricciones que lo rodean. Una base de código fuertemente tipada le da al modelo, y a quien revisa, una comprobación inmediata y mecánica de que un cambio es al menos internamente coherente. Una base de código con convenciones claras y una biblioteca de componentes que el modelo puede ver le da un patrón que imitar en lugar de inventar uno nuevo cada vez.',
            'Next.js y Tailwind combinan especialmente bien con este flujo de trabajo: las clases utilitarias de Tailwind son inequívocas de una manera que los nombres de clases CSS personalizadas no lo son, así que el marcado generado rara vez se aparta de los tokens de diseño, y una interfaz de props tipada detecta una discrepancia de inmediato en lugar de en tiempo de ejecución delante del cliente.',
          ],
          fr: [
            'Le code généré ne vaut que les contraintes qui l’entourent. Une base de code fortement typée donne au modèle, et au relecteur, une vérification immédiate et mécanique qu’une modification est au moins cohérente en interne. Une base de code avec des conventions claires et une bibliothèque de composants que le modèle peut voir lui donne un motif à reproduire au lieu d’en inventer un nouveau à chaque fois.',
            'Next.js et Tailwind s’accordent particulièrement bien avec ce flux de travail : les classes utilitaires de Tailwind sont sans ambiguïté d’une manière que les noms de classes CSS personnalisées ne le sont pas, si bien que le balisage généré s’écarte rarement des tokens de design, et une interface de props typée détecte une incohérence immédiatement plutôt qu’à l’exécution devant le client.',
          ],
        },
      },
    ],
    gallery: [],
    relatedProjects: ['stayease', 'ai-agent-landing'],
    relatedServices: ['custom-web-development', 'figma-to-react'],
  },
  {
    slug: 'core-web-vitals-2026',
    title: {
      en: 'Core Web Vitals in 2026: why site speed still wins deals',
      es: 'Core Web Vitals en 2026: por qué la velocidad del sitio sigue ganando clientes',
      fr: 'Core Web Vitals en 2026 : pourquoi la vitesse du site remporte encore des contrats',
    },
    excerpt: {
      en: 'A practical look at Core Web Vitals in 2026: the LCP, INP and CLS thresholds that matter, where they actually break on real client sites, and the fixes that move them fastest.',
      es: 'Una mirada práctica a los Core Web Vitals en 2026: los umbrales de LCP, INP y CLS que importan, dónde se rompen de verdad en los sitios reales de clientes y los arreglos que los mueven más rápido.',
      fr: 'Un regard pratique sur les Core Web Vitals en 2026 : les seuils de LCP, INP et CLS qui comptent, là où ils cassent réellement sur de vrais sites clients, et les correctifs qui les font bouger le plus vite.',
    },
    date: '2026-07-22',
    readingTime: 7,
    cover: {
      src: '/images/articles/core-web-vitals-2026/cover.png',
      alt: {
        en: 'Isometric illustration of Core Web Vitals on a dark background: LCP, INP and CLS score cards, a page speed gauge at 92, a performance-over-time chart, and a list of top fixes',
        es: 'Ilustración isométrica de los Core Web Vitals sobre un fondo oscuro: tarjetas de puntuación de LCP, INP y CLS, un medidor de velocidad de página en 92, un gráfico de rendimiento a lo largo del tiempo y una lista de los principales arreglos',
        fr: 'Illustration isométrique des Core Web Vitals sur un fond sombre : des cartes de score LCP, INP et CLS, une jauge de vitesse de page à 92, un graphique de performance dans le temps, et une liste des principaux correctifs',
      },
    },
    intro: {
      en: [
        'A client rarely opens a conversation by asking about Interaction to Next Paint. They open it by saying the site "feels slow", or that a competitor’s site "feels snappier", and then it is my job to turn that feeling into a number and the number into a fix. Core Web Vitals are still the best public vocabulary for that conversation, and the specifics worth knowing in 2026 have shifted since the metric set last changed.',
        'This is the practical version: what the three metrics measure, where each one actually breaks on the client sites I audit, and how to prove the fix worked rather than just asserting it.',
      ],
      es: [
        'Un cliente rara vez abre una conversación preguntando por Interaction to Next Paint. La abre diciendo que el sitio "va lento", o que el de un competidor "va más ágil", y entonces mi trabajo es convertir esa sensación en un número y el número en un arreglo. Los Core Web Vitals siguen siendo el mejor vocabulario público para esa conversación, y los detalles que conviene conocer en 2026 han cambiado desde la última vez que se modificó el conjunto de métricas.',
        'Esta es la versión práctica: qué miden las tres métricas, dónde se rompe cada una de verdad en los sitios de clientes que audito, y cómo demostrar que el arreglo funcionó en lugar de solo afirmarlo.',
      ],
      fr: [
        'Un client ouvre rarement une conversation en posant des questions sur Interaction to Next Paint. Il l’ouvre en disant que le site "paraît lent", ou que celui d’un concurrent "paraît plus réactif", et c’est alors mon travail de transformer cette impression en un chiffre et le chiffre en un correctif. Les Core Web Vitals restent le meilleur vocabulaire public pour cette conversation, et les détails qui valent la peine d’être connus en 2026 ont évolué depuis la dernière modification de l’ensemble des métriques.',
        'Voici la version pratique : ce que mesurent les trois métriques, là où chacune casse réellement sur les sites clients que j’audite, et comment prouver que le correctif a fonctionné au lieu de simplement l’affirmer.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'The three metrics that still matter',
          es: 'Las tres métricas que siguen importando',
          fr: 'Les trois métriques qui comptent encore',
        },
        paragraphs: {
          en: [
            'Largest Contentful Paint measures how long the biggest visible element takes to render: the hero image, a headline, a video poster. Under 2.5 seconds is good. Interaction to Next Paint measures the delay between a tap or click and the next visual update, under 200 milliseconds is good, and it replaced First Input Delay as the responsiveness metric because FID only measured the first interaction, not the ones that happen after a page has finished loading and gotten sluggish. Cumulative Layout Shift measures how much visible content jumps around unexpectedly, under 0.1 is good.',
            'All three are pass or fail at the 75th percentile of real visits, not an average and not a lab score. A site that is fast for most visitors and terrible for one in five on a throttled connection still fails the metric, because the threshold is deliberately set to reflect a realistic slower visit, not a top-of-the-range laptop on fibre.',
          ],
          es: [
            'Largest Contentful Paint mide cuánto tarda en renderizarse el elemento visible más grande: la imagen principal, un titular, la miniatura de un vídeo. Por debajo de 2.5 segundos es bueno. Interaction to Next Paint mide el retraso entre un toque o clic y la siguiente actualización visual, por debajo de 200 milisegundos es bueno, y sustituyó a First Input Delay como métrica de capacidad de respuesta porque FID solo medía la primera interacción, no las que ocurren después de que una página haya terminado de cargar y se haya vuelto lenta. Cumulative Layout Shift mide cuánto salta de forma inesperada el contenido visible, por debajo de 0.1 es bueno.',
            'Las tres son de aprobado o suspenso en el percentil 75 de las visitas reales, no una media ni una puntuación de laboratorio. Un sitio que es rápido para la mayoría de los visitantes y pésimo para uno de cada cinco con una conexión limitada sigue suspendiendo la métrica, porque el umbral se fija a propósito para reflejar una visita realista y más lenta, no un portátil de gama alta con fibra.',
          ],
          fr: [
            'Largest Contentful Paint mesure le temps que met le plus grand élément visible à s’afficher : l’image principale, un titre, la vignette d’une vidéo. En dessous de 2.5 secondes, c’est bon. Interaction to Next Paint mesure le délai entre un appui ou un clic et la mise à jour visuelle suivante, en dessous de 200 millisecondes c’est bon, et elle a remplacé First Input Delay comme métrique de réactivité parce que FID ne mesurait que la première interaction, pas celles qui surviennent après qu’une page a fini de charger et est devenue lente. Cumulative Layout Shift mesure à quel point le contenu visible saute de façon inattendue, en dessous de 0.1 c’est bon.',
            'Les trois sont en réussite ou en échec au 75e centile des visites réelles, pas une moyenne ni un score de laboratoire. Un site rapide pour la plupart des visiteurs et catastrophique pour un sur cinq sur une connexion bridée échoue quand même à la métrique, parce que le seuil est délibérément fixé pour refléter une visite réaliste et plus lente, pas un ordinateur portable haut de gamme sur la fibre.',
          ],
        },
      },
      {
        heading: {
          en: 'Where LCP actually breaks',
          es: 'Dónde se rompe LCP de verdad',
          fr: 'Là où LCP casse réellement',
        },
        paragraphs: {
          en: [
            'On the sites I audit it is almost never the framework. It is an unoptimised hero image shipped at four times the rendered size, a web font blocking text render because it was not preloaded, or a third-party script — a chat widget, an analytics tag, a marketing pixel — loaded synchronously before the content it is supposed to be measuring.',
            'The fix is rarely dramatic: serve the hero at the size it renders at, in a modern format, with high fetch priority and no lazy-loading on the one image guaranteed to be above the fold; preload the font file instead of letting the browser discover it after parsing the CSS; and load every third-party script asynchronously, full stop, unless it has a specific reason to block.',
          ],
          es: [
            'En los sitios que audito casi nunca es el framework. Es una imagen principal sin optimizar servida a cuatro veces el tamaño al que se renderiza, una fuente web que bloquea el renderizado del texto porque no se precargó, o un script de terceros —un widget de chat, una etiqueta de analítica, un píxel de marketing— cargado de forma síncrona antes que el contenido que se supone que debe medir.',
            'El arreglo rara vez es dramático: sirve la imagen principal al tamaño al que se renderiza, en un formato moderno, con prioridad de descarga alta y sin carga diferida en la única imagen que con seguridad está por encima del pliegue; precarga el archivo de la fuente en lugar de dejar que el navegador la descubra tras analizar el CSS; y carga todos los scripts de terceros de forma asíncrona, punto, salvo que tengan una razón concreta para bloquear.',
          ],
          fr: [
            'Sur les sites que j’audite, ce n’est presque jamais le framework. C’est une image principale non optimisée servie à quatre fois la taille d’affichage, une police web qui bloque le rendu du texte parce qu’elle n’a pas été préchargée, ou un script tiers — un widget de chat, une balise d’analytics, un pixel marketing — chargé de façon synchrone avant le contenu qu’il est censé mesurer.',
            'Le correctif est rarement spectaculaire : servez l’image principale à la taille à laquelle elle s’affiche, dans un format moderne, avec une priorité de chargement élevée et sans chargement différé sur la seule image assurée d’être au-dessus de la ligne de flottaison ; préchargez le fichier de la police au lieu de laisser le navigateur la découvrir après avoir analysé le CSS ; et chargez tous les scripts tiers de façon asynchrone, un point c’est tout, sauf s’ils ont une raison précise de bloquer.',
          ],
        },
      },
      {
        heading: {
          en: 'INP is a JavaScript problem',
          es: 'INP es un problema de JavaScript',
          fr: 'INP est un problème de JavaScript',
        },
        paragraphs: {
          en: [
            'Where LCP is mostly a loading problem, INP is almost entirely a main-thread problem: a long task blocking the browser from responding to a tap, usually caused by too much JavaScript running, hydrating or re-rendering at once. A single component that re-renders an entire long list on every keystroke will fail INP even on a fast connection, because the delay has nothing to do with the network.',
            'The fix that has mattered most on React and Next.js projects this year is being deliberate about what actually needs to be a client component versus what can stay server-rendered, and splitting large client bundles so an interaction on one part of the page is not waiting on JavaScript for an unrelated part to finish executing. Debouncing expensive handlers and virtualising long lists both still earn their keep.',
          ],
          es: [
            'Donde LCP es sobre todo un problema de carga, INP es casi por completo un problema del hilo principal: una tarea larga que impide al navegador responder a un toque, normalmente provocada por demasiado JavaScript ejecutándose, hidratándose o volviéndose a renderizar a la vez. Un único componente que vuelve a renderizar una lista larga entera en cada pulsación de tecla suspenderá INP incluso en una conexión rápida, porque el retraso no tiene nada que ver con la red.',
            'El arreglo que más ha importado en los proyectos de React y Next.js este año es ser deliberado sobre qué necesita realmente ser un componente de cliente frente a qué puede quedarse renderizado en el servidor, y dividir los bundles de cliente grandes para que una interacción en una parte de la página no esté esperando a que el JavaScript de una parte no relacionada termine de ejecutarse. Aplicar debounce a los manejadores costosos y virtualizar las listas largas siguen mereciendo la pena.',
          ],
          fr: [
            'Là où LCP est surtout un problème de chargement, INP est presque entièrement un problème de thread principal : une tâche longue qui empêche le navigateur de répondre à un appui, généralement causée par trop de JavaScript qui s’exécute, s’hydrate ou se re-rend en même temps. Un seul composant qui re-rend une longue liste entière à chaque frappe échouera à INP même sur une connexion rapide, parce que le délai n’a rien à voir avec le réseau.',
            'Le correctif qui a le plus compté sur les projets React et Next.js cette année, c’est de choisir délibérément ce qui doit réellement être un composant client par rapport à ce qui peut rester rendu côté serveur, et de découper les gros bundles client pour qu’une interaction sur une partie de la page n’attende pas que le JavaScript d’une partie sans rapport finisse de s’exécuter. Appliquer un debounce aux gestionnaires coûteux et virtualiser les longues listes valent toujours la peine.',
          ],
        },
      },
      {
        heading: {
          en: 'CLS: the cheap fix nobody bothers to make',
          es: 'CLS: el arreglo barato que nadie se molesta en hacer',
          fr: 'CLS : le correctif bon marché que personne ne se donne la peine de faire',
        },
        paragraphs: {
          en: [
            'Layout shift is usually caused by the same three things: an image or video embed with no reserved width and height, a web font that renders at a noticeably different width than the fallback it replaces, and content — usually an ad slot, a cookie banner or a promotional bar — injected above existing content after the page has already laid out.',
            'All three have a fix that costs almost nothing: set explicit dimensions on every image and embed, choose a fallback font metrically close to the web font (or accept a brief flash rather than a shift), and reserve space for anything that injects late instead of letting it push everything below it down the page.',
          ],
          es: [
            'El desplazamiento del diseño suele estar provocado por las mismas tres cosas: una imagen o un vídeo incrustado sin ancho y alto reservados, una fuente web que se renderiza con un ancho notablemente distinto al de la fuente de reserva que sustituye, y contenido —normalmente un hueco publicitario, un aviso de cookies o una barra promocional— inyectado por encima del contenido existente después de que la página ya se haya maquetado.',
            'Las tres tienen un arreglo que casi no cuesta nada: fija dimensiones explícitas en cada imagen y elemento incrustado, elige una fuente de reserva métricamente cercana a la fuente web (o acepta un breve parpadeo en lugar de un desplazamiento), y reserva espacio para todo lo que se inyecta tarde en lugar de dejar que empuje hacia abajo todo lo que hay debajo de ello.',
          ],
          fr: [
            'Le décalage de mise en page est généralement causé par les trois mêmes choses : une image ou une vidéo intégrée sans largeur ni hauteur réservées, une police web qui s’affiche avec une largeur nettement différente de celle de la police de repli qu’elle remplace, et du contenu — généralement un emplacement publicitaire, une bannière de cookies ou une barre promotionnelle — injecté au-dessus du contenu existant après que la page a déjà été mise en page.',
            'Les trois ont un correctif qui ne coûte presque rien : fixez des dimensions explicites sur chaque image et chaque élément intégré, choisissez une police de repli métriquement proche de la police web (ou acceptez un bref clignotement plutôt qu’un décalage), et réservez de l’espace pour tout ce qui s’injecte tardivement au lieu de le laisser pousser vers le bas tout ce qui se trouve en dessous.',
          ],
        },
      },
      {
        heading: {
          en: 'Measuring it right',
          es: 'Medirlo bien',
          fr: 'Bien le mesurer',
        },
        paragraphs: {
          en: [
            'A Lighthouse score in dev tools is lab data: one run, on one machine, on a fast connection, useful for diagnosing the cause of a problem. It is not the number Google actually judges the page on, which comes from the Chrome User Experience Report: real visits, real devices, real networks, aggregated over 28 days. A page can score 100 in Lighthouse and still fail its Core Web Vitals in the field if enough real visitors are on a mid-range phone on patchy 4G.',
            'Search Console’s Core Web Vitals report and PageSpeed Insights both surface the field data once a site has enough traffic to qualify. For a smaller client site that has not hit the CrUX traffic threshold, I track the same three metrics through a lightweight script in the browser itself, sent to analytics, so the client gets real numbers rather than a lab estimate standing in for them.',
          ],
          es: [
            'Una puntuación de Lighthouse en las herramientas de desarrollo son datos de laboratorio: una ejecución, en una máquina, con una conexión rápida, útil para diagnosticar la causa de un problema. No es el número por el que Google juzga realmente la página, que procede del Chrome User Experience Report: visitas reales, dispositivos reales, redes reales, agregados a lo largo de 28 días. Una página puede sacar 100 en Lighthouse y aun así suspender sus Core Web Vitals sobre el terreno si suficientes visitantes reales están en un móvil de gama media con un 4G irregular.',
            'Tanto el informe de Core Web Vitals de Search Console como PageSpeed Insights muestran los datos de campo una vez que un sitio tiene tráfico suficiente para cumplir los requisitos. Para un sitio de cliente más pequeño que no ha alcanzado el umbral de tráfico de CrUX, mido las mismas tres métricas mediante un script ligero en el propio navegador, enviado a la analítica, para que el cliente obtenga números reales en lugar de una estimación de laboratorio que los sustituya.',
          ],
          fr: [
            'Un score Lighthouse dans les outils de développement, ce sont des données de laboratoire : une seule exécution, sur une seule machine, sur une connexion rapide, utile pour diagnostiquer la cause d’un problème. Ce n’est pas le chiffre sur lequel Google juge réellement la page, qui provient du Chrome User Experience Report : des visites réelles, des appareils réels, des réseaux réels, agrégés sur 28 jours. Une page peut obtenir 100 dans Lighthouse et échouer malgré tout à ses Core Web Vitals sur le terrain si assez de visiteurs réels sont sur un téléphone de milieu de gamme avec une 4G capricieuse.',
            'Le rapport Core Web Vitals de la Search Console et PageSpeed Insights font tous deux remonter les données de terrain dès qu’un site a assez de trafic pour être éligible. Pour un site client plus petit qui n’a pas atteint le seuil de trafic de CrUX, je suis les trois mêmes métriques via un script léger dans le navigateur lui-même, envoyé à l’analytics, afin que le client obtienne de vrais chiffres plutôt qu’une estimation de laboratoire qui en tienne lieu.',
          ],
        },
      },
      {
        heading: {
          en: 'Why this still closes deals',
          es: 'Por qué esto sigue cerrando tratos',
          fr: 'Pourquoi cela conclut encore des contrats',
        },
        paragraphs: {
          en: [
            'Most prospective clients cannot read a Lighthouse report, and they do not need to: they can feel a site that responds instantly to a tap versus one with a beat of lag, and they notice a competitor’s page loading before theirs has finished its layout shift. Performance is one of the few pieces of craft that is directly perceptible without any design vocabulary, which makes it unusually persuasive in a pitch.',
            'It also compounds with the rest of the site: a beautifully designed page that stutters on first load reads as unfinished, and a plain page that responds instantly reads as considered. Speed is not separate from the design work, it is part of what the design is judged on the moment a real visitor opens it.',
          ],
          es: [
            'La mayoría de los clientes potenciales no saben leer un informe de Lighthouse, y no les hace falta: pueden sentir un sitio que responde al instante a un toque frente a otro con un instante de retraso, y se dan cuenta de que la página de un competidor carga antes de que la suya haya terminado su desplazamiento del diseño. El rendimiento es una de las pocas piezas de artesanía que es directamente perceptible sin ningún vocabulario de diseño, lo que lo hace inusualmente persuasivo en una presentación.',
            'Además se combina con el resto del sitio: una página bellamente diseñada que se atasca en la primera carga se percibe como inacabada, y una página sencilla que responde al instante se percibe como cuidada. La velocidad no está separada del trabajo de diseño, es parte de aquello por lo que se juzga el diseño en el momento en que un visitante real lo abre.',
          ],
          fr: [
            'La plupart des clients potentiels ne savent pas lire un rapport Lighthouse, et ils n’en ont pas besoin : ils peuvent ressentir un site qui répond instantanément à un appui face à un autre avec une fraction de seconde de latence, et ils remarquent que la page d’un concurrent se charge avant que la leur ait terminé son décalage de mise en page. La performance est l’une des rares pièces d’artisanat directement perceptible sans aucun vocabulaire de design, ce qui la rend exceptionnellement persuasive dans un pitch.',
            'Elle se cumule aussi avec le reste du site : une page magnifiquement conçue qui saccade au premier chargement passe pour inachevée, et une page sobre qui répond instantanément passe pour soignée. La vitesse n’est pas séparée du travail de design, elle fait partie de ce sur quoi le design est jugé au moment où un vrai visiteur l’ouvre.',
          ],
        },
      },
    ],
    gallery: [],
    relatedProjects: ['cleaning-services-app'],
    relatedServices: ['custom-web-development', 'website-redesign'],
  },
  {
    slug: 'design-system-in-figma',
    title: {
      en: 'How to build a design system in Figma that survives handoff',
      es: 'Cómo construir un design system en Figma que sobreviva al handoff',
      fr: 'Comment construire un design system dans Figma qui survit au handoff',
    },
    excerpt: {
      en: 'A practical guide to design systems in Figma: variables and tokens, type and spacing scales, component properties, and naming that holds up in code.',
      es: 'Una guía práctica de los design systems en Figma: variables y tokens, escalas de tipografía y espaciado, propiedades de componentes y una nomenclatura que aguanta en el código.',
      fr: 'Un guide pratique des design systems dans Figma : variables et tokens, échelles de typographie et d’espacement, propriétés de composants, et un nommage qui tient dans le code.',
    },
    date: '2026-06-16',
    readingTime: 9,
    cover: {
      src: '/images/articles/design-system-in-figma/cover.png',
      alt: {
        en: 'Figma design system interface displaying color tokens, typography scales, spacing scale, and UI components on dark background',
        es: 'Interfaz de un design system en Figma que muestra tokens de color, escalas de tipografía, escala de espaciado y componentes de UI sobre un fondo oscuro',
        fr: 'Interface d’un design system dans Figma affichant des tokens de couleur, des échelles de typographie, une échelle d’espacement et des composants d’UI sur un fond sombre',
      },
    },
    intro: {
      en: [
        'Most design systems fail for the same reason: they are built as a separate exercise, admired for a week, and then quietly abandoned the first time a deadline arrives. The file grows a "Components" page nobody opens while the actual product screens are full of detached instances and one-off hex codes.',
        'This is the version I use on real client work: small enough to build in a few days, strict enough that it still holds three months later, and structured so a developer can map it onto Tailwind or a component library without guessing.',
      ],
      es: [
        'La mayoría de los design systems fracasan por la misma razón: se construyen como un ejercicio aparte, se admiran durante una semana y luego se abandonan sin hacer ruido la primera vez que llega una fecha de entrega. El archivo cría una página de "Componentes" que nadie abre mientras las pantallas reales del producto están llenas de instancias desvinculadas y códigos hexadecimales puestos una sola vez.',
        'Esta es la versión que uso en el trabajo real con clientes: lo bastante pequeña como para construirla en unos días, lo bastante estricta como para que siga aguantando tres meses después, y estructurada de forma que un desarrollador pueda mapearla sobre Tailwind o una biblioteca de componentes sin adivinar.',
      ],
      fr: [
        'La plupart des design systems échouent pour la même raison : ils sont construits comme un exercice à part, admirés pendant une semaine, puis discrètement abandonnés dès qu’arrive la première échéance. Le fichier se voit greffer une page "Composants" que personne n’ouvre pendant que les vrais écrans du produit sont remplis d’instances détachées et de codes hexadécimaux mis une seule fois.',
        'Voici la version que j’utilise sur de vrais projets clients : assez petite pour être construite en quelques jours, assez stricte pour tenir encore trois mois plus tard, et structurée de sorte qu’un développeur puisse la faire correspondre à Tailwind ou à une bibliothèque de composants sans deviner.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'Start with an audit, not a blank file',
          es: 'Empieza con una auditoría, no con un archivo en blanco',
          fr: 'Commencez par un audit, pas par un fichier vierge',
        },
        paragraphs: {
          en: [
            'Before you define anything, take the screens that already exist and pull out every colour, every text style and every spacing value in use. On a product that has been designed by more than one person, the result is usually eleven greys, seven font sizes that differ by one or two pixels, and three button heights. That inventory is the system brief. You are not inventing a scale from nothing; you are deciding which of the existing values survive.',
            'Collapse aggressively. Two greys that differ by two per cent lightness are one grey. A 15px and a 16px body size are one body size. Every value you keep is a decision someone has to make again on every future screen, so the smaller the set, the faster the system is to use, and speed of use is the only thing that determines whether people actually use it.',
            'Write the surviving values down as a flat list before you touch Figma variables. If you cannot justify a value out loud in one sentence, it does not go in.',
          ],
          es: [
            'Antes de definir nada, coge las pantallas que ya existen y extrae cada color, cada estilo de texto y cada valor de espaciado en uso. En un producto que ha diseñado más de una persona, el resultado suele ser once grises, siete tamaños de fuente que se diferencian en uno o dos píxeles y tres alturas de botón. Ese inventario es el brief del sistema. No estás inventando una escala de la nada; estás decidiendo cuáles de los valores existentes sobreviven.',
            'Fusiona sin piedad. Dos grises que se diferencian en un dos por ciento de luminosidad son un solo gris. Un tamaño de cuerpo de 15px y uno de 16px son un solo tamaño de cuerpo. Cada valor que conservas es una decisión que alguien tiene que volver a tomar en cada pantalla futura, así que cuanto más pequeño sea el conjunto, más rápido es de usar el sistema, y la rapidez de uso es lo único que determina si la gente lo usa de verdad.',
            'Anota los valores que sobreviven como una lista plana antes de tocar las variables de Figma. Si no puedes justificar un valor en voz alta en una sola frase, no entra.',
          ],
          fr: [
            'Avant de définir quoi que ce soit, prenez les écrans qui existent déjà et extrayez chaque couleur, chaque style de texte et chaque valeur d’espacement utilisée. Sur un produit qui a été conçu par plus d’une personne, le résultat, c’est généralement onze gris, sept tailles de police qui diffèrent d’un ou deux pixels et trois hauteurs de bouton. Cet inventaire est le brief du système. Vous n’inventez pas une échelle à partir de rien ; vous décidez lesquelles des valeurs existantes survivent.',
            'Fusionnez sans pitié. Deux gris qui diffèrent de deux pour cent de luminosité ne font qu’un seul gris. Une taille de corps de 15px et une de 16px ne font qu’une seule taille de corps. Chaque valeur que vous conservez est une décision que quelqu’un devra reprendre sur chaque écran à venir, donc plus l’ensemble est réduit, plus le système est rapide à utiliser, et la rapidité d’utilisation est la seule chose qui détermine si les gens s’en servent vraiment.',
            'Notez les valeurs qui survivent sous forme de liste à plat avant de toucher aux variables de Figma. Si vous ne pouvez pas justifier une valeur à voix haute en une phrase, elle n’entre pas.',
          ],
        },
      },
      {
        heading: {
          en: 'Three tiers of tokens, and no more',
          es: 'Tres niveles de tokens, y no más',
          fr: 'Trois niveaux de tokens, pas plus',
        },
        paragraphs: {
          en: [
            'Figma variables make it tempting to build an elaborate token graph. Resist it. Three tiers cover almost every product: primitives, semantics, and the small number of component-level overrides you genuinely cannot express semantically.',
            'Primitives are raw values with meaningless names: grey/100 through grey/900, blue/500, space/4. Semantics describe intent and point at primitives: surface/default, surface/raised, text/primary, text/muted, border/subtle, action/primary. Components only get their own token when a value is truly local, like the specific height of your date-picker cell.',
            'The reason for the middle tier is themes. When a client asks for dark mode, you add a second mode on the semantic collection and remap it to different primitives. Nothing in the component library changes, because no component ever references grey/800 directly; it references surface/raised. If your components point at primitives, dark mode is a rebuild rather than a remap.',
            'Name tokens in the order category/role/variant, all lowercase, with slashes for grouping. It reads well in the Figma sidebar and it converts cleanly to the nested objects a Tailwind theme or a CSS custom property file expects.',
          ],
          es: [
            'Las variables de Figma hacen tentador construir un grafo de tokens elaborado. Resístete. Tres niveles cubren casi cualquier producto: primitivos, semánticos y el reducido número de overrides a nivel de componente que de verdad no puedes expresar de forma semántica.',
            'Los primitivos son valores en bruto con nombres sin significado: de grey/100 a grey/900, blue/500, space/4. Los semánticos describen la intención y apuntan a los primitivos: surface/default, surface/raised, text/primary, text/muted, border/subtle, action/primary. Los componentes solo reciben su propio token cuando un valor es verdaderamente local, como la altura concreta de la celda de tu date-picker.',
            'La razón de ser del nivel intermedio son los temas. Cuando un cliente pide dark mode, añades un segundo modo en la colección semántica y lo remapeas a primitivos distintos. Nada de la biblioteca de componentes cambia, porque ningún componente referencia grey/800 directamente; referencia surface/raised. Si tus componentes apuntan a primitivos, el dark mode es una reconstrucción en lugar de un remapeo.',
            'Nombra los tokens en el orden categoría/rol/variante, todo en minúsculas, con barras para agrupar. Se lee bien en la barra lateral de Figma y se convierte de forma limpia en los objetos anidados que espera un tema de Tailwind o un archivo de propiedades personalizadas de CSS.',
          ],
          fr: [
            'Les variables de Figma donnent envie de construire un graphe de tokens élaboré. Résistez. Trois niveaux couvrent presque tous les produits : les primitives, les sémantiques et le petit nombre d’overrides au niveau du composant que vous ne pouvez vraiment pas exprimer de façon sémantique.',
            'Les primitives sont des valeurs brutes aux noms dénués de sens : de grey/100 à grey/900, blue/500, space/4. Les sémantiques décrivent l’intention et pointent vers les primitives : surface/default, surface/raised, text/primary, text/muted, border/subtle, action/primary. Les composants ne reçoivent leur propre token que lorsqu’une valeur est vraiment locale, comme la hauteur précise de la cellule de votre date-picker.',
            'La raison d’être du niveau intermédiaire, ce sont les thèmes. Quand un client demande le dark mode, vous ajoutez un second mode sur la collection sémantique et vous le remappez vers d’autres primitives. Rien dans la bibliothèque de composants ne change, parce qu’aucun composant ne référence jamais grey/800 directement ; il référence surface/raised. Si vos composants pointent vers des primitives, le dark mode devient une reconstruction plutôt qu’un remappage.',
            'Nommez les tokens dans l’ordre catégorie/rôle/variante, tout en minuscules, avec des barres obliques pour le regroupement. Cela se lit bien dans la barre latérale de Figma et se convertit proprement en objets imbriqués qu’attend un thème Tailwind ou un fichier de propriétés personnalisées CSS.',
          ],
        },
      },
      {
        heading: {
          en: 'Type and spacing scales you can defend',
          es: 'Escalas de tipografía y espaciado que puedes defender',
          fr: 'Des échelles de typographie et d’espacement que vous pouvez défendre',
        },
        paragraphs: {
          en: [
            'A type ramp of six to eight steps is enough for most interfaces: display, heading levels one to three, body, small, and caption. Each step should be visibly different from the one next to it. If you have to squint to tell two sizes apart, one of them is decoration, not hierarchy.',
            'Set line height as part of the style, not as a per-instance override. Long-form text wants roughly 1.5 to 1.6; headings want 1.05 to 1.2. Bake tracking into large sizes too: display type almost always needs negative letter spacing that body text does not.',
            'For spacing, pick a 4px base and use a limited scale: 4, 8, 12, 16, 24, 32, 48, 64. That maps one-to-one onto Tailwind default spacing, which means a developer never has to write an arbitrary value like p-[13px]. If a layout only works at 13px, the problem is usually the layout.',
            'One rule that saves more arguments than any other: spacing communicates grouping. Elements that belong together get less space between them than the gap separating them from the next group. Most "messy" interfaces are not badly styled, they are just evenly spaced.',
          ],
          es: [
            'Una escala tipográfica de seis a ocho pasos basta para la mayoría de las interfaces: display, niveles de encabezado del uno al tres, body, small y caption. Cada paso debería ser visiblemente distinto del que tiene al lado. Si tienes que entornar los ojos para diferenciar dos tamaños, uno de ellos es decoración, no jerarquía.',
            'Define la altura de línea como parte del estilo, no como un override por instancia. El texto largo pide en torno a 1.5 o 1.6; los encabezados piden de 1.05 a 1.2. Incorpora también el tracking en los tamaños grandes: la tipografía display casi siempre necesita un espaciado entre letras negativo que el texto de cuerpo no.',
            'Para el espaciado, elige una base de 4px y usa una escala limitada: 4, 8, 12, 16, 24, 32, 48, 64. Eso se corresponde uno a uno con el espaciado por defecto de Tailwind, lo que significa que un desarrollador nunca tiene que escribir un valor arbitrario como p-[13px]. Si un layout solo funciona a 13px, el problema suele ser el layout.',
            'Una regla que ahorra más discusiones que ninguna otra: el espaciado comunica agrupación. Los elementos que van juntos tienen menos espacio entre sí que el hueco que los separa del siguiente grupo. La mayoría de las interfaces "desordenadas" no están mal estilizadas, simplemente están espaciadas de forma uniforme.',
          ],
          fr: [
            'Une échelle typographique de six à huit paliers suffit pour la plupart des interfaces : display, niveaux de titre un à trois, body, small et caption. Chaque palier devrait être visiblement différent de celui d’à côté. Si vous devez plisser les yeux pour distinguer deux tailles, l’une des deux est de la décoration, pas de la hiérarchie.',
            'Définissez la hauteur de ligne comme partie intégrante du style, pas comme un override par instance. Le texte long veut environ 1.5 à 1.6 ; les titres veulent 1.05 à 1.2. Intégrez aussi le tracking dans les grandes tailles : la typographie display a presque toujours besoin d’un espacement des lettres négatif dont le texte courant n’a pas besoin.',
            'Pour l’espacement, choisissez une base de 4px et utilisez une échelle limitée : 4, 8, 12, 16, 24, 32, 48, 64. Cela correspond au un pour un avec l’espacement par défaut de Tailwind, ce qui veut dire qu’un développeur n’a jamais à écrire une valeur arbitraire comme p-[13px]. Si une mise en page ne fonctionne qu’à 13px, le problème, c’est généralement la mise en page.',
            'Une règle qui évite plus de débats que n’importe quelle autre : l’espacement communique le regroupement. Les éléments qui vont ensemble ont moins d’espace entre eux que l’écart qui les sépare du groupe suivant. La plupart des interfaces "en désordre" ne sont pas mal stylées, elles sont juste espacées de façon uniforme.',
          ],
        },
      },
      {
        heading: {
          en: 'Components: properties instead of a wall of variants',
          es: 'Componentes: propiedades en lugar de un muro de variantes',
          fr: 'Composants : des propriétés plutôt qu’un mur de variantes',
        },
        paragraphs: {
          en: [
            'A button with forty variants for every combination of size, style, icon and state is a component nobody can find anything in. Use component properties instead: a variant property for style, another for size, boolean properties for the icon slots, and instance swap properties for the icons themselves. Four properties describe the same forty combinations and stay legible.',
            'Name those properties the way the front end will name its props: size, variant, state, disabled, leadingIcon. When the Figma property panel and the React prop signature use the same words, handoff conversations stop being translation work. It costs nothing at build time and it pays off on every ticket afterwards.',
            "Build every component with auto layout, including the ones that look like they do not need it, and set the resizing behaviour deliberately: fill for anything that should stretch, hug for anything sized by its content. Auto layout is the closest thing Figma has to flexbox, so a component laid out properly in the file is a component that has already answered the developer's layout questions.",
            'Also design the states people forget: hover, focus, disabled, loading, and the version with text long enough to wrap. A component that only exists in its ideal state is not a system component, it is an illustration of one.',
          ],
          es: [
            'Un botón con cuarenta variantes para cada combinación de tamaño, estilo, icono y estado es un componente en el que nadie encuentra nada. Usa en su lugar las propiedades de componente: una propiedad de variante para el estilo, otra para el tamaño, propiedades booleanas para los slots de icono y propiedades de instance swap para los propios iconos. Cuatro propiedades describen esas mismas cuarenta combinaciones y siguen siendo legibles.',
            'Nombra esas propiedades igual que el front-end nombrará sus props: size, variant, state, disabled, leadingIcon. Cuando el panel de propiedades de Figma y la firma de props de React usan las mismas palabras, las conversaciones de handoff dejan de ser una tarea de traducción. No cuesta nada en tiempo de construcción y da beneficios en cada ticket posterior.',
            "Construye cada componente con auto layout, incluidos los que parecen no necesitarlo, y define el comportamiento de redimensionado de forma deliberada: fill para todo lo que deba estirarse, hug para todo lo que se dimensione según su contenido. El auto layout es lo más parecido que tiene Figma a flexbox, así que un componente bien maquetado en el archivo es un componente que ya ha respondido a las preguntas de layout del desarrollador.",
            'Diseña también los estados que la gente olvida: hover, focus, disabled, loading y la versión con texto lo bastante largo como para que se ajuste a varias líneas. Un componente que solo existe en su estado ideal no es un componente de sistema, es una ilustración de uno.',
          ],
          fr: [
            'Un bouton avec quarante variantes pour chaque combinaison de taille, de style, d’icône et d’état est un composant dans lequel personne ne trouve rien. Utilisez plutôt les propriétés de composant : une propriété de variante pour le style, une autre pour la taille, des propriétés booléennes pour les slots d’icône et des propriétés d’instance swap pour les icônes elles-mêmes. Quatre propriétés décrivent ces mêmes quarante combinaisons tout en restant lisibles.',
            'Nommez ces propriétés comme le front-end nommera ses props : size, variant, state, disabled, leadingIcon. Quand le panneau de propriétés de Figma et la signature des props de React utilisent les mêmes mots, les conversations de handoff cessent d’être un travail de traduction. Cela ne coûte rien au moment du build et ça paie sur chaque ticket ensuite.',
            "Construisez chaque composant avec auto layout, y compris ceux qui semblent ne pas en avoir besoin, et définissez le comportement de redimensionnement de façon délibérée : fill pour tout ce qui doit s’étirer, hug pour tout ce qui est dimensionné par son contenu. Auto layout est ce que Figma a de plus proche de flexbox, donc un composant bien disposé dans le fichier est un composant qui a déjà répondu aux questions de mise en page du développeur.",
            'Concevez aussi les états qu’on oublie : hover, focus, disabled, loading et la version avec un texte assez long pour passer à la ligne. Un composant qui n’existe que dans son état idéal n’est pas un composant de système, c’en est une illustration.',
          ],
        },
      },
      {
        heading: {
          en: 'Documentation that lives in the file',
          es: 'Documentación que vive en el archivo',
          fr: 'Une documentation qui vit dans le fichier',
        },
        paragraphs: {
          en: [
            'Nobody reads a separate documentation site for an eight-component library. Put the guidance where the work happens: fill in the description field on every component and every style, because it surfaces in the assets panel and in Dev Mode exactly when someone is deciding what to use.',
            'Add one page of paired do and do-not frames for the components that get misused most: usually buttons, form fields and empty states. A pair of small screenshots settles a question faster than a paragraph.',
            'Keep a short changelog page at the front of the file with dates and one-line entries. On a client project this is also your evidence trail: when someone asks why a colour changed in March, the answer takes ten seconds.',
            'Finally, use branching for anything structural. Renaming a variable collection or restructuring a component in the main file mid-sprint breaks live instances across every product file, and the person who finds out is always a developer at the worst moment.',
          ],
          es: [
            'Nadie lee un sitio de documentación aparte para una biblioteca de ocho componentes. Pon la orientación donde ocurre el trabajo: rellena el campo de descripción de cada componente y cada estilo, porque aparece en el panel de assets y en Dev Mode justo cuando alguien está decidiendo qué usar.',
            'Añade una página con frames emparejados de lo que se debe y lo que no se debe hacer para los componentes que más se usan mal: normalmente botones, campos de formulario y estados vacíos. Un par de capturas de pantalla pequeñas resuelven una duda más rápido que un párrafo.',
            'Mantén una breve página de changelog al principio del archivo con fechas y entradas de una línea. En un proyecto de cliente esto es además tu rastro de pruebas: cuando alguien pregunta por qué cambió un color en marzo, la respuesta lleva diez segundos.',
            'Por último, usa branching para cualquier cosa estructural. Renombrar una colección de variables o reestructurar un componente en el archivo principal a mitad de sprint rompe las instancias en vivo de todos los archivos de producto, y quien se entera es siempre un desarrollador en el peor momento.',
          ],
          fr: [
            'Personne ne lit un site de documentation séparé pour une bibliothèque de huit composants. Mettez les consignes là où le travail se fait : remplissez le champ de description de chaque composant et de chaque style, parce qu’il apparaît dans le panneau des assets et dans Dev Mode précisément au moment où quelqu’un décide de ce qu’il va utiliser.',
            'Ajoutez une page de frames appariés montrant ce qu’il faut faire et ne pas faire pour les composants les plus souvent mal utilisés : en général les boutons, les champs de formulaire et les états vides. Une paire de petites captures d’écran tranche une question plus vite qu’un paragraphe.',
            'Gardez une courte page de changelog au début du fichier avec des dates et des entrées d’une ligne. Sur un projet client, c’est aussi votre trace de preuves : quand quelqu’un demande pourquoi une couleur a changé en mars, la réponse prend dix secondes.',
            'Enfin, utilisez le branching pour tout ce qui est structurel. Renommer une collection de variables ou restructurer un composant dans le fichier principal en plein sprint casse les instances en direct dans tous les fichiers produit, et celui qui le découvre est toujours un développeur au pire moment.',
          ],
        },
      },
      {
        heading: {
          en: 'How to tell whether the system is actually working',
          es: 'Cómo saber si el sistema funciona de verdad',
          fr: 'Comment savoir si le système fonctionne vraiment',
        },
        paragraphs: {
          en: [
            'A system is working if designing a new screen feels like composing existing blocks rather than drawing new shapes. The real test comes two months after launch: check how many components in the file are un-detached instances, how many colours come from the token palette, and whether a new team member can build a screen without asking where to find the primary button.',
            'If the answers are high, the system is doing its job. If not, cut half the tokens and try again.',
          ],
          es: [
            'Un sistema funciona si diseñar una pantalla nueva se siente como componer bloques existentes en lugar de dibujar formas nuevas. La prueba de verdad llega dos meses después del lanzamiento: comprueba cuántos componentes del archivo son instancias sin desvincular, cuántos colores salen de la paleta de tokens y si un nuevo miembro del equipo puede construir una pantalla sin preguntar dónde encontrar el botón primario.',
            'Si las respuestas son altas, el sistema está cumpliendo su función. Si no, elimina la mitad de los tokens y vuelve a intentarlo.',
          ],
          fr: [
            'Un système fonctionne si concevoir un nouvel écran donne l’impression d’assembler des blocs existants plutôt que de dessiner de nouvelles formes. Le vrai test arrive deux mois après le lancement : vérifiez combien de composants du fichier sont des instances non détachées, combien de couleurs proviennent de la palette de tokens, et si un nouveau membre de l’équipe peut construire un écran sans demander où trouver le bouton primaire.',
            'Si les réponses sont élevées, le système fait son travail. Sinon, supprimez la moitié des tokens et recommencez.',
          ],
        },
      },
    ],
    gallery: [],
    relatedProjects: ['expenza', 'zenith'],
    relatedServices: ['design-systems', 'saas-product-design'],
  },
  {
    slug: 'figma-to-react-handoff',
    title: {
      en: 'Figma to React: a handoff that does not get rebuilt',
      es: 'De Figma a React: un handoff que no hay que reconstruir',
      fr: 'De Figma à React : un handoff qui n’est pas reconstruit',
    },
    excerpt: {
      en: 'Why Figma to React handoffs produce code that gets rewritten, and the workflow (token mapping, prop-shaped properties, real states) that prevents it.',
      es: 'Por qué los handoffs de Figma a React producen código que se acaba reescribiendo, y el flujo de trabajo (mapeo de tokens, propiedades con forma de props, estados reales) que lo evita.',
      fr: 'Pourquoi les handoffs de Figma vers React produisent du code qui finit réécrit, et le flux de travail (mapping des tokens, propriétés en forme de props, états réels) qui l’évite.',
    },
    date: '2026-04-21',
    readingTime: 8,
    cover: {
      src: '/images/articles/figma-to-react-handoff/cover.png',
      alt: {
        en: 'Diagram showing Figma component properties and design tokens mapped directly to React component code and props',
        es: 'Diagrama que muestra las propiedades de componente de Figma y los design tokens mapeados directamente al código de componente y las props de React',
        fr: 'Diagramme montrant les propriétés de composant Figma et les design tokens mappés directement vers le code de composant et les props de React',
      },
    },
    intro: {
      en: [
        'The common complaint from developers is not that designs are ugly, or late. It is that the design file answers the wrong questions. A Figma file describes screens; a React codebase describes components with props and states. When the handoff hands over screens, the developer has to reverse-engineer the component model, and their guess will not match yours.',
        'I design and then build the front end myself on most projects, which means I get to feel the cost of my own sloppy handoffs about two days later. Everything below comes out of that loop.',
      ],
      es: [
        'La queja habitual de los desarrolladores no es que los diseños sean feos, ni que lleguen tarde. Es que el archivo de diseño responde a las preguntas equivocadas. Un archivo de Figma describe pantallas; una base de código de React describe componentes con props y estados. Cuando el handoff entrega pantallas, el desarrollador tiene que hacer ingeniería inversa del modelo de componentes, y su conjetura no va a coincidir con la tuya.',
        'En la mayoría de los proyectos, primero diseño y luego construyo yo mismo el front-end, lo que significa que sufro el coste de mis propios handoffs chapuceros unos dos días después. Todo lo que viene a continuación sale de ese bucle.',
      ],
      fr: [
        'La plainte habituelle des développeurs, ce n’est pas que les designs sont laids, ou en retard. C’est que le fichier de design répond aux mauvaises questions. Un fichier Figma décrit des écrans ; une base de code React décrit des composants avec des props et des états. Quand le handoff livre des écrans, le développeur doit faire de la rétro-ingénierie sur le modèle de composants, et sa supposition ne correspondra pas à la vôtre.',
        'Sur la plupart des projets, je conçois puis je construis moi-même le front-end, ce qui veut dire que je ressens le coût de mes propres handoffs bâclés environ deux jours plus tard. Tout ce qui suit sort de cette boucle.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'The real gap: screens versus states',
          es: 'La verdadera brecha: pantallas frente a estados',
          fr: 'Le vrai fossé : les écrans face aux états',
        },
        paragraphs: {
          en: [
            'A screen is one frozen combination of data, viewport and interaction state. A component has to handle all of them. If the file shows a dashboard with four cards of ideal-length titles, the developer still has to decide what happens with one card, with twelve, with a title that wraps to three lines, while data is loading, and when the request fails.',
            'Those decisions get made anyway. The only question is whether a designer makes them or whether they get invented at 6pm by someone who is also fighting a type error. Every unanswered state is a place where the build drifts from the design, and drift is what makes the rebuild conversation happen.',
            'So the deliverable is not a set of beautiful screens. It is a component inventory plus the screens that show those components composed together.',
          ],
          es: [
            'Una pantalla es una combinación congelada de datos, viewport y estado de interacción. Un componente tiene que gestionarlas todas. Si el archivo muestra un panel de control con cuatro tarjetas de títulos de longitud ideal, el desarrollador aún tiene que decidir qué pasa con una tarjeta, con doce, con un título que se ajusta a tres líneas, mientras se cargan los datos y cuando la petición falla.',
            'Esas decisiones se toman de todos modos. La única cuestión es si las toma un diseñador o si se las inventa a las seis de la tarde alguien que además está peleándose con un error de tipos. Cada estado sin resolver es un lugar donde el desarrollo se aparta del diseño, y ese desvío es lo que provoca la conversación sobre reconstruirlo.',
            'Así que el entregable no es un conjunto de pantallas bonitas. Es un inventario de componentes más las pantallas que muestran esos componentes compuestos juntos.',
          ],
          fr: [
            'Un écran est une combinaison figée de données, de viewport et d’état d’interaction. Un composant, lui, doit tous les gérer. Si le fichier montre un tableau de bord avec quatre cartes aux titres de longueur idéale, le développeur doit encore décider ce qui se passe avec une carte, avec douze, avec un titre qui passe à trois lignes, pendant le chargement des données et quand la requête échoue.',
            'Ces décisions se prennent de toute façon. La seule question est de savoir si c’est un designer qui les prend ou si elles sont inventées à 18 h par quelqu’un qui se bat en plus avec une erreur de type. Chaque état laissé sans réponse est un endroit où la réalisation s’écarte du design, et cet écart est ce qui déclenche la conversation sur la reconstruction.',
            'Le livrable n’est donc pas un ensemble de beaux écrans. C’est un inventaire de composants, plus les écrans qui montrent ces composants assemblés ensemble.',
          ],
        },
      },
      {
        heading: {
          en: 'Shape Figma properties like React props',
          es: 'Da a las propiedades de Figma la forma de las props de React',
          fr: 'Donnez aux propriétés Figma la forme des props React',
        },
        paragraphs: {
          en: [
            'Figma component properties and React props are the same idea with different syntax. A button with variant set to primary or ghost, size set to sm or md, and boolean properties for a leading icon translates directly into a props interface. Name them identically and the mapping is mechanical rather than interpretive.',
            'Avoid variant properties that encode two things at once. A variant called primary-large-icon has to be parsed apart before it can become code, and it multiplies your variant matrix. Three independent properties beat one combined one every time.',
            'The same discipline applies to layer names inside the component. Slot, label, icon and container are useful names. Frame 247 is not. A developer opening Dev Mode reads your layer tree as a rough DOM outline, so a tidy tree is genuinely part of the deliverable.',
            'Where a component nests another component (a card containing a button), use an instance swap or nested instance rather than redrawing it. Nesting in the file is what tells the developer the composition is intentional.',
          ],
          es: [
            'Las propiedades de componente de Figma y las props de React son la misma idea con distinta sintaxis. Un botón con la variante fijada en primary o ghost, el tamaño en sm o md, y propiedades booleanas para un icono inicial se traduce directamente en una interfaz de props. Nómbralas de forma idéntica y el mapeo es mecánico en lugar de interpretativo.',
            'Evita las propiedades de variante que codifican dos cosas a la vez. Una variante llamada primary-large-icon hay que desglosarla antes de que pueda convertirse en código, y multiplica tu matriz de variantes. Tres propiedades independientes le ganan a una combinada siempre.',
            'La misma disciplina se aplica a los nombres de capa dentro del componente. Slot, label, icon y container son nombres útiles. Frame 247 no. Un desarrollador que abre Dev Mode lee tu árbol de capas como un esbozo aproximado del DOM, así que un árbol ordenado es de verdad parte del entregable.',
            'Cuando un componente anida otro componente (una tarjeta que contiene un botón), usa un instance swap o una instancia anidada en lugar de volver a dibujarlo. El anidamiento en el archivo es lo que le dice al desarrollador que la composición es intencionada.',
          ],
          fr: [
            'Les propriétés de composant Figma et les props React sont la même idée avec une syntaxe différente. Un bouton dont la variante est réglée sur primary ou ghost, la taille sur sm ou md, et des propriétés booléennes pour une icône de tête se traduit directement en une interface de props. Nommez-les à l’identique et le mapping devient mécanique plutôt qu’interprétatif.',
            'Évitez les propriétés de variante qui encodent deux choses à la fois. Une variante appelée primary-large-icon doit être décomposée avant de pouvoir devenir du code, et elle multiplie votre matrice de variantes. Trois propriétés indépendantes valent mieux qu’une seule combinée, à chaque fois.',
            'La même discipline s’applique aux noms de calque à l’intérieur du composant. Slot, label, icon et container sont des noms utiles. Frame 247 ne l’est pas. Un développeur qui ouvre Dev Mode lit votre arbre de calques comme une ébauche approximative du DOM, si bien qu’un arbre bien rangé fait réellement partie du livrable.',
            'Quand un composant en imbrique un autre (une carte contenant un bouton), utilisez un instance swap ou une instance imbriquée plutôt que de le redessiner. L’imbrication dans le fichier est ce qui indique au développeur que la composition est intentionnelle.',
          ],
        },
      },
      {
        heading: {
          en: 'Map tokens to the theme config before the first component',
          es: 'Mapea los tokens a la configuración del tema antes del primer componente',
          fr: 'Mappez les tokens vers la configuration du thème avant le premier composant',
        },
        paragraphs: {
          en: [
            'If the project uses Tailwind, the design tokens should land in the theme configuration as named values on day one: colours, spacing, radii, font sizes, shadows. Do that first and the code that follows uses bg-surface-raised and p-4 instead of arbitrary values scattered through the markup.',
            "The friction point is usually the spacing scale. Tailwind's default steps are multiples of 4px; if the Figma spacing tokens use a different base, every gap in the build becomes a bracketed one-off. Align the two scales at the start, or commit to overriding the theme completely. Half-alignment is the worst of both.",
            'Colour tokens should cross the boundary by semantic name, not by hex. When a token changes value later, a semantic mapping means one edit in the theme file. A hex-based handoff means a find-and-replace across a codebase, and it will miss the one in the email template.',
          ],
          es: [
            'Si el proyecto usa Tailwind, los design tokens deberían aterrizar en la configuración del tema como valores con nombre desde el primer día: colores, espaciado, radios, tamaños de fuente, sombras. Haz eso primero y el código que viene después usa bg-surface-raised y p-4 en lugar de valores arbitrarios repartidos por el marcado.',
            'El punto de fricción suele ser la escala de espaciado. Los pasos por defecto de Tailwind son múltiplos de 4px; si los tokens de espaciado de Figma usan otra base, cada hueco del desarrollo se convierte en un valor entre corchetes puesto una sola vez. Alinea las dos escalas al principio, o comprométete a sobrescribir el tema por completo. La alineación a medias es lo peor de ambos mundos.',
            'Los tokens de color deberían cruzar la frontera por nombre semántico, no por hex. Cuando un token cambia de valor más adelante, un mapeo semántico significa una sola edición en el archivo del tema. Un handoff basado en hex significa un buscar y reemplazar por toda una base de código, y se dejará el que hay en la plantilla de correo.',
          ],
          fr: [
            'Si le projet utilise Tailwind, les design tokens devraient atterrir dans la configuration du thème sous forme de valeurs nommées dès le premier jour : couleurs, espacement, rayons, tailles de police, ombres. Faites cela d’abord et le code qui suit utilise bg-surface-raised et p-4 au lieu de valeurs arbitraires éparpillées dans le balisage.',
            'Le point de friction, c’est généralement l’échelle d’espacement. Les paliers par défaut de Tailwind sont des multiples de 4px ; si les tokens d’espacement de Figma utilisent une autre base, chaque écart de la réalisation devient une valeur entre crochets mise une seule fois. Alignez les deux échelles dès le départ, ou engagez-vous à surcharger complètement le thème. Un demi-alignement est le pire des deux.',
            'Les tokens de couleur devraient franchir la frontière par nom sémantique, pas par hex. Quand un token change de valeur plus tard, un mapping sémantique signifie une seule modification dans le fichier du thème. Un handoff fondé sur le hex signifie un rechercher-remplacer à travers toute une base de code, et il ratera celui du modèle d’e-mail.',
          ],
        },
      },
      {
        heading: {
          en: 'Design the states nobody asks for',
          es: 'Diseña los estados que nadie pide',
          fr: 'Concevez les états que personne ne demande',
        },
        paragraphs: {
          en: [
            'For every component that displays data, draw the zero, one and many cases. Zero is the empty state and needs copy that says what to do next, not just "No results". One is where centred layouts and grids often break. Many is where you find out whether the list needed pagination.',
            'For every component that fetches, draw loading and error. A skeleton that matches the final layout prevents the shift users feel as jank; a spinner in the middle of a container does not. For errors, write the actual message: "Could not load invoices. Retry" is a design decision, not copy someone fills in later.',
            'For every interactive element, define hover, focus-visible, active and disabled. Focus rings in particular get skipped in design and then either omitted or left as the browser default in code, which is both an accessibility failure and the kind of unpolished detail clients notice without being able to name.',
            'And test the layout with hostile content: a name three times longer than the placeholder, a number with more digits than expected, a language that runs longer than English. Ten minutes of that in Figma saves a bug report per screen.',
          ],
          es: [
            'Para cada componente que muestra datos, dibuja los casos de cero, uno y muchos. Cero es el estado vacío y necesita un texto que diga qué hacer a continuación, no solo "Sin resultados". Uno es donde a menudo se rompen las maquetaciones centradas y las cuadrículas. Muchos es donde descubres si la lista necesitaba paginación.',
            'Para cada componente que hace peticiones, dibuja los estados de carga y de error. Un esqueleto que coincide con la maquetación final evita el desplazamiento que los usuarios perciben como tirones; un spinner en medio de un contenedor no. Para los errores, escribe el mensaje de verdad: "No se pudieron cargar las facturas. Reintentar" es una decisión de diseño, no un texto que alguien rellena después.',
            'Para cada elemento interactivo, define hover, focus-visible, active y disabled. Los anillos de foco en particular se saltan en el diseño y luego, en el código, o se omiten o se dejan como el valor por defecto del navegador, lo que es a la vez un fallo de accesibilidad y esa clase de detalle sin pulir que los clientes notan sin ser capaces de nombrarlo.',
            'Y prueba la maquetación con contenido hostil: un nombre tres veces más largo que el placeholder, un número con más dígitos de los esperados, un idioma que se extiende más que el inglés. Diez minutos de eso en Figma ahorran un informe de error por pantalla.',
          ],
          fr: [
            'Pour chaque composant qui affiche des données, dessinez les cas zéro, un et plusieurs. Zéro, c’est l’état vide, et il lui faut un texte qui dit quoi faire ensuite, pas seulement "Aucun résultat". Un, c’est là que les mises en page centrées et les grilles cassent souvent. Plusieurs, c’est là que vous découvrez si la liste avait besoin d’une pagination.',
            'Pour chaque composant qui va chercher des données, dessinez les états de chargement et d’erreur. Un squelette qui correspond à la mise en page finale évite le décalage que les utilisateurs ressentent comme une saccade ; un spinner au milieu d’un conteneur, non. Pour les erreurs, écrivez le vrai message : "Impossible de charger les factures. Réessayer" est une décision de design, pas un texte que quelqu’un remplit plus tard.',
            'Pour chaque élément interactif, définissez hover, focus-visible, active et disabled. Les anneaux de focus en particulier sont sautés à la conception, puis, dans le code, soit omis, soit laissés au réglage par défaut du navigateur, ce qui est à la fois un échec d’accessibilité et le genre de détail non peaufiné que les clients remarquent sans pouvoir le nommer.',
            'Et testez la mise en page avec du contenu hostile : un nom trois fois plus long que le placeholder, un nombre avec plus de chiffres que prévu, une langue plus longue que l’anglais. Dix minutes de cela dans Figma économisent un rapport de bug par écran.',
          ],
        },
      },
      {
        heading: {
          en: 'Specify responsive behaviour, do not imply it',
          es: 'Especifica el comportamiento responsive, no lo des por supuesto',
          fr: 'Spécifiez le comportement responsive, ne le sous-entendez pas',
        },
        paragraphs: {
          en: [
            'Two frames, one at 1440 and one at 390, leave everything between them to interpretation. Say what happens in the gap: which breakpoints exist, what the container max width is, which grids collapse from four columns to two to one, and what the padding is at each step.',
            'Auto layout with wrapping and fill-container resizing communicates a lot of this without extra frames, because it demonstrates intent rather than describing it. Where the behaviour is genuinely non-obvious (a sidebar that becomes a bottom sheet, a table that becomes stacked cards), draw the intermediate state. That is the one the developer would otherwise have to invent.',
          ],
          es: [
            'Dos frames, uno a 1440 y otro a 390, dejan a la interpretación todo lo que hay entre ellos. Di qué pasa en el hueco: qué breakpoints existen, cuál es el ancho máximo del contenedor, qué cuadrículas pasan de cuatro columnas a dos y a una, y cuál es el padding en cada paso.',
            'El auto layout con wrapping y redimensionado fill-container comunica buena parte de esto sin frames adicionales, porque demuestra la intención en lugar de describirla. Cuando el comportamiento no es nada obvio (una barra lateral que se convierte en un bottom sheet, una tabla que se convierte en tarjetas apiladas), dibuja el estado intermedio. Ese es el que, de lo contrario, el desarrollador tendría que inventar.',
          ],
          fr: [
            'Deux frames, un à 1440 et un à 390, laissent tout ce qui les sépare à l’interprétation. Dites ce qui se passe dans l’intervalle : quels breakpoints existent, quelle est la largeur maximale du conteneur, quelles grilles passent de quatre colonnes à deux puis à une, et quel est le padding à chaque palier.',
            'L’auto layout avec wrapping et redimensionnement fill-container communique une grande partie de cela sans frames supplémentaires, parce qu’il démontre l’intention au lieu de la décrire. Là où le comportement n’a vraiment rien d’évident (une barre latérale qui devient un bottom sheet, un tableau qui devient des cartes empilées), dessinez l’état intermédiaire. C’est celui que le développeur devrait sinon inventer.',
          ],
        },
      },
      {
        heading: {
          en: 'What the design-to-code plugins still cannot do',
          es: 'Lo que los plugins de diseño a código todavía no pueden hacer',
          fr: 'Ce que les plugins de design vers code ne savent toujours pas faire',
        },
        paragraphs: {
          en: [
            'Plugins that export Figma frames to React have improved a lot, and they are genuinely useful for a static marketing section or a quick prototype. What they cannot do is produce a component that fits the codebase you already have. The output does not know about your existing Button, your theme tokens, your routing, your data layer or your state management, so it arrives as a self-contained island of markup that has to be dismantled before it can be used.',
            'They also cannot infer props or states, because those do not exist in the frame, which is precisely the gap described at the top of this article. The generated code represents one screen, one breakpoint, one state.',
            'The realistic use is scaffolding: let a plugin get the structure and spacing roughly in place, then rewrite it against the real design system. Treat the output as a first draft written by someone who has never seen the rest of the project, and the tool becomes helpful rather than a source of technical debt.',
          ],
          es: [
            'Los plugins que exportan frames de Figma a React han mejorado mucho, y son genuinamente útiles para una sección de marketing estática o un prototipo rápido. Lo que no pueden hacer es producir un componente que encaje en la base de código que ya tienes. El resultado no sabe nada de tu Button existente, tus tokens de tema, tu enrutado, tu capa de datos ni tu gestión de estado, así que llega como una isla de marcado autocontenida que hay que desmontar antes de poder usarla.',
            'Tampoco pueden inferir props ni estados, porque esos no existen en el frame, que es precisamente la brecha descrita al principio de este artículo. El código generado representa una pantalla, un breakpoint, un estado.',
            'El uso realista es el andamiaje: deja que un plugin coloque más o menos la estructura y el espaciado, y luego reescríbelo frente al design system de verdad. Trata el resultado como un primer borrador escrito por alguien que nunca ha visto el resto del proyecto, y la herramienta pasa a ser útil en lugar de una fuente de deuda técnica.',
          ],
          fr: [
            'Les plugins qui exportent des frames Figma vers React se sont beaucoup améliorés, et ils sont réellement utiles pour une section marketing statique ou un prototype rapide. Ce qu’ils ne savent pas faire, c’est produire un composant qui s’intègre à la base de code que vous avez déjà. La sortie ne connaît ni votre Button existant, ni vos tokens de thème, ni votre routage, ni votre couche de données, ni votre gestion d’état, si bien qu’elle arrive comme un îlot de balisage autonome qu’il faut démonter avant de pouvoir s’en servir.',
            'Ils ne peuvent pas non plus déduire les props ou les états, parce que ceux-ci n’existent pas dans le frame, ce qui est précisément le fossé décrit au début de cet article. Le code généré représente un écran, un breakpoint, un état.',
            'L’usage réaliste, c’est l’échafaudage : laissez un plugin mettre grossièrement en place la structure et l’espacement, puis réécrivez-le face au vrai design system. Traitez la sortie comme un premier jet écrit par quelqu’un qui n’a jamais vu le reste du projet, et l’outil devient utile au lieu d’être une source de dette technique.',
          ],
        },
      },
    ],
    gallery: [],
    relatedProjects: ['stayease', 'ai-agent-landing'],
    relatedServices: ['figma-to-react', 'web-ui-design'],
  },
  {
    slug: 'ui-design-mistakes',
    title: {
      en: '8 UI Design Mistakes Killing Your Product (and How to Fix Each)',
      es: '8 errores de UI que están matando tu producto (y cómo arreglar cada uno)',
      fr: 'Les 8 erreurs d’UI qui tuent votre produit (et comment corriger chacune)',
    },
    excerpt: {
      en: 'The same 8 issues show up in nearly every product I audit — contrast, spacing, hierarchy, states. Here\u2019s the exact fix for each, with tests you can run today.',
      es: 'Los mismos 8 problemas aparecen en casi todos los productos que audito: contraste, espaciado, jerarquía, estados. Aquí tienes el arreglo exacto para cada uno, con pruebas que puedes ejecutar hoy.',
      fr: 'Les mêmes 8 problèmes reviennent dans presque tous les produits que j’audite : contraste, espacement, hiérarchie, états. Voici le correctif exact pour chacun, avec des tests que vous pouvez faire dès aujourd’hui.',
    },
    date: '2025-12-09',
    readingTime: 7,
    cover: {
      src: '/images/articles/ui-design-mistakes/cover.png',
      alt: {
        en: 'Overview of 8 common UI design mistakes and fixes covering contrast, typography, spacing, states, hierarchy, forms, choices, and feedback',
        es: 'Resumen de 8 errores habituales de diseño de UI y sus arreglos, que abarcan contraste, tipografía, espaciado, estados, jerarquía, formularios, opciones y feedback',
        fr: 'Vue d’ensemble de 8 erreurs courantes de design d’UI et leurs correctifs, couvrant le contraste, la typographie, l’espacement, les états, la hiérarchie, les formulaires, les choix et le feedback',
      },
    },
    intro: {
      en: [
        'When a founder asks me to look at their existing product, the problems are rarely exotic. The same eight issues account for most of what makes an interface feel unfinished, and all of them are cheap to fix relative to how much they change the impression the product makes.',
        'None of this is about taste. Each item below has a concrete test you can run on your own screens this afternoon.',
      ],
      es: [
        'Cuando un fundador me pide que eche un vistazo a su producto actual, los problemas rara vez son exóticos. Los mismos ocho problemas explican la mayor parte de lo que hace que una interfaz parezca inacabada, y todos son baratos de arreglar en relación con lo mucho que cambian la impresión que causa el producto.',
        'Nada de esto va sobre el gusto. Cada punto de abajo tiene una prueba concreta que puedes hacer en tus propias pantallas esta misma tarde.',
      ],
      fr: [
        'Quand un fondateur me demande de jeter un œil à son produit existant, les problèmes sont rarement exotiques. Les mêmes huit problèmes expliquent l’essentiel de ce qui fait qu’une interface paraît inachevée, et tous sont peu coûteux à corriger au regard de tout ce qu’ils changent dans l’impression que donne le produit.',
        'Rien de tout cela n’est une question de goût. Chaque point ci-dessous s’accompagne d’un test concret que vous pouvez faire sur vos propres écrans cet après-midi.',
      ],
    },
    sections: [
      {
        heading: {
          en: 'Too many type sizes, too little hierarchy',
          es: 'Demasiados tamaños de tipografía, muy poca jerarquía',
          fr: 'Trop de tailles de typographie, trop peu de hiérarchie',
        },
        paragraphs: {
          en: [
            'Count the distinct font sizes in your product. If the number is above eight, some of them are doing no work. The usual pattern is sizes that differ by a single pixel (15 and 16, 13 and 14), which reads as inconsistency rather than hierarchy, because the eye cannot resolve the difference but does register that something is off.',
            'The fix is a fixed ramp with obvious jumps between steps, and using weight and colour to create the finer distinctions instead of size. A muted grey label at the same size as the body text separates itself perfectly well without a new size in the scale.',
            'The related mistake is heading levels chosen by appearance. Pick the heading level for document structure and style it to look right; screen readers and search engines both read the structure, not the pixel size.',
          ],
          es: [
            'Cuenta los tamaños de fuente distintos de tu producto. Si el número pasa de ocho, algunos no están haciendo ningún trabajo. El patrón habitual son tamaños que se diferencian en un solo píxel (15 y 16, 13 y 14), lo que se lee como inconsistencia y no como jerarquía, porque el ojo no llega a resolver la diferencia pero sí registra que algo no encaja.',
            'El arreglo es una escala fija con saltos evidentes entre pasos, y usar el peso y el color para crear las distinciones más finas en lugar del tamaño. Una etiqueta en gris apagado del mismo tamaño que el texto de cuerpo se separa perfectamente sin necesidad de un nuevo tamaño en la escala.',
            'El error relacionado son los niveles de encabezado elegidos por su apariencia. Elige el nivel de encabezado según la estructura del documento y dale el estilo para que se vea bien; tanto los lectores de pantalla como los buscadores leen la estructura, no el tamaño en píxeles.',
          ],
          fr: [
            'Comptez les tailles de police distinctes de votre produit. Si le nombre dépasse huit, certaines ne servent à rien. Le schéma habituel, ce sont des tailles qui diffèrent d’un seul pixel (15 et 16, 13 et 14), ce qui se lit comme une incohérence plutôt qu’une hiérarchie, parce que l’œil n’arrive pas à résoudre la différence mais enregistre bien que quelque chose cloche.',
            'Le correctif, c’est une échelle fixe avec des sauts évidents entre les paliers, et l’usage de la graisse et de la couleur pour créer les distinctions les plus fines plutôt que la taille. Une étiquette en gris atténué de la même taille que le texte courant se distingue parfaitement sans nouvelle taille dans l’échelle.',
            'L’erreur connexe, ce sont les niveaux de titre choisis d’après leur apparence. Choisissez le niveau de titre selon la structure du document et stylez-le pour qu’il rende bien ; les lecteurs d’écran comme les moteurs de recherche lisent la structure, pas la taille en pixels.',
          ],
        },
      },
      {
        heading: {
          en: 'Spacing that is even instead of grouped',
          es: 'Un espaciado uniforme en lugar de agrupado',
          fr: 'Un espacement uniforme au lieu d’être groupé',
        },
        paragraphs: {
          en: [
            'Interfaces that feel hard to scan are usually spaced uniformly: the same 16px gap between a label and its input as between two unrelated sections. Proximity is the strongest grouping signal there is, and using it evenly throws it away.',
            'Fix it by deciding relationships first. A label sits close to its field, fields sit further apart from each other, and a section break gets two or three times that. When the spacing is right you can squint at the screen and still see the structure.',
            'While you are there, pick a base unit (4px is a good default) and stop using values outside the scale. Arbitrary spacing is the single most common source of the "something looks slightly wrong" feeling that clients report but cannot diagnose.',
          ],
          es: [
            'Las interfaces que cuesta recorrer con la vista suelen estar espaciadas de forma uniforme: el mismo hueco de 16px entre una etiqueta y su campo que entre dos secciones sin relación. La proximidad es la señal de agrupación más fuerte que existe, y usarla de manera uniforme la desperdicia.',
            'Arréglalo decidiendo primero las relaciones. Una etiqueta va pegada a su campo, los campos van más separados entre sí, y un cambio de sección recibe dos o tres veces esa distancia. Cuando el espaciado está bien, puedes entornar los ojos ante la pantalla y aun así ver la estructura.',
            'Ya que estás, elige una unidad base (4px es un buen valor por defecto) y deja de usar valores fuera de la escala. El espaciado arbitrario es, con diferencia, la fuente más habitual de esa sensación de que «algo se ve un poco mal» que los clientes mencionan pero no saben diagnosticar.',
          ],
          fr: [
            'Les interfaces qu’on a du mal à parcourir du regard sont généralement espacées de façon uniforme : le même écart de 16px entre une étiquette et son champ qu’entre deux sections sans rapport. La proximité est le signal de regroupement le plus fort qui soit, et l’utiliser de manière uniforme le gaspille.',
            'Corrigez cela en décidant d’abord des relations. Une étiquette se tient près de son champ, les champs se tiennent plus éloignés les uns des autres, et une rupture de section reçoit deux ou trois fois cet écart. Quand l’espacement est bon, vous pouvez plisser les yeux devant l’écran et voir encore la structure.',
            'Pendant que vous y êtes, choisissez une unité de base (4px est une bonne valeur par défaut) et cessez d’utiliser des valeurs hors de l’échelle. L’espacement arbitraire est de loin la source la plus fréquente de cette impression que « quelque chose ne va pas tout à fait » que les clients signalent sans pouvoir la diagnostiquer.',
          ],
        },
      },
      {
        heading: {
          en: 'Contrast that fails on real screens',
          es: 'Un contraste que falla en las pantallas reales',
          fr: 'Un contraste qui échoue sur les écrans réels',
        },
        paragraphs: {
          en: [
            "Light grey text on a white background looks refined on a designer's calibrated monitor in a dim room. It is unreadable on a laptop outdoors, and it fails accessibility requirements. The threshold to check against is a 4.5:1 contrast ratio for body text and 3:1 for large text, icons and the borders of interactive controls.",
            'Run a contrast checker over your muted text, your placeholder text, your disabled states and your borders. Placeholder text is the most common failure, and it is often carrying information that should have been a label anyway.',
            'The second half of this is not relying on colour alone. A red border on an invalid field means nothing to a colour-blind user without an icon and a message. Errors need text, always.',
          ],
          es: [
            'El texto en gris claro sobre fondo blanco parece refinado en el monitor calibrado de un diseñador en una sala con poca luz. Es ilegible en un portátil al aire libre, e incumple los requisitos de accesibilidad. El umbral con el que comparar es una relación de contraste de 4.5:1 para el texto de cuerpo y 3:1 para el texto grande, los iconos y los bordes de los controles interactivos.',
            'Pasa un comprobador de contraste por tu texto atenuado, tu texto de placeholder, tus estados disabled y tus bordes. El texto de placeholder es el fallo más habitual, y a menudo lleva información que, de todos modos, debería haber sido una etiqueta.',
            'La otra mitad de esto es no depender solo del color. Un borde rojo en un campo no válido no significa nada para una persona daltónica sin un icono y un mensaje. Los errores necesitan texto, siempre.',
          ],
          fr: [
            'Le texte en gris clair sur fond blanc paraît raffiné sur le moniteur calibré d’un designer dans une pièce peu éclairée. Il est illisible sur un portable en extérieur, et il ne satisfait pas aux exigences d’accessibilité. Le seuil à respecter est un rapport de contraste de 4.5:1 pour le texte courant et 3:1 pour le grand texte, les icônes et les bordures des contrôles interactifs.',
            'Passez un vérificateur de contraste sur votre texte atténué, votre texte de placeholder, vos états disabled et vos bordures. Le texte de placeholder est l’échec le plus fréquent, et il porte souvent une information qui aurait de toute façon dû être une étiquette.',
            'L’autre moitié, c’est de ne pas s’en remettre à la seule couleur. Une bordure rouge sur un champ invalide ne signifie rien pour une personne daltonienne sans une icône et un message. Les erreurs ont besoin de texte, toujours.',
          ],
        },
      },
      {
        heading: {
          en: 'Empty, loading and error states left undesigned',
          es: 'Estados vacíos, de carga y de error que se dejan sin diseñar',
          fr: 'Des états vides, de chargement et d’erreur laissés sans design',
        },
        paragraphs: {
          en: [
            'The first screen a new user sees is usually the empty one, and it is usually the least designed screen in the product. An empty state that says "No projects yet" wastes the moment; one that explains what a project is and offers the button to create the first one is onboarding.',
            'Loading states deserve the same attention. A skeleton shaped like the content that is coming reduces the perceived wait and prevents the layout jumping when data arrives. A centred spinner does neither.',
            'For errors, write messages that name the problem and the next action. "Something went wrong" tells the user only that you did not think about this case.',
          ],
          es: [
            'La primera pantalla que ve un usuario nuevo suele ser la vacía, y suele ser la pantalla menos diseñada del producto. Un estado vacío que dice "Aún no hay proyectos" desaprovecha el momento; uno que explica qué es un proyecto y ofrece el botón para crear el primero es onboarding.',
            'Los estados de carga merecen la misma atención. Un esqueleto con la forma del contenido que va a llegar reduce la espera percibida y evita que el layout dé un salto cuando llegan los datos. Un spinner centrado no hace ninguna de las dos cosas.',
            'Para los errores, escribe mensajes que nombren el problema y la siguiente acción. "Algo ha ido mal" solo le dice al usuario que no pensaste en este caso.',
          ],
          fr: [
            'Le premier écran que voit un nouvel utilisateur est généralement l’écran vide, et c’est généralement l’écran le moins conçu du produit. Un état vide qui dit "Aucun projet pour l’instant" gâche le moment ; un état qui explique ce qu’est un projet et propose le bouton pour créer le premier, c’est de l’onboarding.',
            'Les états de chargement méritent la même attention. Un squelette qui a la forme du contenu à venir réduit l’attente perçue et évite que la mise en page saute à l’arrivée des données. Un spinner centré ne fait ni l’un ni l’autre.',
            'Pour les erreurs, écrivez des messages qui nomment le problème et l’action suivante. "Une erreur est survenue" ne dit à l’utilisateur qu’une chose : que vous n’avez pas pensé à ce cas.',
          ],
        },
      },
      {
        heading: {
          en: 'Forms that fight the person filling them in',
          es: 'Formularios que pelean con quien los rellena',
          fr: 'Des formulaires qui se battent contre la personne qui les remplit',
        },
        paragraphs: {
          en: [
            'Placeholders used as labels disappear the moment someone types, so anyone who gets interrupted has to clear the field to remember what it wanted. Use a persistent label above the field and keep the placeholder for format examples, if at all.',
            'Validate on blur rather than on every keystroke, so the user is not told their email is invalid while they are still typing the third character. Put the error message directly under the field, in text, and say how to fix it.',
            'Cut the fields. Every optional field is a small tax on completion, and most forms have at least two that exist because someone once thought the data might be useful. Four fields is a good target for a contact form.',
          ],
          es: [
            'Los placeholders usados como etiquetas desaparecen en cuanto alguien escribe, así que cualquiera que se despiste tiene que vaciar el campo para recordar qué le pedía. Usa una etiqueta persistente encima del campo y reserva el placeholder para ejemplos de formato, si acaso.',
            'Valida al perder el foco en lugar de en cada pulsación, para no decirle al usuario que su correo no es válido mientras aún está escribiendo el tercer carácter. Pon el mensaje de error justo debajo del campo, en texto, y di cómo arreglarlo.',
            'Recorta los campos. Cada campo opcional es un pequeño impuesto sobre la finalización, y la mayoría de los formularios tienen al menos dos que existen porque alguien pensó una vez que el dato podría ser útil. Cuatro campos es un buen objetivo para un formulario de contacto.',
          ],
          fr: [
            'Les placeholders utilisés comme étiquettes disparaissent dès que l’on tape, si bien que quiconque est interrompu doit vider le champ pour se rappeler ce qu’il demandait. Utilisez une étiquette persistante au-dessus du champ et gardez le placeholder pour des exemples de format, si tant est qu’il y en ait.',
            'Validez à la perte du focus plutôt qu’à chaque frappe, pour ne pas annoncer à l’utilisateur que son e-mail est invalide alors qu’il en est encore au troisième caractère. Placez le message d’erreur directement sous le champ, en texte, et dites comment le corriger.',
            'Réduisez les champs. Chaque champ facultatif est une petite taxe sur l’achèvement, et la plupart des formulaires en ont au moins deux qui existent parce que quelqu’un a un jour pensé que la donnée pourrait servir. Quatre champs est un bon objectif pour un formulaire de contact.',
          ],
        },
      },
      {
        heading: {
          en: 'Touch targets and desktop-first thinking',
          es: 'Áreas táctiles y pensar primero en el escritorio',
          fr: 'Les zones tactiles et la pensée desktop d’abord',
        },
        paragraphs: {
          en: [
            'Icon-only buttons designed at 24px on a desktop mock become 24px tap targets on a phone. The practical minimum is around 44px of touch area, which you can achieve with padding without changing the visual size of the icon.',
            'Check the spacing between adjacent targets too: a row of icons 4px apart produces mis-taps regardless of individual size. And put primary actions within thumb reach on mobile rather than pinned to a top-right corner inherited from the desktop layout.',
          ],
          es: [
            'Los botones de solo icono diseñados a 24px en una maqueta de escritorio se convierten en áreas táctiles de 24px en un móvil. El mínimo práctico ronda los 44px de área táctil, que puedes conseguir con padding sin cambiar el tamaño visual del icono.',
            'Comprueba también el espacio entre áreas contiguas: una fila de iconos separados 4px provoca toques erróneos por mucho que sea el tamaño individual. Y coloca las acciones principales al alcance del pulgar en el móvil, en lugar de fijarlas en una esquina superior derecha heredada del layout de escritorio.',
          ],
          fr: [
            'Les boutons à icône seule conçus à 24px sur une maquette desktop deviennent des zones tactiles de 24px sur un téléphone. Le minimum pratique tourne autour de 44px de surface tactile, que vous pouvez obtenir avec du padding sans changer la taille visuelle de l’icône.',
            'Vérifiez aussi l’espace entre les zones adjacentes : une rangée d’icônes espacées de 4px provoque des touchers ratés quelle que soit la taille individuelle. Et placez les actions principales à portée du pouce sur mobile, plutôt que de les épingler dans un coin en haut à droite hérité de la mise en page desktop.',
          ],
        },
      },
      {
        heading: {
          en: 'Designing with content that will never exist',
          es: 'Diseñar con contenido que nunca existirá',
          fr: 'Concevoir avec du contenu qui n’existera jamais',
        },
        paragraphs: {
          en: [
            'Lorem ipsum has a convenient, uniform word length. Real product data does not. Layouts built on placeholder text break on the customer whose company name is forty characters long, the invoice total with two extra digits, and the notification that arrives with no body text at all.',
            'Use realistic content from the start, then stress test it: the longest plausible string, the shortest, the empty case. If the design only holds at the ideal length, it is a picture of an interface rather than an interface.',
          ],
          es: [
            'El lorem ipsum tiene una longitud de palabra cómoda y uniforme. Los datos reales de un producto no. Las maquetaciones construidas sobre texto de relleno se rompen con el cliente cuyo nombre de empresa tiene cuarenta caracteres, con el total de factura que trae dos dígitos de más, y con la notificación que llega sin ningún texto de cuerpo.',
            'Usa contenido realista desde el principio y luego somételo a prueba: la cadena más larga plausible, la más corta, el caso vacío. Si el diseño solo aguanta con la longitud ideal, es una foto de una interfaz y no una interfaz.',
          ],
          fr: [
            'Le lorem ipsum a une longueur de mot commode et uniforme. Les vraies données d’un produit, non. Les mises en page bâties sur du faux texte cassent avec le client dont le nom d’entreprise fait quarante caractères, avec le total de facture qui compte deux chiffres de trop, et avec la notification qui arrive sans aucun texte de corps.',
            'Utilisez du contenu réaliste dès le départ, puis mettez-le à l’épreuve : la chaîne la plus longue plausible, la plus courte, le cas vide. Si le design ne tient qu’à la longueur idéale, c’est une image d’interface et non une interface.',
          ],
        },
      },
      {
        heading: {
          en: 'No visible focus and no keyboard path',
          es: 'Sin foco visible y sin recorrido por teclado',
          fr: 'Pas de focus visible et pas de parcours au clavier',
        },
        paragraphs: {
          en: [
            'Custom components frequently ship with the browser focus ring removed and nothing put in its place, which makes the product unusable by keyboard and invisible to anyone navigating without a mouse. Design a focus style that matches the visual language instead of deleting the default.',
            'Then tab through a key flow yourself. You will find the modal that does not trap focus, the dropdown that cannot be opened without a click, and the order in which elements receive focus jumping around the screen. These are twenty-minute fixes at design time and rewrites after launch.',
          ],
          es: [
            'Los componentes personalizados salen a menudo con el anillo de foco del navegador eliminado y nada en su lugar, lo que hace que el producto sea inutilizable con teclado e invisible para cualquiera que navegue sin ratón. Diseña un estilo de foco que encaje con el lenguaje visual en lugar de borrar el valor por defecto.',
            'Luego recorre tú mismo un flujo clave con el tabulador. Encontrarás el modal que no atrapa el foco, el desplegable que no se puede abrir sin un clic, y el orden en que los elementos reciben el foco dando saltos por la pantalla. Son arreglos de veinte minutos en la fase de diseño y reescrituras después del lanzamiento.',
          ],
          fr: [
            'Les composants personnalisés sont fréquemment livrés avec l’anneau de focus du navigateur supprimé et rien à la place, ce qui rend le produit inutilisable au clavier et invisible pour quiconque navigue sans souris. Concevez un style de focus qui s’accorde au langage visuel au lieu de supprimer celui par défaut.',
            'Ensuite, parcourez vous-même un flux clé à la touche Tab. Vous trouverez la modale qui ne piège pas le focus, le menu déroulant qu’on ne peut pas ouvrir sans un clic, et l’ordre dans lequel les éléments reçoivent le focus sautant partout sur l’écran. Ce sont des correctifs de vingt minutes à la conception et des réécritures après le lancement.',
          ],
        },
      },
    ],
    gallery: [],
    relatedProjects: ['expenza', 'crave', 'cleaning-services-app'],
    relatedServices: ['ux-research-wireframing', 'web-ui-design'],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}
