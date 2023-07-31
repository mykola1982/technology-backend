const bcrypt = require("bcryptjs");

const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const addUser = async (req, res, next) => {
  const { name, password, role } = req.body;

  const user = await User.findOne({ name });

  if (user) {
    throw HttpError(409, "The name is used ");
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  await User.create({ name, password: hashPassword, role });

  res.status(201).json({
    status: "succes",
    code: 201,
    data: { user: { name } },
  });
};

module.exports = addUser;
