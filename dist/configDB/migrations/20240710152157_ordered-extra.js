"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable('ordered-extra', (table) => {
        table.uuid('ord_extra_id').notNullable().primary();
        table.string('name').notNullable();
        table.float('price').notNullable();
        table.string('currency').notNullable();
    });
}
async function down(knex) {
    await knex.schema.dropTable('ordered-extra');
}
