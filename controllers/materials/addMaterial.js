const { Material } = require("../../models");
const { HttpError } = require("../../helpers");

const addMaterial = async (req, res, next) => {
  const { brand, sheetParameters, rodParameters, weight } = req.body;

  let material;
  if (sheetParameters) {
    material = await Material.findOne({ brand, sheetParameters, weight });
  } else if (rodParameters) {
    material = await Material.findOne({ brand, rodParameters, weight });
  }

  if (material) {
    throw HttpError(409, "Material with such data is already in the database ");
  }
  const newMaterial = await Material.create({ ...req.body });

  res.status(201).json({
    status: "success",
    code: 201,
    data: { material: newMaterial },
    message: "Create succesfull",
  });
};

module.exports = addMaterial;
