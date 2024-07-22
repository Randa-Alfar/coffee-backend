"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable('user-has-order', (table) => {
        table.uuid('order_id').unsigned().references('id').inTable('order');
        table.uuid('user_id').unsigned().references('id').inTable('user');
    });
}
async function down(knex) {
    await knex.schema.dropTable('user-has-order');
}
