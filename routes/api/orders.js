const express = require("express");

const { auth } = require("../../middelwares");

const router = express.Router();

const { controllersOrders: ctrl } = require("../../controllers");
const { validateBody, isValidId } = require("../../middelwares");
const { addOrderSchema } = require("../../schemas");
const { updateToRemoveOrderShema } = require("../../schemas");

router.get("/", auth, ctrl.getAllOrder);
router.get("/:id", auth, isValidId, ctrl.getByIdOrder);
router.post("/", auth, validateBody(addOrderSchema), ctrl.addOrder);
router.patch(
  "/:id",
  auth,
  isValidId,
  validateBody(updateToRemoveOrderShema),
  ctrl.updateToRemoveOrder
);
router.delete("/:id", auth, isValidId, ctrl.deleteByIdOrder);

module.exports = router;
