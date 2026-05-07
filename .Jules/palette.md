## 2025-05-15 - Standardizing Login Form Accessibility
**Learning:** Legacy AngularJS forms often rely on `ng-click` on buttons instead of `ng-submit` on forms, which breaks native 'Enter to submit' behavior. Additionally, they frequently lack `<label>` elements, relying solely on placeholders.
**Action:** Always refactor forms to use `ng-submit` and `type="submit"` buttons, and add `<label class="sr-only">` for screen readers while maintaining the visual design. Initialize the scope data object (e.g., `$scope.f = {}`) to ensure reliable two-way binding.
