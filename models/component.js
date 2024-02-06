const { Schema, model } = require("mongoose");

const { MongooseError } = require("../helpers");

const componentSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "Set name for product"],
    },
    number: { type: String },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "product",
          required: [true, "Set product for component"],
        },
        amount: {
          type: Number,
          required: [true, "Set amount for product "],
        },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

componentSchema.post("save", MongooseError);

const Component = model("component", componentSchema);

module.exports = Component;
