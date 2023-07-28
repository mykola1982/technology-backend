const { User } = require("../../models");

const getCurrentUser = async (req, res, next) => {
  const { name } = req.user;

  const user = await User.findOne({ name });

  res.status(200).json({
    status: "seccess",
    code: 200,
    data: { name: user.name, userId: user._id, role: user.role },
  });
};

module.exports = getCurrentUser;
