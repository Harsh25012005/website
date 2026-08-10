import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { HoverSwapText } from '@/components/ui/HoverSwapText'
import { services } from '@/content/about'
import { localizedPath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'

type ServicesProps = {
  locale: Locale
  dictionary: Dictionary
}

/**
 * Six numbered cells on a hairline grid, closing with an inline CTA row.
 * The right border is suppressed on every third cell so the grid reads as
 * ruled columns rather than a boxed table.
 */
export function Services({ locale, dictionary }: ServicesProps) {
  return (
    <section className="px-5 py-16 md:px-10 md:py-32">
      <div className="shell">
        <SplitHeading className="mb-12 font-serif text-[clamp(32px,4.5vw,64px)] leading-[1.05] font-light tracking-[-0.03em] md:mb-16">
          {dictionary.common.whatIDo}
        </SplitHeading>

        <ul className="grid border-t border-[var(--color-border)] md:grid-cols-3">
          {services.map((service) => (
            <Reveal
              key={service.number}
              className="border-b border-[var(--color-border)] md:[&:not(:nth-child(3n))]:border-r md:[&:not(:nth-child(3n))]:border-[var(--color-border)]"
            >
              <li>
                {/* The whole cell is the link, and the anchor text is the
                    service name — six descriptive internal links from the
                    highest-equity page on the site straight into the six pages
                    that carry the commercial terms.

                    No `data-cursor-label` here, unlike the project cards. The
                    custom cursor swells into a filled disc to hold the label,
                    which on these cells lands directly over the copy it is
                    sitting on top of and hides it. It works on `ProjectCard`
                    because the cursor is over an image with nothing to read. */}
                <Link
                  href={localizedPath(locale, `/services/${service.slug}`)}
                  className="group block py-6 md:p-8"
                >
                  <span className="text-[11px] text-[var(--color-text-muted)]">
                    {service.number}
                  </span>
                  <h3 className="mt-5 font-serif text-[26px] leading-tight font-light md:mt-8 md:text-[30px]">
                    <HoverSwapText swap={dictionary.common.viewService}>
                      {service.title[locale]}
                    </HoverSwapText>
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.55] text-[var(--color-text-muted)] md:mt-6 md:max-w-[34ch]">
                    {service.description[locale]}
                  </p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="flex flex-col items-start gap-6 border-b border-[var(--color-border)] py-12 md:flex-row md:items-center md:justify-between md:gap-10 md:px-8 md:py-14">
            <p className="font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.15] font-light tracking-[-0.02em] md:max-w-[28ch]">
              <span className="text-white">
                Have a project in mind? Let’s talk.
              </span>
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {/* `/services` holds the deliverables, the process and the FAQ —
                  all of the commercial long-tail copy. Before this, the home
                  page summarised it in six cards and then sent everyone
                  straight to the contact form, so the page doing the ranking
                  had exactly one internal link pointing at it, from the nav. */}
              <Link
                href={localizedPath(locale, '/services')}
                className="group relative inline-flex items-center gap-2 pb-1 text-[15px] text-white"
              >
                {dictionary.common.allServices}
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

              <Link
                href={localizedPath(locale, '/contact')}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white bg-white px-6 text-[15px] leading-none text-black transition-colors duration-200 hover:bg-transparent hover:text-white"
              >
                {dictionary.nav.contact}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
