import { Knex } from "knex";
import dotenv from 'dotenv'
dotenv.config();
interface IKnexConfig {
  [key:string]:Knex.Config;
}

export const globalConfig:Knex.Config<any> | string = {
    client: process.env.DB_CLIENT,
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
}

const config:IKnexConfig = {
  development:{
    client: process.env.DB_CLIENT,
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
    migrations:{
      directory:"./configDB/migrations",
    },
    seeds: {
      directory: './configDB/seeds'
  }
  },
}

export default config ;