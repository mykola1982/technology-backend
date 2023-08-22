const { userAddSchema, userLoginSchema } = require("./userShemas");
const addProductSchema = require("./addProductSchema");
const addOrderSchema = require("./addOrderSchema");
const updateToRemoveOrderShema = require("./updateToRemoveOrderShema");

module.exports = {
  userAddSchema,
  userLoginSchema,
  addProductSchema,
  addOrderSchema,
  updateToRemoveOrderShema,
};
