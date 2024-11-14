import { Router } from "express";
import tasksRouter from "./tasks.route";
import usersRouter from "./users.route";

const router = Router();

router.use("/users", usersRouter);
router.use("/tasks", tasksRouter);

export default router;
