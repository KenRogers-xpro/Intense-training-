# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Deferring CSS Background Images with HTML img Lazy Loading
**Learning:** CSS `background-image` declarations on hidden/offscreen carousel elements are discovered during CSS parsing and fetch immediately regardless of viewport position. Converting them to inline HTML `<img>` elements allows applying `loading="lazy"` and `decoding="async"`, deferring offscreen asset downloads until needed.
**Action:** When optimizing static landing page carousels or image galleries, convert background images to HTML `<img>` tags with `object-fit: cover` and lazy loading.
