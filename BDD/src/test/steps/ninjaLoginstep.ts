import { customeworld } from './../../../../BDD-pratice/src/hooks/world';
import { CustomWorld } from '../../hooks/world';
import{Given,When,Then, context} from'@cucumber/cucumber'
import{Browser,chromium,Page,expect} from '@playwright/test'




Given('user lanch the application', async function () {

    await this.page.goto("https://tutorialsninja.com/demo/")
});

Given('user click myacclink', async function () {
    await this.page.locator("//span[text()='My Account']").click()

});

Given('user click loginlink', async function () {
    await this.page.locator("//a[text()='Login']").click()
});

Given('user enter the email as {string}', async function (string) {
    await this.page.getByPlaceholder("E-Mail Address").fill(string)
});

Given('user enter the tutorial password as {string}', async function (string) {
    await this.page.getByPlaceholder("Password").fill(string)
});

When('user click the login tutorial button', async function () {
    await this.page.locator("//input[@value='Login']").click()
});

Then('user should login success', async function () {
    let act = this.page.locator("//h2[text()='My Account']")
    console.log(act)
    await expect(act).toHaveText("My Account")
});

Then('user should login failure', async function () {
     let act= this.page.locator("//div[@class='alert alert-danger alert-dismissible']")
     await expect(act).toHaveText("Warning: No match for E-Mail Address and/or Password.")
});