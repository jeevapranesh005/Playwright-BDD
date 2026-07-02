import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../../hooks/world";
setDefaultTimeout(60 * 1000);

Given("user navigate to the tutorialsninja website", async function (this:CustomWorld) {
    await this.page.goto("https://tutorialsninja.com/demo/", {
        waitUntil: "domcontentloaded",
        timeout: 60000,
    });
});

Given("user click the register link", async function () {
    await this.page.locator('a[title="My Account"]').click();
    await this.page.locator('a[href*="route=account/register"]').click();
});

When("user enter the first name as {string}", async function (firstName: string) {
    await this.page.locator("#input-firstname").fill(firstName);
});

When("user enter the last name as {string}", async function (lastName: string) {
    await this.page.locator("#input-lastname").fill(lastName);
});

When("user enter the register email as {string}", async function (email: string) {
    await this.page.locator("#input-email").fill(email);
});

When("user enter the telephone as {string}", async function (telephone: string) {
    await this.page.locator("#input-telephone").fill(telephone);
});

When("user enter the register password as {string}", async function (password: string) {
    await this.page.locator("#input-password").fill(password);
});

When("user enter the confirm password as {string}", async function (confirmPassword: string) {
    await this.page.locator("#input-confirm").fill(confirmPassword);
});

When("user select the privacy policy checkbox", async function () {
    await this.page.locator('input[name="agree"]').check();
});

When("user click the continue button", async function () {
    await this.page.locator('input[value="Continue"]').click();
});

Then("user should see the register success message {string}", async function (message: string) {
    await expect(this.page.locator("#content h1")).toHaveText(message);
});

Then("user should see the privacy policy warning message", async function () {
    const warning = this.page.locator(".alert.alert-danger.alert-dismissible");

    await expect(warning).toBeVisible();
    await expect(warning).toContainText("Warning: You must agree to the Privacy Policy!");
});