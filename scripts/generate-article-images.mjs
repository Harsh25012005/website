/**
 * Generates the article cover and gallery imagery.
 *
 * Flat editorial graphics: one saturated field, a handful of hard-edged
 * shapes in black and white, nothing soft. No gradients, no blur, no vignette
 * — an earlier version used a gradient mesh and it read as wallpaper rather
 * than as illustration.
 *
 * **No text.** The title is already the `h1` beside the cover and the plates
 * sit inside the prose; burning words into the image duplicates them somewhere
 * no screen reader can reach and no translation can touch.
 *
 * Every image is unique. Motif, palette and placement all come from a PRNG
 * seeded on `slug + index`, so the cover never repeats a plate and no two
 * plates match — while staying deterministic, so re-running does not churn
 * git.
 *
 * Uses `sharp` (an install-time dependency of Next.js) to rasterise SVG.
 *
 * Run: node scripts/generate-article-images.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const sharp = require('sharp')

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT = join(ROOT, 'public', 'images', 'articles')

const INK = '#0e0e10'
const PAPER = '#ffffff'

const COVER = { w: 1600, h: 900 }
const PLATE = { w: 1500, h: 1000 }

/**
 * Each article gets a lead colour for its cover and a small set to rotate
 * through on its plates, so an article reads as a set without any two images
 * being the same.
 */
const ARTICLES = [
  {
    slug: 'design-system-in-figma',
    lead: '#6c4cf1',
    fields: ['#6c4cf1', '#a9cbf2', '#e4322b', '#f26b1f'],
  },
  {
    slug: 'figma-to-react-handoff',
    lead: '#f26b1f',
    fields: ['#f26b1f', '#6c4cf1', '#a9cbf2', '#e4322b'],
  },
  {
    slug: 'ui-design-mistakes',
    lead: '#e4322b',
    fields: ['#e4322b', '#f26b1f', '#6c4cf1', '#a9cbf2'],
  },
]

/* ── deterministic randomness ─────────────────────────────────────────────── */

function hash(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** mulberry32 — small, fast, stable across Node versions. */
function rng(seed) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/* ── shape helpers ────────────────────────────────────────────────────────── */

/** Four-point sparkle with concave sides, centred on `cx,cy`. */
function sparkle(cx, cy, r, fill) {
  const p = (n) => (n * r).toFixed(1)
  return `<path transform="translate(${cx} ${cy})" fill="${fill}" d="M0 ${-r}C${p(0.1)} ${p(-0.35)} ${p(0.35)} ${p(-0.1)} ${r} 0C${p(0.35)} ${p(0.1)} ${p(0.1)} ${p(0.35)} 0 ${r}C${p(-0.1)} ${p(0.35)} ${p(-0.35)} ${p(0.1)} ${-r} 0C${p(-0.35)} ${p(-0.1)} ${p(-0.1)} ${p(-0.35)} 0 ${-r}Z"/>`
}

/** Classic five-point star. */
function star(cx, cy, r, fill) {
  const pts = []
  for (let i = 0; i < 10; i += 1) {
    const rad = i % 2 === 0 ? r : r * 0.4
    const a = (Math.PI / 5) * i - Math.PI / 2
    pts.push(
      `${(cx + Math.cos(a) * rad).toFixed(1)},${(cy + Math.sin(a) * rad).toFixed(1)}`,
    )
  }
  return `<polygon points="${pts.join(' ')}" fill="${fill}"/>`
}

/** Leaf/petal, anchored at its tip and rotated. */
function petal(cx, cy, r, angle, fill) {
  const q = (n) => (n * r).toFixed(1)
  return `<path transform="translate(${cx} ${cy}) rotate(${angle.toFixed(0)})" fill="${fill}" d="M0 0C${q(0.55)} 0 ${r} ${q(0.45)} ${r} ${r}C${q(0.45)} ${r} 0 ${q(0.55)} 0 0Z"/>`
}

function checkbox(x, y, size, boxFill, tickFill) {
  const t = size * 0.22
  return `<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="${(size * 0.18).toFixed(0)}" fill="${boxFill}"/>
    <polyline points="${x + size * 0.24},${y + size * 0.52} ${x + size * 0.43},${y + size * 0.7} ${x + size * 0.76},${y + size * 0.3}" fill="none" stroke="${tickFill}" stroke-width="${t.toFixed(1)}" stroke-linecap="square" stroke-linejoin="miter"/>`
}

/* ── motifs ───────────────────────────────────────────────────────────────── */

/** Pills, discs and hairline crosshairs — the densest of the four. */
function motifPills(w, h, rand) {
  const out = []
  const cols = 3
  const rows = 2
  const padX = w * 0.06
  const padY = h * 0.1
  const cw = (w - padX * 2) / cols
  const ch = (h - padY * 2) / rows

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const cx = padX + cw * c + cw / 2
      const cy = padY + ch * r + ch / 2
      const fill = rand() > 0.35 ? PAPER : INK
      const kind = rand()

      if (kind < 0.4) {
        const rw = cw * 0.82
        const rh = ch * 0.56
        out.push(
          `<rect x="${(cx - rw / 2).toFixed(0)}" y="${(cy - rh / 2).toFixed(0)}" width="${rw.toFixed(0)}" height="${rh.toFixed(0)}" rx="${(rh / 2).toFixed(0)}" fill="${fill}"/>`,
        )
      } else if (kind < 0.75) {
        const rad = Math.min(cw, ch) * 0.42
        out.push(
          `<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="${rad.toFixed(0)}" fill="${fill}"/>`,
        )
      } else {
        const rw = cw * 0.72
        const rh = ch * 0.66
        out.push(
          `<rect x="${(cx - rw / 2).toFixed(0)}" y="${(cy - rh / 2).toFixed(0)}" width="${rw.toFixed(0)}" height="${rh.toFixed(0)}" rx="${(Math.min(rw, rh) * 0.16).toFixed(0)}" fill="${fill}"/>`,
        )
      }

      // Hairline crosshair through roughly half the cells.
      if (rand() > 0.5) {
        out.push(
          `<line x1="${cx.toFixed(0)}" y1="${padY.toFixed(0)}" x2="${cx.toFixed(0)}" y2="${(h - padY).toFixed(0)}" stroke="${PAPER}" stroke-width="2"/>`,
        )
      }
    }
  }
  return out.join('')
}

/** Organic petals with one hard diagonal striped band across them. */
function motifPetals(w, h, rand) {
  const out = []
  const count = 6 + Math.floor(rand() * 3)

  for (let i = 0; i < count; i += 1) {
    out.push(
      petal(
        rand() * w,
        rand() * h,
        // Kept under half the short edge. Larger than this and two petals fill
        // the frame, so the result reads as a crop of a shape rather than as a
        // composition of several.
        (0.16 + rand() * 0.2) * Math.min(w, h) * 0.95,
        rand() * 360,
        rand() > 0.25 ? PAPER : INK,
      ),
    )
  }

  const angle = -28 + rand() * 20
  const bandH = h * 0.2
  const stripes = []
  for (let i = 0; i < 4; i += 1) {
    stripes.push(
      `<rect x="${-w}" y="${(bandH * 0.16 * (i + 1) + bandH * 0.1).toFixed(0)}" width="${w * 3}" height="${(bandH * 0.06).toFixed(0)}" fill="${INK}"/>`,
    )
  }
  out.push(
    `<g transform="translate(${(w * 0.5).toFixed(0)} ${(h * 0.55).toFixed(0)}) rotate(${angle.toFixed(0)})">
       <rect x="${-w}" y="0" width="${w * 3}" height="${bandH.toFixed(0)}" fill="${PAPER}"/>
       ${stripes.join('')}
     </g>`,
  )
  return out.join('')
}

/** A white card carrying a sparkle and a bar chart, with ink slabs bleeding in. */
function motifCard(w, h, rand) {
  const out = []
  const cardW = w * 0.52
  const cardH = h * 0.46
  const cx = w * 0.5 - cardW / 2
  const cy = h * 0.5 - cardH / 2

  // Ink slabs behind, bleeding off two edges.
  out.push(
    `<rect x="${(-w * 0.05).toFixed(0)}" y="${(h * (0.14 + rand() * 0.1)).toFixed(0)}" width="${(w * 0.34).toFixed(0)}" height="${(h * 0.16).toFixed(0)}" rx="${(h * 0.03).toFixed(0)}" fill="${INK}"/>`,
    `<rect x="${(w * (0.6 + rand() * 0.14)).toFixed(0)}" y="${(h * 0.62).toFixed(0)}" width="${(w * 0.5).toFixed(0)}" height="${(h * 0.2).toFixed(0)}" rx="${(h * 0.03).toFixed(0)}" fill="${INK}"/>`,
    `<rect x="${(w * 0.08).toFixed(0)}" y="${(h * 0.7).toFixed(0)}" width="${(w * 0.3).toFixed(0)}" height="${(h * 0.05).toFixed(0)}" rx="${(h * 0.025).toFixed(0)}" fill="${PAPER}"/>`,
  )

  out.push(
    `<rect x="${cx.toFixed(0)}" y="${cy.toFixed(0)}" width="${cardW.toFixed(0)}" height="${cardH.toFixed(0)}" rx="${(h * 0.035).toFixed(0)}" fill="${PAPER}"/>`,
  )
  out.push(sparkle(w * 0.5, h * 0.5, h * 0.11, INK))
  out.push(
    sparkle(w * 0.5 + cardW * 0.22, h * 0.5 - cardH * 0.2, h * 0.045, INK),
  )

  // Bar chart, right of the card, bleeding under it.
  const bars = 3
  for (let i = 0; i < bars; i += 1) {
    const bh = h * (0.1 + rand() * 0.16)
    out.push(
      `<rect x="${(w * 0.78 + i * w * 0.055).toFixed(0)}" y="${(h * 0.42 - bh).toFixed(0)}" width="${(w * 0.035).toFixed(0)}" height="${bh.toFixed(0)}" rx="6" fill="${PAPER}"/>`,
    )
  }
  return out.join('')
}

/** Checkboxes, a heavy ring and a star badge. */
function motifChecks(w, h, rand) {
  const out = []
  const size = Math.min(w, h) * 0.13

  const spots = [
    [w * 0.1, h * 0.14],
    [w * 0.8, h * 0.16],
    [w * 0.12, h * 0.72],
    [w * 0.82, h * 0.74],
  ]
  for (const [x, y] of spots) {
    if (rand() > 0.22) out.push(checkbox(x, y, size, PAPER, INK))
  }

  out.push(
    `<rect x="${(w * 0.06).toFixed(0)}" y="${(h * 0.44).toFixed(0)}" width="${(w * 0.88).toFixed(0)}" height="${(h * 0.055).toFixed(0)}" rx="${(h * 0.028).toFixed(0)}" fill="${PAPER}"/>`,
  )

  const ringR = Math.min(w, h) * 0.3
  out.push(
    `<circle cx="${(w * 0.55).toFixed(0)}" cy="${(h * 0.52).toFixed(0)}" r="${ringR.toFixed(0)}" fill="none" stroke="${PAPER}" stroke-width="${(ringR * 0.22).toFixed(0)}"/>`,
  )

  const badge = Math.min(w, h) * 0.19
  out.push(
    `<rect x="${(w * 0.55 - badge / 2).toFixed(0)}" y="${(h * 0.52 - badge / 2).toFixed(0)}" width="${badge.toFixed(0)}" height="${badge.toFixed(0)}" rx="${(badge * 0.14).toFixed(0)}" fill="${INK}"/>`,
    star(w * 0.55, h * 0.52, badge * 0.3, PAPER),
  )
  return out.join('')
}

const MOTIFS = [motifPills, motifPetals, motifCard, motifChecks]

/* ── composition ──────────────────────────────────────────────────────────── */

function graphicSvg({ w, h, field, motif, seed }) {
  const rand = rng(seed)
  // Everything is clipped to the frame: shapes are placed past the edges on
  // purpose so the composition reads as a crop of something larger.
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs><clipPath id="frame"><rect width="${w}" height="${h}"/></clipPath></defs>
    <g clip-path="url(#frame)">
      <rect width="${w}" height="${h}" fill="${field}"/>
      ${motif(w, h, rand)}
    </g>
  </svg>`
}

/* ── run ──────────────────────────────────────────────────────────────────── */

async function render(svg, file) {
  const png = await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9, palette: true })
    .toBuffer()
  writeFileSync(file, png)
  return png.length
}

let total = 0
for (const [a, article] of ARTICLES.entries()) {
  const dir = join(OUT, article.slug)
  mkdirSync(dir, { recursive: true })

  total += await render(
    graphicSvg({
      ...COVER,
      field: article.lead,
      motif: MOTIFS[a % MOTIFS.length],
      seed: hash(`${article.slug}#cover`),
    }),
    join(dir, 'cover.png'),
  )

  for (let i = 1; i <= 5; i += 1) {
    total += await render(
      graphicSvg({
        ...PLATE,
        field: article.fields[i % article.fields.length],
        // Offset by the article index so the three sets do not march through
        // the motifs in lockstep.
        motif: MOTIFS[(i + a) % MOTIFS.length],
        seed: hash(`${article.slug}#plate${i}`),
      }),
      join(dir, `gallery-0${i}.png`),
    )
  }
  console.log(`  ${article.slug}: cover + 5 plates`)
}

console.log(`done — 18 images, ${(total / 1024).toFixed(0)}KB total`)
