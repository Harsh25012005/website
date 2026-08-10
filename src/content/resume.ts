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
  en: 'Freelance UI/UX and product designer based in Ahmedabad, working across design systems, web UI, mobile app and SaaS product design — and building the front end in React, Next.js and Tailwind CSS, so the design that ships is the design that was approved.',
}

/* ────────────────────────────────────────────────────────────────────────────
 * ⚠️  EXPERIENCE IS INCOMPLETE.  ⚠️
 *
 * One entry, because freelance work is the only history I can state as fact.
 * Add internships, employment, agency or contract engagements and student
 * projects that shipped — a résumé page with a single entry reads as thinner
 * than the actual experience behind it.
 *
 * Two rules when you do:
 *   - `period` must match your LinkedIn dates exactly. A résumé page and a
 *     LinkedIn profile that disagree about a date is the one discrepancy every
 *     recruiter checks, and it also weakens the `sameAs` identity link between
 *     the two.
 *   - `points` should say what was delivered and for whom, not list adjectives.
 *     "Designed and built a 20-screen dashboard" beats "passionate about UX".
 * ──────────────────────────────────────────────────────────────────────────── */
export const resumeExperience: ResumeEntry[] = [
  {
    period: '2025 — present',
    role: { en: 'Freelance UI/UX & Product Designer' },
    organisation: { en: 'Independent' },
    location: { en: 'Ahmedabad, India — remote worldwide' },
    points: {
      en: [
        'Design web UI, mobile app and SaaS product interfaces in Figma for founders and small teams, from user flows and wireframes through to high-fidelity screens and clickable prototypes.',
        'Build design systems — component libraries, colour, type and spacing tokens, and the usage documentation that keeps a team on-system after handoff.',
        'Take approved designs into production as responsive front-end code in HTML, CSS, Tailwind CSS, React and Next.js, QA-tested across browsers.',
        'Work directly with clients on scope, review and handoff, quoting fixed prices against defined deliverables rather than hourly.',
      ],
    },
  },
]
