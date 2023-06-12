const express = require("express");

const router = express.Router();

const { controllersOrders: ctrl } = require("../../controllers");
const { validateBody } = require("../../middelwares");
const { addOrderSchema } = require("../../schemas");

// router.get("/");
// router.get("/:id", isValidId);
router.post(
  "/",
  // validateBody(addOrderSchema),
  ctrl.addOrder
);
// router.delete("/:id", isValidId);

module.exports = router;
