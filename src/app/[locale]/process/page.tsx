import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { JsonLd } from '@/components/seo/JsonLd'
import { processIntro, processPhases, processFaqs } from '@/content/process'
import { getDictionary } from '@/content/dictionary'
import { isLocale, localizedPath } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import {
  graph,
  breadcrumbSchema,
  webPageSchema,
  faqSchema,
} from '@/lib/schema'

type PageProps = { params: Promise<{ locale: string }> }

const TITLE = 'How a Project Runs: Brief to Launch'
const DESCRIPTION =
  'The six phases every project runs through, from brief and written scope to structure, interface, build and launch — and what exists at the end of each one.'

/**
 * No `HowTo` schema here, tempting as the numbered phases make it. `HowTo`
 * describes instructions the *reader* carries out; this page describes what a
 * supplier does. Marking it up as one would claim a rich result the page is not
 * eligible for and misdescribe the content while doing it.
 */
export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/process',
    title: TITLE,
    description: DESCRIPTION,
    imageAlt: 'How Harsh Vaghela runs a design and development project',
    keywords: [
      'design process',
      'web design and development process',
      'how a design project works',
      'design project phases',
      'design handoff process',
    ],
  })
}

export default async function ProcessPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            locale,
            path: '/process',
            title: TITLE,
            description: DESCRIPTION,
          }),
          breadcrumbSchema(locale, [{ name: 'Process', path: '/process' }]),
          faqSchema(
            processFaqs.map((faq) => ({
              question: faq.question[locale],
              answer: faq.answer[locale],
            })),
          ),
        )}
      />

      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem] md:pb-20">
        <div className="shell">
          <SplitHeading
            as="h1"
            immediate
            delay={0.1}
            className="max-w-[16ch] font-serif text-[clamp(40px,5.6vw,88px)] leading-[1.02] font-light tracking-[-0.04em]"
          >
            What actually happens, in what order
          </SplitHeading>

          <Reveal delay={0.35}>
            <p className="mt-8 max-w-[56ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
              {processIntro[locale]}
            </p>
          </Reveal>
        </div>
      </section>

      {processPhases.map((phase) => (
        <section
          key={phase.number}
          className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-20"
        >
          <div className="shell">
            <Reveal>
              <div className="grid gap-y-6 md:grid-cols-12 md:gap-x-12">
                <div className="md:col-span-4">
                  <span className="text-[11px] text-[var(--color-text-muted)]">
                    {phase.number}
                  </span>
                  <h2 className="mt-4 font-serif text-[clamp(26px,3vw,40px)] leading-[1.1] font-light tracking-[-0.02em]">
                    {phase.heading[locale]}
                  </h2>
                </div>

                <div className="md:col-span-7 md:col-start-6">
                  <div className="space-y-4 text-[1.0625rem] leading-[1.6] text-[var(--color-text-soft)] md:max-w-[56ch] md:text-[1.125rem]">
                    {phase.paragraphs[locale].map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {/* The field that makes the page worth publishing: what you
                      are holding at the end of this phase if the project stops
                      here. */}
                  <div className="mt-8 border-t border-[var(--color-border)] pt-6">
                    <p className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
                      You end up with
                    </p>
                    <p className="mt-3 max-w-[48ch] text-[15px] leading-[1.55] text-white">
                      {phase.output[locale]}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section
        className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-24"
        aria-labelledby="process-faq-heading"
      >
        <div className="shell">
          <Reveal>
            <h2
              id="process-faq-heading"
              className="max-w-[16ch] font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.05] font-light tracking-[-0.03em]"
            >
              Working together
            </h2>
          </Reveal>

          <div className="mt-12 border-t border-[var(--color-border)] md:mt-16">
            {processFaqs.map((faq) => (
              <Reveal key={faq.question[locale]}>
                <details className="group border-b border-[var(--color-border)]">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-[1.0625rem] leading-[1.4] text-[var(--color-text)] transition-colors hover:text-white md:py-8 md:text-[1.1875rem] [&::-webkit-details-marker]:hidden">
                    <h3 className="max-w-[46ch] font-normal">
                      {faq.question[locale]}
                    </h3>
                    <span
                      aria-hidden
                      className="mt-1 shrink-0 text-[var(--color-text-muted)] transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-[62ch] pb-6 text-[15px] leading-[1.6] text-[var(--color-text-muted)] md:pb-8 md:text-[1.0625rem]">
                    {faq.answer[locale]}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:pb-32">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col items-start gap-6 border-t border-[var(--color-border)] pt-12 md:flex-row md:items-center md:justify-between md:gap-10 md:pt-16">
              <p className="font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.15] font-light tracking-[-0.02em] md:max-w-[30ch]">
                <span className="text-white">
                  This starts with a brief. Send yours.
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
