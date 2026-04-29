## 2025-05-14 - Standardizing Legacy Form Accessibility
**Learning:** Legacy AngularJS templates in this repo often lack semantic labels and rely on `ng-click` for submission, which prevents "Enter to submit" and hinders screen readers. Using `.sr-only` allows adding accessibility without altering the visual design of the Inspinia theme.
**Action:** When encountering forms, wrap inputs in a `<form>` with `ng-submit`, use `type="submit"` for buttons, and ensure every input has a corresponding `<label class="sr-only">`.
