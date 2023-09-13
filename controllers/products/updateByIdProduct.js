const { Product, Material } = require("../../models");

const { HttpError } = require("../../helpers");

const updateByIdProduct = async (req, res, next) => {
  const { id } = req.params;
  const { number, material } = req.body;

  const product = await Product.findOne({ number });

  if (product && product._id.toString() !== id) {
    throw HttpError(409, "Product with this number is already in the database");
  }

  const existingMaterial = await Material.findById(material);

  if (!existingMaterial) {
    throw HttpError(404, `Material with id: ${material} was not found`);
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { ...req.body, material: existingMaterial },
    {
      new: true,
    }
  );

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
