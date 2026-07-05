// import { BasePage } from "./BasePage";
// import { Page, Locator, expect } from "@playwright/test";

// export class LoginPage extends BasePage {

//         private menuDrop = "//a[@title='My Account']"
//         // private loginlik = "link", { name: "Login" }
//         private login_username = "#input-email";
        
//         private login_password = "#input-password";
//         private loginBtn = "//input[@value='Login']"
//         private invalidUser = ".alert-danger"
//         private successLogin = "//div[@id='content']//h2[text()='My Account']"
    

//     async clickMyAccount() {
//         await this.menuDrop.click();
//     }

//     async clickLoginLink() {
//         await this.loginLink.click();
//     }

//     async enterEmail(email: string) {
//         await this.login_username.fill(email.trim());
//     }

//     async enterPassword(password: string) {
//         await this.login_password.fill(password);
//     }

//     async clickLoginButton() {
//         await this.loginBtn.click();
//     }

//     async login(email: string, password: string) {
//         await this.clickMyAccount();
//         await this.clickLoginLink();
//         await this.enterEmail(email);
//         await this.enterPassword(password);
//         await this.clickLoginButton();
//     }

//     async verifySuccessLogin() {
//         await expect(this.successLogin).toBeVisible();
//     }

//     async verifyInvalidLogin() {
//         await expect(this.invalidUser).toBeVisible();
//         await expect(this.invalidUser).toContainText(
//             "Warning: No match for E-Mail Address and/or Password."
//         );
//     }
// }