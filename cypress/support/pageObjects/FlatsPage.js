class Flatspage{

    getFlats(){

        return cy.get('.mm-active > .sub-menu > :nth-child(3) > .side-nav-link-ref')
    }

    getSearch(){

        return cy.get('[style="margin-top: -15px;"] > .col input')

    }

    getVerifySearchResults(){

        return cy.get('.tableRow > :nth-child(1) > [aria-colindex="2"]')
    }

    getVerifyFlatSearch(){

        return cy.get('.tableRow > :nth-child(1) > [aria-colindex="3"]')
    }

    getCreateFlat(){

        return  cy.get('.addButton')

    }

    getFlatNo(){

        return cy.get('.row.mt-2 > :nth-child(1) input')
    }

    getAreaInSqFt(){

        return cy.get('.row.mt-2 > :nth-child(2) input')
    }

    getSelectFlatOwner(){

        return cy.get('.row.mt-2 > .col > .v-input > .v-input__control > .v-input__slot')
    }

    getSelectFlatOwnername(){

        return cy.get('.v-list-item__title')

    }

    getSelectBlock(){

        return cy.get(':nth-child(4) > .v-input > .v-input__control > .v-input__slot')
    }

    getSelectBlockName(){

        return cy.get('.v-list-item__title')
    }


    getSelectFloor(){

        return cy.get('.floatButt3')
    }

    getSelectExtensionNumber(){

        return cy.get('.row.mt-2 > :nth-child(7) input')
    }

    getSelectUnderMaintainanceBilling(){

        return cy.get("input[type='checkbox']")
    }

    getSelectKey(){

        return cy.get('.material-input ')
    }

    getSelectSave(){

        return cy.get('.text-center > .btn')
    }
}

export default Flatspage;