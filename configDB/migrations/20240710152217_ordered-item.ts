import type { Knex } from "knex";
import { size } from "../enum";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('ordered-item',(table)=>{
        table.uuid('ord_item_id').primary();
        table.string('item_name').unique().notNullable();
        table.float('price').notNullable(),
        table.string('currency').notNullable(),
        table.enum('size',Object.values(size)).notNullable(),
        table.string('category').notNullable()
        // we still have to declarate img
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('ordered-item');
}

