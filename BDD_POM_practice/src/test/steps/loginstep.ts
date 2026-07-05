import {Given,When, Then} from '@cucumber/cucumber'
import { customeWorld } from '../world/customeWorld';
import { expect } from '@playwright/test';
import logindata from '../../../testData/loginData.json'

Given('the user  is launchthe application', async function (this:customeWorld) {

    await this.lp.navigate()
});

When('the user click the loginLink', async function (this:customeWorld) {
    await this.lp.clickloginlink()
});

When('the user enter the valid details', async function () {
    await this.lp.enterusername(logindata.valid.username)
     await this.lp.enterPassword(logindata.valid.password)
});

When('the user enter the user name as {string}', async function (this:customeWorld,string) {
    await this.lp.enterusername(string)
});

When('the user enter the password as {string}', async function (this:customeWorld,string) {
    await this.lp.enterPassword(string)
});

When('the user click the loginBtn', async function (this:customeWorld) {

    
    await this.lp.clickloginBtn()
});

Then('the user seen the welcom page', async function (this:customeWorld) {
    let act = await this.lp.welmsg()
    await expect(act).toHaveText("Welcome jeevs")
});
Then('the user seen the fail message', async function (this: customeWorld) {
     
    expect(this.lp.alertMessage).toBe("Wrong password.");

});
