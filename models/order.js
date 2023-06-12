const { Schema, model } = require("mongoose");

const { MongooseError } = require("../helpers");

const orderShema = new Schema(
  {
    products: [
      {
        _id: false,
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
    ],
  },
  { versionKey: false, timestamps: true }
);

orderShema.post("save", MongooseError);

const Order = model("order", orderShema);

module.exports = Order;
