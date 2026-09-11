# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Replacing CSS background-images in carousels with HTML img tags for lazy loading
**Learning:** CSS background-images in sliders are immediately fetched by the browser CSS engine regardless of visibility, downloading offscreen assets during initial page load.
**Action:** Convert slider background images to HTML `<img>` elements styled with `object-fit: cover` and use `loading="lazy"` on offscreen slides to defer ~843KB of network payload until needed.
