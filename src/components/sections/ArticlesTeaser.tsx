import { Reveal } from '@/components/motion/Reveal'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { ArticleCard } from './ArticleCard'
import { articles } from '@/content/articles'
import type { Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'

type ArticlesTeaserProps = {
  locale: Locale
  dictionary: Dictionary
}

export function ArticlesTeaser({ locale, dictionary }: ArticlesTeaserProps) {
  return (
    <section className="px-5 py-16 md:px-10 md:py-32">
      <div className="shell">
        <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
          <SplitHeading className="font-serif text-[clamp(32px,4.5vw,64px)] leading-[1.05] font-light tracking-[-0.03em]">
            {dictionary.common.worthSharing}
          </SplitHeading>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.06}>
              <ArticleCard article={article} locale={locale} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
