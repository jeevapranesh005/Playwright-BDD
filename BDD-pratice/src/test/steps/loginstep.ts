import { Browser, chromium, expect, Page } from '@playwright/test';
import{Given,When,Then} from '@cucumber/cucumber'
import { customeworld } from '../../hooks/world';

Given('the user is lanch the website', async function (this:customeworld) {


    await this.page.goto("https://demowebshop.tricentis.com/")

});

When('the user click the loginlink', async function (this:customeworld) {
    await this.page.locator("//a[@href='/login']").click()
});

When('the user enter the username as {string}', async function (this:customeworld,string) {
    await this.page.locator("#Email").fill(string)
});

When('the user enter the password as {string}', async function (this:customeworld,string) {
    await this.page.locator("#Password").fill(string)
});

When('the user click login button', async function (this:customeworld) {
    await this.page.locator("//input[@value='Log in']").click()
});

Then('the user should login succesfull', async function (this:customeworld) {
   let act= this.page.locator("//a[@href='/customer/info']").first()
   await expect(act).toHaveText("jenny04@gmail.com")
});