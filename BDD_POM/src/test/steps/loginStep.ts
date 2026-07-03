
import { Given,When,Then } from "@cucumber/cucumber";
import { JeevaWorld } from "../world/CustomWorld";
import { expect } from "@playwright/test";



Given('user lanch the application', async function (this:JeevaWorld) {
  await this.lp.navigate()
});

When('user click myacclink', async function (this:JeevaWorld) {
  await this.lp.clickmyacc()
  console.log("hello")
});

When('user click loginlink', async function (this:JeevaWorld) {
 await  this.lp.clicklogin()
  console.log("hello")
});

When('user enter the email as {string}', async function (this:JeevaWorld,string) {
  await this.lp.fillemail(string)
  console.log("hello")
});

When('user enter the tutorial password as {string}', async function (this:JeevaWorld,string) {
  await this.lp.fillpassword(string)
  console.log("hello")
});

When('user click the login tutorial button', async function (this:JeevaWorld) {
  await this.lp.clickloginBtn()
  console.log("hello")
});

Then('user should login success', async function (this:JeevaWorld) {
  let act = await this.lp.getSucc()
  await expect(act).toHaveText("My Account")
});