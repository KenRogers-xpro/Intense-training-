# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2026-08-30 - Defer CSS background images by converting off-screen carousel slides to HTML img elements
**Learning:** Browsers download CSS `background-image` resources eagerly regardless of element visibility or carousel position. Converting off-screen background slides to `<img>` tags with `loading="lazy"` and `decoding="async"` prevents unnecessary payload downloads on initial page load without breaking slide layout when paired with `object-fit: cover`.
**Action:** When optimizing carousel or slider images loaded via CSS `background-image`, convert non-hero slides to HTML `<img>` tags with `loading="lazy"` and `decoding="async"`. Keep hero/initial slide loaded eagerly with `fetchpriority="high"`.
