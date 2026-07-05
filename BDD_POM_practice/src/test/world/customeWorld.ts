import { setWorldConstructor,World } from "@cucumber/cucumber";
import { login } from "../page/loginpage";

import {Browser,BrowserContext,Page} from '@playwright/test'
import { home } from "../page/homePage";
import { product } from "../page/productPage";
export class customeWorld extends World{

    browser!:Browser;
    context!: BrowserContext;
    page!:Page;
    lp!:login;
    hp!:home;
    product!:product;
  

}

setWorldConstructor(customeWorld)