const Joi = require('joi');
const { logger } = require('../config');
const { Response, errorResponseMsg } = require('./response');

function Validate(schema) {
  return async (req, res, next) => {
    if (!Joi.isSchema(schema)) {
      logger.error('Invalid joi schema');
    }
    try {
      await schema.validateAsync(req.body);
    } catch (e) {
      const validationErrors = e.details.map((errorDetail) => ({
        key: errorDetail.context.key,
        message: errorDetail.message
      }));
      return errorResponseMsg(res, 422, 'Validation Error', validationErrors);
    }
    return next();
  };
}

module.exports = { Validate };