import { Page, Locator } from '@playwright/test';
import { EnvReader } from '../utils/envReader';

export class BasePage {

    constructor(protected page: Page){

    }

    async navigate(){
        await this.page.goto(EnvReader.getBaseUrl());
        
    }

    async click(locator: string){
        await this.page.locator(locator).click();
    }

    async fill(locator: Locator, value: string){
        await locator.fill(value);
    }

    async getText(locator: Locator){
        return await locator.textContent();
    }
    async locator(locator:Locator){
        return locator
    }

}