const addOrder = require("./addOrder");
const getAllOrder = require("./getAllOrders");
const getByIdOrder = require("./getByIdOrder");
const deleteByIdOrder = require("./deleteByIdOrder");

const { ctrlWrapper } = require("../../helpers");

module.exports = {
  addOrder: ctrlWrapper(addOrder),
  getAllOrder: ctrlWrapper(getAllOrder),
  getByIdOrder: ctrlWrapper(getByIdOrder),
  deleteByIdOrder: ctrlWrapper(deleteByIdOrder),
};
