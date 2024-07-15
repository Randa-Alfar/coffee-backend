import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('order-has-items',(table)=>{
        table.uuid('order_id').unsigned().references('id').inTable('order'),
        table.uuid('ord_item_id').unsigned().references('ord_item_id').inTable('ordered-item')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('order-has-items');
}

