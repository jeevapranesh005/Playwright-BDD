import { setWorldConstructor,World } from "@cucumber/cucumber";
import { login } from "../page/loginpage";
import{CartPage} from '../page/cartpage'
import {Browser,BrowserContext,Page} from '@playwright/test'
export class customeWorld extends World{

    browser!:Browser;
    context!: BrowserContext;
    page!:Page;
    lp!:login
    cp!: CartPage;

}

setWorldConstructor(customeWorld)