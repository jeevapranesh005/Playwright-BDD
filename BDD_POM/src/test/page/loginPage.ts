import { basepage } from './basepage';
import { logger } from "../utilites/logger";

export class login extends basepage{

    private myacc="//span[text()='My Account']"
    private loginLink ="//a[text()='Login']"
    private email = "E-Mail Address"
    private password ="Password"
    private loginBtn ="//input[@value='Login']"
    private success= "//h2[text()='My Account']"

    async navigate(){
        console.log("Navigate method called");
        logger.info("Opening Tutorial Ninja Application");
        await this.page.goto("https://tutorialsninja.com/demo/")
    }


    async loginuser(email:string,password:string) {
        
    await this.click(this.myacc);
    await this.click(this.loginLink)
    await this.fill(this.email,email)
    await this.fill(this.password,password)
    await this.click(this.loginBtn)
}

async clickmyacc(){
     logger.info("click the myAccount link");
    await this.click(this.myacc);
}
async clicklogin(){
    logger.info("click the login link")
     await this.click(this.loginLink)
}

async fillemail(email:string){
    logger.info(`Entering Email : ${email}`);
    await this.placeholderfill(this.email,email)
}

async fillpassword(password:string){
    logger.info("Entering Password");
    await this.placeholderfill(this.password,password)
}

async clickloginBtn(){
    logger.info("Clicking Login Button");
    await this.click(this.loginBtn)
}

async getSucc(){
    return this.Locator(this.success)
}
    
}