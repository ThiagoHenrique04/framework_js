class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = 'input[data-test="username"]';
      this.passwordInput = 'input[data-test="password"]';
      this.loginButton = '#login-button';
    }
  
    async visit() {
      await this.page.goto('https://www.saucedemo.com/v1/');
    }
  
    async enterUsername(username) {
      await this.page.type(this.usernameInput, username);
    }
  
    async enterPassword(password) {
      await this.page.type(this.passwordInput, password);
    }
  
    async submitLogin() {
      await this.page.click(this.loginButton);
    }
  }
  
  module.exports = LoginPage;
  