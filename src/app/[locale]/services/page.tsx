import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { services, servicesProcess } from '@/content/about'
import { getDictionary } from '@/content/dictionary'
import { localizedPath, isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/services',
    title: 'Services - UI/UX & Product Design | Harsh Vaghela',
    description:
      'UI/UX design services: web UI design, mobile app design, SaaS product design and design systems, from Figma to a live, coded build.',
  })
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  return (
    <>
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
              I design interfaces in Figma, Framer, Webflow and Sketch, and can take them further into a coded build with HTML, CSS, Tailwind, React, Next.js and PHP, so the handoff never loses fidelity.
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
