const Joi = require("joi");

const addOrderSchema = Joi.object().keys({
  user: Joi.string().required(),
  products: Joi.array()
    .items(
      Joi.object().keys({
        name: Joi.string().required(),
        number: Joi.string(),
        reserved: Joi.number().required(),
      })
    )
    .required(),
  materials: Joi.array().items(
    Joi.object().keys({
      type: Joi.string().valid("sheet", "rod").required(),
      brand: Joi.string().required(),
      sheetParameters: Joi.object({
        width: Joi.number().greater(0).not(0),
        length: Joi.number().greater(0).not(0),
        thickness: Joi.number().greater(0).not(0),
      }).when(Joi.ref("type"), {
        is: "sheet",
        then: Joi.required(),
        otherwise: Joi.forbidden(),
      }),
      rodParameters: Joi.object({
        diameter: Joi.number().greater(0).not(0),
      }).when(Joi.ref("type"), {
        is: "rod",
        then: Joi.required(),
        otherwise: Joi.forbidden(),
      }),
      weight: Joi.number().required().greater(0).not(0),
      amount: Joi.number().required(),
    })
  ),
});

module.exports = addOrderSchema;
