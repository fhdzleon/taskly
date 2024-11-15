import { Request, Response } from "express";
import { serviceRegister, serviceLogin } from "../services/users.service";
import { UserModel } from "../config/data-source";

/*----------------------------------------------------------------------- 
LOGIN USUARIOS
-----------------------------------------------------------------------*/

export const login = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await serviceLogin(userData);
    res.status(200).json({
      message: "Login succesful",
      token: result.token,
      user: result.user,
    });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

/*----------------------------------------------------------------------- 
REGISTRO DE NUEVOS USUARIOS
-----------------------------------------------------------------------*/

export const register = async (req: Request, res: Response) => {
  try {
    const { email, username } = req.body;

    const existingEmail = await UserModel.findOne({ where: { email } });
    const existingUsername = await UserModel.findOne({ where: { username } });

    if (existingEmail) {
      return res.status(409).json({ message: "Email already exists" });
    }
    if (existingUsername) {
      return res.status(409).json({ message: "Username already exists" });
    }

    const newUser = await serviceRegister(req.body);
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json({ message: "Falied toregister user" });
  }
};
