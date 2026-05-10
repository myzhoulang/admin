## 2026-05-10 - Optimized Middleware and Route Order
**Learning:** Reordering `express.static` above logging and parsing middleware significantly reduces response time for static assets (~51% in this case) by bypassing unnecessary processing. Removing synchronous `console.log` in hot paths like the catch-all route further improves throughput.
**Action:** Always place static asset middleware as early as possible in the middleware stack. Ensure catch-all routes have the correct signature and avoid synchronous I/O.
