import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('category',(table)=>{
        table.string('name').notNullable().unique().primary(),
        table.string('discription').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('category');
}

