import {Page,Locator} from "@playwright/test"
import { basepage } from "./basepage";
export class product  extends basepage{
     readonly productText:Locator;

     constructor(page:Page){
        super(page)
         this.productText=page.locator("//h2[text()='MacBook Pro']")
     }

    async locatortext(){
        this.Locator( this.productText)
    }

}