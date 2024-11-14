import { Request, Response } from "express";
import {
  addTaskService,
  getTasksService,
  updateTaskService,
  deleteTaskService,
} from "../services/tasks.service";

export const addTask = async (req: Request, res: Response) => {
  try {
    const task = await addTaskService();
    res.status(200).json(task);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const tasks = await getTasksService();
    res.status(200).json(tasks);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await updateTaskService();
    res.status(200).json(task);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const task = await deleteTaskService();
    res.status(200).json(task);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
