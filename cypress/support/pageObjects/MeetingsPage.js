class MeetingsPage{

    getMeetingsTab(){

        return cy.get('.mm-active > .sub-menu > :nth-child(7) > .side-nav-link-ref')
    }

    getSearch(){

        return cy.get('[style="margin-top: -10px;"] > :nth-child(1) input')
    }

    getVerifySearchData(){

        return cy.get('.tableRow > :nth-child(1) > [aria-colindex="1"]')
    }

    getAddMeetingButton(){

        return cy.get('.addButton')
    }

    getTopic(){

        return cy.get('[style="margin: 10px;"] > :nth-child(1) > .mb-2 input')

    }

    getDate(){

        return cy.get("input[type='date']")
    }

    getTime(){
        return cy.get("input[type='time']")
    }

    getDuration(){

        return cy.get(':nth-child(2) > .mb-2 input')

    }

    getVenue(){

        return cy.get('[style="margin: 10px;"] > :nth-child(2) > :nth-child(2) input')
    }

    getNotes(){

        return cy.get("textarea[required='required']")
    }

    getAgenda(){

        return cy.get('.form-control')
    }

    getSubmit(){

        return cy.get('.text-center > button')
    }
}

export default MeetingsPage;