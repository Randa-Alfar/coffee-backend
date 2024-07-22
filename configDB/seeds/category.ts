import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("category").del();

    // Inserts seed entries
    await knex("category").insert([
        {
            name:"Hot Drinks",
            discription:"All hot drinks"
        },
        {
            name:"Cold Drinks",
            discription:"All cold drinks"
        }
    ]);
};
