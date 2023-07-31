const { ctrlWrapper } = require("../../helpers");

const addUser = require("./addUser");
const deleteByIdUser = require("./deleteByIdUser");
const getAllUsers = require("./getAllUsers");

module.exports = {
  addUser: ctrlWrapper(addUser),
  deleteByIdUser: ctrlWrapper(deleteByIdUser),
  getAllUsers: ctrlWrapper(getAllUsers),
};
