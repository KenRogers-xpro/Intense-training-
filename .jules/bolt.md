# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Carousel CSS background-images and Google Font bloat in static landing pages
**Learning:** CSS `background-image` properties prevent browsers from prioritizing image loading with `fetchpriority="high"` or deferring off-screen slides with native `loading="lazy"`/`decoding="async"`. In addition, loading unused Google Font weights increases network overhead on static landing pages.
**Action:** Replace CSS background-images in carousels with native `<img>` tags using `object-fit: cover` and appropriate `fetchpriority`/`loading` attributes, and prune Google Fonts imports to only used weights (`400`, `600`, `700`).
