import Link from 'next/link'
import Image from 'next/image'
import { ParallaxFrame } from '@/components/motion/ParallaxFrame'
import type { Article } from '@/content/types'
import { localizedPath, type Locale } from '@/lib/i18n'

type ArticleCardProps = {
  article: Article
  locale: Locale
  sizes?: string
  /**
   * Heading level for the title. Defaults to `h3` because the card normally
   * sits under a section `h2` ("Articles on design and code"). The listing page
   * has no such heading — the cards follow its `h1` directly — so it passes
   * `h2` rather than leaving a level skipped in the outline.
   */
  headingLevel?: 'h2' | 'h3'
}

export function ArticleCard({
  article,
  locale,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px',
  headingLevel: Heading = 'h3',
}: ArticleCardProps) {
  return (
    <Link
      href={localizedPath(locale, `/articles/${article.slug}`)}
      className="block"
    >
      <article className="group">
        <div className="relative overflow-hidden">
          <ParallaxFrame
            distance={30}
            className="relative aspect-[16/9] w-full"
          >
            <Image
              src={article.cover.src}
              alt={article.cover.alt[locale]}
              fill
              sizes={sizes}
              quality={90}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] [backface-visibility:hidden]"
            />
          </ParallaxFrame>
        </div>

        <Heading className="mt-6 text-[19px] leading-[1.3]">
          {article.title[locale]}
        </Heading>
        <p className="mt-1 max-w-[42ch] text-[15px] leading-[1.55] text-[var(--color-text-muted)]">
          {article.excerpt[locale]}
        </p>
      </article>
    </Link>
  )
}
