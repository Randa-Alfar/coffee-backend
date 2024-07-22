import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("item").del();

    // Inserts seed entries
    await knex("item").insert([
        {
            name:"coffe",
            price:15,
            currency:"EGP",
        },
        {
            name:"tea",
            price:10,
            currency:"EGP",
        },
        {
            name:"ice coffe",
            price:25,
            currency:"EGP",
        },
        {
            name:"juice",
            price:30,
            currency:"EGP",
        }
    ]);
};
