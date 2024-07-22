import bodyParser from "body-parser";
import dotenv from "dotenv"
import express , { Application } from "express";
import morgan from "morgan"
import cors from "cors"
import Database from "./configDB/DBConfig";
import MenuRouter from './components/menu/menu.route'

dotenv.config();
const port = process.env.PORT;

class App {
    public app: Application;

    constructor(){
        this.app = express();
        this.routes();
        this.CorsConfig();
        this.dataBase();
    }

    protected CorsConfig() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(morgan("dev"));
        this.app.use(cors());

        this.app.use(function (req, res, next) {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Credentials", "true");
            res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
            next();
        });
    }

    protected async routes(): Promise<void> {
        this.CorsConfig(); 

        this.app.use("/menu-management",MenuRouter);
    }

    protected dataBase(): void {
        const db = new Database();
        db.connect();
    }
}
const app = new App().app;

app.listen(port,()=>{
    console.log(`[server]: Server started successfully on port ${port}`);
})


