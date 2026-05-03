## 2026-05-03 - Accessible and Usable Login Form
**Learning:** In AngularJS 1.x, using `ng-submit` on the `<form>` and `type="submit"` on the primary button enables native "Enter to submit" behavior, improving keyboard accessibility. Additionally, providing visually hidden `<label>` elements via `.sr-only` ensures screen readers can identify fields without altering the visual design.
**Action:** Always wrap form inputs in a `<form ng-submit="...">` and ensure every input has an associated `<label>`, using `.sr-only` if necessary for the visual design.
