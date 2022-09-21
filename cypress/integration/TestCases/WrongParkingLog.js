/// <reference types="Cypress" />

import WrongParkingLogPage from '../../support/pageObjects/WrongParkingLogPage';

import RegularVisitorsLogPage from '../../support/pageObjects/RegularVisitorsLogPage';


describe('Wrong Parking Logs fuctionality', function(){

    const wrongParkingLogPage = new WrongParkingLogPage();

    const regularVisitorsLogPage = new RegularVisitorsLogPage();


    
    beforeEach(function() {

        cy.fixture('example').then(function(data){

           this.data = data

           cy.login(this.data.email, this.data.password);

        })
        

      })



      it('Wrong Parking Logs', function(){
  
        regularVisitorsLogPage.getLogs().click()
  
        cy.wait(2000);

        wrongParkingLogPage.getWrongParkingLog().click({force: true})

        cy.wait(2000);

        //filter functionality

        wrongParkingLogPage.getFilter().click()

        cy.wait(2000);

        //present day's date should appear after filter button click

        const dayjs = require('dayjs')
       
        wrongParkingLogPage.getDate().each(($ele, index) => {
            if (index === 2) {
      
              cy.wrap($ele).click().type('2022-08-10', { force: true })

              wrongParkingLogPage.getClickOutside().click()

            } else if(index === 3) {
                    
              cy.wrap($ele).click().type('2022-08-23', { force: true })

              wrongParkingLogPage.getClickOutside().click()
      
            }
      
          })
      

          wrongParkingLogPage.getFilterSubmit().click({force: true})

          cy.wait(2000)


      //search functionality

       wrongParkingLogPage.getSearch().type('7890', {force: true})

        cy.wait(2000);

        wrongParkingLogPage.getVerifySearch().should('contain', '7890' )

        cy.wait(2000);

        wrongParkingLogPage.getSearch().clear()

        cy.wait(2000);

        wrongParkingLogPage.getSearch().type('VISITOR')

        cy.wait(2000);

        wrongParkingLogPage.getVerifyVehicleOwnerType().should('contain', 'VISITOR')

        cy.wait(2000);

        wrongParkingLogPage.getSearch().clear()

        cy.wait(2000);

        wrongParkingLogPage.getSearch().type('RESIDENT')

        cy.wait(2000);

        wrongParkingLogPage.getVerifyVehicleOwnerType().should('contain', 'RESIDENT')

        cy.wait(2000);

        wrongParkingLogPage.getSearch().clear()

        cy.wait(2000);


        // Filter Reset

         wrongParkingLogPage.getFilter().click()

          cy.wait(2000)

          wrongParkingLogPage.getFilterReset().click({force: true})

          cy.wait(2000)

          
          //present day's date should appear after reset

          wrongParkingLogPage.getDate().invoke('val').then((text) => {

            expect(dayjs().format('YYYY-MM-DD')).to.equal(text);
        });

         
    });

});