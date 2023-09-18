const getRequiredFields = (type) => {
  if (type === "sheet") {
    return [
      "sheetParameters.width",
      "sheetParameters.length",
      "sheetParameters.thickness",
    ];
  } else if (type === "rod") {
    return ["rodParameters.diameter"];
  }
  return [];
};

module.exports = getRequiredFields;
