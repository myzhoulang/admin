## 2025-05-15 - Optimizing registration and uploads
**Learning:** Synchronous logging of large objects like the Express `req` object is a major bottleneck in Node.js as it blocks the event loop. Also, premature instantiation of Mongoose models before basic validation (like uniqueness checks) wastes memory and CPU cycles.
**Action:** Always avoid logging large, circular objects in performance-critical paths and defer object instantiation until after initial guards.
