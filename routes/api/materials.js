const express = require("express");

const router = express.Router();

const { controllersMaterials: ctrl } = require("../../controllers");

const { auth, isValidId, validateBody } = require("../../middelwares");
const { addMaterialSchema } = require("../../schemas");

router.get("/", auth, ctrl.addMaterial);
router.get("/:id", auth, isValidId);
router.post(
  "/",
  // auth,
  validateBody(addMaterialSchema),
  ctrl.addMaterial
);
router.put("/:id", auth, isValidId);
router.delete("/:id", auth, isValidId);

module.exports = router;
