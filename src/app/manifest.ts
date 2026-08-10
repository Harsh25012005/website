import type { MetadataRoute } from 'next'
import { site } from '@/content/site'

/**
 * Web app manifest. Not a ranking factor on its own, but it is what supplies
 * the name, theme colour and icon when the site is added to a phone home
 * screen, and Lighthouse's installability checks feed the same PWA audit that
 * teams read alongside Core Web Vitals.
 *
 * `display: 'browser'` rather than `standalone`: this is a portfolio, not an
 * app, and stripping the browser chrome would take the URL bar away from a
 * visitor who has no in-page way back to a shareable link.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} - ${site.role.en}`,
    short_name: site.name,
    description: `Portfolio of ${site.name}: design systems, web UI, mobile app and SaaS product design.`,
    start_url: '/',
    display: 'browser',
    background_color: '#121417',
    theme_color: '#121417',
    lang: 'en',
    icons: [
      { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any', purpose: 'any' },
      {
        src: '/apple-icon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
        purpose: 'maskable',
      },
    ],
  }
}
