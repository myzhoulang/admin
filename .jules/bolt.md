## 2026-05-13 - Middleware and SPA Route Optimization
**Learning:** In an Express-based SPA, placing `express.static` before logging and body parsing middleware significantly reduces overhead for static assets. Additionally, using `res.sendFile()` instead of `res.render()` for the main SPA entry point (when it contains no dynamic template variables) bypasses the template engine entirely, saving significant CPU cycles.
**Action:** Always audit middleware order to ensure static assets skip unnecessary processing, and prefer `res.sendFile()` for static HTML shells.
