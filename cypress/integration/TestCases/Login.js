/// <reference types="Cypress" />

import LoginSpecService from "../Services/LoginSpecService";

describe('Notice fuctionality', function () {

    it('Open The 360',LoginSpecService.init)
    it('Login as User',LoginSpecService.LoginAsUser) 
    it('Open The 360',LoginSpecService.init) 
    it('Login wrong Email', LoginSpecService.LoginWrongEmail)
    it('Open The 360',LoginSpecService.init) 
    it('Login wrong Password', LoginSpecService.LoginWrongPassword)
    it('Open The 360',LoginSpecService.init) 
    it('Login Without Credential', LoginSpecService.LoginWithoutCredential)


    

});
