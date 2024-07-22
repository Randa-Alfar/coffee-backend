import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("extra").del();

    // Inserts seed entries
    await knex("extra").insert([
        {
            name:"milk",
            price:5,
            currency:"EGP"
        },
        {
            name:"ice cream",
            price:10,
            currency:"EGP"
        }
    ]);
};
