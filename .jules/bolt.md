## 2025-05-14 - Middleware Reordering and Route Optimization
**Learning:** Reordering 'express.static' above 'morgan' logger and 'body-parser' significantly reduces overhead for static asset requests. Also, placing specific API routes before catch-all '*' routes prevents routing conflicts and improves response times for these endpoints.
**Action:** Always place static middleware and specific routes at the top of the middleware stack to minimize unnecessary processing.
