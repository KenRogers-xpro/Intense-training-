# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-02-14 - Deferring CSS background-images via HTML img tags

**Learning:** CSS `background-image` declarations cause browsers to download all background assets upfront during CSS parsing, even for offscreen slides, bypassing native browser lazy loading.
**Action:** Convert carousel and slider CSS background images to HTML `<img>` tags with `loading="lazy"` and `decoding="async"` for offscreen items, while keeping the main above-the-fold image eager with `fetchpriority="high"`.
