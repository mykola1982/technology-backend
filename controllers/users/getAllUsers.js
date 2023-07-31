const { User } = require("../../models");

const getAllUsers = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "succes",
    code: 200,
    data: { users },
    totel: users.length,
  });
};

module.exports = getAllUsers;
