# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2024-11-20 - Optimizing Offscreen Carousels by Replacing CSS background-image
**Learning:** Offscreen slider/carousel images defined via CSS `background-image` cannot be easily lazy-loaded natively by the browser. This leads to redundant high-priority network requests for offscreen assets during initial page load, impacting Largest Contentful Paint (LCP) and wasting bandwidth.
**Action:** Replace CSS `background-image` with semantic `<img>` tags inside the slider containers, applying `loading="lazy"`, `decoding="async"`, and explicit `width`/`height` dimensions. To preserve layout aesthetics like `background-size: cover` and rounded corners, apply `width: 100%`, `height: 100%`, `object-fit: cover`, and `overflow: hidden` on the parent and child elements.
