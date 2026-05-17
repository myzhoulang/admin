## 2026-05-17 - Middleware Ordering and Path Resolution
**Learning:** Reordering `express.static` above `bodyParser`, `cookieParser`, and `morgan` reduced static asset response time by ~53% (3.01ms -> 1.42ms). Additionally, using `req.path` instead of `req.url` with `path.parse()` is essential for robust extension detection as it ignores query parameters.
**Action:** Always place static middleware as high as possible in the stack and use `req.path` for file-type based routing logic.
