import { notFound } from 'next/navigation'
import { PillarHub } from '@/components/sections/PillarHub'
import { pillars, pillarPath } from '@/content/pillars'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

type PageProps = { params: Promise<{ locale: string }> }

/**
 * The design half of `/services`.
 *
 * This is a static segment sitting beside `[slug]`, which the app router
 * resolves first — so `ui-ux-design` must never be used as a slug in
 * `services.ts`. `content.test.ts` asserts it, because the failure is silent:
 * the service page simply never renders.
 */
const page = pillars.design

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: pillarPath('design'),
    title: page.metaTitle,
    description: page.metaDescription,
    imageAlt: 'UI/UX design services by Harsh Vaghela',
    keywords: page.keywords,
  })
}

export default async function UiUxDesignPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return <PillarHub locale={locale} pillar="design" />
}
