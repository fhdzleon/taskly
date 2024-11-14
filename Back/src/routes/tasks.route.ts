import { Router } from "express";
import {
  addTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller";

const tasksRouter = Router();

tasksRouter.post("/", addTask);

tasksRouter.get("/", getTask);

tasksRouter.put("/:id", updateTask);

tasksRouter.delete("/:id", deleteTask);

export default tasksRouter;
