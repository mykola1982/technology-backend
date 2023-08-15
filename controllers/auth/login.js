const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { name, password } = req.body;

  const user = await User.findOne({ name });

  if (!user) {
    throw HttpError(401, "Login or password invalid");
  }

  const passwordCompare = bcrypt.compareSync(password, user?.password);
  if (!passwordCompare) {
    throw HttpError(401, "Login or password invalid");
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "15s" });

  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      token,
      user: { name: user.name, userId: user._id, role: user.role },
    },
  });
};

module.exports = login;
