import { inject, Injectable } from '@angular/core';
import { user } from '../Models/user.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  adminUser:user[]=[]
  adminUsers:user[]=[]
toast=inject(ToastrService)
  constructor() { 
    const localdata=localStorage.getItem('user')

    if(localdata!=null){
      this.adminUser=JSON.parse(localdata)
      console.log(localdata);

      // if(typeof this.adminUser==='object'){
      //   this.adminUsers.push(Object.values(this.adminUser))
      // }else{
      //   this.toast.info('something went wrong')
      // }

    }
  }

   
    
   }

