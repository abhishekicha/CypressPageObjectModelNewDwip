import LoginSpecService from "./LoginSpecService";

class BaseSpecService
{
   init()
   {
     LoginSpecService.init()
     LoginSpecService.LoginAsUser()
   }
}
export default new BaseSpecService;