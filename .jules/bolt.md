# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Deferring offscreen carousel images by replacing CSS background images with HTML img tags
**Learning:** In pure static sites with image carousels defined using CSS `background-image`, browsers fetch all images upfront during initial style evaluation regardless of visibility. Converting CSS `background-image` elements to HTML `<img>` tags allows leverage of native `loading="lazy"`, `decoding="async"`, and `fetchpriority="high"`.
**Action:** Replace CSS background images in offscreen carousel slides with lazy-loaded `<img>` elements while using `fetchpriority="high"` on LCP hero images.
