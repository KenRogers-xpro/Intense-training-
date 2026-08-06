# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2026-08-06 - CSS Background Images vs. HTML <img> tags for Performance
**Learning:** CSS background-images do not support native image loading optimizations like `loading="lazy"`, `decoding="async"`, or `fetchpriority="high"`. This means all background images are loaded eagerly by the browser, blocking critical resources and hurting performance metrics like Largest Contentful Paint (LCP). Converting them to standard HTML `<img>` elements with `object-fit: cover` and proper optimization attributes solves this without altering the visual design.
**Action:** Always prefer HTML `<img>` elements over CSS background-images for large assets, slides, and heroes. Apply `fetchpriority="high"` for above-the-fold or primary visual elements and `loading="lazy"` + `decoding="async"` for below-the-fold content.
