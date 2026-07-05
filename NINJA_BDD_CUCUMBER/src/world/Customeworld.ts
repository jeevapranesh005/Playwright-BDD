import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { SearchPage } from "../pages/SearchPage";
import { Browser, BrowserContext, Page } from "@playwright/test";
import { setWorldConstructor, World } from "@cucumber/cucumber";
import { logger } from "../utils/logger";

export class customeWorld extends World {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    loginPage!: LoginPage;
    registerPage!: RegisterPage;
    searchPage!: SearchPage;
    logger = logger;
}

setWorldConstructor(customeWorld);