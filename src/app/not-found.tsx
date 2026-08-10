import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary } from '@/content/dictionary'
import { defaultLocale, localizedPath } from '@/lib/i18n'

/**
 * The 404 already answers with a 404 status, which is what keeps it out of the
 * index. `noindex` is belt-and-braces for the crawlers and previewers that
 * render the body regardless of status, and the explicit title stops the page
 * inheriting the home page's — a "Harsh Vaghela - UI/UX & Product Designer" tab
 * on a dead link is confusing to a visitor and, if it is ever cached, is the
 * worst possible title to have attached to a broken URL.
 */
export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

/**
 * Root-level 404. Lives outside `[locale]` so unmatched paths (which never
 * resolve a locale segment) still render something styled, and falls back to
 * the default locale's strings.
 */
export default function NotFound() {
  const dictionary = getDictionary(defaultLocale)

  return (
    <main className="flex min-h-screen items-center px-5 md:px-10">
      <div className="shell">
        <p className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
          404
        </p>
        <h1 className="mt-6 max-w-[16ch] font-serif text-[clamp(40px,6vw,6rem)] leading-[1.02] font-light tracking-[-0.04em]">
          {dictionary.notFound.title}
        </h1>
        <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)]">
          {dictionary.notFound.body}
        </p>
        <Link
          href={localizedPath(defaultLocale, '/')}
          className="mt-10 inline-flex h-12 items-center rounded-full border border-white bg-white px-6 text-[15px] leading-none text-black transition-colors duration-200 hover:bg-transparent hover:text-white"
        >
          {dictionary.notFound.cta}
        </Link>
      </div>
    </main>
  )
}
