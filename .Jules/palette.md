## 2026-05-24 - Standardized Form UX Pattern
**Learning:** For this Inspinia-based AngularJS application, a consistent UX pattern for forms should include:
- Visually hidden labels using `.sr-only` for screen reader accessibility without affecting the visual design.
- Using `ng-submit` on the `<form>` element and `type="submit"` on the primary button to ensure the form can be submitted via the Enter key.
- Adhering to the AngularJS "dot rule" by using `$scope.f` as the model object (e.g., `ng-model="f.email"`) to prevent scope inheritance issues.
- Aligning placeholders with visually hidden labels for cognitive consistency.

**Action:** Apply this pattern to all form refactors (Login, Registration, Password Reset, etc.) across the application.
