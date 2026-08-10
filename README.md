# Portfolio

A dark, motion-led portfolio site — Next.js App Router, Tailwind v4, GSAP, Lenis
and a three.js particle background. Structurally modelled on
[ulrychkristian.cz](https://www.ulrychkristian.cz/): same page architecture, type
system, layout rhythm and motion vocabulary, with all content and imagery
replaced by placeholders you own.

## Stack

| Concern       | Choice                                                            |
| ------------- | ----------------------------------------------------------------- |
| Framework     | Next.js 15 (App Router, RSC), React 19                            |
| Styling       | Tailwind CSS v4 (`@theme` tokens in globals.css)                  |
| Animation     | GSAP 3.13 — ScrollTrigger, SplitText, CustomEase                  |
| Smooth scroll | Lenis, driven from the GSAP ticker                                |
| Background    | three.js `Points` cloud, one draw call                            |
| Type          | Newsreader (serif) + Instrument Sans, self-hosted via `next/font` |
| Tests         | Vitest + Testing Library                                          |

## Getting started

```bash
npm install && npm run dev
```

Article cover and gallery imagery is generated rather than drawn — the article
title set on the site's palette, one accent and one motif per article:

```bash
node scripts/generate-article-images.mjs
```

Edit the `ARTICLES` array in that script when an article title changes, then
re-run it. It uses `sharp` (already pulled in by Next.js) to rasterise SVG, and
Georgia rather than Newsreader, because librsvg resolves fonts through the OS
and the site's faces are woff2 files `next/font` fetches at build time.

Case study imagery under `public/images/work/` is real design work and is not
generated. `public/images/hero-portrait.png` is still a placeholder — replace it
with a real photograph, since it feeds `image` on the Person schema and a
generated gradient there is a wasted entity signal.

## Making it yours

Everything user-facing lives under `src/content/` — no copy is hardcoded in a
component.

| File            | What it holds                                         |
| --------------- | ----------------------------------------------------- |
| `site.ts`       | Name, role, email, location, social links, footer nav |
| `projects.ts`   | Case studies (listing + detail pages)                 |
| `services.ts`   | The six services, one `/services/[slug]` page each    |
| `pricing.ts`    | Packages — **figures are unset, see below**           |
| `articles.ts`   | Editorial entries                                     |
| `about.ts`      | Bio, process, FAQs, skills, tools, testimonials       |
| `resume.ts`     | Résumé summary and experience                         |
| `local.ts`      | Ahmedabad landing page copy                           |
| `tools.ts`      | Tool stack with a note on each (`/tools`)             |
| `dictionary.ts` | UI chrome strings (nav, buttons, form labels)         |

### Pages kept out of the index

Three routes ship `noindex, follow` and are absent from `sitemap.ts`. One is
permanent; two unblock themselves as soon as their content is real:

| Page            | Why                                    | To publish                                       |
| --------------- | -------------------------------------- | ------------------------------------------------ |
| `/pricing`      | every `from` in `pricing.ts` is `null` | set a real starting figure on all three packages |
| `/testimonials` | `testimonials` in `about.ts` is empty  | add one real quote, with a real name attached    |
| `/thank-you`    | conversion destination                 | permanent — nobody should land here from search  |

`/pricing` and `/testimonials` are derived from the data rather than flagged by
hand, so filling either in also restores its nav link and its sitemap entry. The
point is the failure mode that removes: real prices get set, the page starts
indexing, and nothing on the site links to it. An orphaned page does not rank,
and nothing about it looks broken.

Replace the files under `public/images/` with real assets, keeping the paths the
content layer points at (or update the paths — `npm run test` will tell you if
any reference goes stale).

Set `NEXT_PUBLIC_SITE_URL` per environment. It drives canonical URLs, hreflang
alternates, the sitemap and OG image URLs; getting it wrong means search engines
index localhost.

## Routing and i18n

English is served from the root, Czech from a `/cs` prefix — the same scheme the
reference site publishes. `src/middleware.ts` rewrites unprefixed paths into the
`[locale]` segment, so `/work` stays canonical while resolving to `/en/work`.

Add a locale in `src/lib/i18n.ts` and the sitemap, hreflang alternates and
language switch all follow.

## Motion

Primitives live in `src/components/motion/`:

- **SmoothScroll** — Lenis on the GSAP ticker, so scroll position and tweens
  share a frame. Running Lenis on its own rAF makes pinned and parallax
  elements lag by one frame.
- **SplitHeading** — masked line-by-line heading reveal. Splits only after
  `document.fonts.ready`; measuring against the fallback face locks the masks to
  the wrong widths and the real face then wraps out of its own clip box.
- **Reveal** — the workhorse fade-up, fires once on entry.
- **ParallaxFrame** — clipped frame with a 110%-tall inner layer that drifts on
  scrub.
- **Preloader / PageTransition** — four-column wipes; the preloader also counts
  0→100 and locks scroll while it runs.
- **ParticleField**, **ConvergeLines**, **ScrollProgress**, **CustomCursor**.

Every primitive checks `prefers-reduced-motion` and degrades to a static,
fully-visible layout.

## Scripts

```bash
npm run dev           # dev server
npm run build         # production build
npm run typecheck     # tsc --noEmit
npm run lint          # eslint
npm run format:check  # prettier
npm run test          # vitest
```

CI runs all five on every push and pull request.

## Notes

- The contact form posts to `/api/contact`, which sends the enquiry through
  [Resend](https://resend.com). Set `RESEND_API_KEY` (and optionally
  `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`) — see `.env.example`. Without the
  key the endpoint returns 500 and logs why, so the form fails visibly rather
  than swallowing enquiries. Until a domain is verified with Resend, mail goes
  out from their shared `onboarding@resend.dev`, which only delivers to the
  address the Resend account was created with.
- **There is no privacy policy.** The page and its consent line under the
  contact form were both removed deliberately. The form still collects a name,
  an email address and a message. If you add analytics, a form service or any
  third-party script, or take enquiries from the EU or UK, publish a policy
  before you do — GDPR and India's DPDP Act both expect a notice at the point of
  collection. The deleted page is in git history if you want it back.
- The layout, type scale and motion design are modelled on another designer's
  site. The words and pictures in this repo are placeholders — publishing it
  means replacing them with your own.
