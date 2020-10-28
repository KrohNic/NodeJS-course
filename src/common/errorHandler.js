// eslint-disable-next-line
const errorHandler = (error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('Something broke...');
};

const errorsCatcher = callback => {
  try {
    return callback;
  } catch (e) {
    console.log('catch: ', e);
  }
};

const catchUncaughtException = err => {
  console.error(`Caught exception: ${err}`);
};

const catchUnhandledRejection = (reason, p) => {
  console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
};

module.exports = {
  errorHandler,
  errorsCatcher,
  catchUncaughtException,
  catchUnhandledRejection
};
