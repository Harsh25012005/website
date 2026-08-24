import { site } from './site'
import type { LegalDocument } from './types'

/* ────────────────────────────────────────────────────────────────────────────
 * ⚠️  THIS IS NOT LEGAL ADVICE, AND IT WAS NOT WRITTEN BY A LAWYER.  ⚠️
 *
 * What follows is an accurate, plain-English description of what this site
 * actually does with data, and of how engagements are actually run. Every
 * factual claim in the privacy notice was written against the code:
 *
 *   - no analytics, tag manager, pixel or third-party script is loaded
 *     anywhere in `src/app/layout.tsx` or below it;
 *   - the site sets no cookies and writes nothing to local or session storage;
 *   - `app/api/contact/route.ts` sends the form straight to an inbox through
 *     Resend and stores nothing;
 *   - that route keeps caller IPs in a per-instance in-memory map for a
 *     ten-minute rate-limit window and never writes them anywhere.
 *
 * If any of those change — the first analytics snippet, the first cookie
 * banner, the first database — this file is wrong the same day, and a privacy
 * notice that describes a site you no longer run is worse than none.
 *
 * Before relying on these as binding documents, have someone qualified read
 * them against the DPDP Act 2023 and, if you take clients in the EU or UK, the
 * GDPR. The terms in particular assert ownership, liability and termination
 * positions that are yours to set, not mine to assume.
 * ──────────────────────────────────────────────────────────────────────────── */

/** Bump only when the wording of a document below actually changes. */
const LEGAL_UPDATED = '2026-08-11'

export const privacyPolicy: LegalDocument = {
  slug: 'privacy-policy',
  title: { en: 'Privacy policy', es: 'Política de privacidad', fr: 'Politique de confidentialité' },
  metaTitle: 'Privacy Policy',
  metaDescription:
    'What this site collects and what it does not: no analytics, no cookies, no tracking. Only the contact form, sent straight to an inbox and stored nowhere else.',
  heading: { en: 'Privacy policy', es: 'Política de privacidad', fr: 'Politique de confidentialité' },
  updated: LEGAL_UPDATED,
  intro: {
    en: [
      'This site collects almost nothing, and this page says exactly what "almost" covers. It applies to this website only, not to project work carried out under a separate agreement.',
      `Any question about it, or any request to delete something you have sent, goes to ${site.email} and is answered by me personally.`,
    ],
    es: [
      'Este sitio recopila casi nada, y esta página dice exactamente qué cubre ese «casi». Se aplica únicamente a este sitio web, no al trabajo de proyectos realizado bajo un acuerdo aparte.',
      `Cualquier pregunta al respecto, o cualquier solicitud para borrar algo que hayas enviado, se dirige a ${site.email} y la respondo yo personalmente.`,
    ],
    fr: [
      'Ce site ne collecte presque rien, et cette page dit exactement ce que recouvre ce « presque ». Elle s’applique uniquement à ce site web, et non au travail de projet réalisé dans le cadre d’un accord distinct.',
      `Toute question à ce sujet, ou toute demande de suppression de quelque chose que vous avez envoyé, est à adresser à ${site.email} et j’y réponds personnellement.`,
    ],
  },
  sections: [
    {
      heading: { en: 'What this site does not do', es: 'Lo que este sitio no hace', fr: 'Ce que ce site ne fait pas' },
      paragraphs: {
        en: [
          'There is no analytics on this site. No Google Analytics, no tag manager, no advertising pixel, no heatmap or session recording, and no third-party script of any kind that watches what you do here.',
          'The site sets no cookies and stores nothing in your browser. That is why there is no cookie banner: there is nothing to consent to, and a banner asking permission for consent it does not need would be theatre.',
          'Nothing you do here is used to build a profile, and nothing is sold, rented or shared with anyone for marketing. There is no mailing list to be added to.',
        ],
        es: [
          'En este sitio no hay analítica. Ni Google Analytics, ni gestor de etiquetas, ni píxel publicitario, ni mapa de calor o grabación de sesión, ni script de terceros de ningún tipo que observe lo que haces aquí.',
          'El sitio no coloca cookies ni almacena nada en tu navegador. Por eso no hay banner de cookies: no hay nada que consentir, y un banner que pide permiso para un consentimiento que no necesita sería puro teatro.',
          'Nada de lo que haces aquí se usa para construir un perfil, y nada se vende, se alquila ni se comparte con nadie con fines de marketing. No hay ninguna lista de correo a la que te vayan a añadir.',
        ],
        fr: [
          'Il n’y a aucune analytique sur ce site. Pas de Google Analytics, pas de gestionnaire de balises, pas de pixel publicitaire, pas de heatmap ni d’enregistrement de session, et aucun script tiers d’aucune sorte qui observe ce que vous faites ici.',
          'Le site ne dépose aucun cookie et ne stocke rien dans votre navigateur. C’est pourquoi il n’y a pas de bandeau de cookies : il n’y a rien à consentir, et un bandeau demandant l’autorisation d’un consentement dont il n’a pas besoin ne serait que du théâtre.',
          'Rien de ce que vous faites ici ne sert à construire un profil, et rien n’est vendu, loué ni partagé avec qui que ce soit à des fins marketing. Il n’y a aucune liste de diffusion à laquelle vous seriez ajouté.',
        ],
      },
    },
    {
      heading: { en: 'The contact form', es: 'El formulario de contacto', fr: 'Le formulaire de contact' },
      paragraphs: {
        en: [
          'If you send the contact form, it submits your name, your email address, an optional subject and your message. That is composed into an email and delivered to my inbox through Resend, an email delivery provider. It is not written to a database, because this site does not have one.',
          'Your email address is set as the reply-to on that message, so replying to you is a single click. Your message then lives in my mailbox in the same way any email you sent me directly would, for as long as the enquiry is useful — and you can ask me to delete it at any time.',
          'The form also carries a hidden field that humans never see. Anything filled into it identifies the submission as automated, and it is discarded without being sent. If you use a screen reader or an unusual browser and this ever affects you, email me directly instead.',
        ],
        es: [
          'Si envías el formulario de contacto, este transmite tu nombre, tu dirección de correo electrónico, un asunto opcional y tu mensaje. Con eso se compone un correo que se entrega en mi bandeja de entrada a través de Resend, un proveedor de envío de correo. No se escribe en ninguna base de datos, porque este sitio no tiene ninguna.',
          'Tu dirección de correo se establece como reply-to en ese mensaje, así que responderte es un solo clic. Tu mensaje vive después en mi buzón igual que lo haría cualquier correo que me enviaras directamente, durante el tiempo que la consulta resulte útil, y puedes pedirme que lo borre en cualquier momento.',
          'El formulario también incluye un campo oculto que las personas nunca ven. Cualquier cosa que se rellene en él identifica el envío como automatizado, y se descarta sin llegar a enviarse. Si usas un lector de pantalla o un navegador poco habitual y esto llega a afectarte, escríbeme directamente por correo.',
        ],
        fr: [
          'Si vous envoyez le formulaire de contact, il transmet votre nom, votre adresse e-mail, un objet facultatif et votre message. Ces éléments sont assemblés en un e-mail et remis dans ma boîte de réception via Resend, un prestataire d’acheminement d’e-mails. Rien n’est écrit dans une base de données, car ce site n’en possède pas.',
          'Votre adresse e-mail est définie comme adresse de réponse (reply-to) sur ce message, de sorte que vous répondre ne demande qu’un clic. Votre message vit ensuite dans ma boîte aux lettres de la même manière que n’importe quel e-mail que vous m’auriez envoyé directement, aussi longtemps que la demande reste utile — et vous pouvez me demander de le supprimer à tout moment.',
          'Le formulaire comporte aussi un champ caché que les humains ne voient jamais. Tout ce qui y est saisi identifie l’envoi comme automatisé, et celui-ci est rejeté sans être transmis. Si vous utilisez un lecteur d’écran ou un navigateur inhabituel et que cela vous affecte un jour, écrivez-moi plutôt directement par e-mail.',
        ],
      },
    },
    {
      heading: { en: 'Rate limiting and IP addresses', es: 'Limitación de frecuencia y direcciones IP', fr: 'Limitation de fréquence et adresses IP' },
      paragraphs: {
        en: [
          'To stop a script flooding the inbox, the contact endpoint counts how many submissions have arrived from a given IP address in the last ten minutes. Those addresses are held in the server process’s memory, they are never written to disk or to a database, and they disappear when the window passes or the server restarts.',
          'They are not connected to anything else, not used to identify anyone, and not available to me — I never see that list.',
        ],
        es: [
          'Para evitar que un script inunde la bandeja de entrada, el endpoint de contacto cuenta cuántos envíos han llegado desde una IP dada en los últimos diez minutos. Esas direcciones se guardan en la memoria del proceso del servidor, nunca se escriben en disco ni en una base de datos, y desaparecen cuando pasa la ventana o el servidor se reinicia.',
          'No están conectadas con nada más, no se usan para identificar a nadie y no están a mi disposición: yo nunca veo esa lista.',
        ],
        fr: [
          'Pour empêcher un script d’inonder la boîte de réception, le point d’accès du formulaire de contact compte le nombre d’envois reçus depuis une adresse IP donnée au cours des dix dernières minutes. Ces adresses sont conservées dans la mémoire du processus serveur, ne sont jamais écrites sur disque ni dans une base de données, et disparaissent lorsque la fenêtre s’écoule ou que le serveur redémarre.',
          'Elles ne sont reliées à rien d’autre, ne servent à identifier personne et ne me sont pas accessibles — je ne vois jamais cette liste.',
        ],
      },
    },
    {
      heading: { en: 'What the host and other services see', es: 'Lo que ven el alojamiento y otros servicios', fr: 'Ce que voient l’hébergeur et les autres services' },
      paragraphs: {
        en: [
          'Like any website, this one is served by a hosting provider, which keeps standard server logs — the requested URL, a timestamp, an IP address, a user agent — for its own operational and security purposes. That happens for every site on the internet and it is outside my control, though it is worth stating rather than implying it does not happen.',
          'Resend processes the contents of a submitted contact form in order to deliver it, under its own privacy terms. This site is also verified in Google Search Console, which reports aggregate search statistics — which queries showed the site, how often it was clicked — and never identifies an individual visitor.',
        ],
        es: [
          'Como cualquier sitio web, este lo sirve un proveedor de alojamiento, que conserva registros de servidor estándar —la URL solicitada, una marca de tiempo, una dirección IP, un user agent— para sus propios fines operativos y de seguridad. Eso ocurre en todos los sitios de internet y está fuera de mi control, aunque conviene decirlo en lugar de dar a entender que no sucede.',
          'Resend procesa el contenido de un formulario de contacto enviado con el fin de entregarlo, bajo sus propias condiciones de privacidad. Este sitio también está verificado en Google Search Console, que informa de estadísticas de búsqueda agregadas —qué consultas mostraron el sitio, con qué frecuencia se hizo clic— y nunca identifica a un visitante individual.',
        ],
        fr: [
          'Comme tout site web, celui-ci est servi par un hébergeur, qui conserve des journaux de serveur standard — l’URL demandée, un horodatage, une adresse IP, un user agent — à ses propres fins d’exploitation et de sécurité. Cela se produit pour tous les sites d’internet et échappe à mon contrôle, mais il vaut mieux le dire que de laisser entendre que cela n’arrive pas.',
          'Resend traite le contenu d’un formulaire de contact envoyé afin de l’acheminer, selon ses propres conditions de confidentialité. Ce site est également vérifié dans Google Search Console, qui rend compte de statistiques de recherche agrégées — quelles requêtes ont affiché le site, à quelle fréquence il a été cliqué — et n’identifie jamais un visiteur individuel.',
        ],
      },
    },
    {
      heading: { en: 'Your rights, and how to use them', es: 'Tus derechos, y cómo ejercerlos', fr: 'Vos droits, et comment les exercer' },
      paragraphs: {
        en: [
          'Because the only personal data this site receives is what you deliberately type into the contact form, exercising your rights over it is straightforward: email me and ask what I hold, ask for a copy, ask for a correction, or ask me to delete it. I will do it and confirm when it is done.',
          `Under India’s Digital Personal Data Protection Act 2023 you have those rights by law, and if you are in the EU or UK the GDPR gives you equivalent ones. Either way the practical route is the same address: ${site.email}.`,
        ],
        es: [
          'Como los únicos datos personales que este sitio recibe son los que escribes deliberadamente en el formulario de contacto, ejercer tus derechos sobre ellos es sencillo: escríbeme y pregunta qué tengo, pide una copia, pide una corrección o pídeme que los borre. Lo haré y te confirmaré cuando esté hecho.',
          `Con arreglo a la Ley de Protección de Datos Personales Digitales de la India de 2023 tienes esos derechos por ley, y si estás en la UE o el Reino Unido el RGPD te otorga otros equivalentes. En cualquier caso, la vía práctica es la misma dirección: ${site.email}.`,
        ],
        fr: [
          'Comme les seules données personnelles que ce site reçoit sont celles que vous saisissez délibérément dans le formulaire de contact, exercer vos droits dessus est simple : écrivez-moi et demandez ce que je détiens, demandez-en une copie, demandez une correction, ou demandez-moi de les supprimer. Je le ferai et vous confirmerai une fois que ce sera fait.',
          `En vertu de la loi indienne de 2023 sur la protection des données personnelles numériques (Digital Personal Data Protection Act 2023), vous disposez de ces droits par la loi, et si vous êtes dans l’UE ou au Royaume-Uni, le RGPD vous en accorde d’équivalents. Dans les deux cas, la voie pratique est la même adresse : ${site.email}.`,
        ],
      },
    },
    {
      heading: { en: 'Children, and changes to this page', es: 'Menores, y cambios en esta página', fr: 'Les mineurs, et les modifications de cette page' },
      paragraphs: {
        en: [
          'This is a professional portfolio offering services to businesses. It is not directed at children and does not knowingly collect anything from them.',
          'If this site ever adds analytics, a cookie, an embedded third-party service or anything else that changes the description above, this page changes on the same day and the date at the top moves with it. The date is not touched for anything else.',
        ],
        es: [
          'Este es un portafolio profesional que ofrece servicios a empresas. No está dirigido a menores y no recopila conscientemente nada de ellos.',
          'Si este sitio llega a añadir analítica, una cookie, un servicio de terceros incrustado o cualquier otra cosa que cambie la descripción anterior, esta página cambia el mismo día y la fecha de la parte superior se mueve con ella. La fecha no se toca por ninguna otra cosa.',
        ],
        fr: [
          'Il s’agit d’un portfolio professionnel proposant des services aux entreprises. Il ne s’adresse pas aux enfants et ne collecte sciemment rien les concernant.',
          'Si ce site venait à ajouter de l’analytique, un cookie, un service tiers intégré ou toute autre chose qui modifie la description ci-dessus, cette page change le jour même et la date en haut évolue avec elle. La date n’est modifiée pour rien d’autre.',
        ],
      },
    },
  ],
}

export const termsOfService: LegalDocument = {
  slug: 'terms',
  title: { en: 'Terms', es: 'Condiciones', fr: 'Conditions' },
  metaTitle: 'Terms of Use and Engagement',
  metaDescription:
    'Terms for using this website, and the standard terms that project work runs under: ownership, payment, revisions, portfolio rights and the limits of what is promised.',
  heading: { en: 'Terms', es: 'Condiciones', fr: 'Conditions' },
  updated: LEGAL_UPDATED,
  intro: {
    en: [
      'Two things live on this page: the terms for using this website, and the standard positions that project work runs under.',
      'The second half is a summary, not the contract. Every engagement is governed by its own written scope and quote, and where that document and this page disagree, the signed one wins.',
    ],
    es: [
      'En esta página conviven dos cosas: las condiciones de uso de este sitio web y las posiciones estándar bajo las que se desarrolla el trabajo de proyectos.',
      'La segunda mitad es un resumen, no el contrato. Cada encargo se rige por su propio alcance y presupuesto por escrito, y donde ese documento y esta página no coincidan, prevalece el que está firmado.',
    ],
    fr: [
      'Deux choses cohabitent sur cette page : les conditions d’utilisation de ce site web et les positions standard sous lesquelles se déroule le travail de projet.',
      'La seconde moitié est un résumé, pas le contrat. Chaque mission est régie par son propre périmètre et devis écrit, et là où ce document et cette page divergent, c’est le document signé qui l’emporte.',
    ],
  },
  sections: [
    {
      heading: { en: 'Using this website', es: 'Uso de este sitio web', fr: 'Utilisation de ce site web' },
      paragraphs: {
        en: [
          `The writing, design, code, images and case studies on this site belong to ${site.name}. You are welcome to read, quote and link to any of it with attribution. Republishing a page or an article wholesale, or presenting the work shown here as your own, is not covered by that.`,
          'The case studies describe real projects, several of them self-initiated concept work, and each one says which it is. Nothing on this site is a guarantee of a particular result for a different project — a portfolio shows what was done, not what will happen next time.',
        ],
        es: [
          `Los textos, el diseño, el código, las imágenes y los casos de estudio de este sitio pertenecen a ${site.name}. Puedes leer, citar y enlazar cualquier parte con atribución. Volver a publicar una página o un artículo íntegramente, o presentar el trabajo aquí mostrado como propio, no queda amparado por eso.`,
          'Los casos de estudio describen proyectos reales, varios de ellos trabajo conceptual por iniciativa propia, y cada uno indica cuál es. Nada de este sitio es una garantía de un resultado concreto para un proyecto distinto: un portafolio muestra lo que se hizo, no lo que ocurrirá la próxima vez.',
        ],
        fr: [
          `Les textes, le design, le code, les images et les études de cas de ce site appartiennent à ${site.name}. Vous êtes libre de les lire, de les citer et d’y faire un lien avec attribution. Republier une page ou un article dans son intégralité, ou présenter comme vôtre le travail montré ici, n’est pas couvert par cela.`,
          'Les études de cas décrivent des projets réels, dont plusieurs sont des travaux conceptuels menés de ma propre initiative, et chacune précise ce qu’elle est. Rien sur ce site n’est une garantie d’un résultat particulier pour un autre projet — un portfolio montre ce qui a été fait, pas ce qui se produira la prochaine fois.',
        ],
      },
    },
    {
      heading: { en: 'Scope, quotes and changes', es: 'Alcance, presupuestos y cambios', fr: 'Périmètre, devis et changements' },
      paragraphs: {
        en: [
          'Work is quoted as a fixed price against a written scope agreed before it starts. That document lists what is included, what is explicitly excluded, the phases, the review points and the payment milestones.',
          'Anything outside the agreed scope is a change to both the scope and the price, recorded in writing before the work continues. This cuts both ways: it protects you from an invoice you did not expect, and it protects the project from growing quietly until nobody can say what was agreed.',
        ],
        es: [
          'El trabajo se presupuesta como un precio cerrado frente a un alcance por escrito acordado antes de empezar. Ese documento enumera qué se incluye, qué queda explícitamente excluido, las fases, los puntos de revisión y los hitos de pago.',
          'Cualquier cosa fuera del alcance acordado es un cambio tanto del alcance como del precio, registrado por escrito antes de que el trabajo continúe. Esto funciona en ambos sentidos: te protege de una factura que no esperabas, y protege al proyecto de crecer en silencio hasta que nadie pueda decir qué se acordó.',
        ],
        fr: [
          'Le travail est chiffré comme un prix fixe correspondant à un périmètre écrit convenu avant le début. Ce document énumère ce qui est inclus, ce qui est explicitement exclu, les phases, les points de revue et les jalons de paiement.',
          'Tout ce qui sort du périmètre convenu constitue un changement à la fois du périmètre et du prix, consigné par écrit avant que le travail se poursuive. Cela joue dans les deux sens : cela vous protège d’une facture que vous n’attendiez pas, et cela protège le projet de grossir en silence jusqu’à ce que plus personne ne puisse dire ce qui avait été convenu.',
        ],
      },
    },
    {
      heading: { en: 'Payment', es: 'Pago', fr: 'Paiement' },
      paragraphs: {
        en: [
          'Payment is split across the milestones set out in the scope, rather than collected in full up front or in full on delivery. The schedule is written down before work starts.',
          'Third-party costs are yours and are billed to you directly by whoever provides them — platform subscriptions such as Webflow or Framer, hosting, domains, licensed fonts and stock imagery. I do not resell them or hold client accounts, and nothing you pay for should be locked behind an account of mine.',
        ],
        es: [
          'El pago se reparte entre los hitos establecidos en el alcance, en lugar de cobrarse íntegro por adelantado o íntegro a la entrega. El calendario se deja por escrito antes de que empiece el trabajo.',
          'Los costes de terceros son tuyos y te los factura directamente quien los proporciona: suscripciones de plataformas como Webflow o Framer, alojamiento, dominios, fuentes con licencia e imágenes de stock. No los revendo ni mantengo cuentas de clientes, y nada de lo que pagas debería quedar bloqueado tras una cuenta mía.',
        ],
        fr: [
          'Le paiement est réparti sur les jalons définis dans le périmètre, plutôt que perçu en totalité d’avance ou en totalité à la livraison. L’échéancier est consigné par écrit avant le début du travail.',
          'Les coûts de tiers sont les vôtres et vous sont facturés directement par ceux qui les fournissent — abonnements à des plateformes comme Webflow ou Framer, hébergement, noms de domaine, polices sous licence et images de banque. Je ne les revends pas et ne détiens pas de comptes clients, et rien de ce que vous payez ne devrait être verrouillé derrière un compte m’appartenant.',
        ],
      },
    },
    {
      heading: { en: 'Ownership of the work', es: 'Propiedad del trabajo', fr: 'Propriété du travail' },
      paragraphs: {
        en: [
          'On final payment, the deliverables produced for you are yours: the design files, the source code in your repository, and the built site in your own platform account. There is no licence to keep paying and no bespoke framework you are tied to.',
          'Two things stay with me. General knowledge, methods and reusable non-client-specific components are not transferred — they are how the next project gets built. And unless we agree otherwise in writing, I keep the right to show the work in this portfolio and in professional profiles. If a project is confidential, say so at the brief stage and it is excluded.',
        ],
        es: [
          'Con el pago final, los entregables producidos para ti son tuyos: los archivos de diseño, el código fuente en tu repositorio y el sitio construido en tu propia cuenta de plataforma. No hay ninguna licencia que haya que seguir pagando ni ningún framework a medida al que quedes atado.',
          'Dos cosas se quedan conmigo. El conocimiento general, los métodos y los componentes reutilizables no específicos de un cliente no se transfieren: son la forma en que se construye el siguiente proyecto. Y, salvo que acordemos otra cosa por escrito, conservo el derecho a mostrar el trabajo en este portafolio y en perfiles profesionales. Si un proyecto es confidencial, dilo en la fase de brief y queda excluido.',
        ],
        fr: [
          'Au paiement final, les livrables produits pour vous sont les vôtres : les fichiers de design, le code source dans votre dépôt et le site construit dans votre propre compte de plateforme. Il n’y a aucune licence à continuer de payer ni aucun framework sur mesure auquel vous seriez lié.',
          'Deux choses restent avec moi. Les connaissances générales, les méthodes et les composants réutilisables non spécifiques à un client ne sont pas transférés — c’est avec eux que se construit le projet suivant. Et sauf accord écrit contraire, je conserve le droit de montrer le travail dans ce portfolio et sur des profils professionnels. Si un projet est confidentiel, dites-le à l’étape du brief et il est exclu.',
        ],
      },
    },
    {
      heading: { en: 'What you provide', es: 'Lo que aportas tú', fr: 'Ce que vous fournissez' },
      paragraphs: {
        en: [
          'Projects depend on content, access and feedback arriving when they are needed. Copy, images, brand assets, logins and approvals are yours to supply, and a timeline assumes they arrive roughly on the dates the scope names.',
          'You confirm you have the right to use anything you hand over — images, fonts, copy, trademarks. I design and build with what I am given, and I cannot verify the licensing behind a client’s own assets.',
        ],
        es: [
          'Los proyectos dependen de que el contenido, los accesos y el feedback lleguen cuando se necesitan. Los textos, las imágenes, los recursos de marca, las credenciales de acceso y las aprobaciones te corresponde aportarlos, y un calendario da por hecho que llegan aproximadamente en las fechas que indica el alcance.',
          'Confirmas que tienes derecho a usar todo lo que entregas: imágenes, fuentes, textos, marcas registradas. Yo diseño y construyo con lo que se me da, y no puedo verificar las licencias que hay detrás de los propios recursos de un cliente.',
        ],
        fr: [
          'Les projets dépendent de l’arrivée du contenu, des accès et des retours au moment où ils sont nécessaires. Les textes, les images, les éléments de marque, les identifiants de connexion et les validations vous reviennent à fournir, et un calendrier suppose qu’ils arrivent à peu près aux dates que nomme le périmètre.',
          'Vous confirmez avoir le droit d’utiliser tout ce que vous transmettez — images, polices, textes, marques déposées. Je conçois et construis avec ce qui m’est fourni, et je ne peux pas vérifier les licences derrière les propres ressources d’un client.',
        ],
      },
    },
    {
      heading: { en: 'What is and is not promised', es: 'Lo que se promete y lo que no', fr: 'Ce qui est promis et ce qui ne l’est pas' },
      paragraphs: {
        en: [
          'The work is carried out with reasonable professional skill and care, and a build is tested across current browsers on desktop and mobile before it is delivered. If something delivered does not work as agreed, tell me and I will fix it.',
          'What cannot be promised is a business outcome. Nobody can guarantee a search ranking, a conversion rate, a revenue figure or the behaviour of a third-party platform, and any supplier who does is guessing. Liability is limited to the fees paid for the piece of work concerned.',
        ],
        es: [
          'El trabajo se realiza con una destreza y un cuidado profesionales razonables, y un desarrollo se prueba en los navegadores actuales en escritorio y móvil antes de entregarse. Si algo entregado no funciona como se acordó, dímelo y lo arreglaré.',
          'Lo que no se puede prometer es un resultado de negocio. Nadie puede garantizar una posición en buscadores, una tasa de conversión, una cifra de ingresos o el comportamiento de una plataforma de terceros, y cualquier proveedor que lo haga está adivinando. La responsabilidad se limita a los honorarios pagados por el trabajo en cuestión.',
        ],
        fr: [
          'Le travail est réalisé avec un savoir-faire et un soin professionnels raisonnables, et une réalisation est testée sur les navigateurs actuels, sur ordinateur et sur mobile, avant d’être livrée. Si quelque chose de livré ne fonctionne pas comme convenu, dites-le-moi et je le corrigerai.',
          'Ce qui ne peut pas être promis, c’est un résultat commercial. Personne ne peut garantir un classement dans les moteurs de recherche, un taux de conversion, un chiffre de revenus ou le comportement d’une plateforme tierce, et tout prestataire qui le fait ne fait que deviner. La responsabilité est limitée aux honoraires payés pour le travail concerné.',
        ],
      },
    },
    {
      heading: { en: 'Ending an engagement, and which law applies', es: 'Poner fin a un encargo, y qué ley se aplica', fr: 'Mettre fin à une mission, et quel droit s’applique' },
      paragraphs: {
        en: [
          'Either side can end a project in writing. Work completed and phases already begun are payable up to that point, and everything finished and paid for is handed over — files, code and access — rather than held.',
          `These terms and any engagement under them are governed by the laws of India, with the courts of Ahmedabad, Gujarat having jurisdiction. Anything unclear here is better raised before a project than after: ${site.email}.`,
        ],
        es: [
          'Cualquiera de las partes puede poner fin a un proyecto por escrito. El trabajo completado y las fases ya iniciadas son pagaderos hasta ese punto, y todo lo terminado y pagado se entrega —archivos, código y accesos— en lugar de retenerse.',
          `Estas condiciones y cualquier encargo amparado por ellas se rigen por las leyes de la India, y son competentes los tribunales de Ahmedabad, Gujarat. Cualquier cosa que aquí no quede clara es mejor plantearla antes de un proyecto que después: ${site.email}.`,
        ],
        fr: [
          'Chacune des parties peut mettre fin à un projet par écrit. Le travail achevé et les phases déjà entamées sont dus jusqu’à ce point, et tout ce qui est terminé et payé est remis — fichiers, code et accès — plutôt que retenu.',
          `Les présentes conditions et toute mission conclue en vertu de celles-ci sont régies par le droit indien, les tribunaux d’Ahmedabad, au Gujarat, étant compétents. Tout point obscur ici vaut mieux d’être soulevé avant un projet qu’après : ${site.email}.`,
        ],
      },
    },
  ],
}

export const legalDocuments: LegalDocument[] = [privacyPolicy, termsOfService]
