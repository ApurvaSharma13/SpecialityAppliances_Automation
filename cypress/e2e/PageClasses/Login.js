const jsonData = require('../../fixtures/testData.json');

        const loginTxtUsername = '[name=username]';
        const loginTxtPassword = '[name=password]';
        const loginBtnLogin    = '[type=submit]' ;
        
        const txtTitle = 'OrangeHRM'

class Login
{
    static setUp()
    {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('testData').then((data)=>{
            cy.visit(data.url)
        cy.title().should('eq',txtTitle)
        })
        
    }

    static setUserName()
    {
        cy.get(loginTxtUsername).type(jsonData.username)
    }

    static setPassword()
    {
        cy.get(loginTxtPassword).type(jsonData.password)
    }

    static submitLogin()
    {
        cy.get(loginBtnLogin).click()
    }

    static verifyLogin(){
        cy.get([".oxd-topbar-header-breadcrumb"]).should('be.visible')
    }
}

export default Login;