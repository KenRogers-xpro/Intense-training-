# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-08-07 - Optimizing Static Web Images via Native Browser Attributes
**Learning:** In purely static frontend projects lacking custom build pipelines (like Webpack, Vite, or Next.js), converting CSS `background-image` properties to standard HTML `<img>` elements provides a significant performance boost. It allows developers to utilize browser native optimization attributes like `loading="lazy"` and `decoding="async"` for elements below-the-fold or hidden (such as non-active slides in a slider), which saves initial load bandwidth and improves time-to-interactive. Additionally, setting `fetchpriority="high"` on critical above-the-fold `<img>` elements optimizes Largest Contentful Paint (LCP) directly.
**Action:** Always search for CSS background-image declarations in static web landing pages, and convert below-the-fold assets to HTML `<img>` tags with lazy loading/async decoding while marking above-the-fold heroes with high fetch priority. Ensure layout consistency by setting `object-fit: cover` and proper `overflow` styles on parent containers.
