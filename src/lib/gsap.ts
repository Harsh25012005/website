'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import type { SplitText as SplitTextClass } from 'gsap/SplitText'

let registered = false
const registrationCallbacks: (() => void)[] = []

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
  // Flush any components that queued their setup waiting for registration.
  const pending = registrationCallbacks.splice(0)
  for (const cb of pending) cb()
}

/**
 * Deferred GSAP initialization for components that do not need to run before
 * the first paint (scroll reveals, parallax frames, the custom cursor).
 *
 * Calling `registerGsap()` synchronously in every `useLayoutEffect` coalesces
 * into a single long task at hydration time — all the plugin registration, ease
 * creation and initial ScrollTrigger measurements happen together, producing
 * 100–150ms of blocking time on desktop. Components that only animate on scroll
 * cannot benefit the user before they have scrolled anyway, so their setup can
 * safely yield to the browser first.
 *
 * `cb` is called immediately if GSAP is already registered (e.g. the hero
 * heading got there first), or queued to run right after registration completes,
 * whichever happens first.
 */
export function afterGsapReady(cb: () => void): () => void {
  if (registered) {
    cb()
    return () => { /* nothing to cancel */ }
  }
  // Not yet registered — queue the callback and return a canceller.
  registrationCallbacks.push(cb)
  return () => {
    const index = registrationCallbacks.indexOf(cb)
    if (index !== -1) registrationCallbacks.splice(index, 1)
  }
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

let refreshQueued = 0

/**
 * One `ScrollTrigger.refresh()` per frame, no matter how many callers ask.
 *
 * A refresh is a synchronous re-measure of every trigger on the page — 34 of
 * them on the home page — and GSAP does not debounce sequential external calls,
 * so N callers in one task cost N full passes plus N forced layouts. Measured
 * cold on a 12,500px document the first pass is ~67ms on an M-series Mac and
 * several times that on the throttled hardware Lighthouse scores with; every
 * pass after it in the same task is ~1ms of pure waste. Coalescing on rAF also
 * moves the work out of whatever task asked for it, which matters when the
 * asker is hydration or a `load` handler.
 *
 * Note that GSAP already batches refreshes triggered by *creating* triggers
 * (`_queueRefreshAll`), and already refreshes itself on `DOMContentLoaded`,
 * `load` and `resize`. This is only for the cases it cannot know about: a route
 * swap, a filter changing the document height, the preloader unlocking scroll.
 */
export function refreshScrollTriggers() {
  if (typeof window === 'undefined' || refreshQueued) return
  refreshQueued = window.requestAnimationFrame(() => {
    refreshQueued = 0
    ScrollTrigger.refresh()
  })
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export { gsap, ScrollTrigger, CustomEase }
export type { SplitTextClass as SplitText }
