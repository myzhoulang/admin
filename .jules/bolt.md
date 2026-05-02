## 2026-05-02 - Optimized Registration and Middleware Order
**Learning:** Found that core user registration was doing an unnecessary 'findOne' check before 'save', which can be consolidated using MongoDB's unique index and error code 11000. Also noticed 'express.static' was placed after 'bodyParser', adding overhead to every static asset request.
**Action:** Always check for redundant database round-trips that can be handled by schema constraints, and ensure static middleware is prioritized in Express to skip unnecessary parsing.
