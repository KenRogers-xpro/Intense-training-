# Bolt's Journal - Critical Learnings Only

## 2026-07-13 - [Submodule Changes Visibility and CSS Background Image Loading Performance]
**Learning:**
1. Submodule modifications (like in `My-portfolio`) are treated as external repository changes. When modified, they only show up as commit pointer updates in the main repository, hiding actual diffs/optimizations from code reviews and pull requests.
2. CSS `background-image` properties are parsed and requested eagerly by browsers on DOM construction, regardless of whether the element is below-the-fold or hidden. In contrast, native HTML `<img>` elements with `loading="lazy"` defer loading until they are close to the viewport.
**Action:**
1. Target codebases and folders that are part of the direct parent repository rather than submodules to ensure full transparency and visibility of optimization code.
2. Convert below-the-fold decorative background images into native HTML `<img>` tags with `loading="lazy"` and `decoding="async"` to eliminate heavy redundant initial requests (saving megabytes of initial page load budget).
