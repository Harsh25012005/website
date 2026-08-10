import type { Localized } from './types'

/**
 * Privacy policy for this site as it is actually built: a static portfolio with
 * a `mailto:` contact form (see `ContactForm.tsx` — no API route, no form
 * service), no cookies, no analytics, no browser storage, and self-hosted fonts
 * via `next/font`. Every claim below was checked against the code.
 *
 * If any of that changes — an analytics script, a real form endpoint, an
 * embedded map or video — this file must be updated before the change ships,
 * and `lastUpdated` bumped. It is a good-faith description of practice, not
 * legal advice; have it reviewed before relying on it commercially.
 */
export const lastUpdated = '2026-08-10'

export const privacyIntro: Localized<string> = {
  en: 'This is a one-person portfolio site, and it collects almost nothing. There are no cookies, no analytics, no tracking scripts, and the contact form does not send anything to a server. The only personal data I ever receive is what you choose to put in an email to me. This page explains exactly what happens to it.',
}

export const privacySections: {
  heading: Localized<string>
  paragraphs: Localized<string[]>
}[] = [
  {
    heading: { en: 'Who is responsible' },
    paragraphs: {
      en: [
        'This site belongs to Harsh Vaghela, an independent freelance UI/UX and product designer based in Ahmedabad, Gujarat, India. There is no company behind it — I work as an individual, and I am the only person who reads or handles anything you send.',
        'For anything on this page, including a request about your own data, email design.harsh25@gmail.com. It reaches me directly.',
      ],
    },
  },
  {
    heading: { en: 'What the contact form actually does' },
    paragraphs: {
      en: [
        'The contact form has no backend. Nothing is posted to a server, no third-party form service is involved, and no copy of your message is stored on this site. Pressing send opens your own email application with the message already written and addressed to me — you still decide whether to send it.',
        'The form asks for your name, your email address and your message, plus an optional subject line. If you go ahead and send, those details reach me as an ordinary email and nothing more.',
        'There is also a hidden field labelled “company” that people never see. It exists only to catch automated spam: if something fills it in, the submission is discarded and no email is prepared.',
      ],
    },
  },
  {
    heading: { en: 'Why your details are used' },
    paragraphs: {
      en: [
        'For one purpose: to read your enquiry, reply to it, and carry out any work that follows. Your details are not used for marketing, not added to any mailing list, not sold, rented or shared, and never run through profiling or automated decision-making.',
        'Where a legal basis has to be named: you chose to write to me, and processing is necessary to answer you and to take steps at your request before any agreement — GDPR Article 6(1)(b), with Article 6(1)(f), the legitimate interest in replying to someone who made contact, covering the rest. Under India’s Digital Personal Data Protection Act, 2023, sending the message is you voluntarily providing your data for the stated purpose of getting a reply.',
      ],
    },
  },
  {
    heading: { en: 'How long anything is kept' },
    paragraphs: {
      en: [
        'Emails stay in my mailbox while the conversation is live and while any resulting project is running. Enquiries that do not turn into work are deleted once they are clearly stale — within about twelve months. Correspondence connected to paid work is kept longer, so that contract and tax records still exist if they are ever needed.',
        'You can ask me to delete your message sooner than that. Unless I need it for an active project or to meet a legal obligation, I will.',
      ],
    },
  },
  {
    heading: { en: 'Cookies, analytics and tracking' },
    paragraphs: {
      en: [
        'This site sets no cookies. It runs no analytics, no tracking pixels, no advertising scripts and no session recording, and it writes nothing to your browser’s local or session storage. That is why you are not asked for consent — there is nothing to consent to.',
        'If that ever changes, this page will be updated before the change goes live, and a proper consent mechanism will be added wherever the law requires one.',
      ],
    },
  },
  {
    heading: { en: 'Hosting and server logs' },
    paragraphs: {
      en: [
        'The site is served by a commercial hosting provider. As with essentially every web host, that provider keeps short-lived technical logs — IP address, browser user agent, the page requested, the time — for security, abuse prevention and keeping the site online. These are ordinary server logs, not analytics. I do not use them to identify visitors or build a profile of anyone, and this site adds no logging of its own.',
        'If you want to know who is currently hosting the site, email me and I will tell you.',
      ],
    },
  },
  {
    heading: { en: 'Third parties' },
    paragraphs: {
      en: [
        'Fonts are downloaded when the site is built and served from this site’s own domain, so opening a page does not report your visit to Google Fonts or any other CDN.',
        'My contact address is a Gmail address, which means email you send me is stored and processed by Google as my mail provider, under Google’s own privacy policy. That is worth knowing before you send anything sensitive.',
        'Links to LinkedIn, Behance and Dribbble are ordinary links. Those platforms learn nothing about you from this site unless you click through, after which their own policies apply.',
        'There is no chat widget, no CRM, no embedded video, no map, no advertising network and no A/B testing tool anywhere on this site.',
      ],
    },
  },
  {
    heading: { en: 'Your rights' },
    paragraphs: {
      en: [
        'You can ask me for a copy of the personal data I hold about you, ask for it to be corrected or erased, ask me to restrict or stop using it, ask for it in a portable form, object to my using it, and withdraw any consent you gave.',
        'Email is enough — there is no form to fill in and no charge. I will respond within thirty days and usually much sooner. I may ask you to confirm which email address the request concerns, purely so that I do not hand your correspondence to the wrong person.',
      ],
    },
  },
  {
    heading: { en: 'Which law applies to you' },
    paragraphs: {
      en: [
        'I work with clients internationally, so visitors from the EU, the EEA and the UK are covered by the GDPR and the UK GDPR. Those rules apply to your data even though I am based in India, and the rights above are the rights they give you. If you think I have mishandled your data, you can complain to the data protection authority in your own country.',
        'It also means a genuine international transfer: an email to me is received and read in India, which sits outside the EEA and is not currently covered by an EU adequacy decision. There is no way around that — writing to a designer in India sends your message to India. You are providing it deliberately, for the purpose of getting a reply, and it goes no further than my mailbox.',
        'Within India, the Digital Personal Data Protection Act, 2023 applies. In its terms I am a Data Fiduciary and you are a Data Principal. Its core duties — collect only what is needed, be clear about the purpose, use the data only for that purpose, keep it secure, and erase it once the purpose is finished — are what this page describes. You may also nominate someone to exercise your rights on your behalf, and if you are not satisfied with how I handle a request, the Act gives you a route to the Data Protection Board of India.',
      ],
    },
  },
  {
    heading: { en: 'Security' },
    paragraphs: {
      en: [
        'The strongest protection here is structural rather than technical: this site has no database, no accounts, no logins and no store of visitor data, so there is nothing on it to breach. What exists is email correspondence in a mailbox, which I keep protected and do not forward to anyone.',
      ],
    },
  },
  {
    heading: { en: 'Children' },
    paragraphs: {
      en: [
        'This site is aimed at businesses and at people looking to hire a designer. It is not directed at children, and I do not knowingly collect personal data from anyone under 18. If you believe a child has sent me personal data, email me and I will delete it.',
      ],
    },
  },
  {
    heading: { en: 'Changes to this policy' },
    paragraphs: {
      en: [
        'If this policy changes, the revised version is published here with a new date at the top. Material changes will not be applied retroactively to enquiries that have already been handled.',
      ],
    },
  },
]
