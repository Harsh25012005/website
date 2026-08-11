import type { Localized, ResumeEntry } from './types'

/**
 * Copy for `/resume`.
 *
 * The page exists for two audiences that a portfolio home page serves badly:
 * recruiters and procurement, who want the facts in one scannable place, and
 * search engines building an entity around the name. Everything structural —
 * education, skills, tools — is read from `site.ts` and `about.ts` rather than
 * restated here, so the résumé cannot drift out of step with the JSON-LD that
 * claims the same facts.
 */

export const resumeSummary: Localized<string> = {
  en: 'UI/UX and product designer based in Ahmedabad, currently Product Designer at Code Theorem and freelance across design systems, web UI, mobile app and SaaS product design. I build the front end too, in React, Next.js and Tailwind CSS, so the design that ships is the design that was approved.',
}

/* ────────────────────────────────────────────────────────────────────────────
 * Reverse chronological, and both entries are current: the in-house role leads
 * because it is the full-time one, with freelance work continuing alongside it.
 * That overlap is deliberate and stated as such — the two entries carrying the
 * same "2025 to present" range is only a red flag if the page pretends
 * otherwise, which is why `resumeSummary` above names both.
 *
 * ⚠️  The Code Theorem bullets below are the shape of the role, not the record
 * of it. Replace them with what was actually shipped — the products, the
 * screen counts, the systems built — as soon as there is something concrete to
 * name. "Designed a 20-screen SaaS dashboard" beats any description of duties.
 *
 * Two rules for every entry:
 *   - `period` must match your LinkedIn dates exactly. A résumé page and a
 *     LinkedIn profile that disagree about a date is the one discrepancy every
 *     recruiter checks, and it also weakens the `sameAs` identity link between
 *     the two.
 *   - `points` should say what was delivered and for whom, not list adjectives.
 *     "Designed and built a 20-screen dashboard" beats "passionate about UX".
 *
 * Still missing: internships, earlier contract engagements and student projects
 * that shipped. Add them — the history reads thinner than it is.
 * ──────────────────────────────────────────────────────────────────────────── */
export const resumeExperience: ResumeEntry[] = [
  {
    period: '2025 to present',
    role: { en: 'Product Designer' },
    // Named exactly as the company writes it, and as `site.employer` does —
    // that string is what `Person.worksFor` publishes, so the page and the
    // schema have to agree on it letter for letter.
    organisation: { en: 'Code Theorem' },
    location: { en: 'Ahmedabad, Gujarat, India' },
    points: {
      en: [
        'Design product interfaces in Figma (user flows, wireframes and high-fidelity screens), taking client work from brief through internal review to developer handoff.',
        'Work inside shared design systems, extending components and colour, type and spacing tokens so screens stay consistent across a project and between designers.',
        'Collaborate with developers through build and QA, checking the implemented interface against the approved design across breakpoints.',
      ],
    },
  },
  {
    period: '2025 to present',
    role: { en: 'Freelance UI/UX & Product Designer' },
    organisation: { en: 'Independent' },
    location: { en: 'Ahmedabad, India, working remotely worldwide' },
    points: {
      en: [
        'Design web UI, mobile app and SaaS product interfaces in Figma for founders and small teams, from user flows and wireframes through to high-fidelity screens and clickable prototypes.',
        'Build design systems: component libraries, colour, type and spacing tokens, and the usage documentation that keeps a team on-system after handoff.',
        'Take approved designs into production as responsive front-end code in HTML, CSS, Tailwind CSS, React and Next.js, QA-tested across browsers.',
        'Work directly with clients on scope, review and handoff, quoting fixed prices against defined deliverables rather than hourly.',
      ],
    },
  },
]
