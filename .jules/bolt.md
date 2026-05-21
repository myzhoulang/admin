## 2025-05-15 - Optimizing Middleware Order and Catch-all Route

**Learning:** Reordering `express.static` above logging and parsing middleware (`morgan`, `body-parser`, `cookie-parser`) allows static assets to be served much faster by bypassing unnecessary processing. Additionally, refactoring the catch-all SPA route to use `path.extname(req.path)` instead of `path.parse(req.url)` is more efficient and avoids issues with query parameters.

**Action:** Always place `express.static` as early as possible in the middleware stack for SPAs. Ensure the catch-all route correctly handles file extensions for static assets that might have been missed by the static middleware, and always include the `next` parameter when planning to fall through to subsequent handlers.
