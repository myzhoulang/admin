## 2025-05-14 - Improve Forget Password Form Accessibility
**Learning:** Legacy AngularJS forms often lack basic accessibility (labels) and keyboard support (submit on Enter). Even if the visual design doesn't call for a label, adding one with a class like `.sr-only` is crucial for screen readers. Using `ng-submit` on the form instead of `ng-click` on a button provides a much better experience for keyboard users.
**Action:** Always check if forms can be submitted with the Enter key and ensure all inputs have associated labels, using `.sr-only` when a visual label is not present in the design.
