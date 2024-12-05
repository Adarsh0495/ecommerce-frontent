import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Core/Service/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
@ViewChild('loginform')loginform:NgForm
constructor(private userservice:UserService,private router:Router ,private toast:ToastrService){}


loginsubmit(){
  
 if(this.loginform.valid){
  
  const loginData=this.loginform.value
  let userid:string=this.loginform.value.userid
  let password:string=this.loginform.value.password
 this.userservice.logindatas.push(loginData);
 this.userservice.login(userid,password);
 this.loginform.reset();



}
}
}