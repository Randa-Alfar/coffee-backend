"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const knex_1 = require("knex");
const knexfile_1 = require("../../knexfile");
dotenv_1.default.config();
class MenuRepository {
    constructor(querybuilder = (0, knex_1.knex)(knexfile_1.globalConfig)) {
        this.querybuilder = querybuilder;
    }
    async getMenu() {
        const menu = await this.querybuilder.raw(`Select category.name as category, 
	                JSON_AGG(DISTINCT jsonb_build_object('item_name',category_has_item.item_name, 'item_price',item.price,'item_currency',item.currency)) as item,
	                JSON_AGG(json_build_object('extra_name',extra.name,'extra_price',extra.price,'extra_currency',extra.currency)) as extra
                    from category join category_has_item on category.name = category_name 
	                join public.item on category_has_item.item_name = item.name 
	                join public.item_has_extra on item_has_extra.item_name = item.name
	                join public.extra on item_has_extra.extra_name = extra.name
            group by category.name,category_has_item.item_name,item.price,item.currency`);
        const category = await this.querybuilder('category').select('name as category');
        return { categories: category,
            menu: menu.rows };
    }
}
exports.default = MenuRepository;
