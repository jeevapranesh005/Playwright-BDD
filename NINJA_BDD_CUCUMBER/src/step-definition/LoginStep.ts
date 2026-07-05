import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { customeWorld } from "../world/Customeworld";
import { CsvReader } from "../utils/csvReader";

setDefaultTimeout(60 * 1000);

Given("the user is on the Home page", async function (this: customeWorld) {
    await this.loginPage.navigate();
    this.logger.info("Browser Launched successfully");
});

Given("user clicks on the myAccount link", async function (this: customeWorld) {
    await this.loginPage.clickMyAccount();
});

Given("user clicks on the loginlink", async function (this: customeWorld) {
    await this.loginPage.clickLoginLink();
});

Given("user enters the valid email as {string}", async function (this: customeWorld, email: string) {
    await this.loginPage.enterEmail(email);
    this.logger.info("User enters the password");
});

Given("user enters password as {string}", async function (this: customeWorld, password: string) {
    await this.loginPage.enterPassword(password);
});

When("user clicks on the login button", async function (this: customeWorld) {
    await this.loginPage.clickLoginButton();
});

Then("user should be login successfully", async function (this: customeWorld) {
    await this.loginPage.verifySuccessLogin();
});

Then("error message invalid username or password should be displayed", async function (this: customeWorld) {
    await this.loginPage.verifyInvalidLogin();
});

When("user enters valid credentials from CSV", async function (this: customeWorld) {
    const data: any = CsvReader.readCsv("test-data/loginData.csv", (row: any) => row.scenarioType === "valid");
    await this.loginPage.enterEmail(data.email);
    await this.loginPage.enterPassword(data.password);
    this.logger.info("User entered valid credentials from CSV");
});

When("user enters invalid credentials from CSV", async function (this: customeWorld) {
    const data: any = CsvReader.readCsv("test-data/loginData.csv", (row: any) => row.scenarioType === "invalid");
    await this.loginPage.enterEmail(data.email);
    await this.loginPage.enterPassword(data.password);
    this.logger.info("User entered invalid credentials from CSV");
});