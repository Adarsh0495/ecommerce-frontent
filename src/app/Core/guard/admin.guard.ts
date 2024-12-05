import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const adminGuard: CanActivateFn = (route, state) => {
  const adminToken=localStorage.getItem('adminToken')
  const router:Router=inject(Router);
  const toast:ToastrService=inject(ToastrService);
  if(adminToken){
    return true;   

  }else{
    alert('You are not logged in please login')
  router.navigate(['/adminlogin'])
return false
  }

};
