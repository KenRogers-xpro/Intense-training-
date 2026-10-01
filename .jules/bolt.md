# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Deferring Below-The-Fold Carousel Images
**Learning:** CSS `background-image` properties force browsers to download all declared image assets upon parsing stylesheet rules, regardless of element visibility. Refactoring carousel slides to HTML `<img>` elements allows native browser `loading="lazy"` and `decoding="async"` to defer loading of offscreen slides until navigated to.
**Action:** Always prefer HTML `<img>` elements with `loading="lazy"` over CSS `background-image` for carousel slides and below-the-fold content.
