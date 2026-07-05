import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { customeWorld } from "../world/customeWorld";

Given("the user launches the application", async function (this: customeWorld) {

    await this.cp.navigate();

});

When("the user clicks on {string}", async function (this: customeWorld, product) {

    await this.cp.clickProduct(product);

});

When("the user clicks Add to cart", async function (this: customeWorld) {

    await this.cp.clickAddToCart();

});

When("the user accepts the product added alert", async function (this: customeWorld) {

    expect(this.cp.alertMessage).toBe("Product added.");

});

When("the user opens the Cart page", async function (this: customeWorld) {

    await this.cp.openCart();

});

Then("the product {string} should be displayed in the cart", async function (this: customeWorld, product) {

    await this.page.waitForTimeout(2000);

    await expect(await this.cp.getProduct()).toHaveText(product);

});