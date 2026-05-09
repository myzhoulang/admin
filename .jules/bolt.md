## 2026-05-09 - Middleware Ordering for Static Assets
**Learning:** Reordering `express.static` above logging and parsing middleware can significantly reduce the overhead for static asset requests by bypassing unnecessary processing (e.g., body parsing, cookie parsing, and request logging).
**Action:** Always check if static middleware can be moved earlier in the stack to improve response times for assets.

## 2026-05-09 - Mongoose Schema Defaults
**Learning:** Using immediate calls like `default: Date.now()` in Mongoose schemas evaluates the function at schema definition time, leading to all documents sharing the same initial timestamp. Using a function reference `default: Date.now` ensures evaluation at document creation.
**Action:** Use function references for dynamic default values in Mongoose schemas.
