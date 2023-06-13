const express = require("express");

const router = express.Router();

const { controllersOrders: ctrl } = require("../../controllers");
const { validateBody, isValidId } = require("../../middelwares");
const { addOrderSchema } = require("../../schemas");

router.get("/", ctrl.getAllOrder);
router.get("/:id", isValidId, ctrl.getByIdOrder);
router.post("/", validateBody(addOrderSchema), ctrl.addOrder);
router.delete("/:id", isValidId, ctrl.deleteByIdOrder);

module.exports = router;
