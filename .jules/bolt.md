# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2026-10-29 - Deferring Off-screen Slider Images via CSS to HTML Conversion
**Learning:** CSS `background: url(...)` properties force browsers to download image assets immediately during CSS parsing regardless of whether the target container is off-screen or part of a hidden carousel slide. Converting background images to inline HTML `<img>` elements with `loading="lazy"` and `decoding="async"` unlocks browser-native deferred image fetching, while setting `fetchpriority="high"` on above-the-fold hero images optimizes Largest Contentful Paint (LCP).
**Action:** When optimizing static landing pages or carousels, convert CSS background images to `<img>` tags styled with `object-fit: cover` and apply native `loading="lazy"` and priority hints.
