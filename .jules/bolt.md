# Bolt's Journal

This journal contains critical learnings, performance bottlenecks specific to this codebase's architecture, and optimizations that surprisingly didn't work.

## 2025-05-18 - Pruning Google Fonts Range Parameters in Static HTML Templates
**Learning:** Static HTML templates in this repository imported entire Google Font weight ranges (`ital,wght@0,100..1,900`), generating an oversized CSS response with 18 `@font-face` definitions and triggering excess font preloads.
**Action:** When auditing static project templates, check Google Fonts URLs for unnecessary ranges and prune parameters to only the font weights actually declared in CSS (e.g., `400;700`).
