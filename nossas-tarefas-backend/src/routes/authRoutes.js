const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.post("/create-user", authController.createUser);
router.post("/login", authController.loginUser);
router.post("/refresh-token", authController.refreshToken);
router.post("/logout", authController.logoutUser);

module.exports = router;
