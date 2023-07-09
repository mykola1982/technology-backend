const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { HttpError } = require("../helpers");

const { SECRET_KEY } = process.env;

const auth = async (req, _, next) => {
  // const {auto } = req.headers;
};

module.exports = auth;
