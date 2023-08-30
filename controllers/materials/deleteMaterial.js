const { Material } = require("../../models");

const { HttpError } = require("../../controllers");

const deleteByIdMaterial = async (req, res, next) => {
  const { id } = req.params;

  const result = await Material.findByIdAndRemove(id);

  if (!result) {
    throw HttpError(404, `Material with id:${id} was not found`);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    id,
    massege: `Success remove materials product with id:${id}`,
  });
};

module.exports = deleteByIdMaterial;
