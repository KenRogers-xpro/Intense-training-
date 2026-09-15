# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-15 - CSS Background Images vs Native HTML Lazy Loading
**Learning:** Carousel slides defined using CSS `background: url(...)` bypass browser native image lazy-loading, forcing off-screen carousel images (~1.2MB total) to download immediately on page initialization.
**Action:** Convert CSS background images in slider containers to standard `<img>` tags, setting `fetchpriority="high"` on the initial slide and `loading="lazy"` with `decoding="async"` on off-screen slides to defer image fetching until needed.
