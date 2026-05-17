## 2026-05-17 - Standardizing Form Accessibility and Submission
**Learning:** Legacy AngularJS forms often lack basic accessibility (labels) and standard UX features like keyboard submission (Enter key support). Using `ng-submit` on the form element and `type="submit"` on the button, combined with `sr-only` labels, provides a much better experience without altering the visual design.
**Action:** Always wrap form inputs in a `<form ng-submit="...">`, use `type="submit"` for buttons, and ensure every input has a corresponding `<label class="sr-only">`.
