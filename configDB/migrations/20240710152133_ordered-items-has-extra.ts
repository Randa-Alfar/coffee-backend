import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('ordered-item-has-extra',(table)=>{
        table.uuid('ord_item_id').unsigned().references('ord_item_id').inTable('ordered-item'),
        table.uuid('ord_extra_id').unsigned().references('ord_extra_id').inTable('ordered-extra')
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('ordered-item-has-extra');
}