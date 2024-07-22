"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.globalConfig = {
    client: process.env.DB_CLIENT,
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
};
const config = {
    development: {
        client: process.env.DB_CLIENT,
        connection: process.env.PG_CONNECTION_STRING,
        searchPath: ['knex', 'public'],
        migrations: {
            directory: "./configDB/migrations",
        },
        seeds: {
            directory: './configDB/seeds'
        }
    },
};
exports.default = config;
