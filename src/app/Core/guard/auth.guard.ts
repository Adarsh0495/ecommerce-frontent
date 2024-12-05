import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../Service/user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
const service:UserService=inject(UserService)
const router:Router=inject(Router)
if(service.isLogged){
  return true
}else{
  alert('You are not logged in please login')
  router.navigate(['/login'])
  return false
}

};
