const { Schema, model } = require("mongoose");

const { MongooseError } = require("../helpers");

const materialSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["sheet", "rod"],
      required: [true, "Set type for material"],
    },
    brand: {
      type: String,
      required: [true, "Set brand for material"],
    },
    sheetParameters: {
      width: { type: Number, min: 0, exclusiveMin: true },
      length: { type: Number, min: 0, exclusiveMin: true },
      thickness: { type: Number, min: 0, exclusiveMin: true },
    },
    rodParameters: {
      diameter: { type: Number, min: 0, exclusiveMin: true },
    },

    weight: {
      type: Number,
      in: 0,
      exclusiveMin: true,
      required: [true, "Set weigth for material"],
    },
  },
  { versionKey: false, timestamps: true }
);

function getRequiredFields(type) {
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
}

materialSchema.pre("validate", function (next) {
  const requiredFields = getRequiredFields(this.type);
  for (const field of requiredFields) {
    const fieldValue = field
      .split(".")
      .reduce((obj, key) => (obj && obj[key]) || null, this);
    if (!fieldValue) {
      this.invalidate(field, "Field is required", this[field]);
    }
  }
  next();
});

materialSchema.post("save", MongooseError);

const Material = model("material", materialSchema);

module.exports = Material;
