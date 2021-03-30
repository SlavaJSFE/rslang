const winston = require('winston');
const morgan = require('morgan');
const { combine, timestamp } = winston.format;
const { LOGS_DIR } = require('./config');

morgan.token('userId', req => JSON.stringify(req.userId));