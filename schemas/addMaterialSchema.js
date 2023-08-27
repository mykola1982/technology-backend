const Joi = require("joi");

const addMaterialSchema = Joi.object().keys({
  type: Joi.string().valid("sheet", "rod").required(),
  brand: Joi.string().required(),
  sheetParameters: Joi.object({
    width: Joi.string(),
    length: Joi.string(),
    thickness: Joi.string(),
  }),
  rodParameters: Joi.object({ diameter: Joi.string() }),
  weight: Joi.number().required(),
});

module.exports = addMaterialSchema;
