const addTaskService = async () => {
  try {
    return "Task added";
  } catch (error) {
    throw new Error("Failed to add new task");
  }
};

const getTasksService = async () => {
  try {
    return "Get task list";
  } catch (error) {
    throw new Error("Failed to get tasks");
  }
};

const updateTaskService = async () => {
  try {
    return "task updated";
  } catch (error) {
    throw new Error("Failed to update task");
  }
};

const deleteTaskService = async () => {
  try {
    return "task deleted";
  } catch (error) {
    throw new Error("Failed to delete task");
  }
};

module.exports = {
  addTaskService,
  getTasksService,
  updateTaskService,
  deleteTaskService,
};
