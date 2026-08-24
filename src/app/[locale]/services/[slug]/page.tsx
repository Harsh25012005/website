import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { JsonLd } from '@/components/seo/JsonLd'
import { services, getService, servicesByPillar } from '@/content/services'
import { pillars, pillarPath, otherPillar } from '@/content/pillars'
import { getProject } from '@/content/projects'
import { getDictionary } from '@/content/dictionary'
import { isLocale, localizedPath, locales } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import {
  graph,
  breadcrumbSchema,
  serviceSchema,
  webPageSchema,
  faqSchema,
} from '@/lib/schema'

type PageProps = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    services.map((service) => ({ locale, slug: service.slug })),
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params
  const service = getService(slug)
  if (!isLocale(locale) || !service) return {}

  return buildMetadata({
    locale,
    path: `/services/${slug}`,
    title: service.metaTitle,
    description: service.metaDescription,
    imageAlt: `${service.title[locale]} by Harsh Vaghela`,
    keywords: service.keywords,
  })
}

export default async function ServicePage({ params }: PageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()

  const service = getService(slug)
  if (!service) notFound()

  const dictionary = getDictionary(locale)

  // A stale slug in `relatedProjects` would otherwise render an empty grid with
  // a heading above it. The content test asserts these resolve; this keeps the
  // page honest if one is ever removed from `projects.ts` without the test run.
  const related = service.relatedProjects
    .map((projectSlug) => getProject(projectSlug))
    .filter((project) => project !== undefined)

  // Same pillar only. Sibling services are scoped to their own pillar rather
  // than listing every service at the foot of the page. The cross-pillar link
  // below is the deliberate, single route to the other half.
  const pillar = pillars[service.pillar]
  const siblings = servicesByPillar(service.pillar).filter(
    (item) => item.slug !== slug,
  )
  const other = pillars[otherPillar(service.pillar)]

  return (
    <>
      <JsonLd
        data={graph(
          serviceSchema(service, locale),
          webPageSchema({
            locale,
            path: `/services/${slug}`,
            title: service.metaTitle,
            description: service.metaDescription,
          }),
          // Three levels since the pillar hubs exist. The trail has to match
          // the links the page actually renders — the eyebrow below is the
          // visible half of this same path.
          breadcrumbSchema(locale, [
            { name: 'Services', path: '/services' },
            { name: pillar.title[locale], path: pillarPath(service.pillar) },
            { name: service.title[locale], path: `/services/${slug}` },
          ]),
          faqSchema(
            service.faqs.map((faq) => ({
              question: faq.question[locale],
              answer: faq.answer[locale],
            })),
          ),
        )}
      />

      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem] md:pb-24">
        <div className="shell">
          <Reveal y={12}>
            <p className="flex flex-wrap items-center gap-x-2 text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
              <Link
                href={localizedPath(locale, '/services')}
                className="transition-colors hover:text-white"
              >
                {dictionary.nav.services}
              </Link>
              <span aria-hidden>/</span>
              <Link
                href={localizedPath(locale, pillarPath(service.pillar))}
                className="transition-colors hover:text-white"
              >
                {pillar.title[locale]}
              </Link>
            </p>
          </Reveal>

          <SplitHeading
            as="h1"
            immediate
            delay={0.12}
            className="mt-6 max-w-[18ch] font-serif text-[clamp(40px,5.6vw,88px)] leading-[1.02] font-light tracking-[-0.04em] md:max-w-[20ch]"
          >
            {service.heading[locale]}
          </SplitHeading>

          <Reveal delay={0.35}>
            <p className="mt-8 max-w-[56ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
              {service.intro[locale]}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-20">
        <div className="shell">
          <Reveal>
            <div className="grid gap-y-6 md:grid-cols-12 md:gap-x-12">
              <h2 className="font-serif text-[clamp(22px,2.4vw,28px)] leading-[1.15] font-light tracking-[-0.02em] md:col-span-3">
                {dictionary.common.whatYouGet}
              </h2>

              <ul className="space-y-3 md:col-span-7 md:col-start-6">
                {service.deliverables[locale].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)]"
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
          </Reveal>
        </div>
      </section>

      {service.sections.map((section) => (
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

      {/* Proof, and the reason a service page beats a service section: the
          claim above is immediately followed by work that backs it, and the
          link equity flows on to the case studies. */}
      {related.length ? (
        <section className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-24">
          <div className="shell">
            <Reveal>
              <h2 className="font-serif text-[clamp(26px,3vw,40px)] leading-[1.05] font-light tracking-[-0.03em]">
                {dictionary.common.relatedWork}
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-y-12 md:grid-cols-2 md:gap-x-8">
              {related.map((project, index) => (
                <Reveal key={project.slug} delay={index * 0.06}>
                  <ProjectCard
                    project={project}
                    locale={locale}
                    dictionary={dictionary}
                    sizes="(max-width: 768px) 100vw, 45vw"
                    parallax={30}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section
        className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-24"
        aria-labelledby="service-faq-heading"
      >
        <div className="shell">
          <Reveal>
            <h2
              id="service-faq-heading"
              className="max-w-[16ch] font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.05] font-light tracking-[-0.03em]"
            >
              {dictionary.common.commonQuestions}
            </h2>
          </Reveal>

          <div className="mt-12 border-t border-[var(--color-border)] md:mt-16">
            {service.faqs.map((faq) => (
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

      {/* Sibling links on every detail page. Without them each service is a
          leaf reachable only from the hub, and a crawler has to return to
          `/services` to find the next one. */}
      <section className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-20">
        <div className="shell">
          <Reveal>
            <h2 className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
              {dictionary.common.otherServices}
            </h2>
          </Reveal>

          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {siblings.map((sibling) => (
              <li key={sibling.slug}>
                <Link
                  href={localizedPath(locale, `/services/${sibling.slug}`)}
                  className="group relative inline-block pb-1 font-serif text-[clamp(20px,2vw,26px)] leading-[1.2] font-light text-[var(--color-text-soft)] transition-colors hover:text-white"
                >
                  {sibling.title[locale]}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-current transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* The one route across to the other pillar. Siblings above are
              same-pillar, so without this a design page has no path to the
              development side except back up through `/services`. */}
          <Reveal>
            <p className="mt-10 text-[15px] text-[var(--color-text-muted)]">
              {pillar.crossLink[locale]}{' '}
              <Link
                href={localizedPath(locale, pillarPath(other.pillar))}
                className="group relative inline-block pb-0.5 text-white"
              >
                {other.title[locale]}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-current transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10 md:pb-32">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col items-start gap-6 border-t border-[var(--color-border)] pt-12 md:flex-row md:items-center md:justify-between md:gap-10 md:pt-16">
              <p className="font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.15] font-light tracking-[-0.02em] md:max-w-[28ch]">
                <span className="text-white">
                  {dictionary.common.letsTalk}
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
