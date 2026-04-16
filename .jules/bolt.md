## 2026-04-16 - Optimize User Schema and Registration Lookups
**Learning:** Adding unique indexes to frequently queried fields (like email in a user schema) is a high-impact optimization for both performance (O(log N) lookup) and data integrity. Additionally, deferring expensive object instantiation until after basic validation checks (like existence checks) can save significant memory and CPU cycles in high-traffic endpoints.
**Action:** Always check schemas for missing indexes on lookup fields and ensure that object instantiation is deferred until necessary.
