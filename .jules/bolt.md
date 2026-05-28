## 2026-05-28 - Middleware and SPA Catch-all Optimization
**Learning:** In this Express 4.13.x app, static assets were being processed by logging and body-parsing middleware, and the SPA catch-all route was performing synchronous logging and inefficient extension parsing.
**Action:** Move `express.static` to the top of the middleware stack and optimize the SPA catch-all with `path.extname(req.path)` and a comprehensive exclusion list to significantly reduce response times.
