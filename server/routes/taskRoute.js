const express = require("express");
const router = express.Router();

const { createTask, getTask, getTaskById, updateTask, deleteTask } = require("../controller/taskControl"); 
router.get("/", getTask);
router.post("/", createTask);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;