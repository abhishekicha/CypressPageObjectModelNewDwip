class VehiclePage{

    getVehicle(){

      return  cy.get(':nth-child(2) > .sub-menu > :nth-child(5) > .side-nav-link-ref')
    }

    getSearch(){

        return cy.get('input[type="text"]')
    }

    getVerifySearch(){

        return cy.get('.tableRow > tr > [aria-colindex="1"]')
    }

    getDownloadVehicleReport(){

        return cy.get('.text-end > :nth-child(2) > .btn > .uil')
    }

    getAddVehicles(){

        return cy.get('.addButton')
    }

    getVehicleType(){

        return cy.get('input[required="required"]')
    }

    getVehicleTypeName(){

        return cy.get('.v-list-item__title')
    }

    getVehicleNumber(){
        
        return cy.get('input[type="text"]')
    }

    getVehicleOwner(){

        return cy.get('input[required="required"]')
    }

    getVehicleOwnerName(){
        return cy.get('.v-list-item__content .v-list-item__title')
    }

    getSubmit(){

      return  cy.contains('Submit')
    }
}

export default VehiclePage;