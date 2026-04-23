## 2025-05-14 - Standardizing Form Submissions and Accessibility
**Learning:** Legacy AngularJS forms often use `ng-click` on buttons for submission, which breaks standard keyboard interaction (submitting with "Enter"). Additionally, missing `<label>` elements make forms inaccessible to screen readers.
**Action:** Always use `ng-submit` on the `<form>` element combined with `type="submit"` on the primary button, and provide `sr-only` labels for all inputs to ensure accessibility without affecting the visual design.
