# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-03-02 - Defer Offscreen Carousel Images with HTML img Tags
**Learning:** CSS `background-image` properties force browsers to download image assets immediately during CSS parsing, blocking critical path rendering for offscreen carousel slides. Replacing them with HTML `<img>` elements allows using `loading="lazy"` and `decoding="async"` to defer offscreen slides while preserving `fetchpriority="high"` for critical above-the-fold hero images.
**Action:** In static landing pages with carousels or image sliders, refactor CSS background-images into HTML `<img>` elements inside overflow containers to leverage native lazy loading.
