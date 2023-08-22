const { Schema, model } = require("mongoose");

const { MongooseError } = require("../helpers");

const orderShema = new Schema(
  {
    user: { type: String, required: [true, "Set name for product"] },
    products: [
      {
        _id: false,
        name: {
          type: String,
          required: [true, "Set name for product"],
        },
        number: { type: String },
        reserved: {
          type: Number,
          reguired: [true, "Set reserved for product"],
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
    materials: [
      {
        thickness: { type: String, required: true },
        sheet: { type: String, required: true },
        amount: { type: Number, reguired: true },
      },
    ],
    toRemove: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

orderShema.post("save", MongooseError);

const Order = model("order", orderShema);

module.exports = Order;
