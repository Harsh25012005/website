import { notFound } from 'next/navigation'
import { SmoothScroll } from '@/components/motion/SmoothScroll'
import { ParticleField } from '@/components/motion/ParticleField'
import { Preloader } from '@/components/motion/Preloader'
import { PageTransition } from '@/components/motion/PageTransition'
import { ScrollProgress } from '@/components/motion/ScrollProgress'
import { CustomCursor } from '@/components/motion/CustomCursor'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getDictionary } from '@/content/dictionary'
import { featuredProjects } from '@/content/projects'
import { locales, isLocale } from '@/lib/i18n'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  // The preloader cycles project thumbnails while it counts, which doubles as
  // a warm cache for the first section below the fold.
  const preloadImages = featuredProjects
    .slice(0, 4)
    .map((project) => ({ src: project.thumbnail.src }))

  return (
    <>
      <ParticleField />
      <Preloader images={preloadImages} />
      <PageTransition />

      <SmoothScroll>
        {/* Sits above the fixed WebGL canvas. */}
        <div className="relative z-10">
          <Header locale={locale} dictionary={dictionary} />
          <main id="main">{children}</main>
          <Footer locale={locale} dictionary={dictionary} />
        </div>
      </SmoothScroll>

      <ScrollProgress />
      <CustomCursor />
    </>
  )
}
