// src/tests/login.test.js
const puppeteer = require('puppeteer');
const LoginPage = require('../../pages/Jest/LoginPage/LoginPage');

let browser;
let page;
let loginPage;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
});

afterAll(async () => {
  await browser.close();
});

describe('Login Page', () => {
  test('should load login page', async () => {
    await loginPage.visit();
    const title = await page.title();
    expect(title).toBe('Swag Labs');
  });

  test('should login with valid credentials', async () => {
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('secret_sauce');
    await loginPage.submitLogin();

    const url = await page.url();
    expect(url).toBe('https://www.saucedemo.com/v1/inventory.html');
  });

  test('should show error with invalid credentials', async () => {
    await loginPage.enterUsername('invalid_user');
    await loginPage.enterPassword('invalid_password');
    await loginPage.submitLogin();

    const errorText = await page.$eval('[data-test="error"]', el => el.textContent);
    expect(errorText).toContain('Epic sadface: Username and password do not match any user in this service');
  });
});
