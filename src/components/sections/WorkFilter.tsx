'use client'

import { useMemo, useRef, useState } from 'react'
import { Reveal } from '@/components/motion/Reveal'
import { ProjectCard } from './ProjectCard'
import {
  gsap,
  ScrollTrigger,
  registerGsap,
  prefersReducedMotion,
} from '@/lib/gsap'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'
import type { Project, ProjectTag } from '@/content/types'
import type { Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'
import { cn } from '@/lib/cn'

type WorkFilterProps = {
  projects: Project[]
  locale: Locale
  dictionary: Dictionary
}

const FILTERS: (ProjectTag | 'all')[] = ['all', 'uxui', 'branding', 'website']

/**
 * Filterable project grid.
 *
 * Filtering is client-side over an already-rendered list rather than a route
 * change: the set is small, and keeping it local means the transition can be
 * animated instead of flashing through a navigation.
 */
export function WorkFilter({ projects, locale, dictionary }: WorkFilterProps) {
  const [active, setActive] = useState<ProjectTag | 'all'>('all')
  const gridRef = useRef<HTMLDivElement>(null)

  const visible = useMemo(
    () =>
      active === 'all'
        ? projects
        : projects.filter((project) => project.tags.includes(active)),
    [projects, active],
  )

  // Re-animate the surviving cards on each filter change, then tell
  // ScrollTrigger the document height moved.
  useIsomorphicLayoutEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    registerGsap()
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gsap.utils.toArray<HTMLElement>('[data-work-item]', grid),
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.04 },
      )
    }, grid)

    const id = window.setTimeout(() => ScrollTrigger.refresh(), 200)

    return () => {
      window.clearTimeout(id)
      ctx.revert()
    }
  }, [active])

  return (
    <>
      <Reveal className="mt-12 md:mt-16">
        <div
          role="tablist"
          aria-label={dictionary.common.selectedWork}
          className="flex flex-wrap gap-2"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              onClick={() => setActive(filter)}
              className={cn(
                'rounded-full border px-4 py-2 text-[13px] transition-all duration-200 active:scale-[0.96]',
                active === filter
                  ? 'border-white bg-white text-black'
                  : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-text-muted)] hover:text-[var(--color-text)]',
              )}
            >
              {dictionary.filters[filter]}
            </button>
          ))}
        </div>
      </Reveal>

      <div
        ref={gridRef}
        className="mt-12 grid gap-x-8 gap-y-14 md:mt-16 md:grid-cols-2 md:gap-y-24"
      >
        {visible.map((project, index) => (
          <div key={project.slug} data-work-item>
            <ProjectCard
              project={project}
              locale={locale}
              dictionary={dictionary}
              aspect={index % 3 === 0 ? 'aspect-[4/3]' : 'aspect-[4/5]'}
            />
          </div>
        ))}
      </div>
    </>
  )
}
