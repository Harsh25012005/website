import { NextResponse, type NextRequest } from 'next/server'
import { Resend } from 'resend'
import { site } from '@/content/site'

/**
 * Contact form endpoint.
 *
 * The form used to compose a `mailto:`, which only ever opened the *visitor's*
 * mail client — every enquiry depended on them finding the draft and pressing
 * send, and silently produced nothing on devices with no mail client bound.
 * This route delivers server-side instead, so a submitted form is a received
 * email.
 *
 * Node runtime, not edge: the Resend SDK is happiest there and this endpoint is
 * called a handful of times a day, so cold-start latency is irrelevant.
 */
export const runtime = 'nodejs'

/**
 * Length caps. Generous enough that no real enquiry hits them, small enough
 * that the endpoint can't be used to push megabytes into an inbox.
 */
const LIMITS = { name: 100, email: 200, subject: 200, message: 5000 } as const

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * `from` must be a domain Resend has verified for this account. Until a custom
 * domain is set up, `onboarding@resend.dev` is Resend's shared sender, which is
 * allowed to deliver to the account owner's own address — exactly this case.
 * Swap `CONTACT_FROM_EMAIL` for `Harsh Vaghela <hello@yourdomain.com>` once the
 * domain is verified, so replies and SPF line up with the site.
 */
const FROM =
  process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>'

/** Defaults to the address already published across the site. */
const TO = process.env.CONTACT_TO_EMAIL ?? site.email

/**
 * In-memory throttle: 5 submissions per IP per 10 minutes.
 *
 * Deliberately not a shared store. On a serverless host each instance keeps its
 * own map, so this is a speed bump rather than a guarantee — it stops a single
 * bot hammering one warm instance, which is the realistic threat for a personal
 * portfolio. If the form ever attracts distributed abuse, move this to Redis or
 * put the endpoint behind the host's own rate limiting rather than growing it
 * here.
 */
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 } as const
const hits = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter(
    (at) => now - at < RATE_LIMIT.windowMs,
  )
  recent.push(now)
  hits.set(ip, recent)

  // The map only ever grows otherwise: one entry per IP for the lifetime of the
  // instance. Clearing fully-expired entries on write keeps it bounded without
  // a timer.
  if (hits.size > 500) {
    for (const [key, timestamps] of hits) {
      if (timestamps.every((at) => now - at >= RATE_LIMIT.windowMs)) {
        hits.delete(key)
      }
    }
  }

  return recent.length > RATE_LIMIT.max
}

function clientIp(request: NextRequest): string {
  // `x-forwarded-for` is a comma-separated chain; the first entry is the
  // original client as seen by the outermost proxy.
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0]!.trim()
  return request.headers.get('x-real-ip') ?? 'unknown'
}

/** Trims, coerces a missing/non-string value to '', and enforces the cap. */
function field(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(request: NextRequest) {
  let payload: Record<string, unknown>
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Malformed request.' }, { status: 400 })
  }

  // Honeypot: `company` is hidden from humans, so anything in it came from a
  // script. Answer 200 without sending — a rejection would only teach the bot
  // to leave the field alone next time.
  if (field(payload.company, 100)) {
    return NextResponse.json({ ok: true })
  }

  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { error: 'Too many messages. Try again shortly.' },
      { status: 429 },
    )
  }

  const name = field(payload.name, LIMITS.name)
  const email = field(payload.email, LIMITS.email)
  const subject = field(payload.subject, LIMITS.subject)
  const message = field(payload.message, LIMITS.message)

  // Mirrors the client-side checks. The browser can be bypassed entirely, so
  // this is the validation that actually counts; the client copy exists only to
  // give feedback without a round trip.
  if (!name || !email || !message || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: 'Please fill in your name, a valid email and a message.' },
      { status: 400 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // A missing key is a deployment mistake, not a visitor error. Log loudly so
    // it surfaces in the host's logs rather than failing quietly for weeks.
    console.error('[contact] RESEND_API_KEY is not set — email was not sent.')
    return NextResponse.json(
      { error: 'Email is not configured on the server.' },
      { status: 500 },
    )
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    // `from` has to be an owned domain, so the visitor's address goes here.
    // Hitting reply in the mail client then answers the enquirer directly.
    replyTo: email,
    subject: subject || `New enquiry from ${name}`,
    text: [
      message,
      '',
      '—',
      `Name: ${name}`,
      `Email: ${email}`,
      subject ? `Subject: ${subject}` : null,
      `Sent from the contact form on ${site.name}'s site.`,
    ]
      .filter((line) => line !== null)
      .join('\n'),
  })

  if (error) {
    console.error('[contact] Resend rejected the message:', error)
    return NextResponse.json(
      { error: 'Could not send the message.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
