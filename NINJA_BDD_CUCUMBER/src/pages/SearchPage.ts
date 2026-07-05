import { BasePage } from "./BasePage";
import { Page, Locator, expect } from "@playwright/test";

export class SearchPage extends BasePage {

    readonly searchInput: Locator;
    readonly searchBtn: Locator;
    readonly searchResults: Locator;
    readonly noResultsMessage: Locator;

    constructor(page: Page) {
        super(page);

        this.searchInput = page.locator("input[name='search']");
        this.searchBtn = page.locator("button.btn.btn-default.btn-lg");
        this.searchResults = page.locator(".product-layout");
        this.noResultsMessage = page.locator("//p[contains(text(), 'There is no product that matches the search criteria.')]");
    }

    async enterSearchTerm(term: string) {
        await this.searchInput.fill(term);
    }

    async clickSearchButton() {
        await this.searchBtn.click();
    }

    async verifySearchResultsDisplayed() {
        await expect(this.searchResults.first()).toBeVisible();
    }

    async verifyNoResultsMessage() {
        await expect(this.noResultsMessage).toBeVisible();
    }
}
