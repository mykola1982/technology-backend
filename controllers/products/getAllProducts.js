const { Product } = require("../../models");

const getAllProducts = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    status: "success",
    code: 200,
    data: { products },
    total: products.length,
  });
};

module.exports = getAllProducts;
