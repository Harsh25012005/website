/**
 * Gives raw app screenshots the same presentation the Zenith exports already
 * have, so the case studies read as one set.
 *
 * The Zenith screens were exported from Figma as a 584×1234 screen centred on
 * an 848×1498 transparent canvas with a very soft drop shadow. The Crave and
 * Cleaning screens were exported edge-to-edge with no surround, so side by
 * side they looked like a different treatment — taller, tighter, no depth.
 *
 * Measured off `zenith/task-list-dark.png` rather than eyeballed:
 *
 *   - side padding   132 / 848  = 15.57%
 *   - top padding    124 / 1498 =  8.28%
 *   - bottom padding 140 / 1498 =  9.35%   (heavier, the shadow sits low)
 *   - corner radius  0px — the exports are square-cornered, not rounded
 *   - shadow         alpha 12→0 over ~110px, i.e. ~5% black, wide and soft
 *
 * **Idempotent.** A screen that already has transparent padding is skipped, so
 * re-running cannot frame an image twice. That matters because this overwrites
 * in place and the sources are untracked.
 *
 * Run: node scripts/frame-app-screens.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const sharp = require('sharp')

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const WORK = join(ROOT, 'public', 'images', 'work')

/** Ratios lifted from the Zenith export. */
const SIDE = 0.1557
const TOP = 0.0828
const BOTTOM = 0.0935

const TARGETS = [
  ['crave', ['home-dark', 'food-list-dark', 'sign-up-dark']],
  [
    'cleaning-services-app',
    ['service-detail', 'select-date-time', 'my-bookings'],
  ],
]

/** True when the image already sits on a transparent surround. */
async function alreadyFramed(file) {
  const { data, info } = await sharp(file)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const alphaAt = (x, y) => data[(y * info.width + x) * info.channels + 3]
  const midY = Math.floor(info.height / 2)
  // A framed export is fully transparent well inside its own left edge.
  return alphaAt(Math.floor(info.width * 0.04), midY) < 8
}

async function frame(file) {
  const screen = await sharp(file).ensureAlpha().png().toBuffer()
  const { width: w, height: h } = await sharp(screen).metadata()

  const W = Math.round(w / (1 - SIDE * 2))
  const H = Math.round(h / (1 - TOP - BOTTOM))
  const x = Math.round((W - w) / 2)
  const y = Math.round(H * TOP)

  // Scale the blur with the canvas so a smaller export gets a proportionally
  // smaller shadow rather than a heavier-looking one.
  const sigma = 38 * (W / 848)
  const shadow = await sharp(
    Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
         <rect x="${x}" y="${y + Math.round(H * 0.012)}" width="${w}" height="${h}" fill="#000000" fill-opacity="0.10"/>
       </svg>`,
    ),
  )
    .blur(sigma)
    .png()
    .toBuffer()

  return sharp({
    create: {
      width: W,
      height: H,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      { input: shadow, top: 0, left: 0 },
      { input: screen, top: y, left: x },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer()
}

let framed = 0
let skipped = 0

for (const [slug, files] of TARGETS) {
  for (const name of files) {
    const file = join(WORK, slug, `${name}.png`)
    const before = readFileSync(file).length

    if (await alreadyFramed(file)) {
      console.log(`  skip  ${slug}/${name} — already framed`)
      skipped += 1
      continue
    }

    const out = await frame(file)
    writeFileSync(file, out)
    const { width, height } = await sharp(out).metadata()
    console.log(
      `  ok    ${slug}/${name} -> ${width}x${height}  ${(before / 1024).toFixed(0)}KB -> ${(out.length / 1024).toFixed(0)}KB`,
    )
    framed += 1
  }
}

console.log(`\nframed ${framed}, skipped ${skipped}`)
