const { Product } = require("../../models");
const { HttpError } = require("../../helpers");

const addProduct = async (req, res, next) => {
  const { number } = req.body;
  const product = await Product.findOne({ number });

  if (product) {
    throw HttpError(409, "Product with this number is already in the database");
  }

  const newProduct = await Product.create({ ...req.body });

  res.status(201).json({
    status: "success",
    code: 201,
    data: { product: newProduct },
    message: "Create succesfull",
  });
};

module.exports = addProduct;
