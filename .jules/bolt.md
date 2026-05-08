## 2025-05-14 - Initializing Bolt's Journal
**Learning:** Middleware order in Express significantly impacts static asset performance. Placing `express.static` before `bodyParser` and `cookieParser` avoids unnecessary processing for every image, CSS, and JS file.
**Action:** Always audit middleware stacks for static-heavy applications.
