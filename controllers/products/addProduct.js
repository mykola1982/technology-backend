const { Product, Material } = require("../../models");
const { HttpError } = require("../../helpers");

const addProduct = async (req, res, next) => {
  const { number, material } = req.body;
  const product = await Product.findOne({ number });

  if (product) {
    throw HttpError(409, "Product with this number is already in the database");
  }

  const existingMaterial = await Material.findById(material);

  if (!existingMaterial) {
    throw HttpError(404, `Material with id: ${material} was not found`);
  }
  console.log(existingMaterial);

  const newProduct = await Product.create({
    ...req.body,
    material: existingMaterial,
  });
  console.log(newProduct);

  res.status(201).json({
    status: "success",
    code: 201,
    data: newProduct,
    message: "Create succesfull",
  });
};

module.exports = addProduct;
