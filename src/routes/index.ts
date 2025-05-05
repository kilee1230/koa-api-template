import Router from "@koa/router";

import healthCheckRoutes from "./healthCheck";

const router = new Router();

// Combine all route modules
router.use(healthCheckRoutes.routes(), healthCheckRoutes.allowedMethods());

// Export the combined router
export { router };
