class PetrollingRoutesPage {

    getPetrollinRoutesTab() {

        return cy.get('.mm-active > .sub-menu > :nth-child(7) > .side-nav-link-ref')
    }

    getSearch() {

        return cy.get('input[placeholder="Search by Route Name"]')
    }

    getAddButton() {

        return cy.get('.addButton')
    }

    getRouteName() {

        return cy.get('.col-16 > .v-input > .v-input__control > .v-input__slot input')
    }

    getTime() {

        return cy.get("input[type='time']")
    }

    getRouteFrequency() {

        return cy.get(':nth-child(1) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections')
    }

    getRouteFrequencyValue(){
        return cy.get("div[role='option']")
    }

    getRouteDuration(){
        return cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections')
    }

    getRouteDurationValue(){
        return cy.get("div[role='option']")
    }

    getAssignCheckPoints(){
        return cy.get('.col-xl-2 > :nth-child(1) ')
    }

    getSubmit(){
        return cy.get('[style="margin: 15px;"] > :nth-child(2) > .col-12 > .btn ')
    }

    


}

export default PetrollingRoutesPage;