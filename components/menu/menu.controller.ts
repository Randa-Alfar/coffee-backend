import { Request, Response } from "express";
import MenuService from './menu.service';

class MenuController {
    constructor(private readonly menuService:MenuService = new MenuService()){}

    getMenu = async (req: Request, res: Response):Promise<any> => {
        try{
            const result = await this.menuService.getMenu();
            res.status(200).send(result);
        }catch(err){
            res.status(404).send(`[Menu-manegement] Controller : cann't get menu ${err}`);
        }
    } 

}

export default new MenuController();