class LoginPage

{
   

    getEmail(){

        return   cy.get("input[type='email']")
    
        }
     getException(){

    return    Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
           
    }

    getPassword(){

      return  cy.get(" input[type='password']")
    
        }
    getSubmitButton(){

    return  cy.get("button[type='submit']")

    
        }
     getAlert(){

            return  cy.get('.spring_falling__message_box_btn')

            
                }
   
     getLaunchDevServer(){
    
        return   cy.get(':nth-child(1) > .card > .card-body > .row > .col-lg-4 > .btn')

               
              }    
        
    
}

export default new LoginPage;