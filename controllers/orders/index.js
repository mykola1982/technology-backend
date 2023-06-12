const addOrder = require("./addOrder");

const { ctrlWrapper } = require("../../helpers");

module.exports = {
  addOrder: ctrlWrapper(addOrder),
};
