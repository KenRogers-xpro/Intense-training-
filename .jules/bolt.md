## 2025-07-16 - Deferred Image Loading in Image Sliders
**Learning:** CSS background-images eagerly download resources on DOM construction regardless of scroll depth. Converting background-images to HTML `<img>` tags with `loading="lazy"` and `decoding="async"` successfully defers image loading below the fold.
**Action:** Use nested `<img>` tags styled with `object-fit: cover` and standard lazy-loading attributes instead of CSS `background: url(...)` properties for hidden or below-the-fold content.
