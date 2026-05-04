## 2025-05-15 - Middleware Ordering for Static Assets
**Learning:** Reordering `express.static` to be above `logger`, `bodyParser`, and `cookieParser` in an Express application significantly reduces response time for static assets by bypassing unnecessary processing. In this application, it reduced average response time from ~1.42ms/req to ~1.30ms/req.
**Action:** Always place `express.static` at the top of the middleware stack unless specifically needing middleware processing (like auth or logging) for static files.

## 2025-05-15 - Mongoose Schema Default Anti-pattern
**Learning:** Using `default: Date.now()` in a Mongoose schema executes the function at application startup, causing all documents to share the same initial timestamp. Using `default: Date.now` (the function reference) ensures a fresh timestamp for each document.
**Action:** Pass function references to Mongoose `default` properties instead of calling them immediately.
