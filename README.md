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

Placeholder imagery is committed, but you can regenerate it at any time:

```bash
node scripts/generate-placeholders.mjs
```

## Making it yours

Everything user-facing lives under `src/content/` — no copy is hardcoded in a
component.

| File            | What it holds                                 |
| --------------- | --------------------------------------------- |
| `site.ts`       | Name, role, email, location, social links     |
| `projects.ts`   | Case studies (listing + detail pages)         |
| `articles.ts`   | Editorial entries                             |
| `personal.ts`   | Photography / 2D / 3D galleries               |
| `about.ts`      | Bio, services, skills, tools, testimonials    |
| `privacy.ts`    | Privacy policy — **review before publishing** |
| `dictionary.ts` | UI chrome strings (nav, buttons, form labels) |

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
- **ParticleField**, **ImageSlideshow**, **MagneticButton**, **Marquee**,
  **ScrollProgress**.

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

- The contact form composes a `mailto:` rather than posting anywhere, so the
  site works on deploy with no form service. Swap `onSubmit` in
  `ContactForm.tsx` for a POST when you have an endpoint.
- The layout, type scale and motion design are modelled on another designer's
  site. The words and pictures in this repo are placeholders — publishing it
  means replacing them with your own.
