import { Reveal } from '@/components/motion/Reveal'
import { SplitHeading } from '@/components/motion/SplitHeading'
import { testimonials } from '@/content/about'
import type { Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'

type TestimonialsProps = {
  locale: Locale
  dictionary: Dictionary
}

export function Testimonials({ locale, dictionary }: TestimonialsProps) {
  return (
    <section className="px-5 py-16 md:px-10 md:py-32">
      <div className="shell">
        <SplitHeading className="mb-12 font-serif text-[clamp(32px,4.5vw,64px)] leading-[1.05] font-light tracking-[-0.03em] md:mb-16">
          {dictionary.common.kindWords}
        </SplitHeading>

        <div className="border-t border-[var(--color-border)]">
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.name}>
              <article className="grid gap-8 border-b border-[var(--color-border)] py-12 md:grid-cols-12 md:gap-10 md:py-20">
                <blockquote className="font-serif text-[clamp(18px,1.6vw,24px)] leading-[1.4] font-light tracking-[-0.015em] md:col-span-8">
                  <span aria-hidden>“</span>
                  {testimonial.quote[locale]}
                  <span aria-hidden>”</span>
                </blockquote>
                <figcaption className="flex flex-col text-[14px] md:col-span-4 md:items-end md:text-right">
                  <span>{testimonial.name}</span>
                  {testimonial.lines[locale].map((line) => (
                    <span key={line} className="text-[var(--color-text-muted)]">
                      {line}
                    </span>
                  ))}
                </figcaption>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
