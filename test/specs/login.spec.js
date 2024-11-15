import LoginPage from '../pageobjects/login.page.js';
import loginData from '../data/loginData.js';

describe('Login Form Tests', () => {
    it('UC-1: Login form with empty credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('', '');
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required');
    });

    it('UC-2: Login form with credentials and missing password', async () => {
        await LoginPage.open();
        await LoginPage.inputUsername.setValue('standard_user');
        await LoginPage.inputPassword.setValue('');
        await LoginPage.btnLogin.click();
        await expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required');
        
    });

    it('UC-3: Login form with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(loginData.valid.username, loginData.valid.password);
        await expect(LoginPage.dashboardTitle).toHaveText('Swag Labs');
    });
});