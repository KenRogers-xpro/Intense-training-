# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-02-21 - Deferring CSS Background Images by Refactoring to Lazy Loaded HTML Images
**Learning:** CSS `background-image` rules trigger eager image downloads as soon as the styling rule matches, preventing browser-native lazy loading for offscreen carousel slides.
**Action:** Refactor offscreen carousel background images to semantic HTML `<img>` elements with `loading="lazy"` and `decoding="async"` while adding `fetchpriority="high"` to above-the-fold hero elements.
