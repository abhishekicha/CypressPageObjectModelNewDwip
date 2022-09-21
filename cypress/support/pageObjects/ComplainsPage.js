class ComplainsPage{

    getManageMent(){

      return  cy.get(':nth-child(5) > .is-parent')
    }

    getComplains(){

        return  cy.get('.mm-active > .sub-menu > :nth-child(2) > .side-nav-link-ref')
      }

    getSearch(){

        return cy.get('input[placeholder="Search by Complain Title"]')
    }

    getVerifySearchResults(){

        return cy.get('.tableRow > :nth-child(1) > [aria-colindex="2"]')
    }

    getFilter(){

        return cy.get('.text-end > .collapsed')
    }

    getFilterField(){

        return cy.get('input[type="text"]')
    }

    getSearchByStatus(){

        return cy.get('.multiselect__element span span')
    }

    getOptions(){

        return cy.get('.multiselect__element span span')
    }

    getApply(){

        return cy.contains('Apply')
    }

    getCloseFilter(){

        return cy.get('.closeButton i')
    }

    getAddComplain(){

        return cy.contains('Add Complain')

    }

    getAddComplaintCategory(){

        return cy.contains('Complain Category')

    }

    getAddComplainOptions(){

        return cy.get('.v-list-item__content .v-list-item__title')
    }

   getSelectUnit(){

    return cy.contains('Select Unit')

   }

   getComplainTitle(){

    return cy.get('input[type="text"]')
   }

   getComplainDescription(){


        return cy.get('.material-input')

   }

   getForAllUsers(){

    return cy.get('input[type="checkbox"]')

   }

   getSubmit(){

    return cy.contains('Submit')

   }
}

export default new ComplainsPage;