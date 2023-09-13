const { Product, Material } = require("../../models");

const { HttpError } = require("../../helpers");

const getByIdProduct = async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findById(id).populate({
    path: "material",
    model: Material,
  });
  if (!product) {
    throw HttpError(404, `Product with id:${id} was not found `);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    data: product,
  });
};

module.exports = getByIdProduct;
