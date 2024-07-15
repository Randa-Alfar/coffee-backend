
import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('extra',(table)=>{
        table.string('name').notNullable().unique().primary(),
        table.float('price').notNullable(),
        table.string('currency').notNullable().defaultTo('EGP')
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('extra');
}

