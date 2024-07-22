import dotenv from 'dotenv'
import { Knex, knex } from "knex"
import { globalConfig } from '../../knexfile';
dotenv.config();

class MenuRepository {
    private pg:Knex<any>;

    constructor(protected querybuilder:Knex<any> = knex(globalConfig)){}
    
    async getMenu(){
        const menu = await this.querybuilder.raw(
            `Select category.name as category, 
	                JSON_AGG(DISTINCT jsonb_build_object('item_name',category_has_item.item_name, 'item_price',item.price,'item_currency',item.currency)) as item,
	                JSON_AGG(json_build_object('extra_name',extra.name,'extra_price',extra.price,'extra_currency',extra.currency)) as extra
                    from category join category_has_item on category.name = category_name 
	                join public.item on category_has_item.item_name = item.name 
	                join public.item_has_extra on item_has_extra.item_name = item.name
	                join public.extra on item_has_extra.extra_name = extra.name
            group by category.name,category_has_item.item_name,item.price,item.currency`
        );
        const category = await this.querybuilder('category').select('name as category');
        return { categories: category
            ,menu:menu.rows }
    }
}

export default MenuRepository;