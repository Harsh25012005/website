import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { JsonLd } from '@/components/seo/JsonLd'
import { testimonials, testimonialsArePublishable } from '@/content/about'
import { getDictionary } from '@/content/dictionary'
import { isLocale, localizedPath } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import { graph, breadcrumbSchema, webPageSchema } from '@/lib/schema'

type PageProps = { params: Promise<{ locale: string }> }

const TITLE = 'Client Testimonials'
const DESCRIPTION =
  'What clients say about working with Harsh Vaghela on UI/UX design, design systems and front-end builds.'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/testimonials',
    title: TITLE,
    description: DESCRIPTION,
    imageAlt: 'Client testimonials for Harsh Vaghela',
    // Indexing a testimonials page with no testimonials on it publishes a
    // promise the page does not keep, and a description claiming quotes that
    // are not there is the kind of mismatch that gets a snippet rewritten and
    // the page discounted. Add a real quote to `about.ts` and this flips.
    noindex: !testimonialsArePublishable,
  })
}

export default async function TestimonialsPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  return (
    <>
      {/* No `Review` or `AggregateRating` nodes, now or when the quotes land.
          Self-serving review markup — a business publishing reviews about
          itself — has been ineligible for rich results for years and is the
          most commonly penalised pattern in the vocabulary. The quotes are
          here to convince a reader, not to win stars in a SERP. */}
      <JsonLd
        data={graph(
          webPageSchema({
            locale,
            path: '/testimonials',
            title: TITLE,
            description: DESCRIPTION,
          }),
          breadcrumbSchema(locale, [
            { name: 'Testimonials', path: '/testimonials' },
          ]),
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
            {dictionary.common.kindWords}
          </SplitHeading>

          <Reveal delay={0.35}>
            <p className="mt-8 max-w-[52ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
              {testimonialsArePublishable
                ? 'What it has been like to work together, in the words of the people who did.'
                : 'Nothing here yet, and nothing invented to fill the space.'}
            </p>
          </Reveal>
        </div>
      </section>

      {testimonialsArePublishable ? (
        <section className="px-5 pb-16 md:px-10 md:pb-24">
          <div className="shell">
            <div className="border-t border-[var(--color-border)]">
              {testimonials.map((testimonial) => (
                <Reveal key={testimonial.name}>
                  <article className="grid gap-8 border-b border-[var(--color-border)] py-12 md:grid-cols-12 md:gap-10 md:py-20">
                    <blockquote className="font-serif text-[clamp(20px,2vw,28px)] leading-[1.35] font-light tracking-[-0.015em] md:col-span-8">
                      <span aria-hidden>“</span>
                      {testimonial.quote[locale]}
                      <span aria-hidden>”</span>
                    </blockquote>
                    <figcaption className="flex flex-col text-[14px] md:col-span-4 md:items-end md:text-right">
                      <span className="text-white">{testimonial.name}</span>
                      {testimonial.lines[locale].map((line) => (
                        <span
                          key={line}
                          className="text-[var(--color-text-muted)]"
                        >
                          {line}
                        </span>
                      ))}
                    </figcaption>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* The honest empty state. It is a real answer to the question a
           visitor came with, and it sends them to the work — which is the
           evidence that exists — instead of to a dead end. */
        <section className="px-5 pb-16 md:px-10 md:pb-24">
          <div className="shell">
            <div className="border-t border-[var(--color-border)] pt-12 md:pt-16">
              <Reveal>
                <div className="md:grid md:grid-cols-12 md:gap-x-12">
                  <div className="space-y-5 text-[1.0625rem] leading-[1.6] text-[var(--color-text-soft)] md:col-span-7 md:col-start-1 md:max-w-[58ch] md:text-[1.125rem]">
                    <p>
                      I would rather leave this page empty than fill it with
                      quotes nobody said. Client testimonials go up here as they
                      come in, with a real name and a real company attached.
                    </p>
                    <p>
                      In the meantime, the case studies are the better evidence
                      anyway: each one sets out the brief, the decisions and
                      what actually shipped, which tells you more about working
                      together than a sentence of praise would.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link
                    href={localizedPath(locale, '/work')}
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-white bg-white px-6 text-[15px] leading-none text-black transition-colors duration-200 hover:bg-transparent hover:text-white"
                  >
                    {dictionary.common.allCaseStudies}
                  </Link>

                  <Link
                    href={localizedPath(locale, '/contact')}
                    className="group relative inline-flex items-center gap-2 pb-1 text-[15px] text-white"
                  >
                    {dictionary.nav.contact}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-white transition-transform duration-700 ease-out group-hover:scale-x-100"
                    />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
