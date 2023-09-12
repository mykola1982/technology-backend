const { Material } = require("../../models");

const { HttpError } = require("../../helpers");

const updateByIdMaterial = async (req, res, next) => {
  const { id } = req.params;
  const { type, brand, sheetParameters, rodParameters, weight } = req.body;

  const updateFields = {
    type,
    brand,
    weight,
  };

  if (type !== "sheet" && type !== "rod") {
    throw HttpError(
      400,
      "Invalid type value. Only 'sheet' or 'rod' are allowed."
    );
  }

  if (type === "sheet") {
    updateFields.sheetParameters = sheetParameters;
    updateFields.rodParameters = null;
  } else if (type === "rod") {
    updateFields.rodParameters = rodParameters;
    updateFields.sheetParameters = null;
  }

  const materialWithUpdatedData = await Material.findOne(updateFields);

  if (
    materialWithUpdatedData &&
    materialWithUpdatedData._id.toString() !== id
  ) {
    throw HttpError(409, "Material with such data is already in the database ");
  }

  const updateMaterial = await Material.findByIdAndUpdate(id, updateFields, {
    new: true,
  });

  if (!updateMaterial) {
    throw HttpError(404, `Material with id:${id} was not found`);
  }

  res.status(200).json({
    status: "success",
    code: 200,
    data: updateMaterial,
  });
};

module.exports = updateByIdMaterial;
