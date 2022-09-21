/// <reference types="Cypress" />

import FlatOwnersPage from '../../support/pageObjects/FlatOwnersPage';

import ParkingPage from '../../support/pageObjects/ParkingPage';




describe('Parking Space fuctionality', function () {

    const flatOwnersPage = new FlatOwnersPage();

    const parkingPage = new ParkingPage();



    beforeEach(function () {

        cy.fixture('example').then(function (data) {

            this.data = data

            cy.login(this.data.email, this.data.password);

        })


    })
    it('Parking Space', function () {

        // Add Parking Space Module

        flatOwnersPage.getProperty().click({ force: true })

        cy.wait(2000);

        parkingPage.getParking().click({ force: true })

        cy.wait(2000)

        parkingPage.getAddParkingSpace().click({ force: true })

        cy.wait(2000)

        parkingPage.getSelectUnits().click({ force: true })

        cy.wait(2000)

        parkingPage.getSelectUnitsName().each(($e1, index, $list) => {

            if ($e1.text().trim(' ') === 'Aspen-1A') {

                cy.wrap($e1).click({ force: true })
            }
        })

        cy.wait(2000)

        parkingPage.getSelectAddSpace().click({ force: true })

        cy.wait(2000)

        parkingPage.getParkingSpaceName().type('Parking03', { force: true })

        cy.wait(2000)

        parkingPage.getSaveButton().click({ force: true })

        cy.wait(2000)

        //Parking Space Filter Button


        parkingPage.getFilter().click({ force: true })

        cy.wait(2000)

        parkingPage.getSelectFilterType().click({ force: true })

        cy.wait(2000)

        //parking list filter using for loop 

        parkingPage.getSelectFilterTypeName().each(($ele, index) => {
            if (index === 0) {

                cy.wrap($ele).click({force: true})

                parkingPage.getSelectFlat().eq(1).click({ force: true })

                parkingPage.getSelectFlatName().each(($e1, index, $list) => {

                    if ($e1.text().trim(' ') === 'Aspen-1A') {

                        cy.wrap($e1).click({ force: true })

                    }

                })
                parkingPage.getFilterByName().click({ force: true })

                cy.wait(2000)

                parkingPage.getReset().click({ force: true })

                cy.wait(2000)

             } 

             
             
        })

    });


});

