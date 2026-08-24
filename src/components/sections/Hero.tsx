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
    <section className="relative flex min-h-svh flex-col justify-center px-5 pt-44 pb-24 md:px-10 md:pt-52 md:pb-24">
      <div className="shell relative flex flex-col">
        {/* This h1 is the LCP element on every viewport, and the reveal is the
            last thing standing between the page loading and it being measured:
            LCP lands when the final line clears its mask. The cascade is kept —
            it is what the heading is for — but the lead-in and the per-line
            offset are trimmed to the smallest values that still read as a
            cascade rather than a block, which is ~250ms off the metric for a
            difference the eye has to be looking for. */}
        <SplitHeading
          as="h1"
          immediate
          delay={0.05}
          stagger={0.06}
          className="max-w-[18ch] font-serif text-[clamp(34px,5.4vw,5rem)] leading-[1.3] font-light tracking-[-0.04em] md:max-w-[64.0625rem]"
        >
          {/* Explicit breaks rather than natural wrapping: the line rhythm is
              a design decision, and SplitText masks whatever the layout
              produces — left to wrap, the last line shifts with viewport
              width and the cascade loses its shape. Split across two dictionary
              lines so each locale keeps the two-line shape.
              FLAG: this is the most visible line on the site — the ES/FR
              headings deserve a native-speaker pass. */}
          {/* Deliberately no city in the h1. The old "UI/UX Designer in
              Ahmedabad" spent the page's strongest on-page signal on a
              local-intent SERP this site is not trying to win, and led an
              overseas buyer with a geo cue rather than the service. Location
              is not hidden — it stays in the facts row below and in the
              `region`/`country`/`areaServed` fields that feed schema. */}
          {dictionary.hero.headingLine1}
          <br />
          {dictionary.hero.headingLine2}
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
