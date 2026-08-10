import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

type HoverSwapTextProps = {
  /** The resting text — also the link's accessible name. */
  children: ReactNode
  /** Revealed on hover. Decorative, so it is hidden from assistive tech. */
  swap: string
  className?: string
}

/**
 * Masked vertical text swap: the label slides up out of a clip box while a
 * call to action slides in from below. Used on the service cards, where the
 * card is a link but nothing in the resting state says so.
 *
 * Requires an ancestor with the `group` class — normally the `<Link>` itself,
 * so the swap fires from anywhere on the card rather than only over the words.
 *
 * Three things worth not undoing:
 *
 * - **`aria-hidden` on the swap.** Without it the accessible name of every
 *   service link becomes "Web UI design View service", and a screen-reader user
 *   gets a second copy of text that only exists to communicate hover — a state
 *   they are not in.
 *
 * - **`motion-safe:` rather than `motion-reduce:` overrides.** The transform
 *   has to be absent by default and added only when motion is allowed. Doing it
 *   the other way round means writing `motion-reduce:` rules that lose to
 *   `group-hover:` on specificity, so the animation plays anyway for people who
 *   asked for no animation. Here, reduced motion means neither rule matches:
 *   the label simply stays put and the swap stays hidden.
 *
 * - **`items-center` on the swap.** Service names wrap to two lines at some
 *   widths. Centring keeps the call to action in the middle of whatever height
 *   the label established, instead of stranding it at the top of a tall box.
 */
export function HoverSwapText({
  children,
  swap,
  className,
}: HoverSwapTextProps) {
  return (
    <span className={cn('relative block overflow-hidden', className)}>
      <span className="block transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-full">
        {children}
      </span>

      <span
        aria-hidden
        className="absolute inset-0 flex translate-y-full items-center gap-2 text-white transition-transform duration-500 ease-out motion-safe:group-hover:translate-y-0 motion-reduce:hidden"
      >
        {swap}
        <span className="text-[0.7em]">→</span>
      </span>
    </span>
  )
}
