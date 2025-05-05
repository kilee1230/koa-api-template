import { Context } from "koa";

export const HealthCheckController = {
  getStatus: (ctx: Context): void => {
    ctx.status = 200;
    ctx.body = { status: "ok" };
  }
};
