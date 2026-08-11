import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { JsonLd } from '@/components/seo/JsonLd'
import { toolsIntro, toolGroups } from '@/content/tools'
import { getDictionary } from '@/content/dictionary'
import { isLocale, localizedPath } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import { graph, breadcrumbSchema, webPageSchema } from '@/lib/schema'

type PageProps = { params: Promise<{ locale: string }> }

const TITLE = 'Tools: Design and Front-End Stack'
const DESCRIPTION =
  'The design and front-end tools behind the work: Figma, Framer and Webflow through React, Next.js and Tailwind CSS, and why each one is still in the stack.'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/tools',
    title: TITLE,
    description: DESCRIPTION,
    imageAlt: 'Design and front-end tools used by Harsh Vaghela',
    keywords: [
      'designer tools stack',
      'design and front-end stack',
      'Figma React Tailwind workflow',
      'designer uses page',
    ],
  })
}

export default async function ToolsPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dictionary = getDictionary(locale)

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            locale,
            path: '/tools',
            title: TITLE,
            description: DESCRIPTION,
          }),
          breadcrumbSchema(locale, [{ name: 'Tools', path: '/tools' }]),
        )}
      />

      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem] md:pb-20">
        <div className="shell">
          <SplitHeading
            as="h1"
            immediate
            delay={0.1}
            className="max-w-[16ch] font-serif text-[clamp(40px,5.6vw,88px)] leading-[1.02] font-light tracking-[-0.04em]"
          >
            What I design and build with
          </SplitHeading>

          <Reveal delay={0.35}>
            <p className="mt-8 max-w-[54ch] text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
              {toolsIntro[locale]}
            </p>
          </Reveal>
        </div>
      </section>

      {toolGroups.map((group) => (
        <section
          key={group.heading[locale]}
          className="border-t border-[var(--color-border)] px-5 py-16 md:px-10 md:py-20"
        >
          <div className="shell">
            <div className="grid gap-y-10 md:grid-cols-12 md:gap-x-12">
              {/* Sticky within its own `<section>`, so each group's heading
                  holds while you read that group's items and is then pushed out
                  by the next one — the list stays labelled without a heading
                  parked over unrelated content.

                  `self-start` is load-bearing: a grid item stretches to the row
                  height by default, which makes it exactly as tall as the
                  column it is meant to stick beside and leaves nothing to
                  scroll against. `top-28` clears the fixed header.

                  Below `md` it is a normal block — sticky in a single-column
                  layout just eats vertical space on the screens with least of
                  it. */}
              <div className="md:sticky md:top-28 md:col-span-4 md:self-start">
                <Reveal>
                  <h2 className="font-serif text-[clamp(26px,3vw,36px)] leading-[1.1] font-light tracking-[-0.02em]">
                    {group.heading[locale]}
                  </h2>
                  <p className="mt-4 max-w-[32ch] text-[15px] leading-[1.55] text-[var(--color-text-muted)]">
                    {group.intro[locale]}
                  </p>
                </Reveal>
              </div>

              <dl className="md:col-span-7 md:col-start-6">
                {group.items.map((item, index) => (
                  <Reveal key={item.name} delay={index * 0.04}>
                    <div
                      className={
                        index === 0
                          ? 'pb-6'
                          : 'border-t border-[var(--color-border)] py-6'
                      }
                    >
                      <dt className="font-serif text-[clamp(19px,2vw,24px)] leading-[1.2] font-light text-white">
                        {item.name}
                      </dt>
                      <dd className="mt-3 max-w-[56ch] text-[15px] leading-[1.6] text-[var(--color-text-soft)] md:text-[1.0625rem]">
                        {item.note[locale]}
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </section>
      ))}

      <section className="px-5 py-16 md:px-10 md:pb-32">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col items-start gap-6 border-t border-[var(--color-border)] pt-12 md:flex-row md:items-center md:justify-between md:gap-10 md:pt-16">
              <p className="font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.15] font-light tracking-[-0.02em] md:max-w-[30ch]">
                <span className="text-white">
                  Curious how these get used on a real project?
                </span>
              </p>
              <Link
                href={localizedPath(locale, '/work')}
                className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full border border-white bg-white px-6 text-[15px] leading-none text-black transition-colors duration-200 hover:bg-transparent hover:text-white"
              >
                {dictionary.common.allCaseStudies}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
