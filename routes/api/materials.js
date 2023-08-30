const express = require("express");

const router = express.Router();

const { controllersMaterials: ctrl } = require("../../controllers");

const { auth, isValidId, validateBody } = require("../../middelwares");
const { addMaterialSchema } = require("../../schemas");

router.get("/", auth, ctrl.getAllMaterials);
router.get("/:id", auth, isValidId, ctrl.getByIdMaterial);
router.post("/", auth, validateBody(addMaterialSchema), ctrl.addMaterial);
router.put(
  "/:id",
  auth,
  isValidId,
  validateBody(addMaterialSchema),
  ctrl.updateByIdMaterial
);
router.delete("/:id", auth, isValidId, ctrl.deleteByIdMaterial);

module.exports = router;
