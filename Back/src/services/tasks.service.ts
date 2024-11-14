export const addTaskService = async () => {
  try {
    return "Task added";
  } catch (error) {
    throw new Error("Failed to add new task");
  }
};

export const getTasksService = async () => {
  try {
    return "Get task list";
  } catch (error) {
    throw new Error("Failed to get tasks");
  }
};

export const updateTaskService = async () => {
  try {
    return "task updated";
  } catch (error) {
    throw new Error("Failed to update task");
  }
};

export const deleteTaskService = async () => {
  try {
    return "task deleted";
  } catch (error) {
    throw new Error("Failed to delete task");
  }
};
