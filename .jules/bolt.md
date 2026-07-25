## 2025-10-24 - Optimizing Carousel and Hero Image Loading in Static Web Pages

**Learning:** CSS background-images are always loaded eagerly by the browser, even if they are below the fold (e.g. inside a carousel / slider structure) and hidden from the user's viewport. By refactoring these CSS background-images into inline HTML `<img>` elements, we can utilize native browser optimizations including `loading="lazy"` and `decoding="async"` to defer their load and boost initial page load performance. For the hero image above the fold, utilizing `fetchpriority="high"` prevents delay in LCP.

**Action:** Convert unoptimized CSS background-images below the fold to semantic HTML `<img>` tags with `loading="lazy"` and `decoding="async"`. For critical above-the-fold assets, avoid `loading="lazy"` and prioritize them using `fetchpriority="high"`.
