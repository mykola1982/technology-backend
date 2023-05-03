const express = require("express");

const app = express();

app.use(express.json());

// app.use((reg, res, next) => {
//   console.log("наше проміжне ПЗ "), next();
// });

app.get("/", (reg, res) => {
  res.send("Hello Word");
});

app.listen(3000, () => {
  console.log("example app listening on port 3000!");
});

module.exports = app;
