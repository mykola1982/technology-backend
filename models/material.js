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
      width: { type: String },
      length: { type: String },
      thickness: { type: String },
    },
    rodParameters: {
      diameter: { type: String },
    },

    weight: { type: Number, required: [true, "Set weigth for material"] },
  },
  { versionKey: false, timestamps: true }
);

materialSchema.post("save", MongooseError);

const Material = model("material", materialSchema);

module.exports = Material;
