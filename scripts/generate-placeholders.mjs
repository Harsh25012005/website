/**
 * Generates the placeholder imagery the content layer points at.
 *
 * Written as a dependency-free PNG encoder rather than pulling in `sharp` or
 * `canvas`: the output is a handful of deterministic gradients, and a native
 * module would add a build step and a platform-specific binary for something
 * this project throws away the moment real photography lands.
 *
 * Run: node scripts/generate-placeholders.mjs
 */
import { deflateSync } from 'node:zlib'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT_DIR = join(ROOT, 'public', 'images')

/** CRC-32, table built once — required by every PNG chunk. */
const CRC_TABLE = (() => {
  const table = new Int32Array(256)
  for (let n = 0; n < 256; n += 1) {
    let c = n
    for (let k = 0; k < 8; k += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    }
    table[n] = c
  }
  return table
})()

function crc32(buffer) {
  let crc = -1
  for (let i = 0; i < buffer.length; i += 1) {
    crc = CRC_TABLE[(crc ^ buffer[i]) & 0xff] ^ (crc >>> 8)
  }
  return (crc ^ -1) >>> 0
}

function chunk(type, data) {
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length)
  const typeAndData = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(typeAndData))
  return Buffer.concat([length, typeAndData, crc])
}

/** Encodes raw RGB samples as a truecolour, 8-bit PNG. */
function encodePng(width, height, rgb) {
  const header = Buffer.alloc(13)
  header.writeUInt32BE(width, 0)
  header.writeUInt32BE(height, 4)
  header[8] = 8 // bit depth
  header[9] = 2 // colour type: truecolour
  header[10] = 0 // deflate
  header[11] = 0 // adaptive filtering
  header[12] = 0 // no interlace

  // Each scanline is prefixed with a filter byte. These are smooth vertical
  // ramps, so filter 2 (Up — delta against the row above) leaves deflate a
  // near-constant stream; filter 0 left the set an order of magnitude larger.
  const stride = width * 3
  const raw = Buffer.alloc((stride + 1) * height)
  for (let y = 0; y < height; y += 1) {
    const rowStart = y * (stride + 1)
    if (y === 0) {
      raw[rowStart] = 0
      rgb.copy(raw, rowStart + 1, 0, stride)
      continue
    }
    raw[rowStart] = 2
    for (let i = 0; i < stride; i += 1) {
      raw[rowStart + 1 + i] =
        (rgb[y * stride + i] - rgb[(y - 1) * stride + i]) & 0xff
    }
  }

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

/** Deterministic PRNG so repeat runs produce byte-identical files. */
function mulberry32(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function hashString(value) {
  let hash = 2166136261
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

/*
 * Each palette is [shadow, mid, highlight]. The shadow end is deliberately
 * well above the page background (#121417): a placeholder that bottoms out at
 * the background colour is indistinguishable from an empty section, which
 * makes a working layout look broken.
 */
const PALETTES = [
  [
    [58, 48, 82],
    [124, 72, 196],
    [198, 192, 255],
  ],
  [
    [74, 52, 44],
    [226, 108, 56],
    [244, 232, 196],
  ],
  [
    [40, 62, 74],
    [58, 132, 156],
    [186, 218, 232],
  ],
  [
    [70, 44, 62],
    [158, 74, 118],
    [240, 214, 196],
  ],
  [
    [44, 58, 52],
    [76, 122, 102],
    [206, 226, 214],
  ],
]

function mix(a, b, t) {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ]
}

/**
 * Paints a soft two-axis gradient with a couple of radial blooms and light
 * grain, which reads as photographic filler at thumbnail size without
 * pretending to be a real photograph.
 */
function renderGradient(width, height, seed) {
  const random = mulberry32(seed)
  const palette = PALETTES[seed % PALETTES.length]
  const angle = random() * Math.PI * 2
  const blooms = Array.from({ length: 2 }, () => ({
    x: 0.2 + random() * 0.6,
    y: 0.2 + random() * 0.6,
    radius: 0.25 + random() * 0.35,
    strength: 0.35 + random() * 0.4,
  }))

  const rgb = Buffer.alloc(width * height * 3)
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const u = x / width
      const v = y / height

      // Project onto the gradient axis, normalised back into 0..1.
      const t = Math.min(1, Math.max(0, (u * cos + v * sin + 1) / 2))
      let color = mix(palette[0], palette[1], t)

      for (const bloom of blooms) {
        const dx = u - bloom.x
        const dy = (v - bloom.y) * (height / width)
        const distance = Math.sqrt(dx * dx + dy * dy)
        const falloff = Math.max(0, 1 - distance / bloom.radius)
        color = mix(color, palette[2], falloff * falloff * bloom.strength)
      }

      // Vignette keeps the frame from reading as a flat swatch.
      const cx = u - 0.5
      const cy = v - 0.5
      const vignette =
        1 - Math.min(1, Math.sqrt(cx * cx + cy * cy) * 1.15) * 0.35

      // Deliberately no dither or grain. Both look marginally better on these
      // shallow ramps and both defeat the Up filter — grain took the set to
      // 200MB, a 4x4 ordered dither to 20MB. Smooth banding costs ~2MB.
      const index = (y * width + x) * 3
      rgb[index] = Math.max(0, Math.min(255, color[0] * vignette))
      rgb[index + 1] = Math.max(0, Math.min(255, color[1] * vignette))
      rgb[index + 2] = Math.max(0, Math.min(255, color[2] * vignette))
    }
  }

  return rgb
}

function write(relativePath, width, height) {
  const target = join(OUT_DIR, relativePath)
  mkdirSync(dirname(target), { recursive: true })
  const seed = hashString(relativePath)
  writeFileSync(
    target,
    encodePng(width, height, renderGradient(width, height, seed)),
  )
  return relativePath
}

const PROJECTS = [
  'atlas',
  'meridian',
  'northwind',
  'lumen',
  'corvus',
  'halcyon',
]
const ARTICLES = ['render-series', 'printed-model', 'merch-system']
const PERSONAL = { photography: 9, '2d': 8, '3d': 8 }

const written = []

written.push(write('hero-portrait.png', 880, 966))
written.push(write('og-default.png', 1200, 630))

for (const slug of PROJECTS) {
  written.push(write(`work/${slug}/thumbnail.png`, 900, 1125))
  written.push(write(`work/${slug}/hero.png`, 1600, 900))
  for (let i = 1; i <= 6; i += 1) {
    written.push(write(`work/${slug}/gallery-0${i}.png`, 1200, 900))
  }
}

for (const slug of ARTICLES) {
  written.push(write(`articles/${slug}/cover.png`, 1440, 810))
  for (let i = 1; i <= 5; i += 1) {
    written.push(write(`articles/${slug}/gallery-0${i}.png`, 1200, 800))
  }
}

for (const [category, count] of Object.entries(PERSONAL)) {
  written.push(write(`personal/${category}/cover.png`, 1100, 786))
  for (let i = 1; i <= count; i += 1) {
    const portrait = i % 3 === 0
    written.push(
      write(
        `personal/${category}/${String(i).padStart(2, '0')}.png`,
        portrait ? 800 : 1100,
        portrait ? 1100 : 800,
      ),
    )
  }
}

console.log(`Generated ${written.length} placeholder images in public/images`)
