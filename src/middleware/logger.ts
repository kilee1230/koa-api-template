import logger from "koa-pino-logger";

const redactPaths = [
  "req.headers.cookie",
  "req.headers.authorization",
  "req.headers.referer",
  "req.headers.from",
  "req.headers.masq"
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    level(label: string, _number: number) {
      return { level: label };
    }
  },
  transport:
    process.env.NODE_ENV === "local" ? { target: "pino-pretty" } : undefined
});

export const log = logMiddleware.logger;
export { logMiddleware };
