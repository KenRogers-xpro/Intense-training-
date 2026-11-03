# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2026-11-03 - Native `loading="lazy"` on Horizontally Offscreen Carousel Images
**Learning:** Browser native `loading="lazy"` implementation in Chromium only respects vertical viewport distance when calculating lazy-loading thresholds. Elements in an overflow container or horizontally positioned outside the viewport (e.g. flex slider container) will still be fetched upfront if the container itself is close to the vertical viewport, even with `loading="lazy"`.
**Action:** When deferring horizontally offscreen slider/carousel images that are near the vertical viewport fold, rely on on-demand dynamic loading (e.g., IntersectionObserver, `data-src`, or state-driven rendering) rather than solely relying on native `loading="lazy"` on horizontally clipped `<img>` elements.
