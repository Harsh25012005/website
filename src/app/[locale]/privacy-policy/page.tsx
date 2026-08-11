import { notFound } from 'next/navigation'
import { LegalPage } from '@/components/sections/LegalPage'
import { privacyPolicy } from '@/content/legal'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: `/${privacyPolicy.slug}`,
    title: privacyPolicy.metaTitle,
    description: privacyPolicy.metaDescription,
    imageAlt: 'Privacy policy',
  })
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return <LegalPage locale={locale} doc={privacyPolicy} />
}
