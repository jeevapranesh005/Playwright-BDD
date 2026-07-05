
import {Page,Locator} from '@playwright/test'

export class basepage{
    protected page:Page;

    constructor(page:Page){
        this.page=page
    }

    async click(locator:Locator){
        await locator.click()
    }

    async fill(locator:Locator,text:string){
        await locator.fill(text)
    }

    async Locator(locator:Locator){
        return locator
    }

    async getText(locator:Locator){
        await locator.textContent()
    }
}