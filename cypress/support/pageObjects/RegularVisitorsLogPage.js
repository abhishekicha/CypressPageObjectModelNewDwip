class RegularVisitorsLogPage{

    getLogs() {

        return cy.get(':nth-child(4) > .is-parent');
    }

    getRegularVisitorsLogs() {

        return cy.contains('Regular Visitor Log')
    }

    getFilter() {

        return cy.get('[title="Filter"]')
    }

    getDate() {

        return cy.get("input[name='date']")
    }

    getCategories() {

        return cy.get('.v-select__selections input')
    }

    getCategoriesSelectOption() {

        return cy.get("div[role='option']")
    }

    getFilterSubmit() {

        return  cy.get('.addButton > .uil')
    }

    getIsInside() {

        return cy.get('#customSwitchsizemd ')
    }

    geResetFilter() {

        return cy.get('.resetButton')
    }

    getClickOutSide(){

        return cy.get(':nth-child(3) > .form-group > label')
    }


}

export default RegularVisitorsLogPage;