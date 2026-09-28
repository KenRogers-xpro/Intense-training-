# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2024-09-28 - Defer CSS Background Images in Carousels
**Learning:** CSS `background-image` properties force browsers to fetch image assets immediately during CSS parse/cascade, ignoring viewport visibility. In image carousels, this eager-fetches offscreen slides during initial load, competing for bandwidth with LCP assets.
**Action:** Replace CSS background-images in carousels with HTML `<img>` elements using `loading="lazy"` and `decoding="async"` for offscreen slides while keeping slide 1 eager.
