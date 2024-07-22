import type { Knex } from "knex";
import { size } from "../enum";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('item',(table)=>{
        table.string('name').notNullable().unique().primary(),
        table.float('price').notNullable(),
        table.string('currency').notNullable()
        // we still have to declarate img
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('items')
}

