import type { Localized } from './types'

/**
 * Single source of identity for the whole site. Swap these values (and the
 * files under `public/images`) to make the portfolio your own — nothing else
 * hardcodes a name, address or handle.
 */
export const site = {
  name: 'Harsh Vaghela',
  role: {
    en: 'Digital Product Designer',
    cs: 'Produktový designér',
  } satisfies Localized<string>,
  email: 'design.harsh25@gmail.com',
  location: {
    en: 'India',
    cs: 'Indie',
  } satisfies Localized<string>,
  city: {
    en: 'India',
    cs: 'Indie',
  } satisfies Localized<string>,
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Behance', href: 'https://www.behance.net/' },
    { label: 'Dribbble', href: 'https://dribbble.com/' },
  ],
} as const

export const navigation = [
  { key: 'work', href: '/work' },
  { key: 'about', href: '/about' },
] as const
