import { useEffect, useLayoutEffect } from 'react'

/**
 * `useLayoutEffect` warns during SSR. Animation setup has to run before paint
 * on the client, so swap the implementation rather than dropping to `useEffect`
 * everywhere and shipping a flash of un-animated content.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect
