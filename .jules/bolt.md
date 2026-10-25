# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-20 - CSS Background Images vs Native HTML Lazy Loading
**Learning:** Carousel slides implemented via CSS `background-image` rules download eagerly at page parse time, blocking network bandwidth for initial render (~860KB in Project5). Converting CSS background images to `<img>` tags with `loading="lazy"` and `decoding="async"` defers loading of offscreen slides until navigated, while setting `fetchpriority="high"` on above-the-fold hero images optimizes Largest Contentful Paint (LCP).
**Action:** When optimizing static landing pages or image carousels, replace CSS background images with HTML `<img>` elements to leverage native browser lazy loading and priority hints.
