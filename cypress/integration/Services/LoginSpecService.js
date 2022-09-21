import LoginPageImplementation from "../../support/pages/LoginPageImplementation";


class LoginSpecService
{  
    init()
    {
        LoginPageImplementation.getUrl()
        LoginPageImplementation.exception()
    }

    LoginAsUser()
    {
        LoginPageImplementation.enterEmail()
        LoginPageImplementation.enterPassword()
        LoginPageImplementation.submitButton()
        LoginPageImplementation.alert()
        LoginPageImplementation.launchDevServer()
    }

    LoginWrongEmail(){

        LoginPageImplementation.enterWrongEmail()
        LoginPageImplementation.enterPassword()
        LoginPageImplementation.submitButton()
    }

    LoginWrongPassword()
    {
        LoginPageImplementation.enterEmail()
        LoginPageImplementation.enterWrongPassword()
        LoginPageImplementation.submitButton()
    }
    LoginWithoutCredential()
    {
        LoginPageImplementation.submitButton()
    }

}
export default new LoginSpecService;