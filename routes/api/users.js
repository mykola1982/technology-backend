const express = require("express");

const router = express.Router();

const { controllersUser: ctrl } = require("../../controllers");
const { auth, validateBody, isValidId } = require("../../middelwares");
const { userAddSchema } = require("../../schemas");

router.get("/", auth, ctrl.getAllUsers);
router.post("/", auth, validateBody(userAddSchema), ctrl.addUser);
router.delete("/:id", auth, isValidId, ctrl.deleteByIdUser);

module.exports = router;
