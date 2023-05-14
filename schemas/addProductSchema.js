const Joi = require("joi");

const addProductShema = Joi.object().keys({
  name: Joi.string().required(),
  number: Joi.string(),
  quantity: Joi.number().required(),
  weight: Joi.number().required(),
  workshop: Joi.string().required(),
  material: Joi.object({
    thickness: Joi.string().required(),
    sheet: Joi.string().required(),
  }).required(),
});

module.exports = addProductShema;
