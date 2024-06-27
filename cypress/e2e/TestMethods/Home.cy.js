import HomePage from "../PageClasses/HomePage";
const homePage = new HomePage();

describe('Register to Speciality Appliances site', () => {
 it('Verify user should be able to Land to home page successfully', () => {
    HomePage.setUp();
  })
  
  it('Navigate to New Account URL & Proceed with Registration', () =>{
    homePage.registerPage();
  })  
  
    })

