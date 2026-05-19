## 2026-05-19 - Express Middleware Order and Route Optimization
**Learning:** Reordering `express.static` above `bodyParser`, `cookieParser`, and `logger` significantly reduces latency for static assets (up to 60%) by bypassing unnecessary processing. Additionally, using `path.extname(req.path)` is more robust and performant than `path.parse(req.url)` for extension detection, as `req.path` excludes query parameters.
**Action:** Always place static asset middleware as early as possible in the middleware stack, and use `req.path` for routing logic that involves file extensions.
