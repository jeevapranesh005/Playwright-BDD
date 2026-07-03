import { Given,When,Then } from "@cucumber/cucumber";
import { customeworld } from "../../hooks/world";


When('the user click the registerLink', async function (this:customeworld) {
    await this.page.locator("//a[@href='/register']").click()
    
});

When('the user click the Gender option', async function (this:customeworld) {
    await this.page.locator("gender-male").check()
});

When('the user enter the first name as {string}', async function (this:customeworld,string) {

    await this.page.locator("#FirstName").fill(string)
});

When('the user enter the last name as {string}', async function (this:customeworld,string) {
  await this.page.locator("#LastName").fill(string)
});

When('the user enter the email as {string}', async function (this:customeworld,string) {
    await this.page.locator("#Email").fill(string)
});

When('the user enter password as {string}', async function (this:customeworld,string) {
    await this.page.locator("#Password").fill(string)
});

When('the user enter the confomPassword as {string}', async function (this:customeworld,string) {
    await this.page.locator("#ConfirmPassword").fill(string)
});

