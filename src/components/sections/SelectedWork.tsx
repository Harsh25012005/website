import Link from 'next/link'
import { Reveal } from '@/components/motion/Reveal'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { ProjectCard } from './ProjectCard'
import { featuredProjects } from '@/content/projects'
import { localizedPath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'

type SelectedWorkProps = {
  locale: Locale
  dictionary: Dictionary
}

/**
 * Two offset columns. The right column starts far down the page and the gaps
 * between cards differ per column, so the two never scroll in lockstep — the
 * staggered rhythm is doing the work a masonry library usually would.
 */
export function SelectedWork({ locale, dictionary }: SelectedWorkProps) {
  const left = featuredProjects.filter((_, index) => index % 2 === 0)
  const right = featuredProjects.filter((_, index) => index % 2 === 1)

  return (
    <section className="px-5 py-16 md:px-10 md:py-32">
      <div className="shell">
        <SplitHeading className="mb-12 font-serif text-[clamp(32px,4.5vw,64px)] leading-[1.05] font-light tracking-[-0.03em] md:mb-16">
          {dictionary.common.selectedWork}
        </SplitHeading>

        <div className="grid gap-x-8 md:grid-cols-2">
          <div className="flex flex-col gap-14 md:gap-[16rem]">
            {left.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05}>
                <ProjectCard
                  project={project}
                  locale={locale}
                  dictionary={dictionary}
                  aspect="aspect-[4/5]"
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-14 md:mt-[18rem] md:gap-[16rem]">
            {right.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.05}>
                <ProjectCard
                  project={project}
                  locale={locale}
                  dictionary={dictionary}
                  aspect="aspect-[4/3]"
                />
              </Reveal>
            ))}
          </div>
        </div>

        {/* The section showed six cards and offered no way to the listing page
            that ranks for "UI/UX portfolio" — every path out went to a single
            case study. Descriptive anchor text, because "View all" tells a
            crawler nothing about the page it points at. */}
        <Reveal>
          <div className="mt-16 border-t border-[var(--color-border)] pt-8 md:mt-24 md:pt-10">
            <Link
              href={localizedPath(locale, '/work')}
              className="group relative inline-flex items-center gap-2 pb-1 text-[1.0625rem] text-white md:text-[1.1875rem]"
            >
              {dictionary.common.allCaseStudies}
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-white transition-transform duration-700 ease-out group-hover:scale-x-100"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
