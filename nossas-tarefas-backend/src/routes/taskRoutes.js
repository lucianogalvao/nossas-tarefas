const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const authenticateUser = require("../middleware/authMiddleware");

router.post("/", authenticateUser, taskController.createTask);
router.get("/", authenticateUser, taskController.getAllTasks);
router.get("/:id", authenticateUser, taskController.getTaskById);
router.put("/:id", authenticateUser, taskController.updateTask);
router.delete("/:id", authenticateUser, taskController.deleteTask);

module.exports = router;
