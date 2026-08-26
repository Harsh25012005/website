import path from 'node:path'
import type { NextConfig } from 'next'

// Mirrors the security headers the reference site ships. Kept in one place so the
// list is auditable rather than scattered across a proxy config.
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
]

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640],
    qualities: [75, 85, 90, 95, 100],
  },
  experimental: {
    // Inlines above-the-fold CSS and defers the rest, eliminating the
    // render-blocking stylesheet that Lighthouse flags as costing ~150 ms on
    // mobile. Uses critters under the hood; no additional dependency needed.
    optimizeCss: true,
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

export default nextConfig
