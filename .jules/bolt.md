## 2025-05-14 - [Backend Performance Anti-patterns]
**Learning:** Found several common but impactful performance anti-patterns in the Node.js/Mongoose backend:
1. Synchronous logging of large objects like the Express `req` object blocks the event loop.
2. Immediate execution of `Date.now()` in Mongoose defaults leads to stale timestamps and unnecessary execution at boot time.
3. Early instantiation of Mongoose documents before validation/existence checks wastes memory and CPU cycles.
**Action:** Always check for `console.log(req)` in routes, ensure Mongoose defaults use function references, and defer document creation until after initial guards.
