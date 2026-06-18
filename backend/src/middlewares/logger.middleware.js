export const loggerMiddleware = (req, res, next) => {
  const startedAt = process.hrtime.bigint();

  res.on("finish", () => {
    const durationMs = Number(process.hrtime.bigint() - startedAt) / 1_000_000;
    const status = res.statusCode;
    const level = status >= 500 ? "error" : status >= 400 ? "warn" : "info";
    const message = [
      req.method,
      req.originalUrl,
      status,
      `${durationMs.toFixed(2)}ms`,
    ].join(" ");

    console[level](message);
  });

  next();
};
