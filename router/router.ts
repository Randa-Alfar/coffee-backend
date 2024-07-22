import { Router as r} from 'express'
import IRouter from './route.interface'

abstract class Router implements IRouter {
    public router:r;

    constructor(){
        this.router = r();
        this.routes();
    }
    abstract routes():void;
}

export default Router