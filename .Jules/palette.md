## 2025-05-14 - [Accessible Form Pattern]
**Learning:** In legacy AngularJS/Bootstrap apps, form fields often rely solely on placeholders for identification. This is inaccessible to screen readers and disappears once the user starts typing.
**Action:** Always add a `<label>` with a `.sr-only` class for each input and ensure the form is submittable via the 'Enter' key by using `ng-submit` and `type="submit"`.
