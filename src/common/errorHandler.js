// eslint-disable-next-line
const errorHandler = (error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('Something broke...');
};

module.exports = errorHandler;
