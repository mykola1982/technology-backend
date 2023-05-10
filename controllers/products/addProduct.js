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
    status: "succes",
    code: 201,
    data: { product: newProduct },
    message: "Create succesfull",
  });
};

// зробити перевырку на наявнысть такого продукту з таким децимальним номером
// прибрати версыю
// додати час створення
// додати час оновлення
// додати дільницю в модель
module.exports = addProduct;
