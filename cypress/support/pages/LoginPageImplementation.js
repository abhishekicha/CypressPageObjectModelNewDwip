import LoginPage from "../pageObjects/LoginPage";

class LoginPageImplementation{

    getUrl(){

        const baseUrl = Cypress.env('baseUrl')

        cy.visit(baseUrl, {
            onBeforeLoad (win) {
      
            cy.stub(win.Notification, 'requestPermission').resolves('denied')
            },
          })

        
    }

    enterEmail(){


       return LoginPage.getEmail().type('debubhowmik61@gmail.com').invoke('attr', 'type').should('contain', 'email')

    }

    enterWrongEmail(){


        return LoginPage.getEmail().type('abhi@gmail.com').invoke('attr', 'type').should('contain', 'email')
 
     }



    exception()
    {
        return LoginPage.getException()
    }

    enterPassword()
    {

        return LoginPage.getPassword().type('123456').invoke('attr', 'type').should('contain', 'password')
    }

    enterWrongPassword()
    {

        return LoginPage.getPassword().type('1456').invoke('attr', 'type').should('contain', 'password')
    }

    submitButton()
    {
        return LoginPage.getSubmitButton().should('be.visible').click()
    }

    alert(){

      
        return  LoginPage.getAlert().click()

    }

    launchDevServer()
    {
        return LoginPage.getLaunchDevServer().should('contain', 'Launch').click()
    }
}

export default new LoginPageImplementation;