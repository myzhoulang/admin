## 2024-05-25 - Improved Header Accessibility and Icon Typo

**Learning:** Icon-only buttons in the Inspinia theme (like navigation toggles and sidebar toggles) often lack ARIA labels, making them inaccessible to screen readers. Additionally, typos in font-awesome class names (e.g., `clfa` instead of `fa`) can silently break icon rendering.

**Action:** Always check icon-only interactive elements for `aria-label` and verify font-awesome class prefixes for common typos like `clfa`. Using a visually hidden `.sr-only` label for search inputs is a standard and effective pattern for this design system.
