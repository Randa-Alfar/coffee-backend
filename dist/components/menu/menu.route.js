"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("../../router/router"));
const menu_controller_1 = __importDefault(require("./menu.controller"));
class MenuRouter extends router_1.default {
    routes() {
        this.router.get('/menu', menu_controller_1.default.getMenu);
    }
}
exports.default = new MenuRouter().router;
