# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-14 - Standardizing Accessibility Patterns
**Learning:** The project uses Bootstrap 3 which includes the `.sr-only` utility class for visually hiding elements while keeping them accessible to screen readers. Many interactive elements (icon-only buttons, search inputs) lack descriptive labels or ARIA attributes.
**Action:** Always use `aria-label` for icon-only buttons and `.sr-only` labels for form inputs that don't have visible labels to maintain accessibility without altering the visual design.
