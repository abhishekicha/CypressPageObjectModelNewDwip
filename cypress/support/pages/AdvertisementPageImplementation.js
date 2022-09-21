import AdvertisementPage from "../pageObjects/AdvertisementPage";

import ComplainsPage from "../pageObjects/ComplainsPage";

class LoginPageImplementation{


    management(){

        ComplainsPage.getManageMent().click()

        cy.wait(2000);

    }

    advertisement(){

        AdvertisementPage.getAdvertisement().click()

        cy.wait(2000);


    }

    search(){

        AdvertisementPage.getSearch().type('Test', { force: true })

        cy.wait(2000)
    }

    verifySearchResults(){

        AdvertisementPage.getVerifySearchResult().should('contain', 'Test')

        cy.wait(2000)
    }

    clearSearch(){

        AdvertisementPage.getSearch().clear({ force: true })

        cy.wait(2000)
    }

    setOrder(){

    cy.log('Set Order Test')

    AdvertisementPage.getSetOrder().click({ force: true })

    cy.wait(2000)

    AdvertisementPage.getFirstElementToDrop().drag(AdvertisementPage.getDropPlace())

    cy.wait(2000)

    AdvertisementPage.getSubmit().click()

    cy.wait(2000)

    }

    AddNewAdvertisement(){

    cy.log('Add New Advertisement Test')

    const p = 'profile.png'

    AdvertisementPage.getAddNewAddNewAdvertisement().click({ force: true })

    cy.wait(2000)

    AdvertisementPage.getAdvertisementTitle().eq(1).type('Test1012')

    cy.wait(2000)

    AdvertisementPage.getImage().attachFile(p,
      {
        subjectType: 'drag-n-drop', events: ['dragenter', 'drop']
      })

    cy.wait(2000)

    AdvertisementPage.getCropImageButton().click({ force: true })

    cy.wait(2000)

    AdvertisementPage.getCroppedImageSubmit().click({ force: true })

    cy.wait(2000)

    AdvertisementPage.getSubmitImage().click({force: true}).should('be.visible')

    cy.log('Advertisement submitted When Clicking On submit the image')

    cy.wait(2000)

    AdvertisementPage.getSubmitAdvertisement().click({ force: true }).should('be.visible')

    cy.wait(2000)

    }
}

export default new LoginPageImplementation;