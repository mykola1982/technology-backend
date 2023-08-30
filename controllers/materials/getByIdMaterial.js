const { Material } = require("../../models");

const { HttpError } = require("../../helpers");

const getByIdMaterial = async (req, res, next) => {
  const { id } = req.params;

  const material = await Material.findById(id);

  if (!material) {
    throw HttpError(404, `Material with id: ${id} was not found`);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    data: material,
  });
};

module.exports = getByIdMaterial;
