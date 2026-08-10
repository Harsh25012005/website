import { describe, it, expect } from 'vitest'
import { localizedPath, stripLocale, isLocale, otherLocale } from './i18n'

describe('localizedPath', () => {
  it('leaves default-locale paths unprefixed', () => {
    expect(localizedPath('en', '/work')).toBe('/work')
    expect(localizedPath('en', '/')).toBe('/')
  })

  it('prefixes non-default locales', () => {
    expect(localizedPath('cs', '/work')).toBe('/cs/work')
    expect(localizedPath('cs', '/')).toBe('/cs')
  })

  it('strips trailing slashes so canonicals never double up', () => {
    expect(localizedPath('en', '/work/')).toBe('/work')
    expect(localizedPath('cs', '/work/atlas/')).toBe('/cs/work/atlas')
  })
})

describe('stripLocale', () => {
  it('removes a locale prefix', () => {
    expect(stripLocale('/cs/work/atlas')).toBe('/work/atlas')
    expect(stripLocale('/cs')).toBe('/')
  })

  it('leaves unprefixed paths untouched', () => {
    expect(stripLocale('/work/atlas')).toBe('/work/atlas')
  })

  // `/cs` is a locale, but `/css-tricks` is a page that merely starts with it.
  it('does not match a locale that is only a path prefix', () => {
    expect(stripLocale('/css-tricks')).toBe('/css-tricks')
  })

  it('round-trips with localizedPath', () => {
    const path = '/work/atlas'
    expect(stripLocale(localizedPath('cs', path))).toBe(path)
    expect(stripLocale(localizedPath('en', path))).toBe(path)
  })
})

describe('isLocale', () => {
  it('accepts known locales and rejects everything else', () => {
    expect(isLocale('en')).toBe(true)
    expect(isLocale('cs')).toBe(true)
    expect(isLocale('de')).toBe(false)
    expect(isLocale(undefined)).toBe(false)
  })
})

describe('otherLocale', () => {
  it('toggles between the two locales', () => {
    expect(otherLocale('en')).toBe('cs')
    expect(otherLocale('cs')).toBe('en')
  })
})
