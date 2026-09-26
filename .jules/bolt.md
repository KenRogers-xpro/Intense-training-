# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Deferring Below-the-Fold Carousel Assets via Native Lazy Loading
**Learning:** Carousel components using CSS `background-image` rules load all slide assets eagerly during page initialization, consuming bandwidth for offscreen images.
**Action:** Refactor CSS background images in carousels/sliders to semantic `<img>` tags, keeping the initial slide eager and applying `loading="lazy"` + `decoding="async"` to offscreen slides to prioritize above-the-fold network requests and LCP.
