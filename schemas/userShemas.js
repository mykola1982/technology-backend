const Joi = require("joi");

const userAddSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().valid("ADMIN", "USER"),
});

const userLoginSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = { userAddSchema, userLoginSchema };
