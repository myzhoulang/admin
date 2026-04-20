## 2025-05-15 - Synchronous Logging and Mongoose Schema Optimizations
**Learning:** Synchronous logging of large objects like the Express 'req' object blocks the event loop, causing severe performance degradation. Additionally, Mongoose schema defaults like 'Date.now()' are evaluated at application startup, leading to incorrect data; they must be passed as function references.
**Action:** Always check for 'console.log(req)' or similar heavy synchronous operations in hot paths. Ensure Mongoose defaults are lazy-loaded by passing function references.
