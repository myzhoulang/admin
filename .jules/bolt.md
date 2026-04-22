## 2025-05-14 - Optimized User Schema and Registration Flow

**Learning:** In Mongoose schemas, using `default: Date.now()` (invoking the function) sets a static value at the time the schema is loaded (app start), rather than at document creation. This is a common performance and correctness anti-pattern. Additionally, synchronous logging of large objects like the Express `req` object can block the event loop and severely degrade performance.

**Action:** Always use function references for Mongoose defaults (e.g., `default: Date.now`). Avoid synchronous logging of large objects in production paths. Defer object instantiation until after validation checks to save resources.
