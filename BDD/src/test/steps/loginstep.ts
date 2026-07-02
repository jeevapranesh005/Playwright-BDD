import{Given,When,Then} from'@cucumber/cucumber'
import{Browser,chromium,Page,expect} from '@playwright/test'

let browser:Browser;
let page:Page;

Given('user navigate to the application', async function () {
  browser = await chromium.launch({headless:false})
  page=await browser.newPage();
  await page.goto("https://bookcart.azurewebsites.net/")
});

Given('user click on the login link', async function () {
  await page.click("//span[text()=' Login ']")
});

Given('user enter the username of {string}', async function (string) {
  await page.getByPlaceholder('Username').fill(string)
});

Given('user enter the password as {string}', async function (string) {
  await page.getByPlaceholder('Password').fill(string)
});

When('user click the login button', async function () {
  await page.click("//span[text()='Login']")
});

Then('login should be succes', async function () {
    const username = "jeeva111";
    const userNameLocator = page.locator(`//span[normalize-space(text())='${username}']`);
    await expect(userNameLocator).toBeVisible();    
    console.log("Login is successful");

    await browser.close();
});

Then('login should be fail', async function () {
    
    console.log("Login failed");

    await browser.close();
});