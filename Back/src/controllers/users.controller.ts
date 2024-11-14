import { Request, Response } from "express";
import { serviceRegister, serviceLogin } from "../services/users.service";

export const login = async (req: Request, res: Response) => {
  try {
    const user = await serviceLogin();
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const newUser = await serviceRegister();
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
