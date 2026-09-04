# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2026-09-04 - Deferring offscreen carousel images by replacing CSS background-images with HTML img tags
**Learning:** CSS background images declared in CSS files are discovered late by the browser preload scanner and cannot use native HTML lazy loading (`loading="lazy"`). Refactoring CSS background images to inline `<img>` tags with `object-fit: cover` allows offscreen slider images to be lazily loaded and eagerly loads the first slide / hero image with `fetchpriority="high"`.
**Action:** Replace CSS background images in offscreen carousels/sliders with HTML `<img>` elements having `loading="lazy"` and `decoding="async"`, while keeping LCP images eager with `fetchpriority="high"`.
