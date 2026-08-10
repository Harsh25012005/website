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
}

export const localSections: ContentSection[] = [
  {
    heading: { en: 'Working with a designer in the same city' },
    paragraphs: {
      en: [
        'Most of my work is remote, and remote works well — but there is a stage in almost every project, usually the first one, where an hour in the same room beats a week of messages. If you are in or near Ahmedabad, that hour is available.',
        'It matters most at the start, when the brief is still forming and the useful conversation is the unstructured one. After that the project runs on shared Figma files and scheduled reviews like any other, because that is what keeps a record of what was decided.',
      ],
    },
  },
  {
    heading: { en: 'Built around Gujarat’s product and services businesses' },
    paragraphs: {
      en: [
        'Ahmedabad has a lot of IT services companies, a growing set of SaaS products, and a long tail of manufacturing and trading businesses whose websites were built once and never revisited. Those are three very different design problems.',
        'A services company usually needs a site that wins trust before a sales call. A SaaS product needs the interface itself to work. An established business with an ageing site usually needs a redesign that respects the customers it already has rather than a rebrand nobody asked for. The starting point is which of those you are.',
      ],
    },
  },
  {
    heading: { en: 'IST hours, and honest about the rest' },
    paragraphs: {
      en: [
        'Working from Ahmedabad means IST, which lines up cleanly with the rest of India and with clients across the Gulf, and overlaps the European morning. For clients further west the overlap is narrower, and reviews get scheduled rather than assumed.',
        'All work and written communication is in English. Conversations in Gujarati or Hindi are fine, but anything that needs to be a decision goes in writing in English so there is one record everyone on the project can read.',
      ],
    },
  },
]

export const localFaqs: Faq[] = [
  {
    question: { en: 'Can we meet in person in Ahmedabad?' },
    answer: {
      en: 'Yes. For clients in and around Ahmedabad an in-person kickoff is usually the fastest way to get a brief settled, and I am happy to meet for reviews at points where it helps. Day-to-day the project still runs through shared Figma files and scheduled calls, because that keeps a written record of what was agreed.',
    },
  },
  {
    question: {
      en: 'Do you only work with clients in Gujarat?',
    },
    answer: {
      en: 'No. Ahmedabad is where I am based, not the limit of who I work with. Most projects are remote, with clients elsewhere in India and worldwide, and the process is the same either way — the only thing being local changes is whether meeting in person is an option.',
    },
  },
  {
    question: { en: 'Do you work with agencies as well as direct clients?' },
    answer: {
      en: 'Yes. There are a lot of IT services and development agencies in Ahmedabad, and white-label design work or overflow capacity on a client project is a normal engagement. Whether the work is credited or stays under your name is your call and is agreed before it starts.',
    },
  },
  {
    question: { en: 'What languages do you work in?' },
    answer: {
      en: 'English for all work, files and written communication. Calls and meetings can be in English, Hindi or Gujarati, but briefs, feedback and anything that amounts to a decision are confirmed in writing in English so nothing depends on what someone remembers from a conversation.',
    },
  },
]
