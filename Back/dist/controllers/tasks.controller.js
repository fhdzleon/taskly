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
exports.deleteTask = exports.updateTask = exports.getTask = exports.addTask = void 0;
const tasks_service_1 = require("../services/tasks.service");
const addTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield (0, tasks_service_1.addTaskService)();
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.addTask = addTask;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield (0, tasks_service_1.getTasksService)();
        res.status(200).json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getTask = getTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield (0, tasks_service_1.updateTaskService)();
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield (0, tasks_service_1.deleteTaskService)();
        res.status(200).json(task);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.deleteTask = deleteTask;
