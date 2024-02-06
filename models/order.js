const { Schema, model } = require("mongoose");

const { MongooseError } = require("../helpers");
const { getRequiredFields } = require("../utils");

const orderShema = new Schema(
  {
    user: { type: String, required: [true, "Set name for product"] },
    products: [
      {
        name: {
          type: String,
          required: [true, "Set name for product"],
        },
        number: { type: String },
        reserved: {
          type: Number,
          reguired: [true, "Set reserved for product"],
        },
      },
    ],
    materials: [
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
          min: 0,
          exclusiveMin: true,
          required: [true, "Set weigth for material"],
        },
        amount: { type: Number, reguired: [true, "Set amount for material"] },
      },
    ],
    toRemove: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

orderShema.pre("validate", function (next) {
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

orderShema.post("save", MongooseError);

const Order = model("order", orderShema);

module.exports = Order;

// ________
// const { Schema, model } = require("mongoose");

// const { MongooseError } = require("../helpers");

// const orderShema = new Schema(
//   {
//     user: { type: String, required: [true, "Set name for product"] },
//     products: [
//       {
//         _id: false,
//         name: {
//           type: String,
//           required: [true, "Set name for product"],
//         },
//         number: { type: String },
//         reserved: {
//           type: Number,
//           reguired: [true, "Set reserved for product"],
//         },

//         weight: {
//           type: Number,
//           required: [true, "Set weight for product"],
//         },
//         quantity: {
//           type: Number,
//           required: [true, "Set quantity products"],
//         },
//         material: {
//           thickness: {
//             type: String,
//             required: true,
//           },
//           sheet: {
//             type: String,
//             required: true,
//           },
//         },
//       },
//     ],
//     materials: [
//       {
//         thickness: { type: String, required: true },
//         sheet: { type: String, required: true },
//         amount: { type: Number, reguired: true },
//       },
//     ],
//     toRemove: { type: Boolean, default: false },
//   },
//   { versionKey: false, timestamps: true }
// );

// orderShema.post("save", MongooseError);

// const Order = model("order", orderShema);

// module.exports = Order;
