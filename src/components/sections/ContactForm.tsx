'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { localizedPath, type Locale } from '@/lib/i18n'
import type { Dictionary } from '@/content/dictionary'
import { cn } from '@/lib/cn'

type ContactFormProps = {
  locale: Locale
  dictionary: Dictionary
}

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

/** Idle → sending → the terminal states the status line reports. */
type Status = 'idle' | 'sending' | 'sent' | 'failed'

const inputClasses =
  'w-full border-b border-[var(--color-border)] bg-transparent pb-3 text-[1.0625rem] text-[var(--color-text)] outline-none focus:outline-none focus-visible:outline-none transition-colors placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-text)]'

/**
 * Contact form, posting to `/api/contact`.
 *
 * The fields are validated here for instant feedback, but the endpoint repeats
 * every check — the browser can be bypassed, so the server's copy is the one
 * that matters.
 */
export function ContactForm({ locale, dictionary }: ContactFormProps) {
  const router = useRouter()
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

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
        body: JSON.stringify({ name, email, subject, message }),
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
      <div className="grid gap-y-10 md:grid-cols-2 md:gap-x-10">
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

      <div className="mt-10">
        <Field
          id="subject"
          label={dictionary.contact.subject}
          placeholder={dictionary.contact.subjectPlaceholder}
        />
      </div>

      <div className="mt-10">
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
          rows={5}
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

      <div className="mt-12 flex flex-col items-start gap-5">
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
}: {
  id: string
  label: string
  placeholder: string
  type?: string
  error?: string
  required?: boolean
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
