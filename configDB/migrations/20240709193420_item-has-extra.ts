import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('item-has-extra',(table)=>{
        table.string('item_name').unsigned().references('name').inTable('item'),
        table.string('extra_name').unsigned().references('name').inTable('extra')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('item-has-extra');
}

