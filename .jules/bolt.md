## 2026-04-25 - [Indexing User Email]
**Learning:** Adding a unique index to frequently queried fields like 'email' in Mongoose schemas ensures O(log N) lookup performance during operations like registration, preventing performance degradation as the user base grows.
**Action:** Always check for missing indexes on fields used in '.findOne()' or '.find()' calls, especially in authentication and registration flows.
