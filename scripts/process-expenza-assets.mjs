import { mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const sharp = require('sharp')

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_DIR = join(ROOT, 'expenza-portfolio', 'screenshots')
const OUTPUT_DIR = join(ROOT, 'public', 'images', 'work', 'expenza')

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true })
}

/** Ratios lifted from Zenith */
const SIDE = 0.1557
const TOP = 0.0828
const BOTTOM = 0.0935

async function frameScreen(sourcePath, destPath) {
  const screen = await sharp(sourcePath).ensureAlpha().png().toBuffer()
  const { width: w, height: h } = await sharp(screen).metadata()

  const W = Math.round(w / (1 - SIDE * 2))
  const H = Math.round(h / (1 - TOP - BOTTOM))
  const x = Math.round((W - w) / 2)
  const y = Math.round(H * TOP)

  const sigma = 38 * (W / 848)
  const shadow = await sharp(
    Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
         <rect x="${x}" y="${y + Math.round(H * 0.012)}" width="${w}" height="${h}" rx="48" ry="48" fill="#000000" fill-opacity="0.18"/>
       </svg>`,
    ),
  )
    .blur(sigma)
    .png()
    .toBuffer()

  const roundedScreen = await sharp(screen)
    .composite([
      {
        input: Buffer.from(
          `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
             <rect x="0" y="0" width="${w}" height="${h}" rx="48" ry="48" fill="#fff"/>
           </svg>`,
        ),
        blend: 'dest-in',
      },
    ])
    .png()
    .toBuffer()

  await sharp({
    create: {
      width: W,
      height: H,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([
      { input: shadow, top: 0, left: 0 },
      { input: roundedScreen, top: y, left: x },
    ])
    .png({ compressionLevel: 9 })
    .toFile(destPath)

  console.log(`Framed ${destPath} -> ${W}x${H}`)
}

async function createCover() {
  const WIDTH = 2880
  const HEIGHT = 1620

  const homeBuf = await sharp(join(SOURCE_DIR, '07-home-default.png')).resize({ height: 1300 }).png().toBuffer()
  const shakeBuf = await sharp(join(SOURCE_DIR, '14-add-expense-filled.png')).resize({ height: 1180 }).png().toBuffer()
  const insightsBuf = await sharp(join(SOURCE_DIR, '27-insights-overview.png')).resize({ height: 1180 }).png().toBuffer()

  async function stylePhone(buf, w, h) {
    const rounded = await sharp(buf)
      .composite([
        {
          input: Buffer.from(
            `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
               <rect x="0" y="0" width="${w}" height="${h}" rx="44" ry="44" fill="#fff"/>
             </svg>`,
          ),
          blend: 'dest-in',
        },
      ])
      .png()
      .toBuffer()

    const phoneFrame = await sharp({
      create: {
        width: w + 24,
        height: h + 24,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    })
      .composite([
        {
          input: Buffer.from(
            `<svg xmlns="http://www.w3.org/2000/svg" width="${w + 24}" height="${h + 24}">
               <rect x="12" y="12" width="${w}" height="${h}" rx="48" ry="48" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="2.5"/>
             </svg>`,
          ),
          top: 0,
          left: 0,
        },
        { input: rounded, top: 12, left: 12 },
      ])
      .png()
      .toBuffer()

    return phoneFrame
  }

  const { width: hw, height: hh } = await sharp(homeBuf).metadata()
  const { width: sw, height: sh } = await sharp(shakeBuf).metadata()
  const { width: iw, height: ih } = await sharp(insightsBuf).metadata()

  const centerPhone = await stylePhone(homeBuf, hw, hh)
  const leftPhone = await stylePhone(insightsBuf, iw, ih)
  const rightPhone = await stylePhone(shakeBuf, sw, sh)

  const bgSvg = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
      <defs>
        <radialGradient id="glow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#4F46E5" stop-opacity="0.18" />
          <stop offset="60%" stop-color="#1E1B4B" stop-opacity="0.04" />
          <stop offset="100%" stop-color="#09090B" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="warmGlow" cx="70%" cy="80%" r="50%">
          <stop offset="0%" stop-color="#D97706" stop-opacity="0.09" />
          <stop offset="100%" stop-color="#09090B" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="rgba(255,255,255,0.07)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.01)"/>
        </linearGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#0A0A0C"/>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#warmGlow)"/>

      <g stroke="rgba(255,255,255,0.025)" stroke-width="1">
        <line x1="0" y1="270" x2="${WIDTH}" y2="270"/>
        <line x1="0" y1="540" x2="${WIDTH}" y2="540"/>
        <line x1="0" y1="810" x2="${WIDTH}" y2="810"/>
        <line x1="0" y1="1080" x2="${WIDTH}" y2="1080"/>
        <line x1="0" y1="1350" x2="${WIDTH}" y2="1350"/>
        <line x1="480" y1="0" x2="480" y2="${HEIGHT}"/>
        <line x1="960" y1="0" x2="960" y2="${HEIGHT}"/>
        <line x1="1440" y1="0" x2="1440" y2="${HEIGHT}"/>
        <line x1="1920" y1="0" x2="1920" y2="${HEIGHT}"/>
        <line x1="2400" y1="0" x2="2400" y2="${HEIGHT}"/>
      </g>

      <rect x="${WIDTH/2 - 180}" y="70" width="360" height="46" rx="23" fill="url(#cardGrad)" stroke="rgba(255,255,255,0.12)"/>
      <text x="${WIDTH/2}" y="99" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#C7D2FE" letter-spacing="3.5" text-anchor="middle">EXPENZA · CASE STUDY</text>
    </svg>
  `)

  const leftShadow = await sharp(Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}"><rect x="360" y="270" width="${iw}" height="${ih}" rx="48" fill="#000" fill-opacity="0.55"/></svg>`
  )).blur(45).png().toBuffer()

  const rightShadow = await sharp(Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}"><rect x="${WIDTH - 360 - sw}" y="270" width="${sw}" height="${sh}" rx="48" fill="#000" fill-opacity="0.55"/></svg>`
  )).blur(45).png().toBuffer()

  const centerShadow = await sharp(Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}"><rect x="${Math.round((WIDTH - hw)/2)}" y="170" width="${hw}" height="${hh}" rx="48" fill="#000" fill-opacity="0.65"/></svg>`
  )).blur(60).png().toBuffer()

  await sharp(bgSvg)
    .composite([
      { input: leftShadow, top: 0, left: 0 },
      { input: rightShadow, top: 0, left: 0 },
      { input: centerShadow, top: 0, left: 0 },
      { input: leftPhone, top: 220, left: 380 },
      { input: rightPhone, top: 220, left: WIDTH - 380 - sw - 24 },
      { input: centerPhone, top: 130, left: Math.round((WIDTH - hw - 24)/2) },
    ])
    .png({ compressionLevel: 9 })
    .toFile(join(OUTPUT_DIR, 'cover.png'))

  console.log(`Created cover.png -> ${WIDTH}x${HEIGHT}`)
}

async function createExportSuite() {
  const WIDTH = 2400
  const HEIGHT = 1400

  const excelBuf = await sharp(join(SOURCE_DIR, '41-export-excel.png')).resize({ height: 1120 }).png().toBuffer()
  const pdfBuf = await sharp(join(SOURCE_DIR, '42-export-pdf.png')).resize({ height: 1120 }).png().toBuffer()

  const { width: ew, height: eh } = await sharp(excelBuf).metadata()
  const { width: pw, height: ph } = await sharp(pdfBuf).metadata()

  async function roundCard(buf, w, h) {
    return sharp(buf)
      .composite([
        {
          input: Buffer.from(
            `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
               <rect x="0" y="0" width="${w}" height="${h}" rx="32" ry="32" fill="#fff"/>
             </svg>`,
          ),
          blend: 'dest-in',
        },
      ])
      .png()
      .toBuffer()
  }

  const roundedExcel = await roundCard(excelBuf, ew, eh)
  const roundedPdf = await roundCard(pdfBuf, pw, ph)

  const bgSvg = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
      <defs>
        <radialGradient id="grad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#1E1B4B" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#0A0A0C" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#0D0D10"/>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grad)"/>
    </svg>
  `)

  const leftPos = Math.round((WIDTH - (ew + pw + 120)) / 2)
  const rightPos = leftPos + ew + 120
  const topPos = Math.round((HEIGHT - eh) / 2)

  const shadow = await sharp(Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}">
       <rect x="${leftPos}" y="${topPos + 20}" width="${ew}" height="${eh}" rx="32" fill="#000" fill-opacity="0.55"/>
       <rect x="${rightPos}" y="${topPos + 20}" width="${pw}" height="${ph}" rx="32" fill="#000" fill-opacity="0.55"/>
     </svg>`
  )).blur(45).png().toBuffer()

  await sharp(bgSvg)
    .composite([
      { input: shadow, top: 0, left: 0 },
      { input: roundedExcel, top: topPos, left: leftPos },
      { input: roundedPdf, top: topPos, left: rightPos },
    ])
    .png({ compressionLevel: 9 })
    .toFile(join(OUTPUT_DIR, 'export-suite.png'))

  console.log(`Created export-suite.png -> ${WIDTH}x${HEIGHT}`)
}

async function createDesignMockup() {
  const WIDTH = 2400
  const HEIGHT = 1400

  const dsBuf = await sharp(join(SOURCE_DIR, '55-design-system.png')).resize({ height: 1100 }).png().toBuffer()
  const moodBuf = await sharp(join(SOURCE_DIR, '31-money-replay-story.png')).resize({ height: 1160 }).png().toBuffer()
  const budgetBuf = await sharp(join(SOURCE_DIR, '33-settings-budget.png')).resize({ height: 1100 }).png().toBuffer()

  const { width: dw, height: dh } = await sharp(dsBuf).metadata()
  const { width: mw, height: mh } = await sharp(moodBuf).metadata()
  const { width: bw, height: bh } = await sharp(budgetBuf).metadata()

  async function roundPhone(buf, w, h) {
    return sharp(buf)
      .composite([
        {
          input: Buffer.from(
            `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
               <rect x="0" y="0" width="${w}" height="${h}" rx="44" ry="44" fill="#fff"/>
             </svg>`,
          ),
          blend: 'dest-in',
        },
      ])
      .png()
      .toBuffer()
  }

  const rDs = await roundPhone(dsBuf, dw, dh)
  const rMood = await roundPhone(moodBuf, mw, mh)
  const rBudget = await roundPhone(budgetBuf, bw, bh)

  const bgSvg = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
      <defs>
        <radialGradient id="grad2" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#312E81" stop-opacity="0.25" />
          <stop offset="100%" stop-color="#0C0C0E" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#0C0C0E"/>
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grad2)"/>
    </svg>
  `)

  const centerLeft = Math.round((WIDTH - mw) / 2)
  const centerTop = Math.round((HEIGHT - mh) / 2)
  const leftX = centerLeft - dw - 60
  const rightX = centerLeft + mw + 60
  const sideTop = Math.round((HEIGHT - dh) / 2)

  const shadow = await sharp(Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}">
       <rect x="${leftX}" y="${sideTop + 20}" width="${dw}" height="${dh}" rx="44" fill="#000" fill-opacity="0.45"/>
       <rect x="${centerLeft}" y="${centerTop + 20}" width="${mw}" height="${mh}" rx="44" fill="#000" fill-opacity="0.6"/>
       <rect x="${rightX}" y="${sideTop + 20}" width="${bw}" height="${bh}" rx="44" fill="#000" fill-opacity="0.45"/>
     </svg>`
  )).blur(45).png().toBuffer()

  await sharp(bgSvg)
    .composite([
      { input: shadow, top: 0, left: 0 },
      { input: rDs, top: sideTop, left: leftX },
      { input: rMood, top: centerTop, left: centerLeft },
      { input: rBudget, top: sideTop, left: rightX },
    ])
    .png({ compressionLevel: 9 })
    .toFile(join(OUTPUT_DIR, 'systems-overview.png'))

  console.log(`Created systems-overview.png -> ${WIDTH}x${HEIGHT}`)
}

async function run() {
  const screens = [
    ['07-home-default.png', 'home-default.png'],
    ['14-add-expense-filled.png', 'add-expense.png'],
    ['17-shake-sensitivity.png', 'shake-sensitivity.png'],
    ['20-expenses-list.png', 'expenses-list.png'],
    ['24-expense-details.png', 'expenses-calendar.png'],
    ['27-insights-overview.png', 'insights-overview.png'],
    ['28-insights-category-breakdown.png', 'insights-breakdown.png'],
    ['31-money-replay-story.png', 'money-replay.png'],
    ['33-settings-budget.png', 'settings-budget.png'],
    ['40-export-menu.png', 'export-menu.png'],
    ['41-export-excel.png', 'export-excel.png'],
    ['42-export-pdf.png', 'export-pdf.png'],
    ['55-design-system.png', 'design-system.png'],
  ]

  for (const [src, dest] of screens) {
    await frameScreen(join(SOURCE_DIR, src), join(OUTPUT_DIR, dest))
  }

  await createCover()
  await createExportSuite()
  await createDesignMockup()
}

run().catch(console.error)
