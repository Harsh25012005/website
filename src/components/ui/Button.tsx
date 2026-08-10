import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ButtonProps = {
  href: string
  children: ReactNode
  /** `solid` is the white pill; `outline` is the bordered variant. */
  variant?: 'solid' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'h-9 px-4 text-[13px]',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-14 px-7 text-[16px]',
}

/**
 * Primary call to action. Inverts on hover rather than dimming, which keeps
 * the contrast ratio above AA in both states.
 */
export function Button({
  href,
  children,
  variant = 'solid',
  size = 'md',
  className,
}: ButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:')

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full border leading-none whitespace-nowrap transition-[background-color,color,border-color,transform] duration-200 active:scale-[0.97]',
    sizes[size],
    variant === 'solid'
      ? 'border-white bg-white text-black hover:bg-transparent hover:text-white'
      : 'border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-text-muted)]',
    className,
  )

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
