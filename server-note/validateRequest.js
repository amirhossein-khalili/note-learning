// noteErrorHandler.js

const { logMiddleware } = require('./log');

function validateRequest(schema) {
  return (req, res, next) => {
    try {
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(412).json(error.details[0].message);
      }
      return next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}

module.exports = validateRequest;
