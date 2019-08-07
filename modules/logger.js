const moment = require("moment");
const winston = require("winston");
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "main.log" }),
  ],
  format: winston.format.printf(log => `[${moment().format("YYYY-MM-DD HH:mm:ss")}]: [${log.level.toUpperCase()}] - ${log.message}`)
});

exports.log = (type = "info", content) => logger.log(type, content);

exports.error = (...args) => this.log("error", ...args);

exports.warn = (...args) => this.log("warn", ...args);

exports.debug = (...args) => this.log("debug", ...args);
