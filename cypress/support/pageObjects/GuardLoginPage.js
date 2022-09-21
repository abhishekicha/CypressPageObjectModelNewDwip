class GuardLoginPage{

    getGuardLogin() {


        return cy.get(':nth-child(3) > .sub-menu > :nth-child(2) > .side-nav-link-ref')
    }

    getSearch() {


        return  cy.get('input[placeholder="Search by User Name"]')

    }

    getSearchText() {


        return  cy.get('tbody > tr > [aria-colindex="1"]')

    }
    getAppLogin() {


        return  cy.get('.addButton > span')

    }

    getSelectGuard() {


        return  cy.get('.v-select__selections')

    }

    getSelectGuardName() {


        return  cy.get('div[role ="listbox"] div:nth-child(2)')

    }

    getGateNumber() {


        return  cy.get(':nth-child(1) > :nth-child(2) > .v-input input')
    }

    getUseName() {


        return  cy.get('form > :nth-child(2) > :nth-child(1) > .v-input input')

    }

    getPassword() {
 

        return  cy.get(':nth-child(2) > :nth-child(2) > .v-input input')
    }


    getSubmit() {


        return  cy.get('[style="margin: 15px;"] > :nth-child(2) > .col-12 > .btn')
    }

    getDeleteUser() {


        return  cy.get(':nth-child(1) > [aria-colindex="6"] > .list-inline > :nth-child(2) > span > .px-2 > .uil')
    }

    geConfirmDelete() {


        return  cy.get('[data-index="0"]')
    }


}

export default GuardLoginPage;