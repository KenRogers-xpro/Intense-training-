# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-08-03 - Converting CSS Background Images to HTML Img Tags with Native Lazy Loading
**Learning:** CSS background-images cannot be natively lazy-loaded by modern browsers. By converting background-images to HTML `<img>` elements styled with `object-fit: cover` and using `loading="lazy"` / `decoding="async"`, we can defer massive assets (over 1.2MB in Project 5) from loading during initial page load, significantly speeding up First Contentful Paint (FCP) and Time to Interactive (TTI). Conversely, above-the-fold images (like the hero image) must be loaded eagerly with `fetchpriority="high"` to optimize the Largest Contentful Paint (LCP) metric.
**Action:** Always inspect CSS stylesheets for heavy background-images that are below-the-fold and convert them to lazy-loaded HTML `<img>` elements, while ensuring the first-paint hero elements are explicitly prioritized.
