import { Middleware } from "@koa/router";

export const healthCheckHandler: Middleware = (ctx) => {
  ctx.status = 200;
};
