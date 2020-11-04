const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('./config');
const { errorsCatcher } = require('./errorHandler');

const checkAuth = errorsCatcher((req, res, next) => {
  const authHeader = req.header('Authorization');

  if (authHeader) {
    const [type, token] = authHeader.split(' ');

    if (type === 'Bearer') {
      jwt.verify(token, JWT_SECRET_KEY);

      return next();
    }
  }

  res.status(401).send('Unauthorized user.');
});

module.exports = checkAuth;
