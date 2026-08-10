import type { Localized } from './types'

/**
 * Template privacy policy. It is written for the shape this site actually has
 * — a static portfolio with a mailto contact form and no analytics — but it is
 * a starting point, not legal advice. Review it before publishing, and update
 * `lastUpdated` whenever the substance changes.
 */
export const lastUpdated = '2026-08-10'

export const privacyIntro: Localized<string> = {
  en: 'This page explains what personal data this site collects, why it is processed, and what your rights are under the EU General Data Protection Regulation (Regulation (EU) 2016/679, “GDPR”).',
  cs: 'Tato stránka vysvětluje, jaké osobní údaje web shromažďuje, proč je zpracovává a jaká máte práva podle obecného nařízení o ochraně osobních údajů (nařízení (EU) 2016/679, „GDPR“).',
}

export const privacySections: {
  heading: Localized<string>
  paragraphs: Localized<string[]>
}[] = [
  {
    heading: { en: 'Data controller', cs: 'Správce údajů' },
    paragraphs: {
      en: [
        'The controller is the owner of this site, an independent designer. The simplest way to get in touch about anything on this page is by email — the address is in the footer.',
      ],
      cs: [
        'Správcem je provozovatel tohoto webu, nezávislý designér. Nejjednodušší cesta, jak se ozvat k čemukoli na této stránce, je e-mail uvedený v patičce.',
      ],
    },
  },
  {
    heading: { en: 'What is collected', cs: 'Jaké údaje se shromažďují' },
    paragraphs: {
      en: [
        'The contact form does not transmit anything to this site. Submitting it opens your own email client with the message pre-filled, so the content reaches the recipient the same way any other email would — and no copy is stored here.',
        'If you send an email, the message and address are retained only for as long as needed to handle the enquiry and any resulting work.',
      ],
      cs: [
        'Kontaktní formulář na tento web nic neodesílá. Odesláním se otevře váš e-mailový klient s předvyplněnou zprávou, takže obsah dorazí adresátovi stejně jako jakýkoli jiný e-mail — a zde se neukládá žádná kopie.',
        'Pokud napíšete e-mail, zpráva a adresa se uchovávají pouze po dobu nutnou k vyřízení poptávky a případné navazující práce.',
      ],
    },
  },
  {
    heading: { en: 'Hosting and logs', cs: 'Hosting a logy' },
    paragraphs: {
      en: [
        'The site is served by a hosting provider that may keep short-lived technical logs — IP address, user agent, requested URL — for security and reliability. These are standard server logs, not analytics, and are not used to build a profile of you.',
      ],
      cs: [
        'Web provozuje poskytovatel hostingu, který může uchovávat krátkodobé technické logy — IP adresu, user agent, požadovanou URL — z důvodu bezpečnosti a spolehlivosti. Jde o běžné serverové logy, nikoli analytiku, a neslouží k vytváření profilu.',
      ],
    },
  },
  {
    heading: { en: 'Cookies and analytics', cs: 'Cookies a analytika' },
    paragraphs: {
      en: [
        'This site sets no cookies and runs no analytics or tracking scripts. There is nothing to consent to, which is why you are not being asked.',
        'If analytics are added later, this page will be updated first and a consent mechanism added where the law requires one.',
      ],
      cs: [
        'Tento web nenastavuje žádné cookies a nepoužívá analytiku ani sledovací skripty. Není k čemu dávat souhlas — proto se na nic neptáme.',
        'Pokud by analytika přibyla, tato stránka bude aktualizována dřív a tam, kde to zákon vyžaduje, bude doplněn souhlasový mechanismus.',
      ],
    },
  },
  {
    heading: { en: 'Third parties', cs: 'Třetí strany' },
    paragraphs: {
      en: [
        'Fonts are served from the site’s own domain rather than a font CDN, so loading a page does not disclose your visit to a third party.',
        'Outbound links to social platforms are ordinary links — those services apply their own policies once you follow them.',
      ],
      cs: [
        'Písma se načítají z vlastní domény webu, nikoli z font CDN, takže načtením stránky se vaše návštěva nesděluje třetí straně.',
        'Odkazy na sociální sítě jsou běžné odkazy — po jejich otevření se uplatní zásady příslušných služeb.',
      ],
    },
  },
  {
    heading: { en: 'Your rights', cs: 'Vaše práva' },
    paragraphs: {
      en: [
        'Under the GDPR you can request access to your data, correction, erasure, restriction of processing, portability, and you can object to processing. Email is enough to exercise any of these.',
        'You also have the right to lodge a complaint with your local supervisory authority if you believe your data has been mishandled.',
      ],
      cs: [
        'Podle GDPR můžete požádat o přístup k údajům, jejich opravu, výmaz, omezení zpracování, přenositelnost a proti zpracování můžete vznést námitku. K uplatnění stačí e-mail.',
        'Máte také právo podat stížnost u místního dozorového úřadu, pokud se domníváte, že s vašimi údaji bylo nakládáno nesprávně.',
      ],
    },
  },
  {
    heading: { en: 'Changes', cs: 'Změny' },
    paragraphs: {
      en: [
        'If this policy changes, the revised version is published here with a new date at the top. Material changes will not be applied retroactively to enquiries already handled.',
      ],
      cs: [
        'Pokud se tyto zásady změní, upravená verze bude zveřejněna zde s novým datem v záhlaví. Podstatné změny se nebudou zpětně vztahovat na již vyřízené poptávky.',
      ],
    },
  },
]
