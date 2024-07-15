import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('user-has-order',(table)=>{
        table.uuid('order_id').unsigned().references('id').inTable('order');
        table.uuid('user_id').unsigned().references('id').inTable('user');
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('user-has-order');
}

