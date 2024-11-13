const {
  addTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");

const { Router } = require("express");

const tasksRouter = Router();

tasksRouter.post("/", addTask);

tasksRouter.get("/", getTask);

tasksRouter.put("/:id", updateTask);

tasksRouter.delete("/:id", deleteTask);

module.exports = tasksRouter;
