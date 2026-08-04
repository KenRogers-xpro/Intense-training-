# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2023-11-20 - LCP and Carousel Optimization with Native HTML Images
**Learning:** CSS `background-image` properties are parsed and requested relatively late in the browser rendering path, and they do not support advanced loading optimizations like `fetchpriority="high"`, `loading="lazy"`, or `decoding="async"`. Converting these style-based background images to semantic HTML `<img>` tags preserves layout using CSS `object-fit: cover` while unlocking modern browser prioritization APIs. Eager loading and high fetch priority on the primary above-the-fold slide protects/improves the Largest Contentful Paint (LCP) metric, while off-screen slides can be lazily loaded to preserve critical bandwidth on initial load.
**Action:** Always audit style-based background images used for prominent elements (like heroes or carousels), and convert them to optimized HTML `<img>` tags utilizing modern prioritization attributes (`fetchpriority`, `loading`, and `decoding`).
