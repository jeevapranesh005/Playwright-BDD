import { Browser, BrowserContext, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { login } from '../page/loginPage';
export class JeevaWorld extends World{

    browser!: Browser
    context!: BrowserContext
    page!: Page
    lp!:login
}

setWorldConstructor(JeevaWorld);