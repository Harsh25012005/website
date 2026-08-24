import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { JsonLd } from '@/components/seo/JsonLd'
import { getDictionary } from '@/content/dictionary'
import type { LegalDocument } from '@/content/types'
import { localizedPath, type Locale } from '@/lib/i18n'
import { graph, breadcrumbSchema, webPageSchema } from '@/lib/schema'

type LegalPageProps = {
  locale: Locale
  /** Named `doc`, not `document` — shadowing the DOM global in a component
   *  that may one day gain a client child is a trap not worth setting. */
  doc: LegalDocument
}

/**
 * `/privacy-policy` and `/terms`.
 *
 * Deliberately the plainest layout on the site: one column, generous measure,
 * no reveal choreography beyond a fade. These are the two pages someone reads
 * because they need an answer, and animation between them and the answer is
 * an obstacle wearing a costume.
 *
 * The pages are indexable rather than `noindex`. They are a trust signal a
 * commercial site is expected to have, they are linked sitewide from the
 * footer, and hiding them makes the site look like it has neither.
 */
export function LegalPage({ locale, doc }: LegalPageProps) {
  const dictionary = getDictionary(locale)
  const path = `/${doc.slug}`

  const dateLocale = locale === 'es' ? 'es-ES' : locale === 'fr' ? 'fr-FR' : 'en-GB'
  const updated = new Intl.DateTimeFormat(dateLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(doc.updated))

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            locale,
            path,
            title: doc.metaTitle,
            description: doc.metaDescription,
          }),
          breadcrumbSchema(locale, [
            { name: doc.title[locale], path },
          ]),
        )}
      />

      <section className="px-5 pt-32 pb-12 md:px-10 md:pt-[8.75rem] md:pb-16">
        <div className="shell">
          <SplitHeading
            as="h1"
            immediate
            delay={0.1}
            className="max-w-[14ch] font-serif text-[clamp(40px,5.6vw,88px)] leading-[1.02] font-light tracking-[-0.04em]"
          >
            {doc.heading[locale]}
          </SplitHeading>

          <Reveal delay={0.3}>
            <p className="mt-8 text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
              {dictionary.common.lastUpdated}{' '}
              <time dateTime={doc.updated}>{updated}</time>
            </p>

            <div className="mt-6 max-w-[62ch] space-y-4 text-[1.0625rem] leading-[1.6] text-[var(--color-text-soft)] md:text-[1.1875rem]">
              {doc.intro[locale].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10 md:pb-24">
        <div className="shell">
          <div className="max-w-[68ch]">
            {doc.sections.map((section) => (
              <Reveal key={section.heading[locale]}>
                <div className="border-t border-[var(--color-border)] py-10 md:py-12">
                  <h2 className="font-serif text-[clamp(22px,2.4vw,30px)] leading-[1.15] font-light tracking-[-0.02em] text-white">
                    {section.heading[locale]}
                  </h2>
                  <div className="mt-5 space-y-4 text-[15px] leading-[1.65] text-[var(--color-text-soft)] md:text-[1.0625rem]">
                    {section.paragraphs[locale].map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10 md:pb-32">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col items-start gap-6 border-t border-[var(--color-border)] pt-12 md:flex-row md:items-center md:justify-between md:gap-10 md:pt-16">
              <p className="font-serif text-[clamp(20px,2.2vw,28px)] leading-[1.2] font-light tracking-[-0.02em] md:max-w-[32ch]">
                <span className="text-white">
                  {dictionary.pages.legal.cta}
                </span>
              </p>
              <Link
                href={localizedPath(locale, '/contact')}
                className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full border border-white bg-white px-6 text-[15px] leading-none text-black transition-colors duration-200 hover:bg-transparent hover:text-white"
              >
                {dictionary.nav.contact}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
