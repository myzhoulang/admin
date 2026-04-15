## 2025-05-14 - Standardizing Form UX in AngularJS 1.x

**Learning:** In legacy AngularJS 1.x applications using Bootstrap, forms often rely on `ng-click` on a button with `type="button"`, which prevents native "Enter to submit" behavior. Switching to `ng-submit` on the `<form>` and `type="submit"` on the primary button restores this functionality. Additionally, many older templates use `placeholder` as a substitute for labels, which is an accessibility anti-pattern. Using `.sr-only` labels provides necessary context for screen readers while maintaining the original visual design.

**Action:** Always use `ng-submit` on `<form>` tags and ensure all inputs have associated `<label>` elements, using `.sr-only` if the label should be visually hidden to match the design.
