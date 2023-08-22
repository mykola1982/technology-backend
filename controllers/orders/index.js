const { ctrlWrapper } = require("../../helpers");

const addOrder = require("./addOrder");
const getAllOrder = require("./getAllOrders");
const getByIdOrder = require("./getByIdOrder");
const updateToRemoveOrder = require("./updateToRemoveOrder");
const deleteByIdOrder = require("./deleteByIdOrder");

module.exports = {
  addOrder: ctrlWrapper(addOrder),
  getAllOrder: ctrlWrapper(getAllOrder),
  getByIdOrder: ctrlWrapper(getByIdOrder),
  updateToRemoveOrder: ctrlWrapper(updateToRemoveOrder),
  deleteByIdOrder: ctrlWrapper(deleteByIdOrder),
};
