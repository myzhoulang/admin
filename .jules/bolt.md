## 2026-04-24 - User Schema Email Indexing
**Learning:** In applications with frequent user lookups by email (like registration or login), a missing database index leads to expensive O(N) collection scans. Adding a unique index ensures O(log N) performance and data integrity at the database level.
**Action:** Add `unique: true` to the `email` field in the User schema.
