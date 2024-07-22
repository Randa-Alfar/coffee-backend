"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const menu_repository_1 = __importDefault(require("./menu.repository"));
class MenuService {
    constructor(menuRepository = new menu_repository_1.default()) {
        this.menuRepository = menuRepository;
        this.getMenu = async () => {
            let { categories, menu } = await this.menuRepository.getMenu();
            let m = menu.map((obj) => {
                return {
                    category: obj.category,
                    items: [
                        { item: obj.item, extra: obj.extra }
                    ]
                };
            });
            categories.map((category) => {
                m.map((obj) => {
                    if (category.category == obj.category) {
                        let selectedobj = categories.find((o) => o.category == obj.category);
                        if (!('items' in selectedobj)) {
                            selectedobj['items'] = [];
                        }
                        categories.find((o) => o.category == obj.category).items.push(...obj.items);
                    }
                });
            });
            return {
                menu: categories
            };
        };
    }
}
exports.default = MenuService;
