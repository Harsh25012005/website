import type { ImageAsset, Localized, Project } from './types'

/**
 * Case studies.
 *
 * ⚠️  **Every project here is self-initiated concept work.** That is stated on
 * each page in the `Type` meta row, and it constrains the copy: there is no
 * client, no brief someone else wrote, no launch and therefore no result. So
 * nothing below claims a conversion lift, a research finding or a stakeholder.
 * Concept work borrowing the language of client work is obvious to anyone
 * reading carefully, and a prospect who catches it stops believing the rest of
 * the site.
 *
 * What ranks here was never the fabricated metric anyway — it is the design
 * reasoning, which is real. Each `discipline` is written to carry the query
 * ("food delivery app UI/UX"), because `work/[slug]/page.tsx` builds the page
 * title as `{title}: {discipline} case study` and splits the same string into
 * keywords.
 *
 * Two rules when adding to this file:
 *
 * 1. **Only describe screens that exist in the gallery.** Prose and alt text
 *    are checked against the images; describing a flow with no screenshot is
 *    the same mistake as inventing a metric, just harder to spot.
 *
 * 2. **`aspect` must match the file's real ratio.** Gallery frames are
 *    `object-cover`, so a mismatch silently crops the screen.
 */

/**
 * Ratios of the source files, so `object-cover` never crops a screen.
 *
 * All three phone ratios are close to 1:1.8 because every app screenshot now
 * carries the same surround — see `scripts/frame-app-screens.mjs`. They are
 * not identical because the underlying screen exports differ in size, and
 * padding is applied as a ratio rather than a fixed pixel count.
 */
const PHONE = 'aspect-[848/1498]'
const PHONE_TALL = 'aspect-[850/1552]'
const PHONE_SLIM = 'aspect-[818/1457]'
const EXPENZA_PHONE = 'aspect-[1133/2049]'
const EXPENZA_WIDE = 'aspect-[2400/1400]'
const SQUARE = 'aspect-square'
const LANDSCAPE = 'aspect-[4/3]'

function shot(slug: string, file: string, alt: Localized<string>): ImageAsset {
  return { src: `/images/work/${slug}/${file}.png`, alt }
}

export const projects: Project[] = [
  {
    slug: 'expenza',
    title: { en: 'Expenza', es: 'Expenza', fr: 'Expenza' },
    discipline: {
      en: 'Gesture-driven expense tracker app UI/UX',
      es: 'Diseño UI/UX de app móvil de control de gastos por gestos',
      fr: "UI/UX d'application mobile de suivi des dépenses par gestes",
    },
    year: '2026',
    tags: ['uxui'],
    summary: {
      en: 'An editorial, gesture-driven mobile expense tracker engineered around a signature Shake-to-Add physical interaction, warm neutral minimalism, and a 100% local-first data architecture.',
      es: 'Un gestor de gastos móvil editorial y guiado por gestos, diseñado en torno a la interacción física Shake-to-Add, un minimalismo neutro y cálido, y una arquitectura 100% local en dispositivo.',
      fr: "Un suivi des dépenses mobile éditorial et gestuel, conçu autour de l'interaction physique Shake-to-Add, d'un minimalisme neutre chaleureux et d'une architecture 100% locale sur appareil.",
    },
    thumbnail: shot('expenza', 'cover', {
      en: 'Expenza mobile expense tracker app dashboard and interaction screens',
      es: 'Dashboard y pantallas de interacción de la app móvil de gastos Expenza',
      fr: "Tableau de bord et écrans d'interaction de l'application de dépenses Expenza",
    }),
    hero: shot('expenza', 'cover', {
      en: 'Expenza mobile expense tracker: Home dashboard, Shake-to-Add quick modal, and behavioral analytics overview',
      es: 'App móvil Expenza: Dashboard principal, modal rápido Shake-to-Add y resumen de analítica de comportamiento',
      fr: "Application mobile Expenza\u00a0: tableau de bord d'accueil, modal rapide Shake-to-Add et aperçu analytique comportemental",
    }),
    meta: [
      {
        label: { en: 'Type', es: 'Tipo', fr: 'Type' },
        value: {
          en: 'Product design & working mobile application',
          es: 'Diseño de producto y app móvil en producción',
          fr: 'Design de produit et application mobile en production',
        },
      },
      {
        label: { en: 'Role', es: 'Rol', fr: 'Rôle' },
        value: {
          en: 'Product designer & mobile architect',
          es: 'Diseñador de producto y arquitecto móvil',
          fr: 'Designer de produit et architecte mobile',
        },
      },
      {
        label: { en: 'Platform', es: 'Plataforma', fr: 'Plateforme' },
        value: {
          en: 'iOS and Android (React Native & Expo)',
          es: 'iOS y Android (React Native y Expo)',
          fr: 'iOS et Android (React Native et Expo)',
        },
      },
      {
        label: { en: 'Tools', es: 'Herramientas', fr: 'Outils' },
        value: {
          en: 'Figma, React Native, Sharp',
          es: 'Figma, React Native, Sharp',
          fr: 'Figma, React Native, Sharp',
        },
      },
    ],
    sections: [
      {
        heading: {
          en: 'The friction problem in personal finance',
          es: 'El problema de la fricción en las finanzas personales',
          fr: 'Le problème de la friction dans les finances personnelles',
        },
        paragraphs: {
          en: [
            'Most personal finance applications fail not from a lack of features, but because of excessive interaction friction. When walking away from a coffee counter or grocery checkout, users have less than five seconds of active attention before pocketing their phone. Traditional capture flows requiring multi-level submenus, authentication walls, and cloud sync result in deferred tracking, inaccurate totals, and eventual app abandonment.',
            'Expenza is built from the opposite principle: sub-three-second capture. By replacing UI navigation with physical intent, the app bridges the critical gap between immediate transaction capture and meaningful long-term financial awareness.',
          ],
          es: [
            'La mayoría de las aplicaciones de finanzas personales fallan no por falta de funciones, sino por un exceso de fricción en la interacción. Al salir de una cafetería o de una tienda, los usuarios disponen de menos de cinco segundos de atención antes de guardar el teléfono. Los flujos tradicionales con submenús profundos, pantallas de acceso y sincronización en la nube provocan registros olvidados y el abandono de la app.',
            'Expenza parte del principio opuesto: registro en menos de tres segundos. Al sustituir la navegación por intención física, la app une la captura inmediata del gasto con una comprensión financiera duradera.',
          ],
          fr: [
            'La plupart des applications de finances personnelles échouent non par manque de fonctionnalités, mais en raison d\'une friction d\'interaction excessive. En quittant un café ou une caisse de supermarché, les utilisateurs ont moins de cinq secondes d\'attention avant de ranger leur téléphone. Les flux traditionnels exigeant des sous-menus complexes et des synchronisations entraînent l\'abandon rapide de l\'application.',
            'Expenza est construite sur le principe inverse\u00a0: une saisie en moins de trois secondes. En remplaçant la navigation d\'interface par une intention physique, l\'application réconcilie la saisie instantanée et la clarté financière à long terme.',
          ],
        },
      },
      {
        heading: {
          en: 'Physical intent over UI navigation: Shake-to-Add',
          es: 'Intención física sobre navegación: Shake-to-Add',
          fr: 'L\'intention physique plutôt que la navigation\u00a0: Shake-to-Add',
        },
        paragraphs: {
          en: [
            'Rather than hunting for a floating action button or drilling into a menu, users simply flick their wrist. A custom accelerometer filter computes coordinate deltas across three axes (Δ > 3.0G) paired with a 1,500ms debounce cooldown to eliminate pocket false positives while preserving instant responsiveness.',
            'The resulting modal auto-focuses the input, defaults to recent context, and presents quick-increment chips (+10, +50, +100, +200, +500) so round transactions can be logged in a single tap without invoking the keyboard. When minimized, a native foreground service triggers a tactile haptic pulse and delivers a direct deep-link notification.',
          ],
          es: [
            'En lugar de buscar un botón flotante o navegar por un menú, los usuarios simplemente realizan un leve movimiento de muñeca. Un filtro de acelerómetro calcula deltas en tres ejes (Δ > 3.0G) junto a un enfriamiento de 1.500 ms que elimina falsos positivos en el bolsillo manteniendo una respuesta inmediata.',
            'El modal resultante enfoca el campo de texto, preselecciona el contexto reciente y ofrece pastillas de incremento rápido (+10, +50, +100, +200, +500) para registrar cifras redondas con un solo toque sin abrir el teclado. Al estar en segundo plano, un servicio nativo emite una vibración háptica y una notificación con enlace directo.',
          ],
          fr: [
            'Plutôt que de chercher un bouton flottant ou de parcourir un menu, l\'utilisateur effectue un simple mouvement du poignet. Un filtre d\'accéléromètre personnalisé calcule les variations sur trois axes (Δ > 3.0G) couplé à un délai de temporisation de 1\u00a0500\u00a0ms pour éliminer les faux positifs en poche tout en garantissant une réactivité instantanée.',
            'La fenêtre modale active immédiatement la saisie, pré-sélectionne le contexte récent et propose des puces d\'incrémentation rapide (+10, +50, +100, +200, +500) pour consigner les montants ronds en un geste sans clavier. En arrière-plan, un service natif déclenche une impulsion haptique et une notification avec lien direct.',
          ],
        },
      },
      {
        heading: {
          en: 'Warm editorial clarity without drop shadows',
          es: 'Claridad editorial cálida sin sombras paralelas',
          fr: 'Clarté éditoriale chaleureuse sans ombres portées',
        },
        paragraphs: {
          en: [
            'Expenza steps away from dark neon fintech cliches toward an editorial light visual system. Built on warm neutral backgrounds (#F7F7F5), crisp white cards (#FFFFFF), and hairline borders (#E7E7E4), the interface adheres to a strict zero-drop-shadow rule. Tactility comes from precise spacing, border hierarchy, and physical haptics rather than artificial blur layers.',
            'Typography is set in Plus Jakarta Sans for crisp numerical legibility. Category tokens use high-contrast chromatic pairings—warm amber for Food, cobalt blue for Transport, magenta for Shopping, and royal purple for Bills—giving visual weight to distribution without distracting from core totals.',
          ],
          es: [
            'Expenza se aleja de los clichés fintech oscuros con luces de neón hacia un sistema visual editorial luminoso. Basado en fondos neutros cálidos (#F7F7F5), tarjetas blancas nítidas (#FFFFFF) y bordes finos (#E7E7E4), la interfaz sigue una regla estricta de cero sombras paralelas. La sensación táctil proviene del espaciado preciso, la jerarquía de bordes y la respuesta háptica.',
            'La tipografía utiliza Plus Jakarta Sans para una legibilidad numérica óptima. Los tokens de categoría emplean combinaciones cromáticas de alto contraste (ámbar para Comida, azul cobalto para Transporte, magenta para Compras y púrpura para Facturas), aportando peso visual a la distribución sin restar protagonismo a los totales.',
          ],
          fr: [
            'Expenza s\'éloigne des clichés fintech sombres et néon au profit d\'un univers visuel éditorial clair. Conçue sur des fonds neutres chauds (#F7F7F5), des cartes blanches nettes (#FFFFFF) et des bordures subtiles (#E7E7E4), l\'interface applique une règle stricte de zéro ombre portée. La sensation tactile naît d\'un espacement rigoureux, d\'une hiérarchie de contours et de retours haptiques.',
            'La typographie est composée en Plus Jakarta Sans pour une lisibilité parfaite des chiffres. Les tokens de catégories utilisent des accords chromatiques contrastés\u00a0: ambre pour la Nourriture, bleu cobalt pour les Transports, magenta pour le Shopping et violet pour les Factures.',
          ],
        },
      },
      {
        heading: {
          en: 'Behavioral reflection: Money Replay & Money Mood',
          es: 'Reflexión conductual: Money Replay y Money Mood',
          fr: 'Réflexion comportementale\u00a0: Money Replay et Money Mood',
        },
        paragraphs: {
          en: [
            'Recording expenses is only half the battle; the interface must also help users understand their spending rhythm. Expenza replaces passive chart dumps with deterministic behavioral insights: the "Money Mood" velocity badge evaluates daily spending speed against the calendar timeline, while consistency streaks reward no-spend and under-budget days.',
            'At the end of each month, an interactive 7-stage Money Replay story transforms monthly totals into an engaging visual narrative covering top spending categories, peak spending days, and budget health in plain English.',
          ],
          es: [
            'Registrar gastos es solo la mitad del objetivo; la interfaz debe ayudar al usuario a entender su ritmo de consumo. Expenza sustituye los gráficos pasivos por análisis conductuales deterministas: la insignia «Money Mood» evalúa la velocidad de gasto frente al calendario mensual, mientras que las rachas de consistencia recompensan los días sin gasto y bajo presupuesto.',
            'Al final de cada mes, una historia interactiva Money Replay de 7 etapas transforma las cifras mensuales en una narrativa visual atractiva que resume las principales categorías, los días de mayor gasto y la salud presupuestaria en lenguaje claro.',
          ],
          fr: [
            'Enregistrer les dépenses n\'est que la moitié du chemin\u00a0; l\'interface doit également éclairer le rythme des dépenses. Expenza remplace les graphiques passifs par des indicateurs comportementaux\u00a0: le badge «\u00a0Money Mood\u00a0» évalue la cadence de dépense par rapport au calendrier, tandis que les séries de régularité valorisent les journées sans dépense et le respect du budget.',
            'À la fin de chaque mois, une story interactive Money Replay en 7 étapes transforme les chiffres du mois en un récit visuel percutant, détaillant les postes majeurs et la santé financière en langage naturel.',
          ],
        },
      },
      {
        heading: {
          en: 'Local-first sovereignty & native export engine',
          es: 'Soberanía local y motor de exportación nativo',
          fr: 'Souveraineté locale et moteur d\'exportation natif',
        },
        paragraphs: {
          en: [
            'Privacy is absolute: 100% of financial data is stored on-device via async storage with zero external telemetry, tracking IDs, or required accounts. Users own their data entirely.',
            'To ensure complete portability, Expenza includes a built-in multi-format export engine. Users can generate professionally styled Excel spreadsheets (.xlsx) with header accents and formulas, formatted A4 PDF financial statements with metric cards, or structured JSON backups for external developer tools.',
          ],
          es: [
            'La privacidad es absoluta: el 100% de los datos financieros se almacena en el dispositivo mediante almacenamiento local seguro sin telemetría externa, identificadores de rastreo ni cuentas obligatorias. El usuario es el único dueño de su información.',
            'Para garantizar la portabilidad total, Expenza incorpora un motor de exportación multiformato. Los usuarios pueden generar hojas de cálculo de Excel estilizadas (.xlsx) con fórmulas y colores contables, estados financieros en PDF formato A4 listos para imprimir, o copias de seguridad en JSON estructurado.',
          ],
          fr: [
            'La confidentialité est totale\u00a0: 100% des données financières restent sur l\'appareil via un stockage local sécurisé, sans télémétrie externe, sans traceurs et sans obligation de créer un compte. L\'utilisateur reste l\'unique propriétaire de ses données.',
            'Pour assurer une portabilité complète, Expenza intègre un moteur d\'export multi-format. Les utilisateurs peuvent générer des classeurs Excel stylisés (.xlsx) avec formules, des relevés PDF au format A4 prêts à l\'impression ou des sauvegardes complètes en JSON structuré.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: shot('expenza', 'home-default', {
          en: 'Expenza home dashboard showing hero balance, budget progress bar, where did it go breakdown, and spending streaks',
          es: 'Dashboard principal de Expenza con balance, barra de presupuesto, desglose de categorías y rachas',
          fr: "Tableau de bord Expenza affichant le solde, la progression du budget, la répartition des dépenses et les séries",
        }),
        span: 'quarter',
        aspect: EXPENZA_PHONE,
      },
      {
        image: shot('expenza', 'add-expense', {
          en: 'Quick expense modal with 3x3 category grid and one-tap quick-increment amount pills',
          es: 'Modal rápido de añadir gasto con cuadrícula de categorías 3x3 y pastillas de incremento de importe',
          fr: "Modal de saisie rapide avec grille de catégories 3x3 et puces d'incrémentation rapide",
        }),
        span: 'quarter',
        aspect: EXPENZA_PHONE,
      },
      {
        image: shot('expenza', 'shake-sensitivity', {
          en: 'Shake-to-Add sensitivity configuration screen with threshold calibration and permission badges',
          es: 'Pantalla de configuración de sensibilidad Shake-to-Add con calibración de umbrales y permisos',
          fr: 'Écran de configuration de la sensibilité Shake-to-Add avec calibrage des seuils et autorisations',
        }),
        span: 'quarter',
        aspect: EXPENZA_PHONE,
      },
      {
        image: shot('expenza', 'expenses-list', {
          en: 'Chronological transaction list with date sectioning, category filter pills, and live search',
          es: 'Lista cronológica de transacciones agrupada por fechas con filtros de categoría y búsqueda en tiempo real',
          fr: 'Liste chronologique des transactions groupée par dates avec filtres de catégories et recherche',
        }),
        span: 'quarter',
        aspect: EXPENZA_PHONE,
      },
      {
        image: shot('expenza', 'expenses-calendar', {
          en: 'Interactive calendar view with spending indicator dots and day transaction inspection card',
          es: 'Vista interactiva de calendario con puntos de gasto y tarjeta de inspección del día seleccionado',
          fr: "Vue calendrier interactive avec indicateurs de dépenses et carte d'inspection détaillée du jour",
        }),
        span: 'quarter',
        aspect: EXPENZA_PHONE,
      },
      {
        image: shot('expenza', 'insights-overview', {
          en: 'Behavioral insights dashboard featuring Money Mood velocity, monthly spending charts, and category breakdown',
          es: 'Dashboard de analítica conductual con velocidad Money Mood, gráfico de gasto mensual y desglose por categorías',
          fr: "Tableau de bord d'analytique comportementale avec vélocité Money Mood, graphiques mensuels et répartition",
        }),
        span: 'quarter',
        aspect: EXPENZA_PHONE,
      },
      {
        image: shot('expenza', 'insights-breakdown', {
          en: 'Category breakdown and spending distribution widget with proportional segmented bars',
          es: 'Desglose de categorías y distribución de gastos con barras segmentadas proporcionales',
          fr: 'Répartition par catégories et distribution des dépenses avec barres segmentées proportionnelles',
        }),
        span: 'quarter',
        aspect: EXPENZA_PHONE,
      },
      {
        image: shot('expenza', 'money-replay', {
          en: 'Money Replay story screen providing an Instagram-style monthly financial reflection narrative',
          es: 'Pantalla de historia Money Replay con resumen narrativo mensual estilo redes sociales',
          fr: 'Écran de story Money Replay offrant un bilan financier mensuel immersif au format story',
        }),
        span: 'quarter',
        aspect: EXPENZA_PHONE,
      },
      {
        image: shot('expenza', 'settings-budget', {
          en: 'Monthly budget configuration with numerical input and quick preset chips',
          es: 'Configuración de presupuesto mensual con entrada numérica y opciones rápidas predefinidas',
          fr: 'Configuration du budget mensuel avec saisie numérique et puces de montants prédéfinis',
        }),
        span: 'quarter',
        aspect: EXPENZA_PHONE,
      },
      {
        image: shot('expenza', 'systems-overview', {
          en: 'Expenza mobile design system, money replay story card, and budget calibration showcase',
          es: 'Sistema de diseño móvil de Expenza, historia Money Replay y calibración de presupuesto',
          fr: 'Système de design mobile Expenza, carte de story Money Replay et calibrage budgétaire',
        }),
        span: 'half',
        aspect: EXPENZA_WIDE,
      },
      {
        image: shot('expenza', 'export-suite', {
          en: 'Multi-format export engine generating styled Excel workbooks and formatted PDF statements',
          es: 'Motor de exportación multiformato con hojas de cálculo Excel estilizadas y estados en PDF',
          fr: "Moteur d'exportation multiformat générant des feuilles Excel stylisées et des relevés PDF",
        }),
        span: 'half',
        aspect: EXPENZA_WIDE,
      },
      {
        image: shot('expenza', 'design-system', {
          en: 'Expenza tokenized design system: typography hierarchy, semantic category colors, and card layouts',
          es: 'Sistema de diseño tokenizado de Expenza: jerarquía tipográfica, colores semánticos y tarjetas',
          fr: 'Système de design tokenisé Expenza\u00a0: hiérarchie typographique, couleurs sémantiques et composants',
        }),
        span: 'quarter',
        aspect: EXPENZA_PHONE,
      },
    ],
    outcome: {
      heading: { en: 'What it produced', es: 'Lo que produjo', fr: 'Ce que cela a produit' },
      paragraphs: {
        en: [
          'A complete, production-tested mobile personal finance application that reduces everyday capture to a sub-three-second physical gesture while maintaining an editorial light aesthetic and 100% on-device data sovereignty.',
          'What it demonstrates for client engagements is the end-to-end craft: translating physical hardware sensor APIs into delightful micro-interactions, designing rigorous tokenized UI systems that communicate without relying on drop shadows, and delivering pro-tier data exports natively on mobile.',
        ],
        es: [
          'Una aplicación móvil de finanzas personales completa y lista para producción que reduce el registro diario a un gesto físico de menos de tres segundos, manteniendo una estética editorial clara y un control de datos 100% en dispositivo.',
          'Lo que demuestra para proyectos con clientes es el oficio integral: transformar sensores de hardware en microinteracciones gratificantes, diseñar sistemas de interfaz rigurosos sin sombras superfluas y crear motores de exportación profesionales en móvil.',
        ],
        fr: [
          'Une application mobile de finances personnelles complète et éprouvée qui réduit la saisie quotidienne à un geste physique de moins de trois secondes, tout en préservant une esthétique éditoriale claire et la souveraineté totale des données sur l\'appareil.',
          'Ce qu\'elle démontre pour les projets clients est un savoir-faire de bout en bout\u00a0: exploiter les capteurs matériels pour créer des micro-interactions fluides, concevoir des design systems rigoureux sans artifices visuels et intégrer des exports de données professionnels.',
        ],
      },
    },
    relatedArticles: [
      'ui-ux-design-trends-2026',
      'design-system-in-figma',
      'ui-design-mistakes',
      'figma-to-react-handoff',
    ],
  },
  {
    slug: 'zenith',
    title: { en: 'Zenith', es: 'Zenith', fr: 'Zenith' },
    discipline: {
      en: 'Task management app UI/UX',
      es: 'Diseño UI/UX de app de gestión de tareas',
      fr: "UI/UX d'application de gestion de tâches",
    },
    year: '2025–2026',
    tags: ['uxui'],
    summary: {
      en: 'A task management app concept designed in full light and dark themes from one token set, with progress, priority and status readable at a glance without colour doing all the work.',
      es: 'Concepto de app de gestión de tareas diseñado en temas claro y oscuro a partir de un mismo set de tokens, con progreso, prioridad y estado legibles de un vistazo sin depender solo del color.',
      fr: "Concept d'application de gestion de tâches conçu en thèmes clair et sombre à partir d'un seul jeu de tokens, avec progression, priorité et statut lisibles d'un coup d'œil sans reposer uniquement sur la couleur.",
    },
    thumbnail: shot('zenith', 'cover', {
      en: 'Zenith task management app: dashboard, task list and task detail screens',
      es: 'App de gestión de tareas Zenith: pantallas de dashboard, lista de tareas y detalle de tarea',
      fr: "Application de gestion de tâches Zenith\u00a0: écrans de tableau de bord, liste de tâches et détail de tâche",
    }),
    hero: shot('zenith', 'cover', {
      en: 'Three Zenith app screens showing the dashboard, task list and task detail',
      es: 'Tres pantallas de la app Zenith mostrando el dashboard, lista de tareas y detalle de tarea',
      fr: "Trois écrans de l'application Zenith montrant le tableau de bord, la liste de tâches et le détail de tâche",
    }),
    meta: [
      {
        label: { en: 'Type', es: 'Tipo', fr: 'Type' },
        value: {
          en: 'Concept project, self-initiated',
          es: 'Proyecto conceptual, iniciativa propia',
          fr: 'Projet conceptuel, initiative personnelle',
        },
      },
      {
        label: { en: 'Role', es: 'Rol', fr: 'Rôle' },
        value: {
          en: 'UX, UI and design system',
          es: 'UX, UI y sistema de diseño',
          fr: 'UX, UI et design system',
        },
      },
      {
        label: { en: 'Platform', es: 'Plataforma', fr: 'Plateforme' },
        value: { en: 'iOS and Android', es: 'iOS y Android', fr: 'iOS et Android' },
      },
      {
        label: { en: 'Tools', es: 'Herramientas', fr: 'Outils' },
        value: { en: 'Figma', es: 'Figma', fr: 'Figma' },
      },
    ],
    sections: [
      {
        heading: {
          en: 'The problem with task apps',
          es: 'El problema de las apps de tareas',
          fr: 'Le problème des apps de gestion de tâches',
        },
        paragraphs: {
          en: [
            'Most task managers show you everything you have not done. Open one on a bad week and the first thing it communicates is failure: a wall of overdue items with no sense of what is actually moving.',
            'Zenith starts from the opposite position. The dashboard opens on four counts (total, completed, in progress, overdue), so the state of the week is one glance rather than a scroll, and "completed" carries the same visual weight as "overdue" instead of being buried under it.',
          ],
          es: [
            'La mayoría de los gestores de tareas te muestran todo lo que no has hecho. Ábrelos en una mala semana y lo primero que transmiten es fracaso: un muro de elementos atrasados sin ninguna noción de lo que realmente avanza.',
            'Zenith parte de la posición opuesta. El dashboard abre con cuatro contadores (total, completadas, en progreso, atrasadas), de modo que el estado de la semana se lee de un vistazo en vez de con un scroll, y «completadas» tiene el mismo peso visual que «atrasadas» en lugar de quedar oculta.',
          ],
          fr: [
            'La plupart des gestionnaires de tâches affichent tout ce que vous n\'avez pas fait. Ouvrez-en un lors d\'une mauvaise semaine et la première chose qu\'il communique est l\'échec\u00a0: un mur d\'éléments en retard sans aucune idée de ce qui progresse réellement.',
            'Zenith part du postulat inverse. Le tableau de bord s\'ouvre sur quatre compteurs (total, terminées, en cours, en retard), de sorte que l\'état de la semaine se lit d\'un coup d\'œil plutôt qu\'en défilant, et «\u00a0terminées\u00a0» a le même poids visuel que «\u00a0en retard\u00a0» au lieu d\'être masqué.',
          ],
        },
      },
      {
        heading: {
          en: 'Progress you can read without reading',
          es: 'Progreso que se lee sin leer',
          fr: 'La progression lisible sans même lire',
        },
        paragraphs: {
          en: [
            'Every task card carries a segmented progress bar and a count like 06/14. The segments matter: a continuous bar at 43% is a number you have to interpret, while four filled blocks out of nine is a shape you recognise before you have read anything.',
            'Priority is a labelled dropdown rather than a colour alone. Colour still reinforces it, but the word "High" carries the meaning: a red dot is invisible to a red-green colourblind user and ambiguous to everyone else.',
            'The task detail screen extends the same idea. Priority, status and due date are stacked as labelled rows, and subtasks are a checklist with a visible 2/4 count, so the next action is always a specific thing rather than a general obligation.',
          ],
          es: [
            'Cada tarjeta de tarea tiene una barra de progreso segmentada y un conteo como 06/14. Los segmentos importan: una barra continua al 43 % es un número que hay que interpretar; cuatro bloques rellenos de nueve es una forma que reconoces antes de haber leído nada.',
            'La prioridad es un menú desplegable etiquetado, no solo un color. El color la refuerza, pero la palabra «Alta» porta el significado: un punto rojo es invisible para un usuario daltónico rojo-verde y ambiguo para todos los demás.',
            'La pantalla de detalle de tarea amplía la misma idea. Prioridad, estado y fecha límite se apilan como filas etiquetadas, y las subtareas son una checklist con un conteo visible 2/4, de modo que la siguiente acción es siempre algo concreto y no una obligación genérica.',
          ],
          fr: [
            'Chaque carte de tâche comporte une barre de progression segmentée et un compteur du type 06/14. Les segments comptent\u00a0: une barre continue à 43\u00a0% est un chiffre à interpréter, tandis que quatre blocs pleins sur neuf forment une forme que l\'on reconnaît avant même de lire.',
            'La priorité est un menu déroulant libellé, pas un simple code couleur. La couleur la renforce, mais le mot «\u00a0Haute\u00a0» porte le sens\u00a0: un point rouge est invisible pour un daltonien rouge-vert et ambigu pour tout le monde.',
            'L\'écran de détail de tâche prolonge la même idée. Priorité, statut et date d\'échéance sont empilés en lignes libellées, et les sous-tâches forment une checklist avec un compteur visible 2/4, de sorte que la prochaine action est toujours concrète plutôt qu\'une obligation vague.',
          ],
        },
      },
      {
        heading: {
          en: 'Two themes, one token set',
          es: 'Dos temas, un solo set de tokens',
          fr: 'Deux thèmes, un seul jeu de tokens',
        },
        paragraphs: {
          en: [
            'Light and dark are both designed here, not one designed and the other inverted. Every screen exists in both, which is the only way to find the places an inverted palette breaks: the pale progress fill that vanishes on white, the card surface that stops separating from the background once both are dark.',
            'Both themes read from one set of colour, type and spacing tokens, so a change to the scale moves both at once. That is the difference between shipping a dark mode and maintaining one.',
            'It also kept the screen count honest. Designing search, notifications, calendar, profile and task creation twice is only sustainable if the components are shared, which turns out to be a useful limit on how many one-off components a design is allowed.',
          ],
          es: [
            'Claro y oscuro están ambos diseñados aquí, no uno diseñado y el otro invertido. Cada pantalla existe en ambos, que es la única forma de detectar dónde una paleta invertida falla: el relleno de progreso pálido que desaparece sobre blanco, la superficie de la tarjeta que deja de diferenciarse del fondo cuando ambos son oscuros.',
            'Ambos temas leen de un mismo conjunto de tokens de color, tipografía y espaciado, así que un cambio en la escala mueve los dos a la vez. Esa es la diferencia entre lanzar un modo oscuro y mantenerlo.',
            'Esto también mantuvo honesto el recuento de pantallas. Diseñar búsqueda, notificaciones, calendario, perfil y creación de tareas dos veces solo es sostenible si los componentes son compartidos, lo cual resulta un límite útil sobre cuántos componentes únicos puede permitirse un diseño.',
          ],
          fr: [
            'Les thèmes clair et sombre sont tous deux conçus ici, pas l\'un conçu et l\'autre inversé. Chaque écran existe dans les deux, ce qui est le seul moyen de repérer les endroits où une palette inversée casse\u00a0: le remplissage de progression pâle qui disparaît sur blanc, la surface de carte qui ne se distingue plus du fond lorsque les deux sont sombres.',
            'Les deux thèmes lisent un même ensemble de tokens couleur, typographie et espacement, si bien qu\'un changement dans l\'échelle s\'applique aux deux simultanément. C\'est la différence entre livrer un mode sombre et le maintenir.',
            'Cela a aussi rendu le décompte des écrans honnête. Concevoir recherche, notifications, calendrier, profil et création de tâche deux fois n\'est viable que si les composants sont partagés, ce qui s\'avère une limite utile au nombre de composants sur mesure qu\'un design peut se permettre.',
          ],
        },
      },
      {
        heading: {
          en: 'The screens nobody demos',
          es: 'Las pantallas que nadie presenta',
          fr: 'Les écrans que personne ne montre',
        },
        paragraphs: {
          en: [
            'Beyond the three hero screens, the concept covers creating a task and a project, the calendar view, search in both themes, notifications and profile settings. These are the screens a walkthrough skips and a real user lives in.',
            'Designing them is also what tests the system. A component library looks complete until you try to lay out a settings page with it, which is usually where the gaps in a token set surface.',
          ],
          es: [
            'Más allá de las tres pantallas principales, el concepto cubre la creación de una tarea y un proyecto, la vista de calendario, la búsqueda en ambos temas, notificaciones y ajustes de perfil. Son las pantallas que una demo omite y en las que un usuario real vive.',
            'Diseñarlas es también lo que pone a prueba el sistema. Una librería de componentes parece completa hasta que intentas maquetar una página de ajustes con ella, que es normalmente donde afloran los huecos de un set de tokens.',
          ],
          fr: [
            'Au-delà des trois écrans principaux, le concept couvre la création d\'une tâche et d\'un projet, la vue calendrier, la recherche dans les deux thèmes, les notifications et les paramètres de profil. Ce sont les écrans qu\'une démo saute et dans lesquels un vrai utilisateur passe son temps.',
            'Les concevoir est aussi ce qui teste le système. Une bibliothèque de composants semble complète jusqu\'à ce qu\'on essaie de mettre en page un écran de paramètres, ce qui est généralement là où les lacunes d\'un jeu de tokens se révèlent.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: shot('zenith', 'task-list-dark', {
          en: 'Zenith task list in dark theme with filter chips and segmented progress bars',
          es: 'Lista de tareas de Zenith en tema oscuro con chips de filtro y barras de progreso segmentadas',
          fr: 'Liste de tâches Zenith en thème sombre avec filtres et barres de progression segmentées',
        }),
        span: 'quarter',
        aspect: PHONE,
      },
      {
        image: shot('zenith', 'task-detail', {
          en: 'Zenith task detail screen with priority, status, due date and a subtask checklist',
          es: 'Pantalla de detalle de tarea de Zenith con prioridad, estado, fecha de vencimiento y lista de subtareas',
          fr: 'Écran de détail de tâche Zenith avec priorité, statut, date d\'échéance et checklist de sous-tâches',
        }),
        span: 'quarter',
        aspect: PHONE,
      },
      {
        image: shot('zenith', 'create-task', {
          en: 'Zenith create-new-task screen',
          es: 'Pantalla de creación de nueva tarea en Zenith',
          fr: 'Écran de création d\'une nouvelle tâche sur Zenith',
        }),
        span: 'quarter',
        aspect: PHONE,
      },
      {
        image: shot('zenith', 'add-project-light', {
          en: 'Zenith add-project screen in light theme',
          es: 'Pantalla de añadir proyecto en Zenith en tema claro',
          fr: 'Écran d\'ajout de projet sur Zenith en thème clair',
        }),
        span: 'quarter',
        aspect: PHONE,
      },
      {
        image: shot('zenith', 'add-project-dark', {
          en: 'Zenith add-project screen in dark theme',
          es: 'Pantalla de añadir proyecto en Zenith en tema oscuro',
          fr: 'Écran d\'ajout de projet sur Zenith en thème sombre',
        }),
        span: 'quarter',
        aspect: PHONE,
      },
      {
        image: shot('zenith', 'calendar-view', {
          en: 'Zenith calendar view screen',
          es: 'Pantalla de vista de calendario en Zenith',
          fr: 'Écran de vue calendrier sur Zenith',
        }),
        span: 'quarter',
        aspect: PHONE,
      },
    ],
    outcome: {
      heading: { en: 'What it produced', es: 'Lo que produjo', fr: 'Ce que cela a produit' },
      paragraphs: {
        en: [
          'A complete two-theme screen set (dashboard, task list, task detail, task and project creation, calendar, search, notifications and settings), built on a shared token set rather than assembled screen by screen.',
          'As a concept it has no usage data behind it, and this page does not pretend otherwise. What it demonstrates is the part that transfers to client work: designing both themes at once, keeping status legible without relying on colour, and covering the screens that only matter once a product is actually in use.',
        ],
        es: [
          'Un conjunto completo de pantallas en dos temas (dashboard, lista de tareas, detalle de tarea, creación de tarea y proyecto, calendario, búsqueda, notificaciones y ajustes), construido sobre un set de tokens compartido en lugar de ensamblado pantalla a pantalla.',
          'Como concepto no tiene datos de uso detrás, y esta página no pretende lo contrario. Lo que demuestra es la parte que se traslada al trabajo con clientes: diseñar ambos temas a la vez, mantener los estados legibles sin depender del color, y cubrir las pantallas que solo importan cuando el producto está realmente en uso.',
        ],
        fr: [
          'Un ensemble complet d\'écrans en deux thèmes (tableau de bord, liste de tâches, détail de tâche, création de tâche et de projet, calendrier, recherche, notifications et paramètres), construit sur un jeu de tokens partagé plutôt qu\'assemblé écran par écran.',
          'En tant que concept, il n\'y a pas de données d\'utilisation derrière, et cette page ne prétend pas le contraire. Ce qu\'il démontre est la partie transférable au travail client\u00a0: concevoir les deux thèmes en même temps, garder les statuts lisibles sans dépendre de la couleur, et couvrir les écrans qui ne comptent que lorsque le produit est réellement utilisé.',
        ],
      },
    },
    relatedArticles: [
      'design-system-in-figma',
      'ui-design-mistakes',
      'ui-ux-design-trends-2026',
    ],
  },
  {
    slug: 'crave',
    title: { en: 'Crave', es: 'Crave', fr: 'Crave' },
    discipline: {
      en: 'Food delivery app UI/UX',
      es: 'Diseño UI/UX de app de delivery de comida',
      fr: "UI/UX d'application de livraison de repas",
    },
    year: '2025',
    tags: ['uxui'],
    summary: {
      en: 'A dark-mode food delivery app concept where the interface gets out of the way of the food: one saturated accent on near-black, photography as the light source, and a home screen ordered by how undecided you are.',
      es: 'Concepto de app de delivery en modo oscuro donde la interfaz se aparta para dejar protagonismo a la comida: un solo acento saturado sobre casi negro, la fotografía como fuente de luz y una pantalla de inicio ordenada según lo indeciso que estés.',
      fr: "Concept d'application de livraison en mode sombre où l'interface s'efface devant la nourriture\u00a0: un seul accent saturé sur quasi-noir, la photographie comme source de lumière et un écran d'accueil organisé selon le degré d'indécision de l'utilisateur.",
    },
    thumbnail: shot('crave', 'cover', {
      en: 'Crave food delivery app: home and restaurant list screens in dark mode',
      es: 'App de delivery Crave: pantallas de inicio y lista de restaurantes en modo oscuro',
      fr: "Application de livraison Crave\u00a0: écrans d'accueil et liste de restaurants en mode sombre",
    }),
    hero: shot('crave', 'in-hand-01', {
      en: 'Crave food delivery app running on a phone held in one hand',
      es: 'App de delivery Crave mostrada en un teléfono sostenido con una mano',
      fr: 'Application de livraison Crave affichée sur un téléphone tenu à une main',
    }),
    meta: [
      {
        label: { en: 'Type', es: 'Tipo', fr: 'Type' },
        value: {
          en: 'Concept project, self-initiated',
          es: 'Proyecto conceptual, iniciativa propia',
          fr: 'Projet conceptuel, initiative personnelle',
        },
      },
      {
        label: { en: 'Role', es: 'Rol', fr: 'Rôle' },
        value: {
          en: 'UX, UI and prototype',
          es: 'UX, UI y prototipo',
          fr: 'UX, UI et prototype',
        },
      },
      {
        label: { en: 'Platform', es: 'Plataforma', fr: 'Plateforme' },
        value: { en: 'iOS and Android', es: 'iOS y Android', fr: 'iOS et Android' },
      },
      {
        label: { en: 'Tools', es: 'Herramientas', fr: 'Outils' },
        value: { en: 'Figma', es: 'Figma', fr: 'Figma' },
      },
    ],
    sections: [
      {
        heading: {
          en: 'Designing for appetite',
          es: 'Diseñar para el apetito',
          fr: "Concevoir pour l'appétit",
        },
        paragraphs: {
          en: [
            'Food ordering is not an efficiency problem. Nobody opens a delivery app knowing exactly what they want and resenting the taps in between. They open it hungry and undecided, and the job of the interface is to help them want something.',
            'That is the argument for the dark theme. On a near-black surface the photography becomes the only light in the frame, and a cheese pull or a burger cross-section carries the screen instead of competing with a white background for attention.',
            'A single saturated orange does everything else: search, the active tab, the offer badge, the delivery time, the add button. One accent used consistently means every orange thing on screen is something you can act on.',
          ],
          es: [
            'Pedir comida no es un problema de eficiencia. Nadie abre una app de delivery sabiendo exactamente lo que quiere y resintiendo cada toque en el camino. La abren con hambre e indecisos, y el trabajo de la interfaz es ayudarles a querer algo.',
            'Ese es el argumento del tema oscuro. Sobre una superficie casi negra, la fotografía se convierte en la única fuente de luz de la escena, y un queso fundido o el corte de una hamburguesa domina la pantalla en lugar de competir con un fondo blanco por la atención.',
            'Un solo naranja saturado hace todo lo demás: la búsqueda, la pestaña activa, la etiqueta de oferta, el tiempo de entrega, el botón de añadir. Un acento usado de forma consistente significa que cada elemento naranja en pantalla es algo sobre lo que puedes actuar.',
          ],
          fr: [
            'Commander à manger n\'est pas un problème d\'efficacité. Personne n\'ouvre une app de livraison en sachant exactement ce qu\'il veut et en pestant contre chaque touche intermédiaire. On l\'ouvre affamé et indécis, et le rôle de l\'interface est d\'aider à avoir envie de quelque chose.',
            'C\'est l\'argument du thème sombre. Sur une surface presque noire, la photographie devient la seule source de lumière du cadre, et un fromage filant ou la coupe d\'un burger porte l\'écran au lieu de rivaliser avec un fond blanc pour capter l\'attention.',
            'Un seul orange saturé fait tout le reste\u00a0: la recherche, l\'onglet actif, le badge promo, le délai de livraison, le bouton d\'ajout. Un accent utilisé de façon cohérente signifie que chaque élément orange à l\'écran est quelque chose sur lequel on peut agir.',
          ],
        },
      },
      {
        heading: {
          en: 'A home screen that answers "what do I want?"',
          es: 'Una pantalla de inicio que responde «¿qué quiero?»',
          fr: 'Un écran d\'accueil qui répond «\u00a0qu\'est-ce que je veux\u00a0?\u00a0»',
        },
        paragraphs: {
          en: [
            'The home screen is ordered by how undecided you are. Categories come first as circular photographs (pizza, burger, sushi, tacos) for the person who knows the shape of what they want but not the restaurant.',
            'Today’s Offers sits next as a horizontally scrolling carousel of flash deals, because price is what settles a large share of orders and burying it under a menu is pretending otherwise. Trending Now closes the screen for anyone still browsing.',
            'The delivery address stays pinned to the top as a dropdown. It is the one piece of state that invalidates everything below it, so it should never take a trip into settings to check.',
          ],
          es: [
            'La pantalla de inicio se ordena según lo indeciso que estés. Las categorías van primero como fotografías circulares (pizza, hamburguesa, sushi, tacos) para quien sabe la forma de lo que quiere pero no el restaurante.',
            'Las Ofertas del Día aparecen después como un carrusel horizontal de promociones flash, porque el precio es lo que decide una gran parte de los pedidos y enterrarlo bajo un menú es fingir lo contrario. Tendencias cierra la pantalla para quienes siguen navegando.',
            'La dirección de entrega permanece fija en la parte superior como menú desplegable. Es el dato que invalida todo lo que hay debajo, así que nunca debería requerir ir a los ajustes para comprobarlo.',
          ],
          fr: [
            'L\'écran d\'accueil est organisé selon le degré d\'indécision. Les catégories viennent en premier sous forme de photos circulaires (pizza, burger, sushi, tacos) pour la personne qui sait le type de plat qu\'elle veut mais pas le restaurant.',
            'Les Offres du Jour suivent sous forme de carrousel horizontal de promotions flash, parce que le prix est ce qui décide une grande part des commandes et l\'enfouir dans un menu revient à le nier. Tendances ferme l\'écran pour ceux qui continuent à parcourir.',
            'L\'adresse de livraison reste épinglée en haut sous forme de menu déroulant. C\'est la seule donnée qui invalide tout ce qui se trouve en dessous, elle ne devrait donc jamais nécessiter un détour par les paramètres pour la vérifier.',
          ],
        },
      },
      {
        heading: {
          en: 'Browsing without losing the thread',
          es: 'Explorar sin perder el hilo',
          fr: 'Parcourir sans perdre le fil',
        },
        paragraphs: {
          en: [
            'The restaurant list keeps the search field in place and puts sort, fast delivery and top rated in a filter row directly beneath it, so narrowing a list never means leaving it and coming back.',
            'Each card carries the things that actually decide an order: a photograph, a rating, cuisine and price tags, a delivery window and a free-delivery flag. The rating sits on the image rather than under the name, so it stays readable while scrolling at speed.',
            'Sign-up is deliberately late and deliberately plain: same dark surface, one clear action. An account wall in front of a menu is the fastest way to lose someone who was only browsing.',
          ],
          es: [
            'La lista de restaurantes mantiene el campo de búsqueda en su sitio y coloca ordenar, entrega rápida y mejor valorados en una fila de filtros justo debajo, de modo que acotar una lista nunca significa abandonarla y volver.',
            'Cada tarjeta muestra lo que realmente decide un pedido: una fotografía, una valoración, etiquetas de cocina y precio, un tiempo de entrega y un indicador de envío gratis. La valoración se sitúa sobre la imagen en lugar de debajo del nombre, para que siga siendo legible al hacer scroll rápido.',
            'El registro es deliberadamente tardío y deliberadamente simple: la misma superficie oscura, una acción clara. Un muro de registro delante del menú es la forma más rápida de perder a alguien que solo estaba mirando.',
          ],
          fr: [
            'La liste des restaurants conserve le champ de recherche en place et place tri, livraison rapide et mieux notés dans une rangée de filtres juste en dessous, si bien que filtrer une liste ne signifie jamais la quitter et y revenir.',
            'Chaque carte affiche ce qui décide réellement une commande\u00a0: une photo, une note, des étiquettes de cuisine et de prix, un délai de livraison et un indicateur de livraison gratuite. La note se place sur l\'image plutôt que sous le nom, pour rester lisible en défilement rapide.',
            'L\'inscription est volontairement tardive et volontairement sobre\u00a0: même surface sombre, une seule action claire. Un mur de connexion devant un menu est le moyen le plus rapide de perdre quelqu\'un qui ne faisait que parcourir.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: shot('crave', 'home-dark', {
          en: 'Crave home screen with categories, a flash-deal carousel and trending dishes',
          es: 'Pantalla de inicio de Crave con categorías, carrusel de ofertas flash y platos en tendencia',
          fr: 'Écran d\'accueil Crave avec catégories, carrousel d\'offres flash et plats populaires',
        }),
        span: 'quarter',
        aspect: PHONE_TALL,
      },
      {
        image: shot('crave', 'food-list-dark', {
          en: 'Crave restaurant list with sort and delivery filters, ratings and delivery times',
          es: 'Lista de restaurantes de Crave con filtros de ordenación y entrega, valoraciones y tiempos de entrega',
          fr: 'Liste de restaurants Crave avec filtres de tri et de livraison, notes et délais',
        }),
        span: 'quarter',
        aspect: PHONE_TALL,
      },
      {
        image: shot('crave', 'sign-up-dark', {
          en: 'Crave sign-up screen in dark mode',
          es: 'Pantalla de registro de Crave en modo oscuro',
          fr: 'Écran d\'inscription Crave en mode sombre',
        }),
        span: 'quarter',
        aspect: PHONE_TALL,
      },
      {
        image: shot('crave', 'in-hand-02', {
          en: 'Crave app shown in use on a phone held in one hand',
          es: 'App Crave en uso en un smartphone sostenido con una mano',
          fr: 'Application Crave en utilisation sur un téléphone tenu à une main',
        }),
        span: 'half',
        aspect: LANDSCAPE,
      },
    ],
    outcome: {
      heading: { en: 'What it produced', es: 'Lo que produjo', fr: 'Ce que cela a produit' },
      paragraphs: {
        en: [
          'A dark-theme screen set covering sign-up, home, category browsing and restaurant listing, with one accent colour carrying every interactive element and photography treated as the primary visual material rather than as decoration.',
          'It is a concept, so there is no order volume to report. The transferable part is the reasoning: choosing a theme because of what the content is, spending the accent colour on a single job, and ordering a home screen around how decided the user already is.',
        ],
        es: [
          'Un conjunto de pantallas en tema oscuro que cubre registro, inicio, navegación por categorías y listado de restaurantes, con un solo color de acento que porta cada elemento interactivo y la fotografía tratada como material visual principal en lugar de decoración.',
          'Es un concepto, así que no hay volumen de pedidos que reportar. La parte transferible es el razonamiento: elegir un tema por lo que es el contenido, destinar el color de acento a una sola función y ordenar la pantalla de inicio según lo decidido que ya está el usuario.',
        ],
        fr: [
          'Un ensemble d\'écrans en thème sombre couvrant inscription, accueil, navigation par catégories et liste de restaurants, avec une seule couleur d\'accent portant chaque élément interactif et la photographie traitée comme matériau visuel principal plutôt que comme décoration.',
          'C\'est un concept, il n\'y a donc pas de volume de commandes à rapporter. La partie transférable est le raisonnement\u00a0: choisir un thème en fonction du contenu, consacrer la couleur d\'accent à une seule fonction et organiser l\'écran d\'accueil autour du degré de décision de l\'utilisateur.',
        ],
      },
    },
    relatedArticles: ['ui-design-mistakes'],
  },
  {
    slug: 'stayease',
    title: { en: 'StayEase', es: 'StayEase', fr: 'StayEase' },
    discipline: {
      en: 'Hotel booking website UI/UX',
      es: 'Diseño UI/UX de web de reservas hoteleras',
      fr: 'UI/UX de site de réservation hôtelière',
    },
    year: '2025–2026',
    tags: ['website', 'uxui'],
    summary: {
      en: 'A hotel booking website concept built around its search bar: a five-way stay-type switch, four fields that hold their state, and destination browsing for travellers who have not picked a city yet.',
      es: 'Concepto de web de reservas hoteleras construido alrededor de su barra de búsqueda: un selector de cinco tipos de estancia, cuatro campos que mantienen su estado, y navegación por destinos para viajeros que aún no han elegido ciudad.',
      fr: 'Concept de site de réservation hôtelière construit autour de sa barre de recherche\u00a0: un sélecteur à cinq types de séjour, quatre champs qui conservent leur état, et une navigation par destinations pour les voyageurs qui n\'ont pas encore choisi de ville.',
    },
    thumbnail: shot('stayease', 'cover', {
      en: 'StayEase hotel booking website shown on a laptop with the brand logo',
      es: 'Web de reservas StayEase mostrada en un portátil con el logotipo de la marca',
      fr: 'Site de réservation StayEase affiché sur un ordinateur portable avec le logo',
    }),
    hero: shot('stayease', 'hero-laptop', {
      en: 'StayEase hotel booking homepage displayed on a laptop screen',
      es: 'Página de inicio de reservas de StayEase en la pantalla de un portátil',
      fr: 'Page d\'accueil de réservation StayEase sur l\'écran d\'un ordinateur portable',
    }),
    meta: [
      {
        label: { en: 'Type', es: 'Tipo', fr: 'Type' },
        value: {
          en: 'Concept project, self-initiated',
          es: 'Proyecto conceptual, iniciativa propia',
          fr: 'Projet conceptuel, initiative personnelle',
        },
      },
      {
        label: { en: 'Role', es: 'Rol', fr: 'Rôle' },
        value: {
          en: 'UX, UI and visual identity',
          es: 'UX, UI e identidad visual',
          fr: 'UX, UI et identité visuelle',
        },
      },
      {
        label: { en: 'Platform', es: 'Plataforma', fr: 'Plateforme' },
        value: { en: 'Responsive web', es: 'Web responsive', fr: 'Web responsive' },
      },
      {
        label: { en: 'Tools', es: 'Herramientas', fr: 'Outils' },
        value: { en: 'Figma', es: 'Figma', fr: 'Figma' },
      },
    ],
    sections: [
      {
        heading: {
          en: 'The search bar is the product',
          es: 'La barra de búsqueda es el producto',
          fr: 'La barre de recherche est le produit',
        },
        paragraphs: {
          en: [
            'On a booking site everything above the fold is scenery except one component. The search bar is where the session actually begins, so it was designed first and the rest of the page arranged around it.',
            'It deliberately overlaps the hero image rather than sitting below it, because that puts the most important control at the optical centre of the page instead of at the bottom of a decorative band.',
            'The four fields stay labelled and permanently visible: destination, check in, check out, travellers. Collapsing them into a single "Search" input looks tidier in a mockup and immediately costs the visitor the ability to see what they have already filled in.',
          ],
          es: [
            'En un sitio de reservas, todo lo que está por encima del pliegue es paisaje excepto un componente. La barra de búsqueda es donde realmente comienza la sesión, así que se diseñó primero y el resto de la página se organizó a su alrededor.',
            'Se superpone deliberadamente a la imagen hero en lugar de sentarse debajo, porque eso coloca el control más importante en el centro óptico de la página en lugar de al pie de una banda decorativa.',
            'Los cuatro campos permanecen etiquetados y siempre visibles: destino, entrada, salida, viajeros. Colapsarlos en un solo campo «Buscar» queda más limpio en un mockup pero le cuesta al visitante la capacidad de ver lo que ya ha rellenado.',
          ],
          fr: [
            'Sur un site de réservation, tout ce qui est au-dessus de la ligne de flottaison est du décor sauf un composant. La barre de recherche est là où la session commence réellement, elle a donc été conçue en premier et le reste de la page s\'est organisé autour.',
            'Elle chevauche délibérément l\'image hero au lieu de se placer en dessous, parce que cela place le contrôle le plus important au centre optique de la page plutôt qu\'au bas d\'une bande décorative.',
            'Les quatre champs restent libellés et en permanence visibles\u00a0: destination, arrivée, départ, voyageurs. Les réduire en un seul champ «\u00a0Rechercher\u00a0» paraît plus propre dans une maquette mais coûte immédiatement au visiteur la possibilité de voir ce qu\'il a déjà rempli.',
          ],
        },
      },
      {
        heading: {
          en: 'Stay type before destination',
          es: 'Tipo de estancia antes que destino',
          fr: 'Type de séjour avant la destination',
        },
        paragraphs: {
          en: [
            'A row of tabs above the fields (hotels, resorts, villas, apartments, homestays) sets the kind of stay before anything else. That ordering matters: someone looking for a villa and someone looking for a homestay are running different searches, and filtering after the results arrive means discarding a page of listings they never wanted.',
            'The tabs are a switch rather than another filter chip for the same reason. This is one choice that reframes the whole query, not one of several refinements stacked together.',
          ],
          es: [
            'Una fila de pestañas sobre los campos (hoteles, resorts, villas, apartamentos, casas rurales) establece el tipo de estancia antes que nada. Ese orden importa: alguien que busca una villa y alguien que busca una casa rural realizan búsquedas distintas, y filtrar después de obtener resultados supone descartar una página de listados que nunca quisieron.',
            'Las pestañas son un interruptor y no otro chip de filtro por la misma razón. Es una elección que redefine toda la consulta, no uno de varios refinamientos apilados.',
          ],
          fr: [
            'Une rangée d\'onglets au-dessus des champs (hôtels, resorts, villas, appartements, maisons d\'hôtes) définit le type de séjour avant tout le reste. Cet ordre compte\u00a0: quelqu\'un qui cherche une villa et quelqu\'un qui cherche une maison d\'hôtes effectuent des recherches différentes, et filtrer après l\'affichage des résultats revient à ignorer une page de listings non désirés.',
            'Les onglets sont un sélecteur plutôt qu\'une autre puce de filtre pour la même raison. C\'est un choix unique qui recadre toute la requête, pas l\'un des multiples raffinements empilés.',
          ],
        },
      },
      {
        heading: {
          en: 'For travellers without a destination',
          es: 'Para viajeros sin destino',
          fr: 'Pour les voyageurs sans destination',
        },
        paragraphs: {
          en: [
            'A search bar assumes you know where you are going. Plenty of trips do not start that way, which is why "Explore Top Hotel Destinations" sits directly beneath it as a row of city cards.',
            'It is the same argument as the food app: give the undecided visitor a way in that does not require them to type. The rest of the page then follows the order a browsing visitor asks questions in: what is on offer, why this site, what other people said.',
          ],
          es: [
            'Una barra de búsqueda asume que sabes adónde vas. Muchos viajes no empiezan así, por eso «Explora los mejores destinos hoteleros» se sitúa justo debajo como una fila de tarjetas de ciudades.',
            'Es el mismo argumento que la app de comida: dale al visitante indeciso un punto de entrada que no requiera escribir. El resto de la página sigue el orden en que un visitante que navega hace preguntas: qué se ofrece, por qué este sitio, qué han dicho otras personas.',
          ],
          fr: [
            'Une barre de recherche suppose que vous savez où vous allez. Beaucoup de voyages ne commencent pas ainsi, c\'est pourquoi «\u00a0Explorez les meilleures destinations hôtelières\u00a0» se place juste en dessous sous forme d\'une rangée de cartes de villes.',
            'C\'est le même argument que l\'app de livraison\u00a0: offrir au visiteur indécis un point d\'entrée qui ne nécessite pas de taper. Le reste de la page suit ensuite l\'ordre dans lequel un visiteur en exploration pose des questions\u00a0: qu\'est-ce qui est proposé, pourquoi ce site, qu\'ont dit les autres.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: shot('stayease', 'detail-01', {
          en: 'StayEase homepage section detail',
          es: 'Detalle de la sección de la página de inicio de StayEase',
          fr: 'Détail d\'une section de la page d\'accueil StayEase',
        }),
        span: 'third',
        aspect: SQUARE,
      },
      {
        image: shot('stayease', 'detail-02', {
          en: 'StayEase page section showing hotel listings',
          es: 'Sección de página de StayEase mostrando listados de hoteles',
          fr: 'Section de page StayEase affichant les listes d\'hôtels',
        }),
        span: 'third',
        aspect: SQUARE,
      },
      {
        image: shot('stayease', 'detail-03', {
          en: 'StayEase page section detail',
          es: 'Detalle de sección de página de StayEase',
          fr: 'Détail de section de page StayEase',
        }),
        span: 'third',
        aspect: SQUARE,
      },
    ],
    outcome: {
      heading: { en: 'What it produced', es: 'Lo que produjo', fr: 'Ce que cela a produit' },
      paragraphs: {
        en: [
          'A homepage concept with a working information hierarchy: stay type, then the four search fields, then destination browsing for anyone who has not decided, followed by the supporting sections a booking visitor reads in that order.',
          'No bookings were taken and none are claimed. What the project demonstrates is designing a page around its one load-bearing component rather than around a hero image, and giving the undecided visitor a route in that does not start with an empty text field.',
        ],
        es: [
          'Un concepto de página de inicio con una jerarquía de información funcional: tipo de estancia, luego los cuatro campos de búsqueda, después navegación por destinos para quien no ha decidido, seguido de las secciones de apoyo que un visitante de reservas lee en ese orden.',
          'No se realizaron reservas y no se afirma lo contrario. Lo que el proyecto demuestra es diseñar una página alrededor de su único componente estructural en lugar de alrededor de una imagen hero, y ofrecer al visitante indeciso un punto de entrada que no comience con un campo de texto vacío.',
        ],
        fr: [
          'Un concept de page d\'accueil avec une hiérarchie d\'information fonctionnelle\u00a0: type de séjour, puis les quatre champs de recherche, puis la navigation par destinations pour ceux qui n\'ont pas encore décidé, suivie des sections de support qu\'un visiteur de réservation lit dans cet ordre.',
          'Aucune réservation n\'a été prise et aucune n\'est revendiquée. Ce que le projet démontre, c\'est concevoir une page autour de son seul composant porteur plutôt qu\'autour d\'une image hero, et offrir au visiteur indécis un point d\'entrée qui ne commence pas par un champ de texte vide.',
        ],
      },
    },
    relatedArticles: [
      'figma-to-react-handoff',
      'ui-design-mistakes',
      'ai-coding-tools-client-projects',
    ],
  },
  {
    slug: 'cleaning-services-app',
    title: {
      en: 'Cleaning Services App',
      es: 'Cleaning Services App',
      fr: 'Cleaning Services App',
    },
    discipline: {
      en: 'Home services app UI/UX',
      es: 'Diseño UI/UX de app de servicios para el hogar',
      fr: "UI/UX d'application de services à domicile",
    },
    year: '2025–2026',
    tags: ['uxui'],
    summary: {
      en: 'An on-demand home cleaning booking app concept: category-first browsing, a draggable before-and-after comparison, slot scheduling with a carried-forward address, and a bookings list with live status.',
      es: 'Concepto de app de reserva de limpieza a domicilio bajo demanda: navegación por categorías, comparación arrastrable de antes y después, programación de horarios con dirección guardada y lista de reservas con estado en tiempo real.',
      fr: "Concept d'application de réservation de nettoyage à domicile\u00a0: navigation par catégories, comparaison avant/après glissable, planification de créneaux avec adresse conservée et liste de réservations avec statut en temps réel.",
    },
    thumbnail: shot('cleaning-services-app', 'cover', {
      en: 'Cleaning services booking app: onboarding and home screens',
      es: 'App de reserva de limpieza: pantallas de onboarding e inicio',
      fr: "Application de réservation de nettoyage\u00a0: écrans d'onboarding et d'accueil",
    }),
    hero: shot('cleaning-services-app', 'cover', {
      en: 'Two screens from a cleaning services booking app on a pale blue background',
      es: 'Dos pantallas de una app de reserva de limpieza sobre fondo azul claro',
      fr: 'Deux écrans d\'une application de nettoyage sur fond bleu pâle',
    }),
    meta: [
      {
        label: { en: 'Type', es: 'Tipo', fr: 'Type' },
        value: {
          en: 'Concept project, self-initiated',
          es: 'Proyecto conceptual, iniciativa propia',
          fr: 'Projet conceptuel, initiative personnelle',
        },
      },
      {
        label: { en: 'Role', es: 'Rol', fr: 'Rôle' },
        value: {
          en: 'UX and UI design',
          es: 'Diseño UX y UI',
          fr: 'Design UX et UI',
        },
      },
      {
        label: { en: 'Platform', es: 'Plataforma', fr: 'Plateforme' },
        value: { en: 'iOS and Android', es: 'iOS y Android', fr: 'iOS et Android' },
      },
      {
        label: { en: 'Tools', es: 'Herramientas', fr: 'Outils' },
        value: { en: 'Figma', es: 'Figma', fr: 'Figma' },
      },
    ],
    sections: [
      {
        heading: {
          en: 'Selling a service you cannot photograph',
          es: 'Vender un servicio que no se puede fotografiar',
          fr: "Vendre un service qu'on ne peut pas photographier",
        },
        paragraphs: {
          en: [
            'A cleaning service has no product shot. The thing being bought is a change of state, which is hard to put in a card and impossible to judge from a price alone. That is why this whole category leans so heavily on reviews.',
            'So the service page leads with a before-and-after comparison on a draggable divider. It is the one control on the screen that shows the outcome rather than describing it, and dragging it yourself is more persuasive than any pair of side-by-side thumbnails.',
            'A light interface is the right call here for the opposite reason to the food app: the promise is cleanliness, and a bright, generously spaced, low-contrast layout is that promise expressed in the interface itself.',
          ],
          es: [
            'Un servicio de limpieza no tiene foto de producto. Lo que se compra es un cambio de estado, difícil de meter en una tarjeta e imposible de juzgar solo por el precio. Por eso toda esta categoría depende tanto de las reseñas.',
            'Por eso la página del servicio empieza con una comparación de antes y después con un divisor arrastrable. Es el único control de la pantalla que muestra el resultado en lugar de describirlo, y arrastrarlo tú mismo es más persuasivo que cualquier par de miniaturas lado a lado.',
            'Una interfaz clara es la decisión correcta aquí por la razón opuesta a la app de comida: la promesa es limpieza, y un diseño luminoso, con amplio espaciado y bajo contraste es esa promesa expresada en la propia interfaz.',
          ],
          fr: [
            'Un service de nettoyage n\'a pas de photo produit. Ce qu\'on achète est un changement d\'état, difficile à mettre sur une carte et impossible à juger à partir du seul prix. C\'est pourquoi toute cette catégorie repose autant sur les avis.',
            'La page du service commence donc par une comparaison avant/après avec un séparateur glissable. C\'est le seul contrôle de l\'écran qui montre le résultat au lieu de le décrire, et le faire glisser soi-même est plus convaincant que n\'importe quelle paire de vignettes côte à côte.',
            'Une interface claire est le bon choix ici pour la raison inverse de l\'app de livraison\u00a0: la promesse est la propreté, et une mise en page lumineuse, généreusement espacée et à faible contraste est cette promesse exprimée dans l\'interface elle-même.',
          ],
        },
      },
      {
        heading: {
          en: 'Category first, because that is how people ask',
          es: 'Categoría primero, porque así es como la gente pregunta',
          fr: "La catégorie d'abord, parce que c'est ainsi que les gens demandent",
        },
        paragraphs: {
          en: [
            'Nobody wants "a cleaning service". They want the sofa done, or the car interior, or the carpet. The home screen opens on exactly that: a row of illustrated category chips for sofa, chair, car interior, curtains and carpet, above a search field primed with the same phrasing.',
            'Popular Services then repeats the entry point as full-width photographic cards, so the same choice is available whether someone is scanning icons or reading.',
            'Location sits at the top as a dropdown rather than a setting. Availability and price both depend on it, so it belongs where it can be checked and changed in one tap.',
          ],
          es: [
            'Nadie quiere «un servicio de limpieza». Quieren que les limpien el sofá, el interior del coche o la alfombra. La pantalla de inicio abre exactamente con eso: una fila de chips de categoría ilustrados para sofá, silla, interior de coche, cortinas y alfombra, sobre un campo de búsqueda predefinido con la misma expresión.',
            'Los Servicios Populares repiten entonces el punto de entrada como tarjetas fotográficas a ancho completo, para que la misma opción esté disponible tanto si alguien escanea iconos como si lee.',
            'La ubicación se sitúa en la parte superior como menú desplegable en lugar de como ajuste. La disponibilidad y el precio dependen de ella, así que debe estar donde pueda comprobarse y cambiarse con un solo toque.',
          ],
          fr: [
            'Personne ne veut «\u00a0un service de nettoyage\u00a0». On veut le canapé, l\'intérieur de la voiture ou le tapis nettoyé. L\'écran d\'accueil s\'ouvre exactement sur cela\u00a0: une rangée de puces de catégories illustrées pour canapé, chaise, intérieur de voiture, rideaux et tapis, au-dessus d\'un champ de recherche pré-rempli avec la même formulation.',
            'Les Services Populaires reprennent ensuite le point d\'entrée sous forme de cartes photographiques pleine largeur, de sorte que le même choix est disponible que l\'on scanne les icônes ou que l\'on lise.',
            'La localisation se trouve en haut sous forme de menu déroulant plutôt que dans les paramètres. La disponibilité et le prix en dépendent, elle doit donc être à portée de vérification et de modification en un seul geste.',
          ],
        },
      },
      {
        heading: {
          en: 'A price that never leaves the screen',
          es: 'Un precio que nunca abandona la pantalla',
          fr: "Un prix qui ne quitte jamais l'écran",
        },
        paragraphs: {
          en: [
            'The starting price appears on the service card, again on the detail hero, and again in a sticky footer beside Book Now. The repetition is the point: the most common reason people abandon a services booking is not knowing what it will cost until the last step.',
            'The detail page keeps the description truncated behind Read More and puts the scannable facts above it: rating, review count, and tags for what is included. Long-form copy stays available for the people who want it and out of the way of the people who do not.',
            'Onboarding is a single screen: verify your email, continue with Google or email, terms underneath. It runs before booking rather than before browsing, so nobody hits an account wall while still deciding.',
          ],
          es: [
            'El precio de partida aparece en la tarjeta del servicio, de nuevo en el hero de detalle y otra vez en un footer fijo junto a Reservar. La repetición es el punto: la razón más habitual por la que la gente abandona una reserva de servicios es no saber cuánto costará hasta el último paso.',
            'La página de detalle mantiene la descripción truncada detrás de Leer más y coloca los datos escaneables por encima: valoración, número de reseñas y etiquetas de lo que incluye. El texto largo queda disponible para quienes lo quieran y fuera del camino de quienes no.',
            'El onboarding es una sola pantalla: verifica tu correo, continúa con Google o email, con los términos debajo. Se ejecuta antes de reservar, no antes de navegar, para que nadie choque con un muro de cuenta mientras aún está decidiendo.',
          ],
          fr: [
            'Le prix de départ apparaît sur la carte du service, à nouveau sur le hero de détail et encore dans un pied de page fixe à côté de Réserver. La répétition est le point clé\u00a0: la raison la plus courante pour laquelle les gens abandonnent une réservation de services est de ne pas savoir ce que cela coûtera jusqu\'à la dernière étape.',
            'La page de détail garde la description tronquée derrière Lire la suite et place les informations scannables au-dessus\u00a0: note, nombre d\'avis et étiquettes de ce qui est inclus. Le texte long reste disponible pour ceux qui le souhaitent et hors du chemin de ceux qui ne le souhaitent pas.',
            'L\'onboarding est un seul écran\u00a0: vérifiez votre e-mail, continuez avec Google ou e-mail, conditions en dessous. Il se déclenche avant la réservation et non avant la navigation, pour que personne ne rencontre un mur de connexion alors qu\'il est encore en train de choisir.',
          ],
        },
      },
      {
        heading: {
          en: 'Scheduling, and what happens after the job',
          es: 'Programación, y lo que pasa después del trabajo',
          fr: 'La planification, et ce qui se passe après la prestation',
        },
        paragraphs: {
          en: [
            'Picking a slot is where most services bookings fall over, usually by presenting a bare calendar and a list of every time in the day. Here the week runs as a strip with past days greyed out rather than hidden, so the disabled state teaches the boundary instead of leaving someone to work out why yesterday is missing.',
            'Times are grouped into morning, afternoon and evening bands rather than listed as a wall of thirty-minute increments. People book by part of day first and by exact time second, so the interface asks in that order. The service address is carried forward and shown inline, because the last thing anyone wants at the point of confirming is to be sent back to a settings screen.',
            'The flow then continues past the booking, which is the half most concept projects skip. My Bookings gives every job a status pill (confirmed, completed) next to its date and price, so the list answers "what is happening and what did it cost" without opening anything.',
          ],
          es: [
            'Elegir un horario es donde la mayoría de reservas de servicios fallan, normalmente al presentar un calendario desnudo y una lista con cada hora del día. Aquí la semana se muestra como una franja con los días pasados en gris en lugar de ocultos, de modo que el estado deshabilitado enseña el límite en vez de dejar que el usuario descifre por qué falta el día de ayer.',
            'Los horarios se agrupan en franjas de mañana, tarde y noche en lugar de listarse como un muro de incrementos de treinta minutos. La gente reserva primero por franja del día y luego por hora exacta, así que la interfaz pregunta en ese orden. La dirección del servicio se lleva adelante y se muestra en línea, porque lo último que alguien quiere en el momento de confirmar es que le envíen de vuelta a una pantalla de ajustes.',
            'El flujo continúa más allá de la reserva, que es la mitad que la mayoría de proyectos conceptuales omiten. Mis Reservas muestra cada trabajo con una etiqueta de estado (confirmado, completado) junto a su fecha y precio, de modo que la lista responde «qué está pasando y cuánto costó» sin abrir nada.',
          ],
          fr: [
            'Choisir un créneau est l\'étape où la plupart des réservations de services échouent, généralement en présentant un calendrier nu et une liste de toutes les heures de la journée. Ici la semaine se présente comme une bande avec les jours passés grisés plutôt que masqués, de sorte que l\'état désactivé enseigne la limite au lieu de laisser l\'utilisateur deviner pourquoi hier est absent.',
            'Les horaires sont regroupés en créneaux matin, après-midi et soir plutôt que listés comme un mur d\'incréments de trente minutes. Les gens réservent d\'abord par partie de la journée puis par heure exacte, l\'interface demande donc dans cet ordre. L\'adresse du service est conservée et affichée en ligne, car la dernière chose que quiconque souhaite au moment de confirmer est d\'être renvoyé à un écran de paramètres.',
            'Le flux continue au-delà de la réservation, ce qui est la moitié que la plupart des projets conceptuels omettent. Mes Réservations attribue à chaque prestation une pastille de statut (confirmée, terminée) à côté de sa date et de son prix, de sorte que la liste répond à «\u00a0que se passe-t-il et combien cela a-t-il coûté\u00a0» sans rien ouvrir.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: shot('cleaning-services-app', 'service-detail', {
          en: 'Cleaning app service detail screen with rating, description, tags, a before-and-after slider and a sticky total price',
          es: 'Pantalla de detalle de servicio de limpieza con valoración, descripción, etiquetas, control antes/después y precio fijo',
          fr: 'Écran de détail de prestation avec note, description, curseur avant/après et prix total fixe',
        }),
        span: 'quarter',
        aspect: PHONE_SLIM,
      },
      {
        image: shot('cleaning-services-app', 'select-date-time', {
          en: 'Cleaning app date and time picker with a week strip, morning, afternoon and evening slot groups and the saved service address',
          es: 'Selector de fecha y hora de la app de limpieza con franja semanal, turnos y dirección guardada',
          fr: 'Sélecteur de date et heure avec bande hebdomadaire, créneaux et adresse enregistrée',
        }),
        span: 'quarter',
        aspect: PHONE_SLIM,
      },
      {
        image: shot('cleaning-services-app', 'my-bookings', {
          en: 'Cleaning app bookings list showing each job with its date, price and a confirmed or completed status pill',
          es: 'Lista de reservas de la app de limpieza mostrando cada servicio con fecha, precio y estado confirmado o completado',
          fr: 'Liste des réservations de l\'application affichant chaque prestation avec date, tarif et statut',
        }),
        span: 'quarter',
        aspect: PHONE_SLIM,
      },
      {
        image: shot('cleaning-services-app', 'screens', {
          en: 'Cleaning app onboarding, home and service detail screens shown together',
          es: 'Pantallas de onboarding, inicio y detalle de servicio de la app de limpieza mostradas juntas',
          fr: 'Écrans d\'onboarding, d\'accueil et de détail de service présentés ensemble',
        }),
        span: 'half',
        aspect: 'aspect-[2490/1806]',
      },
    ],
    outcome: {
      heading: { en: 'What it produced', es: 'Lo que produjo', fr: 'Ce que cela a produit' },
      paragraphs: {
        en: [
          'A booking flow covering most of the lifecycle rather than just the sales pitch: onboarding, category browsing, the service detail page, slot selection with a carried-forward address, and a bookings list with live status.',
          'It is unbuilt and untested, and no booking numbers are claimed. What it works through are two real problems: how to sell something that has no product image, and how to keep a services flow honest about price and timing at every step instead of at the last one.',
        ],
        es: [
          'Un flujo de reserva que cubre la mayor parte del ciclo de vida en lugar de solo la presentación comercial: onboarding, navegación por categorías, la página de detalle del servicio, selección de horario con dirección guardada y una lista de reservas con estado en tiempo real.',
          'No está construido ni probado, y no se reclaman cifras de reservas. Lo que trabaja son dos problemas reales: cómo vender algo que no tiene imagen de producto, y cómo mantener un flujo de servicios honesto con el precio y el tiempo en cada paso en lugar de solo en el último.',
        ],
        fr: [
          'Un flux de réservation couvrant la majeure partie du cycle de vie plutôt que la seule présentation commerciale\u00a0: onboarding, navigation par catégories, page de détail du service, sélection de créneau avec adresse conservée et liste de réservations avec statut en temps réel.',
          'Il n\'est ni construit ni testé, et aucun chiffre de réservation n\'est revendiqué. Ce qu\'il explore, ce sont deux problèmes réels\u00a0: comment vendre quelque chose qui n\'a pas d\'image de produit, et comment maintenir un flux de services honnête sur le prix et le délai à chaque étape plutôt qu\'à la dernière.',
        ],
      },
    },
    relatedArticles: ['ui-design-mistakes', 'core-web-vitals-2026'],
  },
  {
    slug: 'ai-agent-landing',
    title: {
      en: 'AI Agent Landing Page',
      es: 'AI Agent Landing Page',
      fr: 'AI Agent Landing Page',
    },
    discipline: {
      en: 'AI landing page UI',
      es: 'UI de landing page IA',
      fr: "UI de page d'atterrissage IA",
    },
    year: '2026',
    tags: ['website'],
    summary: {
      en: 'A landing page hero concept for an AI agent product: a display typeface, one orange gradient and a benefit-led left column, designed as a first-screen exploration rather than a full site.',
      es: 'Concepto de hero de landing page para un producto de agentes IA: una tipografía display, un gradiente naranja y una columna izquierda orientada a beneficios, diseñado como exploración de primera pantalla y no como un sitio completo.',
      fr: "Concept de section hero de page d'atterrissage pour un produit d'agents IA\u00a0: une typographie display, un dégradé orange et une colonne gauche axée sur les bénéfices, conçu comme une exploration du premier écran plutôt qu'un site complet.",
    },
    thumbnail: shot('ai-agent-landing', 'laptop-mockup', {
      en: 'AI agent landing page hero shown on a laptop resting on dark rock',
      es: 'Hero de landing page de agentes IA mostrado en un portátil sobre roca oscura',
      fr: 'Section hero de landing page d\'agents IA sur un ordinateur posé sur de la roche sombre',
    }),
    hero: shot('ai-agent-landing', 'cover', {
      en: 'AI agent landing page hero with a figure wearing a glowing visor and large display type',
      es: 'Hero de landing page de agentes IA con figura con visera brillante y tipografía display destacada',
      fr: 'Section hero de landing page IA avec personnage à visière lumineuse et typographie display imposante',
    }),
    // The source is 2160×1350 and the display headline runs along its bottom
    // edge, so the shared 16/9 hero frame cropped the words off. This is the
    // one project whose hero *is* the whole design, so it is shown uncropped
    // at its own ratio.
    heroAspect: 'aspect-[2160/1350]',
    meta: [
      {
        label: { en: 'Type', es: 'Tipo', fr: 'Type' },
        value: {
          en: 'Concept project, self-initiated',
          es: 'Proyecto conceptual, iniciativa propia',
          fr: 'Projet conceptuel, initiative personnelle',
        },
      },
      {
        label: { en: 'Scope', es: 'Alcance', fr: 'Périmètre' },
        value: {
          en: 'Hero section only',
          es: 'Solo sección hero',
          fr: 'Section hero uniquement',
        },
      },
      {
        label: { en: 'Platform', es: 'Plataforma', fr: 'Plateforme' },
        value: { en: 'Desktop web', es: 'Web desktop', fr: 'Web desktop' },
      },
      {
        label: { en: 'Tools', es: 'Herramientas', fr: 'Outils' },
        value: { en: 'Figma', es: 'Figma', fr: 'Figma' },
      },
    ],
    sections: [
      {
        heading: {
          en: 'One screen, deliberately',
          es: 'Una pantalla, deliberadamente',
          fr: 'Un seul écran, délibérément',
        },
        paragraphs: {
          en: [
            'This is a hero section, not a website, and the case study says so rather than padding itself out with a research phase that never happened. It exists to work through one question: how a product in a crowded, abstract category makes an impression in the first screen.',
            'AI products are hard to photograph. What is being sold is a capability, so most of the category settles for gradients and node diagrams. The approach here is to put a face on it. A single portrait with a glowing visor gives the page a subject and a focal point, and the warm gradient behind it does the mood work an abstract illustration usually fails at.',
          ],
          es: [
            'Esta es una sección hero, no un sitio web, y el caso de estudio lo dice así en lugar de rellenarse con una fase de investigación que nunca ocurrió. Existe para trabajar una sola pregunta: cómo un producto en una categoría abstracta y saturada causa impacto en la primera pantalla.',
            'Los productos de IA son difíciles de fotografiar. Lo que se vende es una capacidad, así que la mayoría de la categoría se conforma con degradados y diagramas de nodos. El enfoque aquí es ponerle cara. Un retrato único con una visera brillante da a la página un sujeto y un punto focal, y el degradado cálido detrás hace el trabajo de ambiente que una ilustración abstracta generalmente no logra.',
          ],
          fr: [
            'C\'est une section hero, pas un site web, et l\'étude de cas le dit plutôt que de se gonfler avec une phase de recherche qui n\'a jamais eu lieu. Elle existe pour travailler une seule question\u00a0: comment un produit dans une catégorie abstraite et saturée fait impression dès le premier écran.',
            'Les produits IA sont difficiles à photographier. Ce qui est vendu est une capacité, la plupart de la catégorie se contente donc de dégradés et de schémas de nœuds. L\'approche ici est de lui donner un visage. Un portrait unique avec une visière lumineuse donne à la page un sujet et un point focal, et le dégradé chaud derrière fait le travail d\'ambiance qu\'une illustration abstraite rate généralement.',
          ],
        },
      },
      {
        heading: {
          en: 'Splitting the argument from the atmosphere',
          es: 'Separar el argumento de la atmósfera',
          fr: "Séparer l'argumentaire de l'atmosphère",
        },
        paragraphs: {
          en: [
            'The left column carries the actual claims (AI-powered workflow, intelligent AI agents, each with a one-line explanation and a short supporting paragraph), set in a plain, readable weight. The display headline is the atmosphere, and it stays out of the way of the reasoning.',
            'That split is what lets the type be as loud as it is. A wide, geometric, slightly futuristic face is a strong choice that becomes unreadable at paragraph length, so it is confined to four words across the bottom of the frame while the substance is set in something that behaves.',
            'A single white pill CTA anchors the bottom left, sitting against the darkest part of the gradient so it holds the highest contrast on the page. Social links run down the right edge as a vertical rail: present, without competing for the centre.',
          ],
          es: [
            'La columna izquierda lleva las propuestas de valor (flujo de trabajo potenciado por IA, agentes IA inteligentes, cada uno con una explicación de una línea y un párrafo de apoyo), en un peso tipográfico limpio y legible. El titular display es la atmósfera, y se mantiene al margen del razonamiento.',
            'Esa separación es lo que permite que la tipografía sea tan potente. Una fuente ancha, geométrica y ligeramente futurista es una elección potente que se vuelve ilegible en un párrafo, así que se confina a cuatro palabras en la parte inferior del encuadre mientras la sustancia se compone en algo más comedido.',
            'Un solo CTA blanco en forma de pastilla ancla la parte inferior izquierda, situado contra la parte más oscura del degradado para mantener el máximo contraste de la página. Los enlaces sociales discurren por el borde derecho como un carril vertical: presentes, sin competir por el centro.',
          ],
          fr: [
            'La colonne gauche porte les propositions de valeur (workflow alimenté par l\'IA, agents IA intelligents, chacun avec une explication d\'une ligne et un court paragraphe de soutien), dans une graisse lisible et sobre. Le titre display est l\'atmosphère, et il reste à l\'écart du raisonnement.',
            'Cette séparation est ce qui permet à la typographie d\'être aussi forte. Une police large, géométrique et légèrement futuriste est un choix puissant qui devient illisible sur la longueur d\'un paragraphe, elle est donc confinée à quatre mots en bas du cadre tandis que le fond est composé dans quelque chose de plus sage.',
            'Un seul CTA blanc en forme de pilule ancre le coin inférieur gauche, placé contre la partie la plus sombre du dégradé pour conserver le contraste le plus élevé de la page. Les liens sociaux descendent le long du bord droit en rail vertical\u00a0: présents, sans rivaliser pour le centre.',
          ],
        },
      },
    ],
    gallery: [
      {
        image: shot('ai-agent-landing', 'laptop-mockup', {
          en: 'The AI agent hero section shown on a laptop resting on dark rock against a grey backdrop',
          es: 'Sección hero del agente IA mostrada en un portátil sobre roca oscura contra fondo gris',
          fr: 'Section hero d\'agents IA affichée sur un ordinateur portable sur roche sombre sur fond gris',
        }),
        span: 'half',
        aspect: LANDSCAPE,
      },
    ],
    outcome: {
      heading: { en: 'What it produced', es: 'Lo que produjo', fr: 'Ce que cela a produit' },
      paragraphs: {
        en: [
          'A finished first screen: navigation, a two-point benefit column, a display headline, a primary call to action and a social rail, resolved as one composition on a single gradient.',
          'The scope is the honest part of this one. It is a visual exploration of a hero section, useful for what it settles about type pairing, contrast and where to spend a single accent, but not a product design project, and not presented as one.',
        ],
        es: [
          'Una primera pantalla terminada: navegación, una columna de dos beneficios, un titular display, una llamada a la acción principal y un carril social, resueltos como una composición única sobre un solo degradado.',
          'El alcance es la parte honesta de este proyecto. Es una exploración visual de una sección hero, útil por lo que resuelve sobre combinación tipográfica, contraste y dónde emplear un solo acento, pero no es un proyecto de diseño de producto, y no se presenta como tal.',
        ],
        fr: [
          'Un premier écran abouti\u00a0: navigation, une colonne de deux bénéfices, un titre display, un appel à l\'action principal et un rail social, résolus en une seule composition sur un dégradé unique.',
          'Le périmètre est la partie honnête de ce projet. C\'est une exploration visuelle d\'une section hero, utile pour ce qu\'elle résout en matière d\'appariement typographique, de contraste et d\'emploi d\'un seul accent, mais pas un projet de design produit, et pas présenté comme tel.',
        ],
      },
    },
    relatedArticles: ['figma-to-react-handoff', 'ai-coding-tools-client-projects'],
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
