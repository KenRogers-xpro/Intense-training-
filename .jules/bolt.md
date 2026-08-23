# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2026-03-29 - Defer Offscreen Image Requests in Pure Static Web Pages
**Learning:** In static pages using CSS `background-image` for carousels or image galleries, browser pre-loaders download all image assets up front regardless of visibility or fold position, consuming critical network bandwidth during initial render.
**Action:** Replace CSS `background-image` elements in carousels with standard `<img>` tags configured with `loading="lazy"` and `decoding="async"`, preserving eager loading and `fetchpriority="high"` strictly for above-the-fold hero content.
