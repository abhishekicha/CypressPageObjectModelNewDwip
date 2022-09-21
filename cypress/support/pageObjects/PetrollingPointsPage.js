class PetrollingPointsPage{

    getPetrollinPointsTab() {

        return cy.get(':nth-child(3) > .sub-menu > :nth-child(6) > .side-nav-link-ref')
    }
    getSearch() {

        return cy.get('input[placeholder="Search by Checkpoint Name"]')
    }

    getAddCheckpoint() {

        return cy.get('.addButton')
    }

    getCheckPointAddName() {

        return cy.get(':nth-child(1) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot input')
    }

    getCheckpointArea() {

        return cy.get('form > :nth-child(1) > :nth-child(2) input')
    }

    getCheckpointLatitude() {

        return cy.get('form > :nth-child(2) > :nth-child(1) input')
    }

    getCheckpointLongitude() {

        return cy.get(':nth-child(2) > :nth-child(2) > .v-input input')
    }

    getSubmit() {

        return cy.get('[style="margin: 15px;"] > :nth-child(2) > .col-12 > button')
    }


}

export default PetrollingPointsPage;