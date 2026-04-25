## 2025-05-14 - Standardizing Form Accessibility and Keyboard Support
**Learning:** Legacy AngularJS forms often lack proper labels and keyboard submission support. Users expect "Enter to submit" functionality and screen readers require labels associated via 'for' and 'id'. Matching visually hidden label text with visible placeholder text ensures cognitive consistency.
**Action:** When modernizing legacy forms, wrap inputs in a form with 'ng-submit', add 'type="submit"' to the primary button, and include '.sr-only' labels that match placeholder text for better accessibility.
