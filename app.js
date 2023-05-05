const express = require("express");
const logger = require("morgan");
require("dotenv").config();

const app = express();
const cors = require("cors");

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());

// app.use((reg, res, next) => {
//   console.log("наше проміжне ПЗ "), next();
// });

app.get("/", (reg, res) => {
  res.send("Hello Word");
});

module.exports = app;
