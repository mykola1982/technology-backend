const { Material } = require("../../models");
const { HttpError } = require("../../helpers");

const addMaterial = async (req, res, next) => {
  const { type, brand, sheetParameters, rodParameters, weight } = req.body;

  const query = {
    type,
    brand,
    weight,
  };

  if (sheetParameters) {
    query.sheetParameters = sheetParameters;
  } else if (rodParameters) {
    query.rodParameters = rodParameters;
  }

  const material = await Material.findOne(query);

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
