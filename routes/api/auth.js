const express = require("express");

const router = express.Router();

const { controllersAuth: ctrl } = require("../../controllers");
const { auth, validateBody } = require("../../middelwares");
const { userLoginSchema, userRegisterSchema } = require("../../schemas");

router.post("/signup", validateBody(userRegisterSchema), ctrl.signup);
router.post("/login");
router.get("/current");
router.get("/logout");
router.patch("/edit");
router.delete("/delete");

module.exports = router;
