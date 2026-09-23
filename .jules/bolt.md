# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Deferring CSS Background Images in Static Carousels
**Learning:** Pure CSS background-image rules on hidden slider/carousel slides cause the browser to eagerly download offscreen images on initial page load, increasing initial payload and network contention.
**Action:** Replace background-image CSS rules on offscreen slides with HTML `<img>` elements configured with `loading="lazy"` and `decoding="async"`, while setting `fetchpriority="high"` on the initial active slide image to protect Largest Contentful Paint (LCP).
