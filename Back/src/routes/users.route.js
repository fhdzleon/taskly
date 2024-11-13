const { Router } = require("express");
const { login, register } = require("../controllers/users.controller");

const usersRouter = Router();

usersRouter.post("/register", register);

usersRouter.post("/login", login);

module.exports = usersRouter;
