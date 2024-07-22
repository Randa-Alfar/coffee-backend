"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable('user', (table) => {
        table.uuid('id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email', 100).notNullable().unique();
        table.string('password').notNullable();
    });
}
async function down(knex) {
    await knex.schema.dropTable('user');
}
