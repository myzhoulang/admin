## 2025-05-14 - Standardizing Login Form Accessibility
**Learning:** Legacy AngularJS forms often rely on `ng-click` on buttons, which breaks "Enter to submit" functionality and lacks screen-reader-only labels. Using `ng-submit` on the `<form>` and `type="submit"` on the button restores native browser behavior while maintaining the visual design.
**Action:** Always verify that forms use `ng-submit` and include `.sr-only` labels for all inputs even if placeholders are present.
