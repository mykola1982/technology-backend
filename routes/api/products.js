const express = require("express");

const router = express.Router();

const { controllersProducts: ctrl } = require("../../controllers");
const { validateBody, isValidId } = require("../../middelwares");
const { addProductSchema } = require("../../schemas");

router.get("/", ctrl.getAllProduct);
router.get("/:id", isValidId, ctrl.getByIdProduct);
router.post("/", validateBody(addProductSchema), ctrl.addProduct);
router.put("/:id", isValidId, ctrl.updateByIdProduct);
router.delete("/:id", isValidId, ctrl.deleteByIdProduct);

module.exports = router;
