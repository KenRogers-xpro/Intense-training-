# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-02-16 - CSS background-image vs. HTML img Lazy Loading
**Learning:** Carousel slides using CSS `background-image` cannot be lazily loaded natively by browser engine resource pre-parsers, leading to full asset downloads upfront regardless of slider visibility.
**Action:** Convert CSS `background-image` elements to semantic `<img>` tags, reserving `fetchpriority="high"` for the active slide and applying `loading="lazy"` + `decoding="async"` to offscreen slides.
