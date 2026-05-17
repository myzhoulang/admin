## 2026-04-11 - Optimized User Registration Flow

**Learning:** Delaying Mongoose document instantiation until after existence checks can save CPU and memory, especially for high-traffic endpoints. Additionally, ensure indexes are defined for fields used in `findOne` or `find` to prevent collection scans.

**Action:** Always check for existing records before creating a new model instance in Express routes. Verify that fields used for lookups are indexed in the Mongoose schema.
