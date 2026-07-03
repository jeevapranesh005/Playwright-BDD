import { Before,After, BeforeAll } from "@cucumber/cucumber";
import { JeevaWorld } from "../world/CustomWorld";
import { Browser, chromium } from "@playwright/test";
import { login } from "../page/loginPage";
import { logger } from "../utilites/logger";

let browser:Browser;
BeforeAll(async()=>{
    logger.info("Launching Browser");
    browser = await chromium.launch({headless:false});

})

Before(async function (this: JeevaWorld) {
      logger.info("Creating Browser Context");
    this.browser = browser
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.lp=new login(this.page)
});

After (async function(this:JeevaWorld,scenario){
    logger.info(`Scenario : ${scenario.pickle.name}`);
    logger.info(`Status   : ${scenario.result?.status}`);
     if (scenario.result?.status === "FAILED") {
        logger.error(`Scenario Failed : ${scenario.pickle.name}`);
    } else {
        logger.info(`Scenario Passed : ${scenario.pickle.name}`);
    }
    await this.page.close()
    await this.context.close()
    await this.browser.close()
})