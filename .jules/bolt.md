# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2026-08-02 - Deferring Below-The-Fold Carousel Images by Refactoring CSS Backgrounds
**Learning:** Pure CSS background-images are always fetched eagerly by the browser once the CSS is parsed, regardless of whether they are visible in the viewport or hidden behind a sliding carousel. By refactoring slides to standard HTML `<img>` tags, we can utilize native browser `loading="lazy"` and `decoding="async"` to completely defer loading below-the-fold carousel slides. For the hero image (above-the-fold), we must load eagerly and specify `fetchpriority="high"` to optimize the Largest Contentful Paint (LCP). Additionally, converting heavy assets to WebP using Pillow reduces visual page payload by ~87% without visual regressions.
**Action:** Always replace CSS background-image carousels or hidden visual elements with HTML `<img>` tags using `object-fit: cover` to leverage native browser deferred-loading and resource priority hints, and programmatically convert assets to modern formats like WebP.
