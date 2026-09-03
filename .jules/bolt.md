# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Deferring Carousel Images with Native HTML Lazy Loading
**Learning:** CSS `background-image` properties cannot utilize native HTML `loading="lazy"` or `decoding="async"` attributes, causing browsers to fetch off-screen carousel images early during render tree construction.
**Action:** Refactor off-screen carousel slides to HTML `<img>` elements with `loading="lazy"` and `decoding="async"`, reserving eager loading (`fetchpriority="high"`) for above-the-fold hero images.
