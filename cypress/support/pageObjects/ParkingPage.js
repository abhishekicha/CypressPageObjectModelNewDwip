class ParkingPage{

    getParking(){

        return cy.get('.mm-active > .sub-menu > :nth-child(6) > .side-nav-link-ref')
    }

    getAddParkingSpace(){
        
        return cy.get('.addButton')
    }

    getSelectUnits(){

        return cy.get('input[type="text"]')
    }

    getSelectUnitsName(){

        return cy.get(".v-list-item__title")
    }

    getSelectAddSpace(){

        return cy.get('.pb-3 > .btn')
    }

    getParkingSpaceName(){

        return cy.get('.col-lg-10 > .v-input input')
    }

    getSaveButton(){

        return cy.get('.col > .addButton')
    }

    getFilter(){

        return cy.get('.text-end > :nth-child(1) > .btn')
    }

    getSelectFilterType(){

        return cy.get('input[required="required"]')
    }

    getSelectFilterTypeName(){

        return cy.get('.v-list-item__content .v-list-item__title')
    }

    getSelectFlat(){

        return cy.get('input[required="required"]')
    }

    getSelectFlatName(){

        return cy.get(".v-list-item__content")
    }

    getFilterByName(){

        return cy.get('.text-center > .addButton')
    }

    getReset(){

        return cy.get('.resetButton')
    }

    
}

export default ParkingPage;