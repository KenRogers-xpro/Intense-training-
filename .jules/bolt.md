# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Replacing CSS background-images with lazy-loaded <img> tags
**Learning:** CSS `background-image` properties block image loading until CSS parsing and matching finish, and cannot leverage native browser `loading="lazy"` or `fetchpriority="high"`.
**Action:** Convert slider/carousel background images to HTML `<img>` elements with `object-fit: cover`. Mark the above-the-fold slide with `fetchpriority="high"` and offscreen slides with `loading="lazy"` + `decoding="async"` to defer unnecessary initial network requests and improve Largest Contentful Paint (LCP).
