## 2026-04-19 - Backend performance optimizations
**Learning:** Synchronous logging of large objects like the Express request object (req) blocks the event loop and significantly degrades performance. Deferring Mongoose document instantiation until after existence checks avoids unnecessary memory allocation for existing users. Missing database indexes on frequently queried fields leads to O(N) collection scans.
**Action:** Always remove or replace synchronous logging in hot paths. Instantiate database models only when needed. Ensure critical query fields have appropriate indexes.
