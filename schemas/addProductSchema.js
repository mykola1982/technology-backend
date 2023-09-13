const Joi = require("joi");

const addProductSchema = Joi.object().keys({
  name: Joi.string().required(),
  number: Joi.string(),
  quantity: Joi.number().required(),
  weight: Joi.number().required(),
  workshop: Joi.string().required(),
  material: Joi.string("в схемі").required(" в схемі"),
});

module.exports = addProductSchema;
