class LogoutPage{

    getProfile(){

        return cy.get('.dropbtn')
    }

    getLogout(){

        return cy.contains('Logout')
    }

}

export default LogoutPage;