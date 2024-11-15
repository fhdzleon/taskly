import bcrypt from "bcrypt";
import { UserModel } from "../config/data-source";
import { userData } from "../interfaces/userData";
import jwt from "jsonwebtoken";

/*----------------------------------------------------------------------- 
LOGIN DE USUARIOS
-----------------------------------------------------------------------*/

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-code";

export const serviceLogin = async (userData: userData) => {
  try {
    const { email, password } = userData;

    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Password wrong");
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
      },
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

/*----------------------------------------------------------------------- 
REGISTRO DE NUEVOS USUARIOS
-----------------------------------------------------------------------*/

export const serviceRegister = async (userData: userData) => {
  const { name, username, email, password } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = UserModel.create({
    name,
    username,
    email,
    password: hashedPassword,
  });
  await UserModel.save(newUser);

  return newUser;
};
