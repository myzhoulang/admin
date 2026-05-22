## 2026-05-22 - Static Asset Performance Optimization
**Learning:** Reordering 'express.static' above logging and parsing middleware significantly reduces the response time for static assets by bypassing unnecessary processing. Additionally, refactoring catch-all routes to efficiently identify and exclude static assets prevents redundant rendering logic.
**Action:** Always place 'express.static' as high as possible in the middleware stack to optimize delivery of public assets. Use 'path.extname' for efficient extension checking in catch-all routes.
