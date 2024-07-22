import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("category_has_item").del();
    // Inserts seed entries
    await knex("category_has_item").insert([
        {
            category_name:"Hot Drinks",
            item_name:"coffe"
        },
        {
            category_name:"Hot Drinks",
            item_name:"tea"
        },
        {
            category_name:"Cold Drinks",
            item_name:"ice coffe"
        },
        {
            category_name:"Cold Drinks",
            item_name:"juice"
        }
    ]);
};