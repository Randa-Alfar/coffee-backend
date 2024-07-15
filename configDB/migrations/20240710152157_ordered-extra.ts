import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('ordered-extra',(table)=>{
        table.uuid('ord_extra_id').notNullable().primary();
        table.string('name').notNullable();
        table.float('price').notNullable();
        table.string('currency').notNullable();
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('ordered-extra')
}