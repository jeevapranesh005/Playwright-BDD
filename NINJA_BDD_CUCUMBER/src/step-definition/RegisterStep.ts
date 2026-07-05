import { Given, When, Then } from "@cucumber/cucumber";
import { customeWorld } from "../world/Customeworld";
import { JsonReader } from "../utils/jsonReader";
import { faker } from "@faker-js/faker";
import { expect } from "@playwright/test";

Given("user clicks on the register link", async function (this: customeWorld) {
    await this.registerPage.clickRegisterLink();
});

When("user enters registration details from JSON {string} and generates random email", async function (this: customeWorld, key: string) {
    const data: any = JsonReader.readJson("test-data/registerData.json", key);
    
    await this.registerPage.enterFirstName(data.firstName);
    await this.registerPage.enterLastName(data.lastName);
    
    
    if (key === 'valid') {
        await this.registerPage.enterEmail(faker.internet.email());
    } else {
        await this.registerPage.enterEmail(faker.lorem.word()); 
    }

    await this.registerPage.enterTelephone(data.telephone);
    await this.registerPage.enterPassword(data.password);
    await this.registerPage.enterConfirmPassword(data.password);
    
    this.logger.info(`User entered registration details from JSON for key: ${key}`);
});

When("user accepts the privacy policy", async function (this: customeWorld) {
    await this.registerPage.checkAgree();
});

When("user clicks on the continue button", async function (this: customeWorld) {
    await this.registerPage.clickContinueButton();
});

Then("user should be registered successfully", async function (this: customeWorld) {
    await this.registerPage.verifySuccessRegistration();
});

Then("error messages should be displayed for mandatory fields", async function (this: customeWorld) {

    let act = await this.registerPage.verifyErrorMessagesDisplayed()

    expect(act).toHaveText("Warning: E-Mail Address is already registered!")
    
});
