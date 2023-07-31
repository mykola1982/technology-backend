const { User } = require("../../models");

const { HttpError } = require("../../helpers");

const deleteByIdProduct = async (req, res, next) => {
  const { id } = req.params;

  const result = await User.findByIdAndDelete(id);

  if (!result) {
    throw HttpError(404, `User with id:${id} was not found`);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    id,
    massage: `Success remove user with id:${id}`,
  });
};

module.exports = deleteByIdProduct;
