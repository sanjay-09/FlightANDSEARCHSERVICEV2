// logger.js
const winston = require('winston');
const path = require('path');

const logDir = 'C:/Application logs';

console.log("logger");

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    // File transport for all logs
    new winston.transports.File({
      filename: path.join(logDir, 'combined.log')
    }),

    // File transport for errors only
    new winston.transports.File({
      filename: path.join(logDir, 'error.log'),
      level: 'error'
    }),

   
  ]
});

module.exports = logger;
