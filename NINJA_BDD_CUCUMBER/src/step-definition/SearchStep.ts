import { When, Then } from "@cucumber/cucumber";
import { customeWorld } from "../world/Customeworld";

When("user searches for the product {string}", async function (this: customeWorld, productName: string) {
    await this.searchPage.enterSearchTerm(productName);
});

When("user clicks on the search button", async function (this: customeWorld) {
    await this.searchPage.clickSearchButton();
});

Then("the search results for {string} should be displayed or no results message as {string}", async function (this: customeWorld, productName: string, expectedResult: string) {
    if (expectedResult === "valid") {
        await this.searchPage.verifySearchResultsDisplayed();
    } else {
        await this.searchPage.verifyNoResultsMessage();
    }
});
