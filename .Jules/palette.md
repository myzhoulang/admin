## 2025-05-14 - Standardizing Legacy Form Accessibility
**Learning:** Legacy AngularJS forms in this repository often use button clicks instead of native form submission and lack semantic labels, hindering both keyboard usability and screen reader support.
**Action:** When encountering AngularJS templates, wrap inputs in a `<form>` with `ng-submit`, ensure all inputs have associated `<label class="sr-only">`, and use `type="submit"` on the primary action button.
