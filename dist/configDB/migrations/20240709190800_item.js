"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable('item', (table) => {
        table.string('name').notNullable().unique().primary(),
            table.float('price').notNullable(),
            table.string('currency').notNullable();
        // we still have to declarate img
    });
}
async function down(knex) {
    await knex.schema.dropTable('items');
}
