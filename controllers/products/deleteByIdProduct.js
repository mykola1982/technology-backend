const { Product } = require("../../models");
const { HttpError } = require("../../helpers");

const deleteByIdProduct = async (req, res, next) => {
  const { id } = req.params;

  const result = await Product.findByIdAndRemove(id);

  if (!result) {
    throw HttpError(404, `Product with id:${id} was not found `);
  }
  res
    .status(200)
    .json({
      status: "success",
      code: 200,
      id,
      massage: `Success remove product with id:${id}`,
    });
};

module.exports = deleteByIdProduct;
