import { notFound } from 'next/navigation'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { ContactForm } from '@/components/sections/ContactForm'
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
    path: '/contact',
    title: 'Contact',
    description: 'Briefs, collaborations, or a quick question, drop a note.',
  })
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  return (
    <section className="flex min-h-[calc(100svh-5rem)] flex-col justify-center px-5 pt-42 pb-20 md:px-10 md:pt-44 md:pb-28">
      <div className="shell">
        <div className="grid gap-x-12 gap-y-16 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <SplitHeading
              as="h1"
              immediate
              delay={0.1}
              className="font-serif text-[clamp(40px,5vw,5rem)] leading-[1.05] font-light tracking-[-0.04em]"
            >
              Let’s build something worth shipping.
            </SplitHeading>

            <Reveal delay={0.32}>
              <p className="mt-8 max-w-[48ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
                Briefs, collaborations, or a quick question: drop a note. I read everything and usually reply within a couple of working days.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <a
                href={`mailto:${site.email}`}
                className="group mt-10 inline-flex items-center gap-3 font-serif text-[clamp(20px,2.4vw,32px)] leading-none font-light tracking-[-0.02em]"
              >
                <span className="text-white">{site.email}</span>
                <span
                  aria-hidden
                  className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </a>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <ContactForm locale={locale} dictionary={dictionary} />
          </div>
        </div>
      </div>
    </section>
  )
}
