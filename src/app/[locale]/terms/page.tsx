import { notFound } from 'next/navigation'
import { LegalPage } from '@/components/sections/LegalPage'
import { termsOfService } from '@/content/legal'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: `/${termsOfService.slug}`,
    title: termsOfService.metaTitle,
    description: termsOfService.metaDescription,
    imageAlt: 'Terms of use and engagement',
  })
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return <LegalPage locale={locale} doc={termsOfService} />
}
