import { Page, Locator } from "@playwright/test";
import { basepage } from "./basepage";

export class CartPage extends basepage {

    readonly cartLink: Locator;
    readonly addToCartBtn: Locator;
    readonly productName: Locator;

    alertMessage: string = "";

    constructor(page: Page) {

        super(page);

        this.cartLink = page.locator("#cartur");
        this.addToCartBtn = page.locator("//a[text()='Add to cart']");
        this.productName = page.locator("//td[2]");
    }

    async navigate() {
        await this.page.goto("https://demoblaze.com/");
    }

    async clickProduct(product: string) {

        await this.page.locator(`//a[text()='${product}']`).click();

    }

    async clickAddToCart() {

        this.page.once("dialog", async (dialog) => {

            this.alertMessage = dialog.message();

            console.log("Alert :", this.alertMessage);

            await dialog.accept();

        });

        await this.addToCartBtn.click();

        await this.page.waitForTimeout(3000);

    }

    async openCart() {

        await this.cartLink.click();

    }

    async getProduct() {

        return this.productName;

    }

}