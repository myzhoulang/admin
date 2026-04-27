## 2025-05-14 - Mongoose Schema Default Anti-pattern
**Learning:** In this codebase, Mongoose schemas were using immediate function calls for defaults (e.g., `default: Date.now()`). This causes the default value to be fixed at the time the schema is defined (server startup) rather than when each document is created.
**Action:** Always use function references for Mongoose defaults (e.g., `default: Date.now`) to ensure dynamic value generation at document creation time.
