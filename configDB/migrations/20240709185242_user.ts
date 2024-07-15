import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('user',(table)=>{
        table.uuid('id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email',100).notNullable().unique();
        table.string('password').notNullable();
    })
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('user');
}

