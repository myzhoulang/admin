## 2025-05-14 - Mongoose Schema Optimizations
**Learning:** Adding `unique: true` to frequently queried fields (like email) ensures O(log N) lookup performance. Using function references for defaults (e.g., `default: Date.now`) instead of immediate calls (`default: Date.now()`) ensures values are generated at document creation time.
**Action:** Always check Mongoose schemas for missing indexes on lookup fields and ensure default values use function references.
