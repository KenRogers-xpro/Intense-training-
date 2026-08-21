# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Deferring Off-screen Slider Images via HTML <img> Tags
**Learning:** CSS `background-image` rules in carousels/sliders force the browser to immediately request off-screen images on initial parse, bypassing deferred loading. Converting background images to `<img>` tags with `loading="lazy"` and `decoding="async"` while using `object-fit: cover` preserves layout styling while deferring off-screen asset payload.
**Action:** In static landing pages with image carousels, migrate CSS background images to `<img>` tags with lazy loading for off-screen slides and `fetchpriority="high"` for hero LCP images.
