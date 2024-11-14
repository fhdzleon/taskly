"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskService = exports.updateTaskService = exports.getTasksService = exports.addTaskService = void 0;
const addTaskService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return "Task added";
    }
    catch (error) {
        throw new Error("Failed to add new task");
    }
});
exports.addTaskService = addTaskService;
const getTasksService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return "Get task list";
    }
    catch (error) {
        throw new Error("Failed to get tasks");
    }
});
exports.getTasksService = getTasksService;
const updateTaskService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return "task updated";
    }
    catch (error) {
        throw new Error("Failed to update task");
    }
});
exports.updateTaskService = updateTaskService;
const deleteTaskService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return "task deleted";
    }
    catch (error) {
        throw new Error("Failed to delete task");
    }
});
exports.deleteTaskService = deleteTaskService;
