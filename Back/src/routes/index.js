const { Router } = require("express");
const tasksRouter = require("../routes/tasks.route");
const usersRouter = require("../routes/users.route");

const router = Router();

router.use("/users", usersRouter);
router.use("/tasks", tasksRouter);

module.exports = router;
