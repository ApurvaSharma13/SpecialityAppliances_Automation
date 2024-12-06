/// <reference types="Cypress" />

import LoginPage from "../PageClasses/LoginPage";
const loginPage = new LoginPage();

        describe('login', () => {
          it('should successfully log into our app', () => {
            cy
                .clearAllCookies()
                .login()
                .visit('https://signin.dev.nextgen.specialtyappliances.com/')
                .wait(100)
          });
        });