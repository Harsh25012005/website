import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { site } from '@/content/site'
import { getDictionary } from '@/content/dictionary'
import { isLocale, localizedPath } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/thank-you',
    title: 'Thank you',
    description: 'Your message has been sent.',
    // A conversion destination, not a landing page. It exists so there is a
    // distinct URL to measure enquiries against — nobody should ever arrive
    // here from a search result, and if they did the page would be useless to
    // them. `noindex, follow` keeps it measurable without letting it rank or
    // dilute the site's topical signal, and it stays out of `sitemap.ts`.
    noindex: true,
  })
}

export default async function ThankYouPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  const next = [
    {
      href: '/work',
      label: dictionary.nav.work,
      description: 'Case studies with the brief, the process and the outcome.',
    },
    {
      href: '/services',
      label: dictionary.nav.services,
      description: 'What I take on, and what you get at the end of it.',
    },
    {
      href: '/articles',
      label: dictionary.nav.articles,
      description: 'Notes on design systems, handoff and front-end work.',
    },
  ]

  return (
    <section className="px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem] md:pb-32">
      <div className="shell">
        <div className="md:grid md:grid-cols-12 md:gap-x-12">
          <div className="md:col-span-8 md:col-start-3">
            <Reveal y={12}>
              <p className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
                {dictionary.nav.contact}
              </p>
            </Reveal>

            <SplitHeading
              as="h1"
              immediate
              delay={0.12}
              className="mt-6 max-w-[16ch] font-serif text-[clamp(40px,5.6vw,80px)] leading-[1.03] font-light tracking-[-0.04em]"
            >
              Your message has been sent
            </SplitHeading>

            {/* Worded against what actually happened. The form only routes here
                after `/api/contact` confirms the send, so the stronger claim is
                true — a failed send keeps the visitor on the form instead. */}
            <Reveal delay={0.32}>
              <p className="mt-8 max-w-[54ch] text-[1.0625rem] leading-[1.6] text-[var(--color-text-soft)] md:text-[1.1875rem]">
                It has landed in my inbox. I read everything and usually reply
                within a couple of working days.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-6 max-w-[54ch] text-[1.0625rem] leading-[1.6] text-[var(--color-text-muted)]">
                Something to add? Write to{' '}
                <a
                  href={`mailto:${site.email}`}
                  className="text-white underline underline-offset-4 transition-colors hover:text-[var(--color-text-soft)]"
                >
                  {site.email}
                </a>{' '}
                directly. It reaches the same inbox.
              </p>
            </Reveal>

            <div className="mt-16 border-t border-[var(--color-border)] pt-10 md:mt-20">
              <Reveal>
                <h2 className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
                  While you wait
                </h2>
              </Reveal>

              {/* Three across from `lg` up, stacked below. Not `md`: this list
                  sits in an 8-of-12 column, so at 768px a third of it is ~123px
                  and the descriptions break to about fourteen characters a line.
                  `as="li"` puts the list item directly under the `ul` — the
                  reveal wrapper would otherwise sit between them, which is
                  invalid — and makes it the grid child. */}
              <ul className="mt-8 grid gap-8 lg:grid-cols-3">
                {next.map((item, index) => (
                  <Reveal as="li" key={item.href} delay={index * 0.06}>
                    <Link
                      href={localizedPath(locale, item.href)}
                      className="group block"
                    >
                      <span className="font-serif text-[clamp(22px,2.4vw,30px)] leading-[1.15] font-light tracking-[-0.02em] transition-colors group-hover:text-white">
                        {item.label}
                      </span>
                      <span className="mt-2 block text-[15px] leading-[1.55] text-[var(--color-text-muted)]">
                        {item.description}
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
