import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { Task } from "../entities/Task";
import { User } from "../entities/User";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  dropSchema: true,
  entities: [Task, User],
  subscribers: [],
  migrations: [],
});
