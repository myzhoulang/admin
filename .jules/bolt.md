## 2025-05-15 - User Registration Optimization
**Learning:** Reducing database round-trips by moving logic into the database layer (via unique indexes) and handling error codes (11000 for duplicates) is more efficient than the "check-then-save" pattern. Also, Mongoose schema defaults must use function references (e.g., `default: Date.now`) instead of immediate calls to avoid stale values in long-running processes.
**Action:** Always check for "check-then-save" anti-patterns in CRUD operations and ensure schema defaults are correctly defined as function references.
