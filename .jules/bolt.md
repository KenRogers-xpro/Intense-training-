# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-20 - Converting CSS background-images to HTML img elements for lazy loading
**Learning:** CSS `background-image` declarations are evaluated during DOM/CSSOM render tree construction and force immediate image downloads, even for off-screen carousel slides. Replacing background-image properties with inline `<img>` elements allows native browser `loading="lazy"` on hidden slides, deferring off-screen image payloads (~843KB in Project5) during initial page load.
**Action:** Replace background images in carousel/slider components with `<img>` tags, setting `loading="lazy"` on hidden slides and `fetchpriority="high"` on above-the-fold/LCP images.
