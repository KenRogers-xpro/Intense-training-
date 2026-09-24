# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-31 - Deferring off-screen carousel images by converting CSS background-images to HTML img tags
**Learning:** CSS `background-image` properties on elements inside hidden/off-screen carousel slides cause browsers to download image assets immediately during CSS layout parsing, ignoring lazy loading.
**Action:** Convert off-screen carousel slide backgrounds to native `<img>` tags with `loading="lazy"` and `decoding="async"`, preserving LCP priority for the active slide.
