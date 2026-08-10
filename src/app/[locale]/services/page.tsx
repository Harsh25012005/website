import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { JsonLd } from '@/components/seo/JsonLd'
import { services, servicesProcess, servicesFaqs } from '@/content/about'
import { getDictionary } from '@/content/dictionary'
import { localizedPath, isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import {
  graph,
  breadcrumbSchema,
  professionalServiceSchema,
  webPageSchema,
  faqSchema,
} from '@/lib/schema'

type PageProps = { params: Promise<{ locale: string }> }

// Was "Services - UI/UX & Product Design | Harsh Vaghela", which the layout
// template extended to "… | Harsh Vaghela - Harsh Vaghela" — and mixed a pipe
// separator into a site that uses a hyphen everywhere else.
const TITLE = 'UI/UX Design Services for Web, Mobile & SaaS'
const DESCRIPTION =
  'UI/UX design services from Ahmedabad, worldwide: web UI, design systems, mobile app and SaaS product design, plus Figma-to-React front-end builds. Fixed scope, fixed price.'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/services',
    title: TITLE,
    description: DESCRIPTION,
    imageAlt: 'UI/UX design services by Harsh Vaghela',
    keywords: [
      'UI/UX design services',
      'web UI design',
      'design system services',
      'mobile app UI design',
      'SaaS product design',
      'Figma to React development',
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
          webPageSchema({
            locale,
            path: '/services',
            title: TITLE,
            description: DESCRIPTION,
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
            UI/UX design services for web, mobile and SaaS products
          </SplitHeading>

          <Reveal delay={0.35}>
            <p className="mt-8 max-w-[52ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
              I design interfaces in Figma, Framer, Webflow and Sketch, and can
              take them further into a coded build with HTML, CSS, Tailwind,
              React, Next.js and PHP, so the handoff never loses fidelity.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Each service gets a full-width detail row rather than a small card,
          so the page reads as substance rather than a marketing grid. */}
      {services.map((service) => (
        <section
          key={service.number}
          className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-20"
        >
          <div className="shell">
            <Reveal>
              <div className="grid gap-y-6 md:grid-cols-12 md:gap-x-12">
                <div className="md:col-span-3">
                  <span className="text-[11px] text-[var(--color-text-muted)]">
                    {service.number}
                  </span>
                  <h2 className="mt-4 max-w-[16ch] font-serif text-[clamp(26px,3vw,36px)] leading-[1.1] font-light tracking-[-0.02em]">
                    {service.title[locale]}
                  </h2>
                </div>

                <div className="md:col-span-7 md:col-start-6">
                  <p className="max-w-[56ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
                    {service.description[locale]}
                  </p>

                  {service.deliverables ? (
                    <ul className="mt-8 space-y-3 border-t border-[var(--color-border)] pt-8">
                      {service.deliverables[locale].map((item) => (
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
                  ) : null}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="relative px-5 py-16 md:px-10 md:py-24">
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
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white bg-white px-6 text-[15px] leading-none text-black transition-colors duration-200 hover:bg-transparent hover:text-white"
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
