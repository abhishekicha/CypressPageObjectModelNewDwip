class TechnicianPage{

    getTechnician(){

        return cy.get('.mm-active > .sub-menu > :nth-child(3) > .side-nav-link-ref')
    }

    getAddTechnician(){

        return cy.get('.addButton')
    }

    getNumber(){

        return cy.get("input[type='number']")
    }

    getNext(){

        return  cy.contains('NEXT')
    }

    getTechnicianName(){

        return cy.get('input[type="text"]')
    }

    getSelectDepartment(){

        return cy.get('input[required="required"]')
    }

    getDepartmentName(){

        return cy.get('.v-list-item__title')
    }

    getOtp(){

        return cy.get('input[type="number"]')
    }

    getSave(){

      return  cy.contains('Save')
    }


}

export default TechnicianPage;