import { CustomWorld } from './world';
import { Before,After, Status } from "@cucumber/cucumber";
import { webkit} from '@playwright/test';




Before(async function(this:CustomWorld){
    this.browser = await webkit.launch({headless:false});
    this.context = await this.browser.newContext();
    this.page =await this.context.newPage();
});

After(async function(this:CustomWorld,{pickle,result}){
    console.log(result?.status)
    if(result?.status==Status.FAILED){
        const img = await this.page.screenshot({path:`../../test-result/Screenshort/${pickle.name}.png`,type:"png"})
        await this.attach(img,"img/png");
    }
    await this.page.close();
    await this.context.close();
    await this.browser.close();
})