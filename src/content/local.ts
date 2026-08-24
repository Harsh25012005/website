import type { ContentSection, Faq, Localized } from './types'

/**
 * Copy for `/ui-ux-designer-in-ahmedabad`.
 *
 * This is a local landing page, and the line between one of those and a
 * doorway page is entirely whether the content is genuinely about the place.
 * A doorway page is the same copy as `/services` with a city name swapped in;
 * Google has a specific policy against them and a site can be demoted for the
 * pattern rather than for any one page.
 *
 * So everything below is about working *from* Ahmedabad specifically — the
 * meeting-in-person option, the timezone, the kinds of client the city
 * actually has. None of it would make sense with "Surat" pasted over it, which
 * is the test to apply to anything added here.
 *
 * ⚠️  Do not clone this file per city. One local page plus a Google Business
 * Profile is the whole local strategy for a one-person studio; a folder of
 * near-duplicate city pages is the single fastest way to lose the rankings the
 * rest of the site earns.
 */

export const localIntro: Localized<string> = {
  en: 'I’m a freelance UI/UX and product designer based in Ahmedabad, working with founders and teams here in Gujarat and remotely across India and worldwide. Local projects get the option of meeting in person; everything else runs the same way it would for a client three timezones away.',
  es: 'Soy diseñador UI/UX y de producto freelance, con base en Ahmedabad, y trabajo con fundadores y equipos aquí en Gujarat y en remoto por toda la India y el resto del mundo. Los proyectos locales tienen la opción de vernos en persona; todo lo demás funciona igual que lo haría para un cliente a tres husos horarios de distancia.',
  fr: 'Je suis designer UI/UX et produit indépendant, basé à Ahmedabad, et je travaille avec des fondateurs et des équipes ici au Gujarat ainsi qu’à distance partout en Inde et dans le monde. Les projets locaux ont la possibilité d’une rencontre en personne ; tout le reste se déroule exactement comme pour un client situé à trois fuseaux horaires.',
}

export const localSections: ContentSection[] = [
  {
    heading: { en: 'Working with a designer in the same city', es: 'Trabajar con un diseñador en la misma ciudad', fr: 'Travailler avec un designer dans la même ville' },
    paragraphs: {
      en: [
        'Most of my work is remote, and remote works well, but there is a stage in almost every project, usually the first one, where an hour in the same room beats a week of messages. If you are in or near Ahmedabad, that hour is available.',
        'It matters most at the start, when the brief is still forming and the useful conversation is the unstructured one. After that the project runs on shared Figma files and scheduled reviews like any other, because that is what keeps a record of what was decided.',
      ],
      es: [
        'La mayor parte de mi trabajo es en remoto, y el remoto funciona bien, pero en casi todos los proyectos hay una etapa, normalmente la primera, en la que una hora en la misma sala vale más que una semana de mensajes. Si estás en Ahmedabad o cerca, esa hora está disponible.',
        'Importa sobre todo al principio, cuando el brief todavía se está formando y la conversación útil es la que no tiene estructura. A partir de ahí, el proyecto avanza con archivos de Figma compartidos y revisiones programadas, como cualquier otro, porque es lo que deja constancia de lo que se decidió.',
      ],
      fr: [
        'La plus grande partie de mon travail se fait à distance, et le distanciel fonctionne bien, mais il y a dans presque chaque projet une étape, généralement la première, où une heure dans la même pièce vaut mieux qu’une semaine de messages. Si vous êtes à Ahmedabad ou à proximité, cette heure est disponible.',
        'Cela compte surtout au début, quand le brief se dessine encore et que la conversation utile est celle qui n’est pas structurée. Ensuite, le projet avance sur des fichiers Figma partagés et des revues planifiées, comme n’importe quel autre, parce que c’est ce qui garde une trace de ce qui a été décidé.',
      ],
    },
  },
  {
    heading: { en: 'Built around Gujarat’s product and services businesses', es: 'Pensado para las empresas de producto y de servicios de Gujarat', fr: 'Conçu pour les entreprises de produit et de services du Gujarat' },
    paragraphs: {
      en: [
        'Ahmedabad has a lot of IT services companies, a growing set of SaaS products, and a long tail of manufacturing and trading businesses whose websites were built once and never revisited. Those are three very different design problems.',
        'A services company usually needs a site that wins trust before a sales call. A SaaS product needs the interface itself to work. An established business with an ageing site usually needs a redesign that respects the customers it already has rather than a rebrand nobody asked for. The starting point is which of those you are.',
      ],
      es: [
        'Ahmedabad tiene muchas empresas de servicios de IT, un conjunto creciente de productos SaaS y una larga cola de negocios de fabricación y comercio cuyas webs se crearon una vez y nunca se volvieron a tocar. Son tres problemas de diseño muy distintos.',
        'Una empresa de servicios suele necesitar una web que genere confianza antes de una llamada de ventas. Un producto SaaS necesita que la propia interfaz funcione. Un negocio consolidado con una web envejecida suele necesitar un rediseño que respete a los clientes que ya tiene, en lugar de un cambio de marca que nadie pidió. El punto de partida es cuál de esos casos eres.',
      ],
      fr: [
        'Ahmedabad compte beaucoup d’entreprises de services IT, un ensemble croissant de produits SaaS et une longue traîne d’entreprises industrielles et commerciales dont les sites web ont été construits une fois et jamais repris. Ce sont trois problèmes de design très différents.',
        'Une entreprise de services a généralement besoin d’un site qui inspire confiance avant un appel commercial. Un produit SaaS a besoin que l’interface elle-même fonctionne. Une entreprise établie dont le site a vieilli a le plus souvent besoin d’une refonte qui respecte les clients qu’elle a déjà, plutôt que d’un changement de marque que personne n’a demandé. Le point de départ, c’est lequel de ces cas vous êtes.',
      ],
    },
  },
  {
    heading: { en: 'IST hours, and honest about the rest', es: 'Horario IST, y honestidad con lo demás', fr: 'Horaires IST, et honnête sur le reste' },
    paragraphs: {
      en: [
        'Working from Ahmedabad means IST, which lines up cleanly with the rest of India and with clients across the Gulf, and overlaps the European morning. For clients further west the overlap is narrower, and reviews get scheduled rather than assumed.',
        'All work and written communication is in English. Conversations in Gujarati or Hindi are fine, but anything that needs to be a decision goes in writing in English so there is one record everyone on the project can read.',
      ],
      es: [
        'Trabajar desde Ahmedabad significa horario IST, que encaja limpiamente con el resto de la India y con clientes del Golfo, y se solapa con la mañana europea. Para clientes más al oeste el solapamiento es más estrecho, y las revisiones se programan en lugar de darse por supuestas.',
        'Todo el trabajo y la comunicación escrita son en inglés. Las conversaciones en gujarati o hindi no son problema, pero cualquier cosa que deba convertirse en una decisión se pone por escrito en inglés, para que haya un único registro que todo el equipo del proyecto pueda leer.',
      ],
      fr: [
        'Travailler depuis Ahmedabad signifie l’heure IST, qui s’accorde parfaitement avec le reste de l’Inde et avec les clients du Golfe, et recoupe la matinée européenne. Pour les clients plus à l’ouest, le chevauchement est plus étroit, et les revues sont planifiées plutôt que supposées.',
        'Tout le travail et la communication écrite se font en anglais. Les conversations en goudjarati ou en hindi ne posent aucun problème, mais tout ce qui doit devenir une décision est mis par écrit en anglais, afin qu’il existe une seule trace que toute l’équipe du projet puisse lire.',
      ],
    },
  },
]

export const localFaqs: Faq[] = [
  {
    question: { en: 'Can we meet in person in Ahmedabad?', es: '¿Podemos vernos en persona en Ahmedabad?', fr: 'Pouvons-nous nous rencontrer en personne à Ahmedabad ?' },
    answer: {
      en: 'Yes. For clients in and around Ahmedabad an in-person kickoff is usually the fastest way to get a brief settled, and I am happy to meet for reviews at points where it helps. Day-to-day the project still runs through shared Figma files and scheduled calls, because that keeps a written record of what was agreed.',
      es: 'Sí. Para clientes en Ahmedabad y alrededores, un arranque en persona suele ser la forma más rápida de cerrar un brief, y estoy encantado de vernos para revisiones en los momentos en que ayude. En el día a día, el proyecto sigue funcionando con archivos de Figma compartidos y llamadas programadas, porque así queda constancia por escrito de lo que se acordó.',
      fr: 'Oui. Pour les clients à Ahmedabad et dans les environs, un lancement en personne est généralement le moyen le plus rapide de caler un brief, et c’est avec plaisir que je vous rencontre pour des revues aux moments où cela aide. Au quotidien, le projet continue de se dérouler via des fichiers Figma partagés et des appels planifiés, parce que cela garde une trace écrite de ce qui a été convenu.',
    },
  },
  {
    question: {
      en: 'Do you only work with clients in Gujarat?',
      es: '¿Solo trabajas con clientes de Gujarat?',
      fr: 'Travaillez-vous uniquement avec des clients au Gujarat ?',
    },
    answer: {
      en: 'No. Ahmedabad is where I am based, not the limit of who I work with. Most projects are remote, with clients elsewhere in India and worldwide, and the process is the same either way. The only thing being local changes is whether meeting in person is an option.',
      es: 'No. Ahmedabad es donde tengo mi base, no el límite de con quién trabajo. La mayoría de los proyectos son en remoto, con clientes en otras partes de la India y de todo el mundo, y el proceso es el mismo en cualquier caso. Lo único que cambia por ser local es si vernos en persona es una opción.',
      fr: 'Non. Ahmedabad est l’endroit où je suis basé, pas la limite des personnes avec qui je travaille. La plupart des projets sont à distance, avec des clients ailleurs en Inde et dans le monde, et le processus est le même dans les deux cas. La seule chose que le fait d’être local change, c’est de savoir si une rencontre en personne est une option.',
    },
  },
  {
    question: { en: 'Do you work with agencies as well as direct clients?', es: '¿Trabajas con agencias además de con clientes directos?', fr: 'Travaillez-vous avec des agences en plus des clients directs ?' },
    answer: {
      en: 'Yes. There are a lot of IT services and development agencies in Ahmedabad, and white-label design work or overflow capacity on a client project is a normal engagement. Whether the work is credited or stays under your name is your call and is agreed before it starts.',
      es: 'Sí. En Ahmedabad hay muchas agencias de servicios de IT y de desarrollo, y el diseño en marca blanca o la capacidad adicional en un proyecto de cliente son encargos habituales. Que el trabajo lleve mi crédito o se quede bajo tu nombre lo decides tú, y se acuerda antes de empezar.',
      fr: 'Oui. Il y a beaucoup d’agences de services IT et de développement à Ahmedabad, et le design en marque blanche ou le renfort ponctuel sur un projet client sont des missions courantes. Que le travail soit crédité ou reste sous votre nom, c’est votre choix, et cela se convient avant de commencer.',
    },
  },
  {
    question: { en: 'What languages do you work in?', es: '¿En qué idiomas trabajas?', fr: 'Dans quelles langues travaillez-vous ?' },
    answer: {
      en: 'English for all work, files and written communication. Calls and meetings can be in English, Hindi or Gujarati, but briefs, feedback and anything that amounts to a decision are confirmed in writing in English so nothing depends on what someone remembers from a conversation.',
      es: 'Inglés para todo el trabajo, los archivos y la comunicación escrita. Las llamadas y reuniones pueden ser en inglés, hindi o gujarati, pero los briefs, el feedback y cualquier cosa que equivalga a una decisión se confirman por escrito en inglés, para que nada dependa de lo que alguien recuerde de una conversación.',
      fr: 'L’anglais pour tout le travail, les fichiers et la communication écrite. Les appels et les réunions peuvent se faire en anglais, en hindi ou en goudjarati, mais les briefs, les retours et tout ce qui équivaut à une décision sont confirmés par écrit en anglais, afin que rien ne dépende de ce que quelqu’un retient d’une conversation.',
    },
  },
]
