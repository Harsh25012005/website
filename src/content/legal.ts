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
  title: { en: 'Privacy policy' },
  metaTitle: 'Privacy Policy',
  metaDescription:
    'What this site collects and what it does not: no analytics, no cookies, no tracking. Only the contact form, sent straight to an inbox and stored nowhere else.',
  heading: { en: 'Privacy policy' },
  updated: LEGAL_UPDATED,
  intro: {
    en: [
      'This site collects almost nothing, and this page says exactly what "almost" covers. It applies to this website only, not to project work carried out under a separate agreement.',
      `Any question about it, or any request to delete something you have sent, goes to ${site.email} and is answered by me personally.`,
    ],
  },
  sections: [
    {
      heading: { en: 'What this site does not do' },
      paragraphs: {
        en: [
          'There is no analytics on this site. No Google Analytics, no tag manager, no advertising pixel, no heatmap or session recording, and no third-party script of any kind that watches what you do here.',
          'The site sets no cookies and stores nothing in your browser. That is why there is no cookie banner: there is nothing to consent to, and a banner asking permission for consent it does not need would be theatre.',
          'Nothing you do here is used to build a profile, and nothing is sold, rented or shared with anyone for marketing. There is no mailing list to be added to.',
        ],
      },
    },
    {
      heading: { en: 'The contact form' },
      paragraphs: {
        en: [
          'If you send the contact form, it submits your name, your email address, an optional subject and your message. That is composed into an email and delivered to my inbox through Resend, an email delivery provider. It is not written to a database, because this site does not have one.',
          'Your email address is set as the reply-to on that message, so replying to you is a single click. Your message then lives in my mailbox in the same way any email you sent me directly would, for as long as the enquiry is useful — and you can ask me to delete it at any time.',
          'The form also carries a hidden field that humans never see. Anything filled into it identifies the submission as automated, and it is discarded without being sent. If you use a screen reader or an unusual browser and this ever affects you, email me directly instead.',
        ],
      },
    },
    {
      heading: { en: 'Rate limiting and IP addresses' },
      paragraphs: {
        en: [
          'To stop a script flooding the inbox, the contact endpoint counts how many submissions have arrived from a given IP address in the last ten minutes. Those addresses are held in the server process’s memory, they are never written to disk or to a database, and they disappear when the window passes or the server restarts.',
          'They are not connected to anything else, not used to identify anyone, and not available to me — I never see that list.',
        ],
      },
    },
    {
      heading: { en: 'What the host and other services see' },
      paragraphs: {
        en: [
          'Like any website, this one is served by a hosting provider, which keeps standard server logs — the requested URL, a timestamp, an IP address, a user agent — for its own operational and security purposes. That happens for every site on the internet and it is outside my control, though it is worth stating rather than implying it does not happen.',
          'Resend processes the contents of a submitted contact form in order to deliver it, under its own privacy terms. This site is also verified in Google Search Console, which reports aggregate search statistics — which queries showed the site, how often it was clicked — and never identifies an individual visitor.',
        ],
      },
    },
    {
      heading: { en: 'Your rights, and how to use them' },
      paragraphs: {
        en: [
          'Because the only personal data this site receives is what you deliberately type into the contact form, exercising your rights over it is straightforward: email me and ask what I hold, ask for a copy, ask for a correction, or ask me to delete it. I will do it and confirm when it is done.',
          `Under India’s Digital Personal Data Protection Act 2023 you have those rights by law, and if you are in the EU or UK the GDPR gives you equivalent ones. Either way the practical route is the same address: ${site.email}.`,
        ],
      },
    },
    {
      heading: { en: 'Children, and changes to this page' },
      paragraphs: {
        en: [
          'This is a professional portfolio offering services to businesses. It is not directed at children and does not knowingly collect anything from them.',
          'If this site ever adds analytics, a cookie, an embedded third-party service or anything else that changes the description above, this page changes on the same day and the date at the top moves with it. The date is not touched for anything else.',
        ],
      },
    },
  ],
}

export const termsOfService: LegalDocument = {
  slug: 'terms',
  title: { en: 'Terms' },
  metaTitle: 'Terms of Use and Engagement',
  metaDescription:
    'Terms for using this website, and the standard terms that project work runs under: ownership, payment, revisions, portfolio rights and the limits of what is promised.',
  heading: { en: 'Terms' },
  updated: LEGAL_UPDATED,
  intro: {
    en: [
      'Two things live on this page: the terms for using this website, and the standard positions that project work runs under.',
      'The second half is a summary, not the contract. Every engagement is governed by its own written scope and quote, and where that document and this page disagree, the signed one wins.',
    ],
  },
  sections: [
    {
      heading: { en: 'Using this website' },
      paragraphs: {
        en: [
          `The writing, design, code, images and case studies on this site belong to ${site.name}. You are welcome to read, quote and link to any of it with attribution. Republishing a page or an article wholesale, or presenting the work shown here as your own, is not covered by that.`,
          'The case studies describe real projects, several of them self-initiated concept work, and each one says which it is. Nothing on this site is a guarantee of a particular result for a different project — a portfolio shows what was done, not what will happen next time.',
        ],
      },
    },
    {
      heading: { en: 'Scope, quotes and changes' },
      paragraphs: {
        en: [
          'Work is quoted as a fixed price against a written scope agreed before it starts. That document lists what is included, what is explicitly excluded, the phases, the review points and the payment milestones.',
          'Anything outside the agreed scope is a change to both the scope and the price, recorded in writing before the work continues. This cuts both ways: it protects you from an invoice you did not expect, and it protects the project from growing quietly until nobody can say what was agreed.',
        ],
      },
    },
    {
      heading: { en: 'Payment' },
      paragraphs: {
        en: [
          'Payment is split across the milestones set out in the scope, rather than collected in full up front or in full on delivery. The schedule is written down before work starts.',
          'Third-party costs are yours and are billed to you directly by whoever provides them — platform subscriptions such as Webflow or Framer, hosting, domains, licensed fonts and stock imagery. I do not resell them or hold client accounts, and nothing you pay for should be locked behind an account of mine.',
        ],
      },
    },
    {
      heading: { en: 'Ownership of the work' },
      paragraphs: {
        en: [
          'On final payment, the deliverables produced for you are yours: the design files, the source code in your repository, and the built site in your own platform account. There is no licence to keep paying and no bespoke framework you are tied to.',
          'Two things stay with me. General knowledge, methods and reusable non-client-specific components are not transferred — they are how the next project gets built. And unless we agree otherwise in writing, I keep the right to show the work in this portfolio and in professional profiles. If a project is confidential, say so at the brief stage and it is excluded.',
        ],
      },
    },
    {
      heading: { en: 'What you provide' },
      paragraphs: {
        en: [
          'Projects depend on content, access and feedback arriving when they are needed. Copy, images, brand assets, logins and approvals are yours to supply, and a timeline assumes they arrive roughly on the dates the scope names.',
          'You confirm you have the right to use anything you hand over — images, fonts, copy, trademarks. I design and build with what I am given, and I cannot verify the licensing behind a client’s own assets.',
        ],
      },
    },
    {
      heading: { en: 'What is and is not promised' },
      paragraphs: {
        en: [
          'The work is carried out with reasonable professional skill and care, and a build is tested across current browsers on desktop and mobile before it is delivered. If something delivered does not work as agreed, tell me and I will fix it.',
          'What cannot be promised is a business outcome. Nobody can guarantee a search ranking, a conversion rate, a revenue figure or the behaviour of a third-party platform, and any supplier who does is guessing. Liability is limited to the fees paid for the piece of work concerned.',
        ],
      },
    },
    {
      heading: { en: 'Ending an engagement, and which law applies' },
      paragraphs: {
        en: [
          'Either side can end a project in writing. Work completed and phases already begun are payable up to that point, and everything finished and paid for is handed over — files, code and access — rather than held.',
          `These terms and any engagement under them are governed by the laws of India, with the courts of Ahmedabad, Gujarat having jurisdiction. Anything unclear here is better raised before a project than after: ${site.email}.`,
        ],
      },
    },
  ],
}

export const legalDocuments: LegalDocument[] = [privacyPolicy, termsOfService]
