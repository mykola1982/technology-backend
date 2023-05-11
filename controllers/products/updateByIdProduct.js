const { Product } = require("../../models");

const { HttpError } = require("../../helpers");

const updateByIdProduct = async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(id, req.body, { new: true });

  if (!product) {
    throw HttpError(404, `Product with id:${id} was not found `);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    data: product,
  });
};

module.exports = updateByIdProduct;
