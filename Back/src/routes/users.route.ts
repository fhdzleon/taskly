import { Router } from "express";
import { login, register } from "../controllers/users.controller";

const usersRouter = Router();

usersRouter.post("/register", register);

usersRouter.post("/login", login);

export default usersRouter;
