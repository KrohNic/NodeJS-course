const {
  catchUncaughtException,
  catchUnhandledRejection
} = require('./errorHandler');

process.on('uncaughtException', catchUncaughtException);
process.on('unhandledRejection', catchUnhandledRejection);

module.exports = {};
