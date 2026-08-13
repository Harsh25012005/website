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
          {/* `#main` has existed on this layout all along with nothing pointing
              at it. The header runs to seven links before any page content, so
              without this a keyboard or switch user tabs the whole nav again on
              every navigation. Off-screen until focused, so nothing changes for
              anyone else. */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-[14px] focus:leading-none focus:text-black"
          >
            Skip to content
          </a>
          <Header locale={locale} dictionary={dictionary} />
          {/* `tabIndex={-1}` is what makes the skip link above actually skip:
              following a fragment moves focus only if the target can hold it,
              and without this the next Tab would land back in the header. */}
          {/* `outline-none` only because the global focus ring would draw
              itself around the entire scroll height of the page; the accepted
              exception for a container that only ever receives focus as a skip
              target. Every focusable thing inside it keeps its ring. */}
          <main id="main" tabIndex={-1} className="focus:outline-none">
            {children}
          </main>
          <Footer locale={locale} dictionary={dictionary} />
        </div>
      </SmoothScroll>

      <ScrollProgress />
      <CustomCursor />
    </>
  )
}
