import { describe, it, expect } from 'vitest'
import {
  localizedPath,
  stripLocale,
  isLocale,
  locales,
  defaultLocale,
} from './i18n'

describe('locales', () => {
  it('ships English only', () => {
    expect([...locales]).toEqual(['en'])
    expect(defaultLocale).toBe('en')
  })
})

describe('localizedPath', () => {
  it('leaves paths unprefixed', () => {
    expect(localizedPath('en', '/work')).toBe('/work')
    expect(localizedPath('en', '/')).toBe('/')
  })

  it('never emits a locale prefix', () => {
    for (const path of ['/', '/work', '/work/atlas', '/services']) {
      expect(localizedPath('en', path).startsWith('/en/')).toBe(false)
      expect(localizedPath('en', path)).not.toBe('/cs')
      expect(localizedPath('en', path).startsWith('/cs/')).toBe(false)
    }
  })

  it('strips trailing slashes so canonicals never double up', () => {
    expect(localizedPath('en', '/work/')).toBe('/work')
    expect(localizedPath('en', '/work/atlas/')).toBe('/work/atlas')
  })
})

describe('stripLocale', () => {
  it('removes a locale prefix', () => {
    expect(stripLocale('/en/work/atlas')).toBe('/work/atlas')
    expect(stripLocale('/en')).toBe('/')
  })

  it('is the identity for the public, unprefixed URLs', () => {
    expect(stripLocale('/work/atlas')).toBe('/work/atlas')
    expect(stripLocale('/')).toBe('/')
    // Czech is gone, so `/cs/…` is just an ordinary path here — the permanent
    // redirect in `middleware.ts` is what retires it.
    expect(stripLocale('/cs/work')).toBe('/cs/work')
  })

  // `/en` is a locale, but `/english-lessons` is a page that merely starts with it.
  it('does not match a locale that is only a path prefix', () => {
    expect(stripLocale('/english-lessons')).toBe('/english-lessons')
  })

  it('round-trips with localizedPath', () => {
    const path = '/work/atlas'
    expect(stripLocale(localizedPath('en', path))).toBe(path)
    expect(stripLocale(localizedPath(defaultLocale, '/'))).toBe('/')
  })
})

describe('isLocale', () => {
  it('accepts English and rejects everything else', () => {
    expect(isLocale('en')).toBe(true)
    expect(isLocale('cs')).toBe(false)
    expect(isLocale('de')).toBe(false)
    expect(isLocale(undefined)).toBe(false)
  })
})
