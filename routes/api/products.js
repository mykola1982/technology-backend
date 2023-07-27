const express = require("express");

const { auth } = require("../../middelwares");

const router = express.Router();

const { controllersProducts: ctrl } = require("../../controllers");
const { validateBody, isValidId } = require("../../middelwares");
const { addProductSchema } = require("../../schemas");

router.get("/", auth, ctrl.getAllProduct);
router.get("/:id", auth, isValidId, ctrl.getByIdProduct);
router.post("/", auth, validateBody(addProductSchema), ctrl.addProduct);
router.put("/:id", auth, isValidId, ctrl.updateByIdProduct);
router.delete("/:id", auth, isValidId, ctrl.deleteByIdProduct);

module.exports = router;
