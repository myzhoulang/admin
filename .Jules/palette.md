## 2025-05-22 - [Keyboard Accessibility & Form Usability]
**Learning:** Many older themes (like this Inspinia-based one) explicitly disable `outline: none` on focus, which completely breaks keyboard navigation. Additionally, icon-only buttons and forms without labels or Enter-key support are common accessibility gaps.
**Action:** Always check for `outline: none` in global stylesheets and ensure forms use semantic `submit` behavior with accessible labels (even if `sr-only`).
