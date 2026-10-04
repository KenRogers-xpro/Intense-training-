# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-10-04 - Hero Image LCP Optimization with fetchpriority and async decoding
**Learning:** For above-the-fold hero images in static HTML pages, adding `fetchpriority="high"` signals to the browser's preload scanner to fetch the primary LCP asset immediately without blocking on secondary scripts or stylesheets, while `decoding="async"` offloads image decoding from the main thread.
**Action:** Always apply `fetchpriority="high"` and `decoding="async"` to LCP hero image elements while omitting `loading="lazy"`.
