# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Deferring CSS Background Images with Native HTML Image Loading
**Learning:** Browsers cannot natively lazy-load images declared inside CSS `background-image` rules, forcing all background images to download eagerly during stylesheet parsing.
**Action:** Convert off-screen carousel or section background images to HTML `<img>` elements with `loading="lazy"` and `decoding="async"`, using CSS `object-fit: cover` to preserve identical visual styling while deferring network fetch until scrolled into view.
