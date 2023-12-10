import { Context } from "koa";

export const errorMiddleware = async (
  ctx: Context,
  next: () => Promise<any>
) => {
  try {
    await next();
  } catch (error: any) {
    ctx.log.error(error);
    ctx.status = error.status || 500;
    ctx.body = {
      error: {
        message: error.message || "Internal Server Error"
      }
    };
  }
};
