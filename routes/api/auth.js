const express = require("express");

const router = express.Router();

const { controllersAuth: ctrl } = require("../../controllers");
const { auth, validateBody } = require("../../middelwares");
const { userRegisterSchema, userLoginSchema } = require("../../schemas");

router.post("/signup", validateBody(userRegisterSchema), ctrl.signup);
router.post("/login", validateBody(userLoginSchema), ctrl.login);
router.get("/current", auth, ctrl.getCurrentUser);
router.get("/logout", auth, ctrl.logout);

module.exports = router;
