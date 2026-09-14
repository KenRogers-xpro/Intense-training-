# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2026-09-14 - HTML Image Tags vs CSS Background-Images for Carousel Lazy-Loading
**Learning:** In static web projects using carousels, storing slide images as CSS `background-image` properties forces the browser to load all slide images immediately upon parsing CSS, bypassing browser preload scanners and preventing `loading="lazy"`.
**Action:** Convert carousel slide containers to HTML `<img>` elements, keeping `loading="eager"` on the visible initial slide while setting `loading="lazy"` and `decoding="async"` on offscreen slides, combined with CSS `object-fit: cover`.
