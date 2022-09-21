class BroadcastPage{

    getBroadCast(){

        return cy.get('.mm-active > .sub-menu > :nth-child(4) > .side-nav-link-ref')

    }

    getSearch(){

        return cy.get('input[placeholder="Search by Broadcast Subject"]')

    }

    getVerifySearch(){

        return  cy.get('[aria-rowindex="1"] > [aria-colindex="1"]')

    }

    getVerifyOwnerSearch(){

        return cy.get('.tableRow > tr > [aria-colindex="3"]')

    }

    getTop(){

        return cy.get('[style="margin-bottom: -20px !important;"] > .text-end')
    }

    getFilter(){

        return cy.get('[title="Filter"]')
    }

    getInput(){

        return  cy.get('input[type="text"]')

    }

    getInputType(){

        return cy.get('.multiselect__element span')
    }

    getApply(){

        return cy.contains('Apply')
    }

    getCreateBroadcast(){

        return cy.contains('Create Broadcast')
    }

    getOwners(){

        return cy.get('input[value="OWNER"]')
    }

    getPriority(){

        return cy.get('input[value="HIGH"]')
    }

    getReplyTo(){

        return cy.contains('Reply To')
    }

    getReplyToName(){

        return cy.get('.v-list-item__title')
    }

    getSubject(){

        return cy.get('input[type="text"]')
    }

    getImage(){

        return cy.get('input[type="file"]')
    }

    getEmailBody(){

        return cy.get('.ck-blurred')
    }

    getCreateEmailBroadCast(){

        return cy.get(':nth-child(4) > .text-center > .btn')
    }

    getNotificationBroadcast(){

        return cy.contains('Notification Broadcast')
    }

    getRecipientType(){

        return cy.get('input[value="ALL"]')
    }

    getPriorityNotification(){

        return cy.get('input[type="radio"]')
    }

    getNotificationBody(){

        return cy.get('.material-input')
    }

    getCreateNotificationBroadcast(){

        return cy.get(':nth-child(5) > .text-center > .btn')
    }
}

export default BroadcastPage;