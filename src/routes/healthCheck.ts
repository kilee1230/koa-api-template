import Router from "@koa/router";

import { HealthCheckController } from "../controllers";

const router = new Router({
  prefix: "/health"
});

router.get("/", (ctx) => {
  return HealthCheckController.getStatus(ctx);
});

export default router;
