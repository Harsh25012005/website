import { notFound } from 'next/navigation'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import {
  aboutIntro,
  aboutChapters,
  beyondScreens,
  skills,
  tools,
} from '@/content/about'
import { JsonLd } from '@/components/seo/JsonLd'
import { site } from '@/content/site'
import { isLocale } from '@/lib/i18n'
import { buildMetadata } from '@/lib/seo'
import {
  graph,
  breadcrumbSchema,
  personSchema,
  webPageSchema,
} from '@/lib/schema'

type PageProps = { params: Promise<{ locale: string }> }

// Previously "About — Harsh Vaghela", which the layout template turned into
// "About — Harsh Vaghela - Harsh Vaghela". The topic alone is what belongs here.
const TITLE = 'About: UI/UX Designer & Front-End Developer'
const DESCRIPTION =
  'Harsh Vaghela is a freelance UI/UX and product designer in Ahmedabad, India, with 1.5+ years designing design systems, web UI, mobile app and SaaS products in Figma and building them in React and Next.js.'

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  return buildMetadata({
    locale,
    path: '/about',
    title: TITLE,
    description: DESCRIPTION,
    imageAlt: `${site.name}, ${site.role[locale]} based in ${site.location[locale]}`,
    keywords: [
      'Harsh Vaghela',
      'UI/UX designer Ahmedabad',
      'freelance product designer',
      'design to code designer',
    ],
  })
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <>
      {/* The one page besides home that restates Person in full: it is the
          document the entity is actually about, so the `AboutPage` node and the
          Person it describes need to sit in the same graph. Identical `@id`,
          identical values — no second entity is created. */}
      <JsonLd
        data={graph(
          personSchema(),
          webPageSchema({
            locale,
            path: '/about',
            title: TITLE,
            description: DESCRIPTION,
            type: 'AboutPage',
          }),
          breadcrumbSchema(locale, [{ name: 'About', path: '/about' }]),
        )}
      />

      <section className="relative px-5 pt-32 pb-16 md:px-10 md:pt-[8.75rem] md:pb-24">
        <div className="shell">
          <SplitHeading
            as="h1"
            immediate
            delay={0.1}
            className="max-w-[22ch] font-serif text-[clamp(36px,5.4vw,5rem)] leading-[0.95] font-light tracking-[-0.04em]"
          >
            I design and build digital products — UI/UX, design systems, and the
            SaaS and mobile experiences built on them.
          </SplitHeading>

          <Reveal delay={0.35}>
            <div className="mt-10 space-y-5 text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:mt-14 md:max-w-[62ch] md:text-[1.1875rem]">
              {aboutIntro[locale].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sticky heading against a scrolling text column: the section title
          holds position while its prose passes, which keeps long-form
          reading anchored without a visible sidebar. */}
      <section className="relative px-5 py-16 md:px-10 md:py-24">
        <div className="shell">
          <div className="grid gap-x-12 gap-y-12 md:grid-cols-12">
            {aboutChapters.map((chapter) => (
              <Reveal
                key={chapter.heading[locale]}
                className="contents md:contents"
              >
                <h2 className="font-serif text-[clamp(26px,3vw,40px)] leading-[1.1] font-light tracking-[-0.02em] md:col-span-4 md:max-w-[14ch] md:self-start">
                  {chapter.heading[locale]}
                </h2>
                <div className="md:col-span-7 md:col-start-6">
                  <div className="space-y-5 text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
                    {chapter.paragraphs[locale].map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative px-5 py-16 md:px-10 md:py-24"
        aria-label="Skills and tools"
      >
        <div className="shell">
          <div className="grid gap-12 border-t border-[var(--color-border)] pt-12 md:grid-cols-2 md:gap-8 md:pt-16">
            <Reveal>
              <h2 className="max-w-[20ch] font-serif text-[clamp(26px,3vw,40px)] leading-[1.05] font-light tracking-[-0.03em]">
                Skills
              </h2>
              <ul className="mt-8 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[var(--color-border)] px-4 py-2 text-[13px] text-[var(--color-text-soft)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="max-w-[20ch] font-serif text-[clamp(26px,3vw,40px)] leading-[1.05] font-light tracking-[-0.03em]">
                Tools
              </h2>
              <ul className="mt-8 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-[var(--color-border)] px-4 py-2 text-[13px] text-[var(--color-text-soft)]"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-16 md:px-10 md:py-24">
        <div className="shell">
          <div className="grid gap-x-12 gap-y-6 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <h2 className="max-w-[14ch] font-serif text-[clamp(26px,3vw,40px)] leading-[1.1] font-light tracking-[-0.02em]">
                {beyondScreens.heading[locale]}
              </h2>
            </Reveal>
            <Reveal delay={0.06} className="md:col-span-7 md:col-start-6">
              <div className="space-y-5 text-[1.0625rem] leading-[1.55] text-[var(--color-text-soft)] md:text-[1.1875rem]">
                {beyondScreens.paragraphs[locale].map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-5 pb-4 md:px-10">
        <div className="shell">
          <Reveal>
            <p className="text-[15px] text-[var(--color-text-muted)]">
              {site.location[locale]}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
