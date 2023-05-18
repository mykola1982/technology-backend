const { Product } = require("../../models");

const { HttpError } = require("../../helpers");

const updateByIdProduct = async (req, res, next) => {
  const { id } = req.params;
  const { number } = req.body;

  const product = await Product.findOne({ number });

  if (product && product._id.toString() !== id) {
    throw HttpError(409, "Product with this number is already in the database");
  }

  const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedProduct) {
    throw HttpError(404, `Product with id:${id} was not found `);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    data: updatedProduct,
  });
};

module.exports = updateByIdProduct;
