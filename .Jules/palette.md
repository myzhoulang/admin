## 2026-05-27 - Accessible Header and Icon Fixes
**Learning:** Found a recurring pattern in the Inspinia theme where interactive icon-only elements (toggles, dropdowns) lack `aria-label` attributes, and search inputs lack associated labels. Additionally, discovered a `clfa` class typo that prevents FontAwesome icons from rendering.
**Action:** Always check icon-only interactive elements for missing `aria-label` and verify icon class prefixes (e.g., `fa` vs `clfa`) when working with legacy templates in this repository.
