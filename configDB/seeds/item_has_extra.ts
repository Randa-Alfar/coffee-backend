import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("item-has-extra").del();

    // Inserts seed entries
    await knex("item-has-extra").insert([
        {
            item_name:"coffe",
            extra_name:"milk"
        },
        {
            item_name:"tea",
            extra_name:"milk"
        },
        {
            item_name:"ice coffe",
            extra_name:"ice cream"
        },
        {
            item_name:"juice",
            extra_name:"milk"
        },
        {
            item_name:"juice",
            extra_name:"ice cream"
        }
    ]);
};