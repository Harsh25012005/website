type ClassValue = string | false | null | undefined

/**
 * Minimal class joiner. The design system never needs conflict resolution
 * (no variant-merging), so `clsx`/`tailwind-merge` would be dead weight.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ')
}
