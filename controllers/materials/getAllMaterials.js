const { Material } = require("../../models");

const getAllMaterials = async (req, res, next) => {
  const materials = await Material.find();

  res.status(200).json({
    status: " success",
    code: 200,
    data: materials,
    total: materials.length,
  });
};

module.exports = getAllMaterials;
