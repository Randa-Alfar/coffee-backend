"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable('item-has-extra', (table) => {
        table.string('item_name').unsigned().references('name').inTable('item'),
            table.string('extra_name').unsigned().references('name').inTable('extra');
    });
}
async function down(knex) {
    await knex.schema.dropTable('item-has-extra');
}
