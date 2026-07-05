import {Page,Locator} from "@playwright/test"
import { basepage } from "./basepage";
export class login extends basepage{
      alertMessage: string = "";

    readonly loginlink:Locator;
    readonly username:Locator
    readonly password:Locator
    readonly login_btn:Locator
    readonly welcomMsg:Locator

    constructor(page:Page){
        super(page)
        this.loginlink=page.locator("#login2")
        this.username= page.locator("#loginusername")
        this.password = page.locator("#loginpassword")
        this.login_btn=page.locator("//button[@onclick='logIn()']")
        this.welcomMsg = page.locator("#nameofuser")
    }

    async navigate(){
        await this.page.goto("https://demoblaze.com/")
    }

    async clickloginlink(){
        await this.click(this.loginlink)
    }
    async enterusername(username:string){
        await this.fill(this.username,username)
    }

    async enterPassword(password:string){
        await this.fill(this.password,password)
    }
   async clickloginBtn() {

    this.page.once("dialog", async (dialog) => {

        this.alertMessage = dialog.message();

        console.log("Alert Message:", this.alertMessage);
        
        await dialog.accept();
    });

    await this.click(this.login_btn);
    await this.page.waitForTimeout(1000)
}

    async welmsg(){
        return await this.Locator(this.welcomMsg)
    }


}