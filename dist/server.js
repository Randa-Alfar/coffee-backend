"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const DBConfig_1 = __importDefault(require("./configDB/DBConfig"));
const menu_route_1 = __importDefault(require("./components/menu/menu.route"));
dotenv_1.default.config();
const port = process.env.PORT;
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.routes();
        this.CorsConfig();
        this.dataBase();
    }
    CorsConfig() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(function (req, res, next) {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
            next();
        });
    }
    async routes() {
        this.CorsConfig();
        this.app.use("/menu-management", menu_route_1.default);
    }
    dataBase() {
        const db = new DBConfig_1.default();
        db.connect();
    }
}
const app = new App().app;
app.listen(port, () => {
    console.log(`[server]: Server started successfully on port ${port}`);
});
