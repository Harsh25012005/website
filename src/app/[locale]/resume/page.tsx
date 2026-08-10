import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { JsonLd } from '@/components/seo/JsonLd'
import { resumeSummary, resumeExperience } from '@/content/resume'
import { skills, tools } from '@/content/about'
import { services } from '@/content/services'
import { site } from '@/content/site'
import { getDictionary } from '@/content/dictionary'
import { isLocale, localizedPath } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import { graph, breadcrumbSchema, webPageSchema } from '@/lib/schema'

type PageProps = { params: Promise<{ locale: string }> }

const TITLE = 'Résumé — UI/UX & Product Designer'
const DESCRIPTION =
  'The résumé of Harsh Vaghela, freelance UI/UX and product designer in Ahmedabad: experience, education, design and front-end skills, and the tools behind them.'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/resume',
    title: TITLE,
    description: DESCRIPTION,
    imageAlt: `${site.name}, UI/UX and product designer`,
    keywords: [
      'Harsh Vaghela resume',
      'UI UX designer CV',
      'product designer resume',
      'freelance designer Ahmedabad',
    ],
  })
}

export default async function ResumePage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  return (
    <>
      <JsonLd
        data={graph(
          // `ProfilePage` rather than `WebPage`: this document is the entity's
          // profile, which is the distinction that makes it a strong input to
          // the Person entity behind brand-name queries.
          webPageSchema({
            locale,
            path: '/resume',
            title: TITLE,
            description: DESCRIPTION,
            type: 'ProfilePage',
          }),
          breadcrumbSchema(locale, [{ name: 'Résumé', path: '/resume' }]),
        )}
      />

      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem] md:pb-16">
        <div className="shell">
          <div className="md:grid md:grid-cols-12 md:gap-x-12">
            <div className="md:col-span-9">
              <Reveal y={12}>
                <p className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
                  {site.jobTitle} — {site.location[locale]}
                </p>
              </Reveal>

              <SplitHeading
                as="h1"
                immediate
                delay={0.12}
                className="mt-6 font-serif text-[clamp(40px,5.6vw,80px)] leading-[1.03] font-light tracking-[-0.04em]"
              >
                {site.name}
              </SplitHeading>

              <Reveal delay={0.32}>
                <p className="mt-8 max-w-[58ch] text-[1.0625rem] leading-[1.6] text-[var(--color-text-soft)] md:text-[1.1875rem]">
                  {resumeSummary[locale]}
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-[var(--color-text-muted)]">
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-white"
                  >
                    {site.email}
                  </a>
                  <span>{site.location[locale]}</span>
                  <span>{site.availability}</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Section title="Experience">
        <ol className="space-y-12">
          {resumeExperience.map((entry) => (
            <Reveal key={`${entry.role[locale]}-${entry.organisation[locale]}`}>
              <li className="grid gap-y-4 md:grid-cols-12 md:gap-x-12">
                {/* Omitted entirely when null rather than rendered as a dash —
                    see the note on `ResumeEntry.period`. */}
                {entry.period ? (
                  <p className="text-[14px] text-[var(--color-text-muted)] md:col-span-3">
                    {entry.period}
                  </p>
                ) : null}

                <div className="md:col-span-8 md:col-start-5">
                  <h3 className="font-serif text-[clamp(22px,2.4vw,28px)] leading-[1.15] font-light tracking-[-0.02em]">
                    {entry.role[locale]}
                  </h3>
                  <p className="mt-2 text-[15px] text-[var(--color-text-muted)]">
                    {entry.organisation[locale]} · {entry.location[locale]}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {entry.points[locale].map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-[15px] leading-[1.6] text-[var(--color-text-soft)] md:max-w-[58ch]"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-[var(--color-text-muted)]"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Read from `site.education`, which is also what feeds `alumniOf` and
          `hasCredential` in the Person schema — so the page and the markup
          cannot disagree about where the degrees came from. */}
      <Section title="Education">
        <ol className="space-y-10">
          {site.education.map((entry) => (
            <Reveal key={entry.name}>
              <li className="grid gap-y-2 md:grid-cols-12 md:gap-x-12">
                <div className="md:col-span-8 md:col-start-5">
                  <h3 className="font-serif text-[clamp(20px,2.2vw,26px)] leading-[1.15] font-light tracking-[-0.02em]">
                    {entry.credential}
                  </h3>
                  <p className="mt-2 text-[15px] text-[var(--color-text-muted)]">
                    {entry.name}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section title="What I do">
        <Reveal>
          <ul className="grid gap-x-8 gap-y-6 md:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={localizedPath(locale, `/services/${service.slug}`)}
                  className="group block"
                >
                  <span className="font-serif text-[clamp(19px,2vw,24px)] leading-[1.2] font-light transition-colors group-hover:text-white">
                    {service.title[locale]}
                  </span>
                  <span className="mt-2 block max-w-[42ch] text-[14px] leading-[1.55] text-[var(--color-text-muted)]">
                    {service.description[locale]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section title="Skills">
        <Reveal>
          <TagList items={skills} />
        </Reveal>
      </Section>

      <Section title="Tools">
        <Reveal>
          <TagList items={tools} />
        </Reveal>
        <Reveal>
          <p className="mt-8 text-[15px] leading-[1.6] text-[var(--color-text-muted)] md:max-w-[52ch]">
            More on how these are actually used, day to day, on the{' '}
            <Link
              href={localizedPath(locale, '/tools')}
              className="text-white underline underline-offset-4 transition-colors hover:text-[var(--color-text-soft)]"
            >
              tools page
            </Link>
            .
          </p>
        </Reveal>
      </Section>

      <section className="px-5 pb-16 md:px-10 md:pb-32">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col items-start gap-6 border-t border-[var(--color-border)] pt-12 md:flex-row md:items-center md:justify-between md:gap-10 md:pt-16">
              <p className="font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.15] font-light tracking-[-0.02em] md:max-w-[30ch]">
                <span className="text-white">
                  Hiring, or have a project? The inbox is open.
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

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="border-t border-[var(--color-border)] px-5 py-14 md:px-10 md:py-16">
      <div className="shell">
        <div className="md:grid md:grid-cols-12 md:gap-x-12">
          <Reveal y={12}>
            <h2 className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase md:col-span-3">
              {title}
            </h2>
          </Reveal>
        </div>
        <div className="mt-8 md:mt-10">{children}</div>
      </div>
    </section>
  )
}

function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-[var(--color-border)] px-4 py-2 text-[14px] text-[var(--color-text-soft)]"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
