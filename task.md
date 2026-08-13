# Mobile Performance 88 → 100

- [x] 1. Reduce LCP animation delay in `app/layout.tsx` (0.4s → 0.05s)
- [x] 2. Skip preloader on mobile (pointer: coarse) in `Preloader.tsx`
- [x] 3. Add browserslist to `package.json` for modern browser targets
- [x] 4. Update `next.config.ts` — enabled `experimental.optimizeCss`
- [x] 5. Install `critters` dev dependency (required by optimizeCss)
- [x] 6. Update `SplitHeading.tsx` — reduce `FONTS_TIMEOUT_MS` to 300ms
- [x] 7. Verify build succeeds (✓ 48/48 pages, optimizeCss active)
