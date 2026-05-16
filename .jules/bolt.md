## 2026-05-16 - Template Engine Caching vs. sendFile
**Learning:** In this Express/EJS environment, `res.render('index')` consistently outperformed `res.sendFile(path.join(__dirname, 'views', 'index.html'))` for the main SPA entry point (~1.4ms vs ~1.8ms). This is likely due to internal EJS view caching or Express's handling of rendered vs raw file streams.
**Action:** Always benchmark both `res.render` and `res.sendFile` when optimizing SPA entry points, as the template engine's overhead may be offset by its caching mechanisms.

## 2026-05-16 - Middleware Bypass for Static Assets
**Learning:** Reordering `express.static` above `logger` (morgan), `bodyParser`, and `cookieParser` reduced static asset response times by ~27% (1.70ms to 1.24ms). Static assets do not need body parsing or cookie handling, and bypassing the logger reduces synchronous I/O overhead.
**Action:** Prioritize static middleware early in the stack to "short-circuit" unnecessary processing for assets.
