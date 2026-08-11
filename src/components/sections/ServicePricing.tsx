import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import { getPackagesForService, pricingIsPublishable } from '@/content/pricing'
import type { Service } from '@/content/types'
import { getDictionary } from '@/content/dictionary'
import { localizedPath, type Locale } from '@/lib/i18n'

type ServicePricingProps = {
  locale: Locale
  service: Service
}

/**
 * The "what it costs" block on a service page.
 *
 * Fifteen service pages previously described work in detail and then offered no
 * route to a number — the reader's next question after "what do I get" is
 * always "what does it cost", and the only available answer was to go back to
 * the nav and hope.
 *
 * Two states, both honest:
 *
 *   - Prices set → the package name, its starting figure, and a link to
 *     `/pricing` to compare.
 *   - Prices not set → the same package name, "Price on request", and a link to
 *     `/contact` instead.
 *
 * That second link target is not cosmetic. While `pricingIsPublishable` is
 * false `/pricing` ships `noindex` and is deliberately absent from every nav;
 * pointing fifteen pages at it anyway would spend crawl budget on a URL that
 * has asked not to be indexed, and would land a visitor on four cards reading
 * "Price on request". The moment real figures land in `content/pricing.ts` both
 * the copy and the destination switch themselves, with no edit here.
 */
export function ServicePricing({ locale, service }: ServicePricingProps) {
  const dictionary = getDictionary(locale)
  const packages = getPackagesForService(service.slug)

  return (
    <section className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-20">
      <div className="shell">
        <Reveal>
          <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-12">
            <h2 className="font-serif text-[clamp(22px,2.4vw,28px)] leading-[1.15] font-light tracking-[-0.02em] md:col-span-3">
              {dictionary.common.whatItCosts}
            </h2>

            <div className="md:col-span-7 md:col-start-6">
              {packages.length ? (
                <ul className="space-y-8">
                  {packages.map((pkg) => (
                    <li key={pkg.slug}>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="font-serif text-[clamp(19px,2vw,24px)] leading-[1.2] font-light text-white">
                          {pkg.name[locale]}
                        </span>
                        {pkg.from ? (
                          <>
                            <span className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
                              {dictionary.common.priceFrom}
                            </span>
                            <span className="font-serif text-[clamp(19px,2vw,24px)] leading-[1.2] font-light text-white">
                              {pkg.from}
                            </span>
                            <span className="text-[14px] text-[var(--color-text-muted)]">
                              {pkg.unit[locale]}
                            </span>
                          </>
                        ) : (
                          <span className="text-[14px] text-[var(--color-text-muted)]">
                            {dictionary.common.priceOnRequest}
                          </span>
                        )}
                      </div>
                      <p className="mt-3 max-w-[56ch] text-[15px] leading-[1.55] text-[var(--color-text-soft)]">
                        {pkg.summary[locale]}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-serif text-[clamp(19px,2vw,24px)] leading-[1.2] font-light text-white">
                  {dictionary.common.quotedIndividually}
                </p>
              )}

              {/* Set on the three services no package covers, and optional
                  elsewhere. Without it a package-less service says only
                  "quoted per project", which is true and tells nobody why. */}
              {service.pricingNote ? (
                <p className="mt-6 max-w-[56ch] text-[15px] leading-[1.55] text-[var(--color-text-muted)]">
                  {service.pricingNote[locale]}
                </p>
              ) : null}

              <Link
                href={localizedPath(
                  locale,
                  pricingIsPublishable ? '/pricing' : '/contact',
                )}
                className="group relative mt-8 inline-flex items-center gap-2 pb-1 text-[15px] text-white"
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
          </div>
        </Reveal>
      </div>
    </section>
  )
}
