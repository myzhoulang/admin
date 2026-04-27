## 2024-05-15 - Initial UX Improvements
**Learning:** Found that legacy forms in this application often lack basic accessibility features like ARIA labels and keyboard-friendly submission (missing `ng-submit` and `type="submit"`).
**Action:** Always ensure forms have associated labels (visually hidden if necessary), use `ng-submit` for native keyboard interaction, and associate inputs with labels using `id`/`for` attributes.
