const express = require("express");
const router = express.Router();
const taskRoutes = require("./taskRoutes");
const authRoutes = require("./authRoutes");

router.use("/api/tasks", taskRoutes);
router.use("/api/auth", authRoutes);

module.exports = router;
