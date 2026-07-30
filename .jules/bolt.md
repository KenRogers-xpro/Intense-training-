# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-07-30 - Converting CSS Background Images to HTML Img Tags
**Learning:** CSS background-images are invisible to the browser's preload scanner and cannot use native lazy-loading or fetch priority attributes, making carousels slow to load and increasing Largest Contentful Paint (LCP) times. Converting background images to native `<img>` elements with `loading="lazy"`, `fetchpriority="high"`, and `decoding="async"` optimizes both above-the-fold and below-the-fold image loads dramatically.
**Action:** Always prefer native HTML `<img>` tags over CSS `background-image` for content images and use `object-fit: cover` to preserve the background-size scaling.
