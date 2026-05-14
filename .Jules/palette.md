## 2026-05-14 - Standardizing Form UX for Accessibility and Keyboard Support
**Learning:** Legacy forms often lack semantic labels and rely on ng-click for submission, which breaks keyboard accessibility (Enter key) and screen reader support. Initializing models with the 'dot rule' (.f = {}) ensures reliable data binding in nested scopes.
**Action:** Always wrap inputs in a <form> with ng-submit, use type='submit' for the primary action button, and provide .sr-only labels for all fields to maintain visual design while ensuring accessibility.
