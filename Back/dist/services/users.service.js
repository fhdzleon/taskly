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
exports.serviceRegister = exports.serviceLogin = void 0;
const serviceLogin = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return "User loged";
    }
    catch (error) {
        throw new Error("Failed for login");
    }
});
exports.serviceLogin = serviceLogin;
const serviceRegister = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return "user Register";
    }
    catch (error) {
        throw new Error("Failed for register");
    }
});
exports.serviceRegister = serviceRegister;
