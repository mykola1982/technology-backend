const Joi = require("joi");

const addOrderSchema = Joi.object().keys({
  user: Joi.string().required(),
  products: Joi.array()
    .items(
      Joi.object().keys({
        name: Joi.string().required(),
        number: Joi.string(),
        quantity: Joi.number().required(),
        weight: Joi.number().required(),
        reserved: Joi.number().required(),
        material: Joi.object({
          thickness: Joi.string().required(),
          sheet: Joi.string().required(),
        }).required(),
      })
    )
    .required(),
  materials: Joi.array().items(
    Joi.object().keys({
      thickness: Joi.string().required(),
      sheet: Joi.string().required(),
      amount: Joi.number().required(),
    })
  ),
});

module.exports = addOrderSchema;
