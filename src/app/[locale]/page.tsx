import { notFound } from 'next/navigation'
import { Hero } from '@/components/sections/Hero'
import { SelectedWork } from '@/components/sections/SelectedWork'
import { Services } from '@/components/sections/Services'
import { ArticlesTeaser } from '@/components/sections/ArticlesTeaser'
import { JsonLd } from '@/components/seo/JsonLd'
import { getDictionary } from '@/content/dictionary'
import { site } from '@/content/site'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import {
  graph,
  personSchema,
  websiteSchema,
  professionalServiceSchema,
  webPageSchema,
} from '@/lib/schema'

type PageProps = { params: Promise<{ locale: string }> }

// Outcome-first title: leads with who I help and what I build, not just a job
// title. Kept under ~60 characters so the useful part survives SERP truncation.
const TITLE = `${site.name} — UI/UX & Dev for SaaS Founders`
const DESCRIPTION =
  'I design and build product interfaces for SaaS and startup teams. Figma to React — design systems, web apps and mobile UI, shipped as production-ready front ends.'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/',
    // The name already leads this title; without `titleIsAbsolute` the root
    // layout's `%s - Harsh Vaghela` template appends it a second time and the
    // brand burns two of the ~60 characters a SERP will show.
    titleIsAbsolute: true,
    title: TITLE,
    description: DESCRIPTION,
    imageAlt: `${site.name}, ${site.role[locale]}`,
    keywords: [
      'UI/UX designer',
      'product designer',
      'freelance UI UX designer India',
      'design systems designer',
      'SaaS product design',
      'Figma to React',
    ],
  })
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  return (
    <>
      {/* The site's only full declaration of Person, WebSite and the business.
          Every other page references these three by `@id`. */}
      <JsonLd
        data={graph(
          personSchema(),
          websiteSchema(),
          professionalServiceSchema(),
          webPageSchema({
            locale,
            path: '/',
            title: TITLE,
            description: DESCRIPTION,
          }),
        )}
      />

      <Hero locale={locale} dictionary={dictionary} />
      <SelectedWork locale={locale} dictionary={dictionary} />
      <Services locale={locale} dictionary={dictionary} />
      <ArticlesTeaser locale={locale} dictionary={dictionary} />
    </>
  )
}
