'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import type { SplitText as SplitTextClass } from 'gsap/SplitText'

let registered = false

/**
 * Plugin registration is idempotent but must not run during SSR — ScrollTrigger
 * touches `document` the moment it is registered.
 *
 * Only the plugins the first paint actually depends on are imported statically.
 * Reveal, ParallaxFrame and ConvergeLines all construct ScrollTriggers during
 * hydration, so ScrollTrigger has to be here; `siteEase` is the default ease for
 * every tween on the site, so CustomEase does too. SplitText does not — see
 * `loadSplitText` below.
 */
export function registerGsap() {
  if (registered || typeof window === 'undefined') return
  gsap.registerPlugin(ScrollTrigger, CustomEase)
  // The site's signature curve: a long, soft settle rather than a symmetric
  // ease. Every reveal shares it so the whole page moves with one feel.
  CustomEase.create('siteEase', '0.16, 1, 0.3, 1')
  gsap.defaults({ ease: 'siteEase', duration: 1 })
  registered = true
}

let splitTextPromise: Promise<typeof SplitTextClass> | null = null

/**
 * SplitText on demand.
 *
 * It is ~17 kB of source used by exactly one component, and that component
 * cannot split anything until fonts have settled anyway — so a static import
 * only bought the privilege of downloading, parsing and executing it *before*
 * hydration finishes, in the same chunk that gates the hero paint. Loading it
 * here moves it into its own chunk fetched after the heading effect runs.
 *
 * On a slow connection SplitHeading gives up on the masked reveal entirely (the
 * text is already on screen by then), so the chunk is never requested at all —
 * the devices least able to afford it are the ones that stop paying for it.
 */
export function loadSplitText(): Promise<typeof SplitTextClass> {
  if (!splitTextPromise) {
    splitTextPromise = import('gsap/SplitText').then((mod) => {
      registerGsap()
      gsap.registerPlugin(mod.SplitText)
      return mod.SplitText
    })
  }
  return splitTextPromise
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export { gsap, ScrollTrigger, CustomEase }
export type { SplitTextClass as SplitText }
