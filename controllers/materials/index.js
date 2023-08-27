const { ctrlWrapper } = require("../../helpers");

const addMaterial = require("./addMaterial");

module.exports = { addMaterial: ctrlWrapper(addMaterial) };
