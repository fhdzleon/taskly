const {
  addTaskService,
  getTasksService,
  updateTaskService,
  deleteTaskService,
} = require("../services/tasks.service");

const addTask = async (req, res) => {
  try {
    const task = await addTaskService();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(task);
  }
};

const getTask = async (req, res) => {
  try {
    const tasks = await getTasksService();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(tasks);
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await updateTaskService();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(task);
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await deleteTaskService();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(task);
  }
};

module.exports = {
  addTask,
  getTask,
  updateTask,
  deleteTask,
};
