import { notFound } from 'next/navigation'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { WorkFilter } from '@/components/sections/WorkFilter'
import { JsonLd } from '@/components/seo/JsonLd'
import { projects, featuredProjects } from '@/content/projects'
import { getDictionary } from '@/content/dictionary'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import { graph, breadcrumbSchema, collectionPageSchema } from '@/lib/schema'

type PageProps = { params: Promise<{ locale: string }> }

// "Work" alone ranks for nothing and tells a searcher nothing; the topic has to
// carry the query, with the layout template supplying the brand.
const TITLE = 'UI/UX Design Portfolio and Case Studies'
const DESCRIPTION =
  'Selected UI/UX case studies by Harsh Vaghela: SaaS dashboards, mobile app design, design systems and brand-led websites, each with the brief, the process and the outcome.'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/work',
    title: TITLE,
    description: DESCRIPTION,
    imageAlt: 'Selected UI/UX design case studies by Harsh Vaghela',
    keywords: [
      'UI/UX portfolio',
      'design case studies',
      'SaaS dashboard design',
      'mobile app design portfolio',
    ],
  })
}

export default async function WorkPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  return (
    <>
      {/* Only shipped case studies go in the ItemList — an upcoming project has
          no page to send anyone to, so listing it would publish a URL that
          isn't there. */}
      <JsonLd
        data={graph(
          collectionPageSchema({
            locale,
            path: '/work',
            title: TITLE,
            description: DESCRIPTION,
            items: featuredProjects.map((project) => ({
              name: project.title[locale],
              path: `/work/${project.slug}`,
            })),
          }),
          breadcrumbSchema(locale, [{ name: 'Work', path: '/work' }]),
        )}
      />

      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem] md:pb-32">
        <div className="shell">
          <SplitHeading
            as="h1"
            immediate
            delay={0.1}
            className="max-w-[18ch] font-serif text-[clamp(40px,5.6vw,88px)] leading-[1.02] font-light tracking-[-0.04em] md:max-w-[20ch]"
          >
            {dictionary.pages.work.heading}
          </SplitHeading>

          <Reveal delay={0.35}>
            <p className="mt-8 max-w-[52ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
              {dictionary.pages.work.intro}
            </p>
          </Reveal>

          <WorkFilter
            projects={projects}
            locale={locale}
            dictionary={dictionary}
          />
        </div>
      </section>
    </>
  )
}
