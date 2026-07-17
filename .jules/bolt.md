# Bolt's Performance Journal

## 2025-02-18 - Deferring Below-The-Fold Images and Optimizing Carousel LCP
**Learning:** CSS background-images do not support native browser lazy loading (`loading="lazy"`) and delay discovery by the HTML parser because the browser must parse the CSS first. Converting below-the-fold carousel background images to HTML `<img>` elements allows us to lazy-load them natively. However, the first/active slide of a carousel is considered part of the above-the-fold component or initial carousel paint and must be eagerly loaded (`fetchpriority="high"`) to protect Largest Contentful Paint (LCP).
**Action:** Always convert background-images on carousels/lists to HTML `<img>` tags. Use `loading="lazy"` on hidden/secondary items, but omit `loading="lazy"` and use `fetchpriority="high"` on the first/visible item. Use `object-fit: cover;` to preserve styling.
