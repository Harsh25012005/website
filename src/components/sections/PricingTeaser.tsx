import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { pricingPackages, pricingIsPublishable } from '@/content/pricing'
import { localizedPath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'

type PricingTeaserProps = {
  locale: Locale
  dictionary: Dictionary
}

/**
 * The four packages on the home page, between the services grid and the
 * articles.
 *
 * Position is the argument for it: the grid above answers "what does he do",
 * and the next question a visitor has is always "what does that cost". Sending
 * them from there straight to the articles asks them to keep browsing with the
 * one question they came with still open.
 *
 * Like `ServicePricing`, the destination depends on whether real figures exist.
 * While `pricingIsPublishable` is false, `/pricing` is `noindex` and out of
 * every nav, so this links to `/contact` instead — a sitewide link into a
 * noindexed page is crawl budget spent on a URL that asked to be left alone.
 * Set the four `from` values and both the figures and the link switch
 * themselves.
 */
export function PricingTeaser({ locale, dictionary }: PricingTeaserProps) {
  return (
    <section className="px-5 py-16 md:px-10 md:py-32">
      <div className="shell">
        <SplitHeading className="mb-12 font-serif text-[clamp(32px,4.5vw,64px)] leading-[1.05] font-light tracking-[-0.03em] md:mb-16">
          {dictionary.common.whatItCosts}
        </SplitHeading>

        {/* Two columns for four cards, so the grid closes on a full row. The
            right border is suppressed on every second cell for the same reason
            the services grid drops it on every third: ruled columns, not a
            boxed table. */}
        <ul className="grid border-t border-[var(--color-border)] md:grid-cols-2">
          {pricingPackages.map((pkg) => (
            <Reveal
              key={pkg.slug}
              className="border-b border-[var(--color-border)] md:[&:not(:nth-child(2n))]:border-r md:[&:not(:nth-child(2n))]:border-[var(--color-border)]"
            >
              <li className="py-6 md:p-8">
                <h3 className="font-serif text-[26px] leading-tight font-light text-white md:text-[30px]">
                  {pkg.name[locale]}
                </h3>

                <p className="mt-4 flex flex-wrap items-baseline gap-x-2 md:mt-6">
                  {pkg.from ? (
                    <>
                      <span className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
                        {dictionary.common.priceFrom}
                      </span>
                      <span className="font-serif text-[clamp(28px,3vw,36px)] leading-none font-light text-white">
                        {pkg.from}
                      </span>
                      <span className="text-[14px] text-[var(--color-text-muted)]">
                        {pkg.unit[locale]}
                      </span>
                    </>
                  ) : (
                    <span className="font-serif text-[clamp(20px,2.2vw,26px)] leading-none font-light text-[var(--color-text-soft)]">
                      {dictionary.common.priceOnRequest}
                    </span>
                  )}
                </p>

                <p className="mt-4 text-[15px] leading-[1.55] text-[var(--color-text-muted)] md:mt-6 md:max-w-[38ch]">
                  {pkg.bestFor[locale]}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="flex flex-col items-start gap-6 border-b border-[var(--color-border)] py-12 md:flex-row md:items-center md:justify-between md:gap-10 md:px-8 md:py-14">
            <p className="font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.15] font-light tracking-[-0.02em] md:max-w-[30ch]">
              <span className="text-white">
                Every project is a fixed price against a scope agreed up front.
              </span>
            </p>
            <Link
              href={localizedPath(
                locale,
                pricingIsPublishable ? '/pricing' : '/contact',
              )}
              className="group relative inline-flex shrink-0 items-center gap-2 pb-1 text-[15px] text-white"
            >
              {pricingIsPublishable
                ? dictionary.common.seePricing
                : dictionary.nav.contact}
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
  )
}
