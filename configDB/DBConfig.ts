import dotenv from 'dotenv'
import { Client, Knex, knex } from 'knex'  // Knex to get the types and knex to create connection

dotenv.config();

class Database {
    public pgBuilder:Knex.Config;

    constructor(){

    }
    async connect(){
        return await this.connectToPG().then(() => {
            console.log("PostgreSQL connected");
        })
        .catch((e) => {
            console.log("PostgreSQL not connected");
            console.error(e);
        });;
    }

    private async connectToPG(){
        this.pgBuilder = knex({
            client: process.env.DB_CLIENT,
            connection: process.env.PG_CONNECTION_STRING,
            searchPath: ['knex', 'public'],
        }
        );
        
        return this.connectToPG;
    }
}
export default Database;

