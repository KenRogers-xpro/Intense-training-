# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Converting CSS Background Images to HTML img Tags for Lazy Loading
**Learning:** CSS background images defined in stylesheets (e.g. `background-image: url(...)`) are requested by the browser as soon as the CSS rule applies, bypassing native browser lazy loading attributes. Converting off-screen background images into explicit HTML `<img>` elements with `loading="lazy"` and `decoding="async"` successfully defers network fetch until scrolled into view or shown in carousels.
**Action:** Replace CSS background images on below-the-fold or hidden carousel items with native `<img>` elements set to `loading="lazy"`, while ensuring above-the-fold LCP hero images use `loading="eager"` and `fetchpriority="high"`.
