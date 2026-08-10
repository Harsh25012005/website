import { Reveal } from '@/components/motion/Reveal'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { ProjectCard } from './ProjectCard'
import { featuredProjects } from '@/content/projects'
import type { Locale } from '@/lib/i18n'
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
      </div>
    </section>
  )
}
