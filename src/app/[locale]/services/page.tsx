import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { HoverSwapText } from '@/components/ui/HoverSwapText'
import { JsonLd } from '@/components/seo/JsonLd'
import { servicesByPillar } from '@/content/services'
import { pillars, pillarOrder, pillarPath } from '@/content/pillars'
import { servicesProcess, servicesFaqs } from '@/content/about'
import { getDictionary } from '@/content/dictionary'
import { localizedPath, isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import {
  graph,
  breadcrumbSchema,
  professionalServiceSchema,
  collectionPageSchema,
  faqSchema,
} from '@/lib/schema'

type PageProps = { params: Promise<{ locale: string }> }

/**
 * Was "UI/UX Design Services for Web, Mobile & SaaS", which now belongs to
 * `/services/ui-ux-design` — that page is the one that should answer the
 * design query, and two URLs competing for it would let Google pick which to
 * drop. This page moved up a level to the term that covers both halves.
 */
const TITLE = 'Design and Development Services'
const DESCRIPTION =
  'Two halves of one practice: UI/UX design in Figma for web, mobile and SaaS, and custom front-end development in React, Next.js, Webflow and Framer.'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/services',
    title: TITLE,
    description: DESCRIPTION,
    imageAlt: 'Design and development services by Harsh Vaghela',
    keywords: [
      'UI/UX design services',
      'custom development services',
      'design and development services',
      'React and Next.js development',
      'Webflow and Framer development',
      'Figma to code',
    ],
  })
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  return (
    <>
      {/* `ProfessionalService` is restated here rather than referenced: this is
          the page that lists the offers, so the OfferCatalog and the page node
          describing it belong in one graph. */}
      <JsonLd
        data={graph(
          professionalServiceSchema(),
          // The `ItemList` names the two hubs, not all fifteen services. They
          // are this page's direct children, and each hub's own CollectionPage
          // enumerates the services beneath it — a flat list of fifteen here
          // would flatten a hierarchy the site actually has. Every service is
          // still a plain anchor in the markup below, which is what a crawler
          // follows.
          collectionPageSchema({
            locale,
            path: '/services',
            title: TITLE,
            description: DESCRIPTION,
            items: pillarOrder.map((key) => ({
              name: pillars[key].title[locale],
              path: pillarPath(key),
            })),
          }),
          breadcrumbSchema(locale, [{ name: 'Services', path: '/services' }]),
          faqSchema(
            servicesFaqs.map((faq) => ({
              question: faq.question[locale],
              answer: faq.answer[locale],
            })),
          ),
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
            Design and development, from the first flow to the live site
          </SplitHeading>

          <Reveal delay={0.35}>
            <p className="mt-8 max-w-[54ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
              I design interfaces in Figma, Framer, Webflow and Sketch, and
              build the front end in HTML, CSS, Tailwind CSS, React, Next.js and
              PHP. Take either half on its own, or both, in which case nothing
              is lost in handoff because there is no handoff.
            </p>
          </Reveal>
        </div>
      </section>

      {/* One group per pillar. The group heading links to that pillar's hub —
          which is the page carrying the head term — and each row links to the
          service that answers a specific one. */}
      {pillarOrder.map((key) => {
        const pillar = pillars[key]
        const items = servicesByPillar(key)

        return (
          <section
            key={key}
            className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-20"
          >
            <div className="shell">
              <Reveal>
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
                  <h2 className="max-w-[16ch] font-serif text-[clamp(30px,4vw,52px)] leading-[1.05] font-light tracking-[-0.03em]">
                    <Link
                      href={localizedPath(locale, pillarPath(key))}
                      className="group"
                    >
                      <HoverSwapText swap="View all" className="pb-[0.1em]">
                        {pillar.title[locale]}
                      </HoverSwapText>
                    </Link>
                  </h2>
                  <p className="text-[13px] text-[var(--color-text-muted)]">
                    {items.length} services
                  </p>
                </div>
              </Reveal>

              <ul className="mt-10 md:mt-14">
                {items.map((service) => (
                  // `as="li"` with the rule and padding hoisted off the inner
                  // `<li>`: the `<ul>` now has only list-item children, which
                  // is what the markup always meant. Border then padding on one
                  // box renders identically to the two nested ones.
                  <Reveal
                    as="li"
                    key={service.slug}
                    className="border-t border-[var(--color-border)] py-8 md:py-10"
                  >
                    <div className="grid gap-y-4 md:grid-cols-12 md:gap-x-12">
                      <div className="md:col-span-4">
                        <span className="text-[11px] text-[var(--color-text-muted)]">
                          {service.number}
                        </span>
                        {/* The heading is the link. Anchor text that reads
                              "Webflow development" tells a crawler what the
                              destination is about; "Learn more" repeated
                              fifteen times tells it nothing. */}
                        <h3 className="mt-3 max-w-[16ch] font-serif text-[clamp(22px,2.4vw,30px)] leading-[1.15] font-light tracking-[-0.02em]">
                          <Link
                            href={localizedPath(
                              locale,
                              `/services/${service.slug}`,
                            )}
                            className="group block"
                          >
                            {/* `leading-[1.15]` sits tight enough that the
                                  clip box would shave the descenders off the
                                  serif face; the padding buys them back. */}
                            <HoverSwapText
                              swap={dictionary.common.viewService}
                              className="pb-[0.1em]"
                            >
                              {service.title[locale]}
                            </HoverSwapText>
                          </Link>
                        </h3>
                      </div>

                      <div className="md:col-span-7 md:col-start-6">
                        <p className="max-w-[56ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)]">
                          {service.description[locale]}
                        </p>

                        <ul className="mt-6 space-y-2">
                          {service.deliverables[locale].map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-[14px] leading-[1.55] text-[var(--color-text-muted)]"
                            >
                              <span
                                aria-hidden
                                className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-muted)]"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <Reveal>
                <Link
                  href={localizedPath(locale, pillarPath(key))}
                  className="group relative mt-10 inline-flex items-center gap-2 border-t border-transparent pb-1 text-[15px] text-white"
                >
                  {pillar.linkLabel[locale]}
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
              </Reveal>
            </div>
          </section>
        )
      })}

      {/* The four-step summary, not the full account. `/process` carries the
          six phases, what each one produces and the honest parts; duplicating
          that here would give two URLs the same content and no reason to visit
          the deeper one. */}
      <section className="relative border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-24">
        <div className="shell">
          <Reveal>
            <h2 className="max-w-[16ch] font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.05] font-light tracking-[-0.03em]">
              How I work
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-x-12 gap-y-12 border-t border-[var(--color-border)] pt-12 md:mt-16 md:grid-cols-2 md:gap-y-16 md:pt-16">
            {servicesProcess.map((step) => (
              <Reveal key={step.heading[locale]}>
                <h3 className="font-serif text-[clamp(22px,2.4vw,28px)] leading-[1.15] font-light tracking-[-0.02em]">
                  {step.heading[locale]}
                </h3>
                <div className="mt-4 space-y-4 text-[15px] leading-[1.55] text-[var(--color-text-muted)] md:max-w-[38ch]">
                  {step.paragraphs[locale].map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link
              href={localizedPath(locale, '/process')}
              className="group relative mt-12 inline-flex items-center gap-2 pb-1 text-[15px] text-white md:mt-16"
            >
              The full process, phase by phase
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
          </Reveal>
        </div>
      </section>

      {/* Rendered, not just marked up. `FAQPage` schema describing questions a
          visitor cannot read on the page is a structured-data violation, and
          the visible copy is the half that does the convincing anyway. Native
          <details> so the answers stay in the DOM, expandable without
          JavaScript, and readable by a crawler whether or not it opens them. */}
      <section
        className="relative px-5 py-16 md:px-10 md:py-24"
        aria-labelledby="faq-heading"
      >
        <div className="shell">
          <Reveal>
            <h2
              id="faq-heading"
              className="max-w-[16ch] font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.05] font-light tracking-[-0.03em]"
            >
              Common questions
            </h2>
          </Reveal>

          <div className="mt-12 border-t border-[var(--color-border)] md:mt-16">
            {servicesFaqs.map((faq) => (
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
              <p className="font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.15] font-light tracking-[-0.02em] md:max-w-[28ch]">
                <span className="text-white">
                  Have a project in mind? Let’s talk.
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
