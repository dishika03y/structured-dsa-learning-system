const authController = require("../controllers/auth.controller");

const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login); 

router.post("/logout",authMiddleware, authController.logout);

module.exports = router;
