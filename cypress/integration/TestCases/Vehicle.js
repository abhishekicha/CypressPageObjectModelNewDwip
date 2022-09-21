/// <reference types="Cypress" />

import FlatOwnersPage from '../../support/pageObjects/FlatOwnersPage';

import VehiclePage from '../../support/pageObjects/VehiclePage';


describe('Flats fuctionality', function () {

  const flatOwnersPage = new FlatOwnersPage();

  const vehiclePage = new VehiclePage();



  beforeEach(function () {

    cy.fixture('example').then(function (data) {

      this.data = data

      cy.login(this.data.email, this.data.password);

    })


  })

  it('Vehicle Functionality', function () {

    //vehicle search

    flatOwnersPage.getProperty().click()

    cy.wait(2000);

    vehiclePage.getVehicle().click()

    cy.wait(2000)

    vehiclePage.getSearch().type('WB51A1997', {force: true})

    cy.wait(2000)

    vehiclePage.getVerifySearch().should('contain', 'WB51A1997')

    cy.wait(2000)

    vehiclePage.getSearch().clear()

    cy.wait(2000)

    //vehicle Report Download

    vehiclePage.getDownloadVehicleReport().click({force: true})

    cy.wait(2000)

    //Add Vehicles

    vehiclePage.getAddVehicles().click({force: true})

    cy.wait(2000)

    vehiclePage.getVehicleType().eq(0).click({force: true})

    cy.wait(2000)

    vehiclePage.getVehicleTypeName().eq(0).click({force: true})

    cy.wait(2000)

    vehiclePage.getVehicleNumber().eq(2).type('WMR-9049', {force: true})

    cy.wait(2000)

    vehiclePage.getVehicleOwner().eq(1).click({force: true})

    cy.wait(2000)

    vehiclePage.getVehicleOwnerName().eq(8).click({force: true})

    cy.wait(2000)

    vehiclePage.getSubmit().click({force: true})

    cy.wait(2000)



   
  });



});