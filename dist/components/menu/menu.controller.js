"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const menu_service_1 = __importDefault(require("./menu.service"));
class MenuController {
    constructor(menuService = new menu_service_1.default()) {
        this.menuService = menuService;
        this.getMenu = async (req, res) => {
            try {
                const result = await this.menuService.getMenu();
                res.status(200).send(result);
            }
            catch (err) {
                res.status(404).send(`[Menu-manegement] Controller : cann't get menu ${err}`);
            }
        };
    }
}
exports.default = new MenuController();
