# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Replacing CSS Background-Images with HTML Img Elements for Carousel Performance
**Learning:** CSS `background-image` properties cannot be natively lazy-loaded by the browser's preload scanner or HTML attributes like `loading="lazy"`. Replacing them with `<img>` tags inside container elements allows off-screen slides to be loaded lazily (`loading="lazy"`, `decoding="async"`) while allowing LCP hero and initial slide images to be prioritized (`fetchpriority="high"`).
**Action:** When optimizing multi-slide carousels or image containers using `background-image`, convert off-screen images to `<img>` elements with `loading="lazy"` and `decoding="async"`, and add `fetchpriority="high"` to above-the-fold/initial images.
