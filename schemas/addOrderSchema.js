const Joi = require("joi");

const addOrderSchema = Joi.object().keys({
  products: Joi.array()
    .items(
      Joi.object().keys({
        name: Joi.string().required(),
        number: Joi.string(),
        quantity: Joi.number().required(),
        weight: Joi.number().required(),
        workshop: Joi.string().required(),
        material: Joi.object({
          thickness: Joi.string().required(),
          sheet: Joi.string().required(),
        }).required(),
      })
    )
    .required(),
});

module.exports = addOrderSchema;
