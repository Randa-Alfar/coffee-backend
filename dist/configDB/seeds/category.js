"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = seed;
async function seed(knex) {
    // Deletes ALL existing entries
    await knex("category").del();
    // Inserts seed entries
    await knex("category").insert([
        {
            name: "Hot Drinks",
            discription: "All hot drinks"
        },
        {
            name: "Cold Drinks",
            discription: "All cold drinks"
        }
    ]);
}
;
