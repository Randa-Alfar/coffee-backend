"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable('ordered-item', (table) => {
        table.uuid('ord_item_id').primary();
        table.string('item_name').unique().notNullable();
        table.float('price').notNullable(),
            table.string('currency').notNullable(),
            table.string('category').notNullable();
        // we still have to declarate img
    });
}
async function down(knex) {
    await knex.schema.dropTable('ordered-item');
}
