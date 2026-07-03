import { customeworld } from "./world";
import { Before,After, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";

setDefaultTimeout(60*1000)

Before(async function(this:customeworld){
    this.browser = await chromium.launch({headless:false});
    this.context= await this.browser.newContext()
    this.page = await this.context.newPage()

});


After(async function(this:customeworld,{pickle,result}){
     console.log(result?.status)
    if(result?.status==Status.FAILED){
        const img = await this.page.screenshot({path:`../../test-result/Screenshort/${pickle.name}.png`,type:"png"})
        await this.attach(img,"img/png");
    }
    await this.page.close()
    await this.context.close()
    await this.browser.close() 
})

