# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Deferring Carousel Image Loading by Converting CSS Backgrounds to HTML img Tags
**Learning:** In static websites using CSS `background-image` for carousels or hero sections, off-screen image resources cannot leverage native browser loading priorities like `loading="lazy"` or `fetchpriority`. Replacing CSS background properties with HTML `<img>` elements combined with `object-fit: cover` allows off-screen carousel slides to be deferred while boosting visible initial images with `fetchpriority="high"`.
**Action:** When optimizing static HTML carousels or banners, refactor CSS `background-image` declarations into native HTML `<img>` tags with `loading="lazy"`, `decoding="async"`, and `object-fit: cover`.
