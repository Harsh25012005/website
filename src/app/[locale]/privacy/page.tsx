import { notFound } from 'next/navigation'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { privacyIntro, privacySections, lastUpdated } from '@/content/privacy'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/privacy',
    title: 'Privacy Policy',
    description: 'What this site collects, why, and what your rights are.',
  })
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const updated = new Date(lastUpdated).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <section className="px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem] md:pb-24">
      <div className="shell">
        <div className="md:grid md:grid-cols-12 md:gap-x-12">
          <div className="md:col-span-8 md:col-start-3">
            <Reveal y={12}>
              <p className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
                Legal
              </p>
            </Reveal>

            <SplitHeading
              as="h1"
              immediate
              delay={0.12}
              className="mt-6 font-serif text-[clamp(40px,5vw,5rem)] leading-[1.05] font-light tracking-[-0.04em]"
            >
              Privacy Policy
            </SplitHeading>

            <Reveal delay={0.3}>
              <p className="mt-6 text-[14px] text-[var(--color-text-muted)]">
                Last updated: {updated}
              </p>
            </Reveal>

            <Reveal delay={0.36}>
              <p className="mt-10 text-[1.0625rem] leading-[1.6] text-[var(--color-text-soft)] md:text-[1.125rem]">
                {privacyIntro[locale]}
              </p>
            </Reveal>

            <div className="mt-14 space-y-12">
              {privacySections.map((section) => (
                <Reveal key={section.heading[locale]} as="section" y={18}>
                  <h2 className="font-serif text-[clamp(22px,2.4vw,30px)] leading-[1.2] font-light tracking-[-0.02em] text-[var(--color-text)]">
                    {section.heading[locale]}
                  </h2>
                  <div className="mt-4 space-y-4 text-[1.0625rem] leading-[1.6] text-[var(--color-text-soft)]">
                    {section.paragraphs[locale].map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
