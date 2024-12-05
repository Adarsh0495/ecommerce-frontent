import { Injectable } from '@angular/core';
import { user } from '../Models/user.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { userlogin } from '../Models/userlogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  showSearchBox: boolean =false
  showCart:boolean=false
  isLogged: boolean = false
  

  logindatas: object[] = []
  userlogin:userlogin[]=[]
  signupUser:user[]=[]



  constructor(private toast:ToastrService,private router:Router) {

    const localdata = localStorage.getItem('user');
    if (localdata != null) {
      this.signupUser = JSON.parse(localdata);
    }
 
   }


  signup(){
    
      localStorage.setItem('user',JSON.stringify(this.signupUser))
  }


login(userId:string,Password:string){
  this.logindatas.push(this.userlogin)
  let findUser=this.signupUser.filter(user=>user.userid===userId && user.password===Password)
if(findUser.length===0){
this.toast.error('login credentials are invalid.')
}else{this.router.navigate(['/home'])
  this.toast.success('Login successful.')
  this.isLogged = true

}
}
  

logout(){
  localStorage.removeItem('user');
}
  

}