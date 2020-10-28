const { UNPROCESSABLE_ENTITY, BAD_REQUEST } = require('http-status-codes');

const validator = (property, schema) => (req, res, next) => {
  const { error } = schema.validate(req[property]);

  if (error) {
    res
      .status(property === 'body' ? UNPROCESSABLE_ENTITY : BAD_REQUEST)
      .json({ error: error.details });
  } else {
    return next();
  }
};

module.exports = validator;
