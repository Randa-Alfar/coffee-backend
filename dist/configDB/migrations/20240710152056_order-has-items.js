"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable('order-has-items', (table) => {
        table.uuid('order_id').unsigned().references('id').inTable('order'),
            table.uuid('ord_item_id').unsigned().references('ord_item_id').inTable('ordered-item');
    });
}
async function down(knex) {
    await knex.schema.dropTable('order-has-items');
}
