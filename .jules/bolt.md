## 2025-05-14 - Optimized User Registration
**Learning:** Deferring Mongoose document instantiation until after existence checks saves memory and CPU cycles. Adding a unique index to the 'email' field ensures O(log N) lookup performance during registration.
**Action:** Always check for existing records before instantiating new documents in database-driven routes. Ensure unique constraints are reflected in the schema to leverage database indexes.
