## 2026-04-30 - Added unique index to User email field
**Learning:** Adding a unique index to a frequently queried field (like email during registration) transitions the lookup complexity from O(N) to O(log N), which is critical for scalability.
**Action:** Always check for missing indexes on fields used in 'findOne' or 'find' queries in Mongoose schemas.
