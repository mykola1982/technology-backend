const Joi = require("joi");

const updateToRemoveOrderShema = Joi.object({
  toRemove: Joi.boolean().required(),
});

module.exports = updateToRemoveOrderShema;
