const express = require("express");

const router = express.Router();

const { controllersProducts: ctrl } = require("../../controllers");

router.get("/", ctrl.getAllProduct);
router.get("/:id", ctrl.getByIdProduct);
router.post("/", ctrl.addProduct);
router.put("/:id", ctrl.updateByIdProduct);
router.delete("/:id", ctrl.deleteByIdProduct);

module.exports = router;
