import { notFound } from 'next/navigation'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { WorkFilter } from '@/components/sections/WorkFilter'
import { projects } from '@/content/projects'
import { getDictionary } from '@/content/dictionary'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/work',
    title: locale === 'cs' ? 'Práce' : 'Work',
    description:
      locale === 'cs'
        ? 'Vybrané projekty napříč produktovým designem, weby, systémy a značkou.'
        : 'Selected projects across product design, websites, systems and brand.',
  })
}

export default async function WorkPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  return (
    <>
      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem] md:pb-32">
        <div className="shell">
          <SplitHeading
            as="h1"
            immediate
            delay={0.1}
            className="max-w-[18ch] font-serif text-[clamp(40px,5.6vw,88px)] leading-[1.02] font-light tracking-[-0.04em] md:max-w-[20ch]"
          >
            {locale === 'cs'
              ? 'Bližší pohled na práci, kterou jsem pomohl utvářet'
              : 'A closer look at the work I’ve helped shape'}
          </SplitHeading>

          <Reveal delay={0.35}>
            <p className="mt-8 max-w-[52ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
              {locale === 'cs'
                ? 'Vybrané projekty napříč produktovým designem, weby, systémy a značkou — samostatně i jako součást týmů.'
                : 'Selected projects across product design, websites, systems and brand-led experiences — independently and as part of teams.'}
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
