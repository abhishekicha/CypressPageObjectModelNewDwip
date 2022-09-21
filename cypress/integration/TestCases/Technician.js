/// <reference types="Cypress" />

import GuardprofilePage from '../../support/pageObjects/GuardprofilePage';

import TechnicianPage from '../../support/pageObjects/TechnicianPage'


describe('Technician fuctionality', function () {

  const guardPage = new GuardprofilePage()

  const technicianPage = new TechnicianPage()


  beforeEach(function () {

    cy.fixture('example').then(function (data) {

      this.data = data

      cy.login(this.data.email, this.data.password);

    })


  })



  it('Technician Functionality', function () {

    //Add Technician

    guardPage.getStaff().click()

    technicianPage.getTechnician().click()

    cy.wait(2000)

    technicianPage.getAddTechnician().click()

    cy.wait(2000)

    technicianPage.getNumber().type('8443855089')

    cy.wait(2000)

    technicianPage.getNext().click()

    cy.wait(2000)

    technicianPage.getTechnicianName().eq(1).type('TesTech')

    cy.wait(2000)

    technicianPage.getSelectDepartment().click()

    cy.wait(2000)

    technicianPage.getDepartmentName().each(($e1, index, $list) => {

        if ($e1.text().trim(' ') === 'Electricity') {
  
          cy.wrap($e1).click({ force: true })
        }
      })

    cy.wait(2000)

    technicianPage.getOtp().type('583522').clear()

    cy.wait(15000)

    technicianPage.getSave().click()
  });


});







