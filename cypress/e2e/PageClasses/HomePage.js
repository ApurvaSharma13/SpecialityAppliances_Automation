class HomePage
{

    elements = {
           
       // newAccountButton : () => cy.get('.a[class='/btn secondary-cta/'] span'),
      //  txtNewAccounts   : () => cy.get('div[class='/banner-message/'] h1'),
        txtPageNoOne : () => cy.get('.gf_progressbar_title'),
        radioSingleLP : () => cy.get('#choice_5_1_0'),
        btnNextFirstPage : () => cy.get('#gform_next_button_5_4'),
        
        txtPageNoTwo : () => cy.get('.gf_progressbar_title'),
        radioMemberDSONO : () => cy.get('#label_5_5_1'),
        radioMemberPurchsingGroupNO : () => cy.get('#label_5_9_1'),
        btnNextSecondPage : () => cy.get('#gform_next_button_5_12') 
        

    }

    static setUp()
    {
        cy.fixture('testData').then((data)=>{
        cy.visit(data.url)
        cy.title().should('contains',data.PageTitle)
        })
        
    }

    registerPage(){

        cy.fixture('testData').then((data)=>{
        cy.visit(data.newAccountURL)
        cy.url().should('contains','new')

        //Page 1
        cy.wait(5000)
        cy.scrollTo(0,500)
        cy.wait(5000)
        this.elements.radioSingleLP().click()
        this.elements.btnNextFirstPage().click()
        
        //Page 2
        cy.wait(5000)
        cy.scrollTo(0,500)
        cy.wait(5000)
        cy.get('#label_5_5_1').click()
        cy.get('#gform_next_button_5_12').click()
        cy.get('#label_5_9_1').click()
        cy.get('#gform_next_button_5_12').click()

        //Page 3
        cy.wait(5000)
        cy.get('#input_5_45').type(data.practiceName)   //practice name 
        cy.get('#input_5_46_1').type(data.practiceAddress)  //address
        cy.get('#input_5_46_2').type(data.streetAddress) //street adderess
        cy.get('#input_5_46_3').type(data.otherAddress)
        cy.get('select').eq(0).select(data.state)
        cy.get('#input_5_46_5').type(data.city)
        cy.get('#input_5_47_3').type(data.firstName)  //fname
        cy.get('#input_5_47_6').type(data.lastName)  //lname
        cy.get('#input_5_48').type(data.role) //role
        cy.get('#input_5_49').type(data.email)
        cy.get('#input_5_50').type(data.contact)

        cy.scrollTo(0,500)
        cy.get('#gform_next_button_5_55').click()

        //Page 4
        cy.wait(5000)
        
        })
  
    }
  
}

export default HomePage;