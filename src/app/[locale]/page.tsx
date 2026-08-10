import { notFound } from 'next/navigation'
import { Hero } from '@/components/sections/Hero'
import { SelectedWork } from '@/components/sections/SelectedWork'
import { Services } from '@/components/sections/Services'
import { ArticlesTeaser } from '@/components/sections/ArticlesTeaser'
import { getDictionary } from '@/content/dictionary'
import { site } from '@/content/site'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/',
    title: `${site.name} — ${site.role[locale]}`,
    description:
      locale === 'cs'
        ? 'Portfolio produktového designéra — rozhraní, design systémy a weby.'
        : 'Portfolio of a digital product designer — interfaces, design systems and websites.',
  })
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  return (
    <>
      <Hero locale={locale} dictionary={dictionary} />
      <SelectedWork locale={locale} dictionary={dictionary} />
      <Services locale={locale} dictionary={dictionary} />
      <ArticlesTeaser locale={locale} dictionary={dictionary} />
    </>
  )
}
