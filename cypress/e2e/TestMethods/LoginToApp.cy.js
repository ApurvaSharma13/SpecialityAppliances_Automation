//<reference types="cypress" />
describe('Login Test', () => {
    it('Redirect and Login ', () => {
        // Ignore teh uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // Kailash : Return false to prevent Failing the test cases
        });

    cy.visit('https://cp.dev.nextgen.specialtyappliances.com/');
    cy.get('#email').type('roblee.31762.p@sa.com');
    cy.get('#password').type('Test@1234');
    cy.get('#btn-login').click()
});
});