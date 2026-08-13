import type { Metadata, Viewport } from 'next'
import { Newsreader, Instrument_Sans } from 'next/font/google'
import { siteUrl } from '@/lib/seo'
import { site } from '@/content/site'
import './globals.css'

// Display serif for headings, neutral grotesque for UI — loaded as CSS
// variables so Tailwind's `--font-serif` / `--font-sans` tokens resolve.
//
// next/font emits a `<link rel=preload as=font>` for every (style × subset)
// combination it is asked for, which fetches them all at High priority ahead of
// the JS the page needs to hydrate — `unicode-range` never gets the chance to
// skip the ones the page will not use. So the ask has to be exact:
//
//   - `italic` was requested and rendered nowhere (`grep -rn italic src/` found
//     only the config line that asked for it). Two files, 104 kB.
//   - `latin-ext` was requested and is needed nowhere. Every non-ASCII glyph the
//     site renders — é — ’ … × · © ↑ ↓ — falls inside the `latin` range; the
//     arrows and box-drawing characters (→ ← ↗ ✓ ─) are outside *both* subsets
//     and already fall back to a system face. Two more files, 87 kB.
//   - Newsreader 500 is never rendered: `font-medium` has exactly one use, on
//     the sans-serif cursor label. 300 and 400 both are, so both stay — dropping
//     300 would silently snap every `font-light` heading up to 400.
//
// That is 152 kB of 240 kB removed from the render-blocking font fetch, on a
// critical path where the hero text cannot appear until fonts settle.
//
// `preload` and `adjustFontFallback` are Next's defaults, set explicitly because
// both are load-bearing here: preload keeps the two surviving files ahead of the
// hero paint, and adjustFontFallback is what emits the `size-adjust`ed
// "Newsreader Fallback" face that holds CLS at 0 through `display: swap`.
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-newsreader',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-instrument-sans',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
})

/**
 * Marks the document when the entry curtain has already played this session.
 *
 * The decision itself belongs to `Preloader`, but the *flag* has to be in the
 * DOM before the first paint and React cannot put it there: the server HTML
 * contains the curtain, and hydration is a second or more later on a slow
 * phone. Every repeat visit would flash a full-screen white overlay until React
 * caught up — the exact frame Speed Index punishes hardest.
 *
 * Reading a synchronous flag in an inline script and matching it from CSS is the
 * only way to suppress markup before it paints. `sessionStorage` throws in some
 * privacy modes, so a failed read must fall through to "show the preloader"
 * rather than throw before the page renders.
 */
const preloaderFlagScript = `try{if(sessionStorage.getItem('preloader-shown'))document.documentElement.dataset.preloaderShown='1'}catch(e){}`

/**
 * Critical CSS that has to exist independently of the stylesheet bundle.
 *
 * `split-heading-in` is the escape hatch for the LCP element. Headings ship
 * hidden so SplitText can mask them per line (see SplitHeading), which means the
 * largest text on the page used to wait on hydration *and* webfonts *and* the
 * GSAP chunk before it existed as an LCP candidate at all — seconds on slow 4G.
 * This animation reveals it from the HTML alone, roughly 0.4s after the document
 * paints, and SplitHeading stands down when it sees the text is already up.
 * Transform only, so it cannot shift layout; reduced motion opts out entirely.
 *
 * ## Why the hidden state is `.01` and not `0`
 *
 * Chromium collects paint timing inside an `IgnorePaintTimingScope`: a layer
 * whose opacity is *exactly* zero is skipped and the text under it is never
 * recorded. The reveal then animates only `opacity` and `transform`, which the
 * compositor runs without repainting the heading's content — so becoming visible
 * does not hand paint timing a second chance at it. The h1 was therefore only
 * recorded when some unrelated event forced a genuine repaint of that text, and
 * the first such event on this page is a webfont swap. Measured mobile LCP
 * tracked `max(FCP, first font responseEnd)`, which is how a 1.7s FCP produced a
 * 3.9s LCP — the gap was never the animation's *schedule*, it was the literal
 * zero.
 *
 * `.01` is not zero, so the layer is walked and the heading is recorded in the
 * first frame it paints: LCP collapses onto FCP. One percent of #fdfdfd over
 * #121417 lifts R from 18 to 20.35 — below the perceptual floor, so the entrance
 * still starts from nothing to the eye, and no contrast or layout behaviour
 * changes. Measured locally on throttled 4G: FCP→LCP gap 400-416ms → 0ms.
 *
 * SplitHeading reads this exact value back through `getComputedStyle` to decide
 * whether the CSS fallback has already claimed the heading, so the two have to
 * stay in step — see `HIDDEN_OPACITY` there before changing it here.
 */
const criticalCss = `
html[data-preloader-shown] [data-preloader]{display:none}
[data-split-heading]{opacity:.01;animation:split-heading-in .5s cubic-bezier(.16,1,.3,1) .4s forwards}
@keyframes split-heading-in{from{opacity:.01;transform:translate3d(0,.35em,0)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){[data-split-heading]{opacity:1;animation:none}}
`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} - ${site.role.en}`,
    // Every page passes a bare topic ("UI/UX Design Services") and gets the
    // name appended here. A page that needs the name inside its own title —
    // the home page, an article headline — must set `titleIsAbsolute` in
    // `buildMetadata`, or the name lands twice.
    template: `%s - ${site.name}`,
  },
  description: `Portfolio of ${site.name}, a freelance ${site.role.en.toLowerCase()} in ${site.location.en}. Design systems, web UI, mobile app and SaaS product design, built in React and Next.js.`,
  applicationName: site.name,
  manifest: '/manifest.webmanifest',
  robots: { index: true, follow: true },
  // Icons belong in the metadata object, not in a hand-written `<head>`. Next
  // renders these into the head itself; declaring both meant two competing sets
  // of icon links pointing at two different files.
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon.svg', type: 'image/svg+xml' }],
  },
  formatDetection: { telephone: false, address: false, email: false },
}

export const viewport: Viewport = {
  themeColor: '#121417',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${instrumentSans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {/* Both have to be parsed before the curtain and the hero heading are,
            so they sit ahead of the tree rather than being hoisted to <head>. */}
        <script dangerouslySetInnerHTML={{ __html: preloaderFlagScript }} />
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
        {children}
      </body>
    </html>
  )
}
