import { Context } from "koa";

export const errorMiddleware = async (
  ctx: Context,
  next: () => Promise<any>
) => {
  try {
    await next();
  } catch (error: any) {
    const { status = 500, message = "Internal Server Error" } = error;

    ctx.status = status;
    ctx.log[ctx.status === 404 ? "info" : "error"](error);

    ctx.body = {
      error: { message }
    };
  }
};
