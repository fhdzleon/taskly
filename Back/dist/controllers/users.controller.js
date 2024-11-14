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
exports.register = exports.login = void 0;
const users_service_1 = require("../services/users.service");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, users_service_1.serviceLogin)();
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield (0, users_service_1.serviceRegister)();
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.register = register;
