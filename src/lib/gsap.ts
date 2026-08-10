'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { CustomEase } from 'gsap/CustomEase'

let registered = false

/**
 * Plugin registration is idempotent but must not run during SSR — ScrollTrigger
 * touches `document` the moment it is registered.
 */
export function registerGsap() {
  if (registered || typeof window === 'undefined') return
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase)
  // The site's signature curve: a long, soft settle rather than a symmetric
  // ease. Every reveal shares it so the whole page moves with one feel.
  CustomEase.create('siteEase', '0.16, 1, 0.3, 1')
  gsap.defaults({ ease: 'siteEase', duration: 1 })
  registered = true
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export { gsap, ScrollTrigger, SplitText, CustomEase }
