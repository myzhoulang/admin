## 2025-05-15 - Mongoose Schema Default Value Anti-pattern

**Learning:** Using immediate function calls like `Date.now()` in Mongoose `default` fields causes the default value to be fixed at the time the schema is loaded (typically at server start), rather than when the document is created. This leads to incorrect timestamps and potential logic errors.

**Action:** Always use function references (e.g., `default: Date.now`) instead of immediate calls (e.g., `default: Date.now()`) for dynamic default values in Mongoose schemas.
