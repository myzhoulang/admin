## 2025-05-14 - Standardized UX Pattern for Forms
**Learning:** The application uses a consistent pattern for form accessibility and data binding: visually hidden labels via the `.sr-only` class, keyboard accessibility via `ng-submit`, and the AngularJS "dot rule" using `$scope.f` as the model object.
**Action:** Always initialize `$scope.f = {}` in controllers and use it for all form inputs. Ensure all icon-only or placeholder-only inputs have an associated `label.sr-only`.
