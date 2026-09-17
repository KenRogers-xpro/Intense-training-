# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Deferring offscreen carousel background images with native HTML img elements
**Learning:** CSS background-images in stylesheet declarations are parsed and fetched immediately on initial page load by modern browsers, even if they belong to off-screen carousel slides. Replacing CSS `background: url(...)` with HTML `<img>` elements allows using `loading="lazy"` and `decoding="async"`, saving ~863 KB of unneeded initial network transfers.
**Action:** Convert offscreen carousel background images to native `<img>` elements with `loading="lazy"` while keeping the initial visible slide eagerly loaded with `fetchpriority="high"`.
