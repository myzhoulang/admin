## 2026-05-12 - Middleware Reordering and Catch-all Route Optimization
**Learning:** In Express, placing `express.static` above logging and parsing middleware can reduce latency for static assets by avoiding unnecessary processing. Removing synchronous `console.log` from hot paths (like catch-all routes) also reduces event loop blocking.
**Action:** Always check middleware order in Express apps and ensure static assets bypass body/cookie parsing and logging unless explicitly required.
