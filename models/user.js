const { Schema, model } = require("mongoose");

const { MongooseError } = require("../helpers");

const userShema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userShema.post("save", MongooseError);

const User = model("user", userShema);

module.exports = User;
