import { describe, it, expect } from 'vitest'
import {
  localizedPath,
  stripLocale,
  isLocale,
  locales,
  defaultLocale,
} from './i18n'

describe('locales', () => {
  it('ships English, Spanish, and French', () => {
    expect([...locales]).toEqual(['en', 'es', 'fr'])
    expect(defaultLocale).toBe('en')
  })
})

describe('localizedPath', () => {
  it('leaves English paths unprefixed and prefixes other locales', () => {
    expect(localizedPath('en', '/work')).toBe('/work')
    expect(localizedPath('en', '/')).toBe('/')
    expect(localizedPath('es', '/work')).toBe('/es/work')
    expect(localizedPath('fr', '/work')).toBe('/fr/work')
    expect(localizedPath('es', '/')).toBe('/es')
    expect(localizedPath('fr', '/')).toBe('/fr')
  })

  it('never emits an English locale prefix', () => {
    for (const path of ['/', '/work', '/work/atlas', '/services']) {
      expect(localizedPath('en', path).startsWith('/en/')).toBe(false)
      expect(localizedPath('en', path)).not.toBe('/cs')
      expect(localizedPath('en', path).startsWith('/cs/')).toBe(false)
    }
  })

  it('strips trailing slashes so canonicals never double up', () => {
    expect(localizedPath('en', '/work/')).toBe('/work')
    expect(localizedPath('en', '/work/atlas/')).toBe('/work/atlas')
    expect(localizedPath('es', '/work/')).toBe('/es/work')
    expect(localizedPath('fr', '/work/atlas/')).toBe('/fr/work/atlas')
  })
})

describe('stripLocale', () => {
  it('removes a locale prefix', () => {
    expect(stripLocale('/en/work/atlas')).toBe('/work/atlas')
    expect(stripLocale('/es/work/atlas')).toBe('/work/atlas')
    expect(stripLocale('/fr/work/atlas')).toBe('/work/atlas')
    expect(stripLocale('/en')).toBe('/')
    expect(stripLocale('/es')).toBe('/')
    expect(stripLocale('/fr')).toBe('/')
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
    expect(stripLocale(localizedPath('es', path))).toBe(path)
    expect(stripLocale(localizedPath('fr', path))).toBe(path)
    expect(stripLocale(localizedPath(defaultLocale, '/'))).toBe('/')
  })
})

describe('isLocale', () => {
  it('accepts supported locales and rejects everything else', () => {
    expect(isLocale('en')).toBe(true)
    expect(isLocale('es')).toBe(true)
    expect(isLocale('fr')).toBe(true)
    expect(isLocale('cs')).toBe(false)
    expect(isLocale('de')).toBe(false)
    expect(isLocale(undefined)).toBe(false)
  })
})

