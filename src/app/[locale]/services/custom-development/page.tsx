import { notFound } from 'next/navigation'
import { PillarHub } from '@/components/sections/PillarHub'
import { pillars, pillarPath } from '@/content/pillars'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

type PageProps = { params: Promise<{ locale: string }> }

/**
 * The development half of `/services`. See the note in the sibling
 * `ui-ux-design` route about static segments winning over `[slug]`.
 */
const page = pillars.development

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: pillarPath('development'),
    title: page.metaTitle,
    description: page.metaDescription,
    imageAlt: 'Custom web development services by Harsh Vaghela',
    keywords: page.keywords,
  })
}

export default async function CustomDevelopmentPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return <PillarHub locale={locale} pillar="development" />
}
