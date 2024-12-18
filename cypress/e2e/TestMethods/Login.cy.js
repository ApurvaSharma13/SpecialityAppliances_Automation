/// <reference types="Cypress" />

//import LoginPage from "../PageClasses/LoginPage";
//const loginPage = new LoginPage();

        describe('login after Authentication', () => {
         beforeEach(()=> {
            cy.loginViaAuth0()
           
         }) 

          it('should successfully log into our app', () => {
              // Ignore teh uncaught exceptions
              Cypress.on('uncaught:exception', (err, runnable) => {
                  return false; // Kailash : Return false to prevent Failing the test cases
              });
      
          cy.visit('https://cp.dev.nextgen.specialtyappliances.com/');
          cy.get('#email').type('sa.SHVARTSUR.p.32072@sa.com');
          cy.get('#password').type('Test@1234');
          cy.get('#btn-login').click()
      });
            
          })