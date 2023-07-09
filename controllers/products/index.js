const { ctrlWrapper } = require("../../helpers");

const addProduct = require("./addProduct");
const deleteByIdProduct = require("./deleteByIdProduct");
const getAllProduct = require("./getAllProducts");
const getByIdProduct = require("./getByIdProduct");
const updateByIdProduct = require("./updateByIdProduct");

module.exports = {
  addProduct: ctrlWrapper(addProduct),
  deleteByIdProduct: ctrlWrapper(deleteByIdProduct),
  getAllProduct: ctrlWrapper(getAllProduct),
  getByIdProduct: ctrlWrapper(getByIdProduct),
  updateByIdProduct: ctrlWrapper(updateByIdProduct),
};
