import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { ParallaxFrame } from '@/components/motion/ParallaxFrame'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { JsonLd } from '@/components/seo/JsonLd'
import { projects, getProject, getRelatedProjects } from '@/content/projects'
import { getArticle } from '@/content/articles'
import { getDictionary } from '@/content/dictionary'
import { isLocale, localizedPath, locales } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import {
  graph,
  breadcrumbSchema,
  projectSchema,
  webPageSchema,
} from '@/lib/schema'
import { cn } from '@/lib/cn'

type PageProps = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params
  const project = getProject(slug)
  if (!isLocale(locale) || !project) return {}

  return buildMetadata({
    locale,
    path: `/work/${slug}`,
    // A bare project name ("Atlas") is a brand nobody is searching for. Pairing
    // it with the discipline gives the title a phrase with actual demand behind
    // it while keeping the case study identifiable.
    title: `${project.title[locale]}: ${project.discipline[locale]} case study`,
    description: project.summary[locale],
    image: project.hero.src,
    imageAlt: project.hero.alt[locale],
    keywords: [
      ...project.discipline[locale].split(',').map((value) => value.trim()),
      'UI/UX case study',
      'design portfolio',
    ],
  })
}

export default async function ProjectPage({ params }: PageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()

  const project = getProject(slug)
  if (!project) notFound()

  const dictionary = getDictionary(locale)
  const related = getRelatedProjects(slug)

  // Filtered rather than asserted: a slug removed from `articles.ts` would
  // otherwise render a heading above an empty list. The content test catches
  // it first; this keeps the page correct if it ever gets past the test.
  const furtherReading = (project.relatedArticles ?? [])
    .map((articleSlug) => getArticle(articleSlug))
    .filter((article) => article !== undefined)

  return (
    <>
      <JsonLd
        data={graph(
          projectSchema(project, locale),
          webPageSchema({
            locale,
            path: `/work/${slug}`,
            title: `${project.title[locale]}: ${project.discipline[locale]} case study`,
            description: project.summary[locale],
          }),
          breadcrumbSchema(locale, [
            { name: 'Work', path: '/work' },
            { name: project.title[locale], path: `/work/${slug}` },
          ]),
        )}
      />

      <section className="px-5 pt-32 pb-12 md:px-10 md:pt-[8.75rem] md:pb-16">
        <div className="shell">
          <Reveal y={12}>
            <Link
              href={localizedPath(locale, '/work')}
              className="group inline-flex items-center gap-2 text-[15px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              {dictionary.common.backToWork}
            </Link>
          </Reveal>

          <SplitHeading
            as="h1"
            immediate
            delay={0.12}
            className="mt-8 max-w-[16ch] font-serif text-[clamp(40px,5.6vw,88px)] leading-[1.02] font-light tracking-[-0.04em]"
          >
            {project.title[locale]}
          </SplitHeading>

          <Reveal delay={0.32}>
            <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
              {project.summary[locale]}
            </p>
          </Reveal>

          <Reveal delay={0.42}>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[var(--color-border)] pt-8 md:mt-16 md:grid-cols-4">
              {project.meta.map((item) => (
                <div key={item.label[locale]}>
                  <dt className="text-[0.6875rem] tracking-[0.08em] text-[var(--color-text-muted)] uppercase">
                    {item.label[locale]}
                  </dt>
                  <dd className="mt-[0.375rem] text-[0.9375rem]">
                    {item.value[locale]}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="px-5 md:px-10">
        <div className="shell">
          <Reveal>
            {/* `heroAspect` opts a project out of the shared crop when its
                composition cannot take one — see the note on the type. */}
            <ParallaxFrame
              distance={36}
              className={cn(
                'relative w-full',
                project.heroAspect ?? 'aspect-[4/3] md:aspect-[16/9]',
              )}
            >
              <Image
                src={project.hero.src}
                alt={project.hero.alt[locale]}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1400px"
                quality={90}
                className="object-cover [backface-visibility:hidden]"
              />
            </ParallaxFrame>
          </Reveal>
        </div>
      </section>

      {project.sections.map((section, sectionIndex) => (
        <section
          key={section.heading[locale]}
          className="px-5 py-16 md:px-10 md:py-24"
        >
          <div className="shell">
            <Reveal>
              <div className="grid gap-y-4 md:grid-cols-12 md:gap-x-12">
                <h2 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.1] font-light tracking-[-0.02em] md:col-span-3">
                  {section.heading[locale]}
                </h2>
                <div className="md:col-span-7 md:col-start-4">
                  <div className="space-y-5 text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
                    {section.paragraphs[locale].map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Gallery is split around the prose so images punctuate the
                reading rather than piling up at the end. */}
            {/* Twelve columns, so `span` can express quarters. Phone
                screenshots are between 1:1.77 and 1:2.13, so width drives
                height hard — at a third of the shell they still render taller
                than the viewport they are being read in. */}
            <div className="mt-12 grid grid-cols-12 gap-4 md:mt-16 md:gap-x-8 md:gap-y-12">
              {project.gallery
                .slice(
                  sectionIndex * 3,
                  sectionIndex === project.sections.length - 1
                    ? undefined
                    : (sectionIndex + 1) * 3,
                )
                .map((item) => (
                  <Reveal
                    key={item.image.src}
                    className={cn(
                      item.span === 'full' && 'col-span-12',
                      item.span === 'half' && 'col-span-12 md:col-span-6',
                      // Two-up on mobile for both narrow spans: a quarter of a
                      // phone screen is unreadable on a phone, but full width
                      // is a page of scrolling per image.
                      item.span === 'third' && 'col-span-6 md:col-span-4',
                      item.span === 'quarter' && 'col-span-6 md:col-span-3',
                    )}
                  >
                    <figure>
                      <ParallaxFrame
                        distance={32}
                        className={cn('relative w-full', item.aspect)}
                      >
                        <Image
                          src={item.image.src}
                          alt={item.image.alt[locale]}
                          fill
                          sizes={
                            item.span === 'full'
                              ? '(max-width: 768px) 100vw, (max-width: 1440px) 90vw, 1400px'
                              : item.span === 'half'
                                ? '(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 700px'
                                : item.span === 'third'
                                  ? '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px'
                                  : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px'
                          }
                          quality={90}
                          className="object-cover [backface-visibility:hidden]"
                        />
                      </ParallaxFrame>
                    </figure>
                  </Reveal>
                ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="shell">
          <Reveal>
            <div className="grid gap-y-4 md:grid-cols-12 md:gap-x-12">
              <h2 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.1] font-light tracking-[-0.02em] md:col-span-3">
                {project.outcome.heading[locale]}
              </h2>
              <div className="md:col-span-7 md:col-start-4">
                <div className="space-y-5 text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
                  {project.outcome.paragraphs[locale].map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {project.outcomeLink ? (
                  <a
                    href={project.outcomeLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta relative mt-8 inline-flex items-center gap-2 pb-1 text-[1.0625rem] md:text-[1.1875rem]"
                  >
                    <span className="inline-flex items-center gap-2 text-white">
                      {project.outcomeLink.label[locale]}
                      <span className="transition-transform duration-300 group-hover/cta:translate-x-1">
                        →
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-white transition-transform duration-700 ease-out group-hover/cta:scale-x-100"
                    />
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The return leg of the internal link graph. `/services` sends equity
          into case studies; without this a case study is where it stops. */}
      {furtherReading.length > 0 ? (
        <section className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-20">
          <div className="shell">
            <Reveal>
              <h2 className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
                {dictionary.common.furtherReading}
              </h2>
            </Reveal>

            <ul className="mt-8 space-y-6">
              {furtherReading.map((article, index) => (
                // The reveal wrapper is the list item; a `<div>` between the
                // `<ul>` and its `<li>`s is invalid and reads as a broken list.
                <Reveal as="li" key={article.slug} delay={index * 0.06}>
                  <Link
                    href={localizedPath(locale, `/articles/${article.slug}`)}
                    className="group block md:max-w-[62ch]"
                  >
                    <span className="font-serif text-[clamp(20px,2.2vw,28px)] leading-[1.2] font-light tracking-[-0.02em] transition-colors group-hover:text-white">
                      {article.title[locale]}
                    </span>
                    <span className="mt-2 block text-[15px] leading-[1.55] text-[var(--color-text-muted)]">
                      {article.excerpt[locale]}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="px-5 py-16 md:px-10 md:py-32">
          <div className="shell">
            <SplitHeading className="font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.05] font-light tracking-[-0.03em]">
              {dictionary.common.moreProjects}
            </SplitHeading>

            <div className="mt-12 grid gap-y-12 md:grid-cols-3 md:gap-x-8">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.06}>
                  <ProjectCard
                    project={item}
                    locale={locale}
                    dictionary={dictionary}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                    parallax={26}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
