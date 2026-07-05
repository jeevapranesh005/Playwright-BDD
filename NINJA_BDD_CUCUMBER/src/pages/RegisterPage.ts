import { BasePage } from "./BasePage";
import { Page, Locator, expect } from "@playwright/test";

export class RegisterPage extends BasePage {

    readonly menuDrop: Locator;
    readonly registerLink: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly telephoneInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly agreeCheckbox: Locator;
    readonly continueBtn: Locator;
    readonly successMessage: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);

        this.menuDrop = page.locator("//a[@title='My Account']");
        this.registerLink = page.getByRole("link", { name: "Register" });
        this.firstNameInput = page.locator("#input-firstname");
        this.lastNameInput = page.locator("#input-lastname");
        this.emailInput = page.locator("#input-email");
        this.telephoneInput = page.locator("#input-telephone");
        this.passwordInput = page.locator("#input-password");
        this.confirmPasswordInput = page.locator("#input-confirm");
        this.agreeCheckbox = page.locator("input[name='agree']");
        this.continueBtn = page.locator("input[value='Continue']");
        this.successMessage = page.locator("//h1[normalize-space()='Your Account Has Been Created!']");
        this.errorMessage = page.locator("//div[text()='Warning: E-Mail Address is already registered!']");
    }

    async clickMyAccount() {
        await this.menuDrop.click();
    }

    async clickRegisterLink() {
        await this.registerLink.click();
    }

    async enterFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterTelephone(telephone: string) {
        await this.telephoneInput.fill(telephone);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async enterConfirmPassword(password: string) {
        await this.confirmPasswordInput.fill(password);
    }

    async checkAgree() {
        await this.agreeCheckbox.check();
    }

    async clickContinueButton() {
        await this.continueBtn.click();
    }

    async verifySuccessRegistration() {
        await expect(this.successMessage).toBeVisible();
    }

    async verifyErrorMessagesDisplayed() {
        return this.locator(this.errorMessage)
    }
}
