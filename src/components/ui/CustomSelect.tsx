'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { cn } from '@/lib/cn'

export type SelectOption = {
  /** Submitted value. */
  value: string
  label: string
  /** Optional heading this option sits under. */
  group?: string
}

type CustomSelectProps = {
  /** Also the form field name — the hidden input carries it. */
  name: string
  label: string
  placeholder: string
  options: SelectOption[]
  defaultValue?: string
}

/**
 * A listbox that can actually be styled.
 *
 * A native `<select>` renders its popup in the operating system's layer, not
 * the page's: the panel background, the highlight colour and the ✓ drawn beside
 * the current option all come from the OS and ignore every CSS rule aimed at
 * them. On a dark site that produces a white panel with a system checkmark —
 * visibly a different product from the page it opened out of.
 *
 * So this reimplements the control against the WAI-ARIA listbox pattern rather
 * than restyling the native one, which is not possible:
 *
 *   - the trigger is a `combobox` exposing `aria-expanded` and the current
 *     value, so assistive tech reads it as the same kind of control;
 *   - `aria-activedescendant` moves the screen-reader cursor through the
 *     options while DOM focus stays on the trigger, which is what keeps
 *     keyboard and pointer behaviour identical;
 *   - a hidden input carries the value, so `FormData` sees exactly what a
 *     native select would submit and the form code needed no changes.
 *
 * Keyboard: ↑ ↓ move, Home / End jump, Enter or Space select, Escape closes and
 * returns focus, Tab closes and moves on. Typing a letter jumps to the next
 * option starting with it, because that is the one native behaviour people miss
 * immediately when a custom control drops it.
 */
export function CustomSelect({
  name,
  label,
  placeholder,
  options,
  defaultValue = '',
}: CustomSelectProps) {
  const id = useId()
  const listboxId = `${id}-listbox`
  const labelId = `${id}-label`

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(defaultValue)
  const [activeIndex, setActiveIndex] = useState(-1)

  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const typeahead = useRef({ query: '', at: 0 })

  const selectedIndex = options.findIndex((option) => option.value === value)
  const selected = selectedIndex >= 0 ? options[selectedIndex] : undefined

  /**
   * Options grouped for rendering, while navigation stays on the flat array —
   * arrow keys have to cross a group boundary without noticing it. Rendering
   * from the same array keeps the visual order and the index order identical.
   */
  const groups = useMemo(() => {
    const byGroup = new Map<string, { option: SelectOption; index: number }[]>()

    options.forEach((option, index) => {
      const key = option.group ?? ''
      const bucket = byGroup.get(key)
      if (bucket) bucket.push({ option, index })
      else byGroup.set(key, [{ option, index }])
    })

    return [...byGroup.entries()]
  }, [options])

  // Pointerdown, not click: a click listener fires after the browser has
  // already moved focus, which on a second trigger elsewhere reopens the panel
  // it just closed.
  useEffect(() => {
    if (!open) return

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }

    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  // Keep the active option in view when the keyboard moves past the fold.
  useEffect(() => {
    if (!open || activeIndex < 0) return
    listRef.current
      ?.querySelector(`[data-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: 'nearest' })
  }, [open, activeIndex])

  const openAt = (index: number) => {
    setActiveIndex(index)
    setOpen(true)
  }

  const commit = (index: number) => {
    const option = options[index]
    if (!option) return
    setValue(option.value)
    setOpen(false)
    triggerRef.current?.focus()
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = options.length - 1

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        if (!open) openAt(selectedIndex >= 0 ? selectedIndex : 0)
        else setActiveIndex((current) => (current >= last ? 0 : current + 1))
        return
      case 'ArrowUp':
        event.preventDefault()
        if (!open) openAt(selectedIndex >= 0 ? selectedIndex : last)
        else setActiveIndex((current) => (current <= 0 ? last : current - 1))
        return
      case 'Home':
        if (!open) return
        event.preventDefault()
        setActiveIndex(0)
        return
      case 'End':
        if (!open) return
        event.preventDefault()
        setActiveIndex(last)
        return
      case 'Enter':
      case ' ':
        event.preventDefault()
        if (!open) openAt(selectedIndex >= 0 ? selectedIndex : 0)
        else commit(activeIndex)
        return
      case 'Escape':
        if (!open) return
        event.preventDefault()
        setOpen(false)
        return
      case 'Tab':
        setOpen(false)
        return
      default:
        break
    }

    // Type-ahead. Repeating the same letter cycles through the options starting
    // with it; anything else extends the query, matching how a native select
    // behaves. No timer — the query resets on the next select interaction,
    // which is close enough and avoids a stray effect.
    if (event.key.length !== 1 || event.metaKey || event.ctrlKey) return

    const key = event.key.toLowerCase()
    const state = typeahead.current
    state.query = state.query === key ? key : state.query + key

    const from = state.query.length === 1 ? state.at + 1 : state.at
    const ordered = [
      ...options.slice(from),
      ...options.slice(0, Math.max(from, 0)),
    ]
    const hit = ordered.find((option) =>
      option.label.toLowerCase().startsWith(state.query),
    )
    if (!hit) return

    const index = options.indexOf(hit)
    state.at = index
    if (open) setActiveIndex(index)
    else setValue(hit.value)
  }

  return (
    <div ref={rootRef} className="relative">
      <span
        id={labelId}
        className="block text-[0.6875rem] tracking-[0.08em] text-[var(--color-text-muted)] uppercase"
      >
        {label}
      </span>

      {/* The value the form actually submits. Keeping it in a real input means
          `FormData` behaves exactly as it did with a native select. */}
      <input type="hidden" name={name} value={value} />

      <button
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-controls={listboxId}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-labelledby={labelId}
        // The half of the pattern documented above that was missing: without
        // this, arrowing through the options moved only the highlight, and a
        // screen reader announced nothing because DOM focus never leaves the
        // trigger. Undefined while closed so nothing points at a hidden node.
        aria-activedescendant={
          open && activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined
        }
        onKeyDown={onKeyDown}
        onClick={() =>
          open ? setOpen(false) : openAt(selectedIndex >= 0 ? selectedIndex : 0)
        }
        className={cn(
          'mt-3 flex w-full cursor-pointer items-center justify-between gap-4 border-b pb-3 text-left text-[1.0625rem] transition-colors',
          // The closed rule is this control's only boundary, so it uses the
          // 3:1 interactive token rather than the decorative hairline.
          open
            ? 'border-[var(--color-text)]'
            : 'border-[var(--color-border-interactive)] hover:border-[var(--color-text-soft)]',
        )}
      >
        <span
          className={cn(
            'truncate',
            selected
              ? 'text-[var(--color-text)]'
              : 'text-[var(--color-text-muted)]',
          )}
        >
          {selected ? selected.label : placeholder}
        </span>

        {/* Points down when closed, up when open — the one piece of state a
            dropdown should never make you guess at. */}
        <svg
          aria-hidden
          viewBox="0 0 12 8"
          className={cn(
            'h-2 w-3 shrink-0 transition-transform duration-300 ease-out',
            open ? 'rotate-180' : 'rotate-0',
          )}
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className={
              open
                ? 'text-[var(--color-text)]'
                : 'text-[var(--color-text-muted)]'
            }
          />
        </svg>
      </button>

      <ul
        ref={listRef}
        id={listboxId}
        role="listbox"
        aria-labelledby={labelId}
        tabIndex={-1}
        data-lenis-prevent
        onWheel={(e) => e.stopPropagation()}
        // `visibility`, not just `opacity`: a transparent panel is still in the
        // accessibility tree, so every service name and budget band was being
        // read out while the control announced itself as collapsed. Visibility
        // is transitionable and holds at `visible` for the whole run when it is
        // animating to hidden, so the fade-out is untouched.
        className={cn(
          'custom-scrollbar absolute inset-x-0 top-full z-30 mt-2 max-h-[min(20rem,55vh)] origin-top overflow-y-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] py-2 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.75)] transition-[opacity,transform,visibility] duration-200 ease-out',
          open
            ? 'pointer-events-auto visible scale-y-100 opacity-100'
            : 'pointer-events-none invisible scale-y-95 opacity-0',
        )}
      >
        {groups.map(([group, entries], groupIndex) => (
          <li key={group || 'ungrouped'} role="presentation">
            {group ? (
              // Indexed id, not the label: group names carry spaces and a
              // slash ("UI/UX design"), neither of which belongs in an id.
              <p
                id={`${id}-group-${groupIndex}`}
                className="px-4 pt-3 pb-2 text-[0.625rem] tracking-[0.14em] text-[var(--color-text-muted)] uppercase"
              >
                {group}
              </p>
            ) : null}

            {/* `group`, not `presentation`, when there is a heading to name it:
                a listbox may own groups, and that is the only way "UI/UX
                design" reaches a screen reader — as rendered it is a plain
                paragraph no option is associated with. Ungrouped options stay
                presentational so the listbox owns them directly. */}
            <ul
              role={group ? 'group' : 'presentation'}
              aria-labelledby={group ? `${id}-group-${groupIndex}` : undefined}
            >
              {entries.map(({ option, index }) => {
                const isSelected = option.value === value
                const isActive = index === activeIndex

                return (
                  <li key={option.value} role="presentation">
                    {/* No tick, no dot, no bullet. The selected option is shown
                        by weight and colour — a glyph in the row is what made
                        the native control look bolted on. */}
                    <button
                      type="button"
                      role="option"
                      id={`${id}-option-${index}`}
                      data-index={index}
                      aria-selected={isSelected}
                      tabIndex={-1}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => commit(index)}
                      className={cn(
                        'block w-full cursor-pointer px-4 py-2.5 text-left text-[0.9375rem] leading-[1.4] transition-colors',
                        isActive
                          ? 'bg-[color-mix(in_oklab,var(--color-text)_10%,transparent)]'
                          : 'bg-transparent',
                        isSelected
                          ? 'text-white'
                          : 'text-[var(--color-text-soft)]',
                      )}
                    >
                      {option.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
