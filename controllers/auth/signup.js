const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const signup = async (req, res, next) => {
  const { name, password, role } = req.body;

  const user = await User.findOne({ name });
  if (user) {
    throw HttpError(409, "The name is used ");
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  await User.create({ name, password: hashPassword, role });

  const newUser = await User.findOne({ name });

  const payload = { id: newUser._id };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  newUser.token = token;
  await newUser.save();

  res.status(201).json({
    status: "succes",
    code: 201,
    data: { token, user: { name: newUser.name } },
  });
};

module.exports = signup;
