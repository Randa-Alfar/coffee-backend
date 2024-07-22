"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = up;
exports.down = down;
async function up(knex) {
    await knex.schema.createTable('extra', (table) => {
        table.string('name').notNullable().unique().primary(),
            table.float('price').notNullable(),
            table.string('currency').notNullable().defaultTo('EGP');
    });
}
async function down(knex) {
    await knex.schema.dropTable('extra');
}
