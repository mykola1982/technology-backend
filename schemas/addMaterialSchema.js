const Joi = require("joi");

const addMaterialSchema = Joi.object().keys({
  type: Joi.string().valid("sheet", "rod").required(),
  brand: Joi.string().required(),
  sheetParameters: Joi.object({
    width: Joi.string(),
    length: Joi.string(),
    thickness: Joi.string(),
  }).when(Joi.ref("type"), {
    is: "sheet",
    then: Joi.required(),
    otherwise: Joi.forbidden(),
  }),
  rodParameters: Joi.object({
    diameter: Joi.string(),
  }).when(Joi.ref("type"), {
    is: "rod",
    then: Joi.required(),
    otherwise: Joi.forbidden(),
  }),
  weight: Joi.number().required(),
});

module.exports = addMaterialSchema;
