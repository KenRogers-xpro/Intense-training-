# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2026-03-30 - Deferring offscreen carousel images with HTML img tags
**Learning:** CSS background-images in hidden or offscreen carousel containers are downloaded immediately by the browser as soon as CSS rules are parsed. Converting offscreen slides to HTML `<img>` elements with `loading="lazy"` and `decoding="async"` defers initial asset downloads until needed, reducing initial page payload while protecting LCP with `fetchpriority="high"` on critical above-the-fold assets.
**Action:** Replace CSS background-images on hidden slider containers with HTML `<img>` tags configured with proper priority and lazy loading attributes.
