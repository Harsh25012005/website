import type { Metadata, Viewport } from 'next'
import { Newsreader, Instrument_Sans } from 'next/font/google'
import { siteUrl } from '@/lib/seo'
import { site } from '@/content/site'
import './globals.css'

// Display serif for headings, neutral grotesque for UI — loaded as CSS
// variables so Tailwind's `--font-serif` / `--font-sans` tokens resolve.
const newsreader = Newsreader({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

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
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
