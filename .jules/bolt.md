# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2026-08-25 - Converting CSS background images to HTML img tags for lazy loading
**Learning:** CSS `background-image` properties force the browser to request image assets as soon as the styling rule is parsed, even if the element is off-screen or inside a overflow-hidden slider. Replacing them with native HTML `<img>` elements allows applying `loading="lazy"` and `decoding="async"`, deferring image network requests until the user approaches the carousel slide.
**Action:** Always prefer HTML `<img>` elements with `loading="lazy"` over CSS `background-image` for off-screen carousel slides and below-the-fold content.
