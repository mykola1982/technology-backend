const { ctrlWrapper } = require("../../helpers");

const addMaterial = require("./addMaterial");
const getAllMaterials = require("./getAllMaterials");
const getByIdMaterial = require("./getByIdMaterial");
const deleteByIdMaterial = require("./deleteMaterial");
const updateByIdMaterial = require("./updateByIdMaterial");

module.exports = {
  addMaterial: ctrlWrapper(addMaterial),
  getAllMaterials: ctrlWrapper(getAllMaterials),
  getByIdMaterial: ctrlWrapper(getByIdMaterial),
  deleteByIdMaterial: ctrlWrapper(deleteByIdMaterial),
  updateByIdMaterial: ctrlWrapper(updateByIdMaterial),
};
