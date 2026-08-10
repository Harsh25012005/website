type JsonLdProps = {
  data: Record<string, unknown>
}

/**
 * Emits one `application/ld+json` block.
 *
 * Server-rendered on purpose. Structured data injected after hydration is only
 * seen by crawlers that execute JavaScript and reach the second rendering pass,
 * so it is missed entirely by most non-Google bots, by every social unfurler,
 * and by the AI crawlers that increasingly decide whether a site is cited at
 * all. In the HTML from the first byte, it is seen by all of them.
 *
 * `<` is escaped because a literal `</script>` anywhere inside the payload —
 * today only reachable through content, but content is exactly what changes —
 * would close this tag early and let the remainder parse as markup.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
