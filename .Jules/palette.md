## 2025-05-14 - [Enhanced Registration Accessibility and Validation]
**Learning:** Legacy AngularJS forms often lack basic accessibility features like associated labels and consistent error handling logic. Using visually hidden labels (.sr-only) is a non-disruptive way to improve screen reader support while maintaining existing design. Initializing the scope data object ($scope.f = {}) is crucial for reliable ng-model binding across nested scopes.
**Action:** Always check for .sr-only labels in form templates and ensure explicit data object initialization in controllers.
