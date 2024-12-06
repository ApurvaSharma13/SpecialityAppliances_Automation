class LoginPage
{
    elements = {
           
       // newAccountButton : () => cy.get('.a[class='/btn secondary-cta/'] span'),
      //  txtNewAccounts   : () => cy.get('div[class='/banner-message/'] h1'),
        saveButton : () => cy.get()
        

    }

    setUp()
    {
      
        cy.fixture('testData1').then((data)=>{
        cy.visit(data.url)
        //cy.visit("/")
        //cy.wait(5000)
        it('is doing something very important', (done) => {
          // this event will automatically be unbound when this
          // test ends because it's attached to 'cy'
          cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('something about the error')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            done()
        
            // return false to prevent the error from
            // failing this test
            return false
          })
        
          // assume this causes an error
          cy.get('#btn-login').click();
          cy.get('#email').type('sa.SHVARTSUR.p.32072@sa.com');
        })
      //  cy.getCookies()
      //  cy.clearAllCookies()

      cy.get('#email').type('sa.SHVARTSUR.p.32072@sa.com');
      cy.get('#password').type('Test@1234').type("{enter}");
       // cy.title().should('contains',data.PageTitle)
        }) 
    }

    loginToApplication(){

        cy.fixture('testData1').then((data)=>{
        cy.visit(data.url)
    
        cy.get("input[id=username]").type("sa.SHVARTSUR.p.32072@sa.com");
        cy.get("input[id=password]").type("Test@1234").type("{enter}");
        //Page 1
        cy.wait(5000)
       
      //  this.elements.enterUsername().type("sa.SHVARTSUR.p.32072@sa.com")
      //  this.elements.enterPassword().type("Test@1234")
      //  this.elements.saveButton().click()
        
       
  
    })
  
}
}

export default LoginPage;