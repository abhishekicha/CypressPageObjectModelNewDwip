class GuardprofilePage {

    getStaff() {

        return cy.get(':nth-child(3) > .is-parent')

    }
    getGuard() {
        return cy.get(':nth-child(3) > .sub-menu > :nth-child(1) > .side-nav-link-ref')
    }

    getSearch() {
        return cy.get('input[placeholder="Search by Guard Name"]')
    }

    getAddGuardsButton() {
        return cy.get('.addButton')
    }

    getFirstName() {
        return cy.get('form > :nth-child(1) > :nth-child(1)')
    }

    getLastName() {
        return cy.get(':nth-child(2) > .v-input')
    }
    getPhone() {
        return cy.get('form > :nth-child(2) > .col-12 > .v-input')
    }
    getSubmit() {
        return cy.get('.mt-2 > .col-12 > button')
    }

    getRearrangeButton() {
        return cy.get('.extraButton')
    }

    getGuardNameRemoveBtn() {
        return cy.get(':nth-child(1) > .row > .text-end > .removeBadge')

    }

    getGuardNameSubmit() {
        return cy.get('.col-xl-12 > .btn')

    }

    getGuardNameVisible() {
        return cy.get(':nth-child(2) > .row > .text-end > .toVisibleBadge')

    }

    
}



export default GuardprofilePage;