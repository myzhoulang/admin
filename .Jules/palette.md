## 2025-05-14 - Standardizing Form Accessibility
**Learning:** Legacy AngularJS forms often lack semantic associations (labels) and native keyboard support (ng-submit), which disproportionately affects screen reader users and power users.
**Action:** Always ensure `<form>` uses `ng-submit`, buttons use `type="submit"`, and every input has an associated `<label>` (visually hidden via `.sr-only` if necessary).
