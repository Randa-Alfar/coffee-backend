import MenuRepository from "./menu.repository";

class MenuService {
    constructor(private readonly menuRepository:MenuRepository = new MenuRepository()){}

    getMenu = async ():Promise<any> =>{
        let {categories, menu } = await this.menuRepository.getMenu();
        let m = menu.map((obj:any)=>{
            return {
                category:obj.category,
                items: [
                    {item:obj.item,extra:obj.extra}
                ]
            }
        });
        categories.map((category:any)=>{
            m.map((obj:any)=>{
                if(category.category == obj.category){
                    let selectedobj = categories.find((o)=>o.category==obj.category);
                    if(!('items' in selectedobj)){
                        selectedobj['items']=[];
                    }
                    categories.find((o)=>o.category==obj.category).items.push(...obj.items);
                }
            })
        })
        return { 
            menu:categories
        } }
    }

export default MenuService;