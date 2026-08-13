'use client'

import { useMemo, useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { CustomSelect, type SelectOption } from '@/components/ui/CustomSelect'
import { localizedPath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'
import { cn } from '@/lib/cn'

export type ServiceOption = {
  value: string
  label: string
  pillar: 'design' | 'development'
}

type ContactFormProps = {
  locale: Locale
  dictionary: Dictionary
  /**
   * Built on the server by `serviceSelectOptions()`. Passed in rather than
   * imported so `content/services.ts` — every service's prose and FAQs — stays
   * out of the client bundle.
   */
  serviceOptions: ServiceOption[]
  budgetBands: readonly string[]
}

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

/** Idle → sending → the terminal states the status line reports. */
type Status = 'idle' | 'sending' | 'sent' | 'failed'

/*
 * `--color-border-interactive` rather than `--color-border`: this rule is the
 * field's only boundary, so it is a UI component border under WCAG 1.4.11 and
 * has to clear 3:1 — the decorative hairline does not.
 *
 * The `box-shadow` is the keyboard focus indicator. A rectangular outline would
 * box a field that is drawn as a single underline, so instead the underline
 * itself doubles to 2px and turns accent — no outline, and no layout change,
 * because a shadow takes no space. Pointer focus keeps the quieter white rule.
 */
const inputClasses =
  'w-full border-b border-[var(--color-border-interactive)] bg-transparent pb-3 text-[1.0625rem] text-[var(--color-text)] outline-none focus:outline-none focus-visible:outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-text)] focus-visible:border-[var(--color-accent)] focus-visible:shadow-[0_1px_0_0_var(--color-accent)]'

/**
 * Contact form, posting to `/api/contact`.
 *
 * The fields are validated here for instant feedback, but the endpoint repeats
 * every check — the browser can be bypassed, so the server's copy is the one
 * that matters.
 */
export function ContactForm({
  locale,
  dictionary,
  serviceOptions,
  budgetBands,
}: ContactFormProps) {
  const router = useRouter()
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  /**
   * The submitted value is the human label, not the slug: it lands in an email
   * that a person reads, and "Webflow development" is worth more there than
   * "webflow-development". Nothing downstream matches on it.
   */
  const serviceChoices = useMemo<SelectOption[]>(
    () =>
      serviceOptions.map((option) => ({
        value: option.label,
        label: option.label,
        group:
          option.pillar === 'design' ? 'UI/UX design' : 'Custom development',
      })),
    [serviceOptions],
  )

  const budgetChoices = useMemo<SelectOption[]>(
    () => budgetBands.map((band) => ({ value: band, label: band })),
    [budgetBands],
  )

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    // Honeypot: `company` is hidden from humans, so anything in it came from a
    // script. Abort into the same success state instead of showing a rejection,
    // which would only teach the bot to leave the field alone next time.
    //
    // Deliberately does not continue to `/thank-you`. That page is the
    // conversion destination, so sending bots there would inflate whatever goal
    // is eventually measured on it with traffic that never was an enquiry.
    if (String(data.get('company') ?? '').trim()) {
      setErrors({})
      setStatus('sent')
      return
    }

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = String(data.get('subject') ?? '').trim()
    // All three optional, and unvalidated on purpose. A phone number has no
    // format worth enforcing across countries, and rejecting a blank budget or
    // service would cost the enquiry from someone who has not decided yet.
    const phone = String(data.get('phone') ?? '').trim()
    const budget = String(data.get('budget') ?? '').trim()
    const service = String(data.get('service') ?? '').trim()

    const nextErrors: Errors = {}
    if (!name) nextErrors.name = dictionary.contact.required
    if (!email) nextErrors.email = dictionary.contact.required
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = dictionary.contact.invalidEmail
    }
    if (!message) nextErrors.message = dictionary.contact.required

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      // The form is uncontrolled and never resets, so a second submit can follow
      // a successful one. Drop the latched confirmation or it sits under the new
      // errors still claiming the message is on its way.
      setStatus('idle')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          budget,
          service,
          subject,
          message,
        }),
      })

      if (!response.ok) {
        setStatus('failed')
        return
      }

      setStatus('sent')
      // Only navigate once the send is confirmed, so `/thank-you` can state
      // plainly that the message arrived. A failure keeps the visitor on the
      // form with their text intact rather than stranding them on a
      // confirmation page for something that never sent.
      router.push(localizedPath(locale, '/thank-you'))
    } catch {
      // Offline, DNS failure, request blocked — nothing reached the server.
      setStatus('failed')
    }
  }

  const statusMessage = {
    idle: '',
    sending: dictionary.contact.sending,
    sent: dictionary.contact.success,
    failed: dictionary.contact.error,
  }[status]

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-10 lg:gap-y-8">
        <Field
          id="name"
          label={dictionary.contact.name}
          placeholder={dictionary.contact.namePlaceholder}
          error={errors.name}
          required
        />
        <Field
          id="email"
          type="email"
          label={dictionary.contact.email}
          placeholder={dictionary.contact.emailPlaceholder}
          error={errors.email}
          required
        />
      </div>

      {/* Phone beside subject, then the two selects on their own row. Service
          and budget are the pair that decide whether an enquiry is worth a
          call, so they sit together where they read as one question. */}
      <div className="mt-6 grid gap-y-6 md:grid-cols-2 md:gap-x-10 lg:mt-8 lg:gap-y-8">
        <Field
          id="phone"
          type="tel"
          label={dictionary.contact.phone}
          placeholder={dictionary.contact.phonePlaceholder}
          autoComplete="tel"
        />
        <Field
          id="subject"
          label={dictionary.contact.subject}
          placeholder={dictionary.contact.subjectPlaceholder}
        />
      </div>

      <div className="mt-6 grid gap-y-6 md:grid-cols-2 md:gap-x-10 lg:mt-8 lg:gap-y-8">
        <CustomSelect
          name="service"
          label={dictionary.contact.service}
          placeholder={dictionary.contact.servicePlaceholder}
          options={serviceChoices}
        />
        <CustomSelect
          name="budget"
          label={dictionary.contact.budget}
          placeholder={dictionary.contact.budgetPlaceholder}
          options={budgetChoices}
        />
      </div>

      <div className="mt-6 lg:mt-8">
        <label
          htmlFor="message"
          className="block text-[0.6875rem] tracking-[0.08em] text-[var(--color-text-muted)] uppercase"
        >
          {dictionary.contact.message}
          <span aria-hidden> *</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          placeholder={dictionary.contact.messagePlaceholder}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(inputClasses, 'mt-3 resize-y')}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-[13px] text-[#ff8b7d]">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="hidden">
        <label htmlFor="company">
          {dictionary.contact.company}
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col items-start gap-5 lg:mt-10">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex h-12 items-center rounded-full border border-white bg-white px-8 text-[15px] leading-none text-black transition-colors duration-200 hover:bg-transparent hover:text-white active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60"
        >
          {status === 'sending'
            ? dictionary.contact.sending
            : dictionary.contact.send}
        </button>

        {/* A live region rather than plain text: the send is asynchronous and
            focus stays on the button, so a screen reader would otherwise never
            learn whether the message went. */}
        <p
          role="status"
          aria-live="polite"
          className={cn(
            'text-[14px]',
            status === 'failed' ? 'text-[#ff8b7d]' : 'text-white',
          )}
        >
          {statusMessage}
        </p>
      </div>
    </form>
  )
}

function Field({
  id,
  label,
  placeholder,
  type = 'text',
  error,
  required = false,
  autoComplete,
}: {
  id: string
  label: string
  placeholder: string
  type?: string
  error?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[0.6875rem] tracking-[0.08em] text-[var(--color-text-muted)] uppercase"
      >
        {label}
        {required ? <span aria-hidden> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(inputClasses, 'mt-3')}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-[13px] text-[#ff8b7d]">
          {error}
        </p>
      ) : null}
    </div>
  )
}
