import { notFound } from 'next/navigation'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { ArticleCard } from '@/components/sections/ArticleCard'
import { JsonLd } from '@/components/seo/JsonLd'
import { articles } from '@/content/articles'
import { getDictionary } from '@/content/dictionary'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import { graph, breadcrumbSchema, collectionPageSchema } from '@/lib/schema'

type PageProps = { params: Promise<{ locale: string }> }

const TITLE = 'Articles on UI/UX Design and Front-End Code'
// The old description ("Notes on projects, process and things worth sharing")
// described a mood. This one names what the three published pieces are actually
// about, which is what a searcher and a snippet both need.
const DESCRIPTION =
  'Practical writing on UI/UX design and front-end development: building design systems in Figma, Figma-to-React handoff that survives contact with code, and the UI mistakes that show up in every audit.'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/articles',
    title: TITLE,
    description: DESCRIPTION,
    imageAlt: 'Articles on UI/UX design and front-end development',
    keywords: [
      'UI design articles',
      'design system guide',
      'Figma to React',
      'UX writing and process',
    ],
  })
}

export default async function ArticlesPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  return (
    <section className="px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem] md:pb-32">
      <JsonLd
        data={graph(
          collectionPageSchema({
            locale,
            path: '/articles',
            title: TITLE,
            description: DESCRIPTION,
            items: articles.map((article) => ({
              name: article.title[locale],
              path: `/articles/${article.slug}`,
            })),
          }),
          breadcrumbSchema(locale, [{ name: 'Articles', path: '/articles' }]),
        )}
      />

      <div className="shell">
        <SplitHeading
          as="h1"
          immediate
          delay={0.1}
          className="font-serif text-[clamp(32px,4.5vw,64px)] leading-[1.05] font-light tracking-[-0.03em]"
        >
          {dictionary.common.worthSharing}
        </SplitHeading>

        <div className="mt-12 grid items-start gap-8 md:mt-16 md:grid-cols-3">
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
