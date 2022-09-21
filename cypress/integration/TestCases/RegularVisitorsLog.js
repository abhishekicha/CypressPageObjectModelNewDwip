/// <reference types="Cypress" />


import RegularVisitorsLogPage from '../../support/pageObjects/RegularVisitorsLogPage';


describe('Regular visitors Log fuctionality', function () {


    const regularVisitorsLogPage = new RegularVisitorsLogPage();

    beforeEach(function () {

        cy.fixture('example').then(function (data) {

            this.data = data

            cy.login(this.data.email, this.data.password);

        })


    })

    it('Regular Visitors Log ', function () {

        //Regular Visitors Log Filter

        regularVisitorsLogPage.getLogs().click()

        regularVisitorsLogPage.getRegularVisitorsLogs().click()

        cy.wait(2000);

        regularVisitorsLogPage.getFilter().click()

        cy.wait(2000)


        regularVisitorsLogPage.getDate().each(($ele, index) => {
            if (index === 0) {

                cy.wrap($ele).click().type('2022-01-07', { force: true })

                regularVisitorsLogPage.getClickOutSide().click()


            } else {

                cy.wrap($ele).click().type('2022-07-20', { force: true })

                regularVisitorsLogPage.getClickOutSide().click()


            }

        })

        regularVisitorsLogPage.getFilter().click({ force: true })


        regularVisitorsLogPage.getCategories().click()

        regularVisitorsLogPage.getCategoriesSelectOption().contains('Driver').click()

        regularVisitorsLogPage.getFilterSubmit().click()

        cy.wait(2000)

        regularVisitorsLogPage.getFilter().click({ force: true })

        cy.wait(2000)

        regularVisitorsLogPage.getIsInside().eq(1).click({ force: true })

        cy.wait(2000)

        regularVisitorsLogPage.getFilterSubmit().click({ force: true })

        cy.wait(2000)

        regularVisitorsLogPage.getFilter().click({ force: true })

        cy.wait(2000)

        regularVisitorsLogPage.geResetFilter().click()

        cy.wait(2000)

        regularVisitorsLogPage.getFilter().click({ force: true })

        cy.wait(2000)

        //Regular Visitors Log Filter With Negative Values


        regularVisitorsLogPage.getFilter().click()

        cy.wait(2000)


        regularVisitorsLogPage.getDate().each(($ele, index) => {
            if (index === 0) {

                cy.wrap($ele).click().type('2025-01-07', { force: true })

                regularVisitorsLogPage.getClickOutSide().click()



            } else {

                cy.wrap($ele).click().type('2019-07-20', { force: true })

                regularVisitorsLogPage.getClickOutSide().click()


            }

        })


        regularVisitorsLogPage.getCategories().click()

        regularVisitorsLogPage.getCategoriesSelectOption().contains('Driver').click()

        regularVisitorsLogPage.getFilterSubmit().click()

        cy.wait(2000)


    });


});