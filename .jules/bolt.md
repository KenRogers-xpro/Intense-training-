# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-20 - CSS Background Images vs HTML Preload Scanner
**Learning:** Carousel slides using CSS `background-image` cannot be discovered by the browser's speculative HTML preload scanner and do not support native `loading="lazy"` or `fetchpriority` hints, delaying LCP and fetching offscreen assets early.
**Action:** Replace CSS `background-image` properties on key hero/carousel banners with semantic `<img>` elements using `fetchpriority="high"` for the active slide and `loading="lazy"` for offscreen slides.
