class RegularVisitorPage
{

    getRegularVisitorTab() {

        return cy.get(':nth-child(3) > .sub-menu > :nth-child(4) > .side-nav-link-ref')
    }

    getSearch() {

        return cy.get('input[placeholder="Search by Field name"]')
    }

    getVisitorsDetails() {

        return cy.get('.tableRow > :nth-child(1) > [aria-colindex="2"]')
    }

    getCloseVisitorsDetails() {

        return cy.get('.col-lg-4 > .closeButton > .far')
    }

    getFilterButton() {

        return cy.get('[title="Filter"]')
    }

    getFilterSearch() {

        return cy.get('input[placeholder="Category"]')
    }

    getEnter(){
        return cy.contains('Alaska')
    }

    getFilter() {

        return cy.contains('Apply')
    }

    getFilterCategory() {

        return cy.get('.v-select__selections')
    }
    getFilterCategoryFilter() {

        return cy.get("div[role='listbox']")
    }

}

export default RegularVisitorPage;