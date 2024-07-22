"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = seed;
async function seed(knex) {
    // Deletes ALL existing entries
    await knex("category_has_item").del();
    // Inserts seed entries
    await knex("category_has_item").insert([
        {
            category_name: "Hot Drinks",
            item_name: "coffe"
        },
        {
            category_name: "Hot Drinks",
            item_name: "tea"
        },
        {
            category_name: "Cold Drinks",
            item_name: "ice coffe"
        },
        {
            category_name: "Cold Drinks",
            item_name: "juice"
        }
    ]);
}
;
