import {Page,Locator} from "@playwright/test"
import { basepage } from "./basepage";
export class home  extends basepage{
    readonly laptopslink:Locator;
    readonly macbookpro :Locator;
   

    constructor(page:Page){
        super(page)
        this.laptopslink=page.locator("//a[text()='Laptops']")
        this.macbookpro = page.locator("//a[text()='MacBook Pro']")
       
    }

    async laptop(){
        await this.click(this.laptopslink)
    }
    async clickmac(){
        this.scroll(this.macbookpro)
        this.click(this.macbookpro)
    }


}
