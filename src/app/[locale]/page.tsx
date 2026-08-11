import { notFound } from 'next/navigation'
import { Hero } from '@/components/sections/Hero'
import { SelectedWork } from '@/components/sections/SelectedWork'
import { Services } from '@/components/sections/Services'
import { PricingTeaser } from '@/components/sections/PricingTeaser'
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

// Derived from `site.jobTitle` rather than repeating it, so the home page
// `<title>`, the Person schema and the résumé header can never drift into three
// different claims about the same practice. Dropping the old "for Web and SaaS"
// tail keeps this inside the ~60 characters a SERP shows.
const TITLE = `${site.name} - ${site.jobTitle}`
const DESCRIPTION =
  'Freelance UI/UX designer and front-end developer in Ahmedabad, India, working with founders and teams worldwide. Design systems, web, app and SaaS product design in Figma, built in React, Next.js, Webflow and WordPress.'

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
      {/* Directly after the services grid: that grid answers "what does he
          do", and "what does it cost" is the next question every visitor has.
          Before this it went unanswered until they found the nav. */}
      <PricingTeaser locale={locale} dictionary={dictionary} />
      <ArticlesTeaser locale={locale} dictionary={dictionary} />
    </>
  )
}
