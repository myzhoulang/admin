# Palette's Journal - Critical UX/Accessibility Learnings

## 2026-05-09 - Standardizing Form UX and Accessibility
**Learning:** Found several forms (Login, Register, Forget Password) in this legacy AngularJS application that lacked basic accessibility features like ARIA labels or semantic HTML. Additionally, error messages were often copied incorrectly between fields.
**Action:** Establish a pattern of adding `sr-only` labels to all inputs, using `ng-submit` for keyboard accessibility, and ensuring error messages are contextually accurate. Explicitly initialize `$scope.f` in controllers to support the "dot rule" in AngularJS templates.
