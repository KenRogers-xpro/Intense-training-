# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2026-08-01 - Optimizing Carousel Image Loading in Pure CSS/HTML Projects
**Learning:** Standard static carousels often use CSS `background-image` for slides. This is a severe performance anti-pattern because background images load eagerly, cannot utilize native browser lazy loading (`loading="lazy"`), cannot prioritize above-the-fold media (`fetchpriority="high"`), and do not support asynchronous decoding (`decoding="async"`).
**Action:** Replace CSS background images with native `<img>` elements. Use `object-fit: cover` and parent `overflow: hidden` to ensure absolute design and layout fidelity. For the first/active slide, use `fetchpriority="high"` and `decoding="async"` while omitting `loading="lazy"`. For hidden/deferred slides, use `loading="lazy"` and `decoding="async"`.
