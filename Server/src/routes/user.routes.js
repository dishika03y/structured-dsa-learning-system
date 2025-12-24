const express = require("express");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const authorizeAdmin = require("../middleware/role.middleware");

const router = express.Router();

router.get("/me", authMiddleware, userController.getProfile);

// Test route to verify admin access

router.get("/admintest", authMiddleware, authorizeAdmin, (req, res) => {
  res.status(200).json({ message: "Admin access granted" });
});

module.exports = router;
