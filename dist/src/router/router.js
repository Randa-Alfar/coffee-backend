"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class BaseRoutes {
    // protected context: Context;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
        // this.context = new Context();
    }
}
exports.default = BaseRoutes;
