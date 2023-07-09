const { ctrlWrapper } = require("../../helpers");

const addOrder = require("./addOrder");
const getAllOrder = require("./getAllOrders");
const getByIdOrder = require("./getByIdOrder");
const deleteByIdOrder = require("./deleteByIdOrder");

module.exports = {
  addOrder: ctrlWrapper(addOrder),
  getAllOrder: ctrlWrapper(getAllOrder),
  getByIdOrder: ctrlWrapper(getByIdOrder),
  deleteByIdOrder: ctrlWrapper(deleteByIdOrder),
};
