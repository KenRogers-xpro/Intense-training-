# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-03-02 - Deferring CSS Background Images in Carousel Sliders

**Learning:** CSS `background-image` declarations force browsers to fetch assets immediately during CSS style resolution, even when elements are hidden off-screen (e.g. inside `overflow: hidden` carousel containers).
**Action:** Convert off-screen CSS background images to HTML `<img>` elements with `loading="lazy"` and `decoding="async"`, while keeping initial above-the-fold/first slide images eager with `fetchpriority="high"`.
