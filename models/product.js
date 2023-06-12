const { Schema, model } = require("mongoose");

const { MongooseError } = require("../helpers");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for product"],
    },
    number: { type: String },
    workshop: {
      type: String,
      required: [true, "Set workshop for product"],
    },
    weight: {
      type: Number,
      required: [true, "Set weight for product"],
    },
    quantity: {
      type: Number,
      required: [true, "Set quantity products"],
    },
    material: {
      thickness: {
        type: String,
        required: true,
      },
      sheet: {
        type: String,
        required: true,
      },
    },
  },
  { versionKey: false, timestamps: true }
);

productSchema.post("save", MongooseError);

const Product = model("product", productSchema);

module.exports = Product;
