import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { JsonLd } from '@/components/seo/JsonLd'
import { localIntro, localSections, localFaqs } from '@/content/local'
import { services } from '@/content/services'
import { site } from '@/content/site'
import { getDictionary } from '@/content/dictionary'
import { isLocale, localizedPath } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import {
  graph,
  breadcrumbSchema,
  professionalServiceSchema,
  webPageSchema,
  faqSchema,
} from '@/lib/schema'

type PageProps = { params: Promise<{ locale: string }> }

const PATH = '/ui-ux-designer-in-ahmedabad'

// The URL and the title carry the query verbatim, because that is what a local
// search looks like. Everywhere else on the site the topic leads and the city
// is incidental; here it is the other way round, and this is the only page on
// which that is true.
const TITLE = 'UI/UX Designer in Ahmedabad, Gujarat'
const DESCRIPTION =
  'Freelance UI/UX and product designer in Ahmedabad, Gujarat. Web UI, design systems, mobile app and SaaS design for local businesses, agencies and remote clients.'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: PATH,
    title: TITLE,
    description: DESCRIPTION,
    imageAlt: `${site.name}, UI/UX designer in Ahmedabad`,
    keywords: [
      'UI UX designer in Ahmedabad',
      'freelance web designer Ahmedabad',
      'UI UX design services Gujarat',
      'app designer Ahmedabad',
      'website designer Ahmedabad',
    ],
  })
}

export default async function AhmedabadPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  return (
    <>
      {/* `ProfessionalService` is restated here rather than referenced by
          `@id` alone for the same reason it is on `/services`: this is the page
          the address and `areaServed` actually describe, so the local-business
          node and the document making the local claim belong in one graph. */}
      <JsonLd
        data={graph(
          professionalServiceSchema(),
          webPageSchema({
            locale,
            path: PATH,
            title: TITLE,
            description: DESCRIPTION,
          }),
          breadcrumbSchema(locale, [
            { name: 'UI/UX designer in Ahmedabad', path: PATH },
          ]),
          faqSchema(
            localFaqs.map((faq) => ({
              question: faq.question[locale],
              answer: faq.answer[locale],
            })),
          ),
        )}
      />

      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem] md:pb-24">
        <div className="shell">
          <Reveal y={12}>
            <p className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
              {site.location[locale]}
            </p>
          </Reveal>

          <SplitHeading
            as="h1"
            immediate
            delay={0.12}
            className="mt-6 max-w-[18ch] font-serif text-[clamp(40px,5.6vw,88px)] leading-[1.02] font-light tracking-[-0.04em]"
          >
            UI/UX designer in Ahmedabad
          </SplitHeading>

          <Reveal delay={0.35}>
            <p className="mt-8 max-w-[56ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
              {localIntro[locale]}
            </p>
          </Reveal>
        </div>
      </section>

      {localSections.map((section) => (
        <section
          key={section.heading[locale]}
          className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-20"
        >
          <div className="shell">
            <Reveal>
              <div className="grid gap-y-6 md:grid-cols-12 md:gap-x-12">
                <h2 className="font-serif text-[clamp(26px,3vw,36px)] leading-[1.1] font-light tracking-[-0.02em] md:col-span-4 md:max-w-[16ch]">
                  {section.heading[locale]}
                </h2>

                <div className="space-y-4 text-[1.0625rem] leading-[1.6] text-[var(--color-text-soft)] md:col-span-7 md:col-start-6 md:max-w-[56ch] md:text-[1.125rem]">
                  {section.paragraphs[locale].map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-20">
        <div className="shell">
          <Reveal>
            <h2 className="max-w-[20ch] font-serif text-[clamp(26px,3vw,40px)] leading-[1.05] font-light tracking-[-0.03em]">
              What I design for clients here
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-x-8 gap-y-8 border-t border-[var(--color-border)] pt-10 md:grid-cols-3">
            {services.map((service) => (
              // The reveal wrapper is the list item; a `<div>` between the
              // `<ul>` and its `<li>`s is invalid and also makes the reveal —
              // not the item — the grid child.
              <Reveal as="li" key={service.slug}>
                <Link
                  href={localizedPath(locale, `/services/${service.slug}`)}
                  className="group block"
                >
                  <h3 className="font-serif text-[clamp(20px,2.2vw,26px)] leading-[1.15] font-light transition-colors group-hover:text-white">
                    {service.title[locale]}
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.55] text-[var(--color-text-muted)]">
                    {service.description[locale]}
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
              <Link
                href={localizedPath(locale, '/work')}
                className="group relative inline-flex items-center gap-2 pb-1 text-[15px] text-white"
              >
                {dictionary.common.allCaseStudies}
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
      </section>

      <section
        className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-24"
        aria-labelledby="local-faq-heading"
      >
        <div className="shell">
          <Reveal>
            <h2
              id="local-faq-heading"
              className="max-w-[16ch] font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.05] font-light tracking-[-0.03em]"
            >
              Working together locally
            </h2>
          </Reveal>

          <div className="mt-12 border-t border-[var(--color-border)] md:mt-16">
            {localFaqs.map((faq) => (
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

      <section className="px-5 pb-16 md:px-10 md:pb-32">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col items-start gap-6 border-t border-[var(--color-border)] pt-12 md:flex-row md:items-center md:justify-between md:gap-10 md:pt-16">
              <p className="font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.15] font-light tracking-[-0.02em] md:max-w-[30ch]">
                <span className="text-white">
                  Based in Ahmedabad and need a designer? Let’s meet.
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
