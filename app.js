const express = require("express");
const logger = require("morgan");
require("dotenv").config();

const { HttpError } = require("./helpers");
const {
  authRouter,
  usersRouter,
  productsRouter,
  ordersRouters,
  materialsRouters,
} = require("./routes/api");

const app = express();
const cors = require("cors");

const formatLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouters);
app.use("/api/materials", materialsRouters);

app.use((error, req, res, next) => {
  if (HttpError) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: `Internal server error: ${error.message}` });
});

module.exports = app;
