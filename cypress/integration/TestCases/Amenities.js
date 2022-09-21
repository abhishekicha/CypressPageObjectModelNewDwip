/// <reference types="Cypress" />

import ComplainsPage from '../../support/pageObjects/ComplainsPage';

import AmenitiesPage from '../../support/pageObjects/AmenitiesPage';


describe('Amenities fuctionality', function () {

  const complainsPage = new ComplainsPage();

  const amenitiesPage = new AmenitiesPage();



  beforeEach(function () {

    cy.fixture('example').then(function (data) {

      this.data = data

      cy.login(this.data.email, this.data.password);

    })



  })

  it('Amenities Functionality', function () {

    //Serach Amenities Test

    complainsPage.getManageMent().click()

    cy.wait(2000);

    amenitiesPage.getAmenities().click()

     cy.wait(2000)

   amenitiesPage.getSearch().type('Abacus', {force: true})

   cy.wait(2000)

   amenitiesPage.getSearch().clear()

   cy.wait(2000)

    //Booking History Functionality

   amenitiesPage.getBookingHistory().click({force: true})

   cy.wait(2000)

   amenitiesPage.getAcceptedBooking().click({force: true})

   cy.wait(2000)

   amenitiesPage.getRejectedAmenitiesBooking().click({force: true})

   cy.wait(2000)

   amenitiesPage.getPastAmenitiesBooking().click({force: true})

   cy.wait(2000)

   amenitiesPage.getBackToAmentiesPage().click({force: true})

   cy.wait(2000)

   //Add new Amenities

   amenitiesPage.getAddNewAmenities().click({force: true})

   cy.wait(2000)

   amenitiesPage.getAddAminityName().eq(1).type('Newtest005', {force: true})

   cy.wait(2000)

   const p = 'download.png'

   amenitiesPage.getAddImage().attachFile(p)

   cy.wait(2000)

   amenitiesPage.getContactPerson().eq(2).type('test new', {force: true})

   cy.wait(2000)

   amenitiesPage.getContactNumber().eq(0).type('9874239816', {force: true})

   cy.wait(2000)

   amenitiesPage.getChargeType().check({force: true}).trigger('mousedown' ,{ eventConstructor: 'MouseEvent' }).scrollIntoView().last();

   cy.wait(2000)

   amenitiesPage.getLedgerType().eq(3).click({force: true}).type('Amenity Opening', {force: true})

   cy.wait(2000)

   amenitiesPage.getLedgerName().each(($e1, index, $list) => {

    if ($e1.text().trim(' ') === 'Amenity Opening') {

      cy.wrap($e1).click({ force: true })
    }
  })

   cy.wait(2000)

   amenitiesPage.getDescripton().type('test', {force: true})

   cy.wait(2000)

  amenitiesPage.getNextStep().click({force: true})

  cy.wait(2000)

  amenitiesPage.getDailyType().eq(18).check({force: true})

  cy.wait(2000)

  amenitiesPage.getForPurpose().eq(20).check({force: true})

  cy.wait(2000)

  amenitiesPage.getAmount().eq(4).type('4000', {force: true})

  cy.wait(2000)

  amenitiesPage.getAvailableDays().eq(5).click({force: true})
  
  cy.wait(2000)

  
  amenitiesPage.getDaysName().each(($e1, index, $list) => {

    if ($e1.text().trim(' ') === 'Sunday') {

      cy.wrap($e1).click({ force: true })
    }
  })

  cy.wait(2000)

  amenitiesPage.getTax().eq(6).click({force: true})

  amenitiesPage.getTaxName().each(($e1, index, $list) => {

    if ($e1.text().trim(' ') === 'IGST5') {

      cy.wrap($e1).click({ force: true })
    }
  })

 amenitiesPage.getPayWithin().eq(2).type('2', {force: true})

 cy.wait(2000)

 amenitiesPage.getSave().click({force: true})

 cy.wait(2000)

//edit amenities

amenitiesPage.getEditAmenities().click({force: true})

cy.wait(2000)

amenitiesPage.getCloseAmenities().click({force: true})

cy.wait(2000)

//getActiveInactive

amenitiesPage.getActiveInActive().click({force: true})

cy.wait(2000)

amenitiesPage.getActiveInactiveYesNo().click({force: true})

cy.wait(2000)

amenitiesPage.getActiveInActive().click({force: true})

cy.wait(2000)

amenitiesPage.getActiveInactiveYesNo().click({force: true})

cy.wait(2000)

//getAmenityDetails

amenitiesPage.getAmenityDetails().click({force: true})

cy.wait(2000)

amenitiesPage.getAmenityname().trigger('mousedown' ,{ eventConstructor: 'MouseEvent' }).scrollIntoView({ easing: 'linear'}).last();

cy.wait(2000)

amenitiesPage.getCloseAmenities().click({force: true})

cy.wait(2000)





    
});


});