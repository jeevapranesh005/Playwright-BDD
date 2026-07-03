import { Page,Locator } from "@playwright/test";

export class basepage{
    protected page:Page;

    constructor(page:Page){
        this.page=page;
    }


    async click(locator:string){
        await this.page.click(locator)
    }

    async fill(locator:string,Text:string){
        await this.page.locator(locator).fill(Text)
    }
    async placeholderfill(Locator:string,Text:string){
        await this.page.getByPlaceholder(Locator).fill(Text)
    }

    async getText (locator:string){
        await this.page.locator(locator).textContent()
    }
    async Locator(Locator:string){
        return this.page.locator(Locator)
    }
}