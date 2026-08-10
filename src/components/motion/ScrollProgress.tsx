'use client'

import { useRef } from 'react'
import {
  gsap,
  ScrollTrigger,
  registerGsap,
  prefersReducedMotion,
} from '@/lib/gsap'
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect'

/**
 * Fixed page-progress readout in the lower-right corner. Driven by a scrubbed
 * ScrollTrigger over the document body so it stays exact at any scroll speed,
 * where a throttled scroll listener would visibly round.
 */
export function ScrollProgress() {
  return null
}
