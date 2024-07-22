"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable('category_has_item', (table) => {
        table.string('category_name').unsigned().references('name').inTable('category'),
            table.string('item_name').unsigned().references('name').inTable('item');
    });
}
async function down(knex) {
    await knex.schema.dropTable('category_has_item');
}
