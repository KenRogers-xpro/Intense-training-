# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Pruning Google Fonts and Prioritizing Hero LCP Images
**Learning:** Requesting full weight/style ranges (100–900 italic/upright) in Google Fonts CSS URLs loads excessive font stylesheets and WOFF2 files when only standard weights are used. Specifying exact weights (`400;600;700`) and assigning `fetchpriority="high"` and `decoding="async"` to LCP images optimizes render blocking and image fetch sequence.
**Action:** Always check imported Google Fonts parameters in static HTML files to ensure only required weights are fetched, and mark hero images with `fetchpriority="high"`.
