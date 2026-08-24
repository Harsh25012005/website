import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { ParallaxFrame } from '@/components/motion/ParallaxFrame'
import { ArticleCard } from '@/components/sections/ArticleCard'
import { JsonLd } from '@/components/seo/JsonLd'
import { articles, getArticle } from '@/content/articles'
import { getProject } from '@/content/projects'
import { getService } from '@/content/services'
import { getDictionary } from '@/content/dictionary'
import { isLocale, localizedPath, locales } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import {
  graph,
  breadcrumbSchema,
  articleSchema,
  webPageSchema,
} from '@/lib/schema'

type PageProps = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    articles.map((article) => ({ locale, slug: article.slug })),
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params
  const article = getArticle(slug)
  if (!isLocale(locale) || !article) return {}

  return buildMetadata({
    locale,
    path: `/articles/${slug}`,
    // Article headlines are already 50–60 characters of pure query language.
    // Appending "- Harsh Vaghela" would push the useful half past where a SERP
    // truncates, so the headline stands alone.
    titleIsAbsolute: true,
    title: article.title[locale],
    description: article.excerpt[locale],
    image: article.cover.src,
    imageAlt: article.cover.alt[locale],
    // `article` unlocks published/modified time and the author byline in the
    // OG payload — the fields that make a shared link render as a dated post
    // rather than an anonymous page.
    type: 'article',
    publishedTime: article.date,
    modifiedTime: article.date,
  })
}

export default async function ArticlePage({ params }: PageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()

  const article = getArticle(slug)
  if (!article) notFound()

  const dictionary = getDictionary(locale)
  const more = articles.filter((item) => item.slug !== slug).slice(0, 3)

  const relatedWork = (article.relatedProjects ?? [])
    .map((projectSlug) => getProject(projectSlug))
    .filter((project) => project !== undefined)

  // The commercial half of the interlinking: an article ranking for an
  // informational query is worth far more when it routes the reader to the
  // page that sells what they were reading about.
  const relatedServices = (article.relatedServices ?? [])
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service) => service !== undefined)

  const dateLocale = locale === 'es' ? 'es-ES' : locale === 'fr' ? 'fr-FR' : 'en-GB'
  const published = new Date(article.date).toLocaleDateString(dateLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <JsonLd
        data={graph(
          articleSchema(article, locale),
          webPageSchema({
            locale,
            path: `/articles/${slug}`,
            title: article.title[locale],
            description: article.excerpt[locale],
          }),
          breadcrumbSchema(locale, [
            { name: 'Articles', path: '/articles' },
            { name: article.title[locale], path: `/articles/${slug}` },
          ]),
        )}
      />

      <section className="px-5 pt-32 pb-12 md:px-10 md:pt-[8.75rem] md:pb-16">
        <div className="shell max-w-[70rem]">
          <Reveal y={12}>
            <Link
              href={localizedPath(locale, '/articles')}
              className="group inline-flex items-center gap-2 text-[15px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              {dictionary.common.backToArticles}
            </Link>
          </Reveal>

          <SplitHeading
            as="h1"
            immediate
            delay={0.12}
            className="mt-8 max-w-[24ch] font-serif text-[clamp(32px,4.4vw,64px)] leading-[1.05] font-light tracking-[-0.03em]"
          >
            {article.title[locale]}
          </SplitHeading>

          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] text-[var(--color-text-muted)]">
              <time dateTime={article.date}>{published}</time>
              <span aria-hidden>·</span>
              <span>
                {article.readingTime} {dictionary.common.minRead}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 md:px-10">
        <div className="shell">
          <Reveal>
            <ParallaxFrame
              distance={34}
              className="relative aspect-[16/9] w-full"
            >
              <Image
                src={article.cover.src}
                alt={article.cover.alt[locale]}
                fill
                priority
                sizes="90vw"
                className="object-cover"
              />
            </ParallaxFrame>
          </Reveal>
        </div>
      </section>

      <article className="px-5 py-16 md:px-10 md:py-24">
        <div className="shell max-w-[70rem]">
          <Reveal>
            <div className="space-y-5 text-[1.125rem] leading-[1.6] text-[var(--color-text-soft)] md:max-w-[62ch] md:text-[1.25rem]">
              {article.intro[locale].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          {article.sections.map((section) => (
            <div key={section.heading[locale]} className="mt-16 md:mt-24">
              <Reveal>
                <h2 className="font-serif text-[clamp(26px,2.8vw,38px)] leading-[1.15] font-light tracking-[-0.02em] md:max-w-[20ch]">
                  {section.heading[locale]}
                </h2>
                <div className="mt-5 space-y-5 text-[1.0625rem] leading-[1.6] text-[var(--color-text-soft)] md:max-w-[62ch] md:text-[1.1875rem]">
                  {section.paragraphs[locale].map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              {section.image ? (
                <Reveal className="mt-10 md:mt-14">
                  <figure>
                    <ParallaxFrame
                      distance={30}
                      className="relative aspect-[3/2] w-full"
                    >
                      <Image
                        src={section.image.src}
                        alt={section.image.alt[locale]}
                        fill
                        sizes="90vw"
                        className="object-cover"
                      />
                    </ParallaxFrame>
                  </figure>
                </Reveal>
              ) : null}
            </div>
          ))}

          {article.gallery && article.gallery.length > 0 ? (
            <div className="mt-16 grid gap-4 md:mt-24 md:grid-cols-2 md:gap-8">
              {article.gallery.map((image, index) => (
                <Reveal
                  key={image.src}
                  delay={(index % 2) * 0.06}
                  className={index === 0 ? 'md:col-span-2' : undefined}
                >
                  <figure>
                    <ParallaxFrame
                      distance={28}
                      className={
                        index === 0
                          ? 'relative aspect-[16/9] w-full'
                          : 'relative aspect-[3/2] w-full'
                      }
                    >
                      <Image
                        src={image.src}
                        alt={image.alt[locale]}
                        fill
                        sizes={
                          index === 0 ? '90vw' : '(max-width: 768px) 100vw, 45vw'
                        }
                        className="object-cover"
                      />
                    </ParallaxFrame>
                  </figure>
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </article>

      {relatedWork.length > 0 || relatedServices.length > 0 ? (
        <section className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-20">
          <div className="shell">
            <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-12">
              {relatedWork.length > 0 ? (
                <div>
                  <Reveal>
                    <h2 className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
                      {dictionary.common.relatedWork}
                    </h2>
                  </Reveal>
                  <ul className="mt-8 space-y-6">
                    {relatedWork.map((project, index) => (
                      // The reveal wrapper is the list item; a `<div>` between
                      // `<ul>` and `<li>` is invalid markup and breaks the list
                      // for assistive tech.
                      <Reveal as="li" key={project.slug} delay={index * 0.06}>
                        <Link
                          href={localizedPath(locale, `/work/${project.slug}`)}
                          className="group block"
                        >
                          <span className="font-serif text-[clamp(20px,2.2vw,26px)] leading-[1.2] font-light transition-colors group-hover:text-white">
                            {project.title[locale]}
                          </span>
                          <span className="mt-1 block text-[14px] text-[var(--color-text-muted)]">
                            {project.discipline[locale]}
                          </span>
                        </Link>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              ) : null}

              {relatedServices.length > 0 ? (
                <div>
                  <Reveal>
                    <h2 className="text-[11px] tracking-[0.18em] text-[var(--color-text-muted)] uppercase">
                      {dictionary.common.servicesMentioned}
                    </h2>
                  </Reveal>
                  <ul className="mt-8 space-y-6">
                    {relatedServices.map((service, index) => (
                      <Reveal as="li" key={service.slug} delay={index * 0.06}>
                        <Link
                          href={localizedPath(
                            locale,
                            `/services/${service.slug}`,
                          )}
                          className="group block"
                        >
                          <span className="font-serif text-[clamp(20px,2.2vw,26px)] leading-[1.2] font-light transition-colors group-hover:text-white">
                            {service.title[locale]}
                          </span>
                          <span className="mt-1 block max-w-[40ch] text-[14px] leading-[1.5] text-[var(--color-text-muted)]">
                            {service.description[locale]}
                          </span>
                        </Link>
                      </Reveal>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {more.length > 0 ? (
        <section className="px-5 py-16 md:px-10 md:py-32">
          <div className="shell">
            <SplitHeading className="font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.05] font-light tracking-[-0.03em]">
              {dictionary.common.worthSharing}
            </SplitHeading>

            <div className="mt-12 grid items-start gap-8 md:grid-cols-3">
              {more.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.06}>
                  <ArticleCard article={item} locale={locale} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
