## 2026-04-22 - [Login Form Accessibility and UX]
**Learning:** Legacy AngularJS forms in this app often miss proper `<label>` elements and rely on `ng-click` on buttons instead of `ng-submit` on forms, which breaks native keyboard behavior (Enter to submit) and screen reader accessibility.
**Action:** Always wrap form inputs in a `<form>` with `ng-submit`, use `type="submit"` for the primary button, and provide visually hidden `.sr-only` labels for inputs that only have placeholders.
