"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable('category', (table) => {
        table.string('name').notNullable().unique().primary(),
            table.string('discription').notNullable();
    });
}
async function down(knex) {
    await knex.schema.dropTable('category');
}
