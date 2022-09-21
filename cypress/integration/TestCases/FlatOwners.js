/// <reference types="Cypress" />

import FlatOwnersPage from '../../support/pageObjects/FlatOwnersPage';


describe('Flatowners fuctionality', function () {

  const flatOwnersPage = new FlatOwnersPage();


  beforeEach(function () {

    cy.fixture('example').then(function (data) {

      this.data = data

      cy.login(this.data.email, this.data.password);

    })


  })

  it('Flatowners', function () {

    flatOwnersPage.getProperty().click()

    cy.wait(2000);

    flatOwnersPage.getFlatOwners().click()

    cy.wait(2000)

    flatOwnersPage.getSearch().type('Suraj', { force: true })

    cy.wait(2000)

    flatOwnersPage.getVerifySearch().eq(0).should('contain', 'Suraj')

    cy.wait(2000)

    //flat owners search clear

    flatOwnersPage.getSearch().clear()

    cy.wait(2000)

    flatOwnersPage.getSearch().type('8535887747', { force: true })

    flatOwnersPage.getVerifyPhoneSearch().eq(0).should('contain', '8535887747')

    cy.wait(2000)

    flatOwnersPage.getSearch().clear()

    cy.wait(2000)

    flatOwnersPage.getSearch().type('biswassuraj01@yopmail.com', { force: true })

    cy.wait(2000)

    flatOwnersPage.getVerifyMailSearch().eq(0).should('contain', 'biswassuraj01@yopmail.com')

    cy.wait(2000)

    flatOwnersPage.getEdit().click()

    cy.wait(2000)

    flatOwnersPage.getEditClose().click()

    cy.wait(2000)

    flatOwnersPage.getBuggyPage().click()

    cy.wait(2000)

    cy.go('back')

    cy.wait(2000)

    flatOwnersPage.getRequestedUsers().click({ force: true })

    cy.wait(2000)

    flatOwnersPage.getAllUsers().click({ force: true })

    cy.wait(2000)

    flatOwnersPage.getAllUsersSearch().eq(2).type('Soumya', { force: true })

    cy.wait(2000)

    flatOwnersPage.getVerifyAllUsersSearchData().should('contain', 'Soumya')

    cy.wait(2000)

    flatOwnersPage.getAllUsersSearch().eq(2).clear()

    cy.wait(2000)


  });

});