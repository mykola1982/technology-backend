const Joi = require("joi");

const addProductShema = Joi.object().keys({
  name: Joi.string().required(),
  number: Joi.string(),
  quantity: Joi.number().required(),
  material: Joi.object({
    material: Joi.string().required(),
    sheet: Joi.string().required(),
  }).required(),
});

module.exports = addProductShema;
