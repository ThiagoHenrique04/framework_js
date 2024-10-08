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

  test('deve carregar a página de login', async () => {
    await loginPage.visit();
    const title = await page.title();
    expect(title).toBe('Swag Labs');
  });

  test('deve fazer login com credenciais válidas', async () => {
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('secret_sauce');
    await loginPage.submitLogin();

    const url = await page.url();
    expect(url).toBe('https://www.saucedemo.com/v1/inventory.html');
  });

  test('deve mostrar erro com credenciais inválidas', async () => {
    await loginPage.visit();
    await loginPage.enterUsername('invalid_user');
    await loginPage.enterPassword('invalid_password');
    await loginPage.submitLogin();

    const errorText = await page.$eval('[data-test="error"]', el => el.textContent);
    expect(errorText).toContain('Epic sadface: Username and password do not match any user in this service');
  });

  test('deve mostrar erro quando o username estiver ausente', async () => {
    await loginPage.visit();
    await loginPage.enterPassword('secret_sauce');  
    await loginPage.submitLogin();

    const errorText = await page.$eval('[data-test="error"]', el => el.textContent);
    expect(errorText).toContain('Epic sadface: Username is required');
  });

  test('deve mostrar erro quando a senha estiver ausente', async () => {
    await loginPage.visit();
    await loginPage.enterUsername('standard_user');  
    await loginPage.submitLogin();

    const errorText = await page.$eval('[data-test="error"]', el => el.textContent);
    expect(errorText).toContain('Epic sadface: Password is required');
  });

  test('deve mostrar erro para usuário bloqueado', async () => {
    await loginPage.visit();
    await loginPage.enterUsername('locked_out_user');
    await loginPage.enterPassword('secret_sauce');
    await loginPage.submitLogin();

    const errorText = await page.$eval('[data-test="error"]', el => el.textContent);
    expect(errorText).toContain('Epic sadface: Sorry, this user has been locked out.');
  });
});