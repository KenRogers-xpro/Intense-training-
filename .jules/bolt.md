# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-01-16 - Carousel Background Image Bottleneck in Static Pages
**Learning:** In purely static frontend pages (such as Project 5's landing page), using CSS `background-image` for hero carousel slides prevents the browser from optimizing image download schedules. The browser must wait for the CSS OM to be fully built and selector rules matched before requesting the images, completely bypassing the preload scanner. This significantly delays the Largest Contentful Paint (LCP).
**Action:** Replace CSS background-images on slide elements with semantic HTML `<img>` tags. Apply `fetchpriority="high"` and eager loading on the first (above-the-fold) slide image to trigger early requests, and apply `loading="lazy"` + `decoding="async"` on the subsequent slides to defer resource allocation until they are scrolled/transitioned into view. Ensure container styles use `overflow: hidden` and images use `object-fit: cover` to preserve styling.
