## 2024-05-16 - [Schema Timestamp Logic]
**Learning:** Using `default: Date.now()` in a Mongoose schema executes the function at schema load time (boot), causing all documents to share the same initial timestamp.
**Action:** Always use function references (e.g., `default: Date.now`) for dynamic defaults in Mongoose schemas.
