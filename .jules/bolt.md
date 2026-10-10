# Bolt's Journal

## 2025-05-18 - Defer CSS Background Images by Converting to Lazy <img>
**Learning:** CSS `background-image` declarations are fetched eagerly by browsers as soon as the DOM node/CSS rule is processed, regardless of whether the element is off-screen (e.g. inactive slides in a custom JS slider).
**Action:** Convert off-screen carousel backgrounds into standard HTML `<img>` elements with `loading="lazy"` and `decoding="async"` (keeping above-the-fold image eager with `fetchpriority="high"`). This defers loading non-critical off-screen images until scrolled or rendered.
