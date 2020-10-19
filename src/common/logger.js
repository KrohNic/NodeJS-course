const logger = (req, res, next) => {
  console.log('url: ', req.originalUrl);
  console.log('query parameters: ', req.query);
  console.log('body: ', req.body);
  next();
};

module.exports = logger;
