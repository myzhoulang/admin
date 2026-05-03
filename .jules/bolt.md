## 2025-05-14 - Middleware ordering for static assets
**Learning:** Placing `express.static` before parsers like `bodyParser` and `cookieParser` avoids unnecessary overhead for static asset requests. In this app, it reduced response times for static files by ~23% (from 1.06ms to 0.81ms on average).
**Action:** Always check the order of middleware in Express apps. Prioritize static file delivery early in the stack unless those files specifically require authentication or session state from subsequent middleware.

## 2025-05-14 - Avoid committing lockfiles
**Learning:** Committing `pnpm-lock.yaml` in this repository is considered noisy and against standard procedure unless explicitly requested.
**Action:** Ensure `pnpm-lock.yaml` is deleted before submission if it was generated during the development process.
