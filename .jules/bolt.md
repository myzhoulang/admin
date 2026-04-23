## 2025-05-14 - Email lookup optimization
**Learning:** The User schema lacked a unique index on the email field, causing O(N) collection scans during registration and login. In MongoDB, this significantly degrades performance as the user base grows.
**Action:** Always verify that fields used for unique lookups have appropriate indexes in the Mongoose schema.
