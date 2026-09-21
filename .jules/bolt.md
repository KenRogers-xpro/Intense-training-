# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2026-09-21 - Defer off-screen carousel images via native HTML <img> tags
**Learning:** Carousel slides implemented using CSS `background-image` force browsers to download image assets immediately when the CSS rule matches or on initial DOM layout, blocking network bandwidth. Converting `background-image` elements to native `<img>` tags allows utilizing native `loading="lazy"` and `decoding="async"` attributes for off-screen slides while prioritizing the active slide with `fetchpriority="high"`.
**Action:** Replace CSS background images in HTML carousels and multi-slide components with native `<img>` tags with appropriate `loading` and `fetchpriority` hints.
