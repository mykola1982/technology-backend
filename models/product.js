const { Schema, model } = require("mongoose");

const { MongooseError } = require("../helpers");

const productSchema = new Schema({
  name: {
    type: String,
    require: [true, "Set name for product"],
  },
  number: { type: String },

  quantity: {
    type: Number,
    require: [true, "Set quantity products"],
  },

  material: {
    thickness: {
      type: String,
      require: true,
    },
    sheet: {
      type: String,
      require: true,
    },
  },
});

productSchema.post("save", MongooseError);

const Product = model("product", productSchema);

module.exports = Product;
