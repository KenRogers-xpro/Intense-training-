# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-10 - Defer CSS Background Images via HTML img tags
**Learning:** CSS `background-image` declarations in stylesheets are eagerly downloaded by the browser parser as soon as the element is in the DOM tree, regardless of visibility, breaking native lazy loading for carousel/slider slides.
**Action:** Convert off-screen carousel CSS background images to HTML `<img>` tags with `loading="lazy"` and `decoding="async"`, and use CSS `object-fit: cover` to preserve identical visual layout while deferring download of off-screen slides.
