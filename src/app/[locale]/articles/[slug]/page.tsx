import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { ParallaxFrame } from '@/components/motion/ParallaxFrame'
import { ArticleCard } from '@/components/sections/ArticleCard'
import { articles, getArticle } from '@/content/articles'
import { getDictionary } from '@/content/dictionary'
import { isLocale, localizedPath, locales } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

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
    title: article.title[locale],
    description: article.excerpt[locale],
    image: article.cover.src,
  })
}

export default async function ArticlePage({ params }: PageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()

  const article = getArticle(slug)
  if (!article) notFound()

  const dictionary = getDictionary(locale)
  const more = articles.filter((item) => item.slug !== slug)

  const published = new Date(article.date).toLocaleDateString(
    locale === 'cs' ? 'cs-CZ' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' },
  )

  return (
    <>
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
        </div>
      </article>

      {more.length > 0 ? (
        <section className="px-5 py-16 md:px-10 md:py-32">
          <div className="shell">
            <SplitHeading className="font-serif text-[clamp(32px,4.5vw,56px)] leading-[1.05] font-light tracking-[-0.03em]">
              {dictionary.common.worthSharing}
            </SplitHeading>

            <div className="mt-12 grid items-start gap-8 md:grid-cols-2">
              {more.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.06}>
                  <ArticleCard
                    article={item}
                    locale={locale}
                    sizes="(max-width: 768px) 100vw, 45vw"
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
