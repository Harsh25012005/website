import '@testing-library/jest-dom/vitest'

// jsdom ships no matchMedia; several motion primitives probe it for
// prefers-reduced-motion before touching GSAP.
if (!window.matchMedia) {
  window.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia
}

// ScrollTrigger and the reveal primitives observe elements on mount.
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
  root = null
  rootMargin = ''
  thresholds = []
}

// `in` would narrow `window` to never here, so probe the property directly.
if (typeof window.IntersectionObserver === 'undefined') {
  window.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver
}
