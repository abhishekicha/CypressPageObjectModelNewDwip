class VehicleLogPage {

    getVehicleLogs() {

        return cy.get('.mm-active > .sub-menu > :nth-child(3) > .side-nav-link-ref');
    }

    getFilter() {

        return cy.get('.text-end > .btn')
    }

    getDate() {

        return cy.get("input[name='date']");
    }

    getFilterSubmit() {

        return cy.get('.addButton');
    }

    getSearch() {

        return cy.get('input[placeholder="Search by Vehicle Number"]')
    }

    getVerifySearch() {

        return cy.get('[aria-rowindex="1"] > [aria-colindex="6"]')
    }

    getValidateResultText() {

        return cy.get('[role="alert"] > .text-center')
    }

    getReset() {

        return cy.get('.resetButton');
    }

    getClickOutide(){

        return cy.get(':nth-child(1) > .form-group > label')
    }

    getCloseFilter(){

        return cy.get('.closeButton > .far')
    }

}

export default VehicleLogPage;