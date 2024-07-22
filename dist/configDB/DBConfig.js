"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const knex_1 = require("knex"); // Knex to get the types and knex to create connection
dotenv_1.default.config();
class Database {
    constructor() {
    }
    async connect() {
        return await this.connectToPG().then(() => {
            console.log("PostgreSQL connected");
        })
            .catch((e) => {
            console.log("PostgreSQL not connected");
            console.error(e);
        });
        ;
    }
    async connectToPG() {
        this.pgBuilder = (0, knex_1.knex)({
            client: process.env.DB_CLIENT,
            connection: process.env.PG_CONNECTION_STRING,
            searchPath: ['knex', 'public'],
        });
        return this.connectToPG;
    }
}
exports.default = Database;
