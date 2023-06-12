const Joi = require("joi");

const addOrderSchema = Joi.object().keys({
  products: Joi.array().required,
});

module.exports = addOrderSchema;
