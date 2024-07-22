"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable('ordered-item-has-extra', (table) => {
        table.uuid('ord_item_id').unsigned().references('ord_item_id').inTable('ordered-item'),
            table.uuid('ord_extra_id').unsigned().references('ord_extra_id').inTable('ordered-extra');
    });
}
async function down(knex) {
    await knex.schema.dropTable('ordered-item-has-extra');
}
