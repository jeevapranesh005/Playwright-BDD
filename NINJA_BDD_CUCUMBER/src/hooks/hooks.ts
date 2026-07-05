import { Before, After, BeforeAll, Status, setDefaultTimeout, AfterAll } from "@cucumber/cucumber";
import { customeWorld } from "../world/Customeworld";
import { chromium, Browser } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { SearchPage } from "../pages/SearchPage";

setDefaultTimeout(60 * 1000);

let browser: Browser;

BeforeAll(async () => {
    browser = await chromium.launch({ headless: true });
});

Before(async function (this: customeWorld) {
    this.browser = browser;
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.loginPage = new LoginPage(this.page);
    this.registerPage = new RegisterPage(this.page);
    this.searchPage = new SearchPage(this.page);
});

After(async function (this: customeWorld, { pickle, result }) {
    if (result?.status === Status.FAILED && this.page) {
        const screenshot = await this.page.screenshot({
            path: `reports/screenshots/${pickle.name}.png`
        });

        await this.attach(screenshot, "image/png");
    }

    await this.page?.close();
    await this.context?.close();
});

AfterAll(async () => {
    await browser?.close();
});