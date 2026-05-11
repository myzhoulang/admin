## 2025-05-14 - Header Accessibility and Icon Consistency
**Learning:** Legacy admin themes often use icon-only buttons without ARIA labels, making them inaccessible to screen readers. Typographic errors in class names (e.g., `clfa` instead of `class="fa..."`) can break icons and accessibility tools. Duplicating icons for different actions (e.g., messages and notifications both using `fa-envelope`) confuses all users.
**Action:** Always verify ARIA labels for icon-only interactive elements and ensure icons have unique, descriptive meanings. Mark decorative icons with `aria-hidden="true"`.
