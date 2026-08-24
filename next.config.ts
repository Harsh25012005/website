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
