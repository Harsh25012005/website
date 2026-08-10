import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { JsonLd } from '@/components/seo/JsonLd'
import {
  pricingPackages,
  pricingFaqs,
  pricingIsPublishable,
} from '@/content/pricing'
import { getService } from '@/content/services'
import { getDictionary } from '@/content/dictionary'
import { isLocale, localizedPath } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import { graph, breadcrumbSchema, webPageSchema, faqSchema } from '@/lib/schema'

type PageProps = { params: Promise<{ locale: string }> }

const TITLE = 'UI/UX Design Pricing and Packages'
const DESCRIPTION =
  'What UI/UX design costs: starting prices for a landing page, a multi-screen product design project, and a design-and-build engagement. Fixed scope, fixed quote.'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/pricing',
    title: TITLE,
    description: DESCRIPTION,
    imageAlt: 'UI/UX design pricing by Harsh Vaghela',
    keywords: [
      'UI/UX design pricing',
      'how much does UI UX design cost',
      'freelance designer rates',
      'website design cost',
      'SaaS design pricing',
    ],
    // A pricing page whose every price reads "on request" answers the query it
    // would rank for with nothing, which earns a bounce and teaches Google the
    // page is a poor result for that query — a lesson it is slow to unlearn
    // once the real figures land. Better to stay out of the index until the
    // page can do its job. Set the three `from` values in `content/pricing.ts`
    // and this flips itself.
    noindex: !pricingIsPublishable,
  })
}

export default async function PricingPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            locale,
            path: '/pricing',
            title: TITLE,
            description: DESCRIPTION,
          }),
          breadcrumbSchema(locale, [{ name: 'Pricing', path: '/pricing' }]),
          // Only when the answers describe a page a visitor can actually read
          // prices on. `FAQPage` markup on a noindex page earns nothing and
          // still counts against the site if the answers stop matching.
          ...(pricingIsPublishable
            ? [
                faqSchema(
                  pricingFaqs.map((faq) => ({
                    question: faq.question[locale],
                    answer: faq.answer[locale],
                  })),
                ),
              ]
            : []),
        )}
      />

      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem] md:pb-24">
        <div className="shell">
          <SplitHeading
            as="h1"
            immediate
            delay={0.1}
            className="max-w-[18ch] font-serif text-[clamp(40px,5.6vw,88px)] leading-[1.02] font-light tracking-[-0.04em] md:max-w-[20ch]"
          >
            What design costs, before you have to ask
          </SplitHeading>

          <Reveal delay={0.35}>
            <p className="mt-8 max-w-[54ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
              Three ways to work together, with a starting figure for each so
              you can tell in thirty seconds whether we are in the same range.
              Every project is quoted as a fixed price against a scope agreed
              before any work begins — no hourly billing, no open-ended
              estimate.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-20">
        <div className="shell">
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
            {pricingPackages.map((pkg, index) => (
              <Reveal key={pkg.slug} delay={index * 0.06}>
                <article className="flex h-full flex-col border-t border-[var(--color-border)] pt-8">
                  <h2 className="font-serif text-[clamp(26px,3vw,34px)] leading-[1.1] font-light tracking-[-0.02em]">
                    {pkg.name[locale]}
                  </h2>

                  <p className="mt-6 flex flex-wrap items-baseline gap-x-2">
                    {pkg.from ? (
                      <>
                        <span className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
                          From
                        </span>
                        <span className="font-serif text-[clamp(30px,3.4vw,40px)] leading-none font-light text-white">
                          {pkg.from}
                        </span>
                        <span className="text-[14px] text-[var(--color-text-muted)]">
                          {pkg.unit[locale]}
                        </span>
                      </>
                    ) : (
                      <span className="font-serif text-[clamp(22px,2.4vw,28px)] leading-none font-light text-[var(--color-text-soft)]">
                        Price on request
                      </span>
                    )}
                  </p>

                  <p className="mt-6 text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)]">
                    {pkg.summary[locale]}
                  </p>

                  <p className="mt-6 border-t border-[var(--color-border)] pt-6 text-[15px] leading-[1.55] text-[var(--color-text-muted)]">
                    <span className="text-[var(--color-text-soft)]">
                      Best for:{' '}
                    </span>
                    {pkg.bestFor[locale]}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-[var(--color-border)] pt-6">
                    {pkg.includes[locale].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[15px] leading-[1.55] text-[var(--color-text-muted)]"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-muted)]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Pushes the service links to the bottom edge so the three
                      cards line up regardless of how long the list above is. */}
                  <div className="mt-auto pt-8">
                    <p className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
                      Services involved
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                      {pkg.services.map((slug) => {
                        const service = getService(slug)
                        if (!service) return null

                        return (
                          <li key={slug}>
                            <Link
                              href={localizedPath(locale, `/services/${slug}`)}
                              className="group relative inline-block pb-0.5 text-[14px] text-[var(--color-text-soft)] transition-colors hover:text-white"
                            >
                              {service.title[locale]}
                              <span
                                aria-hidden
                                className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100"
                              />
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-24"
        aria-labelledby="pricing-faq-heading"
      >
        <div className="shell">
          <Reveal>
            <h2
              id="pricing-faq-heading"
              className="max-w-[16ch] font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.05] font-light tracking-[-0.03em]"
            >
              Questions about cost
            </h2>
          </Reveal>

          <div className="mt-12 border-t border-[var(--color-border)] md:mt-16">
            {pricingFaqs.map((faq) => (
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
                  Tell me the scope and you get a fixed quote, not an hourly
                  rate.
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
