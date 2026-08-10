import { SplitHeading } from '@/components/motion/SplitHeading'
import { Reveal } from '@/components/motion/Reveal'
import { site } from '@/content/site'
import type { Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'

type HeroProps = {
  locale: Locale
  dictionary: Dictionary
}

export function Hero({ locale, dictionary }: HeroProps) {
  const facts = [
    { label: dictionary.hero.based, value: site.location[locale] },
    { label: dictionary.hero.focus, value: dictionary.hero.focusValue },
    { label: dictionary.hero.languages, value: dictionary.hero.languagesValue },
    { label: dictionary.hero.openFor, value: dictionary.hero.openForValue },
  ]

  return (
    <section className="relative flex flex-col px-5 pt-48 pb-12 md:px-10 md:pt-[13rem] md:pb-20">
      <div className="shell relative flex flex-col">
        <SplitHeading
          as="h1"
          immediate
          delay={0.15}
          stagger={0.09}
          className="max-w-[18ch] font-serif text-[clamp(40px,6.4vw,6rem)] leading-[1] font-light tracking-[-0.04em] md:max-w-[64.0625rem]"
        >
          {/* Explicit breaks rather than natural wrapping: the line rhythm is
              a design decision, and SplitText masks whatever the layout
              produces — left to wrap, the last line shifts with viewport
              width and the cascade loses its shape. */}
          {locale === 'cs' ? 'UI/UX designér z ' : 'UI/UX Designer in '}
          <span className="text-gradient font-serif font-light">
            {site.city[locale]}
          </span>
          {'.'}
          <br />
          {locale === 'cs'
            ? 'Design systémy s jasností a charakterem.'
            : 'Design systems with clarity and character.'}
        </SplitHeading>

        <Reveal
          delay={0.5}
          className="relative mt-12 md:max-w-[39.25rem] md:pt-12"
        >
          <dl className="grid grid-cols-2 gap-x-[1.5rem] gap-y-[1.375rem] text-[0.9375rem]">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[0.6875rem] tracking-[0.08em] text-[var(--color-text-muted)] uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-[0.375rem]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
