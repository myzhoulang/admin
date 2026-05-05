## 2025-05-15 - Middleware reordering and Schema optimization
**Learning:** Reordering express.static above heavy middleware like morgan, body-parser, and cookie-parser significantly reduces response times for static assets by bypassing unnecessary processing. Standardizing Mongoose default values to function references ensures correct data generation.
**Action:** Always check middleware order in Express apps to ensure static assets and critical routes are handled as early as possible.
