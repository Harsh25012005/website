/**
 * Fixed page-progress readout in the lower-right corner.
 *
 * Currently renders nothing — the readout was cut, the slot was kept.
 *
 * No `'use client'` on purpose. The directive is what makes this a client
 * component, and a client component mounted from the locale layout costs a
 * serialised boundary in the flight payload plus a module in the shared client
 * bundle that has to be downloaded, parsed and rendered during hydration — all
 * to return `null`. Without it this is a server component: it renders to nothing
 * on the server and ships no client code at all. Put the directive back the
 * moment this grows a hook or an event handler.
 */
export function ScrollProgress() {
  return null
}
