# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Deferring off-screen CSS background images in static carousels
**Learning:** CSS background images defined via external stylesheet rules (`background: url(...)`) are eagerly requested by the browser during CSS parsing regardless of whether the elements are off-screen or inside overflow-hidden carousels.
**Action:** Refactor CSS background images to inline HTML `<img>` elements with `loading="lazy"` and `decoding="async"` for off-screen slides, while keeping the initial visible slide/hero image loaded eagerly with `fetchpriority="high"` and explicit aspect ratios.
