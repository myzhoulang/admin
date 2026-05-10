## 2025-05-14 - Mongoose and Express Performance Patterns
**Learning:** Found several common performance anti-patterns:
1. Mongoose schema defaults using immediate function calls (`default: Date.now()`) instead of references (`default: Date.now`), causing static timestamps.
2. Synchronous `console.log(req)` in high-traffic routes (like uploads) blocks the event loop due to the request object's size and complexity.
3. Premature instantiation of Mongoose models before validation/existence checks increases memory pressure unnecessarily.
**Action:** Use function references for Mongoose defaults, remove expensive logging of large objects, and defer model instantiation until after initial checks.
