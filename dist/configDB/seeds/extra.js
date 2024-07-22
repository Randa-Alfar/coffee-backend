"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = seed;
async function seed(knex) {
    // Deletes ALL existing entries
    await knex("extra").del();
    // Inserts seed entries
    await knex("extra").insert([
        {
            name: "milk",
            price: 5,
            currency: "EGP"
        },
        {
            name: "ice cream",
            price: 10,
            currency: "EGP"
        }
    ]);
}
;
