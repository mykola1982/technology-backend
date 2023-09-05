const Joi = require("joi");

const addMaterialSchema = Joi.object().keys({
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
});

module.exports = addMaterialSchema;
