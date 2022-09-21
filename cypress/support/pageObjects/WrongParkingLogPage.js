class WrongParkingLogPage{

    getWrongParkingLog(){

        return cy.get('.mm-active > .sub-menu > :nth-child(4) > .side-nav-link-ref')
    }

    getSearch(){

        return cy.get('input[placeholder="Search by Wrong Parking Number"]')
    }

    getVerifySearch(){

        return cy.get('.tableRow > tr > [aria-colindex="1"]')
    }

    getVerifyVehicleOwnerType(){

        return cy.get('[aria-rowindex="1"] > [aria-colindex="4"]')
    }

    getFilter(){

        return cy.get('[title="Filter"]')
    }

    getDate(){

        return cy.get('input[name="date"]')
    }

    getFilterSubmit(){

        return cy.get('.addButton')
    }

    getFilterReset(){

        return cy.get('.resetButton')
    }

    getClickOutside(){

        return cy.get(':nth-child(1) > .form-group > label')
    }


}

export default WrongParkingLogPage;