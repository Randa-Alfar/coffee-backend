import { Router } from "express";
import IRouter from "./rout.interface";

abstract class BaseRoutes implements IRouter {
  public router: Router;
  // protected context: Context;
  constructor() {
    this.router = Router();
    this.routes();
    // this.context = new Context();
  }
  abstract routes(): void;
}

export default BaseRoutes;