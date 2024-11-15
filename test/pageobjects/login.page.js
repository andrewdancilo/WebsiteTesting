import Page from './page';

class LoginPage extends Page {
    get inputUsername() { return $('input#user-name'); }
    get inputPassword() { return $('input#password'); }
    get btnLogin() { return $('input#login-button'); }
    get errorMessage() { return $('div.error-message-container'); }
    get dashboardTitle() { return $('div.app_logo'); }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    open() {
        return super.open('https://www.saucedemo.com/');
    }
}

export default new LoginPage();
