class AmenitiesPage{

    getAmenities(){

        return cy.get('.mm-active > .sub-menu > :nth-child(8) > .side-nav-link-ref')
    }

    getSearch(){

        return cy.get('.v-input input')
    }

    getBookingHistory(){

        return cy.get('.text-end > :nth-child(1)')
    }

    getAcceptedBooking(){

        return cy.contains('Accepted Amenitiy Bookings')
    }

    getRejectedAmenitiesBooking(){

        return cy.contains('Rejected Amenitiy Bookings')
    }

    getPastAmenitiesBooking(){

        return cy.contains('Past Amenitiy Bookings')
    }

    getBackToAmentiesPage(){

        return cy.get('.nuxt-link-active > .fa')
    }

    getAddNewAmenities(){

        return cy.get('.text-end > :nth-child(2)')
    }

    getAddAminityName(){

        return cy.get('input[type="text"]')
    }

    getAddImage(){

        return cy.get('input[type="file"]')
    }

    getContactPerson(){

        return cy.get('input[type="text"]')
    }

    getContactNumber(){

        return cy.get('input[type="number"]')
    }

    getChargeType(){

        return cy.get('input[value="DAILY"]')
    }

    getLedgerType(){

        return cy.get('input[type="text"]')
    }

    getLedgerName(){

        return cy.get('.v-list-item__mask')
    }

    getDescripton(){

        return cy.get('.material-input')
    }

    getNextStep(){

        return cy.get(':nth-child(6) > .text-center > .btn')
    }

    getDailyType(){

        return cy.get('input[type="radio"]')
    }

    getForPurpose(){

        return cy.get('input[type="radio"]')
    }

    getAmount(){

        return cy.get('input[type="text"]')
    }

    getAvailableDays(){

        return  cy.get('input[type="text"]')
    }

    getDaysName(){

        return cy.get('.v-list-item__title')
    }

    getTax(){

        return cy.get('input[type="text"]')
    }

    getTaxName(){

        return cy.get('.v-list-item__title')
    }

    getPayWithin(){

        return cy.get('input[type="number"]')
    }

    getSave(){

       return cy.contains('SAVE')
    }

    getEditAmenities(){

        return cy.get(':nth-child(1) > [aria-colindex="8"] > .list-inline > :nth-child(1) > .px-1 > .uil')
    }

    getCloseAmenities(){

        return cy.get('.closeButton > .far')
    }

    getActiveInActive(){

        return cy.get(':nth-child(1) > [aria-colindex="8"] > .list-inline > :nth-child(2) > .px-1 > .uil')
    }

    getActiveInactiveYesNo(){

        return cy.contains('Yes!')
    }

    getAmenityDetails(){

        return cy.get(':nth-child(1) > [aria-colindex="8"] > .list-inline > :nth-child(3) > .px-1 > .uil')
    }

    getAmenityname(){

        return cy.get('h1')
    }

    getCloseAminityDetails(){

        return cy.get('.closeButton > .far')
    }
}

export default AmenitiesPage;