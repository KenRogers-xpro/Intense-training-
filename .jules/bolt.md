# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Pruning Google Font weight ranges in static landing pages
**Learning:** Google Fonts requests that specify full ranges like `ital,wght@0,100;...;1,900` generate CSS files containing 18 `@font-face` blocks, causing unnecessary CSS payload parsing and triggering excess font asset downloads.
**Action:** Always audit Google Font URL parameters in HTML headers and limit requested weights/styles to only those actively referenced in CSS rules (`wght@400;700`).
