import { BasePage } from "./BasePage";
import { Page, Locator, expect } from "@playwright/test";

export class LoginPage extends BasePage {

    readonly menuDrop: Locator;
    readonly loginLink: Locator;
    readonly login_username: Locator;
    readonly login_password: Locator;
    readonly loginBtn: Locator;
    readonly successLogin: Locator;
    readonly invalidUser: Locator;

    constructor(page: Page) {
        super(page);

        this.menuDrop = page.locator("//a[@title='My Account']");
        this.loginLink = page.getByRole("link", { name: "Login" });
        this.login_username = page.locator("#input-email");
        this.login_password = page.locator("#input-password");
        this.loginBtn = page.locator("//input[@value='Login']");
        this.invalidUser = page.locator(".alert-danger");
        this.successLogin = page.locator("//div[@id='content']//h2[text()='My Account']");
    }

    async clickMyAccount() {
        await this.menuDrop.click();
    }

    async clickLoginLink() {
        await this.loginLink.click();
    }

    async enterEmail(email: string) {
        await this.login_username.fill(email.trim());
    }

    async enterPassword(password: string) {
        await this.login_password.fill(password);
    }

    async clickLoginButton() {
        await this.loginBtn.click();
    }

    async login(email: string, password: string) {
        await this.clickMyAccount();
        await this.clickLoginLink();
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async verifySuccessLogin() {
        await expect(this.successLogin).toBeVisible();
    }

    async verifyInvalidLogin() {
        await expect(this.invalidUser).toBeVisible();
        await expect(this.invalidUser).toContainText(
            "Warning: No match for E-Mail Address and/or Password."
        );
    }
}