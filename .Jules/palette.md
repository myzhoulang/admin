## 2025-05-15 - Standardizing Form Accessibility and Usability
**Learning:** In legacy Bootstrap 3 + AngularJS applications, accessibility is often neglected in forms. Using `.sr-only` labels provides critical context for screen readers without altering the visual design. Furthermore, relying on `ng-click` for form submission breaks the natural "Enter to submit" keyboard UX; using `ng-submit` on the form element restores this expected behavior.
**Action:** Always include `.sr-only` labels and ensure `ng-submit` is used for form actions to maintain accessibility and keyboard support.
>>>>>>> REPLACE
