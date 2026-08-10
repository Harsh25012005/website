import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type UnderlineLinkProps = {
  href: string
  children: ReactNode
  className?: string
  active?: boolean
}

/**
 * Nav link with a rule that wipes in from the left on hover. Implemented as a
 * scaled pseudo-element rather than a border transition so the wipe has
 * direction — a width animation would grow from both edges of the box.
 */
export function UnderlineLink({
  href,
  children,
  className,
  active = false,
}: UnderlineLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative inline-block py-1 transition-colors',
        active
          ? 'text-[var(--color-text)]'
          : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
        className,
      )}
    >
      {children}
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-x-0 -bottom-px h-px origin-left bg-current transition-transform duration-300 ease-out group-hover:scale-x-100',
          active ? 'scale-x-100' : 'scale-x-0',
        )}
      />
    </Link>
  )
}
