# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-02-15 - Lazy Loading Carousel Slider Images via HTML Transition from CSS background-image
**Learning:** In purely static, image-heavy web projects (like Project5's iPhone landing page), loading slider/carousel images as CSS background-images prevents the browser from prioritizing/lazy-loading them. Moving them to inline HTML `<img>` tags with `loading="lazy"` and `decoding="async"` successfully defers image decoding and downloading until the slider carousel container is visible or scrolled to. For the above-the-fold hero image, using `fetchpriority="high"` and `decoding="async"` significantly improves LCP (Largest Contentful Paint).
**Action:** When auditing static frontend projects, inspect CSS background-images in sliders or below-the-fold grids. Replace them with semantic, lazy-loaded HTML `<img>` tags using `object-fit: cover` to maintain exact layout dimensions while gaining modern performance benefits.
