import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('category_has_item',(table)=>{
        table.string('category_name').unsigned().references('name').inTable('category'),
        table.string('item_name').unsigned().references('name').inTable('item')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('category_has_item');
}

