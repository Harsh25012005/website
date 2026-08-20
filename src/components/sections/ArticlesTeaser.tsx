import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { ArticleCard } from './ArticleCard'
import { articles } from '@/content/articles'
import { localizedPath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'

type ArticlesTeaserProps = {
  locale: Locale
  dictionary: Dictionary
}

// `articles` is ordered newest first; the home page is a teaser into
// `/articles`, not the full index, so it shows only the latest row of three
// rather than growing a second grid every time a post is added.
const FEATURED_COUNT = 3

export function ArticlesTeaser({ locale, dictionary }: ArticlesTeaserProps) {
  const featured = articles.slice(0, FEATURED_COUNT)

  return (
    <section className="px-5 py-16 md:px-10 md:py-32">
      <div className="shell">
        <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
          <SplitHeading className="font-serif text-[clamp(32px,4.5vw,64px)] leading-[1.05] font-light tracking-[-0.03em]">
            {dictionary.common.worthSharing}
          </SplitHeading>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-3">
          {featured.map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.06}>
              <ArticleCard article={article} locale={locale} />
            </Reveal>
          ))}
        </div>

        {/* `/articles` has no header nav entry, so before this link (and the
            new footer one) the listing page was reachable only by guessing the
            URL — the cards here jump straight past it to individual posts. */}
        <Reveal>
          <div className="mt-16 border-t border-[var(--color-border)] pt-8 md:mt-20 md:pt-10">
            <Link
              href={localizedPath(locale, '/articles')}
              className="group relative inline-flex items-center gap-2 pb-1 text-[1.0625rem] text-white md:text-[1.1875rem]"
            >
              {dictionary.common.allArticles}
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
