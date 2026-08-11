import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { HoverSwapText } from '@/components/ui/HoverSwapText'
import { JsonLd } from '@/components/seo/JsonLd'
import { servicesByPillar } from '@/content/services'
import { pillars, pillarPath, otherPillar } from '@/content/pillars'
import { getDictionary } from '@/content/dictionary'
import type { ServicePillar } from '@/content/types'
import { localizedPath, type Locale } from '@/lib/i18n'
import {
  graph,
  breadcrumbSchema,
  collectionPageSchema,
  faqSchema,
} from '@/lib/schema'

type PillarHubProps = {
  locale: Locale
  pillar: ServicePillar
}

/**
 * Both `/services/ui-ux-design` and `/services/custom-development` render
 * through here. They are the same page with different content, and two copies
 * of this JSX would drift within a month — the second one always gets the fix
 * six weeks late.
 *
 * No `Service` schema node is emitted: a hub is not an offer. It gets
 * `CollectionPage` + `ItemList`, which is what says "these n things are the
 * point of this document" without adding an unbuyable entry to the catalogue.
 */
export function PillarHub({ locale, pillar }: PillarHubProps) {
  const dictionary = getDictionary(locale)
  const page = pillars[pillar]
  const items = servicesByPillar(pillar)
  const other = pillars[otherPillar(pillar)]
  const path = pillarPath(pillar)

  return (
    <>
      <JsonLd
        data={graph(
          collectionPageSchema({
            locale,
            path,
            title: page.metaTitle,
            description: page.metaDescription,
            items: items.map((service) => ({
              name: service.title[locale],
              path: `/services/${service.slug}`,
            })),
          }),
          breadcrumbSchema(locale, [
            { name: 'Services', path: '/services' },
            { name: page.title[locale], path },
          ]),
          faqSchema(
            page.faqs.map((faq) => ({
              question: faq.question[locale],
              answer: faq.answer[locale],
            })),
          ),
        )}
      />

      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem] md:pb-24">
        <div className="shell">
          <Reveal y={12}>
            <Link
              href={localizedPath(locale, '/services')}
              className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase transition-colors hover:text-white"
            >
              {dictionary.nav.services}
            </Link>
          </Reveal>

          <SplitHeading
            as="h1"
            immediate
            delay={0.12}
            className="mt-6 max-w-[18ch] font-serif text-[clamp(40px,5.6vw,88px)] leading-[1.02] font-light tracking-[-0.04em] md:max-w-[20ch]"
          >
            {page.heading[locale]}
          </SplitHeading>

          <Reveal delay={0.35}>
            <p className="mt-8 max-w-[56ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
              {page.intro[locale]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* The list first, sections after. Someone landing here from a search for
          "custom development services" is looking for the menu, not the essay;
          the prose below is for the reader who has already found their row. */}
      <section className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-20">
        <div className="shell">
          <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2 md:gap-y-14">
            {items.map((service) => (
              <Reveal key={service.slug}>
                <li>
                  <Link
                    href={localizedPath(locale, `/services/${service.slug}`)}
                    className="group block border-t border-[var(--color-border)] pt-6"
                  >
                    <span className="text-[11px] text-[var(--color-text-muted)]">
                      {service.number}
                    </span>
                    <h2 className="mt-4 font-serif text-[clamp(24px,2.8vw,32px)] leading-[1.15] font-light tracking-[-0.02em]">
                      <HoverSwapText
                        swap={dictionary.common.viewService}
                        className="pb-[0.1em]"
                      >
                        {service.title[locale]}
                      </HoverSwapText>
                    </h2>
                    <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.55] text-[var(--color-text-muted)]">
                      {service.description[locale]}
                    </p>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {page.sections.map((section) => (
        <section
          key={section.heading[locale]}
          className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-20"
        >
          <div className="shell">
            <Reveal>
              <div className="grid gap-y-6 md:grid-cols-12 md:gap-x-12">
                <h2 className="font-serif text-[clamp(26px,3vw,36px)] leading-[1.1] font-light tracking-[-0.02em] md:col-span-4 md:max-w-[14ch]">
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

      <section
        className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-24"
        aria-labelledby="pillar-faq-heading"
      >
        <div className="shell">
          <Reveal>
            <h2
              id="pillar-faq-heading"
              className="max-w-[16ch] font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.05] font-light tracking-[-0.03em]"
            >
              Common questions
            </h2>
          </Reveal>

          <div className="mt-12 border-t border-[var(--color-border)] md:mt-16">
            {page.faqs.map((faq) => (
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

      {/* The link between the two halves of the practice. Without it each hub
          is a cul-de-sac, and the visitor who arrived on the wrong one has to
          go back up to `/services` to find the other. */}
      <section className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-20">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
              <p className="font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.15] font-light tracking-[-0.02em] md:max-w-[28ch]">
                <span className="text-white">{page.crossLink[locale]}</span>
              </p>
              <Link
                href={localizedPath(locale, pillarPath(other.pillar))}
                className="group relative inline-flex shrink-0 items-center gap-2 pb-1 text-[15px] text-white"
              >
                {other.title[locale]}
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
