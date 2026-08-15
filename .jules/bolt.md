# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Deferring Offscreen Carousel Images in Static Landing Pages
**Learning:** Setting carousel slide images via CSS `background-image` causes browsers to fetch all slide background assets immediately during rendering, consuming ~843KB of bandwidth on page load.
**Action:** Replace CSS background images with HTML `<img>` elements, applying `loading="lazy"` and `decoding="async"` to offscreen slides, while keeping the first slide/hero image eagerly loaded with `fetchpriority="high"`.
