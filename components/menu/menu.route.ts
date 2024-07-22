import Router from "../../router/router";
import MenuController from "./menu.controller";

class MenuRouter extends Router {
    public routes():void {
        this.router.get('/menu',MenuController.getMenu)
    }
}
export default new MenuRouter().router