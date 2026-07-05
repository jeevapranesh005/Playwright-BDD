import { Before,After,BeforeAll, AfterAll } from "@cucumber/cucumber";
import { customeWorld } from "../world/customeWorld";
import { Browser, chromium } from "@playwright/test";
import { login } from "../page/loginpage";
import {CartPage} from '../page/cartpage'
import { logger } from "../utilites/logger";


let browser:Browser;
BeforeAll(async()=>{
    logger.info("Browser is lanched")
    browser = await chromium.launch({headless:false})
})

Before(async function(this:customeWorld){
    this.browser = browser;
    this.context = await this.browser.newContext()
    this.page = await this.context.newPage()
    this.lp = new login(this.page)
    this.cp = new CartPage(this.page);
})

After(async function(this:customeWorld,scenario){

    if(scenario.result?.status=="FAILED"){

        await this.page.screenshot({path:`Report/screenshort/${scenario.pickle.name}.png`,
            fullPage:true}
        )
    }
    await this.page.close()
    await this.context.close()
    
})
AfterAll(async()=>{
await browser.close()  
})