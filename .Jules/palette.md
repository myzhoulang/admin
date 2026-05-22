## 2025-05-15 - Login Page UX and Accessibility
**Learning:** Legacy AngularJS forms often lack standard keyboard navigation (Enter to submit) and screen reader accessibility (missing labels).
**Action:** Always use `<form ng-submit="...">` and `type="submit"` for buttons, and provide `.sr-only` labels for inputs even when placeholders are present.
