const logger = (req, res, next) => {
  console.log(
    'method: ',
    req.method,
    'url: ',
    `http://${req.hostname}${req.originalUrl}`,
    'query parameters: ',
    req.query,
    'body: ',
    req.body
  );
  next();
};

module.exports = logger;
