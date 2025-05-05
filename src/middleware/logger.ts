import logger from "koa-pino-logger";

const redactPaths = [
  "req.headers.cookie",
  "req.headers.authorization",
  "req.headers.referer",
  "req.headers.from",
  "req.headers.masq",
  "req.body.password"
];

const logMiddleware = logger({
  name: "koa-api-template",
  level: "info",
  autoLogging: false,
  redact: {
    paths: redactPaths,
    censor: "**REDACTED**"
  },
  formatters: {
    level(label: string) {
      return { level: label };
    }
  }
});

export const log = logMiddleware.logger;
export { logMiddleware };
