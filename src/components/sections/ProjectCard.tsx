'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ParallaxFrame } from '@/components/motion/ParallaxFrame'
import type { Project } from '@/content/types'
import { localizedPath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'
import { cn } from '@/lib/cn'

type ProjectCardProps = {
  project: Project
  locale: Locale
  dictionary: Dictionary
  /** Frame ratio; listings alternate 4/5 and 4/3 to break up the column. */
  aspect?: string
  sizes?: string
  parallax?: number
}

/**
 * Listing tile. The whole card is one link with a caption row beneath — the
 * image lifts slightly on hover while the frame stays put, so the crop tightens
 * instead of the layout shifting.
 */
export function ProjectCard({
  project,
  locale,
  dictionary,
  aspect = 'aspect-[4/5]',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 45vw, 650px',
  parallax = 40,
}: ProjectCardProps) {
  const href = localizedPath(locale, `/work/${project.slug}`)

  const figure = (
    <figure className="group">
      <div className="overflow-hidden">
        <ParallaxFrame
          distance={parallax}
          className={cn('relative w-full', aspect)}
        >
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt[locale]}
            fill
            sizes={sizes}
            quality={90}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] [backface-visibility:hidden]"
          />
        </ParallaxFrame>
      </div>

      <figcaption className="mt-5 flex items-start justify-between gap-4">
        <div className="flex flex-col">
          <span className="flex items-center gap-2 text-[19px]">
            {project.title[locale]}
            {project.upcoming ? (
              <span className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[11px] tracking-[0.08em] text-[var(--color-text-muted)] uppercase">
                {dictionary.common.soon}
              </span>
            ) : null}
          </span>
          <span className="mt-1 text-[15px] text-[var(--color-text-muted)]">
            {project.discipline[locale]}
          </span>
        </div>
        <span className="shrink-0 text-[15px] text-[var(--color-text-muted)]">
          {project.year}
        </span>
      </figcaption>
    </figure>
  )

  // Upcoming work has no case study yet; rendering a dead link would be worse
  // than rendering the tile inert.
  if (project.upcoming) {
    return <div className="block cursor-default">{figure}</div>
  }

  return (
    <Link
      href={href}
      className="group block"
      data-cursor-label={dictionary.common.viewProject}
    >
      {figure}
    </Link>
  )
}
