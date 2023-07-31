const { ctrlWrapper } = require("../../helpers");

const login = require("./login");
const logout = require("./logout");
const getCurrentUser = require("./getCurrentUser");

module.exports = {
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  getCurrentUser: ctrlWrapper(getCurrentUser),
};
